---
title: Installation
layout: devices-ayla-linux-agent.html
a: block
---

### Create an Ayla Account

### Set up your Raspberry Pi

To complete the hands-on exercises in the Guide and Tutorial, you will need a functioning Raspberry Pi 2 or 3 with the latest Raspbian image, and Ethernet or Wi-Fi connectivity. To test the exercises, we used the [CanaKit Raspberry Pi Quick Start Guide](https://www.canakit.com/Media/CanaKit-Raspberry-Pi-Quick-Start-Guide-3.2.pdf) to set up a [Raspberry Pi 3 Model B+ 32-bit Starter Kit](https://www.canakit.com/raspberry-pi-3-model-b-plus-starter-kit.html). The exercises assume you are accessing your RPi via SSH, so connecting your RPi to a monitor, keyboard, and mouse is optional.  See [Reference: Raspberry Pi](/devices/ayla-linux-agent/reference/raspberry-pi) for details.

### Create a Factory Configuration File

The Ayla Linux Agent (devd) requires a factory configuration file to uniquely identify and authenticate the Raspberry Pi with the Ayla Device Service (ADS). For instructions explaining how to generate a configuration file, see [Reference: Configuration File](/devices/ayla-linux-agent/reference/configuration-file).

### Install the Ayla Device Platform for Linux
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
<li>View installation options:
<pre>
$ ./ayla_install.sh -h
</pre>
The following options appear:
<pre>
ayla_install.sh [OPTIONS]
OPTIONS:
  -d, --dryrun        Tests script configuration and exits without modifying the system
  -u, --upgrade       Modifies install to avoid overwriting existing config
  -b, --build_env     Just installs the packages required to compile Ayla modules
  -p, --package PATH  Path of Ayla source tarball, or URL to GIT repo (default: device_linux_public.git)
  -c, --config DIR    Directory to find required config files (default: /home/pi/)
  -a, --app APP_NAME  Appd to build (default: appd)
  -n, --no_wifi       Omits installing and configuring Wi-Fi-specific components
  -g, --gpio          Adds Wiring Pi library for Raspberry Pi
  -m, --modem         Adds usb-modeswitch library to support USB connected [cellular] modems
  -z, --ble           Installs BlueZ Bluetooth daemon from source to enable full BLE support
  -e, --zigbee        Installs libreadline-dev/libncurses-dev to enable full ZigBee support
  -t, --multi         Installs BlueZ Bluetooth daemon/libreadline-dev/libncurses-dev to enable BLE/ZigBee support
  -l, --log PATH      Dump installation details to a log file
  -v, --version       Print script version
  -h, --help          Print usage
</pre>
</li>
<li>Start the installation:
<pre>
$ ssh pi@192.168.1.7
$ sudo ./ayla_install.sh -g     // Wi-Fi
$ sudo ./ayla_install.sh ­-g -n  // Ethernet
</pre>
If you are installing over a previous installation, include the <code>-u</code> flag. The <code>-g</code> flag installs the [Wiring Pi library](http://wiringpi.com/) in your run environment which is necessary when connecting your RPi to an actual LED and a button.
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
$ htop (and then search with F3)
$ systemctl status devd.service
</pre>
Note that appd and devd reside in <code>/home/pi/ayla/bin</code>.
</li>
</ol>
