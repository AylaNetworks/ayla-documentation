---
title: Operation
layout: cloud-ayla-datastream-service.html
---

# Stream Keys

<pre>
{
  "subscription": {
    "id": 141501,
    "oem": "0dfc7900",
    "dsn": "AC000W000340649,AC000W000340779,AC000W005606115",
    "name": null,
    "description": null,
    "property_name": "\*",
    "connection_status": "Offline",
    "batch_size": 1,
    "is_suspended": false,
    "created_at": "2018-09-17T14:40:14Z",
    "updated_at": "2018-09-17T14:40:14Z",
    "date_suspended": null,
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911234567",
    "oem_model": "\*",
    "stream_key": "2f6273dcbb224c5bb303b2a7e1234567",
    "client_type": "mobile",
    "subscription_type": "connectivity"
  }
}
</pre>

# Events

Raw data

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

### connectivity

<pre>
{
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
</pre>

### datapoint

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

### datapointack

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

### location

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

### registration

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

# Data Persistencd

<pre>
DROP TABLE IF EXISTS events;
CREATE TABLE events(
id int NOT NULL AUTO_INCREMENT,
event_type varchar(32),
oem_id varchar(32),
oem_model varchar(32),
dsn varchar(32),
time varchar(32),
user_uuid varchar(64),
PRIMARY KEY (id)
);

INSERT INTO events (event_type, oem_id, oem_model, dsn, time, user_uuid)
VALUES (
'connectivity',
'0dfc7900',
'ledevb',
'AC000W000340649',
'2018-09-24T10:26:37Z',
'40e45b84-690c-11e8-acf3-12f911dcfe40'
);
</pre>