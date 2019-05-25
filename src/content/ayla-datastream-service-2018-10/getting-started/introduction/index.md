---
title: Introduction
layout: ayla-datastream-service-2018-10.html
c: block
---

## What is DSS?

The Ayla Datastream Service (DSS) is a WebSocket server that pushes device-related events (in near real-time) from the Ayla Cloud to subscribing WebSocket clients associated (typically) with data analytics systems. The diagram below provides a high-level overview of DSS including two example clients: DSS Browser is a browser-based client that displays events on a page, and DSS Collector is a Node.JS client that writes events to disk.

<img src="ayla-dss.png" width="550">

### Events

The list below summarizes the five types of events that DSS sends to subscribing clients.

* connectivity - The Ayla Cloud started/stopped interacting with a registered device.
* datapoint - A digital twin property value changed.
* datapointack - An Ayla Agent confirmed to the Ayla Cloud that a device property value changed.
* location - A digital twin latitute/longitude value changed.
* registration - The Ayla Cloud registered/unregistered a device.

### Digital Twins

The digital twin in the diagram represents the real-world walk-in freezer. An Ayla DSS event indicates a change in a digital twin. 

### Subscriptions

Each DSS event stream requires a dedicated subscription. Here is an example subscription:

<pre>
{
  "subscription": {
    "id": 50155,
    "oem": "0bbb112e",
    "dsn": "*",
    "name": "Test",
    "description": "",
    "property_name": "*",
    "connection_status": "Offline",
    "batch_size": 1,
    "is_suspended": false,
    "created_at": "2018-10-24T14:40:57Z",
    "updated_at": "2018-10-24T14:40:57Z",
    "date_suspended": null,
    "user_uuid": "12345000-1234-1234-1234-000000012345",
    "oem_model": "freezer-model",
    "stream_key": "abcdef01234567890000000000000001",
    "client_type": "cloud",
    "subscription_type": "datapoint"
  }
}
</pre>

A subscription defines the following:

1. The type of event that Ayla DSS will push on a particular event stream (connectivity, datapoint, etc.).
1. A filter to limit events of the specified type (OEM, OEM models, DSNs, properties). 
1. A user whose access access rules further restrict events.
1. A subscription key (similar to an Auth Token) that clients use when opening a WebSocket. 

Click [API](../../api) to learn how to create, delete, and manage subscriptions.

### WebSockets

A WebSocket enables sustained, bidirectional communication over HTTP. Ayla DSS is a WebSocket server that sends events and heartbeats to WebSocket clients that receive the events and acknowledge the heartbeats. A Javascript client might instantiate a WebSocket in this manner: 

<pre>
let socket = new WebSocket(url + '?stream_key=' + key)
</pre>

There are several instances of Ayla DSS throughout the world, and the <code>url</code> parameter indicates the appropriate instance for your region and deployment type (see [API](../../api)). The <code>key</code> parameter specifies the subscription key. Once constructed, a WebSocket client listens for events with a set of callback functions similar to the following:

<pre>
socket.onopen = function(msg){}
socket.onerror = function(msg){}
socket.onmessage = function(msg){}
socket.onclose = function(msg){}
</pre>

### Messages

A WebSocket onmessage function receives MessageEvent objects that encapsulate heartbeats or DSS events. A MessageEvent object might include key/value pairs similar to the following: 

<pre>
bubbles: false
cancelBubble: false
cancelable: false
composed: false
currentTarget: WebSocket {}
data: "1|Z"
defaultPrevented: false
eventPhase: 0
isTrusted: true
lastEventId: ""
origin: "wss://stream.aylanetworks.com"
path: []
ports: []
returnValue: true
source: null
srcElement: WebSocket {}
target: WebSocket {}
timeStamp: 192795.29999988154
type: "message"
</pre>

The key/value pair of interest is <code>data:"1&#124;Z"</code>. The key is <code>data</code>. The value, <code>"1&#124;Z"</code>, indicates that this MessageEvent is a DSS heartbeat. If the MessageEvent had been an actual event (connectivity, datapoint, etc.), the value would have been similar to <code>data:"481&#124;{}"</code>. The number <code>481</code> represents the length of the JSON event string within the curly braces. The "&#124;" is useful for splitting the string into length and event. And, the curly braces, <code>{}</code>, encapsulate the actual JSON event string which might look like this:

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
    "user_uuid": "00000000-0000-0000-0000-000000000000",
    "echo": true,
    "closed": false,
    "value": 0,
    "metadata": {}
  }
}
</pre>

See [Events](../../events) for details.

### Heartbeats

A DSS client onmessage function must, therefore, (1) determine if a MessageEvent is a heartbeat or a DSS event, (2) respond if it's a heartbeat, and (3) process if it's a DSS event: 

<pre>
socket.onmessage = function(msg) {
  if(msg.data.includes('|Z')) {
    stream.socket.send('Z')
  }
  else {
    var arr = msg.data.split('|')
    let event = JSON.parse(arr[1])
    process(event)
  }
}
</pre>
