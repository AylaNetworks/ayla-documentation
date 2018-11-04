---
title: Logout
layout: ayla-proxy-server-user-service.html
---

<pre class="light">
function logout(successCb=null, errorCb=null)
</pre>

### successCb

<pre class="light">function successCb(data)</pre>

The API passes to your callback an object similar to the following:

<pre class="light">
{
  "logout": true
}
</pre>

### Example

<pre class="light">
MyAyla.logout(function(data) {
  console.log(JSON.stringify(data))
}, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

# REST API

<pre class="light">DELETE /api/v1/session</pre>

### Request Data
<pre class="light">
{
  "user": {
    "access_token": "47396b33114a4e3a9b8d3a9ee46112fe"
  }
}
</pre>
