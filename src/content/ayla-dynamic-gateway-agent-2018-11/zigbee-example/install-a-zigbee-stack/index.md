---
title: Install a Zigbee stack
layout: ayla-dynamic-gateway-agent-2018-11.html
a: block
---

While Raspberry Pi 3 supports Bluetooth natively, it does not support Zigbee out of the box. Adding support to an RPi for a Zigbee network means adding a USB stick and a software stack. Here is one approach:

<ol>
<li>Buy a [Cel MeshConnect EM358 USB Stick](https://www.digikey.com/en/product-highlight/c/cel/cortet-radio-em3588-usb-sticks), and install it in a USB recepticle on your RPi.1. Download [Simplicity Studio IDE v4](https://www.silabs.com/products/development-tools/software/simplicity-studio) onto your computer, and use it to register and download [EmberZNet Protocol Stack](https://www.silabs.com/products/development-tools/software/emberznet-pro-zigbee-protocol-stack-software). Export the Zigbee stack:
<pre >
app
  esf_common
hardware
  kit
  reference_design
platform
  CMSIS
  Device
  base
  emdrv
  emlib
  middleware
  radio
protocol
  zigbee_5.7
    app
    build
    documentation
    esf.properties
    ncp-images
    stack
    stack.properties
    tool
unins000.dat
unins000.exe
</pre>
</li>
<li>Copy the stack to <code>/home/pi/EmberZNet/v5.7.4.0</code> on your RPi:
<pre >
$ ls -1 ~/EmberZNet/v5.7.4.0/
app
hardware
platform
protocol
</pre>
</li>
</ol>
