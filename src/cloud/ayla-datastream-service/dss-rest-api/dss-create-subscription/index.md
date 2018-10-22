---
title: dssCreateSubscription
layout: cloud-ayla-datastream-service.html
a: block
---

# Request

### Request Url

<pre>POST https://stream.aylanetworks.com/api/v1/subscriptions.json</pre>

### Request Headers

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

### Request Data

<pre>
{
  "oem": "0dfc7900",
  "dsn": "AC000W000340779,AC000W005606115",
  "name": null,
  "description": null,
  "property_name": "*",
  "batch_size": 1,
  "user_uuid": "00000000-0000-0000-0000-000000000000",
  "oem_model": "*",
  "client_type": "mobile",
  "subscription_type": "datapoint"
}
</pre>

<table class="key-value-table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Necessity</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>batch_size</td>
    <td>integer</td>
    <td>optional</td>
    <td>1</td>
    <td>The number of events to bundle before sending to client.</td>
  </tr>
  <tr>
    <td>client_type</td>
    <td>string</td>
    <td>required</td>
    <td>&nbsp;</td>
    <td>cloud or user_opt_in</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td>optional</td>
    <td>null</td>
    <td>Description meaningful to user</td>
  </tr>
  <tr>
    <td>dsn</td>
    <td>string</td>
    <td>optional</td>
    <td>&#42;</td>
    <td>Comma-separated list of DSNs. Required if oem_model == &#42;</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>optional</td>
    <td>null</td>
    <td>Name meaningful to user</td>
  </tr>
  <tr>
    <td>oem</td>
    <td>string</td>
    <td>optional</td>
    <td></td>
    <td>The OEM ID string</td>
  </tr>
  <tr>
    <td>oem_model</td>
    <td>string</td>
    <td>optional</td>
    <td>*</td>
    <td>Unique product model name</td>
  </tr>
  <tr>
    <td>property_name</td>
    <td>string</td>
    <td>optional</td>
    <td>*</td>
    <td>Comma-separated list of device property names.</td>
  </tr>
  <tr>
    <td>subscription_type</td>
    <td>string</td>
    <td>required</td>
    <td>&nbsp;</td>
    <td>connectivity, datapoint, datapointack, location, or registration.</td>
  </tr>
  <tr>
    <td>user_uuid</td>
    <td>string</td>
    <td>optional</td>
    <td>&nbsp;</td>
    <td>Registered owner unique id</td>
  </tr>
</table>

# Response

### Status Codes

<table class="key-value-table">
  <tr>
    <th>201</th>
    <td>Created</td>
  </tr>
</table>

### Response Data

<pre>
{
  "subscription": {
    "id": 50143,
    "oem": "0bbb112e",
    "dsn": "*",
    "name": "test",
    "description": null,
    "property_name": "too_warm",
    "connection_status": "Offline",
    "batch_size": 1,
    "is_suspended": false,
    "created_at": "2018-10-22T14:35:53Z",
    "updated_at": "2018-10-22T14:35:53Z",
    "date_suspended": null,
    "user_uuid": "00000000-0000-0000-0000-000000000000",
    "oem_model": "freezer-model",
    "stream_key": "abcdef01234567890000000000000001",
    "client_type": "cloud",
    "subscription_type": "datapoint"
  }
}
</pre>