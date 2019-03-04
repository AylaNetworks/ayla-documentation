---
title: Agent API
layout: ayla-production-modules.html
c: block
---

Host applications like [appd](https://github.com/AylaNetworks/device_linux_public/tree/master/app/appd) use the data structures and functions declared and described in the following header files to communicate with the Ayla Agent ([devd](https://github.com/AylaNetworks/device_linux_public/tree/master/daemon/devd)).

### libapp.a 

* [app.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/app/include/app/app.h) - These functions enable the application to initialize internal library components and register callbacks.
* [msg_client.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/app/include/app/msg_client.h) - These functions manage the messaging interface to devd, and are primarily used by other libraries. However, some functions are exported for use by customer applications.
* [ops.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/app/include/app/ops.h) - These functions provide a queue for commands sent to devd, and are primarily used by other libraries. However, some functions are exported for use by customer applications.
* [props.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/app/include/app/props.h) - These functions enable the application to transfer data items to and from the Ayla Agent. A data item is called a property which is defined by the prop struct. The Ayla Agent, in turn, transfers properties to and from the Ayla Cloud on behalf of the customer application.

### libayla.a

* [file_event.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/ayla/include/ayla/file_event.h) - These functions enable an application to poll for events on files and sockets.
* [timer.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/ayla/include/ayla/timer.h) - These functions enable the application to schedule callbacks.

### libplatform.a

* [conf.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/platform/include/platform/conf.h) - These two functions, platform_conf_read and platform_conf_write, are used to read/write platform-specific configuration information.
* [crypto.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/platform/include/platform/crypto.h) - This file contains functions to optionally configure crypto_state structures with custom encryption and decryption routines.  If implemented, these will be called by ayla/crypto.h and override the default Openssl routines.
* [ota.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/platform/include/platform/ota.h) - These functions control over-the-air updates.
* [system.h](https://github.com/AylaNetworks/device_linux_public/blob/master/lib/platform/include/platform/system.h) - These functions implement platform-specific ways to perform resets and get information like a mac address.
