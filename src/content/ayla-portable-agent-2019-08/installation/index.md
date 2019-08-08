---
title: Installation
layout: ayla-portable-agent-2019-08.html
---

The steps below use two terminals: Host (```$```) and Docker (```#```).

1. Install the [Docker Engine](https://docs.docker.com/get-started/) on your computer.

1. Run the [ubuntu](https://hub.docker.com/_/ubuntu) container image:

    ```
    $ docker run --net=host --name=Ayla_Portable_Agent -it ubuntu bash
    ```

1. Enable multiarch environment (needed to compile Ayla executables):

    ```
    # dpkg --add-architecture i386
    ```

1. Install packages:

    ```
    # apt update
    # apt install nano build-essential net-tools apt-file iproute2 iputils-ping python2.7 python-pip tree \
    wpasupplicant wireless-tools rfkill psmisc libssl-dev libavahi-client-dev libc6-dev-i386 libssl-dev:i386 \
    libavahi-client-dev:i386
    ```

1. Download pda-http-src-2.3.1-beta.tgz to your computer.

1. Copy pda-http-src-2.3.1-beta.tgz to your Docker container:

    ```
    $ docker cp /home/matt/Downloads/pda-http-src-2.3.1-beta.tgz Ayla_Portable_Agent:root
    ```

1. Unzip the archive file, and change directory:

    ```
    # cd /root
    # tar zxvf pda-http-src-2.3.1-beta.tgz
    # cd /root/pda-http-src-2.3.1-beta
    ```

1. Fix ```ayla/src/libada/client.c```. Modify ```snprintf``` invocations to check for negative return values:

    ```
    if(snprintf(...) < 0) {
      ;
    }
    ```

    Do this in the following three function definitions:

    * client_close_dp_put
    * client_get_dp_loc_req
    * client_cmd_put_rsp

1. Fix ```platform/linux/al_net_dns.c```. Add ```#include <signal.h>```.

1. Fix ```examples/common/demo_cli_client.c```. Change ```if (lr.uri == '\0')``` to ```if (*lr.uri == '\0')```.

1. Fix ```platform/linux/al_net_if.c```. Add the following to the ```al_net_if_get_kind``` function:

    ```
    else if (!memcmp(name, "wlp3s0", 6)) {
      return AL_IF_K_WLAN;
    }
    ```

1. Build the Ayla executables:

    ```
    # make
    # ls -1 ayla/bin/native  
    altest
    apptest
    ledevb
    wifisetup
    ```

1. Generate a configuration file:

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

1. Run ```ledevb```:

    ```
    # ./ayla/bin/native/ledevb
    ```

1. Configure the program for developer mode:

    ```
    PWB ledevb> conf set client/server/default 1
    ```

1. Activate the Ayla Agent:

    ```
    PWB ledevb> up
    ```
