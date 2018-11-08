---
title: Installation
layout: ayla-dynamic-gateway-agent.html
i: block
---

Before you install the [Ayla Dynamic Gateway Agent](https://github.com/AylaNetworks/device_linux_gw_public) on your Raspberry Pi, be sure to complete the following steps:

1. Create an Ayla account.
1. Unregister your RPi device.
1. Delete old installations including daemons.

### Obtain a devd.conf file

<ol>
<li></li>

<li></li>

<li></li>
</ol>

Notes from Ayla Linux Agent:

* Obtain a devd.conf file. Copy to RPi.
  * Generate with config_gen.
  * appd oem_model = linuxevb.
  * gatewayd oem_model = ggdemo.
  * bt_gatewayd = linuxevb.
  * zb_gatewayd = linuxevb.
  * multi_gatewayd = linuxevb.
* Obtain ayla_install.sh. Copy to RPi.
  * Modify ayla_package=.
  * Modify temp_dir= if desired.
  * sudo ./ayla_install.sh --help
  * sudo ./ayla_install.sh for basic installation.
  * Use -a to set the build app, it could be appd, gateway, bt_gatewayd, zb_gatewayd, and multi_gatewayd
  * The --log option may be used to save a list of installation steps to a file.
* Run the installation.
* Reboot the RPi.
* Verify that devd and appd are running.
* Register the RPi device.
* Test the RPi device.

Notes about OTA Updates:

