streamUrl = 'wss://stream.aylanetworks.com/stream'
var streams = {}
var nextStreamId = 1
var streamPropFilter = ['url','key','beginningSeqId','endingSeqId','eventType','numEvents','numHBs']

/*
createThings        loop on createThing
createThing         post to Ayla or open stream; addThing

deleteThings        loop on deleteThing
deleteThing         delete from Ayla or close stream; remove one from DOM

populateThings      remove all; get from Ayla; addThings
populateThing       

addThings           loop on addThing
addThing            add one to DOM

removeThings        remove some/all from DOM
removeThing         remove one from DOM

toggleThingDetails  display:none and display:block

other
*/

/*------------------------------------------------------
createTemplate
------------------------------------------------------*/

function createTemplate() {

  let data = {
    "template":
    {
      "visibility":$('#create-template-visibility').val(),
      "registration_type":$('#create-template-registration-method').val(),
      "template_type":"Wifi",
      "gateway_type":"Zigbee",
      "name":$('#create-template-name').val(),
      "description":"Test Template Description",
      "model":$('#create-template-oem-model').val(),
      "version":$('#create-template-version').val()
    }
  }

  MyAyla.createTemplate(data, function(response) {
    /*
    {
      "template": {
        "id": 106933
      }
    }
    */
  }, displayError)

  $('#create-template-form').get(0).reset()
  $('#create-template-form-collapse').collapse('hide')
}

$(function() {
  $('#create-template-form').submit(function(event) {
    createTemplate()
  })
})

/*------------------------------------------------------
deleteTemplates
------------------------------------------------------*/

function deleteTemplates() {
}

/*------------------------------------------------------
deleteTemplate
------------------------------------------------------*/

function deleteTemplate(checkbox) {
  MyAyla.deleteTemplate($(checkbox).val(), function() {
    $(checkbox).remove()
  }, displayError)
}

$(function() {
  $('#delete-template-btn').click(function(event) {
    var option = $('#select-template option:selected')
    var template = option.data('details')
    if(confirm('Delete ' + template.name + '?')) {
      deleteTemplate(option)
    }
  })
})

/*------------------------------------------------------
populateTemplates
------------------------------------------------------*/

function populateTemplates() {
  MyAyla.getTemplates(function (response) {

    removeTemplates()

    response.sort(function(a, b) {
      const namea = a.template.name.toUpperCase()
      const nameb = b.template.name.toUpperCase()  
      let comparison = 0
      if (namea > nameb) {
        comparison = 1
      } else if (namea < nameb) {
        comparison = -1
      }
      return comparison;
    })

    let template = response[0].template
    addTemplates(response)
    populateTemplate(template)

  }, displayError)
}

$(function () {
  $('#select-template').on('populate', function(event) {
    populateTemplates()
  })
})

/*------------------------------------------------------
populateTemplate
------------------------------------------------------*/

function populateTemplate(template) {
  $('#template-details').text(JSON.stringify(template, null, 2))
}

/*------------------------------------------------------
addTemplates
------------------------------------------------------*/

function addTemplates(response) {
  response.forEach(function(data) {
    addTemplate(data.template)
  })
}

/*------------------------------------------------------
addTemplate
------------------------------------------------------*/

function addTemplate(template) {
  var option = $('<option/>')
  option.text(template.name)
  option.val(template.id)
  option.data('details', template)
  $('#select-template').append(option)
}

/*------------------------------------------------------
removeTemplates
------------------------------------------------------*/

function removeTemplates() {
  $('#select-template').empty()
}

$(function () {
  $('#select-template').on('remove-all', function(event) {
    removeTemplates()
  })
})

/*------------------------------------------------------
On Change Template
------------------------------------------------------*/

$(function() {
  $( "#select-template" ).change(function() {
    let selected = $('#select-template option:selected')
    let template = $(selected).data('details')
    populateTemplate(template)
  })
})

/*------------------------------------------------------
populateDevices
------------------------------------------------------*/

function populateDevices() {
  let filter = {}
  filter.per_page = 10
  filter.page = 1
  filter.order_by = 'product_name'
  filter.order = 'asc'
  filter.user_uuid = MyAyla.getUserId()
  MyAyla.getDevices(filter, function (response) {

    removeDevices()

    if(response.devices.length) {
      let deviceId = response.devices[0].device.key
      addDevices(response)
      populateDevice(deviceId)
    }
  }, displayError)
}

$(function () {
  $('#dt-device-selector').on('populate', function(event) {
    populateDevices()
  })
})

