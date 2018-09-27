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

//*********************************************
// getProperty
//*********************************************

function getProperty(deviceId, propertyId, done, fail) {
  var jqxhr = $.ajax({
    method: "GET",
    url: "https://docs.aylanetworks.com/api/v1/devices/" + deviceId + "/properties/" + propertyId,
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
