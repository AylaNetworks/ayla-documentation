---
title: Get Subscription
layout: ayla-datastream-service.html
a: block
---

Gets the subscription specified by a subscription id.

### Request

<pre>GET https://&lt;DSS Domain&gt;/api/v1/subscriptions/:subscriptionId.json</pre>

<table>
  <tr>
    <th>Authorization</th>
    <td>auth_token abcdef0123456789abcdef0123456789</td>
  </tr>
  <tr>
    <th>Accept</th>
    <td>application/json</td>
  </tr>
</table>

No request data.

### Response

<table>
  <tr>
    <th>200</th>
    <td>OK</td>
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
    "created_at": "2018-10-24T14:40:57Z",
    "updated_at": "2018-10-24T14:40:57Z",
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
curl -X GET \
  https://stream.aylanetworks.com/api/v1/subscriptions/50155.json \
  -H 'Accept: application/json' \
  -H 'Authorization: auth_token abcdef01234567890000000000000001' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json'
</pre>
