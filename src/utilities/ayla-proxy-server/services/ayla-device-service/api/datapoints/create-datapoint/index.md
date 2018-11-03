---
title: Create Datapoint
layout: ayla-device-service.html
b: block
---

<pre class="light">
function createDatapoint(propertyId, value, successCb=null, errorCb=null)
</pre>

### successCb parameter

<pre class="light">function successCb(obj)</pre>

The API passes to your callback an object similar to the following:

<pre class="light">
{
  "datapoint": {
    "updated_at": "2018-11-02T14:15:06Z",
    "created_at": "2018-11-02T14:15:06Z",
    "echo": false,
    "metadata": {
      "key1": "",
      "key2": ""
    },
    "value": 1
  }
}
</pre>

### errorCb parameter

<pre class="light">function errorCb(obj)</pre>

The API passes to your callback an object similar to the following:

<pre class="light">
{
  "status": 404,
  "statusText": "Not Found"
}
</pre>

### Example

<pre class="light">
MyAyla.createDatapoint(propertyId, value, function(obj) {
  console.log(JSON.stringify(obj.datapoint, null, 2))
}, function(obj) {
  console.log(JSON.stringify(obj, null, 2))
})
</pre>

# REST API

<code>createDatapoint</code> passes the request data to the <code>Ayla Proxy Server</code> endpoint, and receives the response data in reply.

### Endpoint
<pre class="light">/api/v1/properties/:propertyId/datapoints</pre>

### Request Data
<pre class="light">
{
  "datapoint": {
    "value": "1",
    "metadata": {
      "key1": "",
      "key2": ""
    }
  }
}
</pre>

### Response Data
<pre class="light">
{
  "datapoint": {
    "updated_at": "2018-10-04T12:56:57Z",
    "created_at": "2018-10-04T12:56:57Z",
    "echo": false,
    "metadata": {
      "key1": "",
      "key2": ""
    },
    "value": 1
  }
}
</pre>
