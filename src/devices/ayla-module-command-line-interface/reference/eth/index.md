---
title: eth
layout: ayla-module-command-line-interface.html
b: block
---

<code>eth [enable&vert;disable]</code>

Enable or disable Ethernet capability on Ayla module.

<code>eth mac_addr &lt;mac address&gt; i.e. eth mac_addr 5e:c3:32:32:ac</code>

Set MAC address to be used for Ethernet protocol by Ayla Module.

<code>ethi spi_speed [0..8]</code>

The spi_speed values are platform-dependent and should be recommended based on hardware restrictions. The value 0 selects the compiled-in default.On STM32F2xx-based modules, the spi_speed values 1 thru 8 translate to a SPI clock frequency which is the bus frequency divided by 2^n. For example, 1 means divide by 2, 2 means divide by 4, through 8 meaning divide by 128. The fastest speed 1, is 15 MHz. Default for STM32F2xx is 7.5 MHz.

