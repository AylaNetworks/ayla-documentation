var domain = 'https://docs.aylanetworks.com'

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

This function also allows the setting of "from device" values
for the purpose of testing.
------------------------------------------------------*/

function displayPropertyValue(type, value, direction) {

  $('#value-label').show()
  $('#value-wrapper').show()

  let status = (direction==='input') ? '>' : ' disabled>'

  switch(type) {
    case 'boolean':
    $('#value-button-wrapper').hide()

    $('#value-wrapper').empty().append(''
      + '<label class="switch" style="margin-bottom:0;">'
      + '<input id="property-value" type="checkbox" value="' + value + '"' + status
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
getDevice
------------------------------------------------------*/

function getDevice(deviceId) {
  MyAyla.getDevice(deviceId, function (data) {
    getProperties(data.device.key)
  }, displayError)
}

/*------------------------------------------------------
getDevices
------------------------------------------------------*/

function getDevices() {
  MyAyla.getDevices(function (arr) {
    $('#select-devices').empty()
    if(arr.length) {
      var deviceId = arr[0].device.key
      $.each(arr, function(index, data) {
        var option = $('<option/>')
        option.text(data.device.product_name)
        option.val(data.device.key)
        $('#select-devices').append(option)
      })
    }
    getProperties(deviceId)
  }, displayError)
}

/*------------------------------------------------------
getProperty
------------------------------------------------------*/

function getProperty(propertyId) {
  MyAyla.getProperty(propertyId, function (data) {
    displayPropertyValue(data.property.base_type, data.property.value, data.property.direction)
  }, displayError)
}

/*------------------------------------------------------
getProperties
------------------------------------------------------*/

function getProperties(deviceId) {
  MyAyla.getProperties(deviceId, function (arr) {
    $('#select-properties').empty()
    if(arr.length) {
      var type = arr[0].property.base_type
      var value = arr[0].property.value
      var direction = arr[0].property.direction
      $.each(arr, function(index, data) {
        var option = $('<option/>')
        option.text(data.property.display_name)
        option.val(data.property.key)
        $('#select-properties').append(option)
      })
    }
    displayPropertyValue(type, value, direction)
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
    $('#select-devices').empty()
    $('#select-properties').empty()
    $('#value-label').hide()
    $('#value-wrapper').hide()
    $('#value-button-wrapper').hide()
    MyAyla.logout(function (data) {
      $('#account-link').html('Login')
    }, displayError)
  })
})
 
/*------------------------------------------------------
On Change Datapoint (for boolean properties)
On Click Datapoint (for non-boolean properties)
------------------------------------------------------*/

$(function() {
  $('#value-wrapper').delegate('input:checkbox', "change", function(event) {
    $(this).blur()
    let selected = $('#select-properties option:selected')
    let propertyId = $(selected).val()
    let value = $(this).prop('checked') + 0
    createDatapoint(propertyId, value)
  })
})

$(function() {
  $('#save-property-value').click(function(event) {
    let selected = $('#select-properties option:selected')
    let propertyId = $(selected).val()
    let value = $('#value-wrapper input').val()
    createDatapoint(propertyId, value)
  })
})

/*------------------------------------------------------
On Change Device
------------------------------------------------------*/

$(function() {
  $( "#select-devices" ).change(function() {
    $(this).blur()
    let selected = $('#select-devices option:selected')
    let deviceId = $(selected).val()
    getProperties(deviceId)
  })
})

/*------------------------------------------------------
On Change Property
------------------------------------------------------*/

$(function() {
  $( "#select-properties" ).change(function() {
    $(this).blur()
    var selected = $('#select-properties option:selected')
    let propertyId = $(selected).val()
    getProperty(propertyId)
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
On Load
------------------------------------------------------*/

$(function() {
  if(MyAyla.isLoggedIn()) {
    $('#account-link').html('Logout')
    getDevices()
  } else {
    $('#account-link').html('Login')
  }
})
