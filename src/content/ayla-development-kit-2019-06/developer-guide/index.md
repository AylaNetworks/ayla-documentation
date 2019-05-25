---
title: Developer Guide
layout: ayla-development-kit-2019-06.html
b: block
---

<span style="color:red;">Under construction</span>.

This guide helps you establish a Windows, Mac, or Linux development environment, download the Host Application Reference Code from the Ayla Github repository, and modify, build, flash, and run the code.

<img src="../dev-env.png" width="512">

The host application runs on the MCU of the STM32 Nucleo board, and the Ayla Agent runs on the [Ayla Production Module](/ayla-edge-solutions/production-modules/) on the Ayla Shield:

<img src="ayla-dev-kit-to-cloud.png" width="560">

The host application defines a set of properties appropriate for the device. When you connect your device, the Ayla Cloud instantiates a digital twin from a template (not shown) to model the device. Client applications interact with the digital twin:

<img src="../user-guide/properties/device-cloud-app.png" width="780">

As you experiment with adding electronic gadgets to your kit, you will also add corresponding properties to the host application and digital twin.