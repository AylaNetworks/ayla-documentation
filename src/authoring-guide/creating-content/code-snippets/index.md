---
title: Code snippets
layout: authoring-guide.html
a: block
---

Use HTML <code>pre</code> tags to add code snippets to your page:

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

See [Lists](../lists) to learn how to intersperse code snippets in lists.