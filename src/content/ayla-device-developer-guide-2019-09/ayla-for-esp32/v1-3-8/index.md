---
title: Ayla for ESP32 v1.3.8
layout: ayla-device-developer-guide-2019-09.html
e: block
---

1. Obtain an Espressif [ESP32-DevKitC](https://www.espressif.com/en/products/hardware/esp32-devkitc/overview) board.

1. Download Ayla files to your computer:

    1. [Ayla Agent & Reference Application source code](https://connection.aylanetworks.com/s/article/2648919) (e.g. ```ada-esp-idf-src-x.x.tgz```).

    1. DSN file (e.g. ```AC000W000000001.xml```). See [Reserve a DSN](../../overview/reserve-a-dsn).

1. Determine the computer-to-ESP32 serial port:

    1. List the serial ports on your computer (e.g. ```ls /dev/tty*```).

    1. Connect an ESP32 board to your computer using a serial cable.

    1. List the serial ports again. The new serial port on the list is the one to use (e.g. ```/dev/ttyUSB0```).

1. Install the [Docker Engine](https://docs.docker.com/get-started/) on your computer.

1. Create a Docker [ubuntu](https://hub.docker.com/_/ubuntu) container:

    ```
    $ docker run --net=host --name=aia -w /root -it --device=/dev/ttyUSB0 ubuntu bash
    ```

    You are root, and the current working directory is ```/root```.

1. Prepare your development environment:

    1. Update package list:

        ```
        # apt update
        ```

    1. Install packages. See also [Standard Setup of Toolchain for Linux (Legacy GNU Make)](https://docs.espressif.com/projects/esp-idf/en/latest/get-started-legacy/linux-setup.html).

        ```
        # apt install nano screen gcc git wget make libncurses5-dev flex bison gperf \
        python python-pip python-setuptools python-serial python-cryptography python-future \
        python-pyparsing python-pyelftools
        ```

    1. Create an ```esp``` directory, and change directory:

        ```
        # mkdir esp
        # cd esp
        ```

    1. Download the ESP32 toolchain for 64-bit Linux. See also [Standard Setup of Toolchain for Linux (Legacy GNU Make)](https://docs.espressif.com/projects/esp-idf/en/latest/get-started-legacy/linux-setup.html).

        ```
        # wget https://dl.espressif.com/dl/xtensa-esp32-elf-gcc8_2_0-esp32-2019r1-linux-amd64.tar.gz
        ```

    1. Extract the archive file:

        ```
        # tar -xzf xtensa-esp32-elf-gcc8_2_0-esp32-2019r1-linux-amd64.tar.gz
        ```

    1. Add to the PATH environment variable:

        ```
        # export PATH=$HOME/esp/xtensa-esp32-elf/bin:$PATH
        ```

    1. Download the Espressif ESP-IDF repository:

        ```
        # git clone --recursive https://github.com/espressif/esp-idf.git
        ```

    1. Create the ```IDF_PATH``` environment variable:

        ```
        # export IDF_PATH=$HOME/esp/esp-idf
        ```

    1. Install Python requirements:

    ```
    # pip2 install -r $IDF_PATH/requirements.txt
    ```

1. Optionally, run ```screen``` to verify serial connection from your Docker container to the ESP32 board:

    ```
    # screen /dev/ttyUSB0 115200
    ```

    You may need to press Enter to see the ```screen``` prompt. As a test, enter ```help``` at the prompt to see a list of available commands for the ESP32. To exit ```screen```, press ```Ctrl-A```, then ```k```, then ```y```.

1. Test the development environment: 

    1. Change directory:
    
        ```
        # cd ~/esp/esp-idf/examples/get-started/hello_world
        ```

    1. Optionally, customize configuration. Defaults, however, should work.
    
        ```
        # make menuconfig
        ```

    1. Build the executable:

        ```
        # make
        ```

    1. Flash the executable to the ESP32 board:

        ```
        # make flash
        ```
    
    1. Monitor the executable running on the ESP32 board:

        ```
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

1. Install the Ayla Agent & Reference Application source code:

    1. Revert to the Espressif ESP-IDF version needed for Ayla software:

        ```
# cd ~/esp/esp-idf
# git checkout v3.2
# git submodule update
        ```

    1. In a host terminal, copy ```ada-esp-idf-src-x.x.tgz``` to your Docker container:

        ```
$ docker cp /home/matt/Downloads/ada-esp-idf-src-x.x.tgz aia:/root/esp
        ```

    1. In your Docker terminal, extract the archive file:

        ```
# cd /root/esp
# tar zxvf ada-esp-idf-src-x.x.tgz
        ```

    1. Copy the ```ada-esp-idf-src-x.x``` directory on top of the ```esp-idf``` directory:

        ```
# cp -R ada-esp-idf-src-x.x/* ./esp-idf
        ```

        This diagram gives you an idea of where the Ayla files are copied:

        <img src="copy-ayla.png" width="700">
