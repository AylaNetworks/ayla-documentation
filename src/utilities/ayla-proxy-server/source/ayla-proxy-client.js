var streamUrl = null
var streams = {}
var nextStreamId = 1
var streamPropFilter = ['url','key','beginningSeqId','endingSeqId','eventType','numEvents','numHBs']

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
Display Event Details
------------------------------------------------------*/

$(function() {
  $("#events").delegate('tr td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
displayEvent
------------------------------------------------------*/

function displayEvent(stream, event, value) {
  let item = ''
  + '<tr class="summary">'
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
    $('#value-wrapper').empty().append('<input id="property-value" type="text" class="form-control form-control-sm" value="' + value + '"' + status)
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

  console.log('The value is ' + value)

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
  + '<tr class="summary">'
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
Display Access Rule Details
------------------------------------------------------*/

$(function() {
  $("#access-rules").delegate('tr.summary td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
Display Candidate Details
------------------------------------------------------*/

$(function() {
  $("#candidates").delegate('tr.summary td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

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

  var tr = $('<tr/>').addClass('summary')
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
Display Subscription Details
------------------------------------------------------*/

$(function() {
  $("#subscriptions").delegate('tr.summary td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

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
getDevice
------------------------------------------------------*/

function getDevice(deviceId) {
  MyAyla.getDevice(deviceId, function (data) {
    $('#device-details-collapse').empty().append('<pre>' + JSON.stringify(data.device, null, 2) + '</pre>')
    getProperties(data.device.key)
    getNodes(data.device.dsn)
    getCandidates(data.device.dsn)
  }, displayError)
}

/*------------------------------------------------------
getDevices
------------------------------------------------------*/

function getDevices() {
  MyAyla.getDevices(function (arr) {
    $('#select-device').empty()
    if(arr.length) {
      var deviceId = arr[0].device.key
      $.each(arr, function(index, data) {
        var option = $('<option/>')
        option.text(data.device.product_name)
        option.val(data.device.key)
        option.data('details', data.device)
        $('#select-device').append(option)
      })
    }
    getDevice(deviceId)
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
  + '<tr id="ID' + device.dsn + '" class="summary">'
  + '<td class="chk"><input type="checkbox" value="' + device.dsn + '"></td>'
  + '<td>' + device.product_name + '</td>'
  + '<td class="name">' + device.oem_model + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=2><pre>' + JSON.stringify(device, null, 2) + '</pre></td>'
  + '</tr>'
  $('#candidates > tbody').append(item)
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

console.log(JSON.stringify(device, null, 2))

  let item = ''
  + '<tr id="ID' + device.dsn + '" class="summary">'
  + '<td class="chk"><input type="checkbox" value="' + device.dsn + '"></td>'
  + '<td>' + device.product_name + '</td>'
  + '<td class="name">' + device.oem_model + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=2><pre>' + JSON.stringify(device, null, 2) + '</pre></td>'
  + '</tr>'
  $('#nodes > tbody').append(item)
}

/*------------------------------------------------------
Display Nodes Details
------------------------------------------------------*/

$(function() {
  $("#nodes").delegate('tr.summary td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
getProperty
------------------------------------------------------*/

function getProperty(propertyId) {
  MyAyla.getProperty(propertyId, function (data) {
    $('#property-details-collapse').empty().append('<pre>' + JSON.stringify(data.property, null, 2) + '</pre>')
    displayPropertyValue(data.property.base_type, data.property.value, data.property.direction)
  }, displayError)
}

/*------------------------------------------------------
getProperties
------------------------------------------------------*/

function getProperties(deviceId) {
  MyAyla.getProperties(deviceId, function (arr) {
    $('#select-property').empty()
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
      getAccessRules()
      getSubscriptions()
      getDevices()
    }, displayError)
  })
})

/*------------------------------------------------------
logout
------------------------------------------------------*/

$(function() {
  $('#logout-form' ).submit(function(event) {
    event.preventDefault()
    $('body').trigger('click')
    $('#select-device').empty()
    $('#select-property').empty()
    $('#value-label').hide()
    $('#value-wrapper').hide()
    $('#value-button-wrapper').hide()
    $('#access-rules > tbody').empty()
    $('#subscriptions > tbody').empty()
    MyAyla.logout(function (data) {
      $('#account-link').html('Login')
    }, displayError)
  })
})

/*------------------------------------------------------
Add Access Rule - Open
------------------------------------------------------*/

$(function() {
  $('#add-access-rule-btn').click(function(event) {
    $('#add-access-rule-row').show()
  })
})

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
Add Access Rule - Cancel
------------------------------------------------------*/

$(function() {
  $('#add-access-rule-form .close-me').click(function(event) {
    $('#add-access-rule-form').get(0).reset()
    $('#add-access-rule-row').hide()
  })
})

/*------------------------------------------------------
Add Subscription - Open
------------------------------------------------------*/

$(function() {
  $('#add-subscription-btn').click(function(event) {
    $('#add-subscription-row').show()
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
Add Subscription - Cancel
------------------------------------------------------*/

$(function() {
  $('#add-subscription-form .close-me').click(function(event) {
    $('#add-subscription-form').get(0).reset()
    $('#add-subscription-row').hide()
  })
})

/*------------------------------------------------------
Add Event Stream - Open
------------------------------------------------------*/

$(function() {
  $('#add-event-stream-btn').click(function(event) {
    $('#add-event-stream-row').show()
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
Add Event Stream - Cancel
------------------------------------------------------*/

$(function() {
  $('#add-event-stream-form .close-me').click(function(event) {
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
    getDssUrl()
    getAccessRules()
    getSubscriptions()
    getDevices()
  } else {
    $('#account-link').html('Login')
  }
})

/*------------------------------------------------------
On Click Refresh Devices
------------------------------------------------------*/

$(function() {
  $('#refresh-devices').click(function(event) {
    getDevices()
  })
})

/*------------------------------------------------------
On Click Refresh Candidates
------------------------------------------------------*/

$(function() {
  $('#refresh-candidates').click(function(event) {
    getCandidates($('#select-device option:selected').data('details').dsn)
  })
})
