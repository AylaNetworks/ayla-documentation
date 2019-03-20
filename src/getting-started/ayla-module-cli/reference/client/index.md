---
title: client
layout: ayla-module-cli.html
b: block
---

### Display client configuration

<pre>--&gt; client</pre>

<p><a data-toggle="collapse" href="#dcc">Sample output.</a></p>
<pre class="collapse" id="dcc">
client: enabled "https&colon;//AylaShield-0dfc7900-device.aylanetworks.com"
client: lan mode enabled
client: lan auto_echo enabled
client: poll interval=300 secs, polling = 0
client: mcu_feature_mask = 7
client: state=0 http_state=0 conn_time=0
client: np_started=0 np_up=0 np_event=1
notify: server=, ip=0.0.0.0
notify: client_state=0 probe_state=0 keep_alive=0
</pre>

### Enable/disable client

<pre>--&gt; client &lt;enable&#124;disable&gt;</pre>

### Set polling frequency

This command specifies how often the client should poll ADS for connectivity status and updates. The default is 300 seconds. It makes sense to disable polling for devices with only "To Device" properties. 

<pre>--&gt; client poll_interval &lt;seconds&gt;</pre>

### Enable test mode

This command tells ADS that connections from this device should be interpreted as OEM tests rather than end-user activity. Rebooting the device cancels this mode.

<pre>--&gt; client test</pre>

### Set region

This command sets the region for the device, thus determining the set of ADS servers used by the device. Before using this command, ensure that device's DSN is present on the service in the target region, and put the device in setup mode. After executing this command, issue <code>save</code> and <code>reset</code>. Valid region codes include the following:

|Code|Country|
|-|-|
|CN|China|
|US|Everywhere else|

<pre>--&gt; client server region &lt;code&gt;</pre>
