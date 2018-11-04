---
title: Get Properties
layout: ayla-proxy-server-device-service.html
f: block
---

<pre class="light">
function getProperties(deviceId, successCb=null, errorCb=null)
</pre>

### successCb

<pre class="light">function successCb(arr)</pre>

The API passes to your callback an object similar to the following:

<pre class="light">
[
  {
    "property": {
      "type": "Property",
      "name": "Blue_button",
      "base_type": "boolean",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "2018-10-01T18:41:57Z",
      "key": 13772623,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "Blue_button",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": 0,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
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
      "retention_days": 30,
      "ack_status": null,
      "ack_message": null,
      "acked_at": null
    }
  }
]
</pre>

### Example

<pre class="light">
MyAyla.getProperties(deviceId, function(arr) {
  if(arr.length) {
    $.each(arr, function(index, data) {
      console.log(JSON.stringify(data.property))
    })
  }
}, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# REST API

<pre class="light">GET /api/v1/devices/:deviceId/properties</pre>
