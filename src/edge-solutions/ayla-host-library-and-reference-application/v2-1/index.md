---
title: Ayla Host Library and Reference Application v2.1
layout: site.html
c: block
classesFromPage: has-pagebar
---

# Introduction

This document, intended for those familiar with embedded C programming, describes the following: 

* Host applications which connect to an Ayla module containing an Ayla Production Agent. 
* The Ayla host library which provides connectivity to the Ayla module from a host MCU. 
* Reference host applications.
* Ayla hardware demonstration kits. 
* How to build and install the host application on the demonstration kits.
* How to port the host library and reference applications to other MCU types or other platforms.

The Ayla host library and reference applications package contains libraries and example applications. This document version corresponds to host library version 2.1 and the reference applications included in that package. The Ayla host library assists a device developer in connecting an MCU to an Ayla module to access the Ayla device service. It is intended to be portable so that it can be used by customers with their host apps on whatever platform they choose. 

The reference host application `ledevb` contains code to demonstrate the use of the host library to send and receive simple properties, to configure certain module features, and to handle over-the-air (OTA) firmware updates. The reference host application demo_batch contains code to demonstrate sampling values over time and sending them periodically to the service with a single batch API. 

The host library and reference applications are built without an Operating System (OS) and can be ported to work with an RTOS. By default, they use a SPI connection between the Host MCU and the module. A build option can select UART mode instead of SPI. Other build options can add or remove features. The code is supported for the STM32F3Discovery board or the STM32F303RE Nucleo board. A port to use the code on Linux connecting to the module over a UART is also provided. The code can be built with GCC on Linux, Mac-OS, or Windows. 

# Host Applications

# Host Library

## Overview

## Polling Model 

## APIs

## Properties and Datapoints

## Batch Datapoints

## File Properties

## Message Properties

## Schedules

## Configuration Access

## Over-the-air Firmware Updates

Ayla modules handle two types of OTA updates: Module OTA and host OTA. Both involve the host MCU. 

### Module OTA Update APIs

These functions and variables allow the MCU to be notified when the module is ready to install an OTA update for the module. The host MCU may want to determine when the update is installed. The update can take 20-60 seconds or so and the module is unavailable while the update is in progress. The READY_N signal is de-asserted during the update.  It is safe to reset the module while it performs the update and the update continues after the reset.

```
void (*conf_ota_cb)(int type, void *buf, size_t len); 
```

This function pointer is normally NULL but may be set by the application code to point to a function called when a module OTA is ready. First parameter (type) is 1 for module OTAs.  All other values are reserved.  The buffer received for notification command (ACMD_OTA_STAT) is  passed in buf, and has length len.  The callee should not need to use these as there is no payload in the notification. If the application provides sets this function pointer non-NULL, the function is invoked from the host library polling loop when a module OTA status packet is received from the module.  Once it is called the host application should eventually call conf_mod_ota_go() when ready for the module to apply the OTA and reboot.

```
void conf_mod_ota_go(void); 
```

The host application may call this function to signal the module to go ahead with its pending firmware update.  The module may be unavailable for some time after this is done. 

### Host OTA Update APIs

Host applications should support host OTA, which allows the host application to be updated from the cloud. The host application would set three function pointers during initialization.  It sets host_ota_start_cb to point to a function that handles notification when a new host OTA command is received by the module.  It sets host_ota_load_cb to receive each portion of the firmware image download.  It sets host_ota_boot_cb to be called once the download is complete. The steps in the host OTA update are as follows: 

1. The module receives the OTA command with the firmware version and length.  It passes these to the host_library which calls through the host_ota_start_cb function pointer. 
1. The function pointed to by host_ota_start_cb decides whether the OTA is acceptable by inspecting the version string and size, and when it is ready to start downloading the image calls host_ota_go(). This tells the module to begin the OTA firmware download. 
1. The module begins the OTA download in pieces and passes these to the host. 
1. The function pointed to by host_ota_load_cb is called to store each piece.  It must take care of writing these pieces into flash and may need to buffer data before writing. 
1. Once the last block is received, the host_ota_load_cb function should call host_ota_stat() to report success or error. 
1. Once host_ota_stat() the module acknowledges the OTA command and the download will not happen again.   
1. If the status to host_ota_stat() was 0, indicating no error, after the acknowledgment, the module tells the MCU to boot into the new image. 
1. The function pointed to by host_ota_boot_cb is called to tell the host application to boot into the new image. 
1. The host OTA process is considered successful when the new image boots and posts the property designated as the host version.

During the download, property operations may occur as usual.  The entire OTA process can restart at any time if the device or module is reset. The OTA update process in the host application should be implemented with care so that the new image is not booted until it is completely downloaded, and that the device cannot become unbootable by being reset at a critical point in the process. 

```
void (*host_ota_start_cb)(char *version, int ver_len, size_t len); 
```

This function pointer can be assigned by the application.  If non-NULL, the pointed-to function is called when MCU OTA update is available. The version contains the version string from the update.  ver_len is the length of that byte array, which will not be NUL-terminated. The len is the size of the update. 

```
void (*host_ota_load_cb)(size_t offset, void *data, size_t len); 
```

This function pointer can be assigned by the application. The host OTA update is performed in increments. The host library calls this function to deliver a part of the update to the application. The application should store the update in persistent storage. The argument offset is set to current offset within the host OTA update.  Argument data points to the buffer containing the portion of the update.  Argument len is the length of this portion. 

```
int (*host_ota_boot_cb)(char *version, int ver_len); 
```

This function pointer can be filled by the application.  The function is called after host OTA update download has completed successfully and the module has reported download success to ADS. The application should reset to start running the version passed as arguments. 

```
void host_ota_go(void); 
```

