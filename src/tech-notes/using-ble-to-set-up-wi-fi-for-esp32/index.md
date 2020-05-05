---
title: Using BLE to set up Wi-Fi for ESP32
layout: site.html
---

<span style="font-size:90%;">By Steve Grau on May 5, 2020</span>

### Steps for becoming familiar with BLE Wi-Fi Config support

1. Build and download the ayla_demo application
1. Tap the reset button on the ESP32 board
1. If you’ve previously provisioned the ESP32 to a Wi-Fi network, factory reset it to clear the Wi-Fi configuration:
1. At the ESP32 CLI type “reset factory”
1. Proceed with the steps for iPhone or Android, depending which device you are using

### Steps for provisioning using Aura on iPhone

1. Launch the Aura app on an iPhone
1. If you had previously provisioned and registered the ESP32 device, unregister it:
a. Swipe left on the device’s entry
a. Tap “Unregister”
a. When prompted, confirm by tapping “Unregister”
a. Tap “OK”
1. Tap the “+” icon on the upper right
1. Tap the list expander icon at the right end of the “Advanced” header
1. Tap “BLE Wi-Fi Setup”
1. Tap “Proceed”
1. Tap “Setup Device”
1. Tap “Scan for devices”
1. Tap the on the device you are going to provision. There will normally be only one with a name like “Ayla1234”
1. When prompted to enter a key to BLE pair, enter “123456”
1. Tap “Pair”
1. Tap “Scan for APs”
1. Wait 15 seconds, then tap “Get scan result”
1. Tap the entry for the Wi-Fi network you want to connect your ESP32 to
1. Enter the Wi-Fi password for the selected network
1. Tap “Connect”
1. Wait for the message “In demo_cloud_up” on the ESP32 console
1. Tap “Confirm device connection”
1. Tap “Register device”
1. Tap “Exit setup”
1. Tap “< Add Device” at the top left
1. Tap “Cancel at the top right
1. Observe the device you just added is displayed in the Devices list

### Steps for provisioning using Aura on Android

1. Launch the Aura app on an Android
1. If you had previously provisioned and registered the ESP32 device, unregister it:
a. Tap on the device’s entry in the Device List
a. Tap the vertical ellipsis icon at the upper right
a. Tap “Unregister Device”
a. Tap “OK” to confirm
1. Tap the “+” icon
1. Tap the list expander icon at the right of the “Advanced” header
1. Tap “Wifi setup using BLE”
1. Tap “OK”
1. Tap “SCAN FOR DEVICES”
1. Tap on the device you are going to provision. There will normally be on one with a name like “Ayla1234”
1. Swipe down from the top of the screen to reveal pending notifications
1. Tap “Pairing request”
1. Enter “123456”
1. Tap “OK”
1. Tap “START DEVICE SCAN FOR APS”
1. Tap the entry for the Wi-Fi network you want to connect your ESP32 to
1. Tap the “Show” check box
1. Tap the “Wi-Fi Password” entry field
1. Enter the Wi-Fi password for the selected network
1. Tap the enter key on the keyboard
1. Tap “CONNECT TO …”
1. Wait for the message “In demo_cloud_up” on the ESP32 console
1. Tap “CONFIRM DEVICE CONNECTION”
1. Tap “REGISTER”
1. Tap “EXIT SETUP”
1. Observe the device you just added is displayed in the Device List

### Steps to understand how to integrating BLE Wi-Fi Config support

1. Locate and open examples/ayla_demo/demo_bt.c, which provides an example of integrating BLE Wi-Fi configuration with an application
1. Review the C function demo_bt_init. This function performs the initialization to start the BLE service. It does the following:
a. Determines if Wi-Fi has already been configured and returns without starting BLE service, if it has
a. Initializes the ESP32 hardware and NimBLE stack
a. Initializes the NimBLE host task configuration structure
a. Initializes the NimBLE GAP, GATT and config subsystems
a. Initializes the Ayla Bluetooth abstraction layer
a. Sets an identify callback function, which, for example, might blink an LED when the identify BLE attribute is written
a. Initializes the generic Ayla BLE service
a. Initializes the Ayla connection BLE service
a. Initializes the Ayla Wi-Fi configuration BLE service
a. Starts the NimBLE host task
a. Generates and sets a BLE device name based on the BLE device address
a. Starts BLE advertisements
1. Review other functions in demo_bt.c. Your application will need to implement similar functionality to orchestrate BLE services.
a. demo_bt_host_task implements the host task thread, which executes nimble_port_run to execute the BLE host statck
a. demo_bt_advertise configures and (re)starts BLE advertisements
a. demo_bt_display_passkey displays the code the user must enter when pairing. By default the passkey is 123456 for demo purposes. This should be changed to use a random number or other hard difficult to predict value for greater security in production products.
a. demo_bt_gap_event_handler implements handling for BLE GAP events. It orchestrates management of BLE connections. See ESP32 and NimBLE documentation for more information on handling GAP events.
a. demo_bt_gatt_register_cb handles BLE GATT registration events. See ESP32 and NimBLE documentation for more information on handling GATT registration events.
1. Review the BLE configuration of the ESP IDF configured by the Ayla demo application.
a. cd $IDF_PATH/examples/ayla_demo
a. make menuconfig
a. Browse to Component config > Bluetooth
a. Browse through all of the Bluetooth configuration, noting option settings, which you will need to make in your application’s IDF configuration, later

