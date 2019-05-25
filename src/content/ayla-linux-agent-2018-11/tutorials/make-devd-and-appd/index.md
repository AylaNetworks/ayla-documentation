---
title: Make the Ayla Linux Agent and the Host Application
layout: ayla-linux-agent-2018-11.html
b: block
---

This tutorial shows you how to clone and build the Ayla Device Platform for Linux, including the Ayla Linux Agent (devd) and the Host Application (appd), on your Raspberry Pi.

<ol>
<li>ssh to your RPi.
<pre>
$ ssh pi@192.168.1.7
</pre>
pwd should be <code>/home/pi</code>.
</li>
<li>Clone [device_linux_public](https://github.com/AylaNetworks/device_linux_public).
<pre>
$ git clone https://github.com/AylaNetworks/device_linux_public.git
</pre>
Github will prompt you for username and password:
<pre>
Cloning into 'device_linux_public'...
Username for 'https://github.com': MattAtAyla
Password for 'https://MattAtAyla@github.com': 
remote: Counting objects: 2282, done.
remote: Total 2282 (delta 0), reused 0 (delta 0), pack-reused 2282
Receiving objects: 100% (2282/2282), 1.84 MiB | 3.34 MiB/s, done.
Resolving deltas: 100% (1509/1509), done.
</pre>
</li>
<li>Build device_linux_public.
<pre>
$ cd device_linux_public/
$ make
</pre>
Be sure to <code>cd ~/device_linux_public/</code> in subsequent tutorials before executing <code>make</code>. Output will be similar to this:
<pre>
make -s -C lib/ayla all
CC ../../ext/hashmap/src/hashmap.c
CC amsg.c
...
...
make -s -C app/appd all
CC appd.c
CC main.c
Linking appd
</pre>
</li>
</ol>