---
title: Administration
layout: raspberry-pi.html
---

Use Secure Shell to access your RPi remotely:

<pre>
ssh pi&#64;192.168.1.3
</pre>

Use Secure Copy to move files between your computer and your RPi:

<pre>
$ scp ./button-led.py pi@192.168.1.3:
</pre>

### Disk Information

<pre>
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/root        28G  5.8G   21G  22% /
devtmpfs        460M     0  460M   0% /dev
tmpfs           464M     0  464M   0% /dev/shm
tmpfs           464M   13M  452M   3% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           464M     0  464M   0% /sys/fs/cgroup
/dev/mmcblk0p6   68M   23M   46M  33% /boot
tmpfs            93M     0   93M   0% /run/user/1000
/dev/mmcblk0p5   30M  398K   28M   2% /media/pi/SETTINGS1
</pre>

### GPIO Header

<pre>
$ gpio readall
 +-----+-----+---------+------+---+---Pi 3+--+---+------+---------+-----+-----+
 | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |
 +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+
 |     |     |    3.3v |      |   |  1 || 2  |   |      | 5v      |     |     |
 |   2 |   8 |   SDA.1 | ALT0 | 1 |  3 || 4  |   |      | 5v      |     |     |
 |   3 |   9 |   SCL.1 | ALT0 | 1 |  5 || 6  |   |      | 0v      |     |     |
 |   4 |   7 | GPIO. 7 |   IN | 0 |  7 || 8  | 1 | ALT5 | TxD     | 15  | 14  |
 |     |     |      0v |      |   |  9 || 10 | 1 | ALT5 | RxD     | 16  | 15  |
 |  17 |   0 | GPIO. 0 |   IN | 0 | 11 || 12 | 0 | IN   | GPIO. 1 | 1   | 18  |
 |  27 |   2 | GPIO. 2 |   IN | 0 | 13 || 14 |   |      | 0v      |     |     |
 |  22 |   3 | GPIO. 3 |   IN | 0 | 15 || 16 | 0 | IN   | GPIO. 4 | 4   | 23  |
 |     |     |    3.3v |      |   | 17 || 18 | 0 | IN   | GPIO. 5 | 5   | 24  |
 |  10 |  12 |    MOSI | ALT0 | 0 | 19 || 20 |   |      | 0v      |     |     |
 |   9 |  13 |    MISO | ALT0 | 0 | 21 || 22 | 0 | IN   | GPIO. 6 | 6   | 25  |
 |  11 |  14 |    SCLK | ALT0 | 0 | 23 || 24 | 1 | OUT  | CE0     | 10  | 8   |
 |     |     |      0v |      |   | 25 || 26 | 1 | OUT  | CE1     | 11  | 7   |
 |   0 |  30 |   SDA.0 |   IN | 1 | 27 || 28 | 1 | IN   | SCL.0   | 31  | 1   |
 |   5 |  21 | GPIO.21 |   IN | 1 | 29 || 30 |   |      | 0v      |     |     |
 |   6 |  22 | GPIO.22 |   IN | 1 | 31 || 32 | 0 | IN   | GPIO.26 | 26  | 12  |
 |  13 |  23 | GPIO.23 |   IN | 0 | 33 || 34 |   |      | 0v      |     |     |
 |  19 |  24 | GPIO.24 |   IN | 0 | 35 || 36 | 0 | IN   | GPIO.27 | 27  | 16  |
 |  26 |  25 | GPIO.25 |   IN | 0 | 37 || 38 | 0 | IN   | GPIO.28 | 28  | 20  |
 |     |     |      0v |      |   | 39 || 40 | 0 | IN   | GPIO.29 | 29  | 21  |
 +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+
 | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |
 +-----+-----+---------+------+---+---Pi 3+--+---+------+---------+-----+-----+
</pre>

### Network Interface

<pre>
$ ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
  inet 192.168.1.3  netmask 255.255.255.0  broadcast 192.168.1.255
  inet6 fe80::d5af:2abc:617e:3606  prefixlen 64  scopeid 0x20<link>
  ether b8:27:eb:2a:d1:66  txqueuelen 1000  (Ethernet)
  RX packets 9439  bytes 684240 (668.2 KiB)
  RX errors 0  dropped 6  overruns 0  frame 0
  TX packets 9405  bytes 2544722 (2.4 MiB)
  TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
  inet 127.0.0.1  netmask 255.0.0.0
  inet6 ::1  prefixlen 128  scopeid 0x10<host>
  loop  txqueuelen 1000  (Local Loopback)
  RX packets 15  bytes 1016 (1016.0 B)
  RX errors 0  dropped 0  overruns 0  frame 0
  TX packets 15  bytes 1016 (1016.0 B)
  TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
  ether b8:27:eb:7f:84:33  txqueuelen 1000  (Ethernet)
  RX packets 0  bytes 0 (0.0 B)
  RX errors 0  dropped 0  overruns 0  frame 0
  TX packets 0  bytes 0 (0.0 B)
  TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
</pre>

### OS Information
<pre>
$ cat /etc/os-release
PRETTY_NAME="Raspbian GNU/Linux 9 (stretch)"
NAME="Raspbian GNU/Linux"
VERSION_ID="9"
VERSION="9 (stretch)"
ID=raspbian
ID_LIKE=debian
HOME_URL="http://www.raspbian.org/"
SUPPORT_URL="http://www.raspbian.org/RaspbianForums"
BUG_REPORT_URL="http://www.raspbian.org/RaspbianBugs"
</pre>

### System Information 

<pre>
$ cat /proc/cpuinfo
processor : 0
model name  : ARMv7 Processor rev 4 (v7l)
BogoMIPS  : 38.40
Features  : half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 lpae evtstrm crc32 
CPU implementer : 0x41
CPU architecture: 7
CPU variant : 0x0
CPU part  : 0xd03
CPU revision  : 4

processor : 1
model name  : ARMv7 Processor rev 4 (v7l)
BogoMIPS  : 38.40
Features  : half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 lpae evtstrm crc32 
CPU implementer : 0x41
CPU architecture: 7
CPU variant : 0x0
CPU part  : 0xd03
CPU revision  : 4

processor : 2
model name  : ARMv7 Processor rev 4 (v7l)
BogoMIPS  : 38.40
Features  : half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 lpae evtstrm crc32 
CPU implementer : 0x41
CPU architecture: 7
CPU variant : 0x0
CPU part  : 0xd03
CPU revision  : 4

processor : 3
model name  : ARMv7 Processor rev 4 (v7l)
BogoMIPS  : 38.40
Features  : half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 lpae evtstrm crc32 
CPU implementer : 0x41
CPU architecture: 7
CPU variant : 0x0
CPU part  : 0xd03
CPU revision  : 4

Hardware  : BCM2835
Revision  : a020d3
Serial    : 00000000752ad166
</pre>

### Uninstall Ayla

<pre>
sudo systemctl stop devd
sudo systemctl stop logd
sudo rm /etc/init.d/devd
sudo rm /etc/init.d/logd
sudo rm -r /home/pi/ayla
</pre>
