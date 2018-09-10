---
title: Run the Ayla Linux Agent and the Host Application
layout: devices-ayla-linux-agent.html
b: block
---

This tutorial shows you how to run the Ayla Linux Agent (devd) and the Host Application (appd).

# About devd and appd 

### Where are devd and appd on disk?

At this point, you have two sets:

<ol>
<li>The <i>Installed Set</i> resides in <code>~/ayla/bin/</code>. This is the devd and appd that ayla_install.sh installed and started. Both should be running on your RPi now. The devd startup script is in <code>/etc/init.d/devd</code>. devd is configured (by default) to keep appd running when devd is running, and to stop appd when devd stops.</li>
<pre>
$ ls -1r ~/ayla/bin/{devd,appd}
/home/pi/ayla/bin/devd
/home/pi/ayla/bin/appd
</pre>

<li>The <i>Cloned Set</i> resides in <code>~/device_linux_public/build/native/obj/</code>. This is the devd and appd that resulted when you cloned and made device_linux_public.
<pre>
$ ls ~/device_linux_public/build/native/obj/daemon/devd/devd
$ ls ~/device_linux_public/build/native/obj/app/appd/appd
</pre>
</li>
</ol>

### What are devd and appd command-line options?

<ol>
<li>Tell devd to show command-line options:
<pre>
$ ~/ayla/bin/devd ?
</pre>
The following options appear:
<pre>
devd: unused arguments
devd 1.5.1-eng 2018-09-06 07:35:34 pi/c102d2d
Usage: devd [OPTIONS]
OPTIONS:
  -d, --debug                 Enable debug verbose debug messages
  -f, --foreground            Do not daemonize
  -c, --factory_config &lt;file&gt; Factory config file path
  -s, --startup_dir &lt;dir&gt;     Startup config directory
  -w, --wait                  Wait for dhcp_bound event enable client
  -o, --sockdir &lt;dir&gt;         Socket directory (e.g. /var/run)
  -n, --no_appd               Do not execute and manage 'appd' application service
  -t, --test                  Connect to cloud in test mode
</pre>
</li>
<li>Tell appd to show command-line options:
<pre>
$ $ ~/ayla/bin/appd ?
</pre>
The following options appear:
<pre>
appd: unused arguments
Usage: appd
  Options:
    -c --factory_config &lt;file&gt;  Specify factory config file
    -s --startup_dir &lt;dir&gt;      Specify startup config directory
    -d --debug                  Run in debug mode
    -f --foreground             Don't detach daemon process, run in foreground
    -o --sockdir &lt;dir&gt;          Specify socket directory
</pre>
</li>
</ol>

### How do you stop/start or restart devd and appd?

Stop/start or restart the Installed Set like this:

<ol>
<li>Stop the devd daemon. This also stops appd. Raspbian will ask for authentication.
<pre>
$ /etc/init.d/devd stop
</pre>
</li>
<li>Start the devd daemon. This also starts appd. Raspbian will ask for authentication.
<pre>
$ /etc/init.d/devd start
</pre>
</li>
<li>Restart the devd daemon. This also restarts appd. Raspbian will ask for authentication.
<pre>
$ /etc/init.d/devd restart
</pre>
</li>
</ol>

# Run your version of appd

While developing your own version of appd, you will need to run it instead of the Installed version. Here are two ways to do this:

## Method 1: Overwrite the installed version

Overwrite the installed appd with your version, and restart devd which launches your version of appd. Do this repeatedly as you make modifications to your version of appd.

<ol>
<li>Stop devd and appd:
<pre>
$ /etc/init.d/devd stop
</pre>
</li>
<li>Make a copy of the original appd:
<pre>
$ sudo cp ~/ayla/bin/appd ~/ayla/bin/appd.original
</pre>
</li>
<li>Modify and make your version of appd.</li>
<li>Copy your version of appd to the directory where devd expects to find it:
<pre>
$ sudo cp ~/device_linux_public/build/native/obj/app/appd/appd ~/ayla/bin/appd
</pre>
</li>
<li>Start devd:
<pre>
$ /etc/init.d/devd start
</pre>
</li>
<li>Test your modifications.</li>
</ol>

## Method 2: Run your version independently

### Reconfigure devd so that it does not manage appd:

<ol>
<li>Stop devd and appd:
<pre>
$ /etc/init.d/devd stop
</pre>
</li>
<li>Open <code>/etc/init.d/devd</code> for editing.
<pre>
$ sudo nano /etc/init.d/devd
</pre>
</li>
<li>Add <code>-n</code> to OPTIONS, and save the file:
<pre>
OPTIONS="--debug -n -c /home/pi/ayla/config/devd.conf"
</pre>
</li>
<li>Start devd:
<pre>
$ /etc/init.d/devd start
</pre>
</li>
<li>Verify that devd is running:
<pre>
$ ps -A | grep devd
  126 ?        00:00:00 systemd-udevd
 1224 ?        00:00:00 devd
</pre>
</li>
<li>Verify that appd is not running:
<pre>
$ ps -A | grep appd
</pre>
</li>
</ol>

### Run your version of appd in background mode

<ol>
<li>Modify and make your version of appd.</li>
<li>Run appd:
<pre>
$ sudo ~/device_linux_public/build/native/obj/app/appd/appd -c /home/pi/ayla/config/appd.conf
</pre>
</li>
<li>Verify that appd is running:
<pre>
$ ps -A | grep appd
 2147 ?        00:00:00 appd
</pre>
</li>
<li>Test your modifications.</li>
<li>Stop appd:
<pre>
$ sudo killall appd
</pre>
</li>
</ol>

### Run your version of appd in foreground mode

<ol>
<li>Modify and make your version of appd.</li>
<li>Run appd:
<pre>
$ sudo ~/device_linux_public/build/native/obj/app/appd/appd -f -c /home/pi/ayla/config/appd.conf
</pre>
Terminal output will look similar to this:
<pre>
[INF] appd::appd_init()  application initializing
[INF] appd::conf_read()  read configuration from file: /home/pi/ayla/config/appd.conf
[INF] appd::msg_client_event_handler()  connected to cloud client
[INF] appd::appd_start()  application starting
[INF] appd::appd_connectivity_event()  Cloud connection UP
[INF] appd::appd_prop_confirm_cb()  output = 0 send at 1536580478336 to dests 1 succeeded
</pre>
</li>
<li>In another terminal, verify that appd is running:
<pre>
$ ps -A | grep appd
 2244 pts/0    00:00:00 appd
</pre>
</li>
<li>Test your modifications.</li>
<li>Stop appd with <code>Ctl-C</code>. 
<pre>
[WRN] appd::file_event_poll()  poll failed: Interrupted system call
[INF] appd::appd_exit()  application exiting with status: 2
[INF] appd::msg_client_event_handler()  disconnected from cloud client
[INF] appd::appd_connectivity_event()  Cloud connection DOWN
[WRN] appd::app_client_connection_status_handler()  set connect_timer 1000 ms
</pre>
</ol>

### Run your version of appd in foreground/debug mode

<ol>
<li>Modify and make your version of appd.</li>
<li>Run appd:
<pre>
$ sudo ~/device_linux_public/build/native/obj/app/appd/appd -f -d -c /home/pi/ayla/config/appd.conf
</pre>
Terminal output will look similar to this:
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
</li>
<li>Test your modifications.</li>
<li>Stop appd with <code>Ctl-C</code>.</li>
</ol>