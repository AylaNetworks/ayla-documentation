var urls = []
urls["cn"] = []
urls["cn"]["dev"] = []
urls["cn"]["dev"]["cloud"] = 'wss://stream.ayla.com.cn/stream/stream'
urls["cn"]["dev"]["mobile"] = 'wss://mstream.ayla.com.cn/stream'
urls["cn"]["staging"] = []
urls["cn"]["staging"]["cloud"] = ''
urls["cn"]["staging"]["mobile"] = ''
urls["cn"]["field"] = []
urls["cn"]["field"]["cloud"] = 'wss://stream-field.ayla.com.cn/stream'
urls["cn"]["field"]["mobile"] = 'wss://mstream-field.ayla.com.cn/stream'

urls["eu"] = []
urls["eu"]["dev"] = []
urls["eu"]["dev"]["cloud"] = ''
urls["eu"]["dev"]["mobile"] = ''
urls["eu"]["staging"] = []
urls["eu"]["staging"]["cloud"] = ''
urls["eu"]["staging"]["mobile"] = ''
urls["eu"]["field"] = []
urls["eu"]["field"]["cloud"] = 'wss://stream-field-eu.aylanetworks.com/stream'
urls["eu"]["field"]["mobile"] = 'wss://mstream-field-eu.aylanetworks.com/stream'

urls["us"] = []
urls["us"]["dev"] = []
urls["us"]["dev"]["cloud"] = 'wss://stream.aylanetworks.com/stream'
urls["us"]["dev"]["mobile"] = 'wss://mstream-dev.aylanetworks.com/stream'
urls["us"]["staging"] = []
urls["us"]["staging"]["cloud"] = 'wss://staging-dss.ayladev.com/stream'
urls["us"]["staging"]["mobile"] = 'wss://staging-mstream.ayladev.com/stream'
urls["us"]["field"] = []
urls["us"]["field"]["cloud"] = 'wss://stream-field.aylanetworks.com/stream'
urls["us"]["field"]["mobile"] = 'wss://mstream-field.aylanetworks.com/stream'

//------------------------------------------------------
// createAuthToken
//------------------------------------------------------

function createAuthToken(authToken) {
  var date = new Date()
  date.setMonth(date.getMonth() + 10)
  var expires = date.toUTCString()
  Cookies.set('auth_token', authToken, { expires: 7 })
  console.log('AUTH TOKEN COOKIE VALUE: ' + Cookies.get('auth_token'))
}

//------------------------------------------------------
// createSubscription
//------------------------------------------------------

$(function() {
  $('#create-subscription-submit').click(function(event) {
    console.log('create-subscription-submit')
/*
    let service = JSON.parse($('#service').val())
    let client_type = $('#client-type').val()
    let event_stream_name = $('#event-stream-name').val()

    if(!event_stream_name) {
      event_stream_name = new Date().toISOString() + ' ' + $('#subscription-type').val()
    }

    let data = {
      event_stream_name: event_stream_name,
      subscription_type: $('#subscription-type').val(),
      state: $('#initial-state').val(),
      client_type: client_type,
      service_url: urls[service.region][service.deployment][client_type],
      oem_model: $('#oem-model').val(),
      dsn: $('#dsn').val(),
      property_name: $('#property-name').val()
    }

    AylaProxyServer.createSubscription(data, Cookies.get('auth_token'), displaySubscription, displayError)
    */
  })
})

//------------------------------------------------------
// deleteAuthToken
//------------------------------------------------------

function deleteAuthToken(authToken) {
  Cookies.remove('auth_token')
  console.log('AUTH TOKEN COOKIE VALUE: ' + Cookies.get('auth_token'))
}

//------------------------------------------------------
// deleteSubscription
//------------------------------------------------------

function deleteSubscription(subscriptionId, subscriptionDiv) {
  AylaProxyServer.deleteDssSubscription(subscriptionId, Cookies.get('auth_token'), function(data) {
    $(subscriptionDiv).remove()    
  }, displayError)
}

//------------------------------------------------------
// displayError
//------------------------------------------------------

function displayError(statusCode, statusText) {
  $('#error-msg span').html(statusCode + ' ' + statusText)
  $('#error-msg').show()
}

//------------------------------------------------------
// displaySubscription
//------------------------------------------------------

function displaySubscription(data) {

  let id = 'ID' + data.subscription.id

  let item = ''
  + '<div class="form-check" data-id="' + data.subscription.id + '">'
  + '<input class="form-check-input" type="radio" name="exampleRadios" value="' + data.subscription.stream_key + 'option1">'
  + '<label class="form-check-label"><a data-toggle="collapse" href="#' + id + '">' + toInitialCaps(data.subscription.subscription_type) + ' Events' + '</a></label>'
  + '</div>'
  + '<div id="' + id + '" class="subscription-collapse collapse">'
  + '<pre>'
  + JSON.stringify(data, null, 2)
  + '</pre>'
  + '</div>'
  $('#my-subscriptions').append(item)
}

