---
title: Event register example
layout: ayla-development-kit-2019-06.html
b: block
---

This example shows how to register callbacks using <code>host_event_register</code> to receive notifications about events occurring on the Ayla production module. These events include when the module resets, and when the module enters standby mode. In the example, the yellow lines, which implement event functionality, are additions to the [Baseline example](../baseline-example). To learn how to cause an event on the Ayla production module using <code>host_event_notify</code>, see the [Event notify example](../event-notify-example).

<pre class="numbered">
<span>#include &lt;string.h&gt;</span>
<span>#include &lt;ayla/utypes.h&gt;</span>
<span>#include &lt;ayla/host_lib.h&gt;</span>
<span class="highlight">#include &lt;ayla/host_event.h&gt;</span>
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
<span class="highlight">static void demo_event_cb(enum host_event event, void *data, size_t len) {</span>
<span class="highlight">  switch (event) {</span>
<span class="highlight">    case HEV_RESET:</span>
<span class="highlight">    demo_log("Module was reset.\n");</span>
<span class="highlight">    break;</span>
<span></span>
<span class="highlight">    default:</span>
<span class="highlight">    break;</span>
<span class="highlight">  }</span>
<span class="highlight">}</span>
<span></span>
<span class="highlight">static struct host_event_callback demo_event_callback = HOST_EVENT_INIT_HANDLER(demo_event_cb);</span>
<span></span>
<span>int main(int argc, char &ast;&ast;argv) {</span>
<span>  board_init(argc, argv);</span>
<span>  ayla_host_lib_init();</span>
<span class="highlight">  atty_init(console_cli);</span>
<span>  board_module_reset();</span>
<span>  demo_factory_reset_handle();</span>
<span class="highlight">  host_event_register(&demo_event_callback);</span>
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
demo: Module was reset.
ADS connection DOWN
ADS connection UP
pushed version
</pre>
</li>
</ol>

## Analyze the example

Events are defined in <code>ayla/libayla/include/ayla/host_event.h</code>:

<pre>
enum host_event {
  HEV_NONE = 0,           /* reserved */
  HEV_RESET,              /* module has been reset */
  HEV_STANDBY,            /* module entered standby */
  HEV_WIFI_STATUS,        /* module sent Wi-Fi connection status */
  HEV_WIFI_STATUS_FINAL,  /* module sent Wi-Fi final connection status */
  HEV_REG_INFO,           /* module sent registration info */
  HEV_WAKEUP,             /* module should be woken after standby */
  HEV_FEATURES_SENT,      /* host has sent features to module */
  HEV_TIME_UPDATED,       /* time information updated */
  HEV_PROP_ERROR,         /* property error received */
  HEV_PROP_NOTIFY,        /* property or cmd pending during file xfer */
  _HEV_LIMIT              /* reserved - no trailing comma for Keil */
};
</pre>

<hr/>
**Click [Event notify example](../event-notify-example) to continue**.
