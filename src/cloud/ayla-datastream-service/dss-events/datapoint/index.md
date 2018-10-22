---
title: datapoint Events
layout: cloud-ayla-datastream-service.html
b: block
---

## Event structure and content

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

## Exploring datapoint events with DSS Browser

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
<td>datapoint</td>
</tr>
</table>
<li>In OEM Dashboard, click <code>Datastreams &gt; Subscriptions</code>, and add a subscription similar to the following:
<table class="key-value-table">
<tr>
<th>Name:</th>
<td>Freezer datapoint</td>
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
<td>datapoint</td>
</tr>
</table>
</li>
<li>In DSS Browser, use your new subscription stream key to create an event stream.</li>
<li>In Developer Portal, modify a device property. Ayla DSS will push the event to DSS Browser.</li>
</ol>