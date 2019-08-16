---
title: Ayla Portable Solution v2.3.1-beta
layout: ayla-device-developer-guide-2019-09.html
g: block
---

1. Download Ayla files to your computer:

    1. [Ayla Agent & Reference Application source code](https://connection.aylanetworks.com/s/article/Ayla-Portable-Device-Agent-Source-Code) (e.g. ```pda-http-src-x.x.x.tgz```).

    1. DSN file (e.g. ```AC000W000000001.xml```). See [Reserve a DSN](../../overview/reserve-a-dsn).

1. Install the [Docker Engine](https://docs.docker.com/get-started/) on your computer.

1. Create a Docker [ubuntu](https://hub.docker.com/_/ubuntu) container:

    ```
    $ docker run --net=host --name=pda -w /root -it ubuntu bash
    ```

    You are root, and the current working directory is ```/root```.

1. Prepare your development environment:

    1. Enable multiarch environment (needed to compile Ayla executables):

        ```
        # dpkg --add-architecture i386
        ```

    1. Update package list:

        ```
        # apt update
        ```

    1. Install packages:

        ```
        # apt install nano git build-essential python2.7 python-pip \
        iproute2 net-tools wireless-tools iputils-ping rfkill psmisc \
        libssl-dev libssl-dev:i386 libavahi-client-dev libavahi-client-dev:i386 libc6-dev-i386
        ```

1. Install the Ayla Agent & Reference Application source code:

    1. In a host terminal, copy ```pda-http-src-x.x.x.tgz``` to your Docker container:

        ```
        $ docker cp /home/matt/Downloads/pda-http-src-x.x.x.tgz pda:/root
        ```

    1. In your Docker terminal, extract the archive file, and, optionally, rename the resulting directory:

        ```
        # tar zxvf pda-http-src-x.x.x.tgz
        # mv pda-http-src-x.x.x pda
        ```

1. <span style="color:red;">Fix Ayla source code issues</span>:

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

1. Configure ```ledevb``` to use the template you created in [Create a template](../../get-started/create-a-template):

    1. Edit ```./pda/examples/ledevb/demo_ledevb.c```.

    1. Search for ```demo_host_version```, and set the template version:

        ```
        static char demo_host_version[] = "ayla-starter-template-1-0";
        ```
    
    1. Save the file.

1. Build the Ayla executables:

    ```
    # cd pda
    # make
    # ls -1 ./ayla/bin/native  
    altest
    apptest
    ledevb
    wifisetup
    ```

1. Create a configuration file for ```ledevb```:

    1. In a host terminal, copy the DSN XML file to your Docker container:

        ```
        $ docker cp /home/matt/Downloads/Reserve_JobId_123456/AC000W000000001.xml pda:/root
        ```

    1. In your Docker terminal, generate a configuration file:

        ```
        # cd /root
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

1. Run ```ledevb```:

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

    Output should be similar to the following:

    ```
    [pda] 20:02:59.936 i c client: ada_client_up: IP 192.168.1.6
    PWB ledevb> [pda] 20:02:59.936 i c client: get DSN AC000W000000001
    [pda] 20:03:00.017 i c client: DNS: host ads-dev.aylanetworks.com at 100.25.244.184
    [pda] 20:03:00.424 i c client: module name "AC000W000000001" key 1234567.
    [pda] 20:03:00.424 i c client: listen enabled
    [pda] 20:03:00.504 i c notify: ANS server ans.aylanetworks.com at 54.210.207.229
    [pda] 20:03:00.570 i c client: ANS check event
    ```

    The Ayla Cloud should create a digital twin (in the cloud) with all the properties defined in the template you specified, and it should pair ```ledevb``` with the new digital twin. As indicated in the output above, the unique id of the digital twin is ```1234567```. The DSN and the default name are ```AC000W000000001```.
