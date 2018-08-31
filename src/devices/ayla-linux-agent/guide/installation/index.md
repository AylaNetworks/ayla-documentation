---
title: Installation
layout: devices-ayla-linux-agent.html
a: block
---

# Setting up your Raspberry Pi

To complete the hands-on exercises in the Guide and Tutorial, you will need a functioning Raspberry Pi 2 or 3 with the latest Raspbian image, and Ethernet or Wi-Fi connectivity. To test the exercises, we used the [CanaKit Raspberry Pi Quick Start Guide](https://www.canakit.com/Media/CanaKit-Raspberry-Pi-Quick-Start-Guide-3.2.pdf) to set up a [Raspberry Pi 3 Model B+ 32-bit Starter Kit](https://www.canakit.com/raspberry-pi-3-model-b-plus-starter-kit.html). Connecting your RPi to a monitor, keyboard, and mouse is optional. The exercises assume you are accessing your RPi via SSH. See [Reference: Raspberry Pi](/devices/ayla-linux-agent/reference/raspberry-pi) for details.

# Creating a Factory Configuration File

Ayla’s cloud client daemon (devd) requires a factory configuration file to uniquely identify and authenticate the device with Ayla Device Service (ADS). This file contains several required fields, including the Device Serial Number (DSN), RSA public key for authentication, OEM-specific information, and key. There are two methods to create a unique devd factory config file for each device. The factory method is recommended for large volume device production. The development method generates small batches of configuration files.

### Factory Method

Each device is manufactured and programmed with a firmware image that includes a default (non-unique) configuration file. When the device is provisioned, an interactive command-line utility on the device - gw_setup_agent - is launched via serial console to program the factory configuration file with a unique identity. This is ideal for high volume production, because all devices are loaded with the same firmware image, and each device’s identity is programmed via a script running in a serial console on the production line. Ayla provides a sample script - gw_setup.tcl - that can run on a factory workstation to program the correct configuration. Please see the “Ayla Linux Agent Setup” document (Document Number: AY006TGW0) for more information.

### Development Method

The config_gen utility source code is compiled and run on a Linux development machine. It takes several parameters:

* <DSN>.xml file (produced by the Ayla Factory Service)* OEM info file* Device MAC address to be provisioned (if a manufacturing log file is needed).* The utility outputs a unique devd factory config and optionally appends an entry to a factory log file (which may be required by Ayla to enable the device on the cloud service). The README file in the host_util/config_gen directory describes usage.

# Managing a Factory Configuration File

The devd daemon (and other Ayla daemons) on the device use a consistent scheme to manage configuration files:

* Each daemon is run using the “-c” option specify its factory config file path. The factory config file is only written during factory provisioning. To ensure integrity, set read-only file permissions or store in a read-only file system.* When a daemon’s configuration is modified from defaults and saved, a new file (startup config) is created. All future configuration changes overwrite this file. By default, startup config is created in the same directory as factory config. It uses the factory file name with “.startup” appended. If needed, the startup config can be stored in a different startup directory with the “-s” option.* Startup config must be stored in a writeable flash file system, so it persists across reboots. If not, daemons revert to factory default settings on each reboot.* When a daemon is factory reset, the startup configuration file is deleted and the factory config is loaded.

# Installing the Ayla Device Platform for Linux
<ol>
<li>Download [ayla_install.sh](https://github.com/AylaNetworks/device_linux_public/tree/master/dev_kit/raspberry_pi).</li>
<li>Copy ayla_install.sh to <code>/home/pi</code> on the RPi.</li>
<li>Copy the conf file to <code>/home/pi/devd.conf</code>.</li>
<li>Start the installation:
<pre>
$ sudo ./ayla_install.sh         // Wi-Fi
$ sudo ./ayla_install.sh ­-n      // Ethernet
</pre>
</li>
<li>Reboot the RPi. On reboot, the Ayla Agent daemon (devd) and the Host Application daemon (appd) will start.</li>
<li>Verify that devd and appd are running:</li>
<pre>
$ tail -30 /var/log/messages
</pre>
</ol>

# Running devd

# Running appd
