---
title: Ack example
layout: ayla-development-kit-2019-06.html
b: block
---

This example shows how to report to the Ayla Cloud the status of a property update just received from the Ayla Cloud. The example implements the <code>input</code> and <code>output</code> properties mentioned in [Build environment test](../build-environment-test), but limits permissible <code>input</code> values to between 5 and -5 inclusive, so that the greatest permissible <code>output</code> value is <code>5 &ast; 5 = 25</code>. In the example, the yellow lines, which implement acknowledgement functionality, are additions to the [Baseline example](../baseline-example).

<pre class="numbered">
<span>#include &lt;string.h&gt;</span>
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
<span class="highlight">static s32 input;</span>
<span class="highlight">static s32 output;</span>
<span></span>
<span class="highlight">enum demo_val_err {VAL_NO_ERR = 0, VAL_BAD_LEN, VAL_OUT_OF_RNG};</span>
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
<span class="highlight">static void set_input(struct prop *prop, void *arg, void *valp, size_t len) {</span>
<span class="highlight">  s32 i = *(s32 *)valp;</span>
<span class="highlight">  if (len != sizeof(s32)) {</span>
<span class="highlight">    prop->ack.ack_status = 1;</span>
<span class="highlight">    prop->ack.ack_message = VAL_BAD_LEN;</span>
<span class="highlight">    return;</span>
<span class="highlight">  }</span>
<span class="highlight">  if (i > 5 || i < -5) {</span>
<span class="highlight">    output = -1;</span>
<span class="highlight">    prop->ack.ack_status = 1;</span>
<span class="highlight">    prop->ack.ack_message = VAL_OUT_OF_RNG;</span>
<span class="highlight">  } else {</span>
<span class="highlight">    input = i;</span>
<span class="highlight">    output = i * i;</span>
<span class="highlight">    prop->ack.ack_status = 0;</span>
<span class="highlight">    prop->ack.ack_message = VAL_NO_ERR;</span>
<span class="highlight">  }</span>
<span class="highlight">  demo_log("proposed %s = %ld", prop->name, (long)i);</span>
<span class="highlight">  demo_log("%s = %ld", prop->name, (long)input);</span>
<span class="highlight">  demo_log("output = %ld", (long)output);</span>
<span class="highlight">  prop_send_req("output");</span>
<span class="highlight">}</span>
<span></span>
<span>static struct prop prop_table[] = {</span>
<span>  {"Blue_button", ATLV_BOOL, NULL, prop_send_generic, &blue_button, sizeof(blue_button)},</span>
<span>  {"Green_LED", ATLV_BOOL, set_led, send_led, (void &ast;)LED1, 1},</span>
<span class="highlight">  {"input", ATLV_INT, set_input, prop_send_generic, &input, sizeof(input)},</span>
<span class="highlight">  {"output", ATLV_INT, NULL, prop_send_generic, &output, sizeof(output)},</span>
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
<li><code>cd ~/Ayla-host-lib-2.0-rc1</code>.</li>
<li><code>nano example/app/ledevb/demo.c</code>, and replace the contents with the example.</li>
<li><code>make</code> and <code>make download</code>.
<li>Open a screen session with <code>screen /dev/ttyACM0 115200</code> or similar.</li>
<li>Press/release the black button on the host board.</li>
<li>View the output in your screen session:
<pre>
ADS connection DOWN
ADS connection DOWN
ADS connection UP
demo: cloud set input to 4
demo: set output to 16
pushed output
pushed version
</pre>
</li>
<li>Browse to the [Ayla Developer Portal](/content/ayla-developer-portal), click on the <code>input</code> property of your device, check <code>Ack Enabled</code>, and click OK:
<img src="ack-enabled.png" width="400">
</li>
<li>In the Ayla Developer Portal, set <code>input</code> to <code>5</code>:
<img src="set-to-5.png" width="400">
<code>5</code> is a permissible number, so the host app squares it.
</li>
<li>Check the serial console:
<pre>
demo: proposed input = 5
demo: input = 5
demo: output = 25
pushed output
</pre>
</li>
<li>Check the <code>input</code> datapoint tab:
<img src="set-to-5-dp.png" width="700">
</li>
<li>Then, set <code>input</code> to <code>7</code>:
<img src="set-to-7.png" width="400">
<code>7</code> is not a permissible number, so, after receiving the negative ack from the host app, the cloud resets to the previous value.
</li>
<li>Check the serial console:
<pre>
demo: proposed input = 7
demo: input = 5
demo: output = -1
pushed output
</pre>
</li>
<li>Check the <code>input</code> datapoint tab:
<img src="set-to-7-dp.png" width="700">
</li>
</ol>