var sockets = [];
sockets['connectivity'] = null;
sockets['registration'] = null;
sockets['datapoint'] = null;
sockets['datapointack'] = null;
sockets['location'] = null;

var urls = [];
urls["cn"] = [];
urls["cn"]["dev"] = [];
urls["cn"]["dev"]["cloud"] = 'wss://stream.ayla.com.cn/stream/stream';
urls["cn"]["dev"]["mobile"] = 'wss://mstream.ayla.com.cn/stream';
urls["cn"]["staging"] = [];
urls["cn"]["staging"]["cloud"] = '';
urls["cn"]["staging"]["mobile"] = '';
urls["cn"]["field"] = [];
urls["cn"]["field"]["cloud"] = 'wss://stream-field.ayla.com.cn/stream';
urls["cn"]["field"]["mobile"] = 'wss://mstream-field.ayla.com.cn/stream';

urls["eu"] = [];
urls["eu"]["dev"] = [];
urls["eu"]["dev"]["cloud"] = '';
urls["eu"]["dev"]["mobile"] = '';
urls["eu"]["staging"] = [];
urls["eu"]["staging"]["cloud"] = '';
urls["eu"]["staging"]["mobile"] = '';
urls["eu"]["field"] = [];
urls["eu"]["field"]["cloud"] = 'wss://stream-field-eu.aylanetworks.com/stream';
urls["eu"]["field"]["mobile"] = 'wss://mstream-field-eu.aylanetworks.com/stream';

urls["us"] = [];
urls["us"]["dev"] = [];
urls["us"]["dev"]["cloud"] = 'wss://stream.aylanetworks.com/stream';
urls["us"]["dev"]["mobile"] = 'wss://mstream-dev.aylanetworks.com/stream';
urls["us"]["staging"] = [];
urls["us"]["staging"]["cloud"] = 'wss://staging-dss.ayladev.com/stream';
urls["us"]["staging"]["mobile"] = 'wss://staging-mstream.ayladev.com/stream';
urls["us"]["field"] = [];
urls["us"]["field"]["cloud"] = 'wss://stream-field.aylanetworks.com/stream';
urls["us"]["field"]["mobile"] = 'wss://mstream-field.aylanetworks.com/stream';

//*********************************************
// On Load
//*********************************************

//*********************************************
// On Before Unload
//*********************************************

$(function() {
  window.addEventListener("beforeunload", function (event) {
    //event.preventDefault();
    //event.returnValue = ''; // required by chrome.
  });
});

//*********************************************
// On Unload
//*********************************************

$(function() {
  window.addEventListener("unload", function (event) {
    sockets.forEach(function(socket) {
      if(socket) {
        socket.close();
        console.log("Closed socket");
      }
    });
  });
});

//*********************************************
// On Select Events Checkbox Change
//*********************************************

$(function() {
  $('#select-events div input:checkbox').change(function() {
    console.log('select-events');
    $(this).blur();
    var eventType = $(this).val();
    if($(this).is( ":checked")) {
      openSocket(eventType);
    } else {
      closeSocket(eventType);
    }
  });
});

//*********************************************
// openSocket
//*********************************************

function openSocket(eventType) {

  var aToken = Cookies.get('access_token');

  var srv = JSON.parse($('#service').val());
  var clientType = $('#client-type').val();
  var url = urls[srv.region][srv.deployment][clientType];
  var oemModel = $('#oem-model').val();
  var dsn = $('#dsn').val();
  var propertyName = $('#property-name').val();

  var data = JSON.stringify({
    "oem_model": oemModel,
    "client_type": clientType,
    "subscription_type": eventType,
    "property_name": propertyName,
    "access_token": aToken
  });

  var jqxhr = $.ajax({
    method: "POST",
    url: "/assets/server/subscription.php",
    contentType: 'application/json',
    data: data,
    dataType: 'json'
  })

  .done(function(msg) {

    try {
      var obj = JSON.parse(msg);
    } catch(e) {
      displayString(msg);
      return;
    }

    if("subscription" in obj) {

      try {
        sockets[eventType] = new WebSocket(url + '?stream_key=' + obj.subscription.stream_key);
        monitorSocket(url, obj, eventType, sockets[eventType]);
      } catch (exception) {
        displayString(exception);
      }

    } else {
      displayString(msg);
    }
  })

  .fail(function(jqXHR, textStatus) {
    displayString(textStatus);
  })
}