This function notifies the module it can start downloading module firmware.  The host application should call this function after the module called the function pointed to by host_ota_start_cb.  

```
void host_ota_stat(u8 err); 
```

Sends the MCU OTA status message to the module. This is called by the host application while processing the host OTA download or after applying it.  It is called to report that the host OTA update was successful or failed.  Set the argument err  to a non-zero value from enum ayla_proto_err to identify the failure error type.  A successful OTA is implied by the host sending a new firmware version property to ADS. 

### SPI Ping Test Function 

For testing the SPI connection between the host and the module, the host_library provides this test function.  It is declared in header file `<ayla/spi_ping.h>`.

```
int spi_ping_test(size_t len, u16 pattern_start); 
```

Sends one “ping” packet to the module and calls the spi_poll() until it can send and receive a response. It will time out if the module does not respond within a short time (currently 400 ms). The first argument len is the length of the packet to be sent (between 2 and 384). The second argument pattern_start is the starting value of the 2-byte counting pattern used to fill the payload of the packet. The function returns 0 on success, a positive count of errors if occurred, and  -1 on invalid length. 

## Library Demands on Platform

The following sections document the APIs that the host application or platform code must supply to support the host library. These are divided into subsections of APIs. 

### Time APIs

The platform is assumed to keep time in a way that the library can determine the time since some fixed point in the past, such as the device’s startup. This time must be monotonically incremented. The platform must adjust for low-power states if necessary. These are defined in the header file `<ayla/al_time.h>`.

```
void al_time_delay_ms(u32 ms) 
```

This function synchronously waits up to ms milliseconds. Note that this may sleep longer if preempted, and may sleep a smaller amount if interrupted. A parameter of 1 only waits until the next millisecond boundary, which is less than 1 millisecond away. 

```
u32 al_time_ms(void) 
```

This function returns the number of milliseconds since boot as a 32-bit unsigned number. Note that this will wrap around after 49.7 days, for which the caller must be prepared. 

```
u32 al_time_secs_get(void) 
```

This function returns the number of whole seconds since boot as a 32-bit unsigned number.

### SPI Driver APIs

If the platform will support connection to Ayla modules using SPI, the following APIs must be implemented. These are defined in the header file `<ayla/spi_platform.h>`. 

```
void spi_transport_init(void) 
```

Initializes the platform to use SPI and the spi_platform interfaces. 

```
u8 spi_platform_io(u8 out_byte) 
```

Sends a byte on the SPI interface to the module and returns the next byte received over the SPI interface from the module. Send out out_byte and return the incoming byte. This routine is expected to block until the output byte is sent and the receive data is available. 

```
u8 spi_platform_io_crc(u8 out_byte) 
```

Send and receive the last byte of a SPI message, followed by the CRC byte. This is like spi_platform_io(), but indicates the last byte is being sent, and it should be followed by sending the CRC-8 byte afterwards. 

```
void spi_platform_slave_select(void) 
```

Select the Ayla module as the SPI slave. Deselect any other slave that might be selected. 

```
void spi_platform_slave_deselect(void) 
```

Deselect the Ayla module as the SPI slave. 

```
void spi_platform_crc_en(void) 
```

This indicates that the next byte to be sent or received will be the first one  to be included in the packet CRC calculation. Clears the accumulated CRC value to 0. 

```
int spi_platform_crc_err(void) 
```

Clear CRC status and return non-zero if a CRC error was detected on receive. 

```
int spi_platform_rx_pending(void) 
```

This function non-zero if a packet is waiting in the module to be received. This should check the INTR_N pin from the module, and if low, return non-zero. 

```
spi_platform_is_ready(void) 
```

This function returns non-zero if the module's READY_N signal is asserted (low). This indicates that the module is ready to interact on the SPI bus. 

### UART Driver APIs

If the platform will support connection to Ayla modules using a UART, the following APIs must be implemented. These are defined in the header file `<ayla/uart.h>`. 

```
void uart_platform_init(void) 
```

Initialize the UART platform support, including the settings used to communicate with the Ayla module. 

```
int uart_platform_poll(void) 
```

This function is called periodically to allow the platform to operate the UART in a polling mode. The platform should check the receive data register or buffer and call uart_recv() if there is data present. If there is room in the transmit register or buffer, it should call the uart_tx() to see if there is a byte to send. The return value should always be 0. 

```
void uart_platform_start_tx(void) 
```

If using interrupt-based I/O, this should enable an interrupt when the transmit data register becomes empty. For polling mode, it does not need to do anything. 

```
void uart_platform_callback(void (*handler)(void)) 
```

Schedule a callback to continue UART transfers blocked on buffer unavailability. The function handler should be called by the platform code when transmit can be resumed. In polling mode, the function may be called immediately. 

## Source Files

### C Files

The host library folder `ayla/libayla` is divided into components for easier navigation and understanding. Here is what each C file in the libayla folder contains: 

*Host Library Infrastructure*

* `callback.c`: this provides a simple mechanism allowing functions to be called in the polling loop. 
* `clock_utils.c`:  Internal functions for performing clock/time calculations for schedules. 
* `crc16.c` and `crc32.c`: provide cyclic redundancy checking functions. 
* `host_event.c`: provides an event mechanism built on top of callbacks. 
* `host_lib.c`: has the initialization function and polling loop for the library. 
* `host_lib_clock.c`: performs timekeeping for schedules and batch properties. 
* `utf8.c`:  Helper functions to get UTF8 characters from a buffer. 
* `tlv.c`:  Helper functions for getting and writing TLV values. 

*Property Subsystem*

* `props.c`: The Properties block. It is used to handle property updates. The interfaces and structures defined in this file will be used by the application. 
* `prop_batch.c`: Handles batch datapoint accumulation and posting to the cloud as directed by the application. 
* `prop_dp.c`:  Handling for file properties. 
* `prop_message.c`: handles message properties. 

