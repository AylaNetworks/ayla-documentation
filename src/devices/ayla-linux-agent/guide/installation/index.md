---
title: Installation
layout: devices-ayla-linux-agent.html
a: block
---

# Create an Ayla Account

# Set up your Raspberry Pi

To complete the hands-on exercises in the Guide and Tutorial, you will need a functioning Raspberry Pi 2 or 3 with the latest Raspbian image, and Ethernet or Wi-Fi connectivity. To test the exercises, we used the [CanaKit Raspberry Pi Quick Start Guide](https://www.canakit.com/Media/CanaKit-Raspberry-Pi-Quick-Start-Guide-3.2.pdf) to set up a [Raspberry Pi 3 Model B+ 32-bit Starter Kit](https://www.canakit.com/raspberry-pi-3-model-b-plus-starter-kit.html). The exercises assume you are accessing your RPi via SSH, so connecting your RPi to a monitor, keyboard, and mouse is optional.  See [Reference: Raspberry Pi](/devices/ayla-linux-agent/reference/raspberry-pi) for details.

# Create a Factory Configuration File

The Ayla Linux Agent (devd) requires a factory configuration file to uniquely identify and authenticate the Raspberry Pi with the Ayla Device Service (ADS). For instructions explaining how to generate a configuration file, see [Reference: Configuration File](/devices/ayla-linux-agent/reference/configuration-file).

# Install the Ayla Device Platform for Linux
<ol>
<li>Download [Github: ayla_install.sh](https://github.com/AylaNetworks/device_linux_public/tree/master/dev_kit/raspberry_pi).</li>
<li>Copy ayla_install.sh from the current directory to <code>/home/pi</code> on the RPi.
<pre>
$ scp ayla_install.sh pi@192.168.1.7:
</pre>
</li>
<li>Copy your configuration file from the current directory to <code>/home/pi/devd.conf</code>.<pre>
$ scp AC000W005606115.conf pi@192.168.1.7:devd.conf
</pre>
</li>
<li>Start the installation:
<pre>
$ ssh pi@192.168.1.7
$ sudo ./ayla_install.sh         // Wi-Fi
$ sudo ./ayla_install.sh ­-n      // Ethernet
</pre>
</li>
<li>Reboot the RPi.
<pre>
$ sudo reboot
</pre>
On reboot, the Ayla Linux Agent daemon (devd) and the Customer Application daemon (appd) will start.
</li>
<li>Verify that both are running. Here are a few ways to do this:
<pre>
$ tail -30 /var/log/messages
$ ps -A | grep devd
$ ps -A | grep appd
$ top -c -p $(pgrep -d',' -f devd)
$ top -c -p $(pgrep -d',' -f appd)
$ pgrep devd
$ pgrep appd
$ htop (and then filter)
</pre>
</li>
</ol>
