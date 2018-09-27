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

function getProperties(dsn, done, fail) {
  var jqxhr = $.ajax({
    method: "GET",
    url: "https://docs.aylanetworks.com/api/v1/devices/" + dsn + "/properties",
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
