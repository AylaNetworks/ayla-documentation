---
title: Raspberry Pi
layout: ayla-linux-agent.html
a: block
---

The Ayla Linux Agent tutorials assume that your Linux environment is a Raspberry Pi 3 Model B+ with a 32 GB MicroSD Card running the latest Raspian version. The [CanaKit Raspberry Pi 3 Model B+ Ultimate Starter Kit](https://www.canakit.com/raspberry-pi-3-model-b-plus-ultimate-kit.html) provides all the components needed to complete the standard tutorials. Refer to the "Read Me First!" card, "CanaKit Raspberry Pi Quick-Start Guide," official [Raspberry Pi](https://www.raspberrypi.org/) website, and Additional Links at the bottom of the page for official set-up directions. 

### Headless Setup

The following steps explain how to set up a headless, wireless Raspberry Pi (no monitor, keyboard, mouse, Ethernet cable) accessible via Secure Shell (ssh):

<ol>

<li>Insert the RPi into the clear case per [these directions](https://www.canakit.com/pi-case). You won't need the lid or camera for now.
<img src="rpi-and-case.png" width="300">
</li>

<li>Install the heat sinks:
<img src="rpi-heat-sinks.png" width="300">
</li>

<li>Insert the MicroSD card into a USB MicroSD card reader:
<img src="rpi-card-reader.png" width="200">
</li>

<li>Insert the reader into a USB port on your computer. We will be overwriting pre-loaded [NOOBS](https://www.raspberrypi.org/downloads/noobs/) with a Raspian OS installation so that, prior to the initial boot, we can configure the OS for wireless, ssh operation. Make sure you can access the card: 
<img src="mounted-canakit.png" width="140">
</li>

<li>Download [Raspbian Stretch Lite](https://www.raspberrypi.org/downloads/raspbian/) (e.g. <code>2018-11-13-raspbian-stretch-lite.zip</code>) to your computer. Do not unzip.</li>

<li>Download [Etcher](https://www.balena.io/etcher/) to your computer, and install it.
<img src="etcher.png" width="300">
</li>

<li>Run Etcher, click the gear, uncheck <code>Auto-unmount</code>, and click Back:
<img src="etcher-settings.png" width="300">
</li>

<li>Flash the Raspian image to the MicroSD card:
<img src="etcher-flash.png" width="300">
</li>

<li>In a terminal on your computer, view the contents of the MicroSD card which is now named <code>boot</code>:
<pre>
/Volumes/boot$ ls -1
COPYING.linux
LICENCE.broadcom
LICENSE.oracle
bcm2708-rpi-0-w.dtb
bcm2708-rpi-b-plus.dtb
bcm2708-rpi-b.dtb
bcm2708-rpi-cm.dtb
bcm2709-rpi-2-b.dtb
bcm2710-rpi-3-b-plus.dtb
bcm2710-rpi-3-b.dtb
bcm2710-rpi-cm3.dtb
bootcode.bin
cmdline.txt
config.txt
fixup.dat
fixup_cd.dat
fixup_db.dat
fixup_x.dat
issue.txt
kernel.img
kernel7.img
overlays
start.elf
start_cd.elf
start_db.elf
start_x.elf
</pre>
</li>

<li>Create a <code>wpa_supplicant.conf</code> text file:
<pre>
/Volumes/boot$ touch wpa_supplicant.conf
</pre>
</li>

<li>Edit the file, copy & paste the configuration below, modify <code>country</code>, <code>ssid</code>, and <code>psk</code>, and save:
<pre>
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
     ssid="Your network name/SSID"
     psk="Your WPA/WPA2 security key"
     key_mgmt=WPA-PSK
}
</pre>
</li>

<li>Configure Secure Shell by creating an empty <code>ssh</code> text file:
<pre>
/Volumes/boot$ touch ssh
</pre>
</li>

<li>Unmount/remove the MicroSD card from your computer/card reader:
<img src="mounted-boot.png" width="140">
</li>

<li>Insert the MicroSD card into your Raspberry Pi:
<img src="rpi-micro-sd-card.png" width="300">
</li>

<li>Use the CanaKit PiSwitch to plug-in and power-on the RPi, and wait for a minute or two:
<img src="rpi-on-off-switch.png" width="400">
</li>

<li>Inspect your router to determine the IP address of your Raspberry Pi:
<img src="attached-devices.png" width="700">
You can also enter <code>arp</code> in a terminal:
<pre>
$ arp -a
...
? (192.168.1.9) at aa:aa:aa:aa:aa:aa on en0 ifscope [ethernet]
...
</pre>
</li>

<li>Run Secure Shell in a terminal on your computer to connect to the Raspberry Pi. Username is <code>pi</code>. Password is <code>raspberry</code>:
<pre>
$ ssh pi&#64;192.168.1.9
</pre>
</li>

<li>View the root directory of your Raspberry Pi:
<pre>
$ ls /
bin  boot  dev  etc  home  lib  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
</pre>
</li>

<li>Install <code>git</code>, and determine version:
<pre>
$ sudo apt-get update
$ sudo apt-get install git -y
$ git --version
git version 2.11.0
</pre>
</li>

<li>Determine <code>gcc</code> version:
<pre>
$ gcc --version
gcc (Raspbian 6.3.0-18+rpi1+deb9u1) 6.3.0 20170516
Copyright (C) 2016 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
</pre>
</li>

<li>Determine <code>python</code> version:
<pre>
$ python --version
Python 2.7.13
</pre>
</li>

<li>Determine <code>nano</code> version:
<pre>
$ nano --version
GNU nano, version 2.7.4
</pre>
</li>

</ol>

### Additional Links

* [raspberrypi.org/documentation/remote-access/ssh](https://www.raspberrypi.org/documentation/remote-access/ssh/)
* [Installing NOOBS for first time without screen or keyboard](https://www.raspberrypi.org/forums/viewtopic.php?t=172862)
* [NOOBS (New Out of Box Software)](https://github.com/raspberrypi/noobs/blob/master/README.md)
* [Setting up a Raspberry Pi headless](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md)
* [Raspbian](https://www.raspberrypi.org/downloads/raspbian/)
* [pi zero w wpa_supplicant](https://www.raspberrypi.org/forums/viewtopic.php?t=203716)
* [Setting WiFi up via the command line](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
* [SSH (Secure Shell)](https://www.raspberrypi.org/documentation/remote-access/ssh/)
* [Setting up your own Raspberry Pi 3 git server with Go Git Service (Gogs) and Raspbian Stretch Lite](https://www.techcoil.com/blog/setting-up-your-own-raspberry-pi-3-git-server-with-go-git-service-gogs-and-raspbian-stretch-lite/)