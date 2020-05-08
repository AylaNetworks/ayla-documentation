---
title: Using BLE to set up Wi-Fi for ESP32
layout: site.html
---

<span style="font-size:90%;">By Steve Grau on May 5, 2020</span>

### Becoming familiar with BLE Wi-Fi Config support

1. Build the `ayla_demo` application and flash it to your ESP32 following the steps on the [Ayla ESP32 Solution](/edge-solutions/ayla-esp32-solution) page.
1. Tap the reset button on the ESP32 board.
1. If you’ve previously provisioned the ESP32 to a Wi-Fi network, type `reset factory` at the ESP32 CLI to clear the Wi-Fi configuration.
1. Proceed with the steps for iPhone or Android, depending on which device you are using.

### Provisioning using Aura on iPhone

1. Launch the Aura app on an iPhone.
1. If you had previously provisioned and registered the ESP32 device, unregister it:
    1. Swipe left on the device’s entry.
    1. Tap `Unregister`.
    1. When prompted, confirm by tapping `Unregister`.
    1. Tap `OK`.
1. Tap the `+` icon on the upper right.
1. Tap the list expander icon at the right end of the `Advanced` header.
1. Tap `BLE Wi-Fi Setup`.
1. Tap `Proceed`.
1. Tap `Setup Device`.
1. Tap `Scan for devices`.
1. Tap the on the device you are going to provision. There will normally be only one with a name like `Ayla1234`.
1. When prompted to enter a key to BLE pair, enter `123456`.
1. Tap `Pair`.
1. Tap `Scan for APs`.
1. Wait 15 seconds, then tap `Get scan result`.
1. Tap the entry for the Wi-Fi network you want to connect your ESP32 to.
1. Enter the Wi-Fi password for the selected network.
1. Tap `Connect`.
1. Wait for the message `In demo_cloud_up` on the ESP32 console.
1. Tap `Confirm device connection`.
1. Tap `Register device`.
1. Tap `Exit setup`.
1. Tap `< Add Device` at the top left.
1. Tap `Cancel at the top right.
1. Observe the device you just added is displayed in the Devices list.

### Provisioning using Aura on Android

1. Launch the Aura app on an Android.
1. If you had previously provisioned and registered the ESP32 device, unregister it:
    1. Tap on the device’s entry in the Device List.
    1. Tap the vertical ellipsis icon at the upper right.
    1. Tap `Unregister Device`.
    1. Tap `OK` to confirm.
1. Tap the `+` icon.
1. Tap the list expander icon at the right of the `Advanced` header.
1. Tap `Wifi setup using BLE`.
1. Tap `OK`.
1. Tap `SCAN FOR DEVICES`.
1. Tap on the device you are going to provision. There will normally be only one with a name like `Ayla1234`.
1. Swipe down from the top of the screen to reveal pending notifications.
1. Tap `Pairing request`.
1. Enter `123456`.
1. Tap `OK`.
1. Tap `START DEVICE SCAN FOR APS`.
1. Tap the entry for the Wi-Fi network you want to connect your ESP32 to.
1. Tap the `Show` check box.
1. Tap the `Wi-Fi Password` entry field.
1. Enter the Wi-Fi password for the selected network.
1. Tap the enter key on the keyboard.
1. Tap `CONNECT TO …`.
1. Wait for the message `In demo_cloud_up` on the ESP32 console.
1. Tap `CONFIRM DEVICE CONNECTION`.
1. Tap `REGISTER`.
1. Tap `EXIT SETUP`.
1. Observe the device you just added is displayed in the Device List.

### Understanding how to integrate BLE Wi-Fi Config support

1. Locate and open `examples/ayla_demo/demo_bt.c`, which provides an example of integrating BLE Wi-Fi configuration with an application.
1. Review `demo_bt_init`. This function performs the initialization to start the BLE service. It does the following:
    1. Determines if Wi-Fi has already been configured and returns without starting BLE service, if it has
    1. Initializes the ESP32 hardware and NimBLE stack
    1. Initializes the NimBLE host task configuration structure
    1. Initializes the NimBLE GAP, GATT and config subsystems
    1. Initializes the Ayla Bluetooth abstraction layer
    1. Sets an identify callback function, which, for example, might blink an LED when the identify BLE attribute is written
    1. Initializes the generic Ayla BLE service
    1. Initializes the Ayla connection BLE service
    1. Initializes the Ayla Wi-Fi configuration BLE service
    1. Starts the NimBLE host task
    1. Generates and sets a BLE device name based on the BLE device address
    1. Starts BLE advertisements
1. Review other functions in `demo_bt.c`. Your application will need to implement similar functionality to orchestrate BLE services.
    1. `demo_bt_host_task` implements the host task thread, which executes nimble_port_run to execute the BLE host stack.
    1. `demo_bt_advertise` configures and (re)starts BLE advertisements.
    1. `demo_bt_display_passkey` displays the code the user must enter when pairing. By default the passkey is 123456 for demo purposes. This should be changed to use a random number or other hard to predict value for greater security in production products.
    1. `demo_bt_gap_event_handler` implements handling for BLE GAP events. It orchestrates management of BLE connections. See ESP32 and NimBLE documentation for more information on handling GAP events.
    1. `demo_bt_gatt_register_cb` handles BLE GATT registration events. See ESP32 and NimBLE documentation for more information on handling GATT registration events.
1. Review the BLE configuration of the ESP IDF configured by the Ayla demo application.
    1. `cd $IDF_PATH/examples/ayla_demo`.
    1. `make menuconfig`.
    1. Browse to  `Component config > Bluetooth `.
    1. Browse through all of the Bluetooth configuration, noting option settings, which you will need to make in your application’s IDF configuration later.

### Enabling BLE Wi-Fi support in your application

1. Configure the ESP IDF BLE options to enable the NimBLE Bluetooth stack based on setting used by the Ayla demo application
1. Integrate similar functionality to demo_bt.c into your application to orchestrate BLE operations

### BLE Wi-Fi Configuration Implementation

The Ayla agent implements three BLE GATT services that realize the Wi-Fi configuration and device registration features:

* [Ayla Generic GATT Service](https://docs.aylanetworks.com/archive/ayla-generic-gatt-service-guide)
* [Ayla Connectivity GATT Service](https://docs.aylanetworks.com/archive/ayla-connectivity-gatt-service)
* [Ayla Wi-Fi Configuration GATT Service](https://docs.aylanetworks.com/archive/wi-fi-configuration-gatt-service)

The Ayla GATT services are built on top of generic GATT services provided by the ESP32 NimBLE stack.

The application implements the code to orchestrate BLE services (see `demo_bt.c`), initializing and starting the NimBLE host thread, as well as registering each of the Ayla GATT services. The application manages BLE advertisements, which enable the device to be discovered and connected to. The application manages BLE connections, while the Ayla GATT services implement BLE attributes that provide for Wi-Fi provisioning and registering the device to a specific user account. 

A mobile application uses BLE to discover the device, securely connect to it, instruct the device to scan for Wi-Fi networks, configure the device to connect to a particular Wi-Fi network, and register the device to a specific user.

### Files

* `lib/adb/adb_ayla_svc.*` implements the Ayla generic GATT service.
* `lib/adb/adb_conn_svc.*` implements the Ayla connectivity GATT service.
* `lib/adb/adb_wifi_cfg_svc.*` implements the Ayla Wi-Fi configuration GATT service.
* `lib/adb/adb.*` implements a framework for Ayla’s GATT services.
* `lib/adb/al_bt_esp32.*` implements adaptation layer to ESP32 NimBLE stack.
* `examples/ayla_demo/main/demo_bt.c` implements application orchestration of BLE services.

### Build Switches

The define symbol AYLA_BLUETOOTH_SUPPORT is used as a compile time switch to enable or disable inclusion of Bluetooth features. Defining this symbol enables compilation of Bluetooth support. This symbol is defined by default. It is defined in the following make files:

* `components/ayla/component.mk`
* `examples/ayla_demo/Makefile`