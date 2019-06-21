---
title: New property example
layout: ayla-development-kit-2019-06.html
b: block
---

The purpose of this example is to show how to add a property to a host application and to the corresponding digital twin in the Ayla Cloud. Specifically, this example shows how to add two string properties, <code>str_in</code> and <code>str_out</code>. The first is a <code>to device</code> property, and the second is a <code>from device</code>. The host application receives a <code>str_in</code> property value update, transforms the string to uppercase, and sends the transformed string back to the cloud as <code>str_out</code>. In the example, the yellow lines, which implement the new properties, are additions to the [Baseline example](../baseline-example).

<pre class="numbered">
<span>#include &lt;string.h&gt;</span>
<span class="highlight">#include &lt;ctype.h&gt;</span>
<span>#include &lt;ayla/utypes.h&gt;</span>
<span>#include &lt;ayla/host_lib.h&gt;</span>
<span>#include &lt;arch/board.h&gt;</span>
<span>#include &lt;mcu_io.h&gt;</span>
<span>#include &lt;toolchain/attributes.h&gt;</span>
<span>#include &lt;ayla/ayla_proto_mcu.h&gt;</span>
<span>#include &lt;ayla/props.h&gt;</span>
<span>#include &lt;demo/demo.h&gt;</span>
<span></span>
<span>#define DEMO_SUFFIX ""</span>
<span>#define DEMO_NAME "demo"</span>
<span>#define DEMO_VERSION "2.0"</span>
<span></span>
<span>const char version[] ATTRIB_VERSION = DEMO_NAME DEMO_SUFFIX " " DEMO_VERSION " " BUILD_VERSION;</span>
<span>static char template_version[] = DEMO_NAME DEMO_SUFFIX " 1.9";</span>
<span></span>
<span>static u8 blue_button;</span>
<span class="highlight">static char str_in_buf[TLV_MAX_STR_LEN + 1];</span>
<span class="highlight">static char str_out_buf[TLV_MAX_STR_LEN + 1];</span>
<span></span>
<span>static void set_led(struct prop &ast;prop, void &ast;arg, void &ast;valp, size_t len) {</span>
<span>  u8 val = &ast;(u8 &ast;)valp;</span>
<span>  u32 led = (u32)arg;</span>
<span>  board_led_set(led, val);</span>
<span>}</span>
<span></span>
<span>static int send_led(struct prop &ast;prop, void &ast;arg) {</span>
<span>  u32 led = (u32)prop-&gt;arg;</span>
<span>  u8 val = board_led_get(led);</span>
<span>  return prop_send(prop, &val, sizeof(val), arg);</span>
<span>}</span>
<span></span>
<span>static int send_version(struct prop &ast;prop, void &ast;arg) {</span>
<span>  return prop_send(prop, version, strlen(version), arg);</span>
<span>}</span>
<span></span>
<span class="highlight">static void set_str_in(struct prop &ast;prop, void &ast;arg, void &ast;valp, size_t len) {</span>
<span class="highlight">  if (len >= sizeof(str_in_buf)) {</span>
<span class="highlight">    len = sizeof(str_in_buf) - 1;</span>
<span class="highlight">  }</span>
<span class="highlight">  memcpy(str_in_buf, valp, len);</span>
<span class="highlight">  str_in_buf[len] = '\0';</span>
<span class="highlight">  for(int i=0; i&lt;len; i++){</span>
<span class="highlight">    str_out_buf[i] = toupper(str_in_buf[i]);</span>
<span class="highlight">  }</span>
<span class="highlight">  str_out_buf[len] = '\0';</span>
<span class="highlight">  demo_log("str_in = %s", str_in_buf);</span>
<span class="highlight">  demo_log("str_out = %s", str_out_buf);</span>
<span class="highlight">  prop_send_req("str_out");</span>
<span class="highlight">}</span>
<span></span>
<span>static struct prop prop_table[] = {</span>
<span>  {"Blue_button", ATLV_BOOL, NULL, prop_send_generic, &blue_button, sizeof(blue_button)},</span>
<span>  {"Green_LED", ATLV_BOOL, set_led, send_led, (void &ast;)LED1, 1},</span>
<span class="highlight">  {"str_in", ATLV_UTF8, set_str_in, prop_send_generic, str_in_buf, 0},</span>
<span class="highlight">  {"str_out", ATLV_UTF8, NULL, prop_send_generic, str_out_buf, 0},</span>
<span>  {"version", ATLV_UTF8, NULL, send_version, NULL, 0},</span>
<span>  {"oem_host_version", ATLV_UTF8, NULL, prop_send_generic, template_version, sizeof(template_version) - 1},</span>
<span>};</span>
<span></span>
<span>static struct prop_table demo_prop_table = PROP_TABLE_INIT(prop_table);</span>
<span></span>
<span>static void demo_set_button_state(u32 button, u32 button_value) {</span>
<span>  blue_button = button_value;</span>
<span>  prop_send_req("Blue_button");</span>
<span>}</span>
<span></span>
<span>int main(int argc, char &ast;&ast;argv) {</span>
<span>  board_init(argc, argv);</span>
<span>  ayla_host_lib_init();</span>
<span class="highlight">  atty_init(console_cli);</span>
<span>  board_module_reset();</span>
<span>  demo_factory_reset_handle();</span>
<span>  mcu_button_handler_set(0, demo_set_button_state);</span>
<span>  prop_table_add(&demo_prop_table);</span>
<span>  prop_send_req_to_ads_only("version");</span>
<span>  prop_request_value(NULL);</span>
<span></span>
<span>  for (;;) {</span>
<span>    demo_poll();</span>
<span>  }</span>
<span>}</span>
</pre>

## Run the example

<ol>
<li>Browse to the [Ayla Developer Portal](/content/ayla-developer-portal), and click on the DSN of your device.</li>
<li>Click Add.</li>
<li>Add a <code>str_in</code> property to the digital twin by filling in the form, and clicking OK.
<img src="str-in.png" width="280">
</li>
<li><code>Click to update</code>, and set <code>str_in</code> to a known value (e.g. "surprise").
<img src="str-in-surprise.png" width="280">
</li>
<li>Add a <code>str_out</code> (from device) property.
<img src="str-out-click-to-update.png" width="360">
</li>
<li>In a terminal, <code>cd ~/Ayla-host-lib-2.0</code>.</li>
<li><code>nano example/app/ledevb/demo.c</code>, and replace the contents with the example.</li>
<li><code>make</code> and <code>make download</code>.
<li>Open a screen session with <code>screen /dev/ttyACM0 115200</code> or similar.</li>
<li>Press/release the black button on the host board.</li>
<li>View the output in your screen session:
<pre>
ADS connection DOWN
ADS connection DOWN
ADS connection UP
demo: str_in = surprise
demo: str_out = SURPRISE
pushed str_out
pushed version
</pre>
</li>
</ol>