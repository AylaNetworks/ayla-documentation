---
title: Connect
layout: ayla-module-command-line-interface.html
a: block
---

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