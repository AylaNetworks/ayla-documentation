//*********************************************
// On Load
//*********************************************

$(function() {
  getDevices(getDevicesDoneCB, getDevicesFailCB);
});

//*********************************************
// On Tab Active
//*********************************************

$(function() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var tabId = $(e.target).attr("href");

    switch(tabId) {
      case '#events-page':
      break;
      
      case '#devices-page':
      if(!$('#select-devices').children().length) {
      }
      break;
      
      case '#analytics-page':
      break;
      
      case '#about-page':
      break;
      
      default:
      break;      
    }
  });
});

//*********************************************
// getDevicesDoneCB
//*********************************************

var getDevicesDoneCB = function (devices) {
  $('#select-devices').empty();
  $.each(devices, function(index, device) {
    var option = $('<option/>');
    option.text(device.device.product_name);
    option.data("details", device.device);
    $('#select-devices').append(option);
  });

  var selected = $('#select-devices option:selected');
  var details = $(selected).data("details");
  $('#device-details').html(JSON.stringify(details, null, 2));

  getProperties(details.dsn, getPropertiesDoneCB, getPropertiesFailCB);
}

//*********************************************
// getDevicesFailCB
//*********************************************

var getDevicesFailCB = function (jqXHR, textStatus) {
  console.log('getDevicesFailCB: ' + textStatus);
}

//*********************************************
// On Select Device
//*********************************************

$( "#select-devices" ).change(function() {
  var selected = $('#select-devices option:selected');
  var details = $(selected).data("details");
  $('#device-details').html(JSON.stringify(details, null, 2));
  $('#select-devices').blur();

  getProperties(details.dsn, getPropertiesDoneCB, getPropertiesFailCB);
});

//*********************************************
// getPropertiesDoneCB
//*********************************************

var getPropertiesDoneCB = function (properties) {
  $('#select-properties').empty();
  console.log("getPropertiesDoneCB");
  $.each(properties, function(index, property) {
    var option = $('<option/>');
    option.text(property.property.display_name);
    option.data("details", property.property);
    $('#select-properties').append(option);
  });

  var selected = $('#select-properties option:selected');
  var details = $(selected).data("details");
  $('#property-details').html(JSON.stringify(details, null, 2));

  displayValue(details.direction, details.base_type, details.value);
}

//*********************************************
// getPropertiesFailCB
//*********************************************

var getPropertiesFailCB = function (jqXHR, textStatus) {
  console.log('getPropertiesFailCB: ' + textStatus);
}

//*********************************************
// On Select Property
//*********************************************

$( "#select-properties" ).change(function() {
  var selected = $('#select-properties option:selected');
  var details = $(selected).data("details");
  $('#property-details').html(JSON.stringify(details, null, 2));
  $('#select-properties').blur();

  displayValue(details.direction, details.base_type, details.value);
});

//*********************************************
// displayValue
//*********************************************

function displayValue(direction, type, value) {
  console.log(type + ' = ' + value);

  if(direction === 'output') {
    direction = 'Device to Cloud';
    $('#property-value').prop('disabled', true);
    $('#get-set-value').val('get').text('Get');
    $('#get-set-value').removeClass('btn-warning').addClass('btn-success');
  }
  else {
    direction = 'Cloud to Device';
    $('#property-value').prop('disabled', false);
    $('#get-set-value').val('set').text('Set');
    $('#get-set-value').removeClass('btn-success').addClass('btn-warning');
  }

  $('#property-value-type').val(type);
  $('#property-direction').val(direction);
  $('#property-value').val(value);
}

//*********************************************
// On Get/Set Value
//*********************************************

$(function() {
  $('#get-set-value').click(function(event) {
    console.log($(this).val());
    $(this).blur();
  });
});

//*********************************************
// DSS Event Checkboxes
//*********************************************

$(function() {
  $(":checkbox").change(function() {

    $(this).blur();
    var eventType = $(this).val();
    if($(this).is( ":checked")) {
      start(eventType);
    } else {
      stop(eventType);
    }

  });
});

//*********************************************
// start
//*********************************************

function start(eventType) {
  console.log('Starting ' + eventType);
}

//*********************************************
// stop
//*********************************************

function stop(eventType) {
  console.log('Stopping ' + eventType);
}
