---
title: connectivity Events
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
    "dsn": "AC000W000340649",
    "resource_tags": [],
    "event_type": "connectivity"
  },
  "connection": {
    "event_time": "2018-09-24T10:26:37Z",
    "user_uuid": "00000000-0000-0000-0000-000000000000",
    "status": "Online"
  }
} 
</pre>

## Exploring connectivity events with DSS Browser

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
<td>connectivity</td>
</tr>
</table>
<li>In OEM Dashboard, click <code>Datastreams &gt; Subscriptions</code>, and add a subscription similar to the following:
<table class="key-value-table">
<tr>
<th>Name:</th>
<td>Freezer connectivity</td>
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
<td>connectivity</td>
</tr>
</table>
</li>
<li>In DSS Browser, use your new subscription stream key to create an event stream.</li>
<li>---</li>
</ol>