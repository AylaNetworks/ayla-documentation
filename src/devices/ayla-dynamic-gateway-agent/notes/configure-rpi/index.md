---
title: Configure RPi
layout: ayla-dynamic-gateway-agent.html
d: block
---

# How to configure a Raspberry PI as a Wi-Fi connected Ayla device or gateway 

How to configure a Raspberry PI as a Wi-Fi connected Ayla device or gateway client running a demo application.

From David Okabe. 

### Resource requirement

1.1 Raspberry Pi 3

Access https://www.raspberrypi.org website to buy a Raspberry Pi 3 board.

1.2 Micro SD card (8+ GB capacity)

1.3 Ayla Linux Device Client factory config file

This is a JSON file containing a valid DSN, device public key, OEM information, and other default values. It is recommended to generate one using the config_gen tool, or speak to someone who can do it for you. The basic Linux device client demo app expects the OEM model to be "linuxevb", the generic gateway simulator app expects the OEM model to be "ggdemo", and the BLE/ZigBee/Multi protocol gateway demo app expects the OEM model to be "linuxevb".

1.4 Access to Ayla Linux device agent Github repository or source code tarball

While the ayla_install.sh install script runs, you will be prompted to enter valid Github credentials, at which point, the script will clone the device_linux_public repo and use it as the source for the remainder of the process. If you do not have access to this repository, you will need to request it, or acquire a tarball (tgz file) of the required source files (use the `-p` flag, as explained below, to point the ayla_install.sh script to that tarball's location if you use this method).

### Setup

2.1 Install OS on PI board

Please read the below link to download a latest Raspbian image and install it on your PI board.

https://www.raspberrypi.org/documentation/installation/installing-images/README.md

2.2 Config PI OS

Boot your Raspberry PI, login PI system, first time you must use displayer(HDMI) and keyboard(USB) to login, then run raspi-config command line utility, and set the Interfacing Options configuration, enable SSH and Serial interfaces. After enable SSH and Serial interfaces, you can use SSH or serial console to login PI. 

### Install Ayla demo on PI

3.1 Connect your Raspberry Pi to a network with internet access

3.2 Copy ayla_install.sh file to your Raspberry PI same directory

ayla_install.sh is currently located in the Linux device agent GIT repository at [rel/]dev_kit/raspberry_pi/ayla_install.sh.

3.3 Copy your factory config file to your Raspberry PI

The factory config file needs to be renamed as devd.conf, and put in the same directory with ayla_install.sh file.

3.4 Modify ayla_install.sh if needed

If you want to download different GIT repository, you need to update the ayla_package variable define. 

ayla_package="https://github.com/AylaNetworks/device_linux_public.git"

If you want to keep the source code, you need to update the ayla_src_dir variable define, don’t use $temp_dir in path, it will be removed after install finish.

ayla_src_dir="$temp_dir/ayla/src"

3.5 Run ayla_install.sh to install Ayla demo on your Raspberry PI

3.5.1 To do a basic installation, run ayla_install.sh with no options selected.

Type: sudo ./ayla_install.sh

3.5.2 ayla_install.sh has several options to configure what application daemon to build and how the system is setup.

Use the --help option to see all the options.

-d, --dryrun        Tests script configuration and exits without modifying the system

-u, --upgrade       Modifies install to avoid overwriting existing config

-b, --build_env     Just installs the packages required to compile Ayla modules

-p, --package PATH  Path of Ayla source tarball, or URL to GIT repo (default: device_linux_public.git)

-c, --config DIR    Directory to find required config files (default: current directory)

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

Use -a to set the build app, it could be appd, gateway, bt_gatewayd, zb_gatewayd, and multi_gatewayd.

appd

Generic device client demo

gatewayd

Generic gateway simulator demo

bt_gatewayd

BLE gateway demo

zb_gatewayd

ZigBee gateway demo

multi_gatewayd

Multi protocol gateway demo

The install script performs the following functions:

1. Update the package manager

2. Install packages required to build and run Ayla services.

3. Install packages required for Wi-Fi connectivity and to communicate with mobile apps.

4. Configure the system and various packages that were just installed.

5. Download or unpack the Ayla source package, build it, and install it in the system in the /home/pi/ayla directory.

6. Install and rehash certificates required to establish a secure HTTPS session with Ayla cloud services.

7. Create and install init.d scripts to start Ayla services at boot.

The install script is NOT a substitute for knowledge about the system setup process!  It is more of a recipe for success.  It is well commented, so please take some time to read through what it is doing, so you are familiar with our requirements and how to troubleshoot any problems that arise.  The --log option may be used to save a list of installation steps to a file. Also, keep in mind that the installation on the Raspberry Pi is rudimentary and omits some tweaks and optimizations that would be desirable on a production device.

Once the installation is complete, reboot the system.

### WiFi Setup

If you completed the above setup process successfully, you should now have a basic cloud enabled Wi-Fi device. The device's Wi-Fi module will be in AP mode.  Use an Ayla mobile app such as AMAP or Aura to do Wi-Fi setup and connect it to your network. Ethernet and Wi-Fi may be used interchangeably.

After WiFi setup, the device will connect to Ayla cloud services, and associate a template with several input and output properties. You may configure and control the device using a mobile app or the Ayla Developer site or Dashboard.



### OTA Update

"Host MCU" type OTA updates are supported, The generic steps are create a new group, add the device to the new group, create Host MCU Images, upload the image file you prepared, create an OTA Jobs, deploy the OTA jobs, wait the device to finish OTA update. 

The dev kit is setup to call a script called apply_ota.sh to process the image file once it is downloaded. To send an OTA image to upgrade the Ayla services for your device:

  • cd to the release directory of your checked out device_linux source repository.

device_linux repo dir: device_linux/rel;

device_linux_public repo dir: device_linux_public; 

device_linux_gw_public repo dir: device_linux_gw_public. 

2. Cleanup any existing build files: make clean

3. Create a tar file with all files in the release directory: tar -cvf <your_ota_file>.tgz *

4. Create a new host MCU OTA in the Dashboard for your device's OEM model, and upload the tar file you created.

5. Deploy the OTA to your device

Notes: Dev kit OTAs build the Ayla source code on the Raspberry Pi itself, so the install process may take a few minutes. The device will reboot if the update was successful. The apply_ota.sh writes logs to a log file at /home/pi/ayla/ota_install.log each time it runs, and you can use this to debug OTA failures.

# Raspberry Pi BLE Gateway Setup

Also from David

This document assumes that the Raspberry Pi has already been set up with Raspbian or Raspbian-lite. For more information on setting up Raspbian or Raspbian-lite, look here.

Prerequisites

* A Raspberry Pi running Raspbian or Raspbian-lite

* A devd.conf file from Ayla Networks. This uniquely identifies your gateway. * The install image * ayla_install.sh script

* Shell access to the Raspberry Pi (ssh, serial, keyboard / mouse / HDMI)

Setting it up

Open a shell on the Pi with the “pi” user. It is important that the user is named “pi”, which is the default username in Raspbian.

In the /home/pi directory, copy over the install image and your devd.conf file. These should remain in the /home/pi directory.

Once the files are in the home directory, run the ayla_install.sh script as root with the following arguments:

sudo ./ayla_install.sh -p ./BLE-GG-1.5.2.tar.gz -a bt_gatewayd –z

When the operation is done, reboot your device.

If the script complains about missing libraries, run it again with the option to download the required dependencies:

sudo ./ayla_install.sh -b

and then run the script with the install arguments again.