### Steps to enable BLE Wi-Fi support in your application

1. Configure the ESP IDF BLE options to enable the NimBLE Bluetooth stack based on setting used by the Ayla demo application
1. Integrate similar functionality to demo_bt.c into your application to orchestrate BLE operations

### BLE Wi-Fi Configuration Implementation

The Ayla agent implements three BLE GATT services that realize the Wi-Fi Configuration Architecture – [Ayla Generic GATT Service](https://docs.aylanetworks.com/archive/ayla-generic-gatt-service-guide-2017-07.pdf), [Ayla Connectivity GATT Service](https://docs.aylanetworks.com/archive/ayla-connectivity-gatt-service-2017-08.pdf) and [Ayla Wi-Fi Configuration GATT Service](https://docs.aylanetworks.com/archive/wi-fi-configuration-gatt-service-2017-09.pdf). The Ayla GATT services are built on top of generic GATT services provided by the ESP32 NimBLE stack.

The application implements the code to orchestrate BLE services (see demo_bt.c), initializing and starting the NimBLE host thread, as well as registering each of the Ayla GATT services. The application manages BLE advertisements, which enable the device to be discovered and connected to. The application manages BLE connections, while the Ayla GATT services implement BLE attributes that provide for Wi-Fi provisioning and registering the device to a specific user account. 

A mobile application uses BLE to discover the device, securely connect to it, instruct the device to scan for Wi-Fi networks, configure the device to connect to a particular Wi-Fi network, and to register the device to a specific user.

### Files

* lib/adb/adb_ayla_svc.* - implements the Ayla generic GATT service
* lib/adb/adb_conn_svc.* - implements the Ayla connectivity GATT service
* lib/adb/adb_wifi_cfg_svc.* - implement the Ayla Wi-Fi configuration GATT service
* lib/adb/adb.* - implements a framework for Ayla’s GATT services
* lib/adb/al_bt_esp32.* - implements adaptation layer to ESP32 NimBLE stack
* examples/ayla_demo/main/demo_bt.c – implements application orchestration of BLE services

### Build Switches

The define symbol AYLA_BLUETOOTH_SUPPORT is used as a compile time switch to enable or disable inclusion of Bluetooth features. Defining this symbol enables compilation of Bluetooth support. This symbol is defined by default. It is defined in the following make files:

* components/ayla/component.mk
* examples/ayla_demo/Makefile


___

Here are some tips:

1. Type your text above the three underscores.
1. Use the examples below as needed. Leave them. I will delete them when I edit your text.
1. If you need to add a diagram or other image, just type "Insert Image Here" on a line by itself. I will help you insert the image later. 
1. If you need to divide your document with headings, use Level 3 headings first. If you really need to group Level 3 headings, then use Level 2 headings. If you really need to group Level 2 headings, then use Level 1 headings. 
1. If needed, I will generate a "page" sidebar on the right side of the page.

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Heading 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is a link to a [Ubuntu Docker image](https://hub.docker.com/_/ubuntu).

This is an unordered list:

* Red
* Yellow
* Blue

This is an ordered list:

1. Red
1. Yellow
1. Blue

This is a table:

|Name|Hex|RGB|
|-|-|-|
|Blue|0000FF|0,0,255|
|DarkSeaGreen|8FBC8F|143,188,143|
|HotPink|FF69B4|255,105,180|
|LightSteelBlue|B0C4DE|176,196,222|

This is inline code: `apt install nano screen iputils-ping`. 

This is a code snippet:

```
function keydownListener(e) {
  if (e.keyCode === 9) {
    document.body.classList.add("tab-enabled");
    window.removeEventListener("keydown", keydownListener);
  }
}
```

This is an ordered list with code snippets:

1. Create an `esp` directory, and change directory:
    ```
    # mkdir esp
    # cd esp
    ```
1. Download ESP32 toolchain for Linux:
    ```
    # wget https://dl.espressif.com/dl/xtensa-esp32-elf-linux64-1.22.0-80-g6c4433a-5.2.0.tar.gz
    ```
1. Extract the archive file:
    ```
    # tar -xzf xtensa-esp32-elf-linux64-1.22.0-80-g6c4433a-5.2.0.tar.gz
    ```