*Serial Messages*

* `serial_msg.c`:  The serial message block. This is used to form and parse messages for properties and configuration interactions with the module. 

*Sched* 

* `sched.c`:  Execution for schedule properties. 
* `schedeval.c`:  Internal functions for interpreting and parsing schedule properties. 

*Host_OTA* 

* `host_ota.c`:  Library routines to help with OTA download messaging. 

*Config* 

* `conf_access.c`:  Functions to access some module configuration variables. 

*SPI* 

* `spi_ping.c`: The SPI bus test functions. 
* `spi.c`: The SPI packet handling. It is used to send and receive SPI packets. 

*UART* 

* `uart.c`: The UART packet handling. It is used to send and receive UART packets. 

### Header Files

The host library header files are divided into internal ones and external APIs. The internal header files are in `ayla/libayla` with the `.c` files. The supported interfaces that the application can use are in `ayla/libayla/include/ayla` and these should be included as `<ayla/xxx.h>`. 

*External Header Files (functions implemented by the platform)*

* `al_intr.h` defines the platform interfaces the host library uses to disable and restore interrupt handling. 
* `al_time.h` defines the platform interfaces used to get time in ticks and milliseconds and convert between ticks and milliseconds and seconds. 

*External Header Files (functions implemented by the Host Library)*

* `assert.h` provides ways to check for internal errors at compile time and run time. 
* `ayla_proto_mcu.h` has definitions for the protocol used with the Ayla module. 
* `byte_order.h` has portable routines to serialize and deserialize integer types. 
* `callback.h` defines the callback facility allowing a function to be called at a later time. 
* `cmp.h` defines a time or sequence number comparison function. 
* `conf_access.h` has APIs for accessing module configuration. 
* `conf_token.h` defines module configuration items. 
* `conf_tokens.h` defines module configuration token values. 
* `crc.h` declares CRC functions. 
* `host_event.h` defines host events that applications can receive. 
* `host_lib.h` defines the host library initialization, polling and callback functions. 
* `host_log.h` defines the logging functionality for the host library. 
* `host_ota.h` defines APIs for applications to handle OTA updates. 
* `offset.h` defines simple macros to get offsets, containers, and array lengths, and bits. 
* `prop_batch.h` APIs for batch datapoints. 
* `prop_dp.h` APIs for file properties. 
* `prop_message.h` Definitions for message property datapoints. 
* `props.h` Definitions of property interfaces. 
* `schedeval.h` Definitions for APIs that interpret and parse schedule properties. 
* `sched.h` APIs that execute schedule properties. 
* `serial_msg.h` Definitions of serial message interfaces. 
* `spi_ping.h` APIs to send and receive SPI ping packets for testing. 
* `spi_platform.h` Platform APIs for the SPI interface to the module. 
* `timer.h` APIs to manage timed events internal to the library. 
* `tlv_access.h` routines to access TLVs inside a message. 
* `uart.h` routines to send and receive bytes or frames over the UART. 
* `utypes.h` definitions of integral types used by the library. 
* `wifi_conf.h` functions to access Wi-Fi configuration items and do Wi-Fi setup. 
* `wifi_error.h` definitions of error numbers used by Wi-Fi. 

*Internal Header Files (definitions used inside the Host Library)*

* `build.h` definitions about the build version of the host library. 
* `clock.h` definitions for manipulating time-of-day. 
* `host_lib_int.h` internal interface for timers. 
* `host_lib_rel.h` contains information about the release version of the library. 
* `host_lib_ver.h` contains the version of the host library. 
* `host_ota_int.h` internal definitions used to perform over-the-air firmware updates. 
* `prop_int.h` internal property handling functions. 
* `sched_int.h` internal schedule interfaces. 
* `serial_int.h` interfaces to the serial (SPI or UART) transport to the module. 
* `spi.h` functions for sending and receiving SPI messages. 
* `spi_proto.h` definitions of the SPI protocol to the module. 
* `uart_int.h` definitions for uart.c. 

# Reference Host Applications

The example folder contains demo applRequirements forications. Here is an explanation of each demo application: 

* `ledevb/demo.c`:  This is the application that all Ayla demo kits are shipped with by default. This demo exercises the use of Ayla’s Boolean, integer, and string properties through LEDs and buttons. It also shows how to use message properties and schedules. 
* `demo_batch/demo.c`:  This application demonstrates batch properties by posting timestamped temperature and voltage values periodically in batches. 

## Host Application Organization

The reference host application organization is shown in the following block diagram. The application can use functions in the demo library (example/libdemo) and the console library (example/libcons). 

The target library, built from source under arch/stm32f3, arch/stm32, and ext, contains platform-specific functions and definitions to perform low-level I/O, for SPI and UART communications, and GPIO access, etc. These are the portions specific to a particular MCU and board.

<img src="reference-app-org.png" width="200" height="213">

## ledevb application

### Properties

The ledevb example code in `examples/apps/ledevb/demo.c` demonstrates several properties which help in testing the interaction between the module and device service. This section lists the properties and describes the behavior associated with them.

