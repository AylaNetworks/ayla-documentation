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
// connect-disconnect
//*********************************************

$(function() {
  $('#connect-disconnect').click(function(event) {
      console.log('disconnect');
      webSocket.close();
  });
});

//*********************************************
// run
//*********************************************

function run() {
  webSocket.onopen = function(event) {
  	console.log("Connecting to " + event.currentTarget.url);
  }

  webSocket.onerror = function(error) {
  	console.log('WebSocket Error: ' + error);
  }

  webSocket.onmessage = function(event) {
  	var message = event.data;
    if(message.includes("|Z")) {
      $('#messages').prepend('<li>Heartbeat received</li>');
      webSocket.send("Z");
      $('#messages').prepend('<li>Heartbeat sent</li>');
    } else {
    	$('#messages').prepend('<li>' + message + '</li>');
    }
  }

  webSocket.onclose = function(event) {
  	console.log('Closing socket.');
  }
}
