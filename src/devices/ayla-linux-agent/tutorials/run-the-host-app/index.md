---
title: Run the Host Application
layout: devices-ayla-linux-agent.html
b: block
---

This page shows you how to run appd. 

<ol>
</li>
<li>Stop the devd daemon (which also stops the appd daemon):
<pre>
$ /etc/init.d/devd stop
</pre>
Raspbian will ask for authentication. Note that the devd startup script is in <code>/etc/init.d/devd</code>. You can <code>cat</code> this file to learn more about the options that control devd.
</li>
<li>Make a copy of the original appd:
<pre>
$ sudo cp /home/pi/ayla/bin/appd /home/pi/ayla/bin/appd.original
</pre>
</li>
<li>Copy your new version of appd to the directory where devd expects to find it:
<pre>
$ sudo cp /home/pi/device_linux_public/build/native/obj/app/appd/appd /home/pi/ayla/bin/appd
</pre>
</li>
<li>Start the devd daemon (which also starts the appd daemon):
<pre>
$ /etc/init.d/devd start
</pre>
Raspbian will ask for authentication, again.
</li>
</ol>

