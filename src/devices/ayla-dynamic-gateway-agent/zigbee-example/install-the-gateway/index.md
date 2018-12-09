---
title: Install the gateway
layout: ayla-dynamic-gateway-agent.html
a: block
---

This page shows you how to install Zigbee support, create a template for your Zigbee Gateway, and build, install, and register your the gateway.

### Install Simplicity Studio IDE

<ol>
<li>Browse to [Silicon Labs](https://www.silabs.com), create an account, and log in.</li>
<li>Browse to [Simplicity Studio](https://www.silabs.com/products/development-tools/software/simplicity-studio).</li>
<li>Scroll to the installer links, and download the correct installer for your computer (e.g. <code>SimplicityStudio-v4.dmg</code>).</li>
<li>Install Simplicity Studio, run it, and log into Silicon Labs from the IDE. The IDE should present you with two choices: Install by Device and Install by Product Group. Choose Install by Product Group. If you don't see these choices, click Help &gt; Update Software.</li>
<li>Under Wireless and RF, check Zigbee, and click Next.</li>
</ol>

### Install Zigbee support

1. [Cel MeshConnect EM358 USB Stick](https://www.cortet.com/iot-hardware/cortet-usb-sticks/em358-usb-stick)
1. [Simplicity Studio IDE v4](https://www.silabs.com/products/development-tools/software/simplicity-studio)
1. [EmberZNet Protocol Stack v5.7.4.0](https://www.silabs.com/products/development-tools/software/emberznet-pro-zigbee-protocol-stack-software)

See [Setting Up Raspberry Pi for Development with Silicon Labs EmberZNet Stack](https://www.silabs.com/community/wireless/zigbee-and-thread/knowledge-base.entry.html/2017/12/26/setting_up_raspberry-xkPq)

### Create a Gateway Template
<ol>
<li>Browse to the Ayla Developer Portal.</li>
<li>Click Design a Device, and click Add.</li>
<li>Create a template with the following attributes. For the <code>Version</code> value, see <code>appd_template_version</code> in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/gateway.c).</p>
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>ZB GW</td></tr>
<tr><td>Description</td><td>zb_gatewayd</td></tr>
<tr><td>Registration Type</td><td>Same-LAN</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Version</td><td>zigbee_gateway_demo_v1.1</td></tr>
<tr><td>Type</td><td>Gateway</td></tr>
<tr><td>Gateway Type</td><td>Zigbee</td></tr>
</table>
</li>
<li>Add the following properties to the template. These properties compose <code>appd_gw_prop_table</code> in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/zb_gatewayd/gateway.c).
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>version</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>num_nodes</td><td>num_nodes</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
<tr><td>zb_join_enable</td><td>zb_join_enable</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>zb_join_status</td><td>zb_join_status</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
<tr><td>zb_network_up</td><td>zb_network_up</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
<tr><td>zb_bind_cmd</td><td>zb_bind_cmd</td><td>String</td><td>To Device</td><td>oem</td></tr>
<tr><td>zb_bind_result</td><td>zb_bind_result</td><td>String</td><td>From Device</td><td>oem</td></tr>
</table>
</li>
</ol>

### Modify ayla_install.sh

<ol>
<li>Open <code>ayla_install.sh</code>.</li>
<li>Search for <code>OS is not the raspberrypi</code> in the following conditional statement:
<pre class="light">
if [ "$(uname -n)" != "raspberrypi" ]; then
  error_exit "OS is not the raspberrypi"
fi
</pre>
</li>
<li>Run <code>uname -n</code> on your RPi:
<pre class="light">
$ uname -n
rpi
</pre>
<p>If <code>uname</code> returns <code>raspberrypi</code>, you're all set. Otherwise, modify the script as needed.</p>
</li>
</ol>

### Perform the installation

<ol>
<li>In your RPi Secure Shell, change to your home directory (e.g. <code>/home/pi</code>).</li>
<li>Verify that <code>ayla_install.sh</code> and <code>devd.conf</code> reside there. If not, complete the steps in [Getting Started](../../getting-started).</li>
<li>Use the <code>-h</code> or <code>--help</code> flag to view ayla_install.sh options:
<pre class="light">
$ ./ayla_install.sh -h
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
<div>Use the <code>-a</code> flag to build and install the Zigbee Gateway <code>zb_gatewayd</code>. It will be renamed <code>appd</code>.</div>
<div>Use the <code>-e</code> flag to enable full Zigbee support.</div>
<div>Use the <code>-n</code> flag if your RPi is connected via Ethernet. The <code>cond</code> daemon will not run.</div>
<div>Use the <code>-u</code> flag to reinstall over a previous installation. Your gateway and node digital twins are untouched.</div>
</li>
<li>Perform the installation. Here are some examples:
<pre class="light">
$ sudo ./ayla_install.sh -e -a zb_gatewayd        # Your RPi is using Wi-Fi

$ sudo ./ayla_install.sh -e -a zb_gatewayd -n     # Your RPi is using Ethernet
</pre>
<div>You may be required to enter your Github credentials during the process.</div>
</li>
</ol>

### Inspect the installation

### Register the gateway

### View gateway in Ayla Developer Portal

### View gateway in Ayla Dashboard Portal
