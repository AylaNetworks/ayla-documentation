---
title: Create a template
layout: ayla-dynamic-gateway-agent.html
f: block
---

This page explains how to create a gateway template for your ggdemo Simulator Gateway.

<ol>
<li>Browse to the Ayla Developer Portal.</li>
<li>Click Design a Device, and click Add.</li>
<li>Create a template with the following attributes:
<table class="key-value-table">
<tr><th>Field</th><th>Value</th><th>Note</th></tr>
<tr><td>Visibility</td><td>oem</td><td>&nbsp;</td></tr>
<tr><td>Name</td><td>Simulator Gateway</td><td>&nbsp;</td></tr>
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