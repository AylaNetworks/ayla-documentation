---
title: gpio
layout: ayla-module-command-line-interface.html
b: block
---

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
