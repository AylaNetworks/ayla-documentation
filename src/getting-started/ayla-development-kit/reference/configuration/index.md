---
title: Configuration
layout: ayla-development-kit.html
e: block
---

An Ayla Development Kit has three categories of configuration parameters: Factory (f), Startup (s), and Running (r).

<p><a data-toggle="collapse" href="#ooob">View configuration of a reset dev kit</a>.</p>
<pre class="collapse" id="ooob">
f log/mod/1/mask = 15 = 0xf
f log/mod/2/mask = 15 = 0xf
f log/mod/3/mask = 15 = 0xf
f log/mod/4/mask = 15 = 0xf
f log/mod/5/mask = 15 = 0xf
f log/mod/6/mask = 15 = 0xf
f log/mod/7/mask = 15 = 0xf
f log/mod/8/mask = 15 = 0xf
f log/mod/9/mask = 15 = 0xf
f log/mod/10/mask = 15 = 0xf
f log/mod/11/mask = 15 = 0xf
f log/mod/12/mask = 15 = 0xf
f log/client/enable = 1 = 0x1
f wifi/mac_addr = len 6 00 00 00 00 00 00 
f wifi/scan/save_on_ap_connect = 0 = 0x0
f wifi/scan/save_on_server_connect = 1 = 0x1
f sys/reset = 1 = 0x1
f sys/timezone_valid = 0 = 0x0
f sys/timezone = 0 = 0x0
f sys/dst_active = 0 = 0x0
f sys/dst_change = 0 = 0x0
f sys/dst_valid = 0 = 0x0
f sys/host = 124 = 0x7c
f client/lan/enable = 0 = 0x0
f client/server/default = 0 = 0x0
f client/poll_interval = 300 = 0x12c
f client/ssl/enable = 1 = 0x1
f power/mode = 80 = 0x50
f power/awake_time = 10 = 0xa
f power/standby_powered = 300 = 0x12c
f power/unconf_powered = 600 = 0x258
f oem/complete = 0 = 0x0
f metric/client/client/enable = 0 = 0x0
f metric/client/client/poll_interval = 50 = 0x32
f metric/client/client/count = 10 = 0xa
f metric/client/http/enable = 0 = 0x0
f metric/client/http/poll_interval = 50 = 0x32
f metric/client/http/count = 10 = 0xa
f metric/client/ssl/enable = 0 = 0x0
f metric/client/ssl/poll_interval = 50 = 0x32
f metric/client/ssl/count = 10 = 0xa
f metric/client/tcp/enable = 0 = 0x0
f metric/client/tcp/poll_interval = 50 = 0x32
f metric/client/tcp/count = 10 = 0xa
f locale/default = 0 = 0x0
f gpio/enable = 0 = 0x0
f gpio/status/wifi = 0 = 0x0
f gpio/status/server = 0 = 0x0
f gpio/status/setup_mode = 0 = 0x0
f gpio/status/ready = 11 = 0xb
f gpio/status/link = 1 = 0x1
f gpio/status/intr = 12 = 0xc
f gpio/n/0/mode = 0 = 0x0
f gpio/n/1/mode = 75 = 0x4b
f gpio/n/2/mode = 0 = 0x0
f gpio/n/3/mode = 0 = 0x0
f gpio/n/4/mode = 0 = 0x0
f gpio/n/5/mode = 0 = 0x0
f gpio/n/6/mode = 0 = 0x0
f gpio/n/7/mode = 0 = 0x0
f gpio/n/11/mode = 75 = 0x4b
f gpio/n/12/mode = 75 = 0x4b
f gpio/n/18/mode = 0 = 0x0
f gpio/n/29/mode = 0 = 0x0
f gpio/n/30/mode = 0 = 0x0
f gpio/n/31/mode = 0 = 0x0
f gpio/n/45/mode = 0 = 0x0
f wifi/ant = 1 = 0x1
f wifi/enable = 1 = 0x1
f wifi/profile/10/security = 40 = 0x28
f wifi/profile/10/key = ""
f wifi/profile/10/enable = 1 = 0x1
f sys/mfg_mode = 0 = 0x0
f client/enable = 1 = 0x1
f log/mod/13/mask = 15 = 0xf
f eth/enable = 0 = 0x0
f eth/mac_addr = len 6 00 00 00 00 00 00 
f eth/speed = 0 = 0x0
f wifi/power = 31 = 0x1f
f wifi/setup_ios_app = "iMDA"
f wifi/setup_mode/enable = 0 = 0x0
f wifi/setup_mode/key = (set)
f wifi/setup_mode/id = ""
f wifi/profile/10/ssid = "Ayla-DevKit"
f sys/setup_mode = 0 = 0x0
f sys/setup_mode/key = len 20 f3 13 33 ff 94 79 2c 30 f6 c7 77 
f client/server/region = ""
f oem/oem = "0dfc7900"
f oem/model = "AylaShield"
f oem/key = len 256 bf 76 c7 16 cb 31 50 8d 7e 17 3c 
f oem/version = "demo_dp 1.7"
f server/security/enable = 1 = 0x1
f gpio/status/reg = 20 = 0x14
f gpio/status/WPS = 0 = 0x0
f gpio/status/snapshot = 0 = 0x0
f gpio/status/clock = 0 = 0x0
f gpio/status/data = 0 = 0x0
f gpio/status/reset = 0 = 0x0
f gpio/status/test = 0 = 0x0
f gpio/status/ap_mode/setup_mode = 0 = 0x0
f gpio/n/15/mode = 81 = 0x51
f gpio/n/19/mode = 0 = 0x0
f gpio/n/20/mode = 81 = 0x51
types: f = factory, s = startup, r = running
</pre>

