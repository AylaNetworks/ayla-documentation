---
title: Set up your Raspberry Pi
layout: ayla-dynamic-gateway-agent.html
i: block
---

You can refer to the official [Raspberry Pi documentation](https://www.raspberrypi.org/documentation/) for help with setting up your RPi.

When deleting a previous Ayla Linux Agent or Ayla Dynamic Gateway Agent installation, include the following:
 
1. Stop daemons, and delete daemon initialization files:
<pre>
$ ps -A | grep devd
$ ps -A | grep appd
$ ps -A | grep cond
$ ps -A | grep logd
$ sudo systemctl stop devd
$ sudo systemctl stop cond
$ sudo systemctl stop logd
$ sudo rm /etc/init.d/devd
$ sudo rm /etc/init.d/cond
$ sudo rm /etc/init.d/logd
</pre>
1. Delete the installation files and directory:
<pre>
$ sudo rm ~/ayla_install.sh
$ sudo rm ~/devd.conf
$ sudo rm -r ~/ayla/
</pre>
1. Delete cloned source code:
<pre>
$ sudo rm -r ~/device_linux_gw_public/
</pre>
