---
title: Example applications
layout: ayla-dynamic-gateway-agent.html
i: block
---

The Ayla Dynamic Gateway Package includes five example applications: 

||Example Name|Github link|Description|
|-|-|-|-|
|1|[Simulator Example](../../simulator-example)|[gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/gatewayd)|Resembles the other gateway apps, but requires no hardware.|
|2|[Bluetooth Example](../../bluetooth-example)|[bt_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/bt_gatewayd)|Manages Bluetooth devices.|
|3|[Zigbee Example](../../zigbee-example)|[zp_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/zb_gatewayd)|Manages Zigbee devices.|
|4|[Multiprotocol Example](../../multiprotocol-example)|[multi_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/multi_gatewayd)|Manages diverse short-distance protocol devices.|
|5|[Device Example](../../device-example)|[appd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/appd)|Not a gateway. Controls electronics connected directly to the RPi.|

Note the following:

1. You build and install one of these at a time.
1. Each is renamed to "appd" during installation. 
1. The term "appd" has two means:
  1. The name of each of these examples at run time.
  1. The name of one of the example applications.
1. devd, by default, controls appd: When you start/stop devd, it starts/stops appd.
