---
title: Choose an example app
layout: ayla-dynamic-gateway-agent.html
i: block
---

Choose among the following five example applications:

1. The [Simulator Example](../../simulator-example) resembles the other gateway apps, but requires no hardware.
1. The [Bluetooth Example](../../bluetooth-example) manages Bluetooth devices. 
1. The [Zigbee Example](../../zigbee-example) manages Zigbee devices.
1. The [Multiprotocol Example](../../multiprotocol-example) manages diverse short-distance protocol devices.
1. The [Device Example](../../device-example) (not a gateway) controls electronics connected directly to the RPi.

If you need to build an application to manage a set of devices with short-distance wireless capabilities (e.g. Bluetooth LE or Zigbee), then you need to build a gateway, and most developers start by building a Simulator Gateway, and then a Bluetooth or Zigbee gateway, and then, if necessary, a multiprotocol gateway because a Simulator Gateway enables you to practice building templates without the extra complexity of communicating with real devices. 

If you need to build an application to manage electronics connected directly to your Raspberry Pi, then you need to build the Device Example.

Click the link to peruse the source code for a particular example application:
<table class="key-value-table">
<tr><th>Example Name</th><th>Github link</th><th>RPi directory</th></tr>
<tr><td>Simulator Example</td><td>[gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/gatewayd)</td><td>```~/device_linux_gw_public/app/gatewayd```</td></tr>
<tr><td>Bluetooth Example</td><td>[bt_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/bt_gatewayd)</td><td>```~/device_linux_gw_public/app/bt_gatewayd```</td></tr>
<tr><td>Zigbee Example</td><td>[zp_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/zb_gatewayd)</td><td>```~/device_linux_gw_public/app/zb_gatewayd```</td></tr>
<tr><td>Multiprotocol Example</td><td>[multi_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/multi_gatewayd)</td><td>```~/device_linux_gw_public/app/multi_gatewayd```</td></tr>
<tr><td>Device Example</td><td>[appd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/appd)</td><td>```~/device_linux_gw_public/app/appd```</td></tr>
</table>
