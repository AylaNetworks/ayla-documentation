---
title: Create the gateway
layout: ayla-dynamic-gateway-agent.html
f: block
---

This page shows you how to run ayla_install.sh which builds and installs all gateway components including your simulator application.

<ol>
<li>In your RPi Secure Shell, change to your home directory (e.g. <code>/home/pi</code>).</li>
<li>Verify that <code>ayla_install.sh</code> and <code>devd.conf</code> reside there.</li>
<li>Perform the installation. You may be required to enter your Github credentials during the process.</li>
<pre class="light">
$ sudo ./ayla_install.sh -a gatewayd
</pre>
<li>Reboot the RPi with <code>sudo reboot</code>.</li>
</ol>

PERUSE RPi installation.