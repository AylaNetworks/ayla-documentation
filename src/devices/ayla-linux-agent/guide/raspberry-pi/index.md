---
title: Raspberry Pi
layout: ayla-linux-agent.html
a: block
---

The Ayla Device Platform for Linux runs on a Linux operating system such as Debian-based Raspbian, the primary OS of the [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi). The following table outlines a few ways to set up a Raspberry Pi:

|&nbsp;|Raspbian|Peripherals|Network|Access|Purpose|
|-|-|-|-|-|-|-|
|A|Full|<img style="margin:0;" src="monitor-keyboard-mouse.png" width="80">|wired|serial, ssh, vnc|&nbsp;|
|B|Full|<img style="margin:0;" src="monitor-keyboard-mouse.png" width="80">|wireless|serial, ssh, vnc|&nbsp;|
|C|Full|&nbsp;|wired|serial, ssh, vnc|Development|
|D|Full|&nbsp;|wireless|serial, ssh, vnc|&nbsp;|
|E|Lite|<img style="margin:0;" src="monitor-keyboard-mouse.png" width="80">|wired|serial, ssh|&nbsp;|
|F|Lite|<img style="margin:0;" src="monitor-keyboard-mouse.png" width="80">|wireless|serial, ssh|&nbsp;|
|G|Lite|&nbsp;|wired|serial, ssh|&nbsp;|
|H|Lite|&nbsp;|wireless|serial, ssh|Production|

