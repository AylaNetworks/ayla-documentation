---
title: Get Devices
layout: examples-ayla-proxy-server.html
a: block
---

### Request

<pre>
GET /api/v1/devices
</pre>

### Response

<pre>
[
  {
    "device": {
      "product_name": "Ayla EVB - By Suitcase",
      "model": "AY001MTC1",
      "dsn": "AC000W000340779",
      "oem_model": "ledevb",
      "sw_version": "bc 2.6-beta 01/11/17 19:25:17 ID b163df1",
      "template_id": 7615,
      "mac": "60f189dcd936",
      "unique_hardware_id": null,
      "lan_ip": "192.168.1.8",
      "connected_at": "2018-10-01T18:41:56Z",
      "key": 204134,
      "lan_enabled": true,
      "has_properties": true,
      "product_class": "demo",
      "connection_status": "Offline",
      "lat": "44.556049",
      "lng": "-69.270047",
      "locality": "04986",
      "device_type": "Wifi"
    }
  },
    {
      "device": {
      "product_name": "Raspberry Pi 001",
      "model": "AY001MRT1",
      "dsn": "AC000W005606115",
      "oem_model": "linuxevb",
      "sw_version": "devd 1.5.2-eng 2018-09-12 06:14:36 /",
      "template_id": 27079,
      "mac": "b8:27:eb:2a:d1:66",
      "unique_hardware_id": null,
      "hwsig": "00000000752ad166",
      "lan_ip": "192.168.1.7",
      "connected_at": "2018-09-24T08:18:42Z",
      "key": 5286408,
      "lan_enabled": true,
      "has_properties": true,
      "product_class": null,
      "connection_status": "Offline",
      "lat": "44.56",
      "lng": "-69.27",
      "locality": "04986",
      "device_type": "Wifi"
    }
  }
]
</pre>