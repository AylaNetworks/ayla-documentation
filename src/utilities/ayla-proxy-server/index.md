---
title: Ayla Proxy Server
layout: ayla-proxy-server.html
---

Click [Introduction](introduction) for a more detailed diagram.

<div class="row hspace">
<div class="col-lg-5 col-md-9 col-sm-12">
<img class="img-fluid" src="ayla-proxy-server.png">
</div>
</div>

<code>getDevice</code> is a typical API function in ayla-proxy-server.js:

<pre class="light">
function getDevice(deviceId, successCb=null, errorCb=null)
</pre>

You call the function. If the function succeeds, the API returns a data object to your successCb callback function. If it fails, the API returns a status object to your errorCb callback function:

<pre class="light">
MyAyla.getDevice(deviceId, function(data) {

  console.log(JSON.stringify(data.device))

}, function(status) {

  console.log(JSON.stringify(status))

})
</pre>

In the case of <code>getDevice</code>, the data object passed to your successCb function has this form:

<pre class="light">
{
  "device": {
    "id": 204134,
    "product_name": "Ayla EVB - By Suitcase",
    "model": "AY001MTC1",
    "dsn": "AC000W000340779",
    "oem": "0dfc7900",
    "oem_model": "ledevb",
    "unique_hardware_id": null,
    "sw_version": "bc 2.6-beta 01/11/17 19:25:17 ID b163df1",
    "user_id": 2362432,
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "template_id": 7615,
    "mac": "60f189dcd936",
    "ip": "67.255.234.73",
    "lan_ip": "192.168.1.8",
    "ssid": "Thorndike",
    "connected_at": "2018-10-01T18:41:56Z",
    "key": 204134,
    "product_class": "demo",
    "has_properties": true,
    "lan_enabled": true,
    "enable_ssl": null,
    "ans_enabled": true,
    "ans_server": "ans.aylanetworks.com",
    "log_enabled": false,
    "registered": true,
    "connection_status": "Offline",
    "registration_type": "AP-Mode",
    "lat": "44.556049",
    "lng": "-69.270047",
    "locality": "04986",
    "homekit": null,
    "module_updated_at": "2018-08-01T16:35:50Z",
    "registrable": true,
    "regtoken": "46dee8",
    "setup_token": "8DCB43D2",
    "provisional": false,
    "device_type": "Wifi",
    "activated_at": "2018-06-06T19:07:23Z",
    "created_at": "2016-07-14T17:41:57Z",
    "last_get_at": "2018-10-01T18:41:56Z"
  }
}
</pre>

The status object passed to your errorCB function has this form:

<pre class="light">
{
  "code": 404,
  "text": "Not Found"
}
</pre>
