---
title: Examine source code
layout: ayla-integrated-agents.html
b: block
---

<pre>
static struct ada_sprop demo_props[] = {
  { "oem_host_version", ATLV_UTF8,demo_template_version, sizeof(demo_template_version), ada_sprop_get_string, NULL},
  { "version", ATLV_UTF8, &version[0], sizeof(version), ada_sprop_get_string, NULL},
  { "Blue_button", ATLV_BOOL, &blue_button, sizeof(blue_button), ada_sprop_get_bool, NULL},
  { "Blue_LED", ATLV_BOOL, &blue_led, sizeof(blue_led), ada_sprop_get_bool, demo_led_set },
  { "Green_LED", ATLV_BOOL, &green_led, sizeof(green_led), ada_sprop_get_bool, demo_led_set },
  { "cmd", ATLV_UTF8, &cmd_buf[0], sizeof(cmd_buf), ada_sprop_get_string, demo_cmd_set },
  { "log", ATLV_UTF8, &cmd_buf[0], sizeof(cmd_buf), ada_sprop_get_string, NULL },
  { "input", ATLV_INT, &input, sizeof(input), ada_sprop_get_int, demo_int_set },
  { "output", ATLV_INT, &output, sizeof(output), ada_sprop_get_int, NULL },
  { "decimal_in", ATLV_CENTS, &decimal_in, sizeof(decimal_in), ada_sprop_get_int, demo_int_set },
  { "decimal_out", ATLV_CENTS, &decimal_out, sizeof(decimal_out), ada_sprop_get_int, NULL },
  { "stream_up_len", ATLV_INT, &stream_up_len, sizeof(stream_up_len), ada_sprop_get_int, demo_int_set },
  { "stream_up", ATLV_LOC, &stream_up_state, 0, NULL, NULL },
  { "stream_down", ATLV_LOC, &stream_down_state, 0, NULL, demo_stream_down_begin },
  { "stream_down_len", ATLV_INT, &stream_down_state.next_off, sizeof(stream_down_state.next_off), ada_sprop_get_int, NULL },
  { "stream_down_match_len", ATLV_INT, &stream_down_patt_match_len, sizeof(stream_down_patt_match_len), ada_sprop_get_int, NULL },
};
</pre>