---
title: registration Events
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

## Exploring registration events with DSS Browser

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
<td>registration</td>
</tr>
</table>
<li>In Dashboard Portal, click <code>Datastreams &gt; Subscriptions</code>, and add a subscription similar to the following:
<table class="key-value-table">
<tr>
<th>Name:</th>
<td>Freezer registration</td>
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
<td>registration</td>
</tr>
</table>
</li>
<li>In DSS Browser, use your new subscription stream key to create an event stream.</li>
<li>In Developer Portal, unregister and re-register your device. Ayla DSS will push the events to DSS Browser.</li>
</ol>