/*------------------------------------------------------
populateDevice
------------------------------------------------------*/

function populateDevice(deviceId) {
  MyAyla.getDevice(deviceId, function (data) {
    $('#dt-device-details').text(JSON.stringify(data.device, null, 2))
  }, displayError)
  populateProperties(deviceId)
}

/*------------------------------------------------------
addDevices
------------------------------------------------------*/

function addDevices(response) {
  response.devices.forEach(function(data) {
    addDevice(data.device)
  })
}

/*------------------------------------------------------
addDevice
------------------------------------------------------*/

function addDevice(device) {
  var option = $('<option/>')
  option.text(device.product_name)
  option.val(device.key)
  option.data('details', device)
  $('#dt-device-selector').append(option)
}

/*------------------------------------------------------
removeDevices
------------------------------------------------------*/

function removeDevices() {
  $('#dt-device-selector').empty()
  $('#dt-property-selector').empty()
}

$(function () {
  $('#dt-device-selector').on('remove-all', function(event) {
    removeDevices()
    $('#dt-value-wrapper').empty().append('<input type="text" class="form-control form-control-sm" disabled>')
    $('#dt-value-button-wrapper').hide()
  })
})

/*------------------------------------------------------
On Change Device
------------------------------------------------------*/

$(function() {
  $( "#dt-device-selector" ).change(function() {
    $(this).blur()
    let selected = $('#dt-device-selector option:selected')
    let deviceId = $(selected).val()
    populateDevice(deviceId)
  })
})

/*------------------------------------------------------
populateProperties
------------------------------------------------------*/

function populateProperties(deviceId) {
  MyAyla.getProperties(deviceId, function (arr) {

    removeProperties()

    if(arr.length) {
      let propertyId = arr[0].property.key
      addProperties(arr)
      populateProperty(propertyId)
    }

  }, displayError)
}

/*------------------------------------------------------
populateProperty
------------------------------------------------------*/

function populateProperty(propertyId) {
  MyAyla.getProperty(propertyId, function (data) {
    $('#dt-property-details').text(JSON.stringify(data.property, null, 2))
    displayPropertyValue(data.property.base_type, data.property.value, data.property.direction)
  }, displayError)
}

/*------------------------------------------------------
addProperties
------------------------------------------------------*/

function addProperties(arr) {
  arr.forEach(function(data) {
    addProperty(data.property)
  })
}

/*------------------------------------------------------
addProperty
------------------------------------------------------*/

function addProperty(property) {
  var option = $('<option/>')
  option.text(property.display_name)
  option.val(property.key)
  option.data('details', property)
  $('#dt-property-selector').append(option)
}

/*------------------------------------------------------
removeProperties
------------------------------------------------------*/

function removeProperties() {
  $('#dt-property-selector').empty()
}

/*------------------------------------------------------
On Change Property
------------------------------------------------------*/

$(function() {
  $( "#dt-property-selector" ).change(function() {
    var selected = $('#dt-property-selector option:selected')
    let propertyId = $(selected).val()
    populateProperty(propertyId)
  })
})

/*------------------------------------------------------
displayPropertyValue
------------------------------------------------------*/

function displayPropertyValue(type, value, direction) {

  //$('#dt-value-wrapper').show()

  let status = (direction==='input') ? '>' : ' disabled>'

  switch(type) {
    case 'boolean':
    $('#dt-value-button-wrapper').hide()

    let checked = (value===1) ? ' checked' : ''

    $('#dt-value-wrapper').empty().append(''
      + '<label class="switch" style="margin-bottom:0;">'
      + '<input id="property-value" type="checkbox" value="' + value + '"' + checked + status
      + '<span class="slider round"></span>'
      + '</label>')
    break

    default:
    $('#dt-value-wrapper').empty().append('<input id="property-value" type="text" class="form-control form-control-sm" value="' + value + '"' + status)
    if(direction==='input') {
      $('#dt-value-button-wrapper').show()
    } else {
      $('#dt-value-button-wrapper').hide()
    }
    break
  }
}

/*------------------------------------------------------
On Change Datapoint (for boolean properties)
On Click Datapoint (for non-boolean properties)
------------------------------------------------------*/

$(function() {
  $('#dt-value-wrapper').delegate('input:checkbox', "change", function(event) {
    $(this).blur()
    let selected = $('#dt-property-selector option:selected')
    let propertyId = $(selected).val()
    let value = $(this).prop('checked') + 0
    createDatapoint(propertyId, value)
  })
})

