---
title: Tests
layout: ayla-dynamic-gateway-agent.html
i: block
---

Note: After registration, the digital twin contained one property: oem_host_version.

I added the other properties included in the appd_prop_table in appd.c. Here is the complete list:

<table class="key-value-table">
<tr><th>Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>Blue_LED</td><td>boolean</td><td>input</td><td>user</td></tr>
<tr><td>Green_LED</td><td>boolean</td><td>input</td><td>user</td></tr>
<tr><td>Blue_button</td><td>boolean</td><td>output</td><td>user</td></tr>
<tr><td>input</td><td>integer</td><td>input</td><td>user</td></tr>
<tr><td>output</td><td>integer</td><td>output</td><td>user</td></tr>
<tr><td>decimal_in</td><td>decimal</td><td>input</td><td>user</td></tr>
<tr><td>decimal_out</td><td>decimal</td><td>output</td><td>user</td></tr>
<tr><td>cmd</td><td>string</td><td>input</td><td>user</td></tr>
<tr><td>log</td><td>string</td><td>output</td><td>user</td></tr>
<tr><td>file_down</td><td>file</td><td>input</td><td>user</td></tr>
<tr><td>file_up</td><td>file</td><td>output</td><td>user</td></tr>
<tr><td>file_up_test</td><td>boolean</td><td>output</td><td>user</td></tr>
<tr><td>oem_host_version</td><td>string</td><td>output</td><td>oem</td></tr>
</table>

Tests for each should appear on this page.