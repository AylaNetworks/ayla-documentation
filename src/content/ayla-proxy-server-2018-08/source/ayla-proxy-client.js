var streamUrl = null
var streams = {}
var nextStreamId = 1
var streamPropFilter = ['url','key','beginningSeqId','endingSeqId','eventType','numEvents','numHBs']
var account = null

/*------------------------------------------------------
Stream
------------------------------------------------------*/

class Stream {
  constructor(name, url, key, eventType, bSeqId=null, eSeqId=null) {
    this.id = nextStreamId++
    this.name = name
    this.url = url
    this.key = key
    this.eventType = eventType
    this.beginningSeqId = bSeqId
    this.endingSeqId = eSeqId
    this.numEvents = 0
    this.numHBs = 0

    let fullUrl = url + '?stream_key=' + key
    if(bSeqId) {
      fullUrl += '&seq_start=' + bSeqId
      if(eSeqId) {
        fullUrl += '&seq_end=' + eSeqId
      }
    }
    this.socket = new WebSocket(fullUrl)
  }
}

/*------------------------------------------------------
processEvent
------------------------------------------------------*/

function processEvent(stream, event) {
  var value = ''

  switch(event.metadata.event_type) {
    case 'connectivity':
    value = event.connection.status
    break

    case 'datapoint':
    value = event.datapoint.value
    if(value.length > 20) {value = value.slice(0, 20) + ' ...'}
      value = event.metadata.display_name + ' = ' + value
    break

    case 'datapointack':
    value = event.datapointack.value
    if(value.length > 20) {value = value.slice(0, 20) + ' ...'}
      value = event.metadata.display_name + ' = ' + value
    break

    case 'location':
    value = 'lat = ' + event.location_event.lat + ', long = ' + event.location_event.long
    break

    case 'registration':
    value = event.registration_event.registered
    break

    default:
    break
  }

  displayEvent(stream, event, value)
}

/*------------------------------------------------------
Delete Events
------------------------------------------------------*/

$(function() {
  $('#delete-events-btn').click(function(event) {
    $('#events tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#events tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      let tr1 = $(checkbox).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()
    })
  })
})

/*------------------------------------------------------
Delete Event Streams
------------------------------------------------------*/

$(function() {
  $('#delete-event-streams-btn').click(function(event) {
    $('#event-streams tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#event-streams tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      let key = $(checkbox).val()
      streams[key].socket.close()
      delete streams[key]
      let tr1 = $(checkbox).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()
    })
  })
})

/*------------------------------------------------------
Display Event Stream Details
------------------------------------------------------*/

$(function() {
  $("#event-streams").delegate('tr td:not(.chk)', "click", function(e) {
    let tr1 = $(this).parent()
    let tr2 = $(tr1).next()
    let key = $(tr1).find('input').val()
    let pre = $(tr2).find('pre')
    $(pre).empty()
    $(pre).append(JSON.stringify(streams[key], streamPropFilter, 2))
    $(tr2).toggle()
  })
})

/*------------------------------------------------------
Display Details
------------------------------------------------------*/