<p><a data-toggle="collapse" href="#registered">View configuration of a connected dev kit</a>.</p>
<pre class="collapse" id="registered">
f log/mod/1/mask = 15 = 0xf
f log/mod/2/mask = 15 = 0xf
f log/mod/3/mask = 15 = 0xf
f log/mod/4/mask = 15 = 0xf
f log/mod/5/mask = 15 = 0xf
f log/mod/6/mask = 15 = 0xf
f log/mod/7/mask = 15 = 0xf
f log/mod/8/mask = 15 = 0xf
f log/mod/9/mask = 15 = 0xf
f log/mod/10/mask = 15 = 0xf
f log/mod/11/mask = 15 = 0xf
f log/mod/12/mask = 15 = 0xf
f log/client/enable = 1 = 0x1
f wifi/mac_addr = len 6 00 00 00 00 00 00 
f wifi/scan/save_on_ap_connect = 0 = 0x0
f wifi/scan/save_on_server_connect = 1 = 0x1
f sys/host = 124 = 0x7c
f client/server/default = 0 = 0x0
f client/poll_interval = 300 = 0x12c
f client/ssl/enable = 1 = 0x1
f power/mode = 80 = 0x50
f power/awake_time = 10 = 0xa
f power/standby_powered = 300 = 0x12c
f power/unconf_powered = 600 = 0x258
f oem/complete = 0 = 0x0
f metric/client/client/enable = 0 = 0x0
f metric/client/client/poll_interval = 50 = 0x32
f metric/client/client/count = 10 = 0xa
f metric/client/http/enable = 0 = 0x0
f metric/client/http/poll_interval = 50 = 0x32
f metric/client/http/count = 10 = 0xa
f metric/client/ssl/enable = 0 = 0x0
f metric/client/ssl/poll_interval = 50 = 0x32
f metric/client/ssl/count = 10 = 0xa
f metric/client/tcp/enable = 0 = 0x0
f metric/client/tcp/poll_interval = 50 = 0x32
f metric/client/tcp/count = 10 = 0xa
f locale/default = 0 = 0x0
f gpio/enable = 0 = 0x0
f gpio/status/wifi = 0 = 0x0
f gpio/status/server = 0 = 0x0
f gpio/status/setup_mode = 0 = 0x0
f gpio/status/ready = 11 = 0xb
f gpio/status/link = 1 = 0x1
f gpio/status/intr = 12 = 0xc
f gpio/n/0/mode = 0 = 0x0
f gpio/n/1/mode = 75 = 0x4b
f gpio/n/2/mode = 0 = 0x0
f gpio/n/3/mode = 0 = 0x0
f gpio/n/4/mode = 0 = 0x0
f gpio/n/5/mode = 0 = 0x0
f gpio/n/6/mode = 0 = 0x0
f gpio/n/7/mode = 0 = 0x0
f gpio/n/11/mode = 75 = 0x4b
f gpio/n/12/mode = 75 = 0x4b
f gpio/n/18/mode = 0 = 0x0
f gpio/n/29/mode = 0 = 0x0
f gpio/n/30/mode = 0 = 0x0
f gpio/n/31/mode = 0 = 0x0
f gpio/n/45/mode = 0 = 0x0
f wifi/ant = 1 = 0x1
f wifi/enable = 1 = 0x1
f wifi/profile/10/security = 40 = 0x28
f wifi/profile/10/key = ""
f wifi/profile/10/enable = 1 = 0x1
f sys/mfg_mode = 0 = 0x0
f client/enable = 1 = 0x1
f log/mod/13/mask = 15 = 0xf
f eth/enable = 0 = 0x0
f eth/mac_addr = len 6 00 00 00 00 00 00 
f eth/speed = 0 = 0x0
f wifi/power = 31 = 0x1f
f wifi/setup_ios_app = "iMDA"
f wifi/setup_mode/enable = 0 = 0x0
f wifi/setup_mode/key = (set)
f wifi/setup_mode/id = ""
f wifi/profile/10/ssid = "Ayla-DevKit"
f sys/setup_mode = 0 = 0x0
f sys/setup_mode/key = len 20 f3 13 33 ff 94 79 2c 30 f6 c7 77 
f client/server/region = ""
f oem/oem = "0dfc7900"
f oem/model = "AylaShield"
f oem/key = len 256 bf 76 c7 16 cb 31 50 8d 7e 17 3c 
f oem/version = "demo_dp 1.7"
f server/security/enable = 1 = 0x1
f gpio/status/reg = 20 = 0x14
f gpio/status/WPS = 0 = 0x0
f gpio/status/snapshot = 0 = 0x0
f gpio/status/clock = 0 = 0x0
f gpio/status/data = 0 = 0x0
f gpio/status/reset = 0 = 0x0
f gpio/status/test = 0 = 0x0
f gpio/status/ap_mode/setup_mode = 0 = 0x0
f gpio/n/15/mode = 81 = 0x51
f gpio/n/19/mode = 0 = 0x0
f gpio/n/20/mode = 81 = 0x51
s client/user/hostname = "Ayla Dev Kit"
s sys/reset = 0 = 0x0
s wifi/scan/profile = len 78 02 06 09 54 68 6f 72 6e 64 69 6b 
s wifi/profile/0/ssid = "Thorndike"
s wifi/profile/0/security = 43 = 0x2b
s wifi/profile/0/key = (set)
s wifi/profile/0/enable = 1 = 0x1
s sys/timezone_valid = 1 = 0x1
s sys/timezone = 300 = 0x12c
s sys/dst_active = 1 = 0x1
s sys/dst_change = 1572760800 = 0x5dbe6ce0
s sys/dst_valid = 1 = 0x1
s client/lan/enable = 1 = 0x1
s client/lan/poll_interval = 30 = 0x1e
s client/lan/private_key = (set)
s client/lan/key = 1722 = 0x6ba
s client/lan/auto = 1 = 0x1
s client/reg/ready = 1 = 0x1
types: f = factory, s = startup, r = running
</pre>

