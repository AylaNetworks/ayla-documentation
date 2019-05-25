---
title: Clone the Ayla Github Repo
layout: ayla-dynamic-gateway-agent-2018-11.html
i: block
---

By default, the installation script ([ayla_install.sh](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/dev_kit/raspberry_pi/ayla_install.sh)) copies source files from the Github repository to a temporary directory on your RPi, builds various libraries, daemons, and example applications, installs them in ```/home/pi/ayla```, and deletes the temporary directory. The directions below show you how to modify this installation behavior to retain the source files in ```/home/pi/device_linux_gw_public``` so that you can modify them as you experiment with building a gateway application. 

### Clone the Ayla Github

1. Secure shell to your RPi:
<pre>
$ ssh pi@192.168.1.3
</pre>
1. Ensure that you are in your home directory (e.g. ```/home/pi```).
1. Clone the repository. You will be asked for your Github username and password.
<pre>
$ git clone https&#58;//github.com/AylaNetworks/device_linux_gw_public.git
</pre>
1. View the new ```/home/pi/device_linux_gw_public``` source directory.

### Point the installation script at the source directory

1. Copy ayla_install.sh to your home directory:
<pre>
$ cp ~/device_linux_gw_public/dev_kit/raspberry_pi/ayla_install.sh ~/ 
</pre>
1. Open the file for editing, and find the following line:
<pre>
ayla_src_dir="$temp_dir/ayla/src"
</pre>
1. Change it to the following, and save.
<pre>
ayla_src_dir="/home/pi/device_linux_gw_public"
</pre>
1. Find the following:
<pre>
ayla_package="https&#58;//github.com/AylaNetworks/device_linux_public.git"
</pre>
1. Change it to this:
<pre>
ayla_package="https&#58;//github.com/AylaNetworks/device_linux_gw_public.git"
</pre>
