---
title: Get Property
layout: utilities-ayla-proxy-server.html
a: block
---

### Request

<pre>
GET /api/v1/properties/:propertyId
</pre>

### Response

<pre>
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
