---
title: Add Magic Blue node
layout: ayla-dynamic-gateway-agent.html
b: block
---

### Create a Bulb RGB Node Template
<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>BT GW Magic Blue</td></tr>
<tr><td>Description</td><td>Magic Blue</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Template Key</td><td>bulb_rgb</td></tr>
<tr><td>Version</td><td>1.5</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
<p>This template is added by the <code>bt_gatt_init_bulb_rgb</code> function in [bt_gatt.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_gatt.c).</p>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>mode</td><td>mode</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>onoff</td><td>onoff</td><td>Boolean</td><td>To Device</td><td>oem</td></tr>
<tr><td>rgb</td><td>rgb</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>white</td><td>white</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>fade</td><td>fade</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>fade_rate</td><td>fade_rate</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
</table>
<p>These properties are added by the <code>bt_gatt_init_bulb_rgb</code> function in [bt_gatt.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_gatt.c).</p>
</li>
</ol>

### Turn on the bulb

### Test Raspberry Pi-to-bulb communication

<ol>
<li>In your RPi Secure Shell, run the following:
<pre class="light">
$ sudo bluetoothctl
# agent on
# default-agent
# scan on
Discovery started
[CHG] Controller B8:27:EB:80:7B:CC Discovering: yes
[NEW] Device F8:1D:78:63:37:36 LEDBLE-78633736
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -42
# scan off
</pre>
<p>In this case, <code>F8:1D:78:63:37:36</code> is a bulb Mac address.</p>
</li>
<li>Exit the utility.</li>
</ol>

### Add the bulb node

### Test node properties

### About node property names

