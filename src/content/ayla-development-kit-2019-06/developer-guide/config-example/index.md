---
title: Config example
layout: ayla-development-kit-2019-06.html
b: block
---

This example shows how to obtain and display configuration information from the Ayla production module affixed to the Ayla Shield of your dev kit. In the example, the yellow lines, which implement config functionality, are additions to the [Baseline example](../baseline-example).

<pre class="numbered">
<span>#include &lt;string.h&gt;</span>
<span>#include &lt;ayla/utypes.h&gt;</span>
<span>#include &lt;ayla/host_lib.h&gt;</span>
<span>#include &lt;arch/board.h&gt;</span>
<span>#include &lt;mcu_io.h&gt;</span>
<span>#include &lt;toolchain/attributes.h&gt;</span>
<span class="highlight">#include &lt;ayla/conf_token.h&gt;</span>
<span class="highlight">#include &lt;ayla/conf_access.h&gt;</span>
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
<span>int main(int argc, char &ast;&ast;argv) {</span>
<span>  board_init(argc, argv);</span>
<span>  ayla_host_lib_init();</span>
<span class="highlight">  atty_init(console_cli);</span>
<span>  board_module_reset();</span>
<span>  demo_factory_reset_handle();</span>
<span class="highlight">  conf_poll_start();</span>
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
conf_dsn_rx: dsn AC000W000340322
conf_model_rx: model AY001MTC1
ADS connection DOWN
ADS connection UP
pushed version
</pre>
</li>
</ol>

## Analyze the example

<code>conf_poll_start</code> defined in <code>ayla/libayla/conf_access.c</code> eventually invokes <code>conf_poll</code>:

<pre>
static int conf_poll(void) {
  const enum conf_token devid_tokens[] = { CT_sys, CT_dev_id };
  const enum conf_token model_tokens[] = { CT_sys, CT_model };
  ...
  if (conf_dsn[0] == '\0') {
    if (conf_read(devid_tokens, 2, conf_dsn_rx)) {
      return -1;
    }
  }
  if (conf_model[0] == '\0') {
    if (conf_read(model_tokens, 2, conf_model_rx)) {
      return -1;
    }
  }
  return 0;
}
</pre>

<code>conf_dsn_rx</code> and <code>conf_model_rx</code> invoke <code>host_log</code> to write the DSN and model number respectively to the serial port for display by the serial terminal on your computer:

<pre>
static void conf_dsn_rx(void &ast;buf, size_t len) {
  struct ayla_tlv &ast;tlv;

  tlv = tlv_get(ATLV_UTF8, buf, len);
  if (!tlv) {
    return;
  }
  if (tlv->len >= sizeof(conf_dsn)) {
    return;
  }
  memcpy(conf_dsn, tlv + 1, tlv->len);
  conf_dsn[tlv->len] = '\0';
  host_log("conf_dsn_rx: dsn %s", conf_dsn);
}

static void conf_model_rx(void &ast;buf, size_t len) {
  struct ayla_tlv &ast;tlv;

  tlv = tlv_get(ATLV_UTF8, buf, len);
  if (!tlv) {
    return;
  }
  if (tlv->len >= sizeof(conf_model)) {
    return;
  }
  memcpy(conf_model, tlv + 1, tlv->len);
  conf_model[tlv->len] = '\0';
  host_log("conf_model_rx: model %s", conf_model);
}
</pre>