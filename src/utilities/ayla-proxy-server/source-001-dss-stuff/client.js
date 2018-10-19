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

var browserEventStreams = {}

//------------------------------------------------------
// BrowserEventStream
//------------------------------------------------------

class BrowserEventStream {
  constructor(name, streamKey, serviceUrl, processEvent) {
    this.name = name
    this.streamKey = streamKey
    this.serviceUrl = serviceUrl
    this.processEvent = processEvent
    this.socket = new WebSocket(serviceUrl + '?stream_key=' + streamKey)
    this.monitor(this.socket, this.name, this.processEvent)
  }

  destructor() {
  }

  monitor(socket, name, processEvents) {

    socket.onopen = function(event) {
      console.log('open')
    }

    socket.onerror = function(error) {
      console.log('error is ' + error)
    }

    socket.onmessage = function(event) {
      if(event.data.includes("|Z")) {
        socket.send("Z")
        console.log('Heartbeat')
      } else {
        processEvent(event)
      }
    }

    socket.onclose = function(event) {
      console.log('close')
    }
  }
}

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
// createDatapoint
//------------------------------------------------------

function createDatapoint(propertyId, value) {
  AylaProxyServer.createDatapoint(propertyId, value, Cookies.get('auth_token'), function (datapoint) {
    console.log('datapoint value = ' + datapoint.datapoint.value)
  }, displayError)
}

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
// displayBrowserEvent
//------------------------------------------------------

function displayBrowserEvent(data) {
  var title = toInitialCaps(data.metadata.event_type) + ' for ' + data.metadata.dsn + ': ';

  switch(data.metadata.event_type) {
    case 'connectivity':
    title = title + data.connection.status;
    break;

    case 'datapoint':
    var value = data.datapoint.value;
    if(value.length > 30) {value = value.slice(0, 30) + ' ...';}
    title = title + data.metadata.display_name + ' = ' + value;
    break;

    case 'datapointack':
    var value = data.datapointack.value;
    if(value.length > 30) {value = value.slice(0, 30) + ' ...';}
    title = title + data.metadata.display_name + ' = ' + value;
    break;

    case 'location':
    title = title + 'lat = ' + data.location_event.lat + ', long = ' + data.location_event.long
    break;

    case 'registration':
    title = title + 'registered = ' + data.registration_event.registered;
    break;

    default:
    break;
  }

  displayCollapse(title, data)
}

//------------------------------------------------------
// displayBrowserEventStream
//------------------------------------------------------

function displayBrowserEventStream(browserEventStream) {

  let item = ''
  + '<div class="form-check">'
  + '<input type="checkbox" class="form-check-input" value="' + browserEventStream.streamKey + '">'
  + '<label class="form-check-label">' + browserEventStream.name + '</label>'
  + '</div>'

  $('#browser-event-streams').append(item)

}

//------------------------------------------------------
// displayCollapse
//------------------------------------------------------

function displayCollapse(title, data) {
  var now = new Date();
  var t = toDateTime(now) + ' ' + title;
  var id = 'ID' + now.getTime();
  var p = '<div><a data-toggle="collapse" href="#' + id + '" class="terminal-font">' + t + '</a></div>';
  var b = '<div id="' + id + '" class="collapse"><pre class="event" style="margin-bottom:16px;">';
  var e = '</pre></div>';
  $('#browser-events').prepend(p + b + JSON.stringify(data, null, 2) + e);
}

//------------------------------------------------------
// displaySubscription
//------------------------------------------------------

function displaySubscription(data) {

  let id = 'ID' + data.subscription.stream_key
  let name = ''

  if(data.subscription.name) {
    name = data.subscription.name
  } else if (data.subscription.subscription_type) {
    name = 'Subscription for ' + data.subscription.subscription_type + ' events'
  } else {
    name = 'Subscription for unspecified events'
  }

  let top = $('<div/>')
  $(top).addClass('form-check')
  $(top).data('subscription', data.subscription)
  $(top).append('<input class="form-check-input" type="radio" name="exampleRadios" value="' + data.subscription.stream_key + '">')
  $(top).append('<label class="form-check-label"><a data-toggle="collapse" href="#' + id + '">' + name + '</a></label>')

  let bottom = ''
  + '<div id="' + id + '" class="subscription-collapse collapse">'
  + '<pre>'
  + JSON.stringify(data, null, 2)
  + '</pre>'
  + '</div>'
  $('#my-subscriptions').prepend(bottom)
  $('#my-subscriptions').prepend(top)
}

