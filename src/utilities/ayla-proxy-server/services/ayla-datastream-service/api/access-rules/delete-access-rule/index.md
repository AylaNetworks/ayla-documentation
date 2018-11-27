---
title: Delete Access Rule
layout: ayla-proxy-server-datastream-service.html
b: block
---

This function deletes the specified DSS Subscription.

<pre class="light">
function deleteSubscription(subscriptionId, successCb=null, errorCb=null)
</pre>

### successCb

<pre class="light">function successCb(data)</pre>

The API passes <code>""</code> to your callback.

### Example

<pre class="light">
MyAyla.deleteSubscription(subscriptionId, null, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# Ayla Proxy Server REST API

<pre class="light">DELETE /api/v1/dss/subscriptions/:subscriptionId</pre>
