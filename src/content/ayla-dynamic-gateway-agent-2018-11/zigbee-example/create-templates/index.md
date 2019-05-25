---
title: Create templates
layout: ayla-dynamic-gateway-agent-2018-11.html
a: block
---

This page shows you how to create gateway and node templates.

### Create a Gateway Template
1. Browse to the Ayla Developer Portal.
1. Click Design a Device, and click Add.
1. Create a template with the following attributes. For <code>Version</code>, see <code>appd_template_version</code> in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/gateway.c).</p>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>ZB GW</td></tr>
<tr><td>Description</td><td>zb_gatewayd</td></tr>
<tr><td>Registration Type</td><td>Same-LAN</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Version</td><td>zigbee_gateway_demo_v1.1</td></tr>
<tr><td>Type</td><td>Gateway</td></tr>
<tr><td>Gateway Type</td><td><span style="color:red;">Generic</span></td></tr>
</table>
<div>The Gateway Type must be <span style="color:red;">Generic</span>. It must not be Zigbee.</div>
1. Add the following properties to the template. See <code>appd_gw_prop_table</code> in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/gateway.c).
<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>version</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>num_nodes</td><td>num_nodes</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>zb_join_enable</td><td>zb_join_enable</td><td>Integer</td><td>To Device</td><td>user</td></tr>
<tr><td>zb_join_status</td><td>zb_join_status</td><td>Boolean</td><td>From Device</td><td>user</td></tr>
<tr><td>zb_network_up</td><td>zb_network_up</td><td>Boolean</td><td>From Device</td><td>user</td></tr>
<tr><td>zb_bind_cmd</td><td>zb_bind_cmd</td><td>String</td><td>To Device</td><td>user</td></tr>
<tr><td>zb_bind_result</td><td>zb_bind_result</td><td>String</td><td>From Device</td><td>user</td></tr>
</table>
<div>For the version property, check the <code>Host SW Version</code> option.</div>

### Create a Sensor Node Template
This template is used by SmartThings Motion Sensors and SmartThings Multipurpose Sensors.
1. Create a template with the following attributes. For <code>Version</code>, see <code>ZB_TEMPLATE_IAS_ZONE_VERSION</code> in [appd_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/appd_interface.c).</p>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>ZB GW Sensor</td></tr>
<tr><td>Description</td><td>Sensor</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Template Key</td><td>iaszone</td></tr>
<tr><td>Version</td><td>1.0</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
1. Add the following properties to the template. See <code>zb_template_ias_zone</code> function in [appd_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/appd_interface.c).
<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>alias</td><td>alias</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>long_address</td><td>long_address</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>model_id</td><td>model_id</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>power_level</td><td>power_level</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>power_source</td><td>power_source</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>short_address</td><td>short_address</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>status</td><td>status</td><td>Boolean</td><td>From Device</td><td>user</td></tr>
</table>

### Create a Light Node Template
1. Create a template with the following attributes. For <code>Version</code>, see <code>ZB_TEMPLATE_LIGHT_VERSION</code> in [appd_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/appd_interface.c).</p>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>ZB GW Light</td></tr>
<tr><td>Description</td><td>Light</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Template Key</td><td>light</td></tr>
<tr><td>Version</td><td>1.0</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
1. Add the following properties to the template. See <code>zb_template_light</code> function in [appd_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/appd_interface.c).
<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>alias</td><td>alias</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>long_address</td><td>long_address</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>model_id</td><td>model_id</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>onoff</td><td>onoff</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>power_level</td><td>power_level</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>power_source</td><td>power_source</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>short_address</td><td>short_address</td><td>String</td><td>From Device</td><td>user</td></tr>
</table>

### Create a Dimm Node Template
This template is used by GE Link Connected LED Bulbs.
1. Create a template with the following attributes. For <code>Version</code>, see <code>ZB_TEMPLATE_DIMM_LIGHT_VERSION</code> in [appd_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/appd_interface.c).</p>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>ZB GW Dimm Light</td></tr>
<tr><td>Description</td><td>Dimm Light</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Template Key</td><td>dimm</td></tr>
<tr><td>Version</td><td>1.0</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
1. Add the following properties to the template. See <code>zb_template_dimm_light</code> function in [appd_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/appd_interface.c).
<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>alias</td><td>alias</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>level_control</td><td>level_control</td><td>Integer</td><td>To Device</td><td>user</td></tr>
<tr><td>long_address</td><td>long_address</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>model_id</td><td>model_id</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>onoff</td><td>onoff</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>power_level</td><td>power_level</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>power_source</td><td>power_source</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>short_address</td><td>short_address</td><td>String</td><td>From Device</td><td>user</td></tr>
</table>

### Create a Plug Node Template
This template is used by SmartThings SmartPower Outlets. 
1. Create a template with the following attributes. For <code>Version</code>, see <code>ZB_TEMPLATE_SMART_PLUG_VERSION</code> in [appd_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/appd_interface.c).</p>
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>ZB GW Plug</td></tr>
<tr><td>Description</td><td>Plug</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Template Key</td><td>plug</td></tr>
<tr><td>Version</td><td>1.0</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
1. Add the following properties to the template. See <code>zb_template_smart_plug</code> function in [appd_interface.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/appd_interface.c).
<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>alias</td><td>alias</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>long_address</td><td>long_address</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>model_id</td><td>model_id</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>onoff</td><td>onoff</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>power_level</td><td>power_level</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>power_source</td><td>power_source</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>short_address</td><td>short_address</td><td>String</td><td>From Device</td><td>user</td></tr>
</table>
