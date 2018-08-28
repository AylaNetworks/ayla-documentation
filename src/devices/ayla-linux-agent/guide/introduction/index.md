---
title: Introduction
layout: devices-ayla-linux-agent.html
a: block
---

This guide uses a [Raspberry Pi](https://www.raspberrypi.org/) connected via jumper wires to a breadboard (hosting a red LED and a black button) to represent any Linux-based device that you may want to connect to the [Ayla Cloud](/glossary/ayla-cloud). The guide refers to this RPi/breadboard combination as your RPi device. The Setup chapter provides instructions for setting up the RPi and breadboard. See the diagram.

<div class="row hspace">
<div class="col-lg-6 col-md-8 col-sm-12">
<img class="img-fluid" src="rpi-button-led-001.jpg">
</div>
</div>

The best way to connect your RPi device to the Ayla Cloud is to run an [Ayla Linux Agent](/glossary/ayla-linux-agent) on the device. The Ayla Linux Agent, part of the [Ayla Device Platform for Linux](/glossary/ayla-device-platform-for-linux), provides cloud connectivity, security, and several other services. The Setup chapter provides instructions for downloading the tarball from [Github](https://github.com/AylaNetworks/device_linux_public), and installing the various components on your RPi. The Ayla Linux Agent is implemented as devd (Device Daemon), and your app is implemented as appd (App Daemon). See the diagram.

<div class="row hspace">
<div class="col-lg-7 col-md-9 col-sm-12">
<img class="img-fluid" src="ayla-cloud-rpi.jpg">
</div>
</div>

Note the following:

1. appd is your application, and devd is the Ayla Agent.
1. Both run as Linux daemons on your RPi, either in the foreground or the background.
1. appd has two interfaces: Peripheral API and Agent API. Your principle focus is interacting with these.
1. A device is represented in the Ayla Cloud by a digital twin, which is an instance of a template.
1. Digital twins have properties defined in templates.
1. Mobile and web applications access properties via the Ayla Cloud (RESTful) interface.
1. The Ayla Cloud includes a Data Streaming Service (DSS) for real-time updates to integrated systems.