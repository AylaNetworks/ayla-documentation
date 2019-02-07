---
title: Run the host application
layout: ayla-linux-agent.html
b: block
---

The Ayla Device Platform for Linux runs a small number of Linux daemons including the Ayla Linux Agent (<code>devd</code>), your host application (<code>appd</code>), the Ayla Connection Manager (<code>cond</code>) if your Linux client is using Wi-Fi, and the Ayla Logging Client (<code>logd</code>) if you want Ayla-related messages to be written not only to syslog, also to the Ayla Cloud. And, there are several ways to run these daemons. This tutorial explores these two topics. Many of the examples below require you to use a Secure Shell to your Raspberry Pi.

## Where are the daemons?

Ayla daemons, which can run in the foreground or background, reside in <code>/home/pi/ayla/bin</code>:

<pre>
$ ls -1 &#126;/ayla/bin/*d
/home/pi/ayla/bin/appd
/home/pi/ayla/bin/cond
/home/pi/ayla/bin/devd
/home/pi/ayla/bin/logd
</pre>

|Daemon|Description|
|-|-|
|appd|The sample host application is a starting point for your host application.|
|cond|The Wi-Fi connection manager provides an abstraction layer between Ayla daemons and the native Wi-Fi driver.|
|devd|The Ayla Linux Agent provides secure connectivity to the Ayla Cloud.|
|logd|The Ayla Log Client parses <code>/var/log/syslog</code> for Ayla-tagged messages, and posts them to the Ayla Logging Service in the Ayla Cloud.

Three of these daemons are managed by normal Linux scripts in <code>/etc/init.d</code>:

<pre>
$ ls -1 /etc/init.d/{cond,devd,logd}
/etc/init.d/cond
/etc/init.d/devd
/etc/init.d/logd
</pre>

## The relationship between devd and appd

Unlike <code>cond</code>, <code>devd</code>, and <code>logd</code>, <code>appd</code> does not have a corresponding script in <code>/etc/init.d</code>. Instead, <code>appd</code> is (by default) started/stopped by <code>devd</code>. So, when you stop <code>devd</code>, it stops <code>appd</code>:

<pre>
$ sudo systemctl stop devd
</pre>

And, when you start <code>devd</code>, it starts <code>appd</code>:

<pre>
sudo systemctl start devd
</pre>

It makes sense to change this default behavior (so that <code>devd</code> no longer stops/starts <code>appd</code>) if you want to run <code>appd</code> from the build directory (<code>/device_linux_public/build/native/obj/app/appd/appd</code>) and/or in foreground/debug mode. However, the following rule still applies:

<span style="color:red;">Always stop/start devd before stopping/starting appd.</span>

## Decoupling devd and appd

Here is how you decouple <code>devd</code> and <code>appd</code>:

1. Stop devd and appd:
<pre>
$ sudo systemctl stop devd
</pre>
1. Open /etc/init.d/devd for editing.
<pre>
$ sudo nano /etc/init.d/devd
</pre>
1. Add -n to OPTIONS, and save the file:
<pre>
OPTIONS="--debug -n -c /home/pi/ayla/config/devd.conf"
</pre>
1. Start devd:
<pre>
$ sudo systemctl start devd
Warning: devd.service changed on disk. Run 'systemctl daemon-reload' to reload units.
$ systemctl daemon-reload
==== AUTHENTICATING FOR org.freedesktop.systemd1.reload-daemon ===
Authentication is required to reload the systemd state.
Multiple identities can be used for authentication:
 1. ,,, (pi)
 2.  root
Choose identity to authenticate as (1-2): 1
Password: 
==== AUTHENTICATION COMPLETE ===
</pre>
1. Verify that devd is running:
<pre>
$ ps -A | grep -w devd
 3466 ?        00:00:00 devd
</pre>
1. Verify that appd is not running:
<pre>
$ ps -A | grep appd
</pre>

## Running devd and appd independently

The sections below assume the following:
1. <code>devd</code> and <code>appd</code> have been decoupled per the instructions above.
1. <code>devd</code> and <code>appd</code> are not running.

### Run appd in background mode

1. Start devd.
<pre>
$ sudo systemctl start devd
</pre>
1. Start appd:
<pre>
$ sudo &#126;/device_linux_public/build/native/obj/app/appd/appd -c /home/pi/ayla/config/appd.conf
</pre>
1. Verify that appd is running:
<pre>
$ ps -A | grep appd
 3581 ?        00:00:00 appd
</pre>
1. Stop devd:
<pre>
$ sudo systemctl stop devd
</pre>
1. Stop appd:
<pre>
$ sudo killall appd
</pre>

### Run appd in foreground mode

1. Start devd.
<pre>
$ sudo systemctl start devd
</pre>
1. Run appd:
<pre>
$ sudo &#126;/device_linux_public/build/native/obj/app/appd/appd -f -c /home/pi/ayla/config/appd.conf
</pre>
Terminal output may look like this:
<pre>
[INF] appd::appd_init()  application initializing
[INF] appd::conf_read()  read configuration from file: /home/pi/ayla/config/appd.conf.startup
[INF] appd::msg_client_event_handler()  connected to cloud client
[INF] appd::appd_start()  application starting
[INF] appd::appd_connectivity_event()  Cloud connection UP
[INF] appd::appd_prop_confirm_cb()  output = 0 send at 1545320451361 to dests 1 succeeded
[INF] appd::appd_prop_confirm_cb()  output = 8 send at 1545320452132 to dests 1 succeeded
</pre>
1. Stop devd:
<pre>
$ sudo systemctl stop devd
</pre>
1. Stop appd with <code>Ctrl-C</code>.

### Run appd in foreground+debug mode

1. Start devd.
<pre>
$ sudo systemctl start devd
</pre>
1. Run appd:
<pre>
$ sudo &#126;/device_linux_public/build/native/obj/app/appd/appd -f -d -c /home/pi/ayla/config/appd.conf
</pre>
Terminal output may look like this:
<pre>
2018-09-10T12:49:01.436 [DBG] appd::app_set_conf_file()  factory config: /home/pi/ayla/config/appd.conf, startup config dir: default
2018-09-10T12:49:01.437 [DBG] appd::app_set_socket_directory()  socket dir: /run
2018-09-10T12:49:01.473 [INF] appd::appd_init()  application initializing
2018-09-10T12:49:01.474 [DBG] appd::conf_load()  no valid startup config: /home/pi/ayla/config/appd.conf.startup
2018-09-10T12:49:01.474 [INF] appd::conf_read()  read configuration from file: /home/pi/ayla/config/appd.conf
2018-09-10T12:49:01.475 [INF] appd::msg_client_event_handler()  connected to cloud client
2018-09-10T12:49:01.476 [INF] appd::appd_start()  application starting
2018-09-10T12:49:01.477 [DBG] appd::prop_cloud_status_changed()  resending prop: oem_host_version
2018-09-10T12:49:01.478 [DBG] appd::prop_val_send()  oem_host_version
...
...
</pre>
1. Stop devd:
<pre>
$ sudo systemctl stop devd
</pre>
1. Stop appd with <code>Ctrl-C</code>.
