---
title: Ethernet for Murata Modules
layout: site.html
c: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Ethernet for Murata</a></li>
    <li><a href="#ethernet-chip-signals">Ethernet Chip Signals</a>
      <ul>
        <li><a href="#type-1ld-module">Type-1LD Module</a></li>
        <li><a href="#type-yd-module">Type-YD Module</a></li>
      </ul>
    </li>
    <li><a href="#ethernet-configuration">Ethernet Configuration</a></li>
  </ul>
</aside>

Ethernet support can be useful where a reliable Wi-Fi network is not available or not convenient. With Ethernet, the IP address is obtained via DHCP, and the link speed and duplex are configured automatically, so there’s no user setup needed. In terms of operation, only one network interface is used at a time by the Ayla module. If Ethernet support is provided, enabled, and correctly configured, the Wi-Fi interface will be disabled whenever a link is detected on the Ethernet interface. This is true even if there is no DHCP-provided IP address on the Ethernet interface.

# Ethernet Chip Signals

The ASIX AX88796 chip is driven via SPI (Serial Peripheral Interface) from the Ayla Production Agent Module. The module is the master on this SPI bus. The Ethernet SPI bus is separate from the SPI bus used from the host MCU to connect to the module. The signals needed are:

* Four SPI signals: SCK, MOSI, MISO, and NSS.
* An interrupt request (IRQ) from the ASIX chip.
* A reset to the ASIX chip.

The ASIX reset is connected to the module’s reset pin. This signal is open-drain and driven by a host MCU GPIO to reset the module and the ASIX chip, but also driven low by the module for at least 10 microseconds when it reboots itself. This way the Ethernet device and module are reset together. Do not tie this directly to the host MCU reset signal.

Note: For descriptions on the other connections to the ASIX chip, refer to the appropriate documentation from [ASIX](https://www.asix.com).

The following describes the Type-1LD module and Type-YD module connections.

## Type-1LD Module

The Type-1LD module uses an SPI bus to connect to the Ethernet chip. This is separate from the SPI bus that might be used by the host MCU. This support requires the Ayla Production Agent version 2.10 or later. The host MCU may use either SPI or UART to connect to the module. 

The following table provides the Type-1LD module signals for Ethernet. By default, none of the module GPIOs listed in the table below are used for other purposes, so be sure not to configure them. They should be shown as "not used" or "in use (eth)" by the "gpio" CLI command, which shows the status of various configurable I/Os.

|Signal Name|Module GPIO Pin|Module Pin Name|Module Pin|Daughtercard Hirose Connector Pin|AX88796C Pin|ASIX SMDK2440 V1.0 Demo board Pin|
|-|-|-|-|-|-|-|
|RESET_N|sss|nRESET|32|18|17|J11-30|
|IRQ|PB4|PB4/JTRST|19|39|23|J11-18|
|MOSI|PB15|PB15/SPI2_MOSI|28|1|42|J13-2|
|MISO|PB14|PB14/SPI2_MISO|29|3|41|J13-3|
|SCK|PB13|PB13/SPI2_SCK|30|4|56|J12-34|
|NSS|PB12|PB12/SPI2_NSS|31|2|52|J11-2|

## Type-YD Module

The Type-YD module uses a SPI bus to connect to the Ethernet chip. This is separate from the SPI bus that might be used by the host MCU. This support requires production agent version 1.9.6 or later. The host MCU must use SPI to connect to the module, because Ethernet uses PA2 and PA3, which would be needed to connect the host MCU via UART.

The following table provides the Type-YD module signals for Ethernet. By default, none of the module GPIOs listed in the table below are used for other purposes, so be sure not to configure them. They should be shown as "not used" or "in use (eth)" by the "gpio" CLI command, which shows the status of various configurable I/Os.

|Signal Name|Module GPIO Pin|Module Pin Name|Module Pin|Daughtercard Hirose Connector Pin|AX88796C Pin|ASIX SMDK2440 V1.0 Demo board Pin|
|-|-|-|-|-|-|-|
|RSTN|sss|NRST|2|2|17|J11-30|
|IRQ|PA3|PA3/UART2_RX|43|37|23|J11-18|
|MOSI|PB15|USBDP|33|8|42|J13-2|
|MISO|PB14|USBDM|34|7|41|J13-3|
|SCK|PB13|USB_DET|32|9|56|J12-34|
|NSS|PA2|PA2/UART2_TX|42|36|52|J11-2|

# Ethernet Configuration

Configuration of the Ethernet support is normally done using the ayla_config script from the Ayla OEM package. The script must be modified to configure the Ethernet MAC address, which must be unique for each module. The "eth" CLI command is used to show the Ethernet status or change its configuration. With no arguments, this CLI command shows the current configuration and usage:

```
setup-> eth
eth enabled
eth ip: 172.16.24.108
eth mac_addr: 12:34:56:78:9a:bc
eth spi_speed: 0

usage:
eth [enable|disable]
eth mac_addr <mac>
eth spi_speed [0..8]
```

The Ethernet MAC address must be configured; following is an example:

```
setup-> eth mac_addr 12:34:56:78:9a:bc
save+rst required
setup->
```

The message "save+rst required" is a reminder that the configuration has not been saved and will not be effective until the module reboots. You can continue with other configuration actions first, but when ready, type "save" and "reset". Note that to affect the factory configuration and to be effective after factory reset, Ethernet should be configured as desired while the module is in setup mode. 

The other required action is to enable the interface, as shown below:

```
setup-> eth enable
save+rst required
```

The "eth spi_speed" sub-command is not needed. Leave it set to 0 (the default).