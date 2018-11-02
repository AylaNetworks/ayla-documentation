---
title: Create Subscription
layout: ayla-datastream-service.html
a: block
---

Creates a DSS subscription including a stream key which is requred by a client to open a WebSocket.

### Request

<pre>POST https://&lt;DSS Domain&gt;/api/v1/subscriptions.json</pre>

<table class="key-value-table">
  <tr>
    <th>Authorization</th>
    <td>auth_token abcdef0123456789abcdef0123456789</td>
  </tr>
  <tr>
    <th>Content-Type</th>
    <td>application/json</td>
  </tr>
</table>

<pre>
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

### Response

<table class="key-value-table">
  <tr>
    <th>201</th>
    <td>Created</td>
  </tr>
</table>

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
    "created_at": "2018-10-24T14:40:56Z",
    "updated_at": "2018-10-24T14:40:56Z",
    "date_suspended": null,
    "user_uuid": "00000000-0000-0000-0000-000000000000",
    "oem_model": "freezer-model",
    "stream_key": "abcdef01234567890000000000000001",
    "client_type": "cloud",
    "subscription_type": "datapoint"
  }
}
</pre>

### Example

<pre>
curl -X POST \
  https://stream.aylanetworks.com/api/v1/subscriptions.json \
  -H 'Accept: application/json' \
  -H 'Authorization: auth_token abcdef0123456789abcdef0123456789' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json'
  -d '{
  "name": "Test",
  "description": "",
  "oem_model": "freezer-model",
  "dsn": "*",
  "property_name": "*",
  "client_type": "cloud",
  "subscription_type": "datapoint"
}'
</pre>
