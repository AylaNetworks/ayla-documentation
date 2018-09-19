---
title: Tutorial 1
layout: cloud-ayla-datastream-service.html
b: block
---
<ol>

<li>Sign in
<p>Request</p>
<pre>
POST /users/sign_in HTTP/1.1
Host: user-dev.aylanetworks.com
Content-Type: application/json
Accept: application/json
Cache-Control: no-cache
Postman-Token: dc2dbd09-2dc9-49e5-99d7-719e6d0b2be9

{
  "user": {
    "email": "matt@aylanetworks.com",
    "password": "Tree3000",
    "application": {
      "app_id": "alya-api-browser-id",
      "app_secret": "alya-api-browser-2tFsUL41FELUlyfrSMEZ4kNKwJg"
    }
  }
}
</pre>
<p>Response</p>
<pre>
{
  "access_token": "22f9e1bbaf344bd790305c247a55dfee",
  "refresh_token": "bcd6d7e580a3487785d5eb502bdf2950",
  "expires_in": 86400,
  "role": "EndUser",
  "role_tags": []
}
</pre>
</li>

<li>Subscribe
<p>Request</p>
<pre>
POST /api/v1/subscriptions.json HTTP/1.1
Host: user-dev.aylanetworks.com
Authorization: auth_token 22f9e1bbaf344bd790305c247a55dfee
Content-Type: application/json
Accept: application/json
Cache-Control: no-cache
Postman-Token: d941242f-dc16-4c4d-9925-0ce1ffebc12c

{
  "oem_model": "\*",
  "client_type": "mobile",
  "subscription_type": "connectivity"
}
</pre>
<p>Only mobile supported.</p>
<p>Response</p>
<pre>
{
  "subscription": {
    "id": 141501,
    "oem": "0dfc7900",
    "dsn": "AC000W000340649,AC000W000340779,AC000W005606115",
    "name": null,
    "description": null,
    "property_name": "\*",
    "connection_status": "Offline",
    "batch_size": 1,
    "is_suspended": false,
    "created_at": "2018-09-17T14:40:14Z",
    "updated_at": "2018-09-17T14:40:14Z",
    "date_suspended": null,
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "oem_model": "\*",
    "stream_key": "2f6273dcbb224c5bb303b2a7e22c91ad",
    "client_type": "mobile",
    "subscription_type": "connectivity"
  }
}
</pre>
</li>

<li>sss
<pre>
sss
</pre>
</li>

<li>sss
<pre>
sss
</pre>
</li>

<li>sss
<pre>
sss
</pre>
</li>

<li>sss
<pre>
sss
</pre>
</li>

<li>sss
<pre>
sss
</pre>
</li>

</ol>

POST HTTP//<Stream Service URL>/api/v1/subscriptions.json

http://stream.aylanetworks.com

http://stream.aylanetworks.com -k eaa2c7ea8fa44ae1bdc0b2da0b07a8a8



https://user-dev.aylanetworks.com/api/v1/subscriptions.json
