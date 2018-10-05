---
title: Command line Interface
layout: devices-ayla-wi-fi-production-module.html
---

### Connect a Mac to an Ayla Design Kit

<ol>
<li>Connect the Mac to the board using an FTDI TTL-232R-3V3 cable.</li>
<li>Open a terminal.</li>
<li>List TTY and CU (Calling Unit) ports.</li>
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
<li>Start the Ayla CLI with the command below. You may have to press Enter a second time.</li>
<pre>
$ screen /dev/tty.usbserial-FT9FR1XH 115200
</pre>
<div>Note: Press Control-A, Control-\, and 'y' to exit the screen session, and return to your shell terminal.</div>
</ol>

### Register a device

<ol>
<li>Overwrite the startup configuration with the factory configuration, and restart the device:</li>
<pre>
--> reset factory
</pre>
<li>Turn on device Wi-Fi:</li>
<pre>
--> wifi enable
</pre>
<li>Set a target Wi-Fi profile (0-9):</li>
<pre>
--> wifi profile 1
</pre>
<li>Set the Wi-Fi network for the current profile:</li>
<pre>
--> wifi ssid MyNet
</pre>
<li>Set the Wi-Fi password for the current profile:</li>
<pre>
--> wifi key MyPass123
</pre>
<li>Tell the device to connect to the specified network:</li>
<pre>
--> wifi join
</pre>
</ol>