//*********************************************
// monitorSocket
//*********************************************

function monitorSocket(url, data, eventType, socket) {

  socket.onopen = function(event) {
    var json = JSON.stringify(data, null, 2);
    displayCollapse('Open ' + toInitialCaps(eventType) + ' Event Stream', 'URL: ' + url + '\n' + json);
  }

  socket.onerror = function(error) {
  	displayString('error is ' + error);
  }

  socket.onmessage = function(event) {
    if(event.data.includes("|Z")) {
      socket.send("Z");
      displayString('Heartbeat on ' + toInitialCaps(eventType) + ' Event Stream', 'heartbeats-page');
    } else {
      processEvent(event);
      displayEvent(event);
    }
  }

  socket.onclose = function(event) {
    displayString('Close ' + toInitialCaps(eventType) + ' Event Stream');
  }
}

//*********************************************
// closeSocket
//*********************************************

function closeSocket(eventType) {
  sockets[eventType].close();
  sockets[eventType] = null;
}

//*********************************************
// processEvent
//*********************************************

function processEvent(event) {
  var a = event.data.split('|');
  if(a.length != 2) {
    console.log('ERROR: Event split into ' + a.length + 'substrings.');
    return;
  }
  var data = JSON.parse(a[1]);

  switch(data.metadata.event_type) {
    case 'connectivity':
    break;

    case 'datapoint':
      var device = $('#select-devices option:selected');
      var dd = $(device).data("details");

      var property = $('#select-properties option:selected');
      var pd = $(property).data("details");

      if(dd.dsn === data.metadata.dsn && pd.name === data.metadata.property_name) {
        displayValue(pd.base_type, data.datapoint.value);
      }
    break;

    case 'datapointack':
    break;

    case 'location':
    break;

    case 'registration':
    break;

    default:
    break;
  }
}

//*********************************************
// displayString
//*********************************************

function displayString(str, id = 'events-page') {
  var s = toDateTime(new Date()) + ' ' + str;
  var p = '<div class="terminal-font">' + s + '</div>';
  $('#' + id).prepend(p);
}

//*********************************************
// displayEvent
//*********************************************

function displayEvent(event) {
  var a = event.data.split('|');
  if(a.length != 2) {
    console.log('ERROR: Event split into ' + a.length + 'substrings.');
    return;
  }
  var data = JSON.parse(a[1]);
  var json = JSON.stringify(data, null, 2);

  var title = toInitialCaps(data.metadata.event_type) + ' for ' + data.metadata.dsn + ': ';

  switch(data.metadata.event_type) {
    case 'connectivity':
    title = title + data.connection.status;
    break;

    case 'datapoint':
    var value = data.datapoint.value;
    if(value.length > 30) {value = value.slice(0, 30) + ' ...';}
    title = title + data.metadata.display_name + ' = ' + value;
    break;

    case 'datapointack':
    var value = data.datapointack.value;
    if(value.length > 30) {value = value.slice(0, 30) + ' ...';}
    title = title + data.metadata.display_name + ' = ' + value;
    break;

    case 'location':
    title = title + 'lat = ' + data.location_event.lat + ', long = ' + data.location_event.long
    break;

    case 'registration':
    title = title + 'registered = ' + data.registration_event.registered;
    break;

    default:
    break;
  }

  displayCollapse(title, json);
}

//*********************************************
// displayCollapse
//*********************************************

function displayCollapse(title, body) {
  var now = new Date();
  var t = toDateTime(now) + ' ' + title;
  var id = 'ID' + now.getTime();
  var p = '<div><a data-toggle="collapse" href="#' + id + '" class="terminal-font">' + t + '</a></div>';
  var b = '<div id="' + id + '" class="collapse"><pre style="margin-bottom:16px;">';
  var e = '</pre></div>';
  $('#events-page').prepend(p + b + body + e);
}

//*********************************************
// toDateTime
//*********************************************

function toDateTime(date) {
  return date.toISOString().slice(0,19).replace('T', ' ');
}

//*********************************************
// toInitialCaps
//*********************************************

function toInitialCaps(s) {
  return s.substring(0,1).toUpperCase() + s.substring(1);
}
