---
title: Ayla Linux Agent API
layout: devices-ayla-linux-agent.html
c: block
---

Host applications like [appd](https://github.com/AylaNetworks/device_linux_public/tree/master/app/appd) use the data structures and functions contained in the following libraries, and declared and described in the following header files, to communicate with the Ayla Agent ([devd](https://github.com/AylaNetworks/device_linux_public/tree/master/daemon/devd)).

# libapp.a 

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/app/include/app/app.h">app.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These functions enable the application to initialize internal library components and register callbacks.
</div>
</div>

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/app/include/app/msg_client.h">msg_client.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These functions manage the messaging interface to devd, and are primarily used by other libraries. However, some functions are exported for use by customer applications.
</div>
</div>

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/app/include/app/ops.h">ops.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These functions provide a queue for commands sent to devd, and are primarily used by other libraries. However, some functions are exported for use by customer applications.
</div>
</div>

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/app/include/app/props.h">props.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These functions enable the application to transfer data items to and from the Ayla Agent. A data item is called a property which is defined by the prop struct. The Ayla Agent, in turn, transfers properties to and from the Ayla Cloud on behalf of the customer application.
</div>
</div>

# libayla.a

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/ayla/include/ayla/file_event.h">file_event.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These functions enable an application to poll for events on files and sockets.
</div>
</div>

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/ayla/include/ayla/timer.h">timer.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These functions enable the application to schedule callbacks.
</div>
</div>

# libplatform.a

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/platform/include/platform/conf.h">conf.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These two functions, platform_conf_read and platform_conf_write, are used to read/write platform-specific configuration information.
</div>
</div>

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/platform/include/platform/crypto.h">crypto.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
This file contains functions to optionally configure crypto_state structures with custom encryption and decryption routines.  If implemented, these will be called by ayla/crypto.h and override the default Openssl routines.
</div>
</div>

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/platform/include/platform/ota.h">ota.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These functions control over-the-air updates.
</div>
</div>

<div class="row hspace">
<div class="col-lg-3 col-md-5 col-sm-12">
<a href="https://github.com/AylaNetworks/device_linux_public/blob/master/lib/platform/include/platform/system.h">system.h</a>
</div>
<div class="col-lg-9 col-md-7 col-sm-12">
These functions implement platform-specific ways to perform resets and get information like a mac address.
</div>
</div>

