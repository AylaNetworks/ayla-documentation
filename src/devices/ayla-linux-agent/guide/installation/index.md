---
title: Installation
layout: devices-ayla-linux-agent.html
a: block
---

# Setting up your Raspberry Pi

To complete the hands-on exercises in the Guide and Tutorial, you will need a functioning Raspberry Pi 2 or 3 with the latest Raspbian image, and Ethernet or Wi-Fi connectivity. To test the exercises, we used the [CanaKit Raspberry Pi Quick Start Guide](https://www.canakit.com/Media/CanaKit-Raspberry-Pi-Quick-Start-Guide-3.2.pdf) to set up a [Raspberry Pi 3 Model B+ 32-bit Starter Kit](https://www.canakit.com/raspberry-pi-3-model-b-plus-starter-kit.html). Connecting your RPi to a monitor, keyboard, and mouse is optional. The exercises assume you are accessing your RPi via SSH. See [Reference: Raspberry Pi](/devices/ayla-linux-agent/reference/raspberry-pi) for details.

# Installing the Ayla Device Platform for Linux
<ol>
<li>Download [ayla_install.sh](https://github.com/AylaNetworks/device_linux_public/tree/master/dev_kit/raspberry_pi).</li>
<li>Copy ayla_install.sh to <code>/home/pi</code> on the RPi.</li>
<li>Copy the conf file to <code>/home/pi/devd.conf</code>.</li>
<li>Start the installation:
<pre>
$ sudo ./ayla_install.sh         // Wi-Fi
$ sudo ./ayla_install.sh ­-n      // Ethernet
</pre>
</li>
<li>Reboot the RPi. On reboot, the Ayla Agent daemon (devd) and the Host Application daemon (appd) will start.</li>
<li>Verify that devd and appd are running:</li>
<pre>
$ tail -30 /var/log/messages
</pre>
</ol>


