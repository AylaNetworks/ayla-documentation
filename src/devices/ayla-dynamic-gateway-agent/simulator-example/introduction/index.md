---
title: Introduction
layout: ayla-dynamic-gateway-agent.html
f: block
---

1. Create an oem_info file:
<pre class="light">
region US
oem 0aaa111e
oem_model ggdemo
oem_secret 0123456789abcdef0123456789abcdef
mfg_model my_mfg_model
mfg_serial my_mfg_serial
mfg_sw_version my_mfg_sw_version
odm my_odm
</pre>
1. Generate a new devd.conf file.
1. Build the Simulator Gateway (appd)
<pre class="light">
$ sudo ./ayla_install.sh -a gatewayd -u
</pre>
<li>Create a Simulator Gateway template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Simulator Gateway</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>gatewayd</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>devd.conf</td></tr>
<tr><td>Version</td><td>generic_gateway_demo 2.0</td><td>gateway.c, appd_template_version</td></tr>
<tr><td>Type</td><td>Gateway</td><td>&nbsp;</td></tr>
<tr><td>Gateway Type</td><td>Generic</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template as defined in appd_gw_prop_table in gateway.c:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>appd_version</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>add_tstat_nodes</td><td>Add Thermostat Nodes</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>add_sensor_nodes</td><td>Add Sensor Nodes</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>num_nodes</td><td>Number of Nodes</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
1. Reassociate GW device to new template. (May need to restart devd.)
<li>Create a Simulator Gateway Common node template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Simulator Gateway Common Node</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>gatewayd</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>devd.conf</td></tr>
<tr><td>Template Key</td><td>gg_sim</td><td>node_sim.c, SIM_NODE_TEMPLATE_SIM</td></tr>
<tr><td>Type</td><td>Node</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template as defined in sim_template_sim in node_sim.c:
<table class="key-value-table">
<tr><th>Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>enable</td><td>Boolean</td><td>To Device</td><td>oem</td></tr>
<tr><td>battery_enable</td><td>Boolean</td><td>To Device</td><td>oem</td></tr>
<tr><td>battery_charge</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
<li>Create a Simulator Gateway Thermostat node template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Simulator Gateway Thermostat Node</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>gatewayd</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>devd.conf</td></tr>
<tr><td>Template Key</td><td>gg_tstat</td><td>node_sim.c, SIM_NODE_TEMPLATE_TSTAT</td></tr>
<tr><td>Type</td><td>Node</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template as defined in sim_template_tstat in node_sim.c:
<table class="key-value-table">
<tr><th>Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>temp_setpoint</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>vacation_mode</td><td>Boolean</td><td>To Device</td><td>oem</td></tr>
<tr><td>local_temp</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
<tr><td>heat_on</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
<tr><td>ac_on</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
<li>Create a Simulator Gateway Sensor node template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Simulator Gateway Sensor Node</td><td>&nbsp;</td></tr>
<tr><td>Description</td><td>gatewayd</td><td>&nbsp;</td></tr>
<tr><td>Model</td><td>ggdemo</td><td>devd.conf</td></tr>
<tr><td>Template Key</td><td>gg_sens</td><td>node_sim.c, SIM_NODE_TEMPLATE_SENSOR</td></tr>
<tr><td>Type</td><td>Node</td><td>&nbsp;</td></tr>
</table>
</li>
<li>Add the following properties to the template as defined in sim_template_sensor in node_sim.c:
<table class="key-value-table">
<tr><th>Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>temp</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
<tr><td>humidity</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
<tr><td>light_level</td><td>Decimal</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
1. Change Display Name of oem_host_version property to appd_template_version.
1. Create a Thermostat Node, and register.
1. Create a Sensor Node, and register.
1. (I had to restart devd to get the Ayla Cloud to associate the new nodes to the templates.)
