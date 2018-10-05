---
title: Create DSS Subscription
layout: examples-ayla-proxy-server.html
a: block
---

### Request

<pre>
POST /api/v1/dss/subscriptions

{
  "oem_model": "*",
  "client_type": "mobile",
  "subscription_type": "datapoint",
  "property_name": "*"
}
</pre>

### Response

<pre>
{
  "subscription": {
    "id": 149818,
    "oem": "0dfc7900",
    "dsn": "AC000W000340779,AC000W005606115",
    "name": null,
    "description": null,
    "property_name": "*",
    "connection_status": "Offline",
    "batch_size": 1,
    "is_suspended": false,
    "created_at": "2018-10-04T13:04:32Z",
    "updated_at": "2018-10-04T13:04:32Z",
    "date_suspended": null,
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "oem_model": "*",
    "stream_key": "234af7d24c996857b09a9637ebece795",
    "client_type": "mobile",
    "subscription_type": "datapoint"
  }
}
</pre>
