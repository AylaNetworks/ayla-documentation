---
title: Configuration File
layout: devices-ayla-linux-agent.html
c: block
---

# Creating a Factory Configuration File

The Ayla Linux Agent (devd) requires a factory configuration file to uniquely identify and authenticate the device with Ayla Device Service (ADS). This file contains several required fields, including the Device Serial Number (DSN), RSA public key for authentication, OEM-specific information, and key. There are two methods to create a unique devd factory config file for each device. The development method generates small batches of configuration files. The factory method is recommended for large volume device production. 

### Development Method

The config_gen utility source code is compiled and run on a Linux development machine. It takes several parameters:

* <DSN>.xml file (produced by the Ayla Factory Service)

### Factory Method

Each device is manufactured and programmed with a firmware image that includes a default (non-unique) configuration file. When the device is provisioned, an interactive command-line utility on the device - gw_setup_agent - is launched via serial console to program the factory configuration file with a unique identity. This is ideal for high volume production, because all devices are loaded with the same firmware image, and each device’s identity is programmed via a script running in a serial console on the production line. Ayla provides a sample script - gw_setup.tcl - that can run on a factory workstation to program the correct configuration. 

# Managing a Factory Configuration File

The devd daemon (and other Ayla daemons) on the device use a consistent scheme to manage configuration files:

* Each daemon is run using the “-c” option specify its factory config file path. The factory config file is only written during factory provisioning. To ensure integrity, set read-only file permissions or store in a read-only file system.
