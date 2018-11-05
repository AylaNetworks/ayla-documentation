---
title: Delete Subscription
layout: ayla-proxy-server-datastream-service.html
a: block
---

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

# REST API

<pre class="light">DELETE /api/v1/dss/subscriptions/:subscriptionId</pre>