$(function() {
  $("body").delegate('tr.simple-details td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
displayEvent
------------------------------------------------------*/

function displayEvent(stream, event, value) {

  let item = ''
  + '<tr class="summary simple-details">'
  + '<td class="chk"><input type="checkbox"></td>'
  + '<td>' + stream.id + '</td>'
  + '<td>' + event.seq + '</td>'
  + '<td>' + event.metadata.event_type + '</td>'
  + '<td>' + event.metadata.dsn.substr(event.metadata.dsn.length - 3) + '</td>'
  + '<td>' + value + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=5><pre>' + JSON.stringify(event, null, 2) + '</pre></td>'
  + '</tr>'
  $('#events > tbody').prepend(item)

  if(event.metadata.event_type === 'datapoint') {
    let selected = $('#select-property option:selected')
    let property = $(selected).data('details')
    if(property.name === event.metadata.property_name) {
      updatePropertyValue(event.metadata.base_type, event.datapoint.value)
    }
  }
}

/*------------------------------------------------------
displayEventStream
------------------------------------------------------*/

function displayEventStream(stream) {
  let item = ''
  + '<tr id="ID' + stream.key + '" class="summary">'
  + '<td class="chk"><input type="checkbox" value="' + stream.key + '"></td>'
  + '<td>' + stream.id + '</td>'
  + '<td class="name">' + stream.name + '</td>'
  + '<td class="numEvents">0</td>'
  + '<td class="numHBs">0</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=4><pre>s</pre></td>'
  + '</tr>'
  $('#event-streams > tbody').append(item)
}

/*------------------------------------------------------
monitorEventStream
------------------------------------------------------*/

function monitorEventStream(stream) {

  stream.socket.onopen = function(msg) {
    console.log('onopen for stream key ' + stream.key)
  }

  stream.socket.onerror = function(msg) {
    console.log('onerror and error is ' + msg)
  }

  stream.socket.onmessage = function(msg) {

    if(msg.data.includes('|Z')) {
      stream.socket.send('Z')
      stream.numHBs++
      $('#ID' + stream.key).children('td.numHBs').first().html(stream.numHBs)
    }

    else {
      var arr = msg.data.split('|')
      if(arr.length != 2) {
        console.log('ERROR: Event split into ' + arr.length + 'substrings.')
        return
      }
      let event = JSON.parse(arr[1])
      // stream.eventType = event.metadata.event_type
      stream.numEvents++
      $('#ID' + stream.key).children('td.numEvents').first().html(stream.numEvents)
      processEvent(stream, event)
    }
  }

  stream.socket.onclose = function(msg) {
    console.log('onclose for stream key ' + stream.key)
  }
}

/*------------------------------------------------------
createDatapoint
------------------------------------------------------*/

function createDatapoint(propertyId, value) {
  MyAyla.createDatapoint(propertyId, value, function (data) {
    console.log('propertyId = ' + propertyId + ', value = ' + data.datapoint.value)
  }, displayError)
}

/*------------------------------------------------------
createNode
------------------------------------------------------*/

function createNode(dsn, candidateRow) {
  MyAyla.createNode(account.uuid, dsn, function (data) {
    let tr2 = $(candidateRow).next()
    $(candidateRow).remove()
    $(tr2).remove()
    displayNode(data.device)
  }, displayError)
}

/*------------------------------------------------------
displayMessage
------------------------------------------------------*/

function displayError(status) {
  displayMessage(status.code + ' ' + status.text)
}

function displayMessage(msg) {
  $('#msg-box span').html(msg)
  $('#msg-box').show()
}

$(function() {
  $('#msg-box button').click(function(event) {
    $('#msg-box').hide()
  })
})

/*------------------------------------------------------
displayPropertyValue
------------------------------------------------------*/

function displayPropertyValue(type, value, direction) {

  $('#value-label').show()
  $('#value-wrapper').show()

  let status = (direction==='input') ? '>' : ' disabled>'

  switch(type) {
    case 'boolean':
    $('#value-button-wrapper').hide()

    let checked = (value===1) ? ' checked' : ''

    $('#value-wrapper').empty().append(''
      + '<label class="switch" style="margin-bottom:0;">'
      + '<input id="property-value" type="checkbox" value="' + value + '"' + checked + status
      + '<span class="slider round"></span>'
      + '</label>')
    break

    default:
    $('#value-wrapper').empty().append('<input id="property-value" type="text" class="form-control form-control-sm mr-sm-2" value="' + value + '"' + status)
    if(direction==='input') {
      $('#value-button-wrapper').show()
    } else {
      $('#value-button-wrapper').hide()
    }
    break
  }
}

/*------------------------------------------------------
updatePropertyValue
------------------------------------------------------*/

function updatePropertyValue(type, value) {
  switch(type) {
    case 'boolean':
    $('#property-value').prop('checked', value)
    break

    default:
    $('#property-value').val(value)
    break
  }
}

/*------------------------------------------------------
displayAccessRule
------------------------------------------------------*/

function displayAccessRule(rule) {
  let item = ''
  + '<tr class="summary simple-details">'
  + '<td class="chk"><input type="checkbox" value="' + rule.id + '"></td>'
  + '<td>' + rule.oem_model + '</td>'
  + '<td>' + rule.property_name + '</td>'
  + '<td>' + rule.subscription_type + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan="4"><pre>' + JSON.stringify(rule, null, 2) + '</pre></td>'
  + '</tr>'
  $('#access-rules > tbody').append(item)
}

/*------------------------------------------------------
Delete Access Rule
------------------------------------------------------*/

$(function() {
  $('#delete-access-rules-btn').click(function(event) {
    $('#access-rules tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#access-rules tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      MyAyla.deleteAccessRule($(checkbox).val(), function(data) {
        let tr1 = $(checkbox).closest('tr')
        let tr2 = $(tr1).next()
        $(tr1).remove()
        $(tr2).remove()
      }, displayError)
    })
  })
})

