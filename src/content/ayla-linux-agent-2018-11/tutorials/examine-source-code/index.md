---
title: Examine source code
layout: ayla-linux-agent-2018-11.html
b: block
---

This tutorial helps you explore host application (appd) source code, and the application's use of the [Ayla Linux Agent (devd) API](/ayla-linux-agent/reference/agent-api).

## What does appd do?

Consider the following diagram:

<a href="sync-tables.png"><img src="sync-tables.png" width="700"></a>

1. <code>appd</code> defines an array of properties (e.g. Green_LED) associated with the device.
1. The Ayla Cloud maintains an identical set of properties in the device's digital twin.
1. <code>appd</code> and the Ayla Cloud work together to keep the properties synchronized.
1. Each property includes a name, type, value, direction (<code>To Device</code> or <code>From Device</code>), etc.
1. <code>To Device</code> (from the cloud) property values are sometimes related to command and control (e.g. turn on LED).
1. <code>From Device</code> (to the cloud) property values are sometimes related to interrupts (e.g. the button was pressed).
1. Typically, <code>appd</code> interacts with two interfaces: Agent API and Hardware API.
1. The Agent API is <code>devd</code> which contributes secure connectivity to the cloud.
1. The Hardware API depends on your hardware. For Linux on RPi, it includes the GPIO header. 

## Where are appd files?

In essence, the host application (appd) is composed of two source files and three Ayla libraries (mostly <code>libapp.a</code>):

<pre>
&#126;/device_linux_public/app/appd/main.c
&#126;/device_linux_public/app/appd/appd.c
&#126;/device_linux_public/build/native/obj/lib/app/libapp.a
&#126;/device_linux_public/build/native/obj/lib/ayla/libayla.a
&#126;/device_linux_public/build/native/obj/lib/platform/libplatform.a
</pre>

The source files for the libraries are in the following directories:

<pre>
&#126;/device_linux_public/lib/app
&#126;/device_linux_public/lib/ayla
&#126;/device_linux_public/lib/platform
</pre>

The host application also includes third-party libraries. See the [Makefile](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/app/appd/Makefile).

## main.c

[main.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/app/appd/main.c) defines <code>main()</code> which invokes the following functions:

|Function|File|Component|Description|
|-|-|-|-|
|parse_opts|[main.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/app/appd/main.c)|appd|Parse cmdline options.|
|app_init|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Initializes data structures and libraries.|
|app_set_debug|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Enable or disable debug logging.|
|app_set_exit_func|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Register a callback to notify the application that it is about to terminate.|
|app_set_factory_reset_func|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Register a callback to notify the application that a factory reset has been requested.|
|app_set_conn_event_func|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Register a callback to notify the application when cloud or LAN connections have gone up or down.|
|app_set_registration_event_func|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Register a callback to notify the application when device user registration has changed.|
|app_set_conf_file|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Set the factory config file path and the startup config directory.|
|app_set_socket_directory|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Override the default socket directory of <code>/var/run</code>.|
|app_run|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Run the program main loop which consumes the calling thread.|

## appd.c

### appd_prop_table

[appd.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/app/appd/appd.c) defines <code>appd_prop_table</code>, an array of <code>prop</code> structures, one for each property maintained by the host app, properties that are represented by the digital twin corresponding to this device in the Ayla Cloud. 

<pre>
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

Each item in the array is a <code>prop</code> struct which is defined in [props.h](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/include/app/props.h), part of libapp:

<pre>
struct prop {
  const char *name;
  enum prop_type type;
  int (*set)(struct prop *, const void *val, size_t len, const struct op_args *args);
  int (*send)(struct prop *, int req_id, const struct op_options *opts);
  int (*get)(struct prop *, int req_id, const void *arg);
  int (*ads_failure_cb)(struct prop *, const void *val, size_t len, const struct op_options *opts);
  int (*ads_recovery_cb)(struct prop *);
  int (*confirm_cb)(struct prop *, const void *val, size_t len, const struct op_options *opts, const struct confirm_info *confirm_info);
  void *arg;
  size_t len;
  u8 fmt_flags;
  u8 reject_null:1;
  u8 ads_failure:1;
  u8 pass_jsonobj:1;
  u8 app_manages_acks:1;
};
</pre>

