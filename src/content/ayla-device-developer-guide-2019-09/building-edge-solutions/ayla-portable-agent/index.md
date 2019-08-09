---
title: Ayla Portable Agent
layout: ayla-device-developer-guide-2019-09.html
c: block
---

1. Open two terminals on your computer referred to below as Host Terminal (```HT```) and Docker Terminal (```DT```).

1. ```DT```: Install the [Docker Engine](https://docs.docker.com/get-started/) on your computer.

1. ```DT```: Run the Docker [ubuntu](https://hub.docker.com/_/ubuntu) container image:

    ```
    $ docker run --net=host --name=Ayla_Portable_Agent -it ubuntu bash
    ```

1. ```DT```: Enable multiarch environment (needed to compile Ayla executables):

    ```
    # dpkg --add-architecture i386
    ```

1. ```DT```: Install packages:

    ```
    # apt update
    # apt install nano build-essential net-tools apt-file iproute2 iputils-ping python2.7 python-pip \
    wpasupplicant wireless-tools rfkill psmisc libssl-dev libavahi-client-dev libc6-dev-i386 libssl-dev:i386 \
    libavahi-client-dev:i386
    ```

1. Download the Ayla Portable Agent (pda-http-src-2.3.1-beta.tgz).

1. ```HT```: Copy the file to your Docker container:

    ```
    $ docker cp /home/matt/Downloads/pda-http-src-2.3.1-beta.tgz Ayla_Portable_Agent:root
    ```

1. ```DT```: Unzip the archive file, and change directory:

    ```
    # cd /root
    # tar zxvf pda-http-src-2.3.1-beta.tgz
    # cd /root/pda-http-src-2.3.1-beta
    ```

1. ```DT```: Fix ```ayla/src/libada/client.c```. Modify ```snprintf``` invocations to check for negative return values:

    ```
    if(snprintf(...) < 0) {
      ;
    }
    ```

    Do this in the following three function definitions:

    * client_close_dp_put
    * client_get_dp_loc_req
    * client_cmd_put_rsp

1. ```DT```: Fix ```platform/linux/al_net_dns.c```. Add ```#include <signal.h>```.

1. ```DT```: Fix ```examples/common/demo_cli_client.c```. Change ```if (lr.uri == '\0')``` to ```if (*lr.uri == '\0')```.

1. ```DT```: Fix ```platform/linux/al_net_if.c```. Add the following to the ```al_net_if_get_kind``` function:

    ```
    else if (!memcmp(name, "wlp3s0", 6)) {
      return AL_IF_K_WLAN;
    }
    ```

1. ```DT```: Build the Ayla executables:

    ```
    # make
    # ls -1 ayla/bin/native  
    altest
    apptest
    ledevb
    wifisetup
    ```

1. ```HT```: Copy the DSN XML file to your Docker container:

    ```
    $ docker cp /home/matt/Downloads/AC000W000000001.xml Ayla_Portable_Agent:root
    ```

1. ```DT```: Generate a configuration file:

    ```
    # pip install rsa
    # cd platform/linux/utils
    # python2.7 conf-gen.py -k 0123456789abcdef0123456789abcdef -r US /root/AC000W000000001.xml 1234abcd ledevb

    The last three command-line parameters are positional:
      -k is the OEM Key/Secret.
      -r is the region (e.g. US, CN, EU).
      AC000W000000001.xml is the DSN file downloaded from Ayla Dashboard Portal.
      1234abcd is the OEM ID.
      ledevb is the OEM Model.
    
    # cat ~/.pda/persist.conf
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

1. ```DT```: Run ```ledevb```:

    ```
    # ./ayla/bin/native/ledevb
    ```

1. ```DT```: Configure the program for developer mode:

    ```
    PWB ledevb> conf set client/server/default 1
    ```

1. ```DT```: Activate the Ayla Agent:

    ```
    PWB ledevb> up
    ```
