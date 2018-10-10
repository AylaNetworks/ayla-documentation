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
// On Load
//------------------------------------------------------

$(function() {
  if(Cookies.get('auth_token')) {
    $('#account-link').html('Logout')
  } else {
    $('#account-link').html('Login')
  }
  synchWithServer()
})

//------------------------------------------------------
// Show login or logout form?
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
// login
//------------------------------------------------------

$(function() {
  $('#login-form' ).submit(function(event) {
    event.preventDefault()
    $('body').trigger('click')
    var email = $('#email').val()
    var password = $('#password').val()
    AylaDssCollector.login(email, password, function(data) {
      $('#account-link').html('Logout')
      createAuthToken(data.access_token)
      synchWithServer()
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
    AylaDssCollector.logout(authToken, function (data) {
      $('#account-link').html('Login')
    }, displayError)
  })
})

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
// deleteAuthToken
//------------------------------------------------------

function deleteAuthToken(authToken) {
  Cookies.remove('auth_token')
  console.log('AUTH TOKEN COOKIE VALUE: ' + Cookies.get('auth_token'))
}

//------------------------------------------------------
// Close button clicked
//------------------------------------------------------

$(function() {$('.click-body').click(function(event) {$('body').trigger('click')})})

//------------------------------------------------------
// Create Event Stream
//------------------------------------------------------

$(function() {
  $('#create-event-stream-submit').click(function(event) {
    console.log('create-event-stream-submit')

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

//------------------------------------------------------
// 
//------------------------------------------------------

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

//------------------------------------------------------
// Open, Close, Delete Event Stream
//------------------------------------------------------

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

//------------------------------------------------------
// openEventStream
//------------------------------------------------------

function openEventStream(streamId, imgElement) {
  AylaDssCollector.openEventStream(streamId, Cookies.get('auth_token'), function(data) {
    console.log(JSON.stringify(data, null, 2))
    $(imgElement).attr('src', 'open.png')
  }, displayError)
}

//------------------------------------------------------
// closeEventStream
//------------------------------------------------------

function closeEventStream(streamId, imgElement) {
  AylaDssCollector.closeEventStream(streamId, Cookies.get('auth_token'), function(data) {
    console.log(JSON.stringify(data, null, 2))
    $(imgElement).attr('src', 'closed.png')
  }, displayError)
}

//------------------------------------------------------
// deleteEventStream
//------------------------------------------------------

function deleteEventStream(streamId, eventDiv) {
  AylaDssCollector.deleteEventStream(streamId, Cookies.get('auth_token'), function(data) {
    $(eventDiv).remove()    
  }, displayError)
}

//------------------------------------------------------
// synchWithServer
//------------------------------------------------------

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






















//------------------------------------------------------
// subscribe/unsubscribe checkbox
//------------------------------------------------------
/*
$(function() {
  $('#subscribe-checkboxes div input:checkbox').change(function() {
    $(this).blur()
    var subscriptionType = $(this).val()
    if($(this).is(":checked")) {
      subscribe(subscriptionType)
    } else {
      unsubscribe(subscriptionType)
    }
  })
})
*/
//------------------------------------------------------
// subscribe
//------------------------------------------------------
/*
function subscribe(subscriptionType) {
  var srv = JSON.parse($('#service').val())
  var clientType = $('#client-type').val()
  var url = urls[srv.region][srv.deployment][clientType]
  var oemModel = $('#oem-model').val()
  var dsn = $('#dsn').val()
  var propertyName = $('#property-name').val()

  var data = {
    "url": url,
    "subscription_type": subscriptionType,
    "oem_model": propertyName,
    "client_type": clientType,
    "property_name": propertyName
  }
  AylaDssCollector.subscribe(data, Cookies.get('auth_token'), displaySubscribe, displayError)
}
*/
//------------------------------------------------------
// unsubscribe
//------------------------------------------------------
/*
function unsubscribe(subscriptionType) {
  AylaDssCollector.unsubscribe(subscriptionType, Cookies.get('auth_token'), displayUnsubscribe, displayError)
}
*/
//------------------------------------------------------
// displayAction
//------------------------------------------------------
/*
function displaySubscribe(data) {displayAction('Opening the', 'subscribe', data)}
function displayUnsubscribe(data) {displayAction('Closing the', 'unsubscribe', data)}

function displayAction(title, appearance, data) {
  var dateStr = new Date().toISOString().slice(0,19)
  var id = 'ID' + dateStr.replace(/:/g, '0') + Math.floor(Math.random() * 99) + 10
  var t = dateStr.replace(/T/g, ' ') + ' ' + title + ' ' + data.subscription.subscription_type + ' event stream'
  var p = '<div><a data-toggle="collapse" href="#' + id + '" class="terminal ' + appearance + '">' + t + '</a></div>'
  var b = '<div id="' + id + '" class="collapse"><pre style="margin-bottom:16px;">'
  var e = '</pre></div>'
  $('#subscription-history').prepend(p + b + JSON.stringify(data, null, 2) + e)
}
*/
//------------------------------------------------------
// synchWithServer
//------------------------------------------------------
/*
function synchWithServer() {
  if(Cookies.get('auth_token')) {
    AylaDssCollector.getSubscriptions(Cookies.get('auth_token'), function (data) {
      data = data.sort(function(a, b) {
        let rvalue = 0
        if(a.created_at < b.created_at) {rvalue = -1}
          else if(a.created_at > b.created_at) {rvalue = 1}
            return rvalue
        })

      $('#subscribe-checkboxes').find(':checkbox').prop('checked', false)

      for(let i=0; i<data.length; i++) {
        $('#' + data[i].subscription_type + '-checkbox').prop('checked', true)
        displaySubscribe(data[i])
      }
    }, displayError)
  }
}
*/
//------------------------------------------------------
// 
//------------------------------------------------------
/*
var displaySubscriptions = function (data) {
  data = data.sort(function(a, b) {
    let rvalue = 0
    if(a.created_at < b.created_at) {rvalue = -1}
    else if(a.created_at > b.created_at) {rvalue = 1}
    return rvalue
  })

  $('#subscribe-checkboxes').find(':checkbox').prop('checked', false)

  for(let i=0; i<data.length; i++) {
    $('#' + data[i].subscription_type + '-checkbox').prop('checked', true)
    displaySubscribe(data[i])
  }
}
*/
//------------------------------------------------------
// displayError
//------------------------------------------------------

function displayError(statusCode, statusText) {
  $('#error-msg span').html(statusCode + ' ' + statusText)
  $('#error-msg').show()
}

$(function() {
  $('#error-msg-btn').click(function(event) {
    $('#error-msg').hide()
  })
})
