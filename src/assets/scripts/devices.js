//*********************************************
// On Load
//*********************************************

$(function() {
  getDevices(getDevicesDoneCB, failCB);
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
// On Select Device
//*********************************************

$(function() {
  $( "#select-devices" ).change(function() {
    $(this).blur();
    var selected = $('#select-devices option:selected');
    var details = $(selected).data("details");
    getDevice(details.key, getDeviceDoneCB, failCB);
  });
});

//*********************************************
// On Select Property
//*********************************************

$(function() {
  $( "#select-properties" ).change(function() {
    $(this).blur();
    var selected = $('#select-properties option:selected');
    var details = $(selected).data("details");
    getProperty(details.key, getPropertyDoneCB, failCB);
  });
});

//*********************************************
// On Set Property Value
//*********************************************

$(function() {
  $('#value-wrapper').delegate('#save-property-value', "click", function(event) {
    $(this).blur();
    var selected = $('#select-properties option:selected');
    var details = $(selected).data("details");
    var propertyId = details.key;
    var value = $('#property-value').val();
    createDatapoint(propertyId, value, createDatapointDoneCB, failCB);

    console.log('propertyId = ' + propertyId + ', value = ' + value);
  });
});

//*********************************************
// On Property Value Checkbox Change
//*********************************************

$(function() {
  $('#value-wrapper').delegate('input:checkbox', "change", function(event) {
    $(this).blur();

    var selected = $('#select-properties option:selected');
    var details = $(selected).data("details");
    var propertyId = details.key;
    var value = 0;
    if($(this).prop('checked')) {value = 1;}
    createDatapoint(propertyId, value, createDatapointDoneCB, failCB);

    console.log('propertyId = ' + propertyId + ', value = ' + value);
  });
});

//*********************************************
// getDevicesDoneCB
//*********************************************

var getDevicesDoneCB = function (devices) {
  $('#select-devices').empty();

  if(devices.length) {
    var details = devices[0].device;

    $.each(devices, function(index, device) {
      var option = $('<option/>');
      option.text(device.device.product_name);
      option.data("details", device.device);
      $('#select-devices').append(option);
    });

    displayDevice(details);
    getProperties(details.key, getPropertiesDoneCB, failCB);
  }
}

//*********************************************
// getDeviceDoneCB
//*********************************************

var getDeviceDoneCB = function (device) {
  displayDevice(device.device);
  getProperties(device.device.key, getPropertiesDoneCB, failCB);
}

//*********************************************
// getPropertiesDoneCB
//*********************************************

var getPropertiesDoneCB = function (properties) {
  $('#select-properties').empty();

  if(properties.length) {
    var details = properties[0].property;

    $.each(properties, function(index, property) {
      var option = $('<option/>');
      option.text(property.property.display_name);
      option.data("details", property.property);
      $('#select-properties').append(option);
    });

    displayProperty(details);
  }
}

//*********************************************
// getPropertyDoneCB
//*********************************************

var getPropertyDoneCB = function(property) {
  displayProperty(property.property);
}

//*********************************************
// createDatapointDoneCB
//*********************************************

var createDatapointDoneCB = function(datapoint) {
  console.log('datapoint value = ' + datapoint.datapoint.value);
}

//*********************************************
// failCB
//*********************************************

var failCB = function (jqXHR, textStatus) {
  console.log(textStatus);
  console.log(JSON.stringify(jqXHR, null, 2));
}

//*********************************************
// displayDevice
//*********************************************

function displayDevice(details) {
  $('#device-id').val(details.key);
  $('#device-dsn').val(details.dsn);
  $('#device-model').val(details.model);
  $('#device-oem-model').val(details.oem_model);
  $('#device-software-version').val(details.sw_version);
  $('#device-template-id').val(details.template_id);
  $('#device-mac-address').val(details.mac);
  $('#device-lan-ip').val(details.lan_ip);
  $('#device-connection-time').val(details.connected_at);
  $('#device-lan-enabled').val(details.lan_enabled);
  $('#device-has-properties').val(details.has_properties);
  $('#device-product-class').val(details.product_class);
  $('#device-connection-status').val(details.connection_status);
  $('#device-latitude').val(details.lat);
  $('#device-longitude').val(details.lng);
  $('#device-product-name').val(details.product_name);
  $('#device-locality').val(details.locality);
  $('#device-type').val(details.device_type);
  console.log(JSON.stringify(details, null, 2));
}

//*********************************************
// displayProperty
//*********************************************

function displayProperty(details) {

  switch(details.base_type) {

    case 'boolean':
    // $('#value-wrapper').empty().append('<input type="checkbox" id="property-value">');
    $('#value-wrapper').empty().append('<label class="switch"><input id="property-value" type="checkbox"><span class="slider round"></span></label>');
    break;

    case 'decimal':
    case 'number':
    case 'string':
    default:
    if(details.direction === 'output') {
      $('#value-wrapper').empty().append(''
        + '<input type="text" class="form-control form-control-sm" id="property-value">');
    } else {
      $('#value-wrapper').empty().append(''
        + '<div class="row">'
        + '<div class="form-group col-md-12">'
        + '<input type="text" class="form-control form-control-sm" id="property-value">'
        + '</div>'
        + '<div class="form-group col-md-12">'
        + '<button id="save-property-value" type="button" class="btn btn-success btn-sm btn-block">Save</button>'
        + '</div>'
        + '</div>');
    }
    break;
  }

  displayValue(details.base_type, details.value);

  var direction = '';
  if(details.direction === 'output') {
    direction = 'Device to Cloud';
    $('#property-value').prop('disabled', true);
  }
  else {
    direction = 'Cloud to Device';
    $('#property-value').prop('disabled', false);
  }

  $('#property-id').val(details.key);
  $('#property-device-id').val(details.device_key);
  $('#property-value-type').val(details.base_type);
  $('#property-direction').val(direction);
  $('#property-db-name').val(details.name);
  $('#property-display-name').val(details.display_name);
  $('#property-read-only').val(details.read_only);
  $('#property-scope').val(details.scope);
  $('#property-last-update-time').val(details.data_updated_at);
  $('#property-product-name').val(details.product_name);
  $('#property-track-only-changes').val(details.track_only_changes);
  $('#property-host-software-version').val(details.host_sw_version);
  $('#property-time-series').val(details.time_series);
  $('#property-derived').val(details.derived);
  $('#property-retention-days').val(details.retention_days);
  $('#property-ack-enabled').val(details.ack_enabled);
  console.log(JSON.stringify(details, null, 2));
}

//*********************************************
// displayValue
//*********************************************

function displayValue(type, value) {
  if(type === 'boolean') {
    if(value === 1) {
      $('#property-value').prop('checked', true);
    } else {
      $('#property-value').prop('checked', false);
    }
  } else {
    $('#property-value').val(value);
  }
}