The following table represents a subset of values for each property in the <code>appd_prop_table</code> array:

|name|type|set|send|direction|
|-|-|-|-|-|
|version|String|&nbsp;|appd_send_version|From Device|
|Green_LED|Boolean|<span style="color:red;">appd_led_set</span>|prop_arg_send|<span style="color:red;">To Device</span>|
|Blue_LED|Boolean|<span style="color:red;">appd_led_set</span>|prop_arg_send|<span style="color:red;">To Device</span>|
|Blue_button|Boolean|&nbsp;|prop_arg_send|From Device|
|input|Integer|<span style="color:red;">appd_input_set</span>|prop_arg_send|<span style="color:red;">To Device</span>|
|output|Integer|&nbsp;|prop_arg_send|From Device|
|decimal_in|decimal|<span style="color:red;">appd_decimal_in_set</span>|prop_arg_send|<span style="color:red;">To Device</span>|
|decimal_out|decimal|&nbsp;|prop_arg_send|From Device|
|cmd|string|<span style="color:red;">appd_cmd_set</span>|prop_arg_send|<span style="color:red;">To Device</span>|
|log|string|&nbsp;|prop_arg_send|From Device|
|file_down|file|<span style="color:red;">prop_arg_set</span>|&nbsp;|<span style="color:red;">To Device</span>|
|file_up|file|&nbsp; |prop_arg_send|From Device|
|file_up_test|Boolean|<span style="color:red;">appd_file_up_test_set</span>|prop_arg_send|<span style="color:red;">To Device</span>|
|batch_hold|Boolean|<span style="color:red;">appd_batch_hold_set</span>|prop_arg_send|<span style="color:red;">To Device</span>|

The <code>prop</code> structure does not actually have a <code>direction</code> variable. It is implied. If a property has a <code>set</code> method, then it has <code>To Device</code> directionality. Else, it has <code>From Device</code> directionality. <code>prop_arg_set</code> is an example of a generic <code>set</code> function provided by libapp. <code>appd_led_set</code> is an example of a custom <code>set</code> function implemented by the host application.

### Functions

[appd.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/app/appd/appd.c) defines several function which, collectively, call the following library functions:

|Function|File|Component|Description|
|-|-|-|-|
|app_set_template_version|[app.c](https://github.com/AylaNetworks/device_linux_public/blob/7c773e5a51f9aebb5bdb93fdaf48425813054590/lib/app/app.c)|libapp|Select the cloud template version to use with this application.|
|prop_add|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Add a list of properties to the library's property lookup table.|
|prop_send|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Send property by <code>struct prop &#42;prop</code>.|
|prop_val_send|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Send a value for a property.|
|prop_send_by_name|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Send property by looking it up by name.|
|prop_batch_send|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Send a batch list.|
|prop_arg_batch_append|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Same as prop_arg_send, but property is put in queue to be sent later.|
|prop_batch_confirm_handler_set|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Set the confirmation handler for prop batch sends.|
|prop_metadata_alloc|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Allocates empty prop_metadata structure with size of PROP_METADATA_MAX_ENTRIES.|
|prop_metadata_addf|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Add key/value pair to prop_metadata_list struct using a printf-style formatted value.|
|prop_metadata_free|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Free a prop_metadata_list struct.|
|prop_metadata_add|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Add a new key/value pair to a prop_metadata_list structure.|
|prop_arg_set|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Handles incoming property updates. Used as generic <code>set</code> function in prop structs.|
|prop_lookup|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Lookup a property table entry by name.|
|prop_send_from_dev|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Send all from-device properties.|
|prop_request_to_dev|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Request values of all to-device properties from the service.|
|prop_val_to_str|[props.c](https://github.com/AylaNetworks/device_linux_public/blob/c102d2dd7fc31386ca2686099bb31fb4ddae8c38/lib/app/props.c)|libapp|Converts a value to string format for printing.|
