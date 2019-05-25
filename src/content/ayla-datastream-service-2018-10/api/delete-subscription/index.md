---
title: Delete Subscription
layout: ayla-datastream-service-2018-10.html
a: block
---

Deletes the subscription specified by a subscription id.

### Request

<pre>DELETE https://&lt;DSS Domain&gt;/api/v1/subscriptions/:subscriptionId.json</pre>

<table>
  <tr>
    <th>Authorization</th>
    <td>auth_token abcdef0123456789abcdef0123456789</td>
  </tr>
</table>

No request data.

### Response

<table>
  <tr>
    <th>204</th>
    <td>No Content</td>
  </tr>
</table>

No response data.

### Example

<pre>
curl -X DELETE \
  https://stream.aylanetworks.com/api/v1/subscriptions/50155.json \
  -H 'Accept: application/json' \
  -H 'Authorization: auth_token abcdef0123456789abcdef0123456789' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json'
</pre>