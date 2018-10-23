var domain = 'https://docs.aylanetworks.com'

/*------------------------------------------------------
createDatapoint
------------------------------------------------------*/

function createDatapoint(propertyId, value) {
  AylaProxyClient.createDatapoint(propertyId, value, Cookies.get('auth_token'), function (datapoint) {
    console.log('datapoint value = ' + datapoint.datapoint.value)
  }, displayMessage)
}

/*------------------------------------------------------
deleteAuthToken
------------------------------------------------------*/

function deleteAuthToken(authToken) {
  Cookies.remove('auth_token')
}

/*------------------------------------------------------
displayMessage
------------------------------------------------------*/

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

This function also allows the setting of "from device" values
for the purpose of testing.
------------------------------------------------------*/

function displayPropertyValue(details) {

  $('#value-label').show()
  $('#value-wrapper').show()

  switch(details.base_type) {
    case 'boolean':
    $('#value-button-wrapper').hide()

    $('#value-wrapper').empty().append(''
      + '<label class="switch" style="margin-bottom:0;">'
      + '<input id="property-value" type="checkbox" value="' + details.value + '">'
      + '<span class="slider round"></span>'
      + '</label>')
    break

    default:
    $('#value-wrapper').empty().append('<input id="property-value" type="text" class="form-control form-control-sm" value="' + details.value + '">')
    $('#value-button-wrapper').show()
    break
  }
}

/*------------------------------------------------------
displaySubscription
------------------------------------------------------*/

function displaySubscription(subscription) {
  let item = ''
  + '<tr class="summary">'
  + '<td class="chk"><input type="checkbox" value="' + subscription.id + '"></td>'
  + '<td>' + subscription.id + '</td>'
  + '<td>' + subscription.name + '</td>'
  + '<td>' + subscription.subscription_type + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=3><pre>' + JSON.stringify(subscription, null, 2) + '</pre></td>'
  + '</tr>'
  $('#subscriptions > tbody').append(item)
}

/*------------------------------------------------------
Display Subscription Details
------------------------------------------------------*/

$(function() {
  $("#subscriptions").delegate('tr td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
Delete Subscriptions
------------------------------------------------------*/

$(function() {
  $('#delete-subscriptions-btn').click(function(event) {
    let checkboxes = $('#subscriptions tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      AylaProxyClient.dssDeleteSubscription($(checkbox).val(), Cookies.get('auth_token'), function (data) {
        console.log(JSON.stringify(data, null, 2))
        let tr1 = $(checkbox).closest('tr')
        let tr2 = $(tr1).next()
        $(tr1).remove()
        $(tr2).remove()
      }, displayMessage)
    })
  })
})

/*------------------------------------------------------
Select ALL Subscriptions
------------------------------------------------------*/

$(function() {
  $('#select-all-subscriptions-btn').click(function(event) {
    $('#subscriptions tbody tr td input[type=checkbox]').prop('checked', true)
  })
})

/*------------------------------------------------------
Deselect ALL Subscriptions
------------------------------------------------------*/

$(function() {
  $('#deselect-all-subscriptions-btn').click(function(event) {
    $('#subscriptions tbody tr td input[type=checkbox]').prop('checked', false)
  })
})

/*------------------------------------------------------
dssGetSubscriptions
------------------------------------------------------*/

function dssGetSubscriptions() {
  AylaProxyClient.dssGetSubscriptions(Cookies.get('auth_token'), function (subscriptions) {
    subscriptions.forEach(function(subscription) {
      displaySubscription(subscription.subscription)
    })
  }, displayMessage)
}

/*------------------------------------------------------
getDevice
------------------------------------------------------*/

function getDevice(deviceId) {
  AylaProxyClient.getDevice(deviceId, Cookies.get('auth_token'), function (device) {
    getProperties(device.device.key)
  }, displayMessage)
}

/*------------------------------------------------------
getDevices
------------------------------------------------------*/

function getDevices() {
  AylaProxyClient.getDevices(Cookies.get('auth_token'), function (devices) {
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
  }, displayMessage)
}

/*------------------------------------------------------
getProperties
------------------------------------------------------*/

