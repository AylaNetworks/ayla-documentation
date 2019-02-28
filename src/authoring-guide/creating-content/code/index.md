---
title: Code
layout: authoring-guide.html
a: block
---

Code can appear inline and as a block.

### Inline code

Use the HTML <code>&lt;code&gt;</code> tag like this:

<pre>
The source files reside in &lt;code&gt;/home/pi/device_linux_public&lt;/code&gt;.
</pre>

Rendered version: The source files reside in <code>/home/pi/device_linux_public</code>.

### Block code

Use the HTML <code>&lt;pre&gt;</code> tag like this:

<pre>
&lt;pre&gt;
void red_button_isr(void) {
  if(digitalRead(RED_BUTTON) == LOW) {
    red_button = 1;
  } else {
    red_button = 0;
  }
  prop_send_by_name("Red_button");
}
&lt;/pre&gt;
</pre>

This code snippet renders like this:

<pre>
void red_button_isr(void) {
  if(digitalRead(RED_BUTTON) == LOW) {
    red_button = 1;
  } else {
    red_button = 0;
  }
  prop_send_by_name("Red_button");
}
</pre>

<code>pre</code> tags are styled to scroll rather than wrap:

<pre>
Nov 30 06:45:32 rpi appd: [debug-app] data_send_json: {"cmd":{"proto":"data","id":468,"op":"prop_send","opts":{"confirm":true},"args":[{"property":{"name":"bt_connect_id","base_type":"string","value":"","dev_time_ms":1543578332895}}]}}
Nov 30 06:45:32 rpi appd: [debug-app] data_send_json: {"cmd":{"proto":"data","id":469,"op":"prop_send","opts":{"confirm":true},"args":[{"property":{"name":"bt_scan_results","base_type":"string","value":"[]","dev_time_ms":1543578332895}}]}}
</pre>

See [Lists](../../lists) to learn how to interject block code into lists.

### Special characters

When you wrap code in <code>&lt;pre&gt;...&lt;/pre&gt;</code> tags, you need to replace the following characters:

|Name|Original|Replacement|Comment|
|-|-|-|-|
|asterisk|&#42;|&amp;#42;|C code uses asterisks for pointers.|
|at|&#64;|&amp;#64;||
|hash|&#35;|&amp;#35;||
|less than|&lt;|&amp;lt;||
|greater than|&gt;|&amp;gt;|&nbsp;|
|tilde|&#126;|&amp;#126;|equivalency sign|
|colon|&colon;|&amp;colon;|Use in http&colon;//|

See also [HTML Character Entities Cheat Sheet](https://www.cheatography.com/davechild/cheat-sheets/html-character-entities/).
