---
title: Introduction
layout: ayla-dynamic-gateway-agent.html
b: block
---

The Bluetooth Gateway connects BLE to the Ayla Cloud:

<div class="row">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-margins img-fluid" src="bluetooth-gateway.png">
</div>
</div>

1. In the diagram, the Raspberry Pi represents any Linux-based platform.
1. devd is the Ayla Dynamic Gateway Agent. It communicates with the Ayla Cloud via Wi-Fi or Ethernet.
1. appd is the Bluetooth Gateway.
1. By default, devd controls appd: When you start/stop devd, it starts/stops appd.
1. The black shapes in the Ayla Cloud represent templates which consist of attributes, properties, etc. 
1. You create these templates using the Developer Portal.
1. The gradient blue shapes are digital twins which inherit properties from templates. They model devices.