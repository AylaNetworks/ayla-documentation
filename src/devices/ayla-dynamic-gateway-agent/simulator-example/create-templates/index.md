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
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>Sim GW</td></tr>
<tr><td>Description</td><td>gatewayd</td></tr>
<tr><td>Registration Type</td><td>Same-LAN</td></tr>
<tr><td>Model</td><td>ggdemo</td></tr>
<tr><td>Version</td><td>generic_gateway_demo 2.0</td></tr>
<tr><td>Type</td><td>Gateway</td></tr>
<tr><td>Gateway Type</td><td>Generic</td></tr>
</table>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>appd_version</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>add_tstat_nodes</td><td>Add Thermostat Nodes</td><td>Integer</td><td>To Device</td><td>user</td></tr>
<tr><td>add_sensor_nodes</td><td>Add Sensor Nodes</td><td>Integer</td><td>To Device</td><td>user</td></tr>
<tr><td>num_nodes</td><td>Number of Nodes</td><td>Integer</td><td>From Device</td><td>user</td></tr>
</table>
</li>
</ol>

### Create a Base Node Template

<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>Sim GW BNode</td></tr>
<tr><td>Description</td><td>Base Node</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>ggdemo</td></tr>
<tr><td>Template Key</td><td>gg_sim</td></tr>
<tr><td>Version</td><td>\*</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>enable</td><td>Enable</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>battery_enable</td><td>Battery Enable</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>battery_charge</td><td>Battery Charge</td><td>Integer</td><td>From Device</td><td>user</td></tr>
</table>
</li>
</ol>

### Create a Sensor Node Template
<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>Sim GW SNode</td></tr>
<tr><td>Description</td><td>Sensor Node</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>ggdemo</td></tr>
<tr><td>Template Key</td><td>gg_sens</td></tr>
<tr><td>Version</td><td>\*</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>temp</td><td>Temperature</td><td>Decimal</td><td>From Device</td><td>user</td></tr>
<tr><td>humidity</td><td>Humidity</td><td>Decimal</td><td>From Device</td><td>user</td></tr>
<tr><td>light_level</td><td>Light Level</td><td>Decimal</td><td>From Device</td><td>user</td></tr>
</table>
</li>
</ol>

### Create a Thermostat Node Template
<ol>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>Sim GW TNode</td></tr>
<tr><td>Description</td><td>Thermostat Node</td></tr>
<tr><td>Registration Type</td><td>None</td></tr>
<tr><td>Model</td><td>ggdemo</td></tr>
<tr><td>Template Key</td><td>gg_tstat</td></tr>
<tr><td>Version</td><td>\*</td></tr>
<tr><td>Type</td><td>Node</td></tr>
</table>
</li>
<li>Add the following properties to the template:
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>temp_setpoint</td><td>Temperature Set Point</td><td>Integer</td><td>To Device</td><td>user</td></tr>
<tr><td>vacation_mode</td><td>Vacation Mode</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>local_temp</td><td>Local Temperature</td><td>Decimal</td><td>From Device</td><td>user</td></tr>
<tr><td>heat_on</td><td>Heat On</td><td>Boolean</td><td>From Device</td><td>user</td></tr>
<tr><td>ac_on</td><td>AC On</td><td>Boolean</td><td>From Device</td><td>user</td></tr>
</table>
</li>
</ol>
