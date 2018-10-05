---
title: Create Datapoint
layout: examples-ayla-proxy-server.html
a: block
---

### Request

<pre>
POST /api/v1/properties/:propertyId/datapoints

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

### Response

<pre>
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