/*------------------------------------------------------
Select All / Deselect All
------------------------------------------------------*/

$(function() {
  $('table thead tr th input[type=checkbox]').click(function(event) {
    let table = $(this).closest('table')
    if($(this).prop('checked')) {
      $(table).find('tbody tr td input[type=checkbox]').prop('checked', true)
    } else {
      $(table).find('tbody tr td input[type=checkbox]').prop('checked', false)
    }
  })
})

/*------------------------------------------------------
displaySubscription
------------------------------------------------------*/

function displaySubscription(subscription) {

  var tr = $('<tr/>').addClass('summary simple-details')
  var input = $('<input/>').prop('type', 'checkbox').val(subscription.id).data('details', subscription)
  var td = $('<td/>').addClass('chk')
  td.append(input)
  tr.append(td)
  tr.append('<td>' + subscription.name + '</td>')
  $('#subscriptions > tbody').append(tr)
  tr = $('<tr/>').addClass('details').css('display', 'none')
  tr.append('<td>&nbsp;</td>')
  tr.append('<td><pre>' + JSON.stringify(subscription, null, 2) + '</pre></td>')
  $('#subscriptions > tbody').append(tr)

  // console.log(tr.get(0).outerHTML)

  var option = $('<option/>')
  option.text(subscription.name)
  option.val(subscription.id)
  option.data('details', subscription)
  $('#add-event-stream-subscription').append(option)
}

/*------------------------------------------------------
Delete Subscriptions
------------------------------------------------------*/

$(function() {
  $('#delete-subscriptions-btn').click(function(event) {
    $('#subscriptions tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#subscriptions tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      MyAyla.deleteSubscription($(checkbox).val(), function(data) {
        let tr1 = $(checkbox).closest('tr')
        let tr2 = $(tr1).next()
        $(tr1).remove()
        $(tr2).remove()

        $('#add-event-stream-subscription option[value=' + $(checkbox).val() + ']').remove()

      }, displayError)
    })
  })
})

/*------------------------------------------------------
Deploy Subscriptions
------------------------------------------------------*/

$(function() {
  $('#deploy-subscriptions-btn').click(function(event) {
    $('#subscriptions tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#subscriptions tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      $(checkbox).prop('checked', false).prop( "disabled", true )
      let subscription = $(checkbox).data('details')
      let name = subscription.name
      let key = subscription.stream_key
      let eventType = subscription.subscription_type
      streams[key] = new Stream(name, streamUrl, key, eventType)
      monitorEventStream(streams[key])
      displayEventStream(streams[key])
    })
  })
})

/*------------------------------------------------------
getAccessRules
------------------------------------------------------*/

function getAccessRules() {
  MyAyla.getAccessRules(function (rules) {
    $('#access-rules > tbody').empty()
    rules.forEach(function(data) {
      displayAccessRule(data.OemAccessRule)
    })
  }, displayError)
}

/*------------------------------------------------------
getDssUrl
------------------------------------------------------*/

function getDssUrl() {
  MyAyla.getDssDomain(function (dssDomain) {
    streamUrl = 'wss://' + dssDomain + '/stream'
  }, displayError)
}

/*------------------------------------------------------
getSubscriptions
------------------------------------------------------*/

