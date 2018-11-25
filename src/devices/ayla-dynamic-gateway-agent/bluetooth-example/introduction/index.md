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
Discovery started
[CHG] Controller B8:27:EB:80:7B:CC Discovering: yes
[NEW] Device E6:E5:C0:FA:A0:ED IDTQ133A
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -36
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -44
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -61
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -47
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -32
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -47
</pre>

### bluetoothctl

<pre>
$ sudo bluetoothctl

# help
Available commands:
------------------- 
advertise                                         Advertise Options Submenu
scan                                              Scan Options Submenu
gatt                                              Generic Attribute Submenu
list                                              List available controllers
show [ctrl]                                       Controller information
select <ctrl>                                     Select default controller
devices                                           List available devices
paired-devices                                    List paired devices
system-alias <name>                               Set controller alias
reset-alias                                       Reset controller alias
power <on/off>                                    Set controller power
pairable <on/off>                                 Set controller pairable mode
discoverable <on/off>                             Set controller discoverable mode
agent <on/off/capability>                         Enable/disable agent with given capability
default-agent                                     Set agent as the default one
advertise <on/off/type>                           Enable/disable advertising with given type
set-alias <alias>                                 Set device alias
scan <on/off>                                     Scan for devices
info [dev]                                        Device information
pair [dev]                                        Pair with device
trust [dev]                                       Trust device
untrust [dev]                                     Untrust device
block [dev]                                       Block device
unblock [dev]                                     Unblock device
remove <dev>                                      Remove device
connect <dev>                                     Connect device
disconnect [dev]                                  Disconnect device
menu <name>                                       Select submenu
version                                           Display version
quit                                              Quit program
exit                                              Quit program
help                                              Display help about this program

# list
Controller B8:27:EB:80:7B:CC rpi [default]

# devices
Device E6:E5:C0:FA:A0:ED IDTQ133A # This is the Grillright

# info E6:E5:C0:FA:A0:ED
Device E6:E5:C0:FA:A0:ED (random)
  Name: IDTQ133A
  Alias: IDTQ133A
  Paired: no
  Trusted: yes
  Blocked: no
  Connected: no
  LegacyPairing: no
  UUID: Generic Access Profile    (00001800-0000-1000-8000-00805f9b34fb)
  UUID: Generic Attribute Profile (00001801-0000-1000-8000-00805f9b34fb)
  UUID: Device Information        (0000180a-0000-1000-8000-00805f9b34fb)
  UUID: Battery Service           (0000180f-0000-1000-8000-00805f9b34fb)
  UUID: Vendor specific           (2899fe00-c277-48a8-91cb-b29ab0f01ac4)

# connect E6:E5:C0:FA:A0:ED
Attempting to connect to E6:E5:C0:FA:A0:ED
[CHG] Device E6:E5:C0:FA:A0:ED Connected: yes
Connection successful
[NEW] Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0008
  00001801-0000-1000-8000-00805f9b34fb
  Generic Attribute Profile
[NEW] Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009
  2899fe00-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
[NEW] Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000a
  28998e03-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
[NEW] Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000a/desc000c
  00002902-0000-1000-8000-00805f9b34fb
  Client Characteristic Configuration
[NEW] Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d
  28998e10-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
[NEW] Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d/desc000f
  00002902-0000-1000-8000-00805f9b34fb
  Client Characteristic Configuration
[NEW] Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char0010
  28998e11-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
[NEW] Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char0010/desc0012
  00002902-0000-1000-8000-00805f9b34fb
  Client Characteristic Configuration
[NEW] Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013
  0000180a-0000-1000-8000-00805f9b34fb
  Device Information
[NEW] Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014
  00002a24-0000-1000-8000-00805f9b34fb
  Model Number String
[NEW] Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014/desc0016
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
[NEW] Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0017
  00002a27-0000-1000-8000-00805f9b34fb
  Hardware Revision String
[NEW] Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0017/desc0019
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
[NEW] Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001a
  00002a26-0000-1000-8000-00805f9b34fb
  Firmware Revision String
[NEW] Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001a/desc001c
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
[NEW] Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001d
  00002a29-0000-1000-8000-00805f9b34fb
  Manufacturer Name String
