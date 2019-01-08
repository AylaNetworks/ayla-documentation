---
title: Tables
layout: authoring-guide.html
a: block
---

Here is a table:

<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>enable</td><td>Enable</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>battery_enable</td><td>Battery Enable</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>battery_charge</td><td>Battery Charge</td><td>Integer</td><td>From Device</td><td>user</td></tr>
</table>

You can make this with markdown:

<pre>
|Name|Display Name|Type|Direction|Scope|
|-|-|-|-|-|
|enable|Enable|Boolean|To Device|user|
|battery_enable|Battery Enable|Boolean|To Device|user|
|battery_charge|Battery Charge|Integer|From Device|user|
</pre>

Or, you can make it with HTML:

<pre>
&lt;table&gt;
&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Display Name&lt;/th&gt;&lt;th&gt;Type&lt;/th&gt;&lt;th&gt;Direction&lt;/th&gt;&lt;th&gt;Scope&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;enable&lt;/td&gt;&lt;td&gt;Enable&lt;/td&gt;&lt;td&gt;Boolean&lt;/td&gt;&lt;td&gt;To Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;battery_enable&lt;/td&gt;&lt;td&gt;Battery Enable&lt;/td&gt;&lt;td&gt;Boolean&lt;/td&gt;&lt;td&gt;To Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;battery_charge&lt;/td&gt;&lt;td&gt;Battery Charge&lt;/td&gt;&lt;td&gt;Integer&lt;/td&gt;&lt;td&gt;From Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
</pre>

Markdown is fine for the vast majority of tables which require a header row.

See [Lists](../lists) to learn how to intersperse tables in lists.