---
title: Installation
layout: ayla-portable-agent-2019-08.html
---

The steps below use two terminals: Host (```$```) and Docker (```#```).

1. Install the [Docker Engine](https://docs.docker.com/get-started/) on your computer.

1. Run the [ubuntu](https://hub.docker.com/_/ubuntu) container image:

    ```
    $ docker run --net=host -it ubuntu bash
    ```

1. Enable multiarch environment (needed to compile Ayla executables):

    ```
    # dpkg --add-architecture i386
    ```

1. Install packages:

    ```
    # apt update
    # apt install nano build-essential net-tools apt-file iproute2 iputils-ping python2.7 python-pip
    # apt install libssl-dev libavahi-client-dev libc6-dev-i386 libssl-dev:i386 libavahi-client-dev:i386
    ```

1. Download pda-http-src-2.3.1-beta.tgz to your computer.

1. Find the Docker Container ID:

    ```
    $ docker ps
    CONTAINER ID    IMAGE       COMMAND     CREATED           STATUS            PORTS       NAMES
    3fec6a3f3796    ubuntu      "bash"      5 seconds ago     Up 5 seconds                  romantic_bardeen
    ```

1. Copy pda-http-src-2.3.1-beta.tgz to your Docker container:

    ```
    $ docker cp /home/matt/Downloads/pda-http-src-2.3.1-beta.tgz 3fec6a3f3796:/root
    ```

1. Unzip the archive file, and change directory:

    ```
    # cd /root
    # tar zxvf pda-http-src-2.3.1-beta.tgz
    # cd /root/pda-http-src-2.3.1-beta
    ```

1. Edit ```ayla/src/libada/client.c```. Modify ```snprintf``` invocations to check for negative return values:

    ```
    if(snprintf(...) < 0) {
      ;
    }
    ```

    Do this in the following three function definitions:

    * client_close_dp_put
    * client_get_dp_loc_req
    * client_cmd_put_rsp

1. Edit ```platform/linux/al_net_dns.c```. Add ```#include <signal.h>```.

1. Edit ```examples/common/demo_cli_client.c```. Change ```if (lr.uri == '\0')``` to ```if (*lr.uri == '\0')```.

1. Build the Ayla executables:

    ```
    # make
    ```

1.  View the results here:

    ```
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
    ```

    Command-line parameters:

    ```
    -k is the OEM Key/Secret.
    -r is the region (e.g. US, CN, EU).
    AC000W000000001.xml is the DSN file downloaded from Ayla Dashboard Portal.
    1234abcd is the OEM ID.
    ledevb is the OEM Model.
    ```

1. View ```~/.pda/persist.conf```, the encrypted, generated configuration file:

    ```
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