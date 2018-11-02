var domain = 'https://docs.aylanetworks.com'

/*------------------------------------------------------
createDatapoint
------------------------------------------------------*/

function createDatapoint(propertyId, value) {
  MyAyla.createDatapoint(propertyId, value, function (datapoint) {
    console.log('datapoint value = ' + datapoint.datapoint.value)
  }, displayMessage)
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
      MyAyla.dssDeleteSubscription($(checkbox).val(), function (data) {
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
  MyAyla.dssGetSubscriptions(function (subscriptions) {
    subscriptions.forEach(function(subscription) {
      displaySubscription(subscription.subscription)
    })
  }, displayMessage)
}

/*------------------------------------------------------
getDevice
------------------------------------------------------*/

function getDevice(deviceId) {
  MyAyla.getDevice(deviceId, function (device) {
    getProperties(device.device.key)
  }, displayMessage)
}

/*------------------------------------------------------
getDevices
------------------------------------------------------*/

function getDevices() {
  MyAyla.getDevices(function (devices) {
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
  MyAyla.getProperties(deviceId, function (properties) {
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
    MyAyla.login(email, password, appId, appSecret, function(data) {
      $('#account-link').html('Logout')
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
    $('#select-devices').empty()
    $('#select-properties').empty()
    $('#value-label').hide()
    $('#value-wrapper').hide()
    $('#value-button-wrapper').hide()
    $('#subscriptions > tbody').empty()
    MyAyla.logout(function (data) {
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

    MyAyla.dssCreateSubscription(data, function (subscription) {
      displaySubscription(subscription.subscription)
    }, displayMessage)

    $('#add-subscription-form').get(0).reset()
    $('#add-subscription-row').hide()
  })
})

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
On Load
------------------------------------------------------*/

$(function() {
  if(MyAyla.isLoggedIn()) {
    $('#account-link').html('Logout')
    getDevices()
    dssGetSubscriptions()
  } else {
    $('#account-link').html('Login')
  }
})
