---
title: show
layout: ayla-module-cli.html
b: block
---

### Show configuration

This command shows the current configuration. Long fields are not completely shown.

<pre>--&gt; show conf</pre>

<p><a data-toggle="collapse" href="#conf">Sample output.</a></p>
<pre class="collapse" id="conf">
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
s client/reg/ready = 1 = 0x1
s client/user/hostname = "Ayla Dev Kit A"
s sys/reset = 0 = 0x0
s wifi/scan/profile = len 78 02 0b 08 73 61 72 61 68 31 32 33 
s wifi/profile/0/ssid = "sarah123"
s wifi/profile/0/security = 43 = 0x2b
s wifi/profile/0/key = (set)
s wifi/profile/0/enable = 1 = 0x1
s sys/timezone_valid = 1 = 0x1
s sys/timezone = 420 = 0x1a4
s sys/dst_active = 1 = 0x1
s sys/dst_change = 1572768000 = 0x5dbe8900
s sys/dst_valid = 1 = 0x1
s client/lan/enable = 1 = 0x1
s client/lan/poll_interval = 30 = 0x1e
s client/lan/private_key = (set)
s client/lan/key = 46731 = 0xb68b
s client/lan/auto = 1 = 0x1
r wifi/scan/profile = delete
types: f = factory, s = startup, r = running
</pre>

### Show ID

This command shows the current ID configuration including model, serial, dev_id, mfg_mode, mfg_serial, stm32 signature, and MAC address.

<pre>--&gt; show id</pre>

<p><a data-toggle="collapse" href="#id">Sample output.</a></p>
<pre class="collapse" id="id">
id: model "AY001MTC1"
id: serial "AC000W000123456"
id: dev_id "AC000W000123456"
id: mfg_model "LBWA1ZVYDZ-BTEMP-AYLA"
id: mfg_serial "p3"
id: stm32_sig "00360037-3235470b-35383434"
id: mac_addr "ab12ab12ab12"
</pre>

### Show OEM

This command shows the oem id and model information.

<pre>--&gt; show oem</pre>

<p><a data-toggle="collapse" href="#oem">Sample output.</a></p>
<pre class="collapse" id="oem">
oem: "abcd1234"
oem_model: "AylaShield"
oem_key: (is set)
</pre>

### Show host

This command shows statistics about the interface to the host mcu.

<pre>--&gt; show host</pre>

<p><a data-toggle="collapse" href="#host">Sample output.</a></p>
<pre class="collapse" id="host">
SPI statistics:
interrupts: rx 50 rx DMA 4 tx DMA 5
rx start 4 len_zero 0 len_err 0 rx_over 10 rx_crc_err 0
tx start 5 retry 0
</pre>

### Show test_status

This command shows a non-zero number if manufacturing tests have been completed. The number represents the time in seconds since 1970.

<pre>--&gt; show test_status</pre>

<p><a data-toggle="collapse" href="#test-status">Sample output.</a></p>
<pre class="collapse" id="test-status">
test_status: completed 1457835789
</pre>

### Show version

This command shows the module firmware version.

<pre>--&gt; show version</pre>

<p><a data-toggle="collapse" href="#version">Sample output.</a></p>
<pre class="collapse" id="version">
bc 2.9.6-beta 11/29/18 19:38:05 ID 5881f6a
</pre>

### Show wifi

This command shows the current Wi-Fi status including the AP it is connected to, if any, and the IP address. It also lists the enabled profiles and the scan list.

<pre>--&gt; show wifi</pre>

<p><a data-toggle="collapse" href="#wifi">Sample output.</a></p>
<pre class="collapse" id="wifi">
Wi-Fi AP mode ssid Ayla-DevKit
RSSI -200 antenna 1
region default tx_power 31
chan 3 band 2.4GHz bw 20MHz sb None
IP 192.168.0.1
DNS 8.8.8.8
DNS 8.8.8.8

profiles:
Index Network                     Security
    0 sarah123                    WPA2_Personal 
   AP Ayla-DevKit                 none 

scan results:
 Network                          Type     Chan Signal  Security            
 ResidenceInn_GUEST               AP         11    -61  None                
 CenturyLink9408                  AP         11    -87  WPA2 Personal Mixed 
 Chauncey's Palace                AP          1    -90  WPA2 Personal AES   

connection history:
  2016-01-01T00:00:00Z anon ssid s&#42;3 bssid eb75 status 4 SSID not found
    IP 0.0.0.0 mask 0.0.0.0 default route 0.0.0.0
    DNS 0.0.0.0, 0.0.0.0
</pre>
