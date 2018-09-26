---
title: Ayla DSS Event Types
layout: cloud-ayla-datastream-service.html
c: block
---

Consider this Ayla DSS (Javascript) client:

<pre>
function run(webSocket) {
  webSocket.onopen = function(event) {}

  webSocket.onerror = function(error) {}

  webSocket.onmessage = function(event) {}

  webSocket.onclose = function(event) {}
}
</pre>

Note the following:

1. Ayla DSS clients receive events in the form of objects composed of key-value pairs. 
1. Event object key sets differ slightly depending on event type (i.e. connectivity, datapoint, etc.).
1. All <code>onmessage</code> events include a <code>data</code> key.
1. The value associated with the data key is composed of a string representing an integer + '|' + a json string. The integer represents the length of the string. Here is an example:
<pre>
data: 290|{
  "seq": "1",
  "metadata": {
    "oem_id": "0dfc7900",
    "oem_model": "ledevb",
    "dsn": "AC000W000340649",
    "resource_tags": [],
    "event_type": "registration"
  },
  "registration_event": {
    "dsn": "AC000W000340649",
    "user_uuid": null,
    "registered": false,
    "registration_type": "AP-Mode",
    "unregistered_at": "2018-09-24T10:29:50Z"
  }
}
</pre>
1. Here is one way to parse events:
<pre>
function displayEvent(event) {

  var a = event.data.split('|');
  if(a.length != 2) {
    console.log('ERROR: Event split into ' + a.length + 'substrings.');
    return;
  }

  try {
    var obj = JSON.parse(a[1]);
  } catch(e) {
    console.log('ERROR: Event data is not valid JSON.');
    return;
  }

  ...
}
</pre>


 





You can extract the key-value of an object like this:

<pre>
var s = '';
for(var key in event) {
  s = s + key + ': ' + event[key] + '\n';
}
console.log(s);
</pre>

<pre>
isTrusted: true
data: 472|{"seq":"1","metadata":{"oem_id":"0dfc7900","oem_model":"linuxevb","dsn":"AC000W005606115","property_name":"Blue_LED","display_name":"Blue_LED","base_type":"boolean","resource_tags":[],"event_type":"datapoint"},"datapoint":{"id":"fbf315c8-c0cd-11e8-de86-d86745161277","created_at_from_device":null,"updated_at":"2018-09-25T14:19:16Z","created_at":"2018-09-25T14:19:16Z","user_uuid":"40e45b84-690c-11e8-acf3-12f911dcfe40","echo":true,"closed":false,"value":1,"metadata":{}}}
origin: wss://mstream-dev.aylanetworks.com
lastEventId: 
source: null
ports: 
initMessageEvent: function initMessageEvent() { [native code] }
NONE: 0
CAPTURING_PHASE: 1
AT_TARGET: 2
BUBBLING_PHASE: 3
type: message
target: [object WebSocket]
currentTarget: [object WebSocket]
eventPhase: 2
bubbles: false
cancelable: false
defaultPrevented: false
composed: false
timeStamp: 29793.199999985518
srcElement: [object WebSocket]
returnValue: true
cancelBubble: false
path: 
composedPath: function composedPath() { [native code] }
stopPropagation: function stopPropagation() { [native code] }
stopImmediatePropagation: function stopImmediatePropagation() { [native code] }
preventDefault: function preventDefault() { [native code] }
initEvent: function initEvent() { [native code] }
</pre>

<pre>
function displayEvent(event) {

  var a = event.data.split('|');
  if(a.length != 2) {
    console.log('ERROR: Event split into ' + a.length + 'substrings.');
    return;
  }

  try {
    var obj = JSON.parse(a[1]);
  } catch(e) {
    console.log('ERROR: Event data is not valid JSON.');
    return;
  }

  ...
}
</pre>

<h1>connectivity</h1>

