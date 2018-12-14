---
title: Add generic node template
layout: ayla-dynamic-gateway-agent.html
b: block
---

Both the Grillright and the Magic Blue nodes require the properties in the <code>generic</code> template.

### Create a Generic Node Template
<ol>
<li>Create a template with the following attributes. For Template Key, see <code>BT_TEMPLATE_DEVICE</code> in [bt_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_interface.c).
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>BT GW Generic</td></tr>
<tr><td>Description</td><td>Generic</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Template Key</td><td>generic</td></tr>
<tr><td>Version</td><td>\*</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
</li>
<li>Add the following properties to the template. See <code>bt_template_device</code> in [bt_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_interface.c).
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>Name</td><td>Name</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>Icon</td><td>Icon</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>Class</td><td>Class</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>Appearance</td><td>Appearance</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>Alias</td><td>Alias</td><td>String</td><td>To Device</td><td>user</td></tr>
</table>
</li>
</ol>

