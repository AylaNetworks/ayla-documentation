---
title: Raspberry Pi
layout: devices-ayla-linux-agent.html
c: block
---

The <code>scp</code> utility is useful for copying files between a computer and an RPi.

<ul>
<li>Copy hello.c from the current directory on your computer to <code>/home/pi/ayla</code> on the Raspberry Pi with this command:
<pre>
$ scp hello.c pi@192.168.1.7:ayla
</pre>
</li>
<li>Copy hello.c from <code>/home/pi/ayla</code> on the Raspberry Pi to the current directory on your computer with this command:
<pre>
$ scp pi@192.168.1.7:ayla/hello.c .
</pre>
</li>
</ul>

The <code>ssh</code> utility is useful for remotely accessing an RPi:

<pre>
$ ssh pi@192.168.1.7
</pre>

The <code>pinout</code> utility is useful for visualizing the GPIO layout:

<pre>
$ pinout
</pre>

The <code>gcc</code> GNU Compiler is installed on the RPi by default:

<pre>
$ gcc hello.c -o hello
</pre>

The <code>shutdown</code> utility can be used to remotely shutdown the RPi:

<pre>
$ sudo shutdown -h now
</pre>

Check the Raspbian version with this command:

<pre>
$ cat /etc/os-release
</pre>

Use the <code>df</code> utility to determine free space:

<pre>
$ df -h
</pre>

Update your package manager like this:

<pre>
$ sudo apt-get update
</pre>

Update your Raspbian distribution like this:

<pre>
$ sudo apt-get dist-upgrade
</pre>
