---
title: Logout
layout: examples-ayla-proxy-server.html
a: block
---

### Request

<pre>
DELETE /api/v1/session

{
  "user": {
    "access_token": "47396b33114a4e3a9b8d3a9ee46112fe"
  }
}
</pre>

### Response

<pre>
{
  "logout": true
}
</pre>
