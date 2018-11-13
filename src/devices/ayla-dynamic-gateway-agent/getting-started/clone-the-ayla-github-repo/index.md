---
title: Clone the Ayla Github Repo
layout: ayla-dynamic-gateway-agent.html
i: block
---

First, obtain access to the Ayla [device_linux_gw_public](https://github.com/AylaNetworks/device_linux_gw_public) Github repository from your Ayla contact.

By default, the installation script ([ayla_install.sh](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/dev_kit/raspberry_pi/ayla_install.sh)) copies source files from the Github repository to a temporary directory on your RPi, builds various libraries, daemons, and example applications, installs them in ```/home/pi/ayla```, and deletes the temporary directory. The directions below show you how to modify this installation behavior to retain the source files in ```/home/pi/device_linux_gw_public``` so that you can modify them as you experiment with building a gateway application. 

### Clone the Ayla Github

1. Secure shell to your RPi:
<pre class="light">
$ ssh pi@192.168.1.3
</pre>
1. Ensure that you are in your home directory (e.g. ```/home/pi```).
1. Clone the repository. You will be asked for your Github username and password.
<pre class="light">
$ git clone https&#58;//github.com/AylaNetworks/device_linux_gw_public.git
</pre>
1. View the new ```/home/pi/device_linux_gw_public``` source directory.

### Point the installation script at the source directory

1. Copy ayla_install.sh to your home directory:
<pre class="light">
$ cp ~/device_linux_gw_public/dev_kit/raspberry_pi/ayla_install.sh ~/ 
</pre>
1. Open the file for editing, and find the following line:
<pre class="light">
ayla_src_dir="$temp_dir/ayla/src"
</pre>
1. Change it to the following, and save.
<pre class="light">
ayla_src_dir="/home/pi/device_linux_gw_public"
</pre>
</ol>

### View installation options

Please don't actually perform an installation, yet. We have more preparation to do. Just view the installation options.

1. Display installation options:
<pre class="light">
$ ./ayla_install.sh -h
&nbsp;
ayla_install.sh [OPTIONS]
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
1. You will use the ```-a``` flag to specify the example application to build: appd, gatewayd, bt_gatewayd, zb_gatewayd, or multi_gatewayd.
1. You will use the ```-u``` flag to install over a previous installation (e.g. changing from gatewayd to zb_gatewayd).
1. Note the ```-c``` flag. The installation script requires you to supply a devd.conf file. You will learn how to generate this file in a subsequent section. 
