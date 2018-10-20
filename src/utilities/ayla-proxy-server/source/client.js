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
// displayError
//------------------------------------------------------

function displayError(statusCode, statusText) {
  $('#error-msg span').html(statusCode + ' ' + statusText)
  $('#error-msg').show()
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
    /*
    if(details.direction === 'input') {
      $('#property-value').prop('disabled', false)
    } else {
      $('#property-value').prop('disabled', true)
    }
    */
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
// login
//------------------------------------------------------

$(function() {
  $('#login-form' ).submit(function(event) {
    event.preventDefault()
    $('body').trigger('click')
    var email = $('#email').val()
    var password = $('#password').val()
    var appId = $('#appId').val()
    var appSecret = $('#appSecret').val()
    AylaProxyServer.login(email, password, appId, appSecret, function(data) {
      $('#account-link').html('Logout')
      createAuthToken(data.access_token)
      getDevices()
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
// onLoad
//------------------------------------------------------

$(function() {
  if(Cookies.get('auth_token')) {
    $('#account-link').html('Logout')
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