The table compares reset and connected configuration values:

|Parameter|Reset Value|Connected Value|Comment|
|-|-|-|-|
|sys/reset|1|0|&nbsp;|
|sys/timezone_valid|0|1|&nbsp;|
|sys/timezone|0|300|See [Earth Time Zones](http://forbrains.co.uk/international_tools/earth_timezones)|
|sys/dst_active|0|1|Daylight Savings Time|
|sys/dst_change|0|1572760800|&nbsp;|
|sys/dst_valid|0|1|&nbsp;|
|client/lan/enable|0|1|&nbsp;|
|client/user/hostname|&nbsp;|"Ayla Dev Kit"|&nbsp;|
|wifi/scan/profile|&nbsp;|len 78 02 06 09 54 68 6f 72 6e 64 69 6b|&nbsp;|
|wifi/profile/0/ssid|&nbsp;|"Thorndike"|&nbsp;|
|wifi/profile/0/security|&nbsp;|43|&nbsp;|
|wifi/profile/0/key|&nbsp;|(set)|&nbsp;|
|wifi/profile/0/enable|&nbsp;|1|&nbsp;|
|client/lan/poll_interval|&nbsp;|30|&nbsp;|
|client/lan/private_key|&nbsp;|(set)|&nbsp;|
|client/lan/key|&nbsp;|1722|&nbsp;|
|client/lan/auto|&nbsp;|1|&nbsp;|
|client/reg/ready|&nbsp;|1|&nbsp;|
