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
      var details = arr[0].device
      $.each(arr, function(index, data) {
        var option = $('<option/>')
        option.text(data.device.product_name)
        option.val(data.device.key)
        option.data("details", data.device)
        $('#select-devices').append(option)
      })
    }
    getProperties(details.key)
  }, displayError)
}

/*------------------------------------------------------
getProperties
------------------------------------------------------*/

function getProperties(deviceId) {
  MyAyla.getProperties(deviceId, function (arr) {
    $('#select-properties').empty()
    if(arr.length) {
      var details = arr[0].property
      $.each(arr, function(index, data) {
        var option = $('<option/>')
        option.text(data.property.display_name)
        option.val(data.property.key)
        option.data("details", data.property)
        $('#select-properties').append(option)
      })
    }
    displayPropertyValue(details)
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
    var selected = $('#select-properties option:selected')
    var details = $(selected).data("details")
    var propertyId = details.key
    var value = $(this).prop('checked') + 0
    createDatapoint(propertyId, value)
  })
})

$(function() {
  $('#save-property-value').click(function(event) {
    var selected = $('#select-properties option:selected')
    var details = $(selected).data("details")
    var propertyId = details.key
    var value = $('#value-wrapper input').val()
    createDatapoint(propertyId, value)
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