function getSubscriptions() {
  MyAyla.getSubscriptions(function (subscriptions) {
    $('#subscriptions > tbody').empty()
    $('#add-event-stream-subscription').empty()
    subscriptions.forEach(function(data) {
      displaySubscription(data.subscription)
    })
  }, displayError)
}

/*------------------------------------------------------
getServerConfiguration
------------------------------------------------------*/

function getServerConfiguration() {
  MyAyla.getServerConfiguration(function (data) {
    $('#ayla-proxy-server-description').empty().html(''
      + 'This application is communicating with an <code>Ayla Proxy Server</code> hosted at <code>' + data.server.domain + '</code>.'
      + ' This particular <code>Ayla Proxy Server</code> is configured to communicate with'
      + ' the <code>' + data.server.region + ' ' + data.server.deployment_type + '</code> Ayla Cloud.')
    $('#ayla-proxy-server-config').empty().html(JSON.stringify(data, null, 2))
  }, displayError)
}

/*------------------------------------------------------
getAccount
------------------------------------------------------*/

function getAccount() {
  MyAyla.getAccount(function (data) {
    account = data
    getDssUrl()
    getAccessRules()
    getSubscriptions()
    getDevices()
    getServerConfiguration()
  }, displayError)
}

/*------------------------------------------------------
getDeviceAttributes
------------------------------------------------------*/
/*
function getDeviceAttributes(deviceId) {
  MyAyla.getDevice(deviceId, function (data) {
    $('#device-attributes > tbody').empty()
    $.each(data.device, function( key, value ) {
      if(!Array.isArray(value)) {
        displayDeviceAttribute(key, value)
      }
    })
  }, displayError)
}
*/
/*------------------------------------------------------
getDevice
------------------------------------------------------*/

function getDevice(deviceId) {
  MyAyla.getDevice(deviceId, function (data) {
    $('#device-attributes > tbody').empty()
    $.each(data.device, function( key, value ) {
      if(!Array.isArray(value)) {
        displayDeviceAttribute(key, value)
      }
    })
    getProperties(data.device.key)
    getNodes(data.device.dsn)
    getCandidates(data.device.dsn)
  }, displayError)
}

/*------------------------------------------------------
getDevices
------------------------------------------------------*/

function getDevices() {
  let filter = {}
  filter.per_page = $('#device-filter-per-page').val()
  filter.page = $('#device-filter-page').val()
  filter.order_by = $('#device-filter-order-by').val()
  filter.order = $('#device-filter-order').val()
  if($('#device-filter-type').val() !== 'all') {
    filter.device_type = $('#device-filter-type').val()
  }
  if($('#device-filter-role').val() === 'user') {
    filter.user_uuid = account.uuid
  }
  if($('#device-filter-status').val()) {
    filter.status = $('#device-filter-status').val()
  }
  // console.log(JSON.stringify(filter, null, 2))

  MyAyla.getDevices(filter, function (result) {
    // console.log(JSON.stringify(result, null, 2))
    $('#select-device').empty()
    if(result.devices.length) {
      var deviceId = result.devices[0].device.key
      $.each(result.devices, function(index, data) {
        var option = $('<option/>')
        option.text(data.device.product_name)
        option.val(data.device.key)
        option.data('details', data.device)
        $('#select-device').append(option)
      })
      $('#device-filter-page').empty()
      let pageCount = Math.ceil(result.total/filter.per_page)
      for(var i=0; i < pageCount; i++) {
        var option = $('<option/>')
        option.text(i+1)
        option.val(i+1)
        $('#device-filter-page').append(option)
      }
      $('#device-filter-page').prop("selectedIndex", result.current_page_number - 1)
      $('#device-filter-total').val(result.total)
      getDevice(deviceId)
    }
  }, displayError)
}

/*------------------------------------------------------
getCandidates
------------------------------------------------------*/

function getCandidates(dsn) {
  MyAyla.getCandidates(dsn, function (arr) {
    $('#candidates > tbody').empty()
    if(arr.length) {
      $.each(arr, function(index, data) {
        displayCandidate(data.device)
      })
    }
  }, displayError)
}

