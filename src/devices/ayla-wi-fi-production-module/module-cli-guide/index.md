---
title: Ayla Wi-Fi Module CLI Guide
layout: ayla-wi-fi-production-module.html
---

This guide shows you how to use the Module Command Line Interface to accomplish tasks. The Module CLI provides a way to get/set Ayla Wi-Fi Production Module configuration information via a serial connection.

### Connect Mac to module

1. Connect the Mac to the board using an FTDI TTL-232R-3V3 cable.
1. Open a terminal.
1. List TTY and CU (Calling Unit) ports.
<pre>
$ ls -l1 /dev/{tty,cu}.*
</pre>
<div>Output should look similar to the following:</div>
<pre>
/dev/cu.Bluetooth-Incoming-Port
/dev/cu.usbserial-FT9FR1XH
/dev/tty.Bluetooth-Incoming-Port
/dev/tty.usbserial-FT9FR1XH
</pre>
1. Start the CLI with the command below. You may have to press Enter a second time.
<pre>
$ screen /dev/tty.usbserial-FT9FR1XH 115200
</pre>
<div>The screen prompt should appear:</div>
<pre>
-->
</pre>
<div>Press Control-A, Control-\, and 'y' to exit the screen session, and return to your shell terminal.</div>

### Register a device

<pre>
--> reset factory
--> wifi enable
--> wifi profile 1
--> wifi ssid MyNet
--> wifi key MyPass123
--> wifi join
</pre>