$(function() {
  $('#dt-save-value-btn').click(function(event) {
    let selected = $('#dt-property-selector option:selected')
    let propertyId = $(selected).val()
    let value = $('#dt-value-wrapper input').val()
    createDatapoint(propertyId, value)
  })
})

/*------------------------------------------------------
createDatapoint
------------------------------------------------------*/

function createDatapoint(propertyId, value) {
  MyAyla.createDatapoint(propertyId, value, function (data) {
    console.log('propertyId = ' + propertyId + ', value = ' + data.datapoint.value)
  }, displayError)
}

/*------------------------------------------------------
createAccessRule
------------------------------------------------------*/

function createAccessRule() {
  let oemModel = $('#create-access-rule-oem-model').val()
  if(!oemModel) {oemModel = '*'}
  let propertyName = $('#create-access-rule-property-name').val()
  if(!propertyName) {propertyName = "*"}

  let data = {
    "subscription_type": $('#create-access-rule-subscription-type').val(),
    "role": $('#create-access-rule-role').val(),
    "oem_model": oemModel,
    "property_name": propertyName,
    "client_type": $('#create-subscription-client-type').val()
  }

  MyAyla.createAccessRule(data, addAccessRule, displayError)

  $('#create-access-rule-form').get(0).reset()
  $('#create-access-rule-form-collapse').collapse('hide')
}

$(function() {
  $('#create-access-rule-form').submit(function(event) {
    createAccessRule()
  })
})

/*------------------------------------------------------
deleteAccessRules
------------------------------------------------------*/

function deleteAccessRules() {
  let checkboxes = $('#aylax-access-rules tbody tr td input[type=checkbox]:checked')
  $('#aylax-access-rules thead input[type=checkbox]').prop('checked', false)
  $.each(checkboxes, function(index, checkbox) {
    deleteAccessRule(checkbox)
  })
}

$(function() {
  $('#delete-access-rules-btn').click(function(event) {
    deleteAccessRules()
  })
})

/*------------------------------------------------------
deleteAccessRule
------------------------------------------------------*/

function deleteAccessRule(checkbox) {
  MyAyla.deleteAccessRule($(checkbox).val(), function() {
    let tr1 = $(checkbox).closest('tr')
    let tr2 = $(tr1).next()
    $(tr1).remove()
    $(tr2).remove()
  }, displayError)
}

/*------------------------------------------------------
populateAccessRules
------------------------------------------------------*/

function populateAccessRules() {
  removeAccessRules()
  MyAyla.getAccessRules(addAccessRules, displayError)
}

$(function () {
  $('#aylax-access-rules').on('populate', function(event) {
    populateAccessRules()
  })
})

/*------------------------------------------------------
addAccessRules
------------------------------------------------------*/

function addAccessRules(rules) {
  rules.forEach(function(data) {
    addAccessRule(data)
  })
}

/*------------------------------------------------------
addAccessRule
------------------------------------------------------*/

function addAccessRule(data) {
  let item = ''
  + '<tr class="summary simple-details">'
  + '<td class="chk"><input type="checkbox" value="' + data.OemAccessRule.id + '"></td>'
  + '<td>' + data.OemAccessRule.oem_model + '</td>'
  + '<td>' + data.OemAccessRule.property_name + '</td>'
  + '<td>' + data.OemAccessRule.subscription_type + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan="4"><pre>' + JSON.stringify(data.OemAccessRule, null, 2) + '</pre></td>'
  + '</tr>'
  $('#aylax-access-rules > tbody').append(item)
}

/*------------------------------------------------------
removeAccessRules
------------------------------------------------------*/

function removeAccessRules() {
  $('#aylax-access-rules tbody').empty()
}

$(function () {
  $('#aylax-access-rules').on('remove-all', function(event) {
    removeAccessRules()
  })
})

/*------------------------------------------------------
createSubscription
------------------------------------------------------*/

function createSubscription() {
  let name = $('#create-subscription-name').val()
  if(!name) {name = $('#create-subscription-name').prop('placeholder')}

  let oemModel = $('#create-subscription-oem-model').val()
  if(!oemModel) {oemModel = '*'}

  let dsn = $('#create-subscription-dsn').val()
  if(!dsn) {dsn = '*'}

  let propertyName = $('#create-subscription-property-name').val()
  if(!propertyName) {propertyName = "*"}

  let data = {
    "name": name,
    "description": $('#create-subscription-description').val(),
    "subscription_type": $('#create-subscription-subscription-type').val(),
    "oem_model": oemModel,
    "dsn": dsn,
    "property_name": propertyName,
    "client_type": $('#create-subscription-client-type').val()
  }

  MyAyla.createSubscription(data, addSubscription, displayError)

  $('#create-subscription-form').get(0).reset()
  $('#create-subscription-form-collapse').collapse('hide')
}

