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
displaySubscription
------------------------------------------------------*/

function displaySubscription(subscription) {
  let item = ''
  + '<tr class="summary">'
  + '<td class="chk"><input type="checkbox" value="' + subscription.id + '"></td>'
  + '<td>' + subscription.name + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td><pre>' + JSON.stringify(subscription, null, 2) + '</pre></td>'
  + '</tr>'
  $('#subscriptions > tbody').append(item)
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
    let checkboxes = $('#subscriptions tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      MyAyla.deleteSubscription($(checkbox).val(), function(data) {
        let tr1 = $(checkbox).closest('tr')
        let tr2 = $(tr1).next()
        $(tr1).remove()
        $(tr2).remove()
      }, displayError)
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
getSubscriptions
------------------------------------------------------*/

function getSubscriptions() {
  MyAyla.getSubscriptions(function (subscriptions) {
    subscriptions.forEach(function(subscription) {
      displaySubscription(subscription.subscription)
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
        $('#select-device').append(option)
      })
    }
    getDevice(deviceId)
  }, displayError)
}

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
      getDevices()
      getSubscriptions()
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
    $('#subscriptions > tbody').empty()
    MyAyla.logout(function (data) {
      $('#account-link').html('Login')
    }, displayError)
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
Add Subscription - Close
------------------------------------------------------*/

$(function() {
  $('#add-subscription-form .close-me').click(function(event) {
    $('#add-subscription-form').get(0).reset()
    $('#add-subscription-row').hide()
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
  console.log('here')
  if(MyAyla.isLoggedIn()) {
    $('#account-link').html('Logout')
    getDevices()
    getSubscriptions()
  } else {
    $('#account-link').html('Login')
  }
})
