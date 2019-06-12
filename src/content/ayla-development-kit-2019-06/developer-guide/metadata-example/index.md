---
title: Metadata example
layout: ayla-development-kit-2019-06.html
b: block
---

This example shows how to include metadata with property value updates. By default, when a host app sends a property value to the Ayla Cloud, the cloud records the new datapoint along with a timestamp. You may, however, want to record additional metadata that provides context to the datapoint such as location, temperature, pressure, customer id, etc. In the example, the yellow lines, which implement metadata functionality, are additions to the [Baseline example](../baseline-example).

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
<span class="highlight">static int send_prop_with_meta(struct prop &ast;prop, void &ast;arg) {</span>
<span class="highlight">  struct datapoint_meta meta[DP_META_MAX_ENTRIES + 1];</span>
<span class="highlight">  int rc;</span>
<span class="highlight">  memset(&meta, 0, sizeof(meta));</span>
<span class="highlight">  meta[0].key = "mykey0";</span>
<span class="highlight">  meta[0].val = "myval0";</span>
<span class="highlight">  meta[1].key = "mykey1";</span>
<span class="highlight">  meta[1].val = "myval1";</span>
<span class="highlight">  rc = prop_validate_meta(meta);</span>
<span class="highlight">  if (rc < 0) {</span>
<span class="highlight">    prop->send_mask = 0;</span>
<span class="highlight">    return rc;</span>
<span class="highlight">  }</span>
<span class="highlight">  return prop_send_meta(prop, meta, arg);</span>
<span class="highlight">}</span>
<span></span>
<span>static struct prop prop_table[] = {</span>
<span class="highlight">  {"Blue_button", ATLV_BOOL, NULL, send_prop_with_meta, &blue_button, sizeof(blue_button)},</span>
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
<li>Press/release the black button on the host board.</li>
<li>Press/release the blue button on the Ayla Shield to send a datapoint (with metadata) to the Ayla Cloud.</li>
<li>Browse to the [Ayla Developer Portal](/content/ayla-developer-portal), click the DSN of your Ayla Dev Kit, click the Blue_button property, click Datapoints, and note the new datapoints with your metadata.
<img src="blue-button-metadata.png" width="400">
</li>
</ol>