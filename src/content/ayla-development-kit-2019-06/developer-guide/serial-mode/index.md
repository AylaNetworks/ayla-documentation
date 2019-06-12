---
title: Serial mode
layout: ayla-development-kit-2019-06.html
b: block
---

This page discusses serial communication between the host app and the Ayla module. See the diagram:

<img src="../host-application.png" width=600>

You specify SPI or UART mode when you build your host application. SPI mode is the default:

<pre>
$ make
</pre>

UART mode requires the following:

<pre>
$ make USE_UART=1
</pre>

The choice between SPI and UART depends on your choice of MCU. The STM32 Nucleo board of the Ayla Dev Kit supports both. 
