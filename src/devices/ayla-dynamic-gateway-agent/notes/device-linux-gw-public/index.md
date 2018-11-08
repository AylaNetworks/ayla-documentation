---
title: device-linux-gw-public
layout: ayla-dynamic-gateway-agent.html
d: block
---

[device_linux_gw_public](https://github.com/AylaNetworks/device_linux_gw_public)

<pre>
- app
  - appd
    - main.c
    - appd.c
    - appd.h
    - Makefile
  - gatewayd
    - main.c
    - gateway.c 
    - gateway.h 
    - node.c
    - node.h
    - node_sim.c  
    - node_sim.h
    - Makefile  
  - bt_gatewayd
    - main.c
    - gateway.c
    - gateway.h
    - node.c
    - node.h
    - bt_gatt.c
    - bt_gatt.h
    - bt_interface.c
    - bt_interface.h
    - dbus_client.c
    - dbus_client.h
    - dbus_utils.c
    - dbus_utils.h
    - bt_utils.c
    - bt_utils.h
    - Makefile
  - zb_gatewayd
    - main.c
    - gateway.c
    - gateway.h
    - node.c
    - node.h
    - appd_interface.c
    - appd_interface.h
    - appd_interface_node.h
    - zb_callback.c
    - zb_interface.c
    - zb_interface.h
    - README.md
    - .style_ok
    - ember_stack_include.h
    - ember (directory with several files)
    - Makefile
  - multi_gatewayd
    - main.c
    - gateway.c
    - gateway.h
    - node.c 
    - node.h
    - bluetooth
    - zigbee 
    - .style_ok
    - Makefile
- daemon
  - devd
    - app_if.c
    - app_if.h
    - client_lan.c
    - dapi.c
    - dapi.h
    - devd_conf.c
    - devd_conf.h
    - dnss.c
    - dnss.h
    - ds.h
    - ds_client.c
    - ds_client.h
    - ds_main.c
    - gateway.mk
    - gateway_client.c
    - gateway_client.h
    - gateway_if.c
    - gateway_if.h
    - msg_server.c
    - msg_server.h
    - notify.c
    - notify.h
    - ops_devd.c
    - ops_devd.h
    - props_client.c
    - props_client.h
    - props_if.c
    - props_if.h
    - serv.c
    - serv.h
    - certs (directory of pem files)
    - config 
      - devd.conf (json shell)
    - Makefile
  - cond is the Ayla configuration daemon.
    - sample
    - .style_ok
    - cond.c 
    - cond.h 
    - wifi.c 
    - wifi.h 
    - wifi_conf.c
    - wifi_interface.c
    - wifi_platform.h
    - wifi_utils.c
    - config
      - generic
        - cond.conf
      - mt7688
        - cond.conf
      - supplicant
        - cond.conf
      - README
    - platform
      - generic
        - wifi_control.sh
        - wifi_platform.c
      - mt7688
        - wifi_control.sh
        - wifi_platform.c
        - wifi_platform.mk
        - wifi_platform_ioctl.c
        - wifi_platform_ioctl.h
      - supplicant
        - wifi_control.sh
        - wifi_platform.c
        - wifi_platform.mk
    - Makefile
  - logd
    - logd.c
    - logd.h
    - Makefile
- dev_kit
  - raspberry_pi
    - ayla_install.sh
    - www
      - client
      - lock.gif
      - refresh.gif
      - style.css
      - wifi
      - wifi.js
- ext
  - hashmap is a hashmap implementation for embedded c programs.
    - src
    - test
    - LICENSE
    - README.md
  - hostap was a popular ieee device driver for Linux. Now obsolete. See Wikipedia.
    - src
      - common (header files)
      - utils (source and header files)
- host_util
  - config_gen is a standalone utility for generating config file and appending entry to manufacturing log.
    - sample_input
    - conf_gen_main.c
    - xml.c
    - xml.h
    - xml_decode.c
    - Makefile
    - README
  - gw_setup sets up the GW to use the Ayla Cloud Service.
    - product
      - ayla
        - README.txt
        - config
        - model_info.tcl
    - COPYING.txt
    - ayla_lib.tcl
    - gw_setup.tcl
    - Makefile
- lib
  - app
    - include
      - app
        - app.h
        - conf_access.h
        - data.h 
        - gateway.h
        - msg_client.h 
        - ops.h
        - props.h
        - sched.h
    - Makefile
    - app.c
    - conf_access.c
    - data.c
    - data_internal.h
    - gateway.c
    - gateway.mk
    - gateway_internal.h
    - msg_client.c
    - msg_client_internal.h
    - ops.c
    - ops_internal.h
    - props.c
    - props_internal.h
    - sched.c
    - sched_internal.h
    - schedeval.c
  - ayla
    - include
      - ayla
        - amsg.h
        - amsg_protocol.h
        - assert.h
        - async.h
        - ayla_interface.h
        - base64.h
        - buffer.h
        - build.h
        - clock.h
        - cmd.h
        - conf_access.h
        - conf_io.h
        - conf_rom.h
        - crc.h
        - crypto.h
        - data.h
        - dns.h
        - endian.h
        - file_event.h
        - file_io.h
        - filesystem_monitor.h
        - gateway.h
        - gateway_interface.h
        - hashmap.h
        - hex.h
        - http.h
        - http_client.h
        - json_interface.h
        - json_parser.h
        - lan_ota.h
        - log.h
        - msg_cli.h
        - msg_conf.h
        - msg_defs.h
        - msg_utils.h
        - nameval.h
        - network_utils.h
        - notify_proto.h
        - ops.h
        - parse.h
        - props.h
        - sched.h
        - server.h
        - socket.h
        - str_utils.h
        - time_utils.h
        - timer.h
        - tlv.h
        - token_table.h
        - uri_code.h
        - utypes.h
        - wifi.h
    - .style_ok
    - Makefile
    - amsg.c
    - amsg_protocol.c
    - assert.c
    - async.c
    - base64.c
    - buffer.c
    - clock_utils.c
    - cmd_handle.c
    - conf_io.c
    - conf_rom.c
    - crc16.c
    - crc32.c
    - crc8.c
    - crypto.c
    - endian.c
    - file_event.c
    - file_io.c
    - filesystem_monitor.c
    - gateway.mk
    - gateway_interface.c
    - hex.c
    - http.c
    - http_client.c
    - json_interface.c
    - json_parser.c
    - lan_ota.c
    - log.c
    - lookup_by_name.c
    - lookup_by_val.c
    - msg_cli.c
    - msg_conf.c
    - msg_utils.c
    - network_utils.c
    - parse_argv.c
    - parse_date.c
    - serv_proxy.c
    - server.c
    - socket.c
    - str_utils.c
    - time_utils.c
    - timer.c
    - uri_decode.c
    - uri_encode.c
    - uri_encoding_maps.c
  - platform
    - generic
      - conf.c
      - crypto.c
      - ota.c
      - system.c
    - include
      - platform
        - conf.h
        - crypto.h
        - ota.h
        - platform.h
        - system.h
    - jnrd6040
      - init.d
      - scripts
      - conf.c
      - ota.c
      - system.c
    - raspberry_pi
      - scripts
      - ota.c
      - system.c
    - Makefile
- make
  - README
  - common_cc.mk
  - common_defs.mk
- util
  - acgi
    - Makefile
    - acgi.c
  - acli
    - Makefile
    - acli.c
  - devdwatch
    - Makefile
    - devdwatch.c
  - gw_setup_agent
    - Makefile
    - gsa_conf.h
    - gsa_main.c
  - ota
    - Makefile
    - ota_download.c
    - ota_update.c
    - ota_update.h
- Makefile
- README
- gateway.mk
- package_version.mk
</pre>

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
