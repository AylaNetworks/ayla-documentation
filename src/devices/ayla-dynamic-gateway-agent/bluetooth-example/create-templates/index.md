---
title: Create templates
layout: ayla-dynamic-gateway-agent.html
b: block
---

This page explains how to create gateway and node templates for your linuxevb Bluetooth Gateway.

### Create a Gateway Template
<ol>
<li>Browse to the Ayla Developer Portal.</li>
<li>Click Design a Device, and click Add.</li>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>BT GW</td></tr>
<tr><td>Description</td><td>bt_gatewayd</td></tr>
<tr><td>Registration Type</td><td>Same-LAN</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Version</td><td>bluetooth_gateway_demo_v1.2</td></tr>
<tr><td>Type</td><td>Gateway</td></tr>
<tr><td>Gateway Type</td><td>Generic</td></tr>
</table>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>version</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_scan_enable</td><td>bt_scan_enable</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_scan_status</td><td>bt_scan_status</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_connect_id</td><td>bt_connect_id</td><td>String</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_connect_result</td><td>bt_connect_result</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_disconnect_id</td><td>bt_disconnect_id</td><td>String</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_disconnect_result</td><td>bt_disconnect_result</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_connect_passkey</td><td>bt_connect_passkey</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_connect_passkey_display</td><td>bt_connect_passkey_display</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_scan_results</td><td>bt_scan_results</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>num_nodes</td><td>num_nodes</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
</table>
<p>The properties compose the <code>appd_gw_prop_table</code> in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/gateway.c).</p>
</li>
</ol>

### Create a Generic Node Template
<ol>
<li>Create a template with the following attributes:
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
<p>For the Template Key definition, see <code>BT_TEMPLATE_DEVICE</code> in [bt_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_interface.c).</p>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>Name</td><td>Name</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>Icon</td><td>Icon</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>Class</td><td>Class</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>Appearance</td><td>Appearance</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>Alias</td><td>Alias</td><td>String</td><td>To Device</td><td>oem</td></tr>
</table>
<p>These properties compose the <code>bt_template_device</code> array in [bt_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_interface.c).</p>
</li>
</ol>

### Create an Info Node Template
<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>BT GW Info</td></tr>
<tr><td>Description</td><td>Info</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Template Key</td><td>info</td></tr>
<tr><td>Version</td><td>\*</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
<p>This template is added by the <code>bt_gatt_init_info</code> function in [bt_gatt.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_gatt.c).</p>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>mfg_name</td><td>mfg_name</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>model_num</td><td>model_num</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>serial_num</td><td>serial_num</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>hw_revision</td><td>hw_revision</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>fw_revision</td><td>fw_revision</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>sw_revision</td><td>sw_revision</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>system_id</td><td>system_id</td><td>String</td><td>From Device</td><td>oem</td></tr>
</table>
<p>These properties are added by the <code>bt_gatt_init_info</code> function in [bt_gatt.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_gatt.c).</p>
</li>
</ol>

### Create a Grillright Node Template
<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>BT GW Grillright</td></tr>
<tr><td>Description</td><td>Grillright</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Template Key</td><td>grillrt</td></tr>
<tr><td>Version</td><td>1.2</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
<p>This template is added by the <code>bt_gatt_init_grillright</code> function in [bt_gatt.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_gatt.c).</p>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>ALARM</td><td>ALARM</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>COMMAND</td><td>COMMAND</td><td>String</td><td>To Device</td><td>oem</td></tr>
<tr><td>CONTROL_MODE</td><td>CONTROL_MODE</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>COOKING</td><td>COOKING</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
<tr><td>TIME</td><td>TIME</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>DONENESS</td><td>DONENESS</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>MEAT</td><td>MEAT</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>PCT_DONE</td><td>PCT_DONE</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>TARGET_TEMP</td><td>TARGET_TEMP</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>TARGET_TIME</td><td>TARGET_TIME</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>TEMP</td><td>TEMP</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
</table>
<p>This properties are added by the <code>bt_gatt_init_grillright</code> function in [bt_gatt.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_gatt.c).</p>
</li>
</ol>
