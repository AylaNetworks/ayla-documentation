---
title: Update Device
layout: ayla-proxy-server-device-service.html
a: block
---

This function updates the named attribute(s) of the specified device. Only a subset of attributes are alterable.

<pre class="light">
function updateDevice(deviceId, input, successCb=null, errorCb=null)
</pre>

### successCb

<pre class="light">function successCb(data)</pre>

The API passes <code>""</code> to your callback.

### Example

<pre class="light">
let input = {
  "device": {
    "product_name": "",
    "sw_version": ""
  }
}

MyAyla.updateDevice(deviceId, input, null, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# Ayla Proxy Server REST API

<pre class="light">PUT /api/v1/devices/:deviceId</pre>

# Notes

1. <code>deviceId</code> is not alterable. However, if you try, Ayla, while not changing the value, will still return <code>200 OK</code>.