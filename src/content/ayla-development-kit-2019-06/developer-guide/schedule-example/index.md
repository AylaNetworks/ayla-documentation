---
title: Schedule example
layout: ayla-development-kit-2019-06.html
b: block
---

This example shows how to implement a schedule property which receives (from the Ayla Cloud) and executes a set of repeatable, user-defined actions between two points of time. In the example, the yellow lines, which implement schedule functionality, are additions to the [Baseline example](../baseline-example).

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
<span class="highlight">#include &lt;ayla/schedeval.h&gt;</span>
<span class="highlight">#include &lt;ayla/sched.h&gt;</span>
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
<span class="highlight">#define DEMO_NSCHED 1</span>
<span class="highlight">static struct sched_prop demo_sched[DEMO_NSCHED];</span>
<span></span>
<span class="highlight">static void demo_sched_set(struct prop &ast;prop, void &ast;arg, void &ast;valp, size_t len) {</span>
<span class="highlight">  struct sched_prop &ast;sched = (struct sched_prop &ast;)arg;</span>
<span class="highlight">  if (len > sizeof(sched->tlvs)) {</span>
<span class="highlight">    demo_log("received schedule %s is too long, %u bytes", prop->name, len);</span>
<span class="highlight">    len = 0;</span>
<span class="highlight">  }</span>
<span class="highlight">  demo_log("%s set %s (%u bytes)", prop_source_string(prop), prop->name, len);</span>
<span class="highlight">  memcpy(sched->tlvs, valp, len);</span>
<span class="highlight">  sched->len = len;</span>
<span class="highlight">  sched_run_all(NULL);</span>
<span class="highlight">}</span>
<span></span>
<span>static struct prop prop_table[] = {</span>
<span>  {"Blue_button", ATLV_BOOL, NULL, prop_send_generic, &blue_button, sizeof(blue_button)},</span>
<span>  {"Green_LED", ATLV_BOOL, set_led, send_led, (void &ast;)LED1, 1},</span>
<span class="highlight">  {"schedule_in", ATLV_SCHED, demo_sched_set, NULL, &demo_sched[0]},</span>
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
<li><code>cd ~/Ayla-host-lib-2.0</code>.</li>
<li><code>nano example/app/ledevb/demo.c</code>, and replace the contents with the example.</li>
<li><code>make</code> and <code>make download</code>.
<li>Open a screen session with <code>screen /dev/ttyACM0 115200</code> or similar.</li>
<li>Press/release the black button on the host board.</li>
<li>View the output in your screen session:
<pre>
ADS connection DOWN
ADS connection DOWN
ADS connection UP
pushed version
demo: cloud set schedule_in (47 bytes)
</pre>
</li>
<li>Verify that the <code>Blue_button</code> and <code>Green_LED</code> properties work.</li>
<li>In Aura, tap Schedules:
<img src="tap-schedules.png" width="200">
</li>
<li>Tap <code>schedule_in</code>:
<img src="schedule-in.png" width="200">
</li>
<li>Modify Scheduled Actions to target the Green_LED property:
<img src="scheduled-actions.png" width="200">
</li>
<li>Modify Start Time an End Time, and tap Save Schedule.</li>
<li>Observe the green LED glow and dim.</li>
</ol>

<hr/>
**Click [Config example](../config-example) to continue**.
