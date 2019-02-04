---
title: Tables in lists
layout: authoring-guide.html
b: block
---

Use an HTML <code>&lt;table&gt;</code> tag (without linefeeds) to interject a table into a list:

<pre>
1. Create a template with the following attributes.
&lt;table&gt;
&lt;tr&gt;&lt;th&gt;Field&lt;/th&gt;&lt;th&gt;Value&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Visibility&lt;/td&gt;&lt;td&gt;oem&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;BT GW Generic&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Description&lt;/td&gt;&lt;td&gt;Generic&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Registration Type&lt;/td&gt;&lt;td&gt;None&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Model&lt;/td&gt;&lt;td&gt;linuxevb&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Template Key&lt;/td&gt;&lt;td&gt;generic&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Version&lt;/td&gt;&lt;td&gt;\*&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Node&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
1. Add the following properties to the template.
&lt;table&gt;
&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Display Name&lt;/th&gt;&lt;th&gt;Type&lt;/th&gt;&lt;th&gt;Direction&lt;/th&gt;&lt;th&gt;Scope&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;From Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Icon&lt;/td&gt;&lt;td&gt;Icon&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;From Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Class&lt;/td&gt;&lt;td&gt;Class&lt;/td&gt;&lt;td&gt;Integer&lt;/td&gt;&lt;td&gt;From Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Appearance&lt;/td&gt;&lt;td&gt;Appearance&lt;/td&gt;&lt;td&gt;Integer&lt;/td&gt;&lt;td&gt;From Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;Alias&lt;/td&gt;&lt;td&gt;Alias&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;To Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
</pre>

Here is the rendered list:

1. Create a template with the following attributes.
<table>
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
1. Add the following properties to the template.
<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>Name</td><td>Name</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>Icon</td><td>Icon</td><td>String</td><td>From Device</td><td>user</td></tr>
<tr><td>Class</td><td>Class</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>Appearance</td><td>Appearance</td><td>Integer</td><td>From Device</td><td>user</td></tr>
<tr><td>Alias</td><td>Alias</td><td>String</td><td>To Device</td><td>user</td></tr>
</table>

Here is an empty table for your copy/paste convenience:

<pre>
&lt;table&gt;
&lt;tr&gt;&lt;th&gt;&nbsp;&lt;/th&gt;&lt;th&gt;&nbsp;&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&nbsp;&lt;/td&gt;&lt;td&gt;&nbsp;&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
</pre>