/*------------------------------------------------------
displayCandidate
------------------------------------------------------*/

function displayCandidate(device) {
  let item = ''
  + '<tr class="summary simple-details">'
  + '<td class="chk"><input type="checkbox" value="' + device.dsn + '"></td>'
  + '<td>' + device.product_name + '</td>'
  + '<td>' + device.oem_model + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=2><pre>' + JSON.stringify(device, null, 2) + '</pre></td>'
  + '</tr>'
  $('#candidates > tbody').append(item)
}

/*------------------------------------------------------
displayDeviceAttribute
------------------------------------------------------*/

function displayDeviceAttribute(key, value) {
  let item = ''
  + '<tr>'
  + '<td class="chk"><input type="checkbox" value="' + 1 + '"></td>'
  + '<td>' + key + '</td>'
  + '<td>' + value + '</td>'
  + '</tr>'
  $('#device-attributes > tbody').append(item)
}

/*------------------------------------------------------
displayPropertyAttribute
------------------------------------------------------*/

function displayPropertyAttribute(key, value) {
  let item = ''
  + '<tr>'
  + '<td class="chk"><input type="checkbox" value="' + 1 + '"></td>'
  + '<td>' + key + '</td>'
  + '<td>' + value + '</td>'
  + '</tr>'
  $('#property-attributes > tbody').append(item)
}

/*------------------------------------------------------
displayProperty
------------------------------------------------------*/

function displayProperty(property) {
  let item = ''
  + '<tr class="summary simple-details">'
  + '<td class="chk"><input type="checkbox" value="' + property.key + '"></td>'
  + '<td>' + property.display_name + '</td>'
  + '<td>' + property.base_type + '</td>'
  + '<td>' + property.direction + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=3><pre>' + JSON.stringify(property, null, 2) + '</pre></td>'
  + '</tr>'
  $('#device-properties > tbody').append(item)
}

/*------------------------------------------------------
getNodes
------------------------------------------------------*/

function getNodes(dsn) {
  MyAyla.getNodes(dsn, function (arr) {
    $('#nodes > tbody').empty()
    if(arr.length) {
      $.each(arr, function(index, data) {
        displayNode(data.device)
      })
    }
  }, displayError)
}

/*------------------------------------------------------
displayNode
------------------------------------------------------*/

function displayNode(device) {
  let item = ''
  + '<tr class="summary simple-details">'
  + '<td class="chk"><input type="checkbox" value="' + device.dsn + '"></td>'
  + '<td>' + device.product_name + '</td>'
  + '<td>' + device.oem_model + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=2><pre>' + JSON.stringify(device, null, 2) + '</pre></td>'
  + '</tr>'
  $('#nodes > tbody').prepend(item)
}

/*------------------------------------------------------
getDatapoints
------------------------------------------------------*/

function getDatapoints(propertyId) {
  MyAyla.getDatapoints(propertyId, function (arr) {
    $('#property-datapoints > tbody').empty()
    if(arr.length) {
      $.each(arr, function(index, data) {
        displayDatapoint(data.datapoint)
      })
    }
  }, displayError)
}

/*------------------------------------------------------
displayDatapoint
------------------------------------------------------*/

function displayDatapoint(datapoint) {
  let item = ''
  + '<tr class="summary simple-details">'
  + '<td class="chk"><input type="checkbox"></td>'
  + '<td>' + datapoint.created_at + '</td>'
  + '<td>' + datapoint.value + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=2><pre>' + JSON.stringify(datapoint, null, 2) + '</pre></td>'
  + '</tr>'
  $('#property-datapoints > tbody').prepend(item)
}

/*------------------------------------------------------
getPropertyAttributes
------------------------------------------------------*/

function getPropertyAttributes(propertyId) {
  MyAyla.getProperty(propertyId, function (data) {
    $('#property-attributes > tbody').empty()
    $.each(data.property, function( key, value ) {
      if(!Array.isArray(value)) {
        displayPropertyAttribute(key, value)
      }
    })
  }, displayError)
}

/*------------------------------------------------------
getProperty
------------------------------------------------------*/

