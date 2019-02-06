---
title: Perform OTA Updates
layout: ayla-linux-agent.html
b: block
---

This tutorial shows you how to update the host application and Ayla Linux Agent running on your RPi.

UNDER CONSTRUCTION.

OTA updater is triggered in device_linux_public/daemon/devd/serv.c

static int serv_ota_exec(json_t &#42;ota_obj, const char &#42;auth_header)

OTA updater is in device_linux_public/util/ota/ota_update.c

Calls the platform specific OTA update function int platform_ota_apply(void)

The OTA update function for RPi is here: device_linux_public/lib/platform/raspberry_pi/ota.c

int platform_ota_apply(void)

platform_ota_apply() calls the script: device_linux_public/lib/platform/scripts/apply_ota.sh

The script extracts the /tmp/ayla_ota.img file which is a tar of the device_linux_public folder that was uploaded through the dashbaord as the OTA image.

The script then builds appd and install it by overwriting the old appd on the RPi.