|Name|Type|Direction|
|-|-|-|
|binary_in|ATLV_MSG_BIN|To Device|
|binary_out|ATLV_MSG_BIN|From Device|
|Blue_button|ATLV_BOOL|From Device|
|Blue_LED|ATLV_BOOL|To Device|
|cmd|ATLV_UTF8|To Device|
|decimal_in|ATLV_CENTS|To Device|
|decimal_out|ATLV_CENTS|From Device|
|Green_LED|ATLV_BOOL|To Device|
|input|ATLV_INT|To Device|
|json_in|ATLV_MSG_JSON|To Device|
|json_out|ATLV_MSG_JSON|From Device|
|log|ATLV_UTF8|From Device|
|message_start|ATLV_UTF8|To Device|
|oem_host_version|ATLV_UTF8|From Device|
|output|ATLV_INT|From Device|
|schedule_in|ATLV_SCHED|To Device|
|stream_down|ATLV_LOC|To Device|
|stream_down_len|ATLV_UINT|From Device|
|stream_down_match_len|ATLV_UINT|From Device|
|stream_up|ATLV_LOC|From Device|
|stream_up_len|ATLV_INT|To Device|
|string_in|ATLV_MSG_UTF8|To Device|
|string_out|ATLV_MSG_UTF8|From Device|
|version|ATLV_UTF8|From Device|

When the ADS changes property values of `Green_LED` or `Blue_LED`, the associated LED is turned on (value 1) or off (value 0). The MCU reacts to the blue button on the AylaShield if using a Nucleo board, or on the Discovery board if using that board. When the blue button is pressed or released, the property `Blue_button` is sent to the ADS with a Boolean value of 1 (when pressed) and 0 (when released). The on time of the button is extended at least two seconds.

`Blue_button` has another function – as part of a factory reset. To reset the module to its factory configuration, hold the blue button down and then press and release the black reset button on the MCU board. The blue LED will blink quickly for five seconds, and if still holding the blue button at that time, the application instructs the module to restore its factory configuration. During the five-second startup time, the blue LED blinks to confirm the reset is happening. If reset is not wanted, the button can be released before the time is up. If the button is pressed for the entire five seconds after reset, the blue LED will be on for a short time and then go off when the module re-asserts the ready signal.

The `input` and `output` properties demonstrate integer properties. When the service sets property `input` to a value, the demo receives the new value and sets the `output` property to the square of that value, and then sends the output property to the service. If the square would overflow a 32-bit number, `output` is set to -1.

The `cmd` and `log` properties demonstrate string properties. When the service sets `cmd` to a value, it is copied to the `log` property, which is sent to the service. This can be used to test long string properties of up to 1024 bytes.

The `decimal_in` and `decimal_out` properties demonstrate decimal properties. When the service sets `decimal_in` to a value, the demo MCU sets the `decimal_out` property to the same value, and sends it back to the service.

The `stream_up_len` and `stream_up` properties demonstrate how binary (file) values are sent to ADS. When the service sends a new integer value greater than zero for `stream_up_len`, the MCU sends a binary test pattern of that length as a new datapoint for `stream_up`. The test pattern begins with the value 0x11223344 in big-endian order. This value is incremented every four bytes in the pattern. Once the `stream_up` value has been sent, the `stream_up_len` property is set to zero and sent back to the service. This prevents the `stream_up` value from being generated repeatedly on each device reset.

The `stream_down_len`, `stream_down_match_len`, and `stream_down` properties demonstrate how to receive binary (file) values from ADS. When the service creates a new datapoint for `stream_down`, that value is completely fetched by the demo host. After that, the values of the properties `stream_down_len` and `stream_down_match_len` are updated. This indicates the number of bytes received and the number of bytes received before any mismatch from the test pattern occurred.

For diagnostic purposes, a read-only property called `version` is compiled-in. This is sent to the service whenever the device restarts. The template selects this property as the host version, for reporting as a device attributes. Any string property name can be used this way in a product, but one such property should be chosen. 

Every device is required to have a property called `oem_host_version`. This is the version of the template that should be used with the device. The template must match the OEM ID, OEM model, and oem_host_version for the device. The module will request the `oem_host_version` property shortly after it boots. Note that the template version is not the same as the host firmware version. The template version would need to change only if new properties are added to the firmware that also need to be defined in the cloud by creating a new template version, or if template changes are desired for any other reason.

The `schedule_in` property can be set by the service. The host library interprets and parses the schedule to determine when the next scheduled event is set to occur.

To demonstrate the three types of message properties supported by Ayla (json, string, and binary) the host app includes three pairs of properties: `json_in`, `json_out`, `string_in`, `string_out`, `binary_in`, and `binary_out`. In each case, when the app receives an `in` property value, it sets `out` to `in`, and sends the `out` property value to ADS. The string property `message_start` operates to send a long pattern on either `json_out`, `binary_out`, or `string_out`. The value received from the cloud in `message_start` should be a length and a property name, for example `10000 binary_out`. When this value is received from the cloud, the ledevb program sends a pattern of 10000 bytes on the message property `binary_out` and sets the `message_start` property to an empty string. The length used in `message_start` can be up to 524288 (512 * 1024).

### Set functions

These functions are called through the property table to receive new values for the properties from the Ayla Module. The application can associate any action to a new property setting. 

```
void set_led(struct prop *, void *arg, void *valp, size_t len); 
```

From the property table, turns LEDs on or off. The arg is a 32-bit value cast to a void * pointer with value used to set the LED I/O pin - bit(pin). The valp points to a one-byte value of 0 to turn the LED off or 1 to turn it on. The property interface verifies that other values are used (the type is boolean). 

```
void set_cmd(struct prop *, void *arg, void *valp, size_t len); 
```

Called from the property module when a new value for the cmd property is received. Value is copied into the cmd_buf. The log_buf is set to point to that buffer. The send_req for the log property is set to 1 so that prop_poll() sends the log property. 

```
void set_dec_in(struct prop *prop, void *arg, void *valp, size_t len); 
```

Called from the property module when a new value for the decimal property `decimal_in` is received. Both decimal_in and decimal_out properties are set to the new value. The send_req for the decimal_out property is set to 1. 

```
void set_input(struct prop *, void *arg, void *valp, size_t len); 
```