function getProperties(deviceId) {
  AylaProxyClient.getProperties(deviceId, Cookies.get('auth_token'), function (properties) {
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
  }, displayMessage)
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
    AylaProxyClient.login(email, password, appId, appSecret, function(data) {
      $('#account-link').html('Logout')
      saveAuthToken(data.access_token)
      saveAppCredentials(appId, appSecret)
      getDevices()
      dssGetSubscriptions()
    }, displayMessage)
  })
})

/*------------------------------------------------------
logout
------------------------------------------------------*/

$(function() {
  $('#logout-form' ).submit(function(event) {
    event.preventDefault()
    $('body').trigger('click')
    let authToken = Cookies.get('auth_token')
    deleteAuthToken()
    $('#select-devices').empty()
    $('#select-properties').empty()
    $('#value-label').hide()
    $('#value-wrapper').hide()
    $('#value-button-wrapper').hide()
    $('#subscriptions').empty()
    AylaProxyClient.logout(authToken, function (data) {
      $('#account-link').html('Login')
    }, displayMessage)
  })
})
 
/*------------------------------------------------------
On Change Datapoint (for boolean properties)
On Click Datapoint (for non-boolean properties)
------------------------------------------------------*/

$(function() {
  $('#value-wrapper').delegate('input:checkbox', "change", function(event) {
    $(this).blur()
    var selected = $('#select-properties option:selected')
    var details = $(selected).data("details")
    var propertyId = details.key
    var value = $(this).prop('checked') + 0
    createDatapoint(propertyId, value)
    console.log('propertyId = ' + propertyId + ', value = ' + value)
  })
})

$(function() {
  $('#save-property-value').click(function(event) {
    var selected = $('#select-properties option:selected')
    var details = $(selected).data("details")
    var propertyId = details.key
    var value = $('#value-wrapper input').val()
    createDatapoint(propertyId, value)
    console.log('propertyId = ' + propertyId + ', value = ' + value)
  })
})

/*------------------------------------------------------
On Change Device
------------------------------------------------------*/

$(function() {
  $( "#select-devices" ).change(function() {
    $(this).blur()
    var selected = $('#select-devices option:selected')
    var details = $(selected).data("details")
    getProperties(details.key)
  })
})

/*------------------------------------------------------
On Change Property
------------------------------------------------------*/

$(function() {
  $( "#select-properties" ).change(function() {
    $(this).blur()
    var selected = $('#select-properties option:selected')
    var details = $(selected).data("details")
    displayPropertyValue(details)
  })
})

/*------------------------------------------------------
On Click Add Subscription
------------------------------------------------------*/

$(function() {
  $('#add-subscription-btn').click(function(event) {
    $('#add-subscription-row').show()
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
    if(Cookies.get('auth_token')) {
      $('#login-form').hide()
      $('#logout-form').show()
    } else {
      let appId = Cookies.get('app_id')
      if(appId) {$('#appId').val(appId)}
      let appSecret = Cookies.get('app_secret')
      if(appSecret) {$('#appSecret').val(appSecret)}
      $('#login-form').show()
      $('#logout-form').hide()
    }
  })
})

/*------------------------------------------------------
On Load
------------------------------------------------------*/

$(function() {
  if(Cookies.get('auth_token')) {
    $('#account-link').html('Logout')
    getDevices()
    dssGetSubscriptions()
  } else {
    $('#account-link').html('Login')
  }
})

/*------------------------------------------------------
saveAuthToken
------------------------------------------------------*/

function saveAuthToken(authToken) {
  var date = new Date()
  date.setMonth(date.getMonth() + 10)
  var expires = date.toUTCString()
  Cookies.set('auth_token', authToken, {expires: 7})
}

/*------------------------------------------------------
saveAppCredentials
------------------------------------------------------*/

function saveAppCredentials(appId, appSecret) {
  var date = new Date()
  date.setMonth(date.getMonth() + 10)
  var expires = date.toUTCString()
  Cookies.set('app_id', appId, {expires: 7})
  Cookies.set('app_secret', appSecret, {expires: 7})
}
