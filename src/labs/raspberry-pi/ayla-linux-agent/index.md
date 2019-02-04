---
title: Ayla Linux Agent
layout: raspberry-pi.html
---

## Install devd and appd

<ol>
<li>Obtain access to OEM account.</li>

<li>Obtain access to [device_linux_public](https://github.com/AylaNetworks/device_linux_public) Github Repository.</li>

<li>Secure shell to your RPi:
<pre>
$ ssh pi&#64;192.168.1.3
</pre>
</li>

<li>Clone the repository:
<pre>
$ git clone https&colon;//github.com/AylaNetworks/device_linux_public.git
</pre>
</li>

<li>Create devd.conf file in home directory.</li>

<li>Copy ayla_install.sh to your home directory:</li>
<pre>
$ cp ~/device_linux_public/dev_kit/raspberry_pi/ayla_install.sh ~/ 
</pre>

<li>Edit the file by setting <code>ayla_src_dir</code> to the following:</li>
<pre>
ayla_src_dir="/home/pi/device_linux_public"
</pre>

<li>Create a device template, and modify appd source code to specify the template.</li>

<li>Install the Ayla Agent (devd), Host Application (appd), etc:
<pre>
$ sudo ./ayla_install.sh -g     // Wi-Fi
$ sudo ./ayla_install.sh -g -n  // Ethernet
</pre>
</li>

<li>Reboot the RPi:
<pre>
$ sudo reboot
</pre>
</li>

<li>Verify that devd and appd are running:
<pre>
$ ps -A | grep devd
$ ps -A | grep appd
</pre>
</li>

<li>Browse to the <code>Ayla Developer Portal</code> and the <code>Ayla Dashboard Portal</code> to see/modify the new device:
<ol>
<li>Set Product Name to RPi 1.</li>
<li>Verify that the template is Ayla Linux Device.</li>
<li>Verify that the device has one property called oem_host_version.</li>
</ol>
</li>
</ol>

## Explore devd and appd

## Modify and rerun appd

The default host application (appd) has several pre-built properties. See the appd_prop_table in [appd.c](https://github.com/AylaNetworks/device_linux_public/blob/master/app/appd/appd.c).

Add the following two properties to the digital twin:

<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>input</td><td>input</td><td>Integer</td><td>To Device</td><td>user</td></tr>
<tr><td>output</td><td>output</td><td>Integer</td><td>From Device</td><td>user</td></tr>
</table>

Set input to 5. output will change to 25. See [Modify appd](/devices/ayla-linux-agent/tutorials/modify-appd/). See output change to 10.

Run in background, foreground, and debug modes.

## Add an on property (with LED)

