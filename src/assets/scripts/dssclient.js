var webSocket = null;

//*********************************************
// On Load
//*********************************************

//*********************************************
// Connect Button Event Handler
//*********************************************

$(function() {
  $("#connect-form" ).submit(function( event ) {
    event.preventDefault();
    console.log('Submitted connect form.');

    var aToken = Cookies.get('access_token');

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


    var service = $('#service').val();
//    console.log(service);

    var serviceObj = JSON.parse(service);
    var region = serviceObj.region;
//    console.log(region);
    var deployment = serviceObj.deployment;
//    console.log(deployment);

    var clientType = $('#client-type').val();
//    console.log(clientType);

    var url = urls[region][deployment][clientType];

//    var region = $('#region').val();
//    var deployment = $('#deployment').val();
    var eventType = $('#event-type').val();
    var oemModel = $('#oem-model').val();
    var dsn = $('#dsn').val();
    var propertyName = $('#property-name').val();

    console.log('Region:       ' + region);
    console.log('Deployment:   ' + deployment);
    console.log('clientType:   ' + clientType);
    console.log('eventType:    ' + eventType);
    console.log('oemMmodel:    ' + oemModel);
    console.log('dsn:          ' + dsn);
    console.log('propertyName: ' + propertyName);
    console.log(url);

    if(!url.length) {
      alert('This region + deployment + client-type combination is not available.');
      return;
    }

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
      console.log('LOGIN MSG: ' + msg);
      try {
        var obj = JSON.parse(msg);
      } catch(e) {
        return;
      }

      if("message" in obj) {
      } else if("subscription" in obj) {
        try {
        	webSocket = new WebSocket(url + '?stream_key=' + obj.subscription.stream_key);
          $('#connect').parent().hide();
          $('#disconnect').parent().show();
        	run();
        } catch (exception) {
          console.log('WebSocket Exception');
        }
      } else {
      }
    })
    .fail(function(jqXHR, textStatus) {
      console.log(textStatus);
    })
    .always(function() {
    });

  });
});

//*********************************************
// disconnect
//*********************************************

$(function() {
  $('#disconnect').click(function(event) {
      webSocket.close();
      $('#connect').parent().show();
      $('#disconnect').parent().hide();
  });
});

//*********************************************
// run
//*********************************************

function run() {
  displayString('Connected');

  webSocket.onopen = function(event) {
  	console.log("Connecting to " + event.currentTarget.url);
  }

  webSocket.onerror = function(error) {
  	console.log('WebSocket Error: ' + error);
  }

  webSocket.onmessage = function(event) {
    if(event.data.includes("|Z")) {
      webSocket.send("Z");
      displayString('Heartbeat');
    } else {
      displayEvent(event);
    }
  }

  webSocket.onclose = function(event) {
    displayString('Disconnected');
  	console.log('Closing socket.');
  }
}

//*********************************************
// displayString
//*********************************************

function displayString(str) {
  var s = toDateTime(new Date()) + ' Event: ' + str;
  var p = '<p class="terminal-font">' + s + '</p>';
  $('#messages').prepend(p);
}

//*********************************************
// displayEvent
//*********************************************

function displayEvent(event) {
  var now = new Date();

  var a = event.data.split('|');
  if(a.length != 2) {
    console.log('ERROR: Event split into ' + a.length + 'substrings.');
    return;
  }
  var data = JSON.parse(a[1]);

  //var i = event.data.indexOf('|') + 1;
  //var data = JSON.parse(event.data.slice(i));

  var arr = [];
  arr.push(createPair('origin', event.origin));
  arr = arr.concat(createPairs(data));

  var s = toDateTime(now) + ' Event: ' + data.metadata.event_type;
  var id = 'ID' + now.getTime();
  var p = '<p><a data-toggle="collapse" href="#' + id + '" class="terminal-font">' + s + '</a></p>';
  var b = '<div id="' + id + '" class="collapse"><div class="card card-body" style="margin-bottom:16px;">';
  var e = '</div></div>';
  $('#messages').prepend(p + b + arr.join('') + e);
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
// now
//*********************************************

function toDateTime(date) {
  return date.toISOString().slice(0,19).replace('T', ' ');
}
