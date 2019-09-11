---
title: Guide to Ayla ESP32 Solution v1.3.8
layout: ayla-developer-guide-2019-09.html
c: block
---

<a href="../"><img src="/assets/images/angle-left.svg" style="display:inline;margin:0px;" width="12px" height="24px">&nbsp;&nbsp;Ayla ESP32 Solution</a> summary page.

This page provides directions for building an Ayla ESP32 v1.3.8 solution using a GCC/Windows development environment.

## Build, Configure, Run, Connect, Register

1. Obtain an Espressif [ESP32-DevKitC](https://www.espressif.com/en/products/hardware/esp32-devkitc/overview) board.

1. [Create an Ayla user account](../../../common-tasks/create-a-user-account).

1. [Reserve a DSN](../../../common-tasks/reserve-a-dsn).

1. [Create a template](../../../common-tasks/create-a-template) with the following details:
    <table>
    <tr><td>Visibility:</td><td>oem</td></tr>
    <tr><td>Name:</td><td>ADA ESP v1.3.8</td></tr>
    <tr><td>Description:</td><td>ADA ESP v1.3.8</td></tr>
    <tr><td>Registration:</td><td>Dsn</td></tr>
    <tr><td>Model:</td><td>ledevb</td></tr>
    <tr><td>Version:</td><td>ada-esp-idf-src-1.3.8</td></tr>
    <tr><td>Properties:</td>
    <td style="padding:0; border-color:black;"><pre style="margin:0;">
base_type,direction,name,scope
boolean,output,Blue_button,user
boolean,input,Blue_LED,user
string,input,cmd,user
decimal,input,decimal_in,user
decimal,output,decimal_out,user
boolean,input,Green_LED,user
integer,input,input,user
string,output,log,user
integer,output,output,user
string,output,version,user</pre></td></tr>
    </table>

1. Download [Ayla source code](https://connection.aylanetworks.com/s/article/2648919) (ada-esp-idf-src-1.3.8.tgz).

1. Determine the computer-to-ESP32 COM port:

    1. Run Windows Device Manager, and expand ```Ports```.

    1. Connect an ESP32 board to your computer using a serial cable.

    1. Note the new COM port (e.g. "```Silicon Labs CP210x USB to UART Bridge (COM3)```") on the list.

1. Browse to [Standard Setup of Toolchain for Windows](https://docs.espressif.com/projects/esp-idf/en/v3.2.2/get-started/windows-setup.html), and complete "Toolchain Setup" and "Check it Out" only.

1. Clone the [Espressif IoT Development Framework](https://github.com/espressif/esp-idf):

    ```
    $ cd ~/esp
    $ git clone -b v3.1-beta1 --recursive https://github.com/espressif/esp-idf.git esp-idf-v3.1-beta1
    ```

1. Add IDF_PATH to user profile. 

    1. Create a script file named ```export_idf_path.sh``` in ```C:/msys32/etc/profile.d/```.

    1. Identify the path to ESP-IDF directory. It is specific to your system configuration and may look something like ```C:\msys32\home\user-name\esp\esp-idf-v3.1-beta1```.

    1. Add the export command to the script file replacing backslashes with forward slashes, e.g.:

        ```
      $ export IDF_PATH="C:/msys32/home/user-name/esp/esp-idf-v3.1-beta1"
        ```

    1. Save the file, close the MSYS2 window, re-open it, and verify the IDF_PATH:

        ```
      $ printenv IDF_PATH
        ```

1. Install Patching with MSYS2 run:

    ```
  $ pacman -S patch
    ```

1. Test the development environment with the hello_world example:

    1. Change directory:
    
        ```
      # cd $IDF_PATH/examples/get-started/hello_world
        ```

    1. Customize configuration. (Defaults should be fine.)
    
        ```
      # make menuconfig
        ```

    1. Build, flash, and monitor:

        ```
      # make
      # make flash
      # make monitor
        ```

        Output appears similar to this:

        ```
      Toolchain path: /root/esp/xtensa-esp32-elf/bin/xtensa-esp32-elf-gcc
      Toolchain version: esp32-2019r1
      Compiler version: 8.2.0
      ...
      ...
      Hello world!
      This is ESP32 chip with 2 CPU cores, WiFi/BT/BLE, silicon revision 1, 4MB external flash
      Restarting in 10 seconds...
      Restarting in 9 seconds...
      ...
      ...
        ```

        Press ```Ctl``` + ```]``` to exit the monitor.

1. Install Ayla source code:

    1. Extract the archive file:

        ```
      # cd ~/esp
      # tar zxvf ada-esp-idf-src-1.3.8.tgz
        ```

    1. Copy the ```ada-esp-idf-src-1.3.8``` directory on top of the ```esp-idf-v3.1-beta1``` directory:

        ```
      # cp -R ada-esp-idf-src-1.3.8/* ./esp-idf-v3.1-beta1
        ```

        This diagram gives you an idea of where the Ayla files are copied:

        <img src="copy-ayla.png" width="700">

1. Configure and build the Ayla agent and host application:

    1. Change directory:

        ```
      # cd $IDF_PATH/examples/ayla_demo
        ```

    1. Edit ```./main/conf.h```. Set the following:

        ```
      #define DEMO_OEM_ID           "00000000" /* replace with your Ayla OEM ID */
      #define DEMO_TEMPLATE_VERSION "ada-esp-idf-src-1.3.8"
        ```

    1. Run ```make menuconfig``` to set ```Serial flasher config > Default serial port``` to the correct COM port.
    
    1. Build, flash, and monitor:

        ```
      # make
      # make erase_flash
      # make flash
      # make monitor
        ```

    1. Configure networking and security (use ```log debug all``` for maximum visibility):

        ```
      # nvs-set ada.f.wifi/profile/0/ssid <ssid>
      # nvs-set ada.f.wifi/profile/0/security <security_type> # 0=none, 3=wpa, 4=wpa2
      # nvs-set ada.f.wifi/profile/0/key <passphrase>
      # nvs-set ada.f.wifi/profile/0/enable 1
      # nvs-set "ada.f.id/dev_id" AC000W000000001
      # nvs-set "ada.f.id/key" MIIB... (long number)
      # nvs-set ada.f.client/server/default 1
      # esp-reboot
        ```
        ```
      # oem key 0123456789abcdef0123456789abcdef ledevb
      # save
        ```

1. [Register your device](../../../common-tasks/register-a-device).
