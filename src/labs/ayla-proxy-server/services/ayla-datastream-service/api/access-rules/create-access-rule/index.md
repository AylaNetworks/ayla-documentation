---
title: Create Access Rule
layout: ayla-proxy-server-datastream-service.html
b: block
---

This function creates a DSS subscription.

<pre class="light">
function createSubscription(input, successCb=null, errorCb=null)
</pre>

### input

<pre class="light">
{
  "name": "",
  "description": "",
  "oem_model": "",
  "dsn": "",
  "property_name": "",
  "client_type": "",
  "subscription_type": ""
}
</pre>

<table class="key-value-table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Necessity</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>&nbsp;</td>
    <td>A name meaningful to the user</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td>&nbsp;</td>
    <td>A description meaningful to user</td>
  </tr>
  <tr>
    <td>oem_model</td>
    <td>string</td>
    <td>Required</td>
    <td>&#42; or a comma-separated list of oem models</td>
  </tr>
  <tr>
    <td>dsn</td>
    <td>string</td>
    <td>Required</td>
    <td>&#42; or a comma-separated list of dsns. Required if oem_model == &#42;</td>
  </tr>
  <tr>
    <td>property_name</td>
    <td>string</td>
    <td>Required</td>
    <td>&#42; or a comma-separated list of property names</td>
  </tr>
  <tr>
    <td>client_type</td>
    <td>string</td>
    <td>Required</td>
    <td>cloud or user_opt_in</td>
  </tr>
  <tr>
    <td>subscription_type</td>
    <td>string</td>
    <td>Required</td>
    <td>connectivity, datapoint, datapointack, location, or registration</td>
  </tr>
</table>

### successCb

<pre class="light">function successCb(data)</pre>

The API passes to your callback an object similar to the following:

<pre class="light">
{
  "subscription": {
    "id": 149818,
    "oem": "0dfc7900",
    "dsn": "AC000W000340779,AC000W005606115",
    "name": null,
    "description": null,
    "property_name": "*",
    "connection_status": "Offline",
    "batch_size": 1,
    "is_suspended": false,
    "created_at": "2018-10-04T13:04:32Z",
    "updated_at": "2018-10-04T13:04:32Z",
    "date_suspended": null,
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "oem_model": "*",
    "stream_key": "234af7d24c996857b09a9637ebece795",
    "client_type": "mobile",
    "subscription_type": "datapoint"
  }
}
</pre>

### Example

<pre class="light">
let input = {
  "name": "",
  "description": "",
  "oem_model": "",
  "dsn": "",
  "property_name": "",
  "client_type": "",
  "subscription_type": ""
}

MyAyla.createSubscription(input, function(data) {
  console.log(JSON.stringify(data.subscription))
}, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# Ayla Proxy Server REST API

<pre class="light">POST /api/v1/dss/subscriptions</pre>