Called from the property module when a new value for `input` property is received. The `output` property is set to the square of the new `input` property value after range checking. If the result overflows, output is set to -1. The send_req for the output property is set to 1 so that prop_poll() sends the output property. 

```
void set_string_ro(struct prop *, void *arg, void *valp, size_t len); 
```

Called from the property module when a new value for the `version` property is received. Since the Ayla module should never change this property, this compares the new value with the old one. If the value differs, sends the correct (compiled-in) value to the service. This keeps the correct service version. Happen only when a new version of the MCU demo software is installed. Same function can be used for another read-only string property. 

```
void test_patt(size_t off); 
```

Generates the test pattern to send and receive the `stream_up` and `stream_down` properties. The test pattern is a 4-byte counting pattern. It starts at 0x11223344 and increments by one each time it repeats. Returns the one-byte value for a given offset. 

```
static int test_patt_get(struct prop *prop, void *buf, size_t len, u8 eof); 
```

The get function pointer in the prop_dp state structure for the `stream_down` property points to this function. Normally a function accepts a file datapoint and copies the data to some storage area. This compares the data to the test pattern and keeps track of how much data was received - and how much was received before any error occurred. 

```
void set_length_up(struct prop *prop, void *arg, void *valp, size_t len); 
```

Sets the integer `stream_up_len` property. Sets the length used for the `stream_up` property, and then initiates transfer of `stream_up`. If the length given is less than or equal to zero, the value is ignored. 

```
void demo_stream_init(void); 
```

Initializes the state for the `stream_up` and `stream_down` properties.

### Send functions

These functions are called through the property table to send the value of the property to ADS. The Ayla module requests it or it was changed by the application – and sets the send_req flag in the property table. The first argument is the pointer to the property table entry. The second void pointer argument should be passed to prop_send() as its final argument.

```
int send_led(struct prop *prop, void *arg); 
```

Sends one of the LED values. 

```
int send_cmd(struct prop *prop, void *arg); 
```

Sends the command string argument. 

```
int send_log(struct prop *prop, void *arg); 
```

Sends the current value of the log string. 

```
int send_int(struct prop *prop, void *arg); 
```

Sends the current value of the integer, boolean, or decimal property pointed to by prop->arg to the service. Can send several properties, including `input`, `output`, and `Blue_button`. 

```
int send_utf8(struct prop *, void *arg); 
```

