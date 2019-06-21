---
title: Console example
layout: ayla-development-kit-2019-06.html
b: block
---

This example shows how to enable serial communication between (1) a terminal on your computer and (2) the host application on your dev kit. With serial communication enabled, you can (a) issue commands to the host app, and (b) view <code>printf</code> messages from the host app, helpful especially during development. In the example, the yellow lines, which implement console functionality, are additions to the [Baseline example](../baseline-example).

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
<span></span>
<span>static void set_led(struct prop &ast;prop, void &ast;arg, void &ast;valp, size_t len) {</span>
<span>  u8 val = &ast;(u8 &ast;)valp;</span>
<span>  u32 led = (u32)arg;</span>
<span>  board_led_set(led, val);</span>
<span class="highlight">  demo_log("%s set %s to %u", prop_source_string(prop), prop->name, val);</span>
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
<span>static struct prop prop_table[] = {</span>
<span>  {"Blue_button", ATLV_BOOL, NULL, prop_send_generic, &blue_button, sizeof(blue_button)},</span>
<span>  {"Green_LED", ATLV_BOOL, set_led, send_led, (void &ast;)LED1, 1},</span>
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
<span class="highlight">#ifdef DEMO_CONSOLE</span>
<span class="highlight">  atty_init(console_cli);</span>
<span class="highlight">#endif</span>
<span>  board_module_reset();</span>
<span>  demo_factory_reset_handle();</span>
<span class="highlight">  demo_log("host application version is \"%s\"", version);</span>
<span class="highlight">  demo_log("Host template version is \"%s\"", template_version);</span>
<span class="highlight">  demo_log("host library version is \"%s\"", ayla_host_lib_version());</span>
<span>  mcu_button_handler_set(0, demo_set_button_state);</span>
<span>  prop_table_add(&demo_prop_table);</span>
<span>  prop_send_req_to_ads_only("version");</span>
<span>  prop_request_value(NULL);</span>
<span class="highlight">  demo_log("init completed\n");</span>
<span></span>
<span>  for (;;) {</span>
<span>    demo_poll();</span>
<span>  }</span>
<span>}</span>
</pre>

## Run the example

<ol>
<li><code>cd ~/Ayla-host-lib-2.0</code>.</li>
<li><code>nano example/app/ledevb/demo.c</code>, and replace the contents with the example.</li>
<li><code>make</code> and <code>make download</code>.
<li>Open a screen session with <code>screen /dev/ttyACM0 115200</code> or similar.</li>
<li>Press/release the black button on the host board.</li>
<li>View the output in your screen session:
<pre>
demo: host application version is "demo 2.0 2019-06-06 13:05:05"
demo: Host template version is "demo 1.9"
demo: host library version is "ayla_host_lib 2.0"
demo: init completed
ADS connection DOWN
ADS connection DOWN
ADS connection UP
demo: cloud set Green_LED to 0
pushed version
</pre>
</li>
<li>Terminate the screen session with <code>Ctl-A + k + y</code>.</li>
</ol>

## Analyze the example

<table class="code-line">
<tr>
<td>Line 54</td>
<td>
<p><code>DEMO_CONSOLE</code> is set to TRUE by default. You can set it to FALSE on the make command line like this:</p>
<pre>
$ touch example/app/ledevb/demo.c
$ make NO_CONSOLE=1
</pre>
See <code>Makefile</code> for more details.
</td>
</tr>
<tr>
<td>Line 55</td>
<td><code>console_cli</code> is the function in <code>example/libcons/console.c</code> that handles console commands. <code>atty_init</code> initializes serial communication between your computer and the host board. It also initializes <code>libcons.a</code>. It is defined in <code>example/libcons/atty.c</code>.</td>
</tr>
<tr>
<td>Line 24<br/>Line 59<br/>Line 60<br/>Line 61<br/>Line 66</td>
<td>
<p><code>demo_log</code> defined in <code>example/libdemo/include/demo/demo.h</code> is a macro that, if <code>DEMO_CONSOLE = TRUE</code>, is replaced with the following:</p>
<pre>
printf("demo: " fmt "\n", ##__VA_ARGS__)
</pre>
</td>
</tr>
</table>