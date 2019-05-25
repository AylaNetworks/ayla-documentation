---
title: Installation
layout: ayla-linux-agent-2018-11.html
a: block
---

These directions assume that you will use your Raspberry Pi as both a development environment and an Ayla device. This page shows you how to set up your development environment on your RPi, and how to register your RPi as a device in the Ayla Cloud.

### Clone the Ayla repository

1. Secure shell to your RPi:
<pre>
$ ssh pi&#64;192.168.1.9
</pre>
1. Ensure that you are in your home directory (e.g. <code>/home/pi</code>).
1. Clone the Ayla [device-linux-public](https://github.com/AylaNetworks/device_linux_public) repository. You will be asked for your Github username and password.
<pre>
$ git clone https&#58;//github.com/AylaNetworks/device_linux_public.git
</pre>
Then, optionally, if you need to checkout a previous version, use (for example) the following:
<pre>
$ cd device_linux_public
$ git log
$ git checkout 3a1d5b7e78ad0298c512045de7107626d0c51479
</pre>

### Edit ayla_install.sh

1. Copy ayla_install.sh to your home directory:
<pre>
$ cp &#126;/device_linux_public/dev_kit/raspberry_pi/ayla_install.sh ~/ 
</pre>
1. Open the file for editing, and set ayla_src_dir:
<pre>
ayla_src_dir="/home/pi/device_linux_public"
</pre>
1. Search for <code>install_ayla_modules</code>, comment out the following code in the function, and save.
<pre>
# if echo "$ayla_package" | grep -q "\.tar$" || echo "$ayla_package" | grep -q "\.tar.gz$" || echo "$ayla_package" | grep -q "\.tgz$"; then
# &nbsp;&nbsp;install_tar "$ayla_package_path" "$ayla_src_dir"
# elif echo "$ayla_package" | grep -q "\.git$"; then
# &nbsp;&nbsp;git_clone_repo "$ayla_package" "$ayla_src_dir"
# else
# &nbsp;&nbsp;error_exit "unsupported package type: $ayla_package_path"
# fi
</pre>

### Build/install the Ayla Device Platform for Linux

1. Create an empty text file named <code>devd.conf</code> in <code>/home/pi</code>. You will replace this file later.
<pre>
$ touch devd.conf
</pre>
1. View installation options:
<pre>
$ ./ayla_install.sh -h
</pre>
1. Start the installation.
<pre>
$ sudo ./ayla_install.sh -g -z  // Wi-Fi
$ sudo ./ayla_install.sh -g -n  // Ethernet
</pre>
<ul>
<li>Include <code>-u</code> to install over a previous installation.</li>
<li>Include <code>-z</code> to install BLE support, needed for Ayla Linux Agent v1.6 Wi-Fi installation.</li>
<li>Include <code>-g</code> to install the [Wiring Pi library](http://wiringpi.com/) required for GPIO access.</li>
<li>Include <code>-n</code> to prevent the building and running of the cond daemon responsible for Wi-Fi.</li>
</ul>
1. When the installation completes, do NOT reboot yet.