$(function() {
  $('#create-subscription-form').submit(function(event) {
    createSubscription()
  })
})

/*------------------------------------------------------
deleteSubscriptions
------------------------------------------------------*/

function deleteSubscriptions() {
  let checkboxes = $('#aylax-subscriptions tbody tr td input[type=checkbox]:checked')
  $('#aylax-subscriptions thead input[type=checkbox]').prop('checked', false)
  $.each(checkboxes, function(index, checkbox) {
    deleteSubscription(checkbox)
  })
}

$(function() {
  $('#delete-subscriptions-btn').click(function(event) {
    deleteSubscriptions()
  })
})

/*------------------------------------------------------
deleteSubscription
------------------------------------------------------*/

function deleteSubscription(checkbox) {
  MyAyla.deleteSubscription($(checkbox).data('details').id, function(data) {
    let tr1 = $(checkbox).closest('tr')
    let tr2 = $(tr1).next()
    $(tr1).remove()
    $(tr2).remove()
  }, displayError)
}

/*------------------------------------------------------
populateSubscriptions
------------------------------------------------------*/

function populateSubscriptions() {
  removeSubscriptions()
  MyAyla.getSubscriptions(addSubscriptions, displayError)
}

$(function () {
  $('#aylax-subscriptions').on('populate', function(event) {
    populateSubscriptions()
  })
})

/*------------------------------------------------------
addSubscriptions
------------------------------------------------------*/

function addSubscriptions(subscriptions) {
  subscriptions.forEach(function(data) {
    addSubscription(data)
  })
}

/*------------------------------------------------------
addSubscription
------------------------------------------------------*/

function addSubscription(data) {
  var tr = $('<tr/>').addClass('summary simple-details')
  var input = $('<input/>').prop('type', 'checkbox').val(data.subscription.stream_key).data('details', data.subscription)
  var image = '<img src="/assets/images/green-circle-16.png" style="display:none;">'
  var td = $('<td/>').addClass('chk')
  td.append(input)
  td.append(image)
  tr.append(td)
  tr.append('<td>' + data.subscription.name + '</td>')
  $('#aylax-subscriptions > tbody').append(tr)
  tr = $('<tr/>').addClass('details').css('display', 'none')
  tr.append('<td>&nbsp;</td>')
  tr.append('<td><pre>' + JSON.stringify(data.subscription, null, 2) + '</pre></td>')
  $('#aylax-subscriptions > tbody').append(tr)
}

/*------------------------------------------------------
removeSubscriptions
------------------------------------------------------*/

function removeSubscriptions() {
  $('#aylax-subscriptions tbody').empty()
}

$(function () {
  $('#aylax-subscriptions').on('remove-all', function(event) {
    removeSubscriptions()
  })
})

/*------------------------------------------------------
deploySubscriptions
------------------------------------------------------*/

function deploySubscriptions() {
  let checkboxes = $('#aylax-subscriptions tbody tr td input[type=checkbox]:checked')
  $('#aylax-subscriptions thead input[type=checkbox]').prop('checked', false)
  $.each(checkboxes, function(index, checkbox) {
    deploySubscription(checkbox)
  })
}

$(function() {
  $('#deploy-subscriptions-btn').click(function(event) {
    deploySubscriptions()
  })
})

/*------------------------------------------------------
deploySubscription
------------------------------------------------------*/

function deploySubscription(checkbox) {
  $(checkbox).prop('checked', false).hide()
  $(checkbox).next('img').css('display', 'inline')
  let subscription = $(checkbox).data('details')
  let name = subscription.name
  let key = subscription.stream_key
  let eventType = subscription.subscription_type
  streams[key] = new Stream(name, streamUrl, key, eventType)
  monitorEventStream(streams[key])
  addEventStream(streams[key])
}

/*------------------------------------------------------
promoteSubscription
------------------------------------------------------*/

