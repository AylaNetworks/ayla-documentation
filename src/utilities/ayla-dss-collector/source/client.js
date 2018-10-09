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
// 
//------------------------------------------------------

$(function() {
  synchWithServer()
})

//------------------------------------------------------
// synchWithServer
//------------------------------------------------------

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

//------------------------------------------------------
// 
//------------------------------------------------------

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
    AylaDssCollector.logout(authToken, function (data) {}, displayError)
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
// subscribe/unsubscribe checkbox
//------------------------------------------------------

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

//------------------------------------------------------
// subscribe
//------------------------------------------------------

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

//------------------------------------------------------
// unsubscribe
//------------------------------------------------------

function unsubscribe(subscriptionType) {
  AylaDssCollector.unsubscribe(subscriptionType, Cookies.get('auth_token'), displayUnsubscribe, displayError)
}

//------------------------------------------------------
// displayAction
//------------------------------------------------------

function displaySubscribe(data) {displayAction('Subscribing to', 'subscribe', data)}
function displayUnsubscribe(data) {displayAction('Unsubscribing from', 'unsubscribe', data)}

function displayAction(title, appearance, data) {
  var dateStr = new Date().toISOString().slice(0,19)
  var id = 'ID' + dateStr.replace(/:/g, '0') + Math.floor(Math.random() * 99) + 10
  var t = dateStr.replace(/T/g, ' ') + ' ' + title + ' ' + data.subscription_type + ' events'
  var p = '<div><a data-toggle="collapse" href="#' + id + '" class="terminal ' + appearance + '">' + t + '</a></div>'
  var b = '<div id="' + id + '" class="collapse"><pre style="margin-bottom:16px;">'
  var e = '</pre></div>'
  $('#subscription-history').prepend(p + b + JSON.stringify(data, null, 2) + e)
}

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