function getProperty(propertyId) {
  MyAyla.getProperty(propertyId, function (data) {

    $('#property-attributes > tbody').empty()
    $.each(data.property, function( key, value ) {
      if(!Array.isArray(value)) {
        displayPropertyAttribute(key, value)
      }
    })

    getDatapoints(propertyId)

    displayPropertyValue(data.property.base_type, data.property.value, data.property.direction)
  }, displayError)
}

/*------------------------------------------------------
getProperties
------------------------------------------------------*/

function getProperties(deviceId) {
  MyAyla.getProperties(deviceId, function (arr) {
    $('#select-property').empty()
    $('#device-properties > tbody').empty()
    if(arr.length) {
      var propertyId = arr[0].property.key
      var type = arr[0].property.base_type
      var value = arr[0].property.value
      var direction = arr[0].property.direction
      $.each(arr, function(index, data) {
        var option = $('<option/>')
        option.text(data.property.display_name)
        option.val(data.property.key)
        option.data('details', data.property)
        $('#select-property').append(option)
        displayProperty(data.property)
      })
    }
    getProperty(propertyId)
  }, displayError)
}

/*------------------------------------------------------
login
------------------------------------------------------*/

$(function() {
  $('#login-form' ).submit(function(event) {
    event.preventDefault()
    $('body').trigger('click')
    var email = $('#email').val()
    var password = $('#password').val()
    var appId = $('#appId').val()
    var appSecret = $('#appSecret').val()
    MyAyla.login(email, password, appId, appSecret, function(data) {
      $('#account-link').html('Logout')
      getAccount()
    }, displayError)
  })
})

/*------------------------------------------------------
logout
------------------------------------------------------*/

$(function() {
  $('#logout-form' ).submit(function(event) {
    event.preventDefault()
    emptyAll()
    MyAyla.logout(function (data) {
      $('#account-link').html('Login')
    }, displayError)
  })
})

/*------------------------------------------------------
Get Device List - Submit
------------------------------------------------------*/
/*
$(function() {
  $('#device-filter-form').submit(function(event) {
    getDevices()
  })
})
*/
/*------------------------------------------------------
Add Access Rule - Submit
------------------------------------------------------*/

$(function() {
  $('#add-access-rule-form').submit(function(event) {

    let oemModel = $('#add-access-rule-oem-model').val()
    if(!oemModel) {oemModel = '*'}
    let propertyName = $('#add-access-rule-property-name').val()
    if(!propertyName) {propertyName = "*"}

    let data = {
      "subscription_type": $('#add-access-rule-subscription-type').val(),
      "role": $('#add-access-rule-role').val(),
      "oem_model": oemModel,
      "property_name": propertyName,
      "client_type": $('#add-subscription-client-type').val()
    }

    MyAyla.createAccessRule(data, function (data) {
      displayAccessRule(data.OemAccessRule)
    }, displayError)

    $('#add-access-rule-form').get(0).reset()
    $('#add-access-rule-row').hide()
  })
})

/*------------------------------------------------------
On Click Register Candidates
------------------------------------------------------*/

$(function() {
  $('#register-candidates-btn').click(function(event) {
    $('#candidates tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#candidates tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      let dsn = $(checkbox).val()
      createNode(dsn, $(checkbox).closest('tr'))
    })
  })
})

/*------------------------------------------------------
Add Subscription - Submit
------------------------------------------------------*/

$(function() {
  $('#add-subscription-form').submit(function(event) {

    let oemModel = $('#add-subscription-oem-model').val()
    if(!oemModel) {oemModel = '*'}
    let dsn = $('#add-subscription-dsn').val()
    if(!dsn) {dsn = '*'}
    let propertyName = $('#add-subscription-property-name').val()
    if(!propertyName) {propertyName = "*"}

    let data = {
      "name": $('#add-subscription-name').val(),
      "description": $('#add-subscription-description').val(),
      "subscription_type": $('#add-subscription-subscription-type').val(),
      "oem_model": oemModel,
      "dsn": dsn,
      "property_name": propertyName,
      "client_type": $('#add-subscription-client-type').val()
    }

    MyAyla.createSubscription(data, function (data) {
      displaySubscription(data.subscription)
    }, displayError)

    $('#add-subscription-form').get(0).reset()
    $('#add-subscription-row').hide()
  })
})

