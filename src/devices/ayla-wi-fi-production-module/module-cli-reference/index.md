---
title: Ayla Wi-Fi Module CLI Reference
layout: ayla-wi-fi-production-module.html
---

|Command|Description|
|-|-|
|client|set client attributes|
|eth|set ethernet driver attributes|
|file|set contents of a file (e.g., certificate, key)|
|gpio|setup GPIO mode attributes|
|host|setup the interface to MCU|
|hw|hardware platform specifics|
|id|set ID fields (mfg mode only)|
|img|image management (4390 only)|
|locale|change locale string attributes(OBSOLETE)|
|log|adjust logging attributes|
|log-client|enable/disable log-client|
|log-snap|check crash logs saved by the module|
|mfg_mode|disable mfg mode (mfg mode only)|
|mfi|set MFI configuration attributes|
|oem|set oem strings|
|power|control power management attributes|
|reset|reset the module|
|rssi|show RSSI and antenna attributes|
|run|run another program (e.g., flup)|
|save|save the configuration|
|sched|configure the names of the schedules|
|secure|enable boot security|
|server|enable/disable AP mode property test and security|
|setup_mode|disable setup mode.|
|show|show part of configuraton (e.g., id)|
|time|see UTC and module time attributes|
|version|display module image and booter version|
|wifi|set Wi-Fi attributes|

# client

<code>client</code>

Displays the current client configuration.

<code>client &lt;enable&vert;disable&gt;</code>

Controls whether the client is enabled or disabled.

<code>client poll_interval &lt;# of secs&gt;</code>

Sets the frequency of the client polling ADS for updates and checks for internet connectivity if the notification service is no longer reachable. Default = 300 seconds. If set to 0, no polling takes place (useful for modules without to-device properties).

<code>client test</code>

Sets a mode that indicates to ADS that the connections are being done for OEM testing and notcounted as the first connection from the device by an end-user.This setting is not persisted and lasts only until the next reboot.

<code>client server region &lt;region code&gt;</code>

Sets the region for the device, which determines the set of ADS servers that the device should use.This requires that the device be in setup mode, and a save and a reset be performed after the is issued. The device’s DSN and other information must be present on the service for that region for this to succeed. Current supported region values include "CN"for China and "US"for everywhere else. If set to the empty string, the region will be set to the default (US).

# eth

<code>eth [enable&vert;disable]</code>

Enable or disable Ethernet capability on Ayla module.

<code>eth mac_addr &lt;mac address&gt; i.e. eth mac_addr 5e:c3:32:32:ac</code>

Set MAC address to be used for Ethernet protocol by Ayla Module.

<code>ethi spi_speed [0..8]</code>

The spi_speed values are platform-dependent and should be recommended based on hardware restrictions. The value 0 selects the compiled-in default.On STM32F2xx-based modules, the spi_speed values 1 thru 8 translate to a SPI clock frequency which is the bus frequency divided by 2^n. For example, 1 means divide by 2, 2 means divide by 4, through 8 meaning divide by 128. The fastest speed 1, is 15 MHz. Default for STM32F2xx is 7.5 MHz.

# file

<code>file start &lt;file-number&gt;</code>

Clears file 0 and makes it the current file for the "file add".

<code>file add &lt;data&gt;</code>

Adds data, which may be quoted, to the file.

<code>file crc &lt;file-number&gt;</code>

"file crc 0" will show the length and CRC-32 of file 0, to allow for verification of correct transfer.

# gpio

GPIO mode allows a module to associate properties with I/O pins on the module. This can be useful in simple applications that don't require a separate MCU to perform the product functions. A module in GPIO mode does not support the SPI interface to an MCU. With no arguments, gpio displays the configured and dynamic state of all configurable pins. With a single pin or property name argument, the shows the configured and dynamic state of that pin.

|Option|Description|
|-|-|
|analog|Sets the pin as analog. Digital is the default.|
|in|Sets the pin as an input (default).|
|inv|Sets the pin as active_low. The logic is inverted; a low-voltage produces a 1 for the property and vice-versa.|
|od|Sets the pin as an open-drainoutput. If not specified, the output is push-pull.|
|out|Sets the pin as an output.|
|persist|For an output pin, this specifies the property value is saved so the most recent output pin setting is restored if the device loses power or is restarted. To avoid saving rapid-fire changes, the setting may only persist after a short delay.|
|pd|Assigns the pin a pull-downresistor. This is most useful for input pins.|
|prop &lt;name&gt;|(optional) Sets the property pin name.|
|pu|Assigns a pull-upregister to the pin. This is usually used for input pins. However, some devices may be capable of supplying them on open-drainpins.|
|status|The selected output pin should be driven as a module status LED. The keyword "wifi" selects the Wi-Fi or network status, and the keyword "server" selects the ADS service connection status. These work as defined in the Smart Plug marketing requirements.|
|toggle &lt;pin&gt;|When used with an input pin, indicates the pin will toggle the specified output pin. If the input pin is active_low, the output pin will be toggled after the input pin goes low.|

# host

# hw

# id

# img

# locale

# log

# log-client

# log-snap

# mfg_mode

# mfi

# oem

# power

# reset

# rssi

# run

# save

# sched

# secure

# server

# setup_mode

# show

# time

# version

# wifi