<pre>
isTrusted: true 
data: 256|{
  "seq": "1",
  "metadata": {
    "oem_id": "0dfc7900",
    "oem_model": "ledevb",
    "dsn": "AC000W000340649",
    "resource_tags": [],
    "event_type": "connectivity"
  },
  "connection": {
    "event_time": "2018-09-24T10:26:37Z",
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "status": "Online"
  }
} 
origin: wss://mstream-dev.aylanetworks.com lastEventId: 
source: null 
ports: 
initMessageEvent: function initMessageEvent() { [native code] } 
NONE: 0 
CAPTURING_PHASE: 1 
AT_TARGET: 2 
BUBBLING_PHASE: 3 
type: message 
target: [object WebSocket] 
currentTarget: [object WebSocket] 
eventPhase: 2 
bubbles: false 
cancelable: false 
defaultPrevented: false 
composed: false 
timeStamp: 1089290.0000000081 
srcElement: [object WebSocket] 
returnValue: true 
cancelBubble: false 
path: composedPath: function composedPath() { [native code] } 
stopPropagation: function stopPropagation() { [native code] } 
stopImmediatePropagation: function stopImmediatePropagation() { [native code] } 
preventDefault: function preventDefault() { [native code] } 
initEvent: function initEvent() { [native code] }
</pre>

<h1>datapoint</h1>
<pre>
{
  "seq": "13",
  "metadata": {
    "oem_id": "0dfc7900",
    "oem_model": "linuxevb",
    "dsn": "AC000W005606115",
    "property_name": "Blue_LED",
    "display_name": "Blue_LED",
    "base_type": "boolean",
    "resource_tags": [],
    "event_type": "datapoint"
  },
  "datapoint": {
    "id": "1ff9b91c-bfe4-11e8-1261-67d251d3ec96",
    "created_at_from_device": null,
    "updated_at": "2018-09-24T10:25:14Z",
    "created_at": "2018-09-24T10:25:14Z",
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "echo": true,
    "closed": false,
    "value": 0,
    "metadata": {}
  }
}
</pre>

<h1>datapointack</h1>

<pre>
{
  "seq": "2",
  "metadata": {
    "oem_id": "0dfc7900",
    "oem_model": "linuxevb",
    "dsn": "AC000W005606115",
    "property_name": "Blue_LED",
    "display_name": "Blue_LED",
    "base_type": "boolean",
    "resource_tags": [],
    "event_type": "datapointack"
  },
  "datapoint": {
    "id": "15af3cfc-bfe4-11e8-f2f0-9aab1d61f636",
    "created_at_from_device": null,
    "updated_at": "2018-09-24T10:24:57Z",
    "created_at": "2018-09-24T10:24:57Z",
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "echo": false,
    "closed": false,
    "value": 1,
    "ack_message": 0,
    "ack_status": 200,
    "ack_id": "160c8c90-bfe4-11e8-87f4-8d732085e587",
    "acked_at": "2018-09-24T10:24:57Z",
    "metadata": {}
  }
}
</pre>

<h1>location</h1>

<pre>
{
  "seq": "1",
  "metadata": {
    "oem_id": "0dfc7900",
    "oem_model": "ledevb",
    "dsn": "AC000W000340779",
    "resource_tags": [],
    "event_type": "location"
  },
  "location_event": {
    "dsn": "AC000W000340779",
    "ip": "67.255.234.73",
    "lat": " 44.769500",
    "long": "-69.428300",
    "provider": "ip-based",
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "created_at": "2018-09-24T11:04:07Z"
  }
}
</pre>

<h1>registration</h1>

<pre>
{
  "seq": "1",
  "metadata": {
    "oem_id": "0dfc7900",
    "oem_model": "ledevb",
    "dsn": "AC000W000340649",
    "resource_tags": [],
    "event_type": "registration"
  },
  "registration_event": {
    "dsn": "AC000W000340649",
    "user_uuid": null,
    "registered": false,
    "registration_type": "AP-Mode",
    "unregistered_at": "2018-09-24T10:29:50Z"
  }
}
</pre>
