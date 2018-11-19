---
title: Create templates
layout: ayla-dynamic-gateway-agent.html
b: block
---

This page explains how to create gateway and node templates for your ggdemo Simulator Gateway.

### Create a Gateway Template
<ol>
<li>Browse to the Ayla Developer Portal.</li>
<li>Click Design a Device, and click Add.</li>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>BT GW</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>bt_gatewayd</td><td>&nbsp;</td></tr>
<tr><td>Registration Type</td><td>Same-LAN</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>linuxevb</td><td>From your devd.conf file</td></tr>
<tr><td>Version</td><td>bluetooth_gateway_demo_v1.2</td><td>See appd_template_version in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/gateway.c).</td></tr>
<tr><td>Type</td><td>Gateway</td><td>&nbsp;</td></tr>
<tr><td>Gateway Type</td><td>Generic</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template. See appd_gw_prop_table in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/gateway.c):
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>appd_version</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_scan_enable</td><td>Scan Enable</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_scan_status</td><td>Scan Status</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_connect_id</td><td>Connect Id</td><td>String</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_connect_result</td><td>Connect Result</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_disconnect_id</td><td>Disconnect Id</td><td>String</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_disconnect_result</td><td>Disconnect Result</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_connect_passkey</td><td>Connect Passkey</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_connect_passkey_display</td><td>Connect Passkey Display</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_scan_results</td><td>Scan Results</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>num_nodes</td><td>Number of Nodes</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
</ol>

### Create a GrillRight Sensor Node Template
<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Sim GW SNode</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>Sensor Node</td><td>&nbsp;</td></tr>
<tr><td>Registration Type</td><td>None</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>From your devd.conf file</td></tr>
<tr><td>Template Key</td><td>gg_sens</td><td>See bt_gatt_prop_table_entry sensor_props in [bt_gatt.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/bt_gatt.c)</td></tr>
<tr><td>Version</td><td>\*</td><td>All host app versions</td></tr>
<tr><td>Type</td><td>Node</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template. See sss in [sss]():
<table class="key-value-table">
<tr><th>Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>temp</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
<tr><td>humidity</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
<tr><td>light_level</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
</ol>
