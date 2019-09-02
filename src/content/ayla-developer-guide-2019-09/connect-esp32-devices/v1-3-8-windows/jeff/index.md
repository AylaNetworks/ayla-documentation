---
title: Jeff's Instructions
layout: ayla-developer-guide-2019-09.html
e: block
---

1. Download [All-in-one toolchain with GNU-compatible environment (MSYS2)](https://dl.espressif.com/dl/esp32_win32_msys2_environment_and_toolchain-20181001.zip)

1. Unzip the zip file to ```C:\``` (or some other location, but this guide assumes C:\) and it will create an msys32 directory with a pre-prepared environment.

1. MSYS2 MINGW32 terminal window by running ```C:\msys32\mingw32.exe```.

1. Create a directory named ```esp``` that is a default location to develop ESP32 applications

    ```
  mkdir -p ~/esp
    ```

1. Move to the new esp directory:

    ```
  cd ~/esp
    ```

1. Clone the esp-idf to the ~/esp/. NOTE: as of 4/5/2019 the Ayla code has only been tested with the esp-idf-v3.1-beta1.

    ```
  git clone -b v3.1-beta1 --recursive https://github.com/espressif/esp-idf.git esp-idf-v3.1-beta1
    ```

1. Add IDF_PATH to user profile. 

    1. Create a new script file in ```C:/msys32/etc/profile.d/``` directory named ```export_idf_path.sh```.

    1. Identify the path to ESP-IDF directory. It is specific to your system configuration and may look something like ```C:\msys32\home\user-name\esp\esp-idf-v3.1-beta1```.

    1. Add the export command to the script file replacing backslashes with forward slashes, e.g.:

        ```
      export IDF_PATH="C:/msys32/home/user-name/esp/esp-idf-v3.1-beta1"
        ```

    1. Save the Script file.

    1. Close the MSYS2 window then re-open it. 

    1. Check the IDF_PATH:

        ```
      printenv IDF_PATH
        ```

1. Install required Python packages:

    ```
  python -m pip install --user -r $IDF_PATH/requirements.txt
    ```

1. Install Patching with MSYS2 run:

    ```
  pacman -S patch
    ```

1. Install Ayla:

    1. Download [Ayla Espressif ESP32 source code](https://connection.aylanetworks.com/s/article/2648919).

    1. [Follow these instructions](https://docs.aylanetworks.com/content/ayla-on-an-esp32-dev-kit-2019-02/guide/install-ayla/).

    1. Connect a ESP32 Dev Kit to the computer’s USB.

    1. Check the COM port in Device Manager.

    1. Navigate to ```/msys32/home/user-name/esp/esp-idf-v3.1-beta1/examples/ayla_demo/```.

    1. Run the Configuration tool:

        ```
      make menuconfig
        ```

    1. Navigate to ```Serial flasher config > Default serial port```, and specify the serial (```COM```) port associated with the ESP32 kit. Confirm selection by pressing Enter, save the configuration, and exit menuconfig.

    1. Build, flash, and monitor:

        ```
      make
      make flash
      make monitor
        ```