function promoteSubscription() {
  let checkboxes = $('#aylax-subscriptions tbody tr td input[type=checkbox]:checked')
  $('#aylax-subscriptions thead input[type=checkbox]').prop('checked', false)
  $(checkboxes).prop('checked', false)
  if(checkboxes.length) {
    let subscription = $(checkboxes[0]).data('details')
    let name = subscription.name
    let key = subscription.stream_key
    $('#event-stream-name').val(subscription.name)
    $('#stream-key').val(subscription.stream_key)
    $('#create-event-stream-form-collapse').collapse('show')
  }
}

$(function() {
  $('#promote-subscription-btn').click(function(event) {
    promoteSubscription()
  })
})

/*------------------------------------------------------
createEventStream
------------------------------------------------------*/

function createEventStream() {
  let key = $('#stream-key').val()

  for(var k in streams) {
    if(k === key) {
      displayMessage('This stream key is already in use.')
      return
    }
  }

  let name = $('#event-stream-name').val()
  if(!name) {
    name = $('#event-stream-name').prop('placeholder')
  }

  let bSeqId = $('#create-event-stream-beginning-seqid').val()
  let eSeqId = $('#create-event-stream-ending-seqid').val()

  var vs = $('#aylax-subscriptions input[type=checkbox]')
  $.each(vs, function(index, v) {
    if($(v).val() == key) {
      $(v).hide()
      $(v).next('img').css('display', 'inline')
    }
  })

  streams[key] = new Stream(name, streamUrl, key, 'unknown', bSeqId, eSeqId)
  monitorEventStream(streams[key])
  addEventStream(streams[key])

  $('#create-event-stream-form').get(0).reset()
  $('#create-event-stream-form-collapse').collapse('hide')
}

$(function() {
  $('#create-event-stream-form').submit(function(event) {
    createEventStream()
  })
})

/*------------------------------------------------------
deleteEventStreams
------------------------------------------------------*/

function deleteEventStreams(all=false) {
  let checkboxes = null
  if(all) {
    checkboxes = $('#aylax-event-streams tbody tr td input[type=checkbox]')
  } else {
    checkboxes = $('#aylax-event-streams tbody tr td input[type=checkbox]:checked')
  }
  $('#aylax-event-streams thead input[type=checkbox]').prop('checked', false)
  $.each(checkboxes, function(index, checkbox) {
    deleteEventStream(checkbox)
  })
}

$(function() {
  $('#delete-event-streams-btn').click(function(event) {
    deleteEventStreams()
  })

  $('#aylax-event-streams').on('remove-all', function(event) {
    deleteEventStreams(true)
  })
})

/*------------------------------------------------------
deleteEventStream
------------------------------------------------------*/

function deleteEventStream(checkbox) {
  let key = $(checkbox).val()
  streams[key].socket.close()
  delete streams[key]
  let tr1 = $(checkbox).closest('tr')
  let tr2 = $(tr1).next()
  $(tr1).remove()
  $(tr2).remove()
  var vs = $('#aylax-subscriptions input[type=checkbox]')
  $.each(vs, function(index, v) {
    if($(v).val() == key) {
      $(v).show()
      $(v).next('img').hide()
    }
  })
}

/*------------------------------------------------------
addEventStream
------------------------------------------------------*/

function addEventStream(stream) {
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
  $('#aylax-event-streams > tbody').append(item)
}

/*------------------------------------------------------
toggleEventStreamDetails
------------------------------------------------------*/

function toggleEventStreamDetails(checkbox) {
  let tr1 = $(checkbox).parent()
  let tr2 = $(tr1).next()
  let key = $(tr1).find('input').val()
  let pre = $(tr2).find('pre')
  $(pre).empty()
  $(pre).append(JSON.stringify(streams[key], streamPropFilter, 2))
  $(tr2).toggle()
}

$(function() {
  $("#aylax-event-streams").delegate('tr td:not(.chk)', "click", function(e) {
    toggleEventStreamDetails(this)
  })
})

/*------------------------------------------------------
class Stream constructor
------------------------------------------------------*/

class Stream {
  constructor(name, url, key, eventType='unknown', bSeqId=null, eSeqId=null) {
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
    if(value.length > 30) {value = value.slice(0, 30) + ' ...'}
      value = event.metadata.display_name + ' = ' + value
    break

    case 'datapointack':
    value = event.datapointack.value
    if(value.length > 30) {value = value.slice(0, 30) + ' ...'}
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

  addEvent(stream, event, value)
}

/*------------------------------------------------------
monitorEventStream
------------------------------------------------------*/

function monitorEventStream(stream) {

  stream.socket.onopen = function(msg) {
    displayMessage('onopen for stream key ' + stream.key)
  }

  stream.socket.onerror = function(msg) {
    displayMessage('onerror and error is ' + msg)
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
        displayMessage('ERROR: Event split into ' + arr.length + 'substrings.')
        return
      }
      let event = JSON.parse(arr[1])
      stream.eventType = event.metadata.event_type
      stream.numEvents++
      $('#ID' + stream.key).children('td.numEvents').first().html(stream.numEvents)
      processEvent(stream, event)
    }
  }

  stream.socket.onclose = function(msg) {
    displayMessage('onclose for stream key ' + stream.key)
  }
}

