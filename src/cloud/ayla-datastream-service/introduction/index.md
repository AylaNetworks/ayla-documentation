---
title: Introduction
layout: cloud-ayla-datastream-service.html
---

The Ayla Datastream Service (DSS) is a [WebSocket](https://en.wikipedia.org/wiki/WebSocket) service that provides the following event notifications to subscribing client applications:

<table>
  <tr>
    <th>Event Type</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>connectivity</td>
    <td>The Ayla Cloud started/stopped interacting with a registered device.</td>
  </tr>
  <tr>
    <td>datapoint</td>
    <td>A digital twin property value changed.</td>
  </tr>
  <tr>
    <td>datapointack</td>
    <td>An Ayla Agent confirmed to the Ayla Cloud that a device property value changed.</td>
  </tr>
  <tr>
    <td>location</td>
    <td>A digital twin latitute/longitude value(s) changed.</td>
  </tr>
  <tr>
    <td>registration</td>
    <td>The Ayla Cloud registered a (new) device.</td>
  </tr>
</table>

# Events

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

# Data Persistence

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