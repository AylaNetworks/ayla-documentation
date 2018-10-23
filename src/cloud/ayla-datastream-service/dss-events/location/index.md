---
title: location Events
layout: cloud-ayla-datastream-service.html
b: block
---

## Event structure and content

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
    "user_uuid": "00000000-0000-0000-0000-000000000000",
    "created_at": "2018-09-24T11:04:07Z"
  }
}
</pre>

## Exploring location events with DSS Browser

<ol>
<li>In Dashboard Portal, click <code>Datastreams &gt; Access Rules</code>, and add a rule similar to the following:
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
<td>location</td>
</tr>
</table>
<li>In Dashboard Portal, click <code>Datastreams &gt; Subscriptions</code>, and add a subscription similar to the following:
<table class="key-value-table">
<tr>
<th>Name:</th>
<td>Freezer location</td>
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
<td>location</td>
</tr>
</table>
</li>
<li>In DSS Browser, use your new subscription stream key to create an event stream.</li>
<li>---</li>
</ol>