---
title: Complex code in lists
layout: authoring-guide.html
b: block
---

Code with indentation and/or empty lines requires pure HTML. The example list below includes a code snippet, image, and table. Note that the <code>&lt;/li&gt;</code> appears after the <code>&lt;/pre&gt;</code> and <code>&lt;/table&gt;</code>:

<pre>
&lt;ol&gt;
<span style="color:yellow;">&lt;li&gt;Open ...&lt;/li&gt;</span>
<span style="color:#00cc00;">&lt;li&gt;Add the &lt;code&gt;blue_button_isr&lt;/code&gt; function ...
&lt;pre&gt;
void blue_button_isr(void) {
  struct op_options opts = {.confirm = 1};

  if(digitalRead(BLUE_BUTTON) == LOW) {
    blue_button = 1;
  } else {
    blue_button = 0;
  }

  struct prop_metadata &#42;metadata = prop_metadata_alloc();
  ...
}
&lt;/pre&gt;
&lt;/li&gt;</span>
<span style="color:#4d4dff;">&lt;li&gt;Wire the breadboard ...
&lt;img src="pinout.svg" width="500"&gt;
&lt;/li&gt;</span>
<span style="color:#eb2d53;">&lt;li&gt;Add the following properties ...
&lt;table&gt;
&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Display Name&lt;/th&gt;&lt;th&gt;Type&lt;/th&gt;&lt;th&gt;Direction&lt;/th&gt;&lt;th&gt;Scope&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;enable&lt;/td&gt;&lt;td&gt;Enable&lt;/td&gt;&lt;td&gt;Boolean&lt;/td&gt;&lt;td&gt;To Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;battery_enable&lt;/td&gt;&lt;td&gt;Battery Enable&lt;/td&gt;&lt;td&gt;Boolean&lt;/td&gt;&lt;td&gt;To Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;battery_charge&lt;/td&gt;&lt;td&gt;Battery Charge&lt;/td&gt;&lt;td&gt;Integer&lt;/td&gt;&lt;td&gt;From Device&lt;/td&gt;&lt;td&gt;user&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
&lt;/li&gt;</span>
&lt;/ol&gt;
</pre>

Here is the rendered list:

<ol>
<li>Open ...</li>
<li>Add the <code>blue_button_isr</code> function ...
<pre>
void blue_button_isr(void) {
  struct op_options opts = {.confirm = 1};

  if(digitalRead(BLUE_BUTTON) == LOW) {
    blue_button = 1;
  } else {
    blue_button = 0;
  }

  struct prop_metadata *metadata = prop_metadata_alloc();
  ...
}
</pre>
</li>
<li>Wire the breadboard ...
<img src="pinout.svg" width="500">
</li>
<li>Add the following properties ...
<table>
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>enable</td><td>Enable</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>battery_enable</td><td>Battery Enable</td><td>Boolean</td><td>To Device</td><td>user</td></tr>
<tr><td>battery_charge</td><td>Battery Charge</td><td>Integer</td><td>From Device</td><td>user</td></tr>
</table>
</li>
</ol>