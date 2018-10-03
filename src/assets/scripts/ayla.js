//*********************************************
// createDatapoint
//*********************************************

function createDatapoint(propertyId, value, done, fail) {

  var data = JSON.stringify({
    "datapoint": {
      "value": value,
      "metadata": {
        "key1": "",
        "key2": ""
      }
    }
  });

  var jqxhr = $.ajax({
    method: "POST",
    url: "https://docs.aylanetworks.com/api/v1/properties/" + propertyId + '/datapoints',
    contentType: 'application/json',
    data: data,
    accept: 'application/json',
    dataType: 'json'
  })
  .done(function(msg) {
    done(msg);
  })
  .fail(function(jqXHR, textStatus) {
    fail(jqXHR, textStatus);
  });
}

//*********************************************
// createDssStream
//*********************************************

function createDssStream(data, done, fail) {
  var jqxhr = $.ajax({
    method: "POST",
    url: "https://docs.aylanetworks.com/api/v1/dss/streams",
    contentType: 'application/json',
    data: JSON.stringify(data),
    accept: 'application/json',
    dataType: 'json'
  })
  .done(function(msg) {
    done(msg);
  })
  .fail(function(jqXHR, textStatus) {
    fail(jqXHR, textStatus);
  });
}

//*********************************************
// destroyDssStream
//*********************************************

function destroyDssStream(type, done, fail) {
  var jqxhr = $.ajax({
    method: "DELETE",
    url: "https://docs.aylanetworks.com/api/v1/dss/streams/" + type,
    accept: 'application/json',
    dataType: 'json'
  })
  .done(function(msg) {
    done(msg);
  })
  .fail(function(jqXHR, textStatus) {
    fail(jqXHR, textStatus);
  });
}

//*********************************************
// getDevice
//*********************************************

function getDevice(deviceId, done, fail) {
  var jqxhr = $.ajax({
    method: "GET",
    url: "https://docs.aylanetworks.com/api/v1/devices/" + deviceId,
    accept: 'application/json',
    dataType: 'json'
  })
  .done(function(msg) {
    done(msg);
  })
  .fail(function(jqXHR, textStatus) {
    fail(jqXHR, textStatus);
  });
}

//*********************************************
// getDevices
//*********************************************

function getDevices(done, fail) {
  var jqxhr = $.ajax({
    method: "GET",
    url: "https://docs.aylanetworks.com/api/v1/devices",
    accept: 'application/json',
    dataType: 'json'
  })
  .done(function(msg) {
    done(msg);
  })
  .fail(function(jqXHR, textStatus) {
    fail(jqXHR, textStatus);
  });
}

//*********************************************
// getProperty
//*********************************************

function getProperty(propertyId, done, fail) {
  var jqxhr = $.ajax({
    method: "GET",
    url: "https://docs.aylanetworks.com/api/v1/properties/" + propertyId,
    accept: 'application/json',
    dataType: 'json'
  })
  .done(function(msg) {
    done(msg);
  })
  .fail(function(jqXHR, textStatus) {
    fail(jqXHR, textStatus);
  });
}

//*********************************************
// getProperties
//*********************************************

function getProperties(deviceId, done, fail) {
  var jqxhr = $.ajax({
    method: "GET",
    url: "https://docs.aylanetworks.com/api/v1/devices/" + deviceId + "/properties",
    accept: 'application/json',
    dataType: 'json'
  })
  .done(function(msg) {
    done(msg);
  })
  .fail(function(jqXHR, textStatus) {
    fail(jqXHR, textStatus);
  });
}

