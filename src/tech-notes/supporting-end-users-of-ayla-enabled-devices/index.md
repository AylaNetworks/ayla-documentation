---
title: Supporting end users of Ayla-enabled devices
layout: site.html
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Supporting end users</a></li>
    <li><a href="#using-the-ayla-dashboard">Using the Ayla Dashboard</a></li>
    <li><a href="#fixing-wi-fi-issues">Fixing Wi-Fi issues</a></li>
    <li><a href="#escalating-issues">Escalating issues</a></li>
  </ul>
</aside>

This page provides guidance for teams tasked with supporting end users of devices that connect to the Ayla IoT Cloud. The guidance is limited, for the most part, to Ayla-related topics such as how to use the Ayla Dashboard, how to fix common connectivity issues, how to determine which issues to escalate to Ayla Support, and how to escalate those issues. This page does not explain how to troubleshoot any particular device. 

# Using the Ayla Dashboard

# Fixing Wi-Fi issues

This section provides steps for troubleshooting IoT device connectivity issues.

1. Reset the router and Wi-Fi access point. If they are two separate devices, reset the router first, and then reset the access point. The following steps apply to most routers and access points:
    1. Power off the device by pressing the power switch or unplugging.
    1. Wait for 30 seconds.
    1. Power on.
    1. Verify completion usually indicated by a solid LED light.
1. Whitelist the following router ports: 80, 443, 53, 55055, 55056.
1. Set up the IoT device within proper distance of the access point.
    1. Place the device within 10 feet of the access point (preferably) in the same room.
    1. Place the device at least one foot away from the access point.
    1. After completing initial setup, move the device to the desired location, and verify connectivity.
1. Verify that the IoT device is configured to use the intended SSID, and be aware of the following:
    1. The device may be within range of several Wi-Fi access points.
    1. The target access point should be enabled for 2.4 GHz (802.11 B/G/N).
    1. In rare cases, your device may be within range of two access points with the same SSID. In this case, be sure to configure the device with the MAC address of the intended access point. Instructions for finding the MAC address should be in the Admin section of the Wi-Fi Access Point user manual.
1. Check Wi-Fi security, keeping the following in mind:
    1. Wi-Fi access point security keys are usually case sensitive, so you may want to retype it.
    1. Ayla supports the following Wi-Fi security schemes: `Open`, `WEP`, `WPA (PSK)`, `WPA2_Personal (PSK)`, `WPS` (except for AP-Mode registration.).
1. Check the Wi-Fi signal strength and quality at the location where you plan to deploy your device. Here are some approaches:
    1. Use a cell phone or tablet to check the Wi-Fi signal strength and data rate at the location. These values will provide a reasonable baseline.
    1. Download and use a Wi-Fi Analyzing App for iOS or Android available at the online stores. Performance may depend on your internet service plan.
1. Check for other 2.4 GHz consumer devices that might be interfering with the Wi-Fi signal. These might include Bluetooth devices, baby monitors, cordless phones, walkie talkies, remote control toys, wireless video and audio equipment, microwaves, and wireless keyboard and mice.
1. Reset the IoT device to factory settings as described in the device manufacturer user manual.

# Escalating issues