---
title: Create Datapoint
layout: ayla-device-service.html
b: block
---

# Function Definition
<pre>
function createDatapoint(
  propertyId, 
  value, 
  successCb=defSuccessCb, 
  failureCb=defFailureCb
)
</pre>

## propertyId

## value

## successCb

<pre>
function successCb(datapoint)
</pre>

### datapoint

<pre>
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

## failureCb

<pre>
function failureCb(msg)
</pre>

# Example
<pre>
MyAyla.createDatapoint(propertyId, value, function(datapoint) {
  console.log(datapoint.datapoint.value)
}, function(msg) {
  console.log(msg)
})
</pre>