/*------------------------------------------------------
Add Event Stream - Submit
------------------------------------------------------*/

$(function() {
  $('#add-event-stream-form').submit(function(event) {

    let subscription = $('#add-event-stream-subscription option:selected').data("details")
    let name = subscription.name
    let key = subscription.stream_key
    let eventType = subscription.subscription_type
    let bSeqId = $('#add-event-stream-beginning-seqid').val()
    let eSeqId = $('#add-event-stream-ending-seqid').val()

    streams[key] = new Stream(name, streamUrl, key, eventType, bSeqId, eSeqId)
    monitorEventStream(streams[key])
    displayEventStream(streams[key])

    $('#add-event-stream-form').get(0).reset()
    $('#add-event-stream-row').hide()
  })
})

/*------------------------------------------------------
On Click Close Login/Logout
------------------------------------------------------*/

$(function() {$('.click-body').click(function(event) {$('body').trigger('click')})})

/*------------------------------------------------------
On Click Login/Logout
------------------------------------------------------*/

$(function() {
  $('#account-link').click(function(event) {
    if(MyAyla.isLoggedIn()) {
      $('#login-form').hide()
      $('#logout-form').show()
    } else {
      let appId = MyAyla.getAppId()
      if(appId) {$('#appId').val(appId)}
      let appSecret = MyAyla.getAppSecret()
      if(appSecret) {$('#appSecret').val(appSecret)}
      $('#login-form').show()
      $('#logout-form').hide()
    }
  })
})

/*------------------------------------------------------
On Change Datapoint (for boolean properties)
On Click Datapoint (for non-boolean properties)
------------------------------------------------------*/

$(function() {
  $('#value-wrapper').delegate('input:checkbox', "change", function(event) {
    $(this).blur()
    let selected = $('#select-property option:selected')
    let propertyId = $(selected).val()
    let value = $(this).prop('checked') + 0
    createDatapoint(propertyId, value)
  })
})

$(function() {
  $('#save-property-value').click(function(event) {
    let selected = $('#select-property option:selected')
    let propertyId = $(selected).val()
    let value = $('#value-wrapper input').val()
    createDatapoint(propertyId, value)
  })
})

/*------------------------------------------------------
On Change Device
------------------------------------------------------*/

$(function() {
  $( "#select-device" ).change(function() {
    $(this).blur()
    let selected = $('#select-device option:selected')
    let deviceId = $(selected).val()
    getDevice(deviceId)
  })
})

/*------------------------------------------------------
On Change Property
------------------------------------------------------*/

$(function() {
  $( "#select-property" ).change(function() {
    $(this).blur()
    var selected = $('#select-property option:selected')
    let propertyId = $(selected).val()
    getProperty(propertyId)
  })
})

/*------------------------------------------------------
On Load
------------------------------------------------------*/

$(function() {
  if(MyAyla.isLoggedIn()) {
    $('#account-link').html('Logout')
    getAccount()
  } else {
    $('#account-link').html('Login')
    getServerConfiguration()
  }
})

/*------------------------------------------------------
On Change Device Filter
------------------------------------------------------*/

$(function() {
  $( "#device-filter-form select" ).change(function() {
    getDevices()
  })
})

/*------------------------------------------------------
emptyAll
------------------------------------------------------*/

function emptyAll() {
  $('body').trigger('click')
  $('#select-device').empty()
  $('#select-property').empty()
  $('#value-label').hide()
  $('#value-wrapper').hide()
  $('#value-button-wrapper').hide()
  $('#access-rules > tbody').empty()
  $('#subscriptions > tbody').empty()
  $('#device-properties > tbody').empty()
  $('#device-attributes > tbody').empty()
  $('#property-attributes > tbody').empty()
  $('#property-datapoints > tbody').empty() 
  $('#candidates > tbody').empty()
  $('#nodes > tbody').empty() 
}
