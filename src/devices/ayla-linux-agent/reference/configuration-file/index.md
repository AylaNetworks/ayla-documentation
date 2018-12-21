---
title: Configuration File
layout: ayla-linux-agent.html
c: block
---

# Creating a Factory Configuration File

The Ayla Linux Agent (devd) requires a factory configuration file to uniquely identify and authenticate the device with Ayla Device Service (ADS). This file contains several required fields, including the Device Serial Number (DSN), RSA public key for authentication, OEM-specific information, and key. There are two methods to create a unique devd factory config file for each device. The development method generates small batches of configuration files. The factory method is recommended for large volume device production. 

### Development Method

The config_gen utility source code is compiled and run on a Linux development machine. It takes several parameters:

* <DSN>.xml file (produced by the Ayla Factory Service)
* OEM info file
* Device MAC address to be provisioned (if a manufacturing log file is needed).
* The utility outputs a unique devd factory config, and optionally appends an entry to a factory log file (which may be required by Ayla to enable the device on the cloud service). The README file in the host_util/config_gen directory describes usage.

See [Generate a devd.conf file](/devices/ayla-dynamic-gateway-agent/getting-started/generate-a-devd-conf-file/) for details.

### Factory Method

Each device is manufactured and programmed with a firmware image that includes a default (non-unique) configuration file. When the device is provisioned, an interactive command-line utility on the device - gw_setup_agent - is launched via serial console to program the factory configuration file with a unique identity. This is ideal for high volume production, because all devices are loaded with the same firmware image, and each device’s identity is programmed via a script running in a serial console on the production line. Ayla provides a sample script - gw_setup.tcl - that can run on a factory workstation to program the correct configuration. 

# Managing a Factory Configuration File

The devd daemon (and other Ayla daemons) on the device use a consistent scheme to manage configuration files:

* Each daemon is run using the “-c” option specify its factory config file path. The factory config file is only written during factory provisioning. To ensure integrity, set read-only file permissions or store in a read-only file system.
* When a daemon’s configuration is modified from defaults and saved, a new file (startup config) is created. All future configuration changes overwrite this file. By default, startup config is created in the same directory as factory config. It uses the factory file name with “.startup” appended. If needed, the startup config can be stored in a different startup directory with the “-s” option.
* Startup config must be stored in a writeable flash file system, so it persists across reboots. If not, daemons revert to factory default settings on each reboot.
* When a daemon is factory reset, the startup configuration file is deleted and the factory config is loaded.
