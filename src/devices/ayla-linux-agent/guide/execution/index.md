---
title: Execution
layout: ayla-linux-agent.html
a: block
---

This page demonstrates various ways to run the Ayla Linux Agent (devd) and your host application (appd). Before you continue, open a Secure Shell (ssh) to your Raspberry Pi.

### Where are the daemons?

Ayla daemons are installed in <code>/home/pi/ayla/bin</code>:

<pre>
$ ls -1 &#126;/ayla/bin/*d
/home/pi/ayla/bin/appd
/home/pi/ayla/bin/cond
/home/pi/ayla/bin/devd
/home/pi/ayla/bin/logd
</pre>

* <code>appd</code> is the sample host application.
* <code>cond</code> is the Wi-Fi connection manager which provides an abstration layer between Ayla daemons and the native Wi-Fi driver. If you are using Ethernet, then <code>cond</code> is not installed.
* <code>devd</code> is the Ayla Linux Agent.
* <code>logd</code> is the optional Ayla Log Client which parses <code>/var/log/syslog</code> for Ayla-tagged messages, and posts them to the Ayla Logging Service in the Ayla Cloud. <code>logd</code> can be remotely enabled from the Ayla Dashboard Portal, and configured to monitor and debug.

Three of these daemons are managed by normal Linux scripts in <code>/etc/init.d</code>:

<pre>
$ ls -1 /etc/init.d/{cond,devd,logd}
/etc/init.d/cond
/etc/init.d/devd
/etc/init.d/logd
</pre>

<code>appd</code>, on the other hand, is (by default) managed by <code>devd</code>: When you start/stop <code>devd</code>, it starts/stops <code>appd</code>.

<pre>
ps -A | grep devd
ps -A | grep appd
ps -A | grep cond
</pre>



1. Secure Shell (ssh) to your Raspberry Pi.
1. Reboot your RPi:
<pre>
sudo reboot now
</pre>