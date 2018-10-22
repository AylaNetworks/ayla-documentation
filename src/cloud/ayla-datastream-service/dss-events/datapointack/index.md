---
title: datapointack Events
layout: cloud-ayla-datastream-service.html
b: block
---

## Event structure and content

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
    "user_uuid": "00000000-0000-0000-0000-000000000000",
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

## Exploring datapointack events with DSS Browser

<ol>
<li>In OEM Dashboard, click <code>Datastreams &gt; Access Rules</code>, and add a rule similar to the following:
<table class="key-value-table">
<tr>
<th>Role:</th>
<td>OEM::Admin (or your role)</td>
</tr>
<tr>
<th>Model:</th>
<td>freezer-model</td>
</tr>
<tr>
<th>Client Type:</th>
<td>cloud</td>
</tr>
<tr>
<th>Type:</th>
<td>datapointack</td>
</tr>
</table>
<li>In OEM Dashboard, click <code>Datastreams &gt; Subscriptions</code>, and add a subscription similar to the following:
<table class="key-value-table">
<tr>
<th>Name:</th>
<td>Freezer datapointack</td>
</tr>
<tr>
<th>OEM Model:</th>
<td>freezer-model</td>
</tr>
<tr>
<th>Client Type:</th>
<td>cloud</td>
</tr>
<tr>
<th>Subscription Type:</th>
<td>datapointack</td>
</tr>
</table>
</li>
<li>In DSS Browser, use your new subscription stream key to create an event stream.</li>
<li>---</li>
</ol>