[NEW] Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001d/desc001f
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
[CHG] Device E6:E5:C0:FA:A0:ED ServicesResolved: yes

# menu gatt
Menu gatt:
Available commands:
-------------------
list-attributes [dev]                             List attributes
select-attribute <attribute/UUID>                 Select attribute
attribute-info [attribute/UUID]                   Select attribute
read                                              Read attribute value
write <data=xx xx ...>                            Write attribute value
acquire-write                                     Acquire Write file descriptor
release-write                                     Release Write file descriptor
acquire-notify                                    Acquire Notify file descriptor
release-notify                                    Release Notify file descriptor
notify <on/off>                                   Notify attribute value
register-application [UUID ...]                   Register profile to connect
unregister-application                            Unregister profile
register-service <UUID>                           Register application service.
unregister-service <UUID/object>                  Unregister application service
register-characteristic <UUID> <Flags=read,write,notify...> Register application characteristic
unregister-characteristic <UUID/object>           Unregister application characteristic
register-descriptor <UUID> <Flags=read,write...>  Register application descriptor
unregister-descriptor <UUID/object>               Unregister application descriptor
back                                              Return to main menu
version                                           Display version
quit                                              Quit program
exit                                              Quit program
help                                              Display help about this program

# list-attributes E6:E5:C0:FA:A0:ED
Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0008
  00001801-0000-1000-8000-00805f9b34fb
  Generic Attribute Profile
Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009
  2899fe00-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000a
  28998e03-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000a/desc000c
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
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char0010
  28998e11-c277-48a8-91cb-b29ab0f01ac4
  Vendor specific
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char0010/desc0012
  00002902-0000-1000-8000-00805f9b34fb
  Client Characteristic Configuration
Primary Service
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013
  0000180a-0000-1000-8000-00805f9b34fb
  Device Information
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014
  00002a24-0000-1000-8000-00805f9b34fb
  Model Number String
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014/desc0016
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
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001a
  00002a26-0000-1000-8000-00805f9b34fb
  Firmware Revision String
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001a/desc001c
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format
Characteristic
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001d
  00002a29-0000-1000-8000-00805f9b34fb
  Manufacturer Name String
Descriptor
  /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char001d/desc001f
  00002904-0000-1000-8000-00805f9b34fb
  Characteristic Format

# attribute-info 00002a29-0000-1000-8000-00805f9b34fb
Characteristic - Manufacturer Name String
  UUID: 00002a29-0000-1000-8000-00805f9b34fb
  Service: /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013
  Flags: read

# select-attribute /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d
[CHG] Attribute /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d Value:
  01 18 10 00 00 00 00 00 00 00 aa 05 ff 8f ff ff  ................
[CHG] Attribute /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d Value:
  01 18 10 00 00 00 00 00 00 00 aa 05 ff 8f ff ff  ................
[CHG] Attribute /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d Value:
  01 18 10 00 00 00 00 00 00 00 aa 05 ff 8f ff ff  ................
[CHG] Attribute /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0009/char000d Value:
  01 18 10 00 00 00 00 00 00 00 aa 05 ff 8f ff ff  ................

select-attribute /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014
[IDTQ133A:/service0013/char0014]# read
Attempting to read /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014
[CHG] Attribute /org/bluez/hci0/dev_E6_E5_C0_FA_A0_ED/service0013/char0014 Value:
  41 57 31 33 33                                   AW133           
  41 57 31 33 33                                   AW133

# info
Device E6:E5:C0:FA:A0:ED (random)
  Name: IDTQ133A
  Alias: IDTQ133A
  Paired: no
  Trusted: yes
  Blocked: no
  Connected: yes
  LegacyPairing: no
  UUID: Generic Access Profile    (00001800-0000-1000-8000-00805f9b34fb)
  UUID: Generic Attribute Profile (00001801-0000-1000-8000-00805f9b34fb)
  UUID: Device Information        (0000180a-0000-1000-8000-00805f9b34fb)
  UUID: Battery Service           (0000180f-0000-1000-8000-00805f9b34fb)
  UUID: Vendor specific           (2899fe00-c277-48a8-91cb-b29ab0f01ac4)
</pre>