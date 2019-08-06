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

1. Find the Docker Container ID:

    ```
    $ docker ps
CONTAINER ID    IMAGE       COMMAND     CREATED           STATUS            PORTS       NAMES
ba820ce1a2d0    ubuntu      "bash"      5 seconds ago     Up 5 seconds                  romantic_bardeen
    ```

1. Install build essentials, etc.:

    ```
    # apt update
    # apt install nano build-essential net-tools apt-file iproute2 iputils-ping python2.7 python-pip python3.6
    ```

1. Download pda-http-src-2.3.1-beta.tgz to your computer.
1. Copy pda-http-src-2.3.1-beta.tgz to your Docker container:

    ```
    $ docker cp /home/matt/Downloads/pda-http-src-2.3.1-beta.tgz 447da344853a:/root
    ```

1. Unzip the archive file:

    ```
    # cd root
    # tar zxvf pda-http-src-2.3.1-beta.tgz
    ```

1. Install additional build libraries:

    ```
    # apt-get install -y libssl-dev
    # apt-get install -y libavahi-client-dev
    ```

1. Install 32-bit libraries:

    ```
    # dpkg --add-architecture i386
    # apt update
    # apt-get install -y libc6-dev-i386
    # apt-get install -y libssl-dev:i386
    # apt-get install -y libavahi-client-dev:i386
    ```

1. Change directory:

    ```
    # cd pda-http-src-2.3.1-beta
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

1. Build ```ledevb```:

    ```
    # make
    ```

1. Generate a configuration file:

    ```
    # cd platform/linux/utils
    # pip install rsa
    # python2.7 conf-gen.py -k 0123456789abcdef0123456789abcdef -r US AC000W000000001.xml 1234abcd ledevb
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
