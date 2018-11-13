---
title: Create node templates
layout: ayla-dynamic-gateway-agent.html
f: block
---

<ol>
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
</ol>