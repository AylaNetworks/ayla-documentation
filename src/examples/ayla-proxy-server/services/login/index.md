---
title: Login
layout: examples-ayla-proxy-server.html
a: block
---

### Request

<pre>
POST /api/v1/session

{
  "user": {
    "email": "sarah@acme.com",
    "password": "abc123",
    "application": {
      "app_id": "alya-api-browser-id",
      "app_secret": "alya-api-browser-2tFsUL41FELUlyfrSMEZ4kNKwJg"
    }
  }
}
</pre>

### Response

<pre>
{
  "access_token": "47396b33114a4e3a9b8d3a9ee46112fe",
  "refresh_token": "26588d47fe5f44a0b0353ac5e16414ea",
  "expires_in": 86400,
  "role": "EndUser",
  "role_tags": []
}
</pre>