The steps below explain how to set up Row C as a <span style="color:red;">development environment</span> useful for completing the [Tutorials](../../tutorials). The configuration includes [Raspbian Stretch with desktop and recommended software](https://www.raspberrypi.org/downloads/raspbian/) running on a headless [Raspberry Pi 3 Model B+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/), connected to the network via Ethernet cable, and accessible via [serial cable](https://www.adafruit.com/product/954), [Secure Shell (ssh)](https://en.wikipedia.org/wiki/Secure_Shell), and/or [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/). The [CanaKit Raspberry Pi 3 Model B+ Ultimate Starter Kit](https://www.canakit.com/raspberry-pi-3-model-b-plus-ultimate-kit.html) provides all the needed hardware components. Later, for your <span style="color:red;">production environment</span>, you may prefer Row H.

## Set up the physical Raspberry Pi

1. Insert the RPi into the clear case per [these directions](https://www.canakit.com/pi-case). You won't need the lid or camera for now.
<img src="rpi-and-case.png" width="300">
1. Install the heat sinks:
<img src="rpi-heat-sinks.png" width="300">

## Access the MicroSD card

1. Insert the MicroSD card into a USB MicroSD card reader:
<img src="rpi-card-reader.png" width="200">
1. Insert the reader into a USB port on your computer.
<img src="mounted-canakit.png" width="140">

## Flash an OS image

1. Download one of the flavors of [Raspbian Stretch](https://www.raspberrypi.org/downloads/raspbian/) to your computer. Do not unzip.
1. Download [Etcher](https://www.balena.io/etcher/) to your computer, and install it.
<img src="etcher.png" width="300">
1. Run Etcher, click the gear, uncheck <code>Auto-unmount</code>, and click Back:
<img src="etcher-settings.png" width="300">
1. Flash the new Raspian image to the MicroSD card:
<img src="etcher-flash.png" width="300">

## Enable remote access

1. In a terminal on your computer, view the contents of the MicroSD card <code>boot</code> directory:
<pre>
/Volumes/boot$ ls -1
</pre>
1. Enable serial communication by appending <code>enable_uart=1</code> to <code>config.txt</code>.
1. Enable Secure Shell by creating an empty <code>ssh</code> text file:
<pre>
/Volumes/boot$ touch ssh
</pre>
1. Close the terminal.
1. Unmount the MicroSD card:
<img src="mounted-boot.png" width="140">

## Power on the Raspberry Pi

1. Insert the MicroSD card into your Raspberry Pi:
<img src="rpi-micro-sd-card.png" width="300">
1. Connect an Ethernet cable and a CanaKit PiSwitch:
<img src="rpi-ethernet-power.png" width="400">
1. Power-on the RPi, and wait for a minute or two:

## Access the Raspberry Pi

There are three standard methods for accessing a Raspberry Pi:

1. Serial Cable
1. Secure Shell (ssh)
1. VNC Viewer

Note that the last two approaches require you to specify the IP address of the Raspberry Pi. If you have access rights to your local router, you can determine the RPi IP address by inspecting the router. You can also use <code>arp -a</code> in a terminal on your computer.

### Serial Cable

See [Adafruit's Raspberry Pi Lesson 5. Using a Console Cable](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/overview).

### Secure Shell

1. Run <code>ssh</code> (specifying your RPi's IP Address):
<pre>
$ ssh pi&#64;192.168.1.9
</pre>
Normally, you will see a message similar to the following:
<pre>
The authenticity of host '192.168.1.9 (192.168.1.9)' can't be established.
ECDSA key fingerprint is SHA256:CcQtTqvRl5SLlAbCdEfG/UsK0/NN018UKnSRw.
Are you sure you want to continue connecting (yes/no)?
</pre>
Sometimes, however, you will see this message:
<pre>
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:r4Y+vxKp5N6tEsMJtc6za1v/Rujms4wfjMY51jH8wsw.
Please contact your system administrator.
Add correct host key in /Users/matt/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /Users/matt/.ssh/known_hosts:5
ECDSA host key for 192.168.1.8 has changed and you have requested strict checking.
Host key verification failed.
</pre>
To solve this, open <code>&#126;/.ssh/known_hosts</code> on your computer, and delete the row representing the previous (IP Address, ECDSA Key) association.
1. Type <code>yes</code>.
You will see a message similar to the following:
<pre>
Warning: Permanently added '192.168.1.9' (ECDSA) to the list of known hosts.
pi@192.168.1.9's password:
</pre>
1. Enter <code>raspberry</code> for password. (Your username is <code>pi</code>). You will see a message similar to the following:
<pre>
Linux raspberrypi 4.14.79-v7+ #1159 SMP Sun Nov 4 17:50:20 GMT 2018 armv7l<br/>
The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/&#42;/copyright.<br/>
Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Tue Feb 19 15:33:15 2019 from 192.168.1.9<br/>
SSH is enabled and the default password for the 'pi' user has not been changed.
This is a security risk - please login as the 'pi' user and type 'passwd' to set a new password.<br/>
Wi-Fi is disabled because the country is not set.
Use raspi-config to set the country before use.
</pre>

### VNC Viewer

1. In your <code>ssh</code> terminal, enter the following:
<pre>
$ sudo raspi-config
</pre>
The Raspberry Pi Software Configuration Tool menu appears:
<img src="raspi-config.png" width="500">
1. Navigate to <code>Interfacing Options</code>, click <code>VNC</code>, and press <code>Yes</code> to enable.
1. Navigate to <code>Advanced Options</code>, click <code>Resolution</code>, and set to an appropriate mode for your computer screen.
1. Navigate to <code>Network Options</code>, click <code>Hostname</code>, and enter your preferred hostname.
1. Exit the utility, and reboot.
1. Download [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) onto your computer, install, and run. See also [Virtual Network Computing](https://www.raspberrypi.org/documentation/remote-access/vnc/).
<img src="vnc.png" width="600">
Now, to access your RPi from your computer, you can use VNC Viewer with its File Manager, Text Editor, Terminal, and Browser.

### Last steps

1. Change your password:
<pre>
$ passwd
</pre>
1. Determine your RPi Mac address
<pre>
$ ip address
</pre>
1. Record the hostname, username, password, and mac address of your RPI.</li>
1. If you are using Raspbian Stretch Lite, install <code>git</code>:
<pre>
$ sudo apt-get update
$ sudo apt-get install git -y
</pre>
</li>

## Wireless considerations

### At run time

1. In VNC Viewer, click the wireless icon at top-right:
<img src="rpi-wireless-icon.png" width="240">
1. Select <code>Country</code>.
1. Select your wireless network, and enter any credentials.

### Before boot time

1. With the MicroSD card in the card reader inserted in your computer, create a <code>wpa_supplicant.conf</code> text file in the boot directory:
<pre>
/Volumes/boot$ touch wpa_supplicant.conf
</pre>
1. Edit the file, copy & paste the configuration below, modify <code>country</code>, <code>ssid</code>, <code>psk</code>, and <code>key_mgmt</code>, and save:
<pre>
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US<br/>
network={
     ssid="Your network name/SSID"
     psk="Your WPA/WPA2 security key"
     key_mgmt=WPA-PSK
}<br/>
network={
     ssid="Public network"
     key_mgmt=NONE
}<br/>
network={
    key_mgmt=NONE
    priority=-999
}
</pre>
This particular file specifies three different networks. The first requires authentication. The second does not. The third means "find the first available public network." Raspian tries each in order. Modify the file to suit your needs. At boot time, Raspian copies the file to <code>/etc/wpa_supplicant/wpa_supplicant.conf</code>.

### Working via Hotspot

Do these steps right after burning a new Raspbian image on your MicroSD card:

1. Define a hotspot on your mobile device.
1. Enable the hotspot network.
1. Know the ssid, password, and encryption type (e.g. WPA2) of the network.
1. Create a wpa_supplicant.conf. The hotspot network definition should appear first.
1. Use the Hotspot network for your computer.
1. Find the IP address of your Hotspot.
  * Run <code>arp -a</code> to determine the IP range to scan.
  * Run <code>nmap -T5 -sP 172.20.10.1-255</code> to scan an IP range. You are looking for the IP of your RPi using the mac address.
1. <code>ssh</code> to your RPI.

## Additional Links

* [raspberrypi.org/documentation/remote-access/ssh](https://www.raspberrypi.org/documentation/remote-access/ssh/)
* [Installing NOOBS for first time without screen or keyboard](https://www.raspberrypi.org/forums/viewtopic.php?t=172862)
* [NOOBS (New Out of Box Software)](https://github.com/raspberrypi/noobs/blob/master/README.md)
* [Setting up a Raspberry Pi headless](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md)
* [Raspbian](https://www.raspberrypi.org/downloads/raspbian/)
* [pi zero w wpa_supplicant](https://www.raspberrypi.org/forums/viewtopic.php?t=203716)
* [Setting WiFi up via the command line](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
* [SSH (Secure Shell)](https://www.raspberrypi.org/documentation/remote-access/ssh/)
* [Setting up your own Raspberry Pi 3 git server with Go Git Service (Gogs) and Raspbian Stretch Lite](https://www.techcoil.com/blog/setting-up-your-own-raspberry-pi-3-git-server-with-go-git-service-gogs-and-raspbian-stretch-lite/)
* [Setting Wi-Fi up via the command line](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
* [User management in Raspbian](https://www.raspberrypi.org/documentation/linux/usage/users.md)
* [Change Raspberry Pi’s hostname](https://geek-university.com/raspberry-pi/change-raspberry-pis-hostname/)
* [Automatically connect a Raspberry Pi to a Wifi network](https://weworkweplay.com/play/automatically-connect-a-raspberry-pi-to-a-wifi-network/)
* [Automatically connect to open WiFi network](https://www.raspberrypi.org/forums/viewtopic.php?t=107852)
* [Adafruit's Raspberry Pi Lesson 5. Using a Console Cable](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable/enabling-serial-console)
* [Read and Write From Serial Port With Raspberry Pi](https://www.instructables.com/id/Read-and-write-from-serial-port-with-Raspberry-Pi/)
* [The Raspberry Pi UARTs](https://www.raspberrypi.org/documentation/configuration/uart.md)
* [Node-RED Running on Raspberry Pi](https://nodered.org/docs/hardware/raspberrypi)
* [Raspberry Pi Serial (UART) Tutorial](https://www.teachmemicro.com/raspberry-pi-serial-uart-tutorial/)
* [VNC (Virtual Network Computing)](https://www.raspberrypi.org/documentation/remote-access/vnc/)
* [Control Arduino using Raspberry Pi | Arduino Raspberry Pi Serial Communication](https://electronicshobbyists.com/control-arduino-using-raspberry-pi-arduino-and-raspberry-pi-serial-communication/)

