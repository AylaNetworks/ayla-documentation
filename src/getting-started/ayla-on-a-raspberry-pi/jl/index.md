---
title: Ayla on a Raspberry Pi for JL
layout: page-full-width.html
---

Directions for wireless configuration:

<ol>
<li>Download [2018-11-13-raspbian-stretch-full.zip](https://www.raspberrypi.org/downloads/raspbian/).</li>
<li>Flash it onto your SD card.</li>
<li>Change directory to the boot directory.</li>
<li>Add <code>enable_uart=1</code> to <code>config.txt</code> to enable serial comm.</li>
<li><code>touch ssh</code>.</li>
<li><code>touch wpa_supplicant.conf</code>.</li>
<li>Edit the file, add the following, and modify network and password:
<pre>
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
  ssid="network"
  psk="password"
  key_mgmt=WPA-PSK
}
</pre>
</li>
<li>Eject SD card from computer.</li>
<li>Insert SD card into RPi, and power on.</li>
<li>Use <code>arp -a</code> to find ip address.</li>
<li><code>ssh pi&#64;192.168.1.20</code></li>
<li><code>git clone https&colon;//github.com/AylaNetworks/device_linux_public.git</code></li>
<li><code>cp ~/device_linux_public/dev_kit/raspberry_pi/ayla_install.sh ~/</code></li>
<li>Modify <code>ayla_install</code> with <code>ayla_src_dir="/home/pi/device_linux_public"</code>.</li>
<li><code>touch devd.conf</code>.</li>
<li>In Ayla Dashboard Portal, make sure the RPi is not registered to you.</li>
<li><code>sudo ./ayla_install.sh -g -z</code> (takes several minutes).</li>
<li>[Create devd.conf](/devices/ayla-linux-agent/guide/configuration/).</li>
<ol>
<li><code>scp oem_info pi@192.168.1.20:</code></li>
<li><code>scp AC000W006538430.xml pi@192.168.1.20:</code></li>
<li><code>cd ~/device_linux_public</code></li>
<li><code>sudo make host_utils</code></li>
<li><code>cd</code></li>
<li><code>./device_linux_public/build/native/utils/config_gen -n -d ./AC000W006538430.xml -i ./oem_info</code></li>
<li><code>mv AC000W006538430.conf devd.conf</code></li>
<li><code>sudo nano devd.conf</code></li>
<li>Add the yellow key:value. At production time, this must be removed. 
<pre>
{
  "config": {
    "sys": {
      "factory": 1
    },
    "id": {
      "dsn": "AC000W123456789",
      "rsa_pub_key": "-----BEGIN RSA PUBLIC KEY-----\nMIIB...
    },
    "client": {
      "region": "US"<span style="color:yellow;">,
      "server": {
          "default": 1
      }</span>
    },
    "oem": {
      "oem": "0aaa111e",
      "model": "linuxevb",
      "key": "UT9...
    }
  }
}
</pre>
</li>
</ol>
<li><code>sudo reboot now</code>.</li>
<li>In Aura, click the plus sign.</li>
<li></li>
</ol>
