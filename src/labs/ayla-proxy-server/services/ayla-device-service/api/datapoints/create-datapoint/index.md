---
title: Create Datapoint
layout: ayla-proxy-server-device-service.html
b: block
---

This function creates a new value for the specified property.

<pre class="light">
function createDatapoint(propertyId, value, successCb=null, errorCb=null)
</pre>

### successCb

<pre class="light">function successCb(data)</pre>

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

### Example

<pre class="light">
MyAyla.createDatapoint(propertyId, value, function(data) {
  console.log(JSON.stringify(data.datapoint))
}, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# Ayla Proxy Server REST API

<pre class="light">POST /api/v1/properties/:propertyId/datapoints</pre>

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