/*------------------------------------------------------
addEvent
------------------------------------------------------*/

function addEvent(stream, event, value) {
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
  $('#aylax-events > tbody').prepend(item)
}

/*------------------------------------------------------
removeEvents
------------------------------------------------------*/

function removeEvents(all=false) {
  if(all) {
    $('#aylax-events').children('tbody').empty()
  } else {
    let checkboxes = $('#aylax-events tbody tr td input[type=checkbox]:checked')
    $('#aylax-events thead input[type=checkbox]').prop('checked', false)
    $.each(checkboxes, function(index, checkbox) {
      removeEvent(checkbox)
    })
  }
}

$(function() {
  $('#delete-events-btn').click(function(event) {
    removeEvents()
  })

  $('#aylax-events').on('remove-all', function(event) {
    removeEvents(true)
  })
})

/*------------------------------------------------------
removeEvent
------------------------------------------------------*/

function removeEvent(checkbox) {
  let tr1 = $(checkbox).closest('tr')
  let tr2 = $(tr1).next()
  $(tr1).remove()
  $(tr2).remove()
}

/*------------------------------------------------------
toggleDetails
------------------------------------------------------*/

$(function() {
  $("body div.cmpt").delegate('tr.simple-details td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
Select All / Deselect All
------------------------------------------------------*/

$(function() {
  $('div.cmpt table thead tr th input[type=checkbox]').click(function(event) {
    let table = $(this).closest('table')
    if($(this).prop('checked')) {
      $(table).find('tbody tr td input[type=checkbox]').prop('checked', true)
    } else {
      $(table).find('tbody tr td input[type=checkbox]').prop('checked', false)
    }
  })
})

/*------------------------------------------------------
On Page Load
------------------------------------------------------*/

$(function () {
  if(getPopulateAtInitCount()) {
    if(MyAyla.isLoggedIn()) {
      $('#account-link').html('Logout')
      populate()
    } else {
      $('#account-link').html('Login')
    }
    $("#login-menu-item").removeClass("d-none")
  }
})

/*------------------------------------------------------
login
------------------------------------------------------*/

$(function () {
  $('#login-form').submit(function (event) {
    event.preventDefault()
    $('body').trigger('click')
    var email = $('#email').val()
    var password = $('#password').val()
    var appId = $('#appId').val()
    var appSecret = $('#appSecret').val()
    MyAyla.login(email, password, appId, appSecret, function (data) {
      $('#account-link').html('Logout')
      populate()
    }, displayError)
  })
})

/*------------------------------------------------------
logout
------------------------------------------------------*/

$(function () {
  $('#logout-form').submit(function (event) {
    event.preventDefault()
    $('body').trigger('click')
    MyAyla.logout(function (data) {
      $('#account-link').html('Login')
      depopulate()
    }, displayError)
  })
})

/*------------------------------------------------------
Display Login/Logout Form
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
On Click Close Login/Logout
------------------------------------------------------*/

$(function() {$('.click-body').click(function(event) {$('body').trigger('click')})})

/*------------------------------------------------------
getPopulateAtInitCount
------------------------------------------------------*/

function getPopulateAtInitCount() {
  return $('div.cmpt .populate-at-init').length
}

/*------------------------------------------------------
populate
------------------------------------------------------*/

function populate() {
  var elements = $('div.cmpt .populate-at-init')
  $.each(elements, function(index, element) {
    $(element).trigger('populate')
  })
}

/*------------------------------------------------------
depopulate
------------------------------------------------------*/

function depopulate() {
  var elements = $('div.cmpt .ayla-data')
  $.each(elements, function(index, element) {
    $(element).trigger('remove-all')
  })
}

/*------------------------------------------------------
displayError and displayMessage
------------------------------------------------------*/

function displayError(status) {displayMessage(status.code + ' ' + status.text)}
function displayMessage(msg) {console.log(msg)}
