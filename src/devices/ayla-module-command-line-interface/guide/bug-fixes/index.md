---
title: Bug fixes
layout: ayla-module-command-line-interface.html
a: block
---

### Murata Type-YD Shield Dev Kit

There is a problem with the configuration that causes the link LED to not work. You can correct that with a terminal connected to the USB port on the Ayla Shield using the following commands:

<pre>
setup_mode enable AylaDevKit
gpio pc13 out inv od
gpio link pc13
gpio pa1 disable
gpio commit
setup_mode disable AylaDevKit
gpio
</pre>
 
If the output of the last command shows link configured to pc13, it verifies the change has been applied correctly.