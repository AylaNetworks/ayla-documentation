---
title: Create templates
layout: ayla-dynamic-gateway-agent.html
f: block
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
<tr><td>Name</td><td>Sim GW</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>gatewayd</td><td>&nbsp;</td></tr>
<tr><td>Registration Type</td><td>Same-LAN</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>From your devd.conf file</td></tr>
<tr><td>Version</td><td>generic_gateway_demo 2.0</td><td>See appd_template_version in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/gateway.c).</td></tr>
<tr><td>Type</td><td>Gateway</td><td>&nbsp;</td></tr>
<tr><td>Gateway Type</td><td>Generic</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template. See appd_gw_prop_table in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/gateway.c):
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>appd_version</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>add_tstat_nodes</td><td>Add Thermostat Nodes</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>add_sensor_nodes</td><td>Add Sensor Nodes</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>num_nodes</td><td>Number of Nodes</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
</ol>

### Create a Base Node Template

The base node template is abstract; it is not instantiable. However, instances of sensor and thermostat nodes inherit base node properties. For details, see the sim_node_populate_props function in [node_sim.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/node_sim.c).

<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Sim GW Node</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>Base Node</td><td>&nbsp;</td></tr>
<tr><td>Registration Type</td><td>None</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>From your devd.conf file</td></tr>
<tr><td>Template Key</td><td>gg_sim</td><td>See SIM_NODE_TEMPLATE_SIM in [node_sim.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/node_sim.c).</td></tr>
<tr><td>Version</td><td>\*</td><td>All host app versions</td></tr>
<tr><td>Type</td><td>Node</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template. See sim_template_sim in [node_sim.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/node_sim.c):
<table class="key-value-table">
<tr><th>Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>enable</td><td>Boolean</td><td>To Device</td><td>oem</td></tr>
<tr><td>battery_enable</td><td>Boolean</td><td>To Device</td><td>oem</td></tr>
<tr><td>battery_charge</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
</ol>

### Create a Sensor Node Template
<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Sim GW SNode</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>Sensor Node</td><td>&nbsp;</td></tr>
<tr><td>Registration Type</td><td>None</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>From your devd.conf file</td></tr>
<tr><td>Template Key</td><td>gg_sens</td><td>See SIM_NODE_TEMPLATE_SENSOR in [node_sim.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/node_sim.c)</td></tr>
<tr><td>Version</td><td>\*</td><td>All host app versions</td></tr>
<tr><td>Type</td><td>Node</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template. See sim_template_sensor in [node_sim.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/node_sim.c):
<table class="key-value-table">
<tr><th>Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>temp</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
<tr><td>humidity</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
<tr><td>light_level</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
</ol>

### Create a Thermostat Node Template
<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Sim GW TNode</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>Thermostat Node</td><td>&nbsp;</td></tr>
<tr><td>Registration Type</td><td>None</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>From your devd.conf file</td></tr>
<tr><td>Template Key</td><td>gg_tstat</td><td>See SIM_NODE_TEMPLATE_TSTAT in [node_sim.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/node_sim.c).</td></tr>
<tr><td>Version</td><td>\*</td><td>All host app versions</td></tr>
<tr><td>Type</td><td>Node</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template. See sim_template_tstat in [node_sim.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/gatewayd/node_sim.c):
<table class="key-value-table">
<tr><th>Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>temp_setpoint</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>vacation_mode</td><td>Boolean</td><td>To Device</td><td>oem</td></tr>
<tr><td>local_temp</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
<tr><td>heat_on</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
<tr><td>ac_on</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
</ol>