//------------------------------------------------------
// displayPropertyValue
//------------------------------------------------------

function displayPropertyValue(details) {

  switch(details.base_type) {
    case 'boolean':
    $('#value-wrapper').empty().append('<label class="switch" style="margin-bottom:0;"><input id="property-value" type="checkbox"><span class="slider round"></span></label>')
    if(details.value === 1) {
      $('#property-value').prop('checked', true);
    } else {
      $('#property-value').prop('checked', false);
    }
    break;

    case 'decimal':
    case 'number':
    case 'string':
    default:
    $('#value-wrapper').empty().append('<input id="property-value" type="text" class="form-control form-control-sm">')
    $('#property-value').val(details.value)
    if(details.direction === 'input') {
      $('#value-button-wrapper').show()
      $('#property-value').prop('disabled', false);
    } else {
      $('#value-button-wrapper').hide()
      $('#property-value').prop('disabled', true);
    }
    break;
  }
}

//------------------------------------------------------
// getDevice
//------------------------------------------------------

function getDevice(deviceId) {
  AylaProxyServer.getDevice(deviceId, Cookies.get('auth_token'), function (device) {
    getProperties(device.device.key)
  }, displayError)
}

//------------------------------------------------------
// getDevices
//------------------------------------------------------

function getDevices() {
  AylaProxyServer.getDevices(Cookies.get('auth_token'), function (devices) {
    $('#select-devices').empty()
    if(devices.length) {
      var details = devices[0].device
      $.each(devices, function(index, device) {
        var option = $('<option/>')
        option.text(device.device.product_name)
        option.data("details", device.device)
        $('#select-devices').append(option)
      })
    }
    getProperties(details.key)
  }, displayError)
}

//------------------------------------------------------
// getProperties
//------------------------------------------------------

function getProperties(deviceId) {
  AylaProxyServer.getProperties(deviceId, Cookies.get('auth_token'), function (properties) {
    $('#select-properties').empty()
    if(properties.length) {
      var details = properties[0].property
      $.each(properties, function(index, property) {
        var option = $('<option/>')
        option.text(property.property.display_name)
        option.data("details", property.property)
        $('#select-properties').append(option)
      })
    }
    displayPropertyValue(details)
  }, displayError)
}

//------------------------------------------------------
// getSubscriptions
//------------------------------------------------------

function getSubscriptions() {
  AylaProxyServer.getDssSubscriptions(Cookies.get('auth_token'), function (data) {
    for(var key in data) {
      displaySubscription(data[key])
    }
  }, displayError)
}

//------------------------------------------------------
// login
//------------------------------------------------------

$(function() {
  $('#login-form' ).submit(function(event) {
    event.preventDefault()
    $('body').trigger('click')
    var email = $('#email').val()
    var password = $('#password').val()
    AylaProxyServer.login(email, password, function(data) {
      $('#account-link').html('Logout')
      createAuthToken(data.access_token)
      getSubscriptions()
    }, displayError)
  })
})

//------------------------------------------------------
// logout
//------------------------------------------------------

$(function() {
  $('#logout-form' ).submit(function(event) {
    event.preventDefault()
    $('body').trigger('click')
    let authToken = Cookies.get('auth_token')
    deleteAuthToken()
    AylaProxyServer.logout(authToken, function (data) {
      $('#account-link').html('Login')
    }, displayError)
  })
})

//------------------------------------------------------
// onClickClose
//------------------------------------------------------

$(function() {$('.click-body').click(function(event) {$('body').trigger('click')})})

//------------------------------------------------------
// onClickCloseMsgBox
//------------------------------------------------------

$(function() {
  $('#error-msg-btn').click(function(event) {
    $('#error-msg').hide()
  })
})

//------------------------------------------------------
// onClickSubscription
//------------------------------------------------------

$(function() {
  $("#my-subscriptions").delegate('.subscription-title img', "click", function(e) {
    let choice = $(this).attr('src').split('.')[0]
    let subscriptionId = $(this).parent().data('id')
    let subscriptionDiv = $(this).parent().parent()

    console.log(choice)
    console.log(subscriptionId)

    if(choice == 'delete') {
      if(confirm('Delete subscription?')) {
        deleteSubscription(subscriptionId, subscriptionDiv)
      }
    }
  })
})

//------------------------------------------------------
// onLoad
//------------------------------------------------------

$(function() {
  if(Cookies.get('auth_token')) {
    $('#account-link').html('Logout')
    getSubscriptions()
    getDevices()
  } else {
    $('#account-link').html('Login')
  }
})

//------------------------------------------------------
// onLoginLogout
//------------------------------------------------------

