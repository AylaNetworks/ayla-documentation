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
</ol>

POST HTTP//<Stream Service URL>/api/v1/subscriptions.json

http://stream.aylanetworks.com

http://stream.aylanetworks.com -k eaa2c7ea8fa44ae1bdc0b2da0b07a8a8

https://user-dev.aylanetworks.com/api/v1/subscriptions.json

<pre>
var s = '';
for(var key in event) {
  s = s + key + ': ' + event[key] + ' ';
}
</pre>

Keys in connectivity response: isTrusted data origin lastEventId source ports initMessageEvent NONE CAPTURING_PHASE AT_TARGET BUBBLING_PHASE type target currentTarget eventPhase bubbles cancelable defaultPrevented composed timeStamp srcElement returnValue cancelBubble path composedPath stopPropagation stopImmediatePropagation preventDefault initEvent

isTrusted: true data: 256|{"seq":"1","metadata":{"oem_id":"0dfc7900","oem_model":"ledevb","dsn":"AC000W000340779","resource_tags":[],"event_type":"connectivity"},"connection":{"event_time":"2018-09-22T18:56:55Z","user_uuid":"40e45b84-690c-11e8-acf3-12f911dcfe40","status":"Online"}} origin: wss://mstream-dev.aylanetworks.com lastEventId: source: null ports: initMessageEvent: function initMessageEvent() { [native code] } NONE: 0 CAPTURING_PHASE: 1 AT_TARGET: 2 BUBBLING_PHASE: 3 type: message target: [object WebSocket] currentTarget: [object WebSocket] eventPhase: 2 bubbles: false cancelable: false defaultPrevented: false composed: false timeStamp: 1089290.0000000081 srcElement: [object WebSocket] returnValue: true cancelBubble: false path: composedPath: function composedPath() { [native code] } stopPropagation: function stopPropagation() { [native code] } stopImmediatePropagation: function stopImmediatePropagation() { [native code] } preventDefault: function preventDefault() { [native code] } initEvent: function initEvent() { [native code] }

Keys in datapoint response: isTrusted data origin lastEventId source ports initMessageEvent NONE CAPTURING_PHASE AT_TARGET BUBBLING_PHASE type target currentTarget eventPhase bubbles cancelable defaultPrevented composed timeStamp numbersrcElement returnValue cancelBubble path composedPath stopPropagation stopImmediatePropagation preventDefault initEvent

isTrusted: true data: 472|{"seq":"1","metadata":{"oem_id":"0dfc7900","oem_model":"linuxevb","dsn":"AC000W005606115","property_name":"Blue_LED","display_name":"Blue_LED","base_type":"boolean","resource_tags":[],"event_type":"datapoint"},"datapoint":{"id":"a4f6c2c6-be96-11e8-dd99-5dfe02e238a9","created_at_from_device":null,"updated_at":"2018-09-22T18:38:05Z","created_at":"2018-09-22T18:38:05Z","user_uuid":"40e45b84-690c-11e8-acf3-12f911dcfe40","echo":true,"closed":false,"value":0,"metadata":{}}} origin: wss://mstream-dev.aylanetworks.com lastEventId: source: null ports: initMessageEvent: function initMessageEvent() { [native code] } NONE: 0 CAPTURING_PHASE: 1 AT_TARGET: 2 BUBBLING_PHASE: 3 type: message target: [object WebSocket] currentTarget: [object WebSocket] eventPhase: 2 bubbles: false cancelable: false defaultPrevented: false composed: false timeStamp: 42114.80000001029 srcElement: [object WebSocket] returnValue: true cancelBubble: false path: composedPath: function composedPath() { [native code] } stopPropagation: function stopPropagation() { [native code] } stopImmediatePropagation: function stopImmediatePropagation() { [native code] } preventDefault: function preventDefault() { [native code] } initEvent: function initEvent() { [native code] }

Keys in onclose response: isTrusted, wasClean, code, reason, NONE, CAPTURING_PHASE, AT_TARGET, BUBBLING_PHASE, type, target, currentTarget, eventPhase, bubbles, cancelable, defaultPrevented, composed, timeStamp, srcElement, returnValue, cancelBubble, path, composedPath, stopPropagation, stopImmediatePropagation, preventDefault, initEvent

isTrusted: true wasClean: true code: 1005 reason: NONE: 0 CAPTURING_PHASE: 1 AT_TARGET: 2 BUBBLING_PHASE: 3 type: close target: [object WebSocket] currentTarget: [object WebSocket] eventPhase: 2 bubbles: false cancelable: false defaultPrevented: false composed: false timeStamp: 19825.500000006286 srcElement: [object WebSocket] returnValue: true cancelBubble: false path: composedPath: function composedPath() { [native code] } stopPropagation: function stopPropagation() { [native code] } stopImmediatePropagation: function stopImmediatePropagation() { [native code] } preventDefault: function preventDefault() { [native code] } initEvent: function initEvent() { [native code] }


