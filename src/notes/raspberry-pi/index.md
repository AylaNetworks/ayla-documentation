---
title: Raspberry Pi
layout: notes.html
---

# About my Raspberry Pi

Use <code>cat /etc/os-release</code> get info about the OS. Mine is <code>Raspbian GNU/Linux 9 (stretch)</code>.

Use <code>uname -a</code> to get kernel info. Mine is <code>Linux rpi 4.14.62-v7</code>.

Use <code>cat /proc/cpuinfo</code> to get processor and revision info. I have processors 0, 1, 2, and 3. They are <code>ARMv7 Processor rev 4 (v7l)</code>. My hardware is <code>BCM2835</code>, revision <code>a020d3</code>, serial <code>00000000752ad166</code>. The board is an RPi 3B+. See [Raspberry Pi Revisions](https://www.raspberrypi.org/documentation/hardware/raspberrypi/revision-codes/README.md).

# Setting up a Raspberry Pi

Use <code>sudo apt-get</code> to manage packages.

Use <code>sudo raspi-config</code> as a graphical tool.

Use <code>sudo rfkill unblock 0</code> to enable a wireless device.

Use <code>ip</code> to show / manipulate routing, devices, policy routing and tunnels.

Use <code>ifconfig</code> to configure a network interface. Try <code>ifconfig -a</code> and <code>ifconfig wlan0</code>.

Use <code>sudo iwlist wlan0 scan</code> to get more detailed wireless information from a wireless interface.

Use <code>sudo nano /etc/wpa_supplicant/wpa_supplicant.conf</code> to add a wireless network. Don't put quotes around ...

<pre class="light">
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
        ssid="Thorndike"
        psk="E4F2DA1BDB"
}
</pre>

# Installing device_linux_gw_public

# Uninstalling device_linux_gw_public

# Running devd and the various apps

# Building the various apps

Previously, I added wiringPi to <code>&#126;/device_linux_public/app/appd</code>:

<pre class="light">
LIBS = ssl crypto curl jansson wiringPi
</pre>

# Other

[How to remove systemd services](https://superuser.com/questions/513159/how-to-remove-systemd-services)

Secure Shell Login:

<pre class="light">
$ ssh pi@192.168.1.3

Linux rpi 4.14.62-v7+ #1134 SMP Tue Aug 14 17:10:10 BST 2018 armv7l

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Thu Nov  8 03:55:24 2018 from 192.168.1.2

SSH is enabled and the default password for the 'pi' user has not been changed.
This is a security risk - please login as the 'pi' user and type 'passwd' to set a new password.
</pre>

Copy <code>ayla_install.sh</code> and <code>devd.conf</code> to <code>/home/pi</code>, and run the install.





<pre class="light">
ls /home/pi/ayla
bin
config
etc
lib
</pre>


Not-hidden Files:

<pre class="light">
$ ls -1
ayla
ayla_install.sh
ayla_tests
c
Desktop
devd.conf
device_linux_public
Documents
Downloads
Music
oldconffiles
Pictures
Public
python2
python_games
Templates
Videos
wiringPi
</pre>

Hidden Files:

<pre class="light">
.bash_history
.bash_logout
.bashrc
.cache
.config
.gnupg
.idlerc
.local
.nano
.node-red
.oracle_jre_usage
.pki
.profile
.ssh
.themes
.thonny
.Xauthority
.xsession-errors
.xsession-errors.old
</pre>

# Managing daemons

Daemon startup scripts reside in <code>/etc/init.d</code>. The daemons themselves can reside anywhere.

<pre class="light">
$ sudo systemctl stop devd
$ sudo /lib/systemd/systemd-sysv-install disable devd
$ sudo rm /etc/init.d/devd

$ sudo systemctl stop logd
$ sudo /lib/systemd/systemd-sysv-install disable logd
$ sudo rm /etc/init.d/logd

$ sudo systemctl daemon-reload
$ sudo systemctl reset-failed
</pre>

# Commands

<pre class="light">
$ scp -rp pi@192.168.1.3:ayla/* ./ayla
</pre>

# Links

* [42 of the most useful Raspberry Pi Commands](http://www.circuitbasics.com/useful-raspberry-pi-commands/)
* [Raspberry Pi 3 B and B+ - How to Configure Wi-Fi and Bluetooth](https://www.digikey.com/en/maker/blogs/raspberry-pi-3---how-to-connect-wi-fi-and-bluetooth)
* [How to Setup Wi-Fi and Bluetooth on the Raspberry Pi 3](https://www.makeuseof.com/tag/setup-wi-fi-bluetooth-raspberry-pi-3/)
* [Setting Wi-Fi up via the command line](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
* [How to bring up a wi-fi interface from a command line?](https://unix.stackexchange.com/questions/90778/how-to-bring-up-a-wi-fi-interface-from-a-command-line)
* [Turn WIFI on from the command line - Still off](https://lb.raspberrypi.org/forums/viewtopic.php?t=206223)
* [New Out Of Box Software (NOOBS)](https://www.raspberrypi.org/documentation/installation/noobs.md)
* [Etcher](https://www.balena.io/etcher/)
* [How to remove systemd services](https://www.raspberrypi.org/documentation/).
