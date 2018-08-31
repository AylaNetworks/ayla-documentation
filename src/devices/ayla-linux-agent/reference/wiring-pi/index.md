---
title: Wiring Pi
layout: devices-ayla-linux-agent.html
c: block
---

[Wiring Pi](http://wiringpi.com/), by Gordon Henderson, is a C library for accessing the GPIO pins controlled by the Broadcom BCM2835, BCM2836 and BCM2837 chips on a Raspberry Pi. The library supports polling and interrupts.

To install this library on your RPi, see the [Download and Install](http://wiringpi.com/download-and-install/) page. Per the instructions, be sure to delete the old gpio utility on your RPi.

By default, the instructions install the library on your RPi here: <code>/home/pi/wiringPi</code>.

Compile using this command: <code>$ gcc -Wall -o blink blink.c -lwiringPi</code>.

The library provides three schemes for specifying pin numbers. See the [Setup](http://wiringpi.com/reference/setup/) page.
