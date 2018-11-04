---
title: Get Property
layout: ayla-proxy-server-device-service.html
f: block
---

<pre class="light">
function getProperty(propertyId, successCb=null, errorCb=null)
</pre>

### successCb

<pre class="light">function successCb(data)</pre>

The API passes to your callback an object similar to the following:

<pre class="light">
{
  "property": {
    "type": "Property",
    "name": "Blue_LED",
    "base_type": "boolean",
    "read_only": false,
    "direction": "input",
    "scope": "user",
    "data_updated_at": "2018-10-01T15:37:47Z",
    "key": 13700155,
    "device_key": 204134,
    "product_name": "Ayla EVB - By Suitcase",
    "track_only_changes": false,
    "display_name": "Blue LED",
    "host_sw_version": false,
    "time_series": false,
    "derived": false,
    "app_type": null,
    "recipe": null,
    "value": 0,
    "denied_roles": [
      {
        "id": 5306,
        "operation": "write",
        "role": "OEM::company::admin",
        "oem_id": "0dfc7900"
      }
    ],
    "ack_enabled": false,
    "retention_days": 30
  }
}
</pre>

### Example

<pre class="light">
MyAyla.getProperty(propertyId, function(data) {
  console.log(JSON.stringify(data.property))
}, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# Ayla Proxy Server REST API

<pre class="light">GET /api/v1/:propertyId</pre>
