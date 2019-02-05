---
title: Installation
layout: ayla-linux-agent.html
a: block
---

These directions assume that you will use your Raspberry Pi as both a development environment and an Ayla device. This page shows you how to set up your development environment on your RPi, and how to register your RPi as a device in the Ayla Cloud.

### Clone the Ayla repository

1. Secure shell to your RPi:
<pre>
$ ssh pi&#64;192.168.1.9
</pre>
1. Ensure that you are in your home directory (e.g. <code>/home/pi</code>).
1. Clone the Ayla [device-linux-public](https://github.com/AylaNetworks/device_linux_public) repository. You will be asked for your Github username and password.
<pre>
$ git clone https&#58;//github.com/AylaNetworks/device_linux_public.git
</pre>
1. View the new <code>/home/pi/device_linux_public</code> directory.
<pre>
$ ls &#126;/device_linux_public/
app  daemon  dev_kit  ext  host_util  lib  make  Makefile  package_version.mk  README  util
</pre>

### Edit ayla_install.sh

1. Copy ayla_install.sh to your home directory:
<pre>
$ cp &#126;/device_linux_public/dev_kit/raspberry_pi/ayla_install.sh ~/ 
</pre>
1. Open the file for editing, and find the following line:
<pre>
ayla_src_dir="$temp_dir/ayla/src"
</pre>
1. Change it to the following, and save.
<pre>
ayla_src_dir="/home/pi/device_linux_public"
</pre>

### Build/install the Ayla Device Platform for Linux

1. Create an empty text file named <code>devd.conf</code> in <code>/home/pi</code>. You will replace this file later.
<pre>
$ touch devd.conf
</pre>
1. View installation options:
<pre>
$ ./ayla_install.sh -h
</pre>
1. Start the installation. You will be asked for your Github username and password during the installation.
<pre>
$ sudo ./ayla_install.sh -g     // Wi-Fi
$ sudo ./ayla_install.sh -g -n  // Ethernet
</pre>
If you are installing over a previous installation, include the <code>-u</code> flag. The <code>-g</code> flag installs the [Wiring Pi library](http://wiringpi.com/) in your run environment which is required by the tutorials for connecting your RPi via GPIO pins to LEDs and buttons on a breadboard.
