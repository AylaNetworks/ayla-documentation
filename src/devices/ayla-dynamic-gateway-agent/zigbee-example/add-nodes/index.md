---
title: Add nodes
layout: ayla-dynamic-gateway-agent.html
a: block
---

This page shows you how to add your devices as nodes to your Zigbee gateway. You will need to know how to put your devices into pairing mode. Below are some examples. Don't actually put your devices into pairing mode yet. 

<ol>
<li>For SmartThings Motion Sensors and Multipurpose Sensors, remove the cap, and hold down the small white button for about 5 seconds until the LED next to it blinks.</li>
<li>For SmartThings SmartPower Outlet, hold down the connect button on the top of the unit for about 5 seconds until the led blinks.</li>
<li>For GE Link Connected LED bulbs, if it is new, simply install it in a socket, and turn it on. If it has already paired with another device, [follow these directions](https://support.smartthings.com/hc/en-us/articles/204833550-GE-Link-LED-Bulb) to reset it.</li>
</ol>

To add your devices to your Zigbee gateway, follow these directions:

<ol>
<li>Browse to the Ayla Developer Portal.</li>
<li>Click View My Devices.</li>
<li>Click the serial number of your gateway.</li>
<li>Click the Current Value column of the <code>zb_join_enable</code> property.
<div class="row">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-fluid img-top-bottom" src="property-zb_join_enable.png">
</div>
</div>
</li>
<p></p>
<li>Enter an integer representing the number of seconds the gateway will remain in pairing mode, and click OK. Common choices are 60, 90, and 120.</li>
<li>Put your Zigbee device into pairing mode.</li>
<li>Note that the <code>num_nodes</code> property value increments:
<div class="row">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-fluid img-top-bottom" src="gw-properties-001.png">
</div>
</div>
</li>
<li>Click the Candidates tab to verify that your device appears as a candidate:
<div class="row">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-fluid img-top-bottom" src="candidate.png">
</div>
</div>
</li>
<li>Click <code>Register</code>.</li>
<li>Click the Nodes tab to verify that your device appears as a node:
<div class="row">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-fluid img-top-bottom" src="node.png">
</div>
</div>
</li>
<li>Click the serial number of your new node to inspect properties and details:
<div class="row">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-fluid img-top-bottom" src="motion-sensor-properties-0.png">
</div>
</div>
</li>
<li>Interact with the device to cause property value changes. For example, create motion near a motion detector, and note that the <code>status</code> property value changes to <code>1</code>:
<div class="row">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-fluid img-top-bottom" src="motion-sensor-properties-1.png">
</div>
</div>
</li>
</ol>





