---
title: Example applications
layout: ayla-dynamic-gateway-agent.html
i: block
---

The Ayla Dynamic Gateway Package includes five example applications: 

<table class="key-value-table">
<tr><th>&nbsp;</th><th>Example Name</th><th>Github link</th><th>Description</th></tr>
<tr><td>1.</td><td>[Simulator Example](../../simulator-example)</td><td>[gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/gatewayd)</td><td>Resembles the other gateway apps, but requires no hardware.</td></tr>
<tr><td>2.</td><td>[Bluetooth Example](../../bluetooth-example)</td><td>[bt_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/bt_gatewayd)</td><td>Manages Bluetooth devices.</td></tr>
<tr><td>3.</td><td>[Zigbee Example](../../zigbee-example)</td><td>[zp_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/zb_gatewayd)</td><td>Manages Zigbee devices.</td></tr>
<tr><td>4.</td><td>[Multiprotocol Example](../../multiprotocol-example)</td><td>[multi_gatewayd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/multi_gatewayd)</td><td>Manages diverse short-distance protocol devices.</td></tr>
<tr><td>5.</td><td>[Device Example](../../device-example)</td><td>[appd](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app/appd)</td><td>Not a gateway. Controls electronics connected directly to the RPi.</td></tr>
</table>

Note the following:

1. You build and install one of these at a time.
1. Each is renamed to "appd" during installation. 
1. The term "appd" has two means:
  1. The name of each of these examples at run time.
  1. The name of one of the example applications.
1. devd, by default, controls appd: When you start/stop devd, it starts/stops appd.
