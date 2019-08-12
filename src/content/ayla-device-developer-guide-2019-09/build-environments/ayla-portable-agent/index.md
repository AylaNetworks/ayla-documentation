---
title: Ayla Portable Agent
layout: ayla-device-developer-guide-2019-09.html
c: block
---



This page shows you how to compile and run ```ledevb```, a command-line program composed of a host application and the Ayla Portable Agent which, together, represent an edge device. The directions also show you how to connect ```ledevb``` to an Ayla Cloud account, and how to register it to your Ayla user. 

1. Install the [Docker Engine](https://docs.docker.com/get-started/) on your computer.

1. Run the Docker [ubuntu](https://hub.docker.com/_/ubuntu) container image:

    ```
    $ docker run --net=host --name=pda -w /root -it ubuntu bash
    ```

    You are root, and the current working directory is ```/root```.

1. Enable multiarch environment (needed to compile Ayla executables):

    ```
    # dpkg --add-architecture i386
    ```

1. Install packages:

    ```
    # apt update
    # apt install nano git build-essential python2.7 python-pip \
    iproute2 net-tools wireless-tools iputils-ping rfkill psmisc \
    libssl-dev libssl-dev:i386 libavahi-client-dev libavahi-client-dev:i386 libc6-dev-i386
    ```

1. Clone the Ayla Portable Agent repository:

    ```
    # git clone https://github.com/AylaNetworks/pda-http-src pda
    ```

    If, rather than using ```git clone```, you download ```pda-http-src-x.x.x.tgz``` to your host computer, use a second terminal to copy the archive file from your host computer to the Docker container:

    ```
    $ docker cp /home/matt/Downloads/pda-http-src-x.x.x.tgz pda:/root
    ```

    Then, in the Docker container terminal, unzip the archive file:

    ```
    # tar zxvf pda-http-src-x.x.x.tgz
    # mv pda-http-src-x.x.x pda
    ```

1. Fix ```./pda/ayla/src/libada/client.c```. Modify ```snprintf``` invocations to check for negative return values:

    ```
    if(snprintf(...) < 0) {
      ;
    }
    ```

    Do this in the following three function definitions:

    * client_close_dp_put
    * client_get_dp_loc_req
    * client_cmd_put_rsp

1. Fix ```./pda/platform/linux/al_net_dns.c```. Add ```#include <signal.h>```.

1. Fix ```./pda/examples/common/demo_cli_client.c```. Change ```if (lr.uri == '\0')``` to ```if (*lr.uri == '\0')```.

1. Fix ```./pda/platform/linux/al_net_if.c```. Add the following to the ```al_net_if_get_kind``` function:

    ```
    else if (!memcmp(name, "wlp3s0", 6)) {
      return AL_IF_K_WLAN;
    }
    ```

1. Build the Ayla executables:

    ```
    # make -C ./pda
    # ls -1 ./pda/ayla/bin/native  
    altest
    apptest
    ledevb
    wifisetup
    ```

1. Copy the DSN XML file from your host machine to your Docker container:

    ```
    $ docker cp /home/matt/Downloads/AC000W000000001.xml pda:/root
    ```

1. Generate a configuration file:

    ```
    # pip install rsa
    # python2.7 ./pda/platform/linux/utils/conf-gen.py -k 0123456789abcdef0123456789abcdef -r US ./AC000W000000001.xml 1234abcd ledevb

    The last three command-line parameters are positional:
      -k is the OEM Key/Secret.
      -r is the region (e.g. US, CN, EU).
      AC000W000000001.xml is the DSN file downloaded from Ayla Dashboard Portal.
      1234abcd is the OEM ID.
      ledevb is the OEM Model.
    
    # cat ./.pda/persist.conf
    {
      "factory": {
        "device_dsn": "QUMwMDBXMDA3MTI2ODEx", 
        "device_key": "MIIBC...", 
        "oem_id": "MGJiYjExMmU=", 
        "oem_key": "i/AJ+I7...", 
        "oem_model": "bGVkZXZi", 
        "service_region": "VVM="
      }, 
      "startup": {}
    }
    ```

1. Run the ```ledevb``` Host App + Ayla Agent application:

    ```
    # ./pda/ayla/bin/native/ledevb
    ```

1. Configure the program for developer mode:

    ```
    PWB ledevb> conf set client/server/default 1
    ```

1. Activate the Ayla Agent:

    ```
    PWB ledevb> up
    ```
