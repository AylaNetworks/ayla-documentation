var webSockets = [];
webSockets['connectivity'] = null;
webSockets['registration'] = null;
webSockets['datapoint'] = null;
webSockets['datapointack'] = null;
webSockets['location'] = null;

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
    event.preventDefault();
    event.returnValue = ''; // required by chrome.
  });
});

//*********************************************
// On Unload
//*********************************************

$(function() {
  window.addEventListener("unload", function (event) {
    webSockets.forEach(function(webSocket) {
      if(webSocket) {
        webSocket.close();
        console.log("Closed websocket");
      }
    });
  });
});

//*********************************************
// 
//*********************************************
/*
$(function() {
  $("#view").change(function() {
    $(this).blur();
    var id = $(this).val();
    $('#' + id).show();
    $('#' + id).siblings().hide();

    if(id === 'devices') {
      $('#' + id).trigger('isVisible');
    }
  });
});

$(function() {
  $('#devices').bind('isVisible', initDevicePage);
});

function initDevicePage() {
  console.log('initDevicePage');
}
*/
//*********************************************
// 
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

  var aToken = Cookies.get('access_token');

  var srv = JSON.parse($('#service').val());
  var clientType = $('#client-type').val();
  var url = urls[srv.region][srv.deployment][clientType];
  var oemModel = $('#oem-model').val();
  var dsn = $('#dsn').val();
  var propertyName = $('#property-name').val();

  /*
  console.log('Region:       ' + srv.region);
  console.log('Deployment:   ' + srv.deployment);
  console.log('clientType:   ' + clientType);
  console.log('eventType:    ' + eventType);
  console.log('oemMmodel:    ' + oemModel);
  console.log('dsn:          ' + dsn);
  console.log('propertyName: ' + propertyName);
  console.log(url);
  */

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
        webSockets[eventType] = new WebSocket(url + '?stream_key=' + obj.subscription.stream_key);
        run(url, obj, eventType, webSockets[eventType]);
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
// stop
//*********************************************

function stop(eventType) {
  webSockets[eventType].close();
  webSockets[eventType] = null;
}

//*********************************************
// run
//*********************************************

function run(url, data, eventType, webSocket) {

  webSocket.onopen = function(event) {
    var json = JSON.stringify(data, null, 2);
    displayCollapse('Open ' + toInitialCaps(eventType) + ' Event Stream', 'URL: ' + url + '\n' + json);
  }

  webSocket.onerror = function(error) {
  	displayString('error is ' + error);
  }

  webSocket.onmessage = function(event) {
    if(event.data.includes("|Z")) {
      webSocket.send("Z");
      displayString('Heartbeat on ' + toInitialCaps(eventType) + ' Event Stream', 'heartbeats');
    } else {
      displayEvent(event);
    }
  }

  webSocket.onclose = function(event) {
    displayString('Close ' + toInitialCaps(eventType) + ' Event Stream');
  }
}

//*********************************************
// displayString
//*********************************************

function displayString(str, id = 'messages') {
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

  var title = toInitialCaps(data.metadata.event_type);

  switch(data.metadata.event_type) {
    case 'connectivity':
    title = title + ' for ' + data.metadata.dsn + ': ' + data.connection.status;
    break;

    case 'datapoint':
    title = title + ' for ' + data.metadata.dsn + ': ' + data.metadata.display_name + ' = ' + data.datapoint.value;
    break;

    case 'datapointack':
    title = title + ' for ' + data.metadata.dsn + ': ' + data.metadata.display_name + ' = ' + data.datapoint.value;
    break;

    case 'location':
    title = title + ' for ' + data.metadata.dsn + ': lat = ' + data.location_event.lat + ', long = ' + data.location_event.long
    break;

    case 'registration':
    title = title + ' for ' + data.metadata.dsn + ': registered = ' + data.registration_event.registered;
    break;

    default:
    break;
  }

  displayCollapse(title, json);
}

//*********************************************
// displayEventCard
//*********************************************

function displayEventCard(event) {
  var a = event.data.split('|');
  if(a.length != 2) {
    console.log('ERROR: Event split into ' + a.length + 'substrings.');
    return;
  }
  var data = JSON.parse(a[1]);
  var arr = createPairs(data);
  displayCollapseCard('Event: ' + data.metadata.event_type, arr.join(''));
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
  $('#messages').prepend(p + b + body + e);
}

//*********************************************
// displayCollapseCard
//*********************************************

function displayCollapseCard(title, body) {
  var now = new Date();
  var t = toDateTime(now) + ' ' + title;
  var id = 'ID' + now.getTime();
  var p = '<p><a data-toggle="collapse" href="#' + id + '" class="terminal-font">' + t + '</a></p>';
  var b = '<div id="' + id + '" class="collapse"><div class="card card-body" style="margin-bottom:16px;">';
  var e = '</div></div>';
  $('#messages').prepend(p + b + body + e);
}

//*********************************************
// createPairs
//*********************************************

function createPairs(obj) {
  var arr = [];
  for(var key in obj) {
    arr.push(createPair(key, obj[key]));
    if(typeof obj[key] === 'object') {
      arr = arr.concat(createPairs(obj[key]));
    }
  }
  return arr;
}

//*********************************************
// createPair
//*********************************************

function createPair(key, value) {
  return ''
    + '<div class="row">'
    + '<div class="col-md-3 terminal-font">' + key + '</div>'
    + '<div class="col-md-9 terminal-font">' + value + '</div>'
    + '</div>';
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

