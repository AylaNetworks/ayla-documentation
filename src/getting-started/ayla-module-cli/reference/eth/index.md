---
title: eth
layout: ayla-module-cli.html
b: block
---

### Display Ethernet configuration

<pre>--&gt; eth</pre>

<p><a data-toggle="collapse" href="#dec">Sample output.</a></p>
<pre class="collapse" id="dec">
eth disabled
eth ip: 0.0.0.0
eth mac_addr: 00:00:00:00:00:00
eth spi_speed: 0
usage:
eth [enable|disable]
eth mac_addr &lt;mac&gt;
eth spi_speed [0..8]
</pre>

### Enable/disable Ethernet

<pre>eth [enable|disable]</pre>

### Set MAC address

<pre>eth mac_addr &lt;mac&gt;</pre>

### Set SPI speed

<pre>eth spi_speed [0..8]</pre>
