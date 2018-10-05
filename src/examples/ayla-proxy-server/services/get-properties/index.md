---
title: Get Properties
layout: examples-ayla-proxy-server.html
a: block
---

### Request

<pre>
GET /api/v1/devices/:deviceId/properties
</pre>

### Response

<pre>
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
  },
  {
    "property": {
      "type": "Property",
      "name": "cmd",
      "base_type": "string",
      "read_only": false,
      "direction": "input",
      "scope": "user",
      "data_updated_at": "2018-10-01T15:44:04Z",
      "key": 13772626,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "cmd",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": "Test 010",
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "decimal_in",
      "base_type": "decimal",
      "read_only": false,
      "direction": "input",
      "scope": "user",
      "data_updated_at": "2018-07-31T08:53:32Z",
      "key": 13772629,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "decimal_in",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": 5,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "decimal_out",
      "base_type": "decimal",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "2018-10-01T18:41:58Z",
      "key": 13772630,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "decimal_out",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": 5,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "Green_LED",
      "base_type": "boolean",
      "read_only": false,
      "direction": "input",
      "scope": "user",
      "data_updated_at": "2018-10-01T18:53:54Z",
      "key": 13772622,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "Green_LED",
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
      "name": "input",
      "base_type": "integer",
      "read_only": false,
      "direction": "input",
      "scope": "user",
      "data_updated_at": "2018-09-28T18:19:18Z",
      "key": 13772624,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "input",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": 3,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "log",
      "base_type": "string",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "2018-10-01T18:41:57Z",
      "key": 13772627,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "log",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": "Test 010",
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "output",
      "base_type": "integer",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "2018-10-01T18:41:57Z",
      "key": 13772625,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "output",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": 9,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "schedule_out",
      "base_type": "string",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "null",
      "key": 13797162,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "schedule_out",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": null,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "stream_down",
      "base_type": "file",
      "read_only": false,
      "direction": "input",
      "scope": "user",
      "data_updated_at": "null",
      "key": 13772633,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "stream_down",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": null,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "stream_down_len",
      "base_type": "integer",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "null",
      "key": 13772634,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "stream_down_len",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": null,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "stream_down_match_len",
      "base_type": "integer",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "null",
      "key": 13772635,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "stream_down_match_len",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": null,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "stream_up",
      "base_type": "file",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "null",
      "key": 13772632,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "stream_up",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": null,
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  },
  {
    "property": {
      "type": "Property",
      "name": "stream_up_len",
      "base_type": "integer",
      "read_only": false,
      "direction": "input",
      "scope": "user",
      "data_updated_at": "2018-07-29T09:25:42Z",
      "key": 13772631,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "stream_up_len",
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
      "name": "version",
      "base_type": "string",
      "read_only": true,
      "direction": "output",
      "scope": "user",
      "data_updated_at": "2018-10-01T18:41:58Z",
      "key": 13772628,
      "device_key": 204134,
      "product_name": "Ayla EVB - By Suitcase",
      "track_only_changes": false,
      "display_name": "version",
      "host_sw_version": false,
      "time_series": false,
      "derived": false,
      "app_type": null,
      "recipe": null,
      "value": "demo_dp 1.7 ",
      "denied_roles": [],
      "ack_enabled": false,
      "retention_days": 30
    }
  }
]
</pre>
