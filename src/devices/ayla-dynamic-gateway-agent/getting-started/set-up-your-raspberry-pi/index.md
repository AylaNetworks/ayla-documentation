---
title: Set up your Raspberry Pi
layout: ayla-dynamic-gateway-agent.html
i: block
---

### Stop daemons from prior installations

<pre class="light">
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

### Delete prior installations

<pre class="light">
$ sudo rm ~/ayla_install.sh
$ sudo rm ~/devd.conf
$ sudo rm -r ~/ayla/
$ sudo rm -r ~/device_linux_gw_public/
</pre>
