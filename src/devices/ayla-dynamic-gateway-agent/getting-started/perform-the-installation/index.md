---
title: Perform the Installation
layout: ayla-dynamic-gateway-agent.html
i: block
---

<ol>
<li>In the Ayla Developer Portal, click Register New Device:
<div class="row">
<div class="col-lg-8 col-md-10 col-sm-12">
<img class="img-fluid" src="register-new-device.png">
</div>
</div>
</li>
<li>Run <code>ayla_install.sh -h</code> to view command-line options:
<pre class="light">
$ sudo ./ayla_install.sh -h
&nbsp;
OPTIONS:
  -d, --dryrun        Tests script configuration and exits without modifying the system
  -u, --upgrade       Modifies install to avoid overwriting existing config
  -b, --build_env     Just installs the packages required to compile Ayla modules
  -p, --package PATH  Path of Ayla source tarball, or URL to GIT repo (default: device_linux_public.git)
  -c, --config DIR    Directory to find required config files (default: /home/pi/)
  -a, --app APP_NAME  Appd to build (default: appd)
  -n, --no_wifi       Omits installing and configuring Wi-Fi-specific components
  -g, --gpio          Adds Wiring Pi library for Raspberry Pi
  -m, --modem         Adds usb-modeswitch library to support USB connected [cellular] modems
  -z, --ble           Installs BlueZ Bluetooth daemon from source to enable full BLE support
  -e, --zigbee        Installs libreadline-dev/libncurses-dev to enable full ZigBee support
  -t, --multi         Installs BlueZ Bluetooth daemon/libreadline-dev/libncurses-dev to enable BLE/ZigBee support
  -l, --log PATH      Dump installation details to a log file
  -v, --version       Print script version
  -h, --help          Print usage
</pre>
</li>
<li>Perform the appropriate installation. You may be required to enter your Github credentials during the process.</li>
<pre class="light">
$ sudo ./ayla_install.sh -a gatewayd         # Simulator Example

$ sudo ./ayla_install.sh -a bt_gatewayd      # Bluetooth Example

$ sudo ./ayla_install.sh -a zp_gatewayd      # Zigbee Example

$ sudo ./ayla_install.sh -a multi_gatewayd   # Multiprotocol Example

$ sudo ./ayla_install.sh -a appd             # Device Example
</pre>
<li>Reboot the RPi with <code>sudo reboot</code>.</li>
</ol>

