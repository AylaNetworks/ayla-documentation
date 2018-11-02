---
title: Reference
layout: ayla-dynamic-gateway-agent.html
c: block
---

### [app/appd/main.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/appd/main.c)

Calls:
<pre>
app_init
app_set_debug
app_set_exit_func
app_set_factory_reset_func
app_set_conn_event_func
app_set_registration_event_func
app_set_conf_file
app_set_socket_directory
app_run
</pre>

### [app/appd/appd.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/appd/appd.c)

Contains:
<pre>
appd_send_version
appd_file_down_confirm_cb
appd_file_up_confirm_cb
appd_prop_confirm_cb
appd_batch_confirm_handler
appd_prop_ads_failure_cb
appd_input_set
appd_cmd_set
appd_decimal_in_set
appd_batch_hold_set
appd_led_set
appd_file_up_test_set
appd_init
appd_start
appd_exit
appd_factory_reset
appd_connectivity_event
appd_registration_event

static struct prop appd_prop_table[] = {
  {.name = "version",.type = PROP_STRING,.send = appd_send_version},
  {.name = "Green_LED",.type = PROP_BOOLEAN,.set = appd_led_set,.send = prop_arg_send,.arg = &green_led,.len = sizeof(green_led),.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "Blue_LED",.type = PROP_BOOLEAN,.set = appd_led_set,.send = prop_arg_send,.arg = &blue_led,.len = sizeof(blue_led),.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "Blue_button",.type = PROP_BOOLEAN,.send = prop_arg_send,.arg = &blue_button,.len = sizeof(blue_button),.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "input",.type = PROP_INTEGER,.set = appd_input_set,.send = prop_arg_send,.arg = &input,.len = sizeof(input),.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "output",.type = PROP_INTEGER,.send = prop_arg_send,.arg = &output,.len = sizeof(output),.confirm_cb = appd_prop_confirm_cb,.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "decimal_in",.type = PROP_DECIMAL,.set = appd_decimal_in_set,.send = prop_arg_send,.arg = &decimal_in,.len = sizeof(decimal_in),.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "decimal_out",.type = PROP_DECIMAL,.send = prop_arg_send,.arg = &decimal_out,.len = sizeof(decimal_out),.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "cmd",.type = PROP_STRING,.set = appd_cmd_set,.send = prop_arg_send,.arg = cmd,.len = sizeof(cmd),.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "log",.type = PROP_STRING,.send = prop_arg_send,.arg = log,.len = sizeof(log),.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "file_down",.type = PROP_FILE,.set = prop_arg_set,.arg = file_down_path,.len = sizeof(file_down_path),.confirm_cb = appd_file_down_confirm_cb,.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "file_up",.type = PROP_FILE,.send = prop_arg_send,.arg = file_up_path,.len = sizeof(file_up_path),.confirm_cb = appd_file_up_confirm_cb,.ads_failure_cb = appd_prop_ads_failure_cb,},
  {.name = "file_up_test",.type = PROP_BOOLEAN,.set = appd_file_up_test_set,.send = prop_arg_send,.arg = &file_up_test,.len = sizeof(file_up_test),},
  {.name = "batch_hold",.type = PROP_BOOLEAN,.set = appd_batch_hold_set,.send = prop_arg_send,.arg = &batch_hold,.len = sizeof(batch_hold),},
};
</pre>

Calls:
<pre>
prop_val_send
prop_val_to_str
prop_arg_set
prop_metadata_alloc
prop_metadata_addf
prop_lookup
prop_arg_batch_append
prop_metadata_free
prop_send_by_name
prop_batch_send
prop_send
prop_metadata_add
prop_arg_send
prop_add
prop_batch_confirm_handler_set
prop_send_from_dev
prop_request_to_dev
</pre>

### [lib/app/app.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/lib/app/app.c)

Contains:
<pre>
struct app_state {}

app_template_version_send
app_template_version_confirm_handler
app_client_event_handler
app_handle_factory_reset
app_client_connect_legacy
app_client_connection_status_handler
app_client_connect
app_connect_timeout
app_set_reconnect
app_dispatch_timeout
app_init_internal
app_start_internal
app_exit_internal
app_exit_callback
app_set_conf_file
app_set_socket_directory
app_set_template_version
app_set_exit_func
app_set_poll_func
app_set_factory_reset_func
app_set_conn_event_func
app_set_registration_event_func
app_set_debug
app_get_debug
app_get_timers
app_get_file_events
app_init
app_run
app_exit
app_dispatch
</pre>

Calls:
<pre>
sss
</pre>
