---
title: Install the gateway
layout: ayla-dynamic-gateway-agent.html
b: block
---

This page shows you how to create a template for your Bluetooth Gateway, and how to build, install, and register your gateway. 

### Create a Gateway Template
<ol>
<li>Browse to the Ayla Developer Portal.</li>
<li>Click Design a Device, and click Add.</li>
<li>Create a template with the following attributes. For <code>Version</code>, see <code>appd_template_version</code> in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/gateway.c).
<table class="key-value-table">
<tr><th>Field</th><th>Value</th></tr>
<tr><td>Visibility</td><td>oem</td></tr>
<tr><td>Name</td><td>BT GW</td></tr>
<tr><td>Description</td><td>bt_gatewayd</td></tr>
<tr><td>Registration Type</td><td>Same-LAN</td></tr>
<tr><td>Model</td><td>linuxevb</td></tr>
<tr><td>Version</td><td>bluetooth_gateway_demo_v1.2</td></tr>
<tr><td>Type</td><td>Gateway</td></tr>
<tr><td>Gateway Type</td><td>Generic</td></tr>
</table>
</li>
<li>Add the following properties to the template. See <code>appd_gw_prop_table</code> in [gateway.c](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/app/bt_gatewayd/gateway.c).
<table class="key-value-table">
<tr><th>Name</th><th>Display Name</th><th>Type</th><th>Direction</th><th>Scope</th></tr>
<tr><td>version</td><td>version</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_scan_enable</td><td>bt_scan_enable</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_scan_status</td><td>bt_scan_status</td><td>Boolean</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_connect_id</td><td>bt_connect_id</td><td>String</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_connect_result</td><td>bt_connect_result</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_disconnect_id</td><td>bt_disconnect_id</td><td>String</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_disconnect_result</td><td>bt_disconnect_result</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_connect_passkey</td><td>bt_connect_passkey</td><td>Integer</td><td>To Device</td><td>oem</td></tr>
<tr><td>bt_connect_passkey_display</td><td>bt_connect_passkey_display</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>bt_scan_results</td><td>bt_scan_results</td><td>String</td><td>From Device</td><td>oem</td></tr>
<tr><td>num_nodes</td><td>num_nodes</td><td>Integer</td><td>From Device</td><td>oem</td></tr>
</table>
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
<div>Use the <code>-a</code> flag to build and install the Bluetooth Gateway <code>bt_gatewayd</code>. It will be renamed <code>appd</code>.</div>
<div>Use the <code>-z</code> flag to enable full BLE support.</div>
<div>Use the <code>-n</code> flag if your RPi is connected via Ethernet. The <code>cond</code> daemon will not run.</div>
<div>Use the <code>-u</code> flag to reinstall over a previous installation. Your gateway and node digital twins are untouched.</div>
</li>
<li>Perform the installation. Here are some examples:
<pre class="light">
$ sudo ./ayla_install.sh -z -a bt_gatewayd        # Your RPi is using Wi-Fi

$ sudo ./ayla_install.sh -z -a bt_gatewayd -n     # Your RPi is using Ethernet
</pre>
<div>You may be required to enter your Github credentials during the process.</div>
</li>
</ol>

### Inspect the installation

The following diagram provides an overview of components involved in the building and installing the Ayla Dynamic Gateway Package.

<div class="row">
<div class="col-lg-7 col-md-10 col-sm-12">
<img class="img-fluid img-margins" src="inspect-installation.png">
</div>
</div>

1. Review [Generate a devd.conf file](../../getting-started/generate-a-devd-conf-file).
1. Source code for the Bluetooth Gateway (bt_gatewayd). The installation process renames it to appd in <code>&sim;/ayla/bin</code>.
1. Source code for the Ayla Gateway Agent (devd). 
1. Source code for the libraries which become libapp.a, libayla.a, and libplatform.a in <code>build</code>.
1. The make process puts all daemons, libraries, and utilities here. 
1. The install process copies artifacts from <code>build</code> to <code>&sim;/ayla</code>.
1. This the devd startup file. Startup files for logd and (optionally) cond are here, too.

The following diagram provides details about the <code>/home/pi/ayla</code> installation directory.

<div class="row">
<div class="col-lg-7 col-md-10 col-sm-12">
<img class="img-fluid img-margins" src="../../simulator-example/install-the-gateway/inspect-installation-details.png">
</div>
</div>

1. This is the Ayla Gateway Agent daemon (devd) and your gateway application (appd).
1. See [Startup Files](../../reference/startup-files).
1. These are the libraries used by devd and appd.

### Register the gateway

<ol>
<li>Reboot the RPi with <code>sudo reboot</code>.</li>
<li>Using a computer <span style="color:red;">connected to the same LAN</span> as your RPi, browse to the Ayla Developer Portal.</li>
<li>Click Register New Device. 
<div class="row">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-fluid img-top-bottom" src="../../simulator-example/install-the-gateway/register-new-device-found.png">
</div>
</div>
<div>If the Device Registration page does not contain a Registration Code textbox, reboot your RPi, and refresh the page.</div>
</li>
<li>Click the link on the page to reveal a device registration code (e.g. e224a1) in a new tab.</li>
<li>Copy and paste the code into the Registration Code textbox, and click Register. The Ayla Cloud registers the gateway to your Ayla user account, and associates the RPi gateway with the BT GW template you created earlier.</li>
</ol>

### View gateway in Ayla Developer Portal

1. In the Ayla Developer Portal, click View My Devices. A list of devices appears.
1. Click the Serial Number of your gateway. A list of properties appears.
1. Click (Devices) Details, change Product Name to "BT GW 1", peruse other attributes, and click OK.
1. Click (Devices) Template, and verify that Current Template is "BT GW".
1. Click (Devices) Nodes, and verify that this gateway does not yet have any nodes.
1. Click (Devices) Candidates, and verify that it does not have any candidate nodes, either.

### View gateway in Ayla Dashboard Portal

1. Browse to the Ayla Dashboard Portal.
1. Click OEM Users (in the sidebar), click on your user, click Devices (at the top), and view your gateway. 
1. Click Devices (in the sidebar), find "BT GW 1", click on it, and peruse without modifying anything.
1. Click Templates (in the sidebar), find "BT GW", click on it, and peruse.