Sends the `version` property (can also be used for any text string, i.e., send_log() and send_cmd(). 

```
int send_prop_with_meta(struct prop *, void *); 
```

Demos the datapoint metadata feature for Boolean, string, decimal and integer properties. 

```
int send_file_prop_with_meta(struct prop *, void *); 
```

Demos the datapoint metadata feature for file properties. 

## demo_batch application

The demo_batch application demonstrates batch datapoint posting. As built, it samples the device’s voltage and temperature every thirty seconds and adds them to a batch. It sends the batch whenever it fills or every five minutes. The size is limited to 4000 bytes for the API. These parameters are defined near the top of the program. The two properties used are `mv`, an integer property for voltage in millivolts, and `tc`, a decimal property for degrees centigrade in hundredths. There is also an `app_active` property which when set to 1 will cause the properties to be sent immediately, rather than batched, for the next 30 seconds. The mobile app could set this to 1 more often than that to get constant updates from the properties. The host firmware version is sent up in the string property `version` and the template version is sent up in `oem_host_version`. Two batches are formed so that the sampled properties can be added to one batch while the other is being sent. 

# Reference Libraries

## libdemo library

### Example Over-The-Air Firmware Update 

Over-the-air (OTA) update refers to updating the firmware image on the MCU with a new version. This may include defect fixes or new features. The full development kit contains a sample implementation. The internal flash is split into different regions. It holds a bootloader, two images, and scratch areas, used when swapping images between active and inactive slots. Here's the layout of the STM32F303 flash as it is used:

|Address|Use|
|-|-|
|0x08000000|Bootloader (start of flash)|
|0x08001800|Copy "progress bar"|
|0x08002000|Active image|
|0x08020000|Inactive image|
|0x0803e000|Copy scratch area|
|0x08040000|End of flash|

*Bootloader*

After reset, the MCU enters the bootloader which will eventually boot the actual image. The bootloader determines whether it should boot the image that's currently in the active slot, or if it should swap that with the inactive image. A swap is done if the MCU wants to boot a new image, or if it is falling back to the old image. Fallback happens after a failure to boot to newly uploaded image. In case the MCU is reset before completing a swap of the images, an block of flash is used to keep track of the progress of the operation and the bootloader will continue from where it left off. This block of flash is called the "progress bar". The bootloader starts the active image by jumping to address in reset interrupt vector in the image. 

*Image Download*

Firmware download and reset of the image management is done while the MCU runs the active image. The download can be interrupted and restarted. During the download, the module may restart the process by sending a new OTA notification message. 

1. OTA is started by a message from ADS. The message includes the image name and its size.
1. The MCU firmware can decide to reject the image, for example, if it is already running the new version, or if the images is the wrong type. 
1. If MCU firmware approves the download, the application prepares the inactive image slot. 
1. Once MCU application gives a go-ahead, module fetches the image from the Ayla Cloud. 
1. The MCU firmware image then comes one block at a time from the module. 
1. Firmware stores this image in the inactive slot. 
1. When the download is complete, the image integrity is checked and the MCU reports successful completion. 
1. After the Ayla module informs ADS the download was OK, it asks the MCU to boot the new image. 

*OTA Properties*

An image update can include one or more of these changes: 

* introduce new properties 
* removal old properties 
* change existing properties 

The "oem_host_version" is a reserved property that selects the appropriate service template for the MCU firmware. The module may ask for this property at any time, currently after each time the module boots. The successful completion of the OTA is indicated by sending the new MCU firmware version. The "version" property is a string property that contains the MCU firmware version. This property name is not reserved, but the name "version" is used in the ledevb demo. In your product, any string property can be used to hold the firmware version. The "Host SW Version" flag associated with the property in the template indicates it is used for this purpose.

*Image Format*

For OTA, each product design can use any file format that is convenient, although often it will be a binary image that is stored in flash, possibly with an additional header and checksum or equivalent. MCU firmware images in the demo kit have a specific format. This makes it possible to validate images. For the STM32F2, we use one of two versions.

Use these offsets when the image size &lt; 64K (65,536):

|Offset (bytes)|Size (bytes)|Name|Use|
|-|-|-|-|
|0x0|0x188|Interrupt vector|This is kept in the beginning because of STM32 memory alignment restrictions.|
|0x188|4|Magic number|Value 0xbfa43640. Detects that this file is probably an MCU firmware image.|
|0x18c|2|CRC-16|CRC-16 of the image, calculated with this field set to 0.|
|0x18e|2|Size|Total size of the image.|
|0x190|72|Version|Image version string. Reported as property "version" to ADS, or as "inactive_version", when image is in inactive slot.|
|0x1d8|--|Image Text|Rest of the image.|

Use these offsets when the image size &ge; 64K (65,536):

|Offset (bytes)|Size (bytes)|Name|Use|
|-|-|-|-|
|0x0|0x188|Interrupt vector|This is kept in the beginning because of STM32 memory alignment restrictions.|
|0x188|4|Magic number|Value 0xbfa43641. Detects that this file is probably an MCU firmware image.|
|0x18c|4|Size|Total size of the image.|
|0x190|72|Version|Image version string. Reported as property "version" to ADS, or as "inactive_version", when image is in inactive slot.|
|0x1d8|--|Image Text|Rest of the image.|
|<Size>|4|CRC32|32-bit CRC such that the overall CRC including this is 0.|

### Factory Reset API

This API consists of the following function:

```
int demo_factory_reset_handle(void);
```

This function can be called early in the demo to determine whether a factory reset should be performed. A platform-specific function, `board_factory_reset_detect()`, is called and if that returns non-zero, the module is sent a command to restore its factory configuration.

### Demo Library Files

The library in `example/libdemo` is a set of routines usable in all applications as desired to implement various application-dependent and feature-dependent operations. It contains these files, divided by function: 

* `demo_factory_reset.c` has a function that can be used to detect that the user desires a factory reset of the module and the host application. 
* `demo_img_mgmt.c` has functionality used for handling over-the-air updates and multiple firmware images. Note that this version is specific to the STM32F303 and would need to be ported for other MCUs and other firmware update schemes. 
* `demo_message.c` implements the ledevb demo message properties. 
* `demo_poll.c` has the polling loop for the demo, which calls the polling loop for libhost and the console, and runs timers and callbacks that allow other parts of the demo to work without explicit hooks into the polling loop. This functionality could be ported to work with an RTOS. 
* `demo_power.c` demonstrates some methods for controlling the module power by tracking when the module goes into standby mode and resetting when needed. 
* `include/demo/demo.h` defines the primary interfaces to libdemo. 
* `include/demo/demo_message.h` defines the interfaces to demo_message.c. 

## libcons library

### Source Files

The library in `example/libcons` is provided for use in setting up a debug port and a command line interface for testing the application. It contains these files: 

* `atty.c`: Driver layer to write log messages and other output to the console UART. 
* `cmd_handle.c`: Callbacks for incoming user commands on the console. 
* `console.c`: Command handlers for console commands that users may define. 
* `libcons_int.h`: declarations for interfaces used inside libcons. 
* `parse_argv.c`: Utility to tokenize command string. 
* `parse_hex.c`: Utility to convert string to hex. 
* `printf.c`: Implementations of common print functions including putchar, puts, printf, etc. 

### Header Files

The header files in `example/libcons/include/ayla` are: 

* `atty.h`: Function prototypes for platform routines to control the console serial port. 
* `cmd.h`: Function prototypes for handlers of the console CLI commands. 
* `console.h`: Function prototypes for the console driver. 
* `parse.h`: Function prototypes for parsing console input. 

# Reference Evaluation Boards

The Ayla Shield devkit and the Discovery board devkit come prewired. The Ayla Shield connects via SPI to the host MCU via its connections to the STM32F3 Nucleo board. The Discovery board devkit has connections for both SPI and UART mode. This section shows how the signals on each board are used. 

The SPI signals SPI_NSS, SPI_SCK, SPI_MOSI, SPI_MISO and their usage are described in the Ayla SPI protocol document. 

READY_N from the module is asserted to indicate that the module has initialized the SPI interface and is ready to accept commands. 

INTR_N from the module is asserted when the module has a SPI message waiting to be collected by the master. This de-asserts after the message has started to transfer to the master. Each time a SPI message becomes pending, the module generates a falling edge on INTR_N, even if it is already low. 

Reset_N is connected between the host and the Ayla module. The demo software uses this line to reset the module during startup. 

When UART is used, the READY_N and INTR_N lines are not needed. The 4-wire UART signals are RX, TX, CTS, and RTS. Hardware flow control is required. 

### Nucleo Board in SPI mode

|STM32F303 Nucleo pin|Signal|
|-|-|
|PB6|SPI_NSS (input to module, active low, open-drain)|
|PA5|SPI_SCK|
|PA6|SPI_MISO (master in, slave out)|
|PA7|SPI_MOSI (master out, slave in)|
|PC0|INTR_N (slave output) active low, open-drain|
|PC1|READY_N (slave output) active low, open-drain|
|PC7|LINK_N (slave output) active low, open-drain|
|PB0|Reset_N (output to module, open-drain)|

### Nucleo Board in UART mode

|STM32F303 Nucleo pin|Signal|
|-|-|
|PC5|UART RX from module|
|PC4|UART TX to module|
|PA11|UART CTS from module|
|PA12|UART RTS to module|
|PB0|Reset_N (output to module, open-drain)|

### Discovery Board in SPI mode

|STM32 F3 Discovery Pin|Signal|
|-|-|
|PB12|SPI_NSS (input to module, active low, open-drain)|
|PB13|SPI_SCK|
|PB14|SPI_MISO (master in, slave out)|
|PB15|SPI_MOSI (master out, slave in)|
|PB11|INTR_N (slave output) active low, open-drain|
|PB10|READY_N (slave output) active low, open-drain|
|PB1|LINK_N (slave output) active low, open-drain|
|PB0|Reset_N (output to module, open-drain)|

### Discovery Board in UART mode 

|STM32 F3 Discovery Pin|Signal|
|-|-|
|PA3|UART RX from module|
|PA2|UART TX to module|
|PD3|UART CTS from module|
|PA1|UART RTS to module|
|PB0|Reset_N (output to module, open-drain)|

# Reference Platform Code

The example platform support code for is under the `arch` folder. Folder `arch/stm32f3` has code that is common to the stm32f303 processor used on the evaluation boards. The components in `arch/stm32f3` are: 

* console_platform.c initializes and supports the serial console, if needed. 
* mcu_analog.c contains code supporting the batch demo using analog-to-digital (ADC) inputs. 
* mcu_io.c initializes the board GPIOs and LEDs. 
* spi_platform.c contains the low-level SPI driver for module communication. 
* stm32f3_discovery.c is only used by mcu_io for LED initialization. 
* uart_platform.c contains the low-level UART driver for module communication. 

Folder `arch/stm32` has code that is common to several stm32 processors. The components in `arch/stm32` are: 

* al_intr.c This contains functions for masking and unmasking interrupts. It is not used by the included demos. 
* cm3_intr.h Is no longer used. 
* loader.c is the bootloader. 
* stm32.c contains board initialization, GPIO routines, the SYSTICK handler, and al_time.h functions. 
* uart_platform_noOS.c contains stubs for two uart_platform functions. 

# Building Host Code

The demo software package can be built using `make` from the command line. 

## Demo Components

The demo software package is divided into these components: 

* `ayla/libayla`: This folder contains Ayla's platform-independent host library. Portions of this library are optional and will be included in the final application only if referenced. Code in this folder should be portable to any platform without modification. 
* `example`: This folder contains top-level reference files to exercise various Ayla features. The standard application used in Ayla's development kits is in "app/ledevb."   An application using batch datapoints is in "app/demo_batch". 
* `ext`: This folder includes code developed by STMicroelectronics, ARM Limited, or others for platform support. 
* `arch`: This folder contains platform-specific code. It needs to be modified to suit your platform needs. The code includes UART/SPI configuration, I/O config, and bootloader. 
* `proj`: This folder contains project files for the unsupported toolchain: Keil. 
* `target`: This folder contains build options for each target board. 
* `toolchain`: This folder contains gmake settings for each toolchain (compiler suite). 

## Building the App

The Makefile works natively on Linux or Mac-OS or under Cygwin on Windows. The user must install the GNU ARM toolchain, Python, and OpenOCD as prerequisites. 

1. For Windows, install cygwin, keeping default tools, and adding "make", "python3.7" interpreter, and "gcc". 
1. Download and extract gnu_arm_eabi_none toolchain inside `<gnuarmtc>` (e.g. `/cygdrive/c/Program Files (x86)/GNU Tools ARM Embedded/8 2018-q4-major`). 
1. Unzip host library pkg (e.g., Ayla-host-lib-2.0.zip) inside a cygwin user home directory folder. 
1. Install openocd 0.10.0 or later from http://www.freddiechopin.info/en/download into cygwin /usr/share (it should be /usr/share/openocd). OpenOCD is a tool that gives access to on-chip debugging via JTAG for loading flash and debugging. 
1. Add the /usr/share/openocd/bin or bin-x64 to $PATH. Use bin-x64 if you have a 64-bit Windows system. 
    ```
    PATH=$PATH:~/openocd-0.10.0/bin-x64 
    ```
1. Set TOOLCHAIN_DIR in your environment to `<gnuarmtc>` or edit `<demo>/toolchain/arm-none-eabi.mk` to set TOOLCHAIN_DIR to `<gnuarmtc>`: 
    ```
    export TOOLCHAIN_DIR="/cygdrive/c/Program Files (x86)/GNU Tools ARM Embedded/8 2018-q4-major" 
    ```
1. Install Python. For Windows, you can use https://www.python.org/downloads/windows. This was tested with Python 3.7.3, but other versions should work. 
1. Run make. This will build the host library, libdemo, libcons, libarch, and the demo. The default target is the Nucleo board in SPI mode, with a debug console. To select the discovery board, specify BOARD=discovery. To select UART mode, select USE_UART=1. To disable the debug console, specify NO_CONSOLE=1. For example, use just 'make' for the Nucleo board: 
    ```
    make 
    make BOARD=discovery USE_UART=0 
    ```
1. Run "make download" with all of the other options you used for your build. This will download the demo to the devkit:
    ```
    make download 
    ```
1. For a new board that has not been set up before, the bootloader, which boots the app and is used to apply firmware updates, must be built and installed. To do this run "make download_loader" 
    ```
    make download_loader 
    ```

After these build steps are complete, the board can be reset to start the app running. A gdb debugging session is available with "make debug". 

## Make Files

This section documents how the make files are organized to select the components to be built and the compile options to be used. Using this organization may help in porting to new targets. 

The approach used attempts to define a set of variables so that common make files can be used for uniformity and easy of support. This makes things a bit harder to understand at first, but hopefully they are easy to use and not too hard to modify as needed. 

A basic understanding the GNU make syntax and features is important before attempting to modify the files. 

Each Makefile sets two variables, DIR and SRC. DIR is the relative path from the top of the host_library package file hierarchy to the directory containing the Makefile. SRC is the relative path from the directory DIR back to the top of the hierarchy. These variables are used by included make files to find other files. 

### Top Level Makefile

The top level Makefile sets variables to select the target board, and then includes the associated target.mk file which sets the architecture directory and then includes the definitions for that architecture. The variables used here can be over-ridden in the command line, the environment, or in an optional file config.mk. The variables are shown with their default values in the table below:

|Variable|Default|Meaning|
|-|-|-|
|TARGET|stm32f3_nucleo|target hardware, subdir of target/|
|BOARD|stm32f3_nucleo|alternate for TARGET|
|APP_DIR|example/app|Location of applications|
|DEMO|ledevb|selected application in APP_DIR|
|DEMO_DIR|$(APP_DIR)/$(DEMO)|Path to application directory|

After setting the variables, the target definitions are included from target/$(TARGET)/target.mk. 

target.mk in turn sets the ARCH_DIR variable to the directory for the MCU architecture definitions and includes arch.mk from that directory. target.mk may set other variables as well, to add compile options or default settings for library features. 

arch.mk defines variables for the MCU architecture that are common to all targets using that architecture. 

After including target.mk, the top-level Makefile includes make/common_defs.mk which sets common compile flags and other variables to be used later in the build. See the next section for those variables. 

Next, the top-level Makefile makes the various targets specified, or the default target, if none are specified. Usually this means running make against the Makefile in the application directory, for example, $(DEMO_DIR)/Makefile which expands to example/app/ledevb/Makefile. 

The relationships between the make files are shown below: 

<img src="make-hierarchy.png" width="600" height="194">

### Common Definitions

Several make files include make/common_defs.mk which sets common compile flags and other variables to be used later in the build. The most important variables are listed in the following table: 

|Variable|Default|Meaning|
|-|-|-|
|BUILD_ROOT|$(SRC)/build/$(TARGET)/$(TRANSPORT)|location for derived files and object files|
|BUILD|$(BUILD_ROOT)/$(DIR)|location for current directory objects|
|BUILD_LIB|$(BUILD_ROOT)/lib|location for libraries|
|EXEC||program to build|
|LIB||library to build|
|LIBS||libraries to link with|
|CFLAGS||compile flags|
|LDFLAGS||linker flags|
|SOURCES||list of C source files to compile|
|OBJS|set from $(SOURCES)|list of object files to generate from SOURCES|
|DEPS|set from $(SOURCES)|list of dependency files to generate|

### Common Compile Rules

Several make files include the file make/common_cc.mk, which has rules for making the various targets defined in make/common_defs.mk. Separating these two files allows modifying or appending to variables between the two includes, which is sometimes necessary. The rules in common_cc.mk build either the target library $(LIB) or executable $(EXEC) depending on which one is set by the including make file. The rules for $(LIB) and $(EXEC) depend on the $(OBJS) and other targets that are built up from the list of source files in $(SOURCES). 

### Application Makefile

Each application has its own make file, but often it will set EXEC to it's program name, set needed compiler options in CFLAGS, add its files to SOURCES,  and include $(SRC)/make/demo.mk. 

### Demo Makefile

The file make/demo.mk has common settings that can be used by multiple host applications. It adds options to CFLAGS and LIBS based on command line and other variables. For demos, it bases these settings on the following variables that may have come from the command line or environment: 

|Variable|Default|Meaning when 1|
|-|-|-|
|MSG_PROP|0|Include code to demonstrate message properties.|
|NO_FILE_PROP|0|Do not include code for file properties.|
|NO_OTA|0|Do not include code to support host OTA updates.|
|NO_SCHED|0|Do not include code to support schedules.|
|USE_UART|0|Use UART instead of SPI to connect to module.|
|CONSOLE_UART|0|Do not include a platform debug console UART.|
|NO_CONF|0|Do not include code to access module configuration.|
|POWER_MGMT|0|Include code to demonstrate module power savings|

# Porting Host Code

If the host library needs to be ported to a different MCU, this section can assist with the process. The host library itself is intended to be portable, but may need minor changes inside the `ayla/libayla` subtree. 

The `arch` subtree contains all architecture-specific code that could be replicated or modified to support your platform.

Section 3.11 above describes the APIs needed by the host library from the platform. These should be implemented in a separate platform-specific library for portability. 

The example code uses abstractions from mcu_io.h in the arch subdirectories to access LEDs and buttons, but whether a new host application uses these is optional. 

Here are some recommendations:

* In the arch folder: 
    * Create a subdirectory named for your architecture with contents similar to those in the stm32f3 and stm32 directories. Note that some of these files may not be necessary, depending on your platform and host application. 
    * Modify the mcu_io.c and mcu_io.h files to match your IO configuration. 
    * If using UART to the module, modify the uart_platform files. 
    * If using SPI to the module, modify the spi_platform files. 
* If MCU Over The Air (OTA) is needed, rewrite the following file: 
    * Create a bootloader that determines which image to boot. It may need to swap the location of the images in flash. The file arch/stm32/loader.c may be used as a reference. 
    * Use libdemo/demo_img_mgmt.c as a module to use target MCU persistent storage. 
* In your arch subdirectory, make changes as required to arch.mk and arch_image.mk to control how the host application links with the platform library. 
* Also in your arch subdirectory, modify Makefile to make the platform library (libtarget.a) itself.