$(function() {
  $('#account-link').click(function(event) {
    if(Cookies.get('auth_token')) {
      $('#login-form').hide()
      $('#logout-form').show()
    } else {
      $('#login-form').show()
      $('#logout-form').hide()
    }
  })
})

//------------------------------------------------------
// onSelectDevice
//------------------------------------------------------

$(function() {
  $( "#select-devices" ).change(function() {
    $(this).blur()
    var selected = $('#select-devices option:selected')
    var details = $(selected).data("details")
    getProperties(details.key)
  })
})

//------------------------------------------------------
// onSelectProperty
//------------------------------------------------------

$(function() {
  $( "#select-properties" ).change(function() {
    $(this).blur()
    var selected = $('#select-properties option:selected')
    var details = $(selected).data("details")
    displayPropertyValue(details)
  })
})

//------------------------------------------------------
// toInitialCaps
//------------------------------------------------------

function toInitialCaps(s) {
  return s.substring(0,1).toUpperCase() + s.substring(1)
}

//------------------------------------------------------
// Create Event Stream
//------------------------------------------------------
/*
$(function() {
  $('#create-subscription-submit').click(function(event) {
    console.log('create-subscription-submit')

    let service = JSON.parse($('#service').val())
    let client_type = $('#client-type').val()
    let event_stream_name = $('#event-stream-name').val()

    if(!event_stream_name) {
      event_stream_name = new Date().toISOString() + ' ' + $('#subscription-type').val()
    }

    let data = {
      event_stream_name: event_stream_name,
      subscription_type: $('#subscription-type').val(),
      state: $('#initial-state').val(),
      client_type: client_type,
      service_url: urls[service.region][service.deployment][client_type],
      oem_model: $('#oem-model').val(),
      dsn: $('#dsn').val(),
      property_name: $('#property-name').val()
    }

    AylaDssCollector.createEventStream(data, Cookies.get('auth_token'), displayEventStream, displayError)
  })
})
*/
//------------------------------------------------------
// 
//------------------------------------------------------
/*
function displayEventStream(data) {

  let state = data.state + '.png'
  let id = 'ID' + data.stream_id
  let item = ''
  + '<div>'
  + '<div class="event-stream" data-id="' + data.stream_id + '">'
  + '<img src="' + state + '"><img src="delete.png">'
  + '<a data-toggle="collapse" href="#' + id + '">' + data.name + '</a>'
  + '</div>'
  + '<div id="' + id + '" class="event-stream-collapse collapse">'
  + '<pre>'
  + JSON.stringify(data, null, 2)
  + '</pre>'
  + '</div>'
  + '</div>'
  $('#event-streams').append(item)
}
*/
//------------------------------------------------------
// Open, Close, Delete Event Stream
//------------------------------------------------------
/*
$(function() {
  $("#event-streams").delegate('.event-stream img', "click", function(e) {
    let choice = $(this).attr('src').split('.')[0]
    let eventDiv = $(this).parent().parent()
    let streamId = $(this).parent().data('id')

    if(choice == 'closed') {
      //if(confirm('Open the event stream?')) {
        openEventStream(streamId, $(this))
      //}
    } else if (choice == 'open') {
      //if(confirm('Close the event stream?')) {
        closeEventStream(streamId, $(this))
      //}
    } else {
      //if(confirm('Delete the event stream?')) {
        deleteEventStream(streamId, eventDiv)
      //}
    }


    console.log(choice)
    console.log(streamId)
  })
})
*/
//------------------------------------------------------
// openEventStream
//------------------------------------------------------
/*
function openEventStream(streamId, imgElement) {
  AylaDssCollector.openEventStream(streamId, Cookies.get('auth_token'), function(data) {
    console.log(JSON.stringify(data, null, 2))
    $(imgElement).attr('src', 'open.png')
  }, displayError)
}
*/
//------------------------------------------------------
// closeEventStream
//------------------------------------------------------
/*
function closeEventStream(streamId, imgElement) {
  AylaDssCollector.closeEventStream(streamId, Cookies.get('auth_token'), function(data) {
    console.log(JSON.stringify(data, null, 2))
    $(imgElement).attr('src', 'closed.png')
  }, displayError)
}
*/
//------------------------------------------------------
// deleteEventStream
//------------------------------------------------------
/*
function deleteEventStream(streamId, eventDiv) {
  AylaDssCollector.deleteEventStream(streamId, Cookies.get('auth_token'), function(data) {
    $(eventDiv).remove()    
  }, displayError)
}
*/
//------------------------------------------------------
// synchWithServer
//------------------------------------------------------
/*
function synchWithServer() {
  if(Cookies.get('auth_token')) {
    AylaDssCollector.getEventStreams(Cookies.get('auth_token'), function (data) {
      $('#event-streams').empty()
      for(let i=0; i<data.length; i++) {
        displayEventStream(data[i])
      }
    }, displayError)
  }
}
*/
