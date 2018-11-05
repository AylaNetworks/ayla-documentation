---
title: Get Subscription
layout: ayla-proxy-server-datastream-service.html
a: block
---

<pre class="light">
function getSubscription(subscriptionId, successCb=null, errorCb=null)
</pre>

### successCb

<pre class="light">function successCb(data)</pre>

The API passes to your callback an object similar to the following:

<pre class="light">
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

<pre class="light">
MyAyla.getSubscription(subscriptionId, function(data) {
  console.log(JSON.stringify(data.subscription))
}, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# REST API

<pre class="light">GET /api/v1/dss/subscriptions/:subscriptionId</pre>
