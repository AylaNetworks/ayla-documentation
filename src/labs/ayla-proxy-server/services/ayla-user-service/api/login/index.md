---
title: Login
layout: ayla-proxy-server-user-service.html
---

<pre class="light">
function login(email, password, appId, appSecret, successCb=null, errorCb=null)
</pre>

### successCb

<pre class="light">function successCb(data)</pre>

The API passes to your callback an object similar to the following:

<pre class="light">
{
  "access_token": "0123456789abcdef0123456789abcdef",
  "refresh_token": "0123401234abcdef0123401234abcdef",
  "expires_in": 86400,
  "role": "EndUser",
  "role_tags": []
}
</pre>

### Example

<pre class="light">
MyAyla.login(email, password, appId, appSecret, function(data) {
  console.log(JSON.stringify(data))
}, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# REST API

<pre class="light">POST /api/v1/session</pre>

### Request Data
<pre class="light">
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
