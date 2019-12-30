---
title: API Guide
layout: site.html
a: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Guide</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#devices">Device Service</a></li>
    <li><a href="#properties">Datastream Service</a></li>
    <li><a href="#events">IoT Command Center</a></li>
  </ul>
</aside>

This page shows you how to use the [API Browser](../api-browser). The examples on this page refer to the following devices:

|product_name|dsn|model|oem_model|
|-|-|-|
|ESP32-1|AC000W000000001|AY008ESP1|ledevb|
|ESP32-2|AC000W000000002|AY008ESP1|ledevb|

Each of these devices includes the properties in the table below. Regarding the ```direction``` column, ```output``` means data flows from the device to the cloud, and ```input``` means data flows from the cloud to the device.

|name|base_type|direction|notes|
|-|-|-|-|-|
|Blue_button|boolean|output||
|Blue_LED|boolean|input||
|Green_LED|boolean|input||
|cmd|string|input|Sets log = cmd.|
|log|string|output||
|input|integer|input|Sets output = input.|
|output|integer|output||
|decimal_in|decimal|input|Sets decimal_out = decimal_in.|
|decimal_out|decimal|output||
|upload_file|file|input|Upload file to this property|
|download_file|file|output|Download file from this property|

# Getting Started

# Device Service

# Datastream Service

# IoT Command Center
