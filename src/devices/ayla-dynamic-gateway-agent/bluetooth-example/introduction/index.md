---
title: Introduction
layout: ayla-dynamic-gateway-agent.html
b: block
---

Notes:

1. [MovingTech 4.5W LED Bluetooth Bulb](https://www.amazon.com/gp/product/B01A5JX7BO) ($35.00)
1. [Oregon Scientific AW133 Grill Right Bluetooth BBQ Thermometer](https://www.amazon.com/Oregon-Scientific-AW133-Bluetooth-%20Thermometer/dp/B00JFSW0AQ) ($49.99)
1. [Nordic Semiconductor Multiprotocol Bluetooth LE Proprietary System-on-Chip](https://www.digikey.com/product-detail/en/nordic-semiconductor-asa/NRF52-%20DK/1490-1053-ND/5773879) ($39.00)

[How to setup Bluetooth on a Raspberry Pi 3](https://www.cnet.com/how-to/how-to-setup-bluetooth-on-a-raspberry-pi-3/)

<pre>
$ sudo bluetoothctl
# agent on
# default-agent
# scan on
</pre>

### bluetoothctl

<pre>
$ sudo bluetoothctl
# help
# list
# devices
# info E6:E5:C0:FA:A0:ED
# connect E6:E5:C0:FA:A0:ED
# menu gatt
# attribute-info 00002a29-0000-1000-8000-00805f9b34fb
# select-attribute /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d
</pre>

### Add Template

<pre>
rc |= bt_gatt_db_add_template("2899fe00-c277-48a8-91cb-b29ab0f01ac4", "grillrt", "1.2");

Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009
  2899fe00-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
</pre>

### Add COMMAND Property

<pre>
rc |= bt_gatt_db_add_prop("28998e03-c277-48a8-91cb-b29ab0f01ac4", "ctl", "COMMAND", PROP_STRING, PROP_TO_DEVICE, NULL, NULL);

Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000a
  28998e03-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
</pre>

### Add sensor1 characteristic properties

<pre>
rc |= bt_gatt_add_prop_table("28998e10-c277-48a8-91cb-b29ab0f01ac4", "00", sensor_props, ARRAY_LEN(sensor_props));

Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d
  28998e10-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
</pre>

### Add sensor2 characteristic properties

<pre>
rc |= bt_gatt_add_prop_table("28998e11-c277-48a8-91cb-b29ab0f01ac4", "01", sensor_props, ARRAY_LEN(sensor_props));

Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char0010
  28998e11-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
</pre>

### list-attributes E6:E5:C0:FA:A0:ED

<pre>
# list-attributes E6:E5:C0:FA:A0:ED
Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013
  0000180a-0000-1000-8000-00805f9b34fb
  Device Information
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001d
  00002a29-0000-1000-8000-00805f9b34fb
  Manufacturer Name String
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001d/desc001f
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001a
  00002a26-0000-1000-8000-00805f9b34fb
  Firmware Revision String
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001a/desc001c
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0017
  00002a27-0000-1000-8000-00805f9b34fb
  Hardware Revision String
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0017/desc0019
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014
  00002a24-0000-1000-8000-00805f9b34fb
  Model Number String
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014/desc0016
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009
  2899fe00-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char0010
  28998e11-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char0010/desc0012
  00002902-0000-1000-8000-00805f9b34fb
  Client Characteristic Configuration
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d
  28998e10-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d/desc000f
  00002902-0000-1000-8000-00805f9b34fb
  Client Characteristic Configuration
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000a
  28998e03-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000a/desc000c
  00002902-0000-1000-8000-00805f9b34fb
  Client Characteristic Configuration
Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0008
  00001801-0000-1000-8000-00805f9b34fb
  Generic Attribute Profile
</pre>