//------------------------------------------------------
// displayPropertyValue
//------------------------------------------------------

function displayPropertyValue(details) {

  switch(details.base_type) {
    case 'boolean':
    $('#value-button-wrapper').hide()
    $('#value-wrapper').empty().append('<label class="switch" style="margin-bottom:0;"><input id="property-value" type="checkbox"><span class="slider round"></span></label>')
    if(details.value === 1) {
      $('#property-value').prop('checked', true)
    } else {
      $('#property-value').prop('checked', false)
    }
    if(details.direction === 'input') {
      $('#property-value').prop('disabled', false)
    } else {
      $('#property-value').prop('disabled', true)
    }
    break

    case 'decimal':
    case 'number':
    case 'string':
    default:
    $('#value-wrapper').empty().append('<input id="property-value" type="text" class="form-control form-control-sm">')
    $('#property-value').val(details.value)
    if(details.direction === 'input') {
      $('#value-button-wrapper').show()
      $('#property-value').prop('disabled', false)
    } else {
      $('#value-button-wrapper').hide()
      $('#property-value').prop('disabled', true)
    }
    break
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
    //if($('#my-subscriptions div input').length) {
    //  $('#my-subscriptions div input').first().prop('checked', true).trigger("click")
    //}
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
// onChangeDestination
//------------------------------------------------------

$(function() {
  $('#destination').change(function() {
    $(this).blur()
    if($(this).val() === 'collector') {
      $('#select-persistence-div').show()
    } else {
      $('#select-persistence-div').hide()
    }
  })
})

//------------------------------------------------------
// onChangeSubscriptionType
//------------------------------------------------------

$(function() {
  $('#subscription-type').change(function() {
    let name = 'Subscription for ' + $(this).val() + ' events'
    $('#subscription-name').prop('placeholder', name)
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
// onClickCreateEventStream
//------------------------------------------------------

$(function() {
  $('#create-event-stream-button').click(function(event) {
    let radio = $('#my-subscriptions div input:radio:checked')
    let subscriptionDiv = $(radio).parent()
    let subscription = $(subscriptionDiv).data('subscription')
    let streamKey = subscription.stream_key
    let name = $('#event-stream-name').val()
    let clientType = subscription.client_type
    let service = JSON.parse($('#service').val())
    let serviceUrl = urls[service.region][service.deployment][clientType]
    let destination = $('#destination').val()

    if(!name) {
      name = $('#event-stream-name').prop('placeholder')
    }

    browserEventStreams[streamKey] = new BrowserEventStream(name, streamKey, serviceUrl, processEvent)
    displayBrowserEventStream(browserEventStreams[streamKey])

    $(radio).removeClass('active').prop('checked', false).prop('disabled', true)
    $(subscriptionDiv).find('label a').addClass('disabled-label')

    console.log(Object.keys(browserEventStreams).length)
  })
})

//------------------------------------------------------
// onClickCreateSubscription
//------------------------------------------------------

$(function() {
  $('#create-subscription-button').click(function(event) {

    let name = $('#subscription-name').val()
    if(!name) {
      name = $('#subscription-name').prop('placeholder')
    }

    let data = {
      //dsn: $('#subscription-name').val(),
      property_name: $('#property-name').val(),
      oem_model: $('#oem-model').val(),
      name: name,
      description: $('#description').val(),
      batch_size: $('#batch_size').val(),
      client_type: $('#client-type').val(),
      subscription_type: $('#subscription-type').val()
    }

    console.log(JSON.stringify(data, null, 2))

    AylaProxyServer.createDssSubscription(data, Cookies.get('auth_token'), function (data) {
      $('#subscription-create').trigger('click')
      displaySubscription(data)
    }, displayError)

  })
})

//------------------------------------------------------
// onClickDeleteEventStream
//------------------------------------------------------

$(function() {
  $('#browser-event-stream-delete').click(function(event) {
    let checkboxes = $('#browser-event-streams div input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      let browserEventStream = browserEventStreams[$(checkbox).val()]
      $(checkbox).parent().remove()
      delete browserEventStreams[$(checkbox).val()]
      let radio = $('#my-subscriptions div input[value=' + browserEventStream.streamKey + ']')
      let subscriptionDiv = $(radio).parent()
      $(radio).prop('disabled', false)
      $(subscriptionDiv).find('label a').removeClass('disabled-label')
      console.log(browserEventStream.name)
    })
  })
})

//------------------------------------------------------
// onClickSubscriptionButton
//------------------------------------------------------

$(function() {
  $('#subscription-buttons button').click(function(event) {

    // ADD
    if($(this).val() === 'add') {
//      if($('#create-subscription-form')hasClass('show')) {
//        $('#subscription-create').trigger('click')
//      }
    }

    // REMOVE
    else if($(this).val() === 'remove') {

    }

    // CREATE
    else if($(this).val() === 'create') {
//      if($('#add-subscription-form')hasClass('show')) {
//        $('#subscription-add').trigger('click')
//      }

      let name = 'Subscription for ' + $('#subscription-type').val() + ' events'
      $('#subscription-name').prop('placeholder', name)
    }

    // DELETE
    else if($(this).val() === 'delete') {

      let radio = $('#my-subscriptions div input:radio:checked')

      if($(radio).length) {

        let subscriptionDiv = $(radio).parent()
        let subscription = $(subscriptionDiv).data('subscription')

        if(subscription.id) {
          AylaProxyServer.deleteDssSubscription(subscription.id, Cookies.get('auth_token'), function(data) {
            $(subscriptionDiv).remove()    
          }, displayError)
        }
      }
    }

  })
})

//------------------------------------------------------
// onClickSubscription
//------------------------------------------------------

$(function() {
  $("#my-subscriptions").delegate('div', "click", function(e) {
    let subscription = $(this).data('subscription')
    let name = ''
    if(subscription.subscription_type) {
      name = 'Event stream for ' + subscription.subscription_type + ' events'
    } else {
      name = 'Event stream for unknown events'
    }
    $('#event-stream-name').prop('placeholder', name)
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
// onClickSavePropertyValue
//------------------------------------------------------

$(function() {
  $('#save-property-value').click(function(event) {
    /*
    var selected = $('#select-properties option:selected')
    var details = $(selected).data("details")
    var propertyId = details.key
    var value = ('#value-wrapper').delegate('input').val()
    createDatapoint(propertyId, value)
    console.log('propertyId = ' + propertyId + ', value = ' + value)
    */
  })
})

$(function() {
  $('#value-wrapper').delegate('input:checkbox', "change", function(event) {
    $(this).blur()
    var selected = $('#select-properties option:selected')
    var details = $(selected).data("details")
    var propertyId = details.key
    var value = 0
    if($(this).prop('checked')) {value = 1}
    createDatapoint(propertyId, value)
    console.log('propertyId = ' + propertyId + ', value = ' + value)
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
// processEvent
//------------------------------------------------------

function processEvent(event) {
  var a = event.data.split('|')
  if(a.length != 2) {
    console.log('ERROR: Event split into ' + a.length + 'substrings.')
    return
  }
  displayBrowserEvent(JSON.parse(a[1]))
}

//------------------------------------------------------
// toInitialCaps
//------------------------------------------------------

function toInitialCaps(s) {
  return s.substring(0,1).toUpperCase() + s.substring(1)
}

//------------------------------------------------------
// toDateTime
//------------------------------------------------------

function toDateTime(date) {
  return date.toISOString().slice(0,19).replace('T', ' ');
}
