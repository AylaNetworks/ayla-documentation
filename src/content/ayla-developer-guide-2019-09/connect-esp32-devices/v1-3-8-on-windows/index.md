---
title: Ayla ESP32 Solution v1.3.8 (Build on Windows)
layout: ayla-developer-guide-2019-09.html
e: block
---

<span style="color:red;">Under Construction.</span>

## Build, Configure, Run, Connect, Register

1. Obtain an Espressif [ESP32-DevKitC](https://www.espressif.com/en/products/hardware/esp32-devkitc/overview) board.

1. [Create an Ayla user account](../../common-tasks/create-a-user-account).

1. [Reserve a DSN](../../common-tasks/reserve-a-dsn).

1. [Create a template](../../common-tasks/create-a-template) with the following properties and details:

    1. Properties:

        ```
      base_type,direction,name,scope
      boolean,output,Blue_button,oem
      boolean,input,Blue_LED,oem
      string,input,cmd,oem
      decimal,input,decimal_in,oem
      decimal,output,decimal_out,oem
      boolean,input,Green_LED,oem
      integer,input,input,oem
      string,output,log,oem
      integer,output,output,oem
      string,output,version,oem
        ```

    1. Details:

        * Visibility: ```oem```
        * Name: ```ADA ESP v1.3.8```
        * Description: ```ADA ESP v1.3.8```
        * Registration: ```Dsn```
        * Model: ```ledevb```
        * Version: ```ada-esp-idf-src-1.3.8```

1. Download [Ayla source code](https://connection.aylanetworks.com/s/article/2648919) (ada-esp-idf-src-1.3.8.tgz).

1. Determine the computer-to-ESP32 COM port:

    1. Run Windows Device Manager, and expand ```Ports```.

    1. Connect an ESP32 board to your computer using a serial cable.

    1. Note the new COM port (e.g. "```Silicon Labs CP210x USB to UART Bridge (COM3)```") on the list.

1. Browse to [Standard Setup of Toolchain for Windows](https://docs.espressif.com/projects/esp-idf/en/v3.2.2/get-started/windows-setup.html), and perform "Toolchain Setup" and "Check it Out". Do not proceed to "Next Steps".

