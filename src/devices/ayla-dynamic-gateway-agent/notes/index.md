---
title: Notes
layout: ayla-dynamic-gateway-agent.html
d: block
---

[configure-rpi](configure-rpi)

[device-linux-gw-public](device-linux-gw-public)

[images-and-video](images-and-video)

### Core Device Services

See [/daemon](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/daemon).

<dl>
<dt>devd</dt>
<dd>The Ayla Dynamic Gateway Agent.</dd>

<dt>cond</dt>
<dd>The Ayla Configuration Application.</dd>

<dt>logd</dt>
<dd>The Ayla Logging Application.</dd>
</dl>

### Example Host Applications

See [/app](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/app).

<dl>
<dt>appd</dt>
<dd>An example device application for the Ayla Agent.</dd>

<dt>gatewayd</dt>
<dd>An example simulation gateway application for the Ayla Agent.</dd>

<dt>bt_gatewayd</dt>
<dd>An example Bluetooth LE gateway application for the Ayla Agent.</dd>

<dt>zb_gatewayd</dt>
<dd>An example Zigbee gateway application for the Ayla Agent.</dd>

<dt>multi_gatewayd</dt>
<dd>An example multiprotocol gateway application for the Ayla Agent.</dd>
</dl>

### Libraries

See [/lib](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/lib).

<dl>
<dt>libapp.a</dt>
<dd>The Ayla Application Library. Host applications link to this library.</dd>

<dt>libayla.a</dt>
<dd>The Ayla Common Library. Both host applications and Ayla Daemons (devd, cond, logd) link to this library.</dd>

<dt>libplatform.a</dt>
<dd>The Ayla Platform-specific Library. Both host applications and Ayla Daemons (devd, cond, logd) link to this library.</dd>
</dl>

### Host Utilities

See [/host_util](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/host_util).

<dl>
<dt>config_gen</dt>
<dd>Standalone utility that generates a devd configuration file, and appends an entry to a manufacturing log.</dd>

<dt>gw_setup</dt>
<dd>The Gateway Setup Package sets up the gateway to use the Ayla cloud service</dd>
</dl>

### Other Utilities

See [/util](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/util).

<dl>
<dt>acgi</dt>
<dd>Ayla Common Gateway Interface.</dd>

<dt>acli</dt>
<dd>Ayla Command-line interface.</dd>

<dt>devdwatch</dt>
<dd>Monitors and restarts devd.</dd>

<dt>gw_setup_agent</dt>
<dd>Gateway Setup Agent</dd>

<dt>ota</dt>
<dd>Over-the-air Update</dd>
</dl>

### Developer Kit Installation

See [/dev_kit/raspberry_pi](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/dev_kit/raspberry_pi).

<dl>
<dt>ayla_install.sh</dt>
<dd>This script runs on a Raspberry Pi with a clean installation of Raspbian. It creates a working system with core Ayla modules and all dependencies needed to build and run them.</dd>
</dl>

### External Libraries

See [/ext](https://github.com/AylaNetworks/device_linux_gw_public/tree/master/ext).

<dl>
<dt>hashmap</dt>
<dd></dd>

<dt>hostap</dt>
<dd></dd>
</dl>
