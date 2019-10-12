---
title: Create a template
layout: ayla-on-an-esp32-dev-kit-2019-02.html
a: block
---

1. Browse to the [Ayla Developer Portal](/archive/ayla-developer-portal/), log in, click Design a Device, and click Add.
1. Enter the following details, and click Ok.
<table>
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>ESP32 Dev Kit C 1.0</td></tr>
<tr><td>Description</td><td>ESP32 Dev Kit C 1.0</td></tr>
<tr><td>Registration Type</td><td>AP-Mode</td></tr>
<tr><td>Model</td><td>esp32devkitc</td></tr>
<tr><td>Version</td><td>ESP32 Dev Kit C 1.0</td></tr>
<tr><td>Type</td><td>Wifi</td></tr>
</table>
1. Click on the template name in the list:
1. Click the Properties tab, and then click Add:
1. Add the following properties:
<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>version</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>Blue_button</td><td>Blue_button</td><td>Boolean</td><td>From Device</td><td>user</td></tr>
<tr><td>Blue_LED</td><td>Blue_LED</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>Green_LED</td><td>Green_LED</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>cmd</td><td>cmd</td><td>String</td><td>To Device</td><td>user</td></tr>
<tr><td>log</td><td>log</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>input</td><td>input</td><td>Integer</td><td>To Device</td><td>user</td></tr>
<tr><td>output</td><td>output</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>decimal_in</td><td>decimal_in</td><td>Decimal</td><td>To Device</td><td>user</td></tr>
<tr><td>decimal_out</td><td>decimal_out</td><td>Decimal</td><td>From Device</td><td>user</td></tr>
<tr><td>stream_up_len</td><td>stream_up_len</td><td>Integer</td><td>To Device</td><td>user</td></tr>
<tr><td>stream_up</td><td>stream_up</td><td>File</td><td>From Device</td><td>user</td></tr>
<tr><td>stream_down_len</td><td>stream_down_len</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>stream_down</td><td>stream_down</td><td>File</td><td>To Device</td><td>user</td></tr>
<tr><td>stream_down_match_len</td><td>stream_down_match_len</td><td>Integer</td><td>From Device</td><td>user</td></tr>
</table>
