---
title: Downloads
layout: downloads.html
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
<ul>
<li><a href="#core-title">Downloads</a></li>
<li>
<a href="#ayla-agents">Ayla Agents</a>
<ul>
<li><a href="#ayla-device-agent-for-espressif-esp32">Ayla Device Agent for Espressif ESP32</a></li>
<li><a href="#ayla-host-library-and-reference-application">Ayla Host Library and Reference Application</a></li>
<li><a href="#ayla-portable-device-agent">Ayla Portable Device Agent</a></li>
<li><a href="#ayla-linux-device-agent">Ayla Linux Device Agent</a></li>
<li><a href="#ayla-linux-gateway-agent">Ayla Linux Gateway Agent</a></li>
</ul>
</li>
<li>
<a href="#ayla-firmware">Ayla Firmware</a>
<ul>
<li><a href="#ampak">Ampak</a></li>
<li><a href="#azurewave-cu300">Azurewave CU300</a></li>
<li><a href="#inventek-ism43362">Inventek ISM43362</a></li>
<li><a href="#murata-type-1vd">Murata Type 1VD</a></li>
<li><a href="#murata-type-abr">Murata Type ABR</a></li>
<li><a href="#murata-type-1ld">Murata Type 1LD</a></li>
<li><a href="#murata-type-yd">Murata Type YD</a></li>
<li><a href="#usi-bm09">USI BM09</a></li>
<li><a href="#usi-bm14">USI BM14</a></li>
<li><a href="#usi-bm22">USI BM22</a></li>
<li><a href="#usi-bm30">USI BM30</a></li>
</ul>
</li>
</ul>
</aside>

<div class="form-row">
<div class="col-auto"><input class="form-control form-control-sm" type="text" placeholder="username"></div>
<div class="col-auto"><input class="form-control form-control-sm" type="password" placeholder="password"></div>
</div>

# Ayla Agents

## Ayla Device Agent for Espressif ESP32

|Date|Download|Docs|Features
|-|-|-|
|`2020-04-16`|[1.5.3]()|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-5-3/)|- Makes json parser re-entrant.<br/>- Fixes json parser input error.|
|`2020-03-30`|[1.5.2]()|&nbsp;|- Prevent premature completion of HTTP send.<br/>- erroneous HTTP receive failures (ESP32) and endless LAN mode echos.<br/>- JSON encoding errors during LAN mode operations.<br/>- cancel HTTP request timer when request is done.<br/>- cstyle checking error on generated certificates source file.<br/>- ESP32: support esp-idf v3.3.1|
|`2020-02-13`|[1.5.1-beta]()|&nbsp;|- Resolves some LAN Connect issues.<br/>- Support for ESP-IDF v3.2.|
|`2019-08-10`|[1.5-beta]()|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-5-beta/)|- Supports batched properties.<br/>- Supports file properties.<br/>- Supports logging to the Ayla Log Service.<br/>- Metrics framework to periodically report statistics on agent behavior.<br/>- Many bug fixes and minor feature enhancements.|
|`2019-08-16`|[1.3.11-beta]()|&nbsp;|- Fixes customer issues.|
|`2019-07-02`|[1.3.10-beta]()|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-3-10-beta/)|- Fixes customer issues.<br/>- Redesigned HTTP client to better support LAN mode.<br/>- Upgrades the supported ESP-IDF SDK to version 3.2.|
|`2019-04-15`|[1.3.9]()|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-3-9/)|- Frees prop structure when a file chunk has been processed completely.<br/>- ADW scan from app doesn't reacquire lock if aborted.<br/>- Module does not respond to DHCP requests during onboarding.<br/>- Supports for file properties.<br/>- ADA ESP32 reverse-REST command hangs http client.|
|`2019-02-20`|<a class="download" href="ada-esp-idf-src-1.3.8.tgz">1.3.8</a>|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-3-8/)|- Sets default start time to `2019-01-01 00:00:00 UTC`.<br/>- Syncs time with `HTTPS GET /ping` every 22 hours or so.<br/>- Asserts failed in `client_task.c:96` after changing service override from dashboard.<br/>- Fixes hard-to-exploit LAN OTA oracle attack weakness.<br/>- Supports 32-character SSIDs.<br/>- Supports for ESP-IDF on ESP32.|

## Ayla Host Library and Reference Application

|Date|Download|Docs|Features|
|-|-|-|
|`2020-05-12`|[2.1]()|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-host-library-and-reference-application/v2-1/)|This release enables customers and partners to develop host applications on their own hardware, to communicate with an Ayla Production Agent to connect their device to Ayla's IoT platform. The new Host Library has been restructured from the ground up, to be more portable, more flexible, and easier to use and understand. Most importantly, it elevates the previous codebase from a "demo only" status to a new member of Ayla's supported device product line. This version of the Host Library includes support for development on the new Ayla Development Kit, and message properties.<br/><br/>- add support for sending batch datapoints.<br/>- batch datapoint demo added under example/app/demo_batch.<br/>- improve host-lib release version tracking.<br/>- allow linux version to specify serial port on command line.<br/>- add help to top-level makefile.<br/>- message prop update causes warning `invalid loc len 0`.<br/>- demo message_start off-by-one on length.<br/>- MCU doesn't reliably send feature mask.<br/>- wait for confirm after any property sent.<br/>- host_lib linux port used wrong size for feature mask.<br/>- power-on self test (POST) hangs in SPI ping test.<br/>- module OTA go-ahead fails if module reset during config read.<br/>- host loops getting NAK 9 on sending long string.<br/>- demo_msg gets into loop on bogus json_in message datapoint.<br/>- MCU fails to send features if second NAK pended soon after boot.<br/>- MCU stops sending requests to module including enable listen.<br/>- MCU sends properties to failed destinations.<br/>- host_lib serial_msg sending some messages twice over SPI.<br/>- MCU resends last completed property after module resets.|
|`2019-08-05`|[2.0]()|&nbsp;|&nbsp;|

## Ayla Portable Device Agent

The Ayla Portable Agent allows customers to enable Ayla connectivity on their preferred platform of choice. As a modularized software agent, not targeted to any specific SDK or platform, the Portable Agent allows Ayla’s partners and customers to connect their devices to Ayla IoT platform using Wi-Fi or Cellular modules of their choice.

|Date|Download|Docs|Features|
|-|-|-|
|`2019-10-28`|[2.4-beta]()|&nbsp;|Version 2.4-beta release is an official production release which contains an updated Http agent version and a CoAP/DTLS version. The Http agent version contains support for secure communication using TLS, Wi-Fi setup, LAN mode, and example applications. Batched datapoint support is included in this release. CoAP/DTLS agent has support for secure communications over CoAP/DTLS, interactive device support, and example applications.|
|`2019-03-20`|[2.3.1-beta]()|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-portable-solution/v2-3-1-beta/)|Version 2.3.1-beta release is an official production release that adds Wi-Fi support to the Ayla Portable Device Agent. New features include the support for secure Wi-Fi setup using Ayla-enabled mobile apps, LAN Connect for local device control, and LAN OTA device recovery. This release is best suited for partners and customers to enable their preferred Wi-Fi modules to connect to the Ayla IoT platform. The additional patch package includes some additional test scripts that are required to fully test the agent after it has been ported to a new platform.|
|`2018-09-29`|[2.2]()|&nbsp;|Version 2.2-beta release is a redesign of the Ayla Device Agent, optimized for low-bandwidth high-latency cellular networks, such as NB-IoT and Cat-M1. This release leverages the enhanced messaging protocol (CoAP) that devices use to communicate to the cloud, with reduced session overhead and compact messaging payloads to optimize for cellular data costs. This release supports features suitable for sensor devices that send data updates periodically to the platform. For use cases requiring more interactive applications over higher bandwidth 3G/4G networks, customers should continue to use pda-2.1.1.|
|`2018-08-02`|[2.1.1-beta]()|&nbsp;|Version 2.1.1-beta is a Portable Device Agent release suitable for porting to chipsets or modules that run over higher bandwidth networks (Cat-1, 3G, 4G).  The features targets applications that are more interactive, requires larger data transfers, and typically requires device control from the cloud.|

## Ayla Linux Device Agent
|Date|Download|Docs|Features|
|-|-|-|
|`2019-05-23`|[1.7](https://github.com/AylaNetworks/device_linux_public)|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-linux-device-solution/v1-7/)|- Fixes remove node error issue.<br/>- Updates install script to use ssl new version.<br/>- Fixes log cannot send to cloud issue.<br/>- Adds large message prop type support.|

## Ayla Linux Gateway Agent
|Date|Download|Docs|Features|
|-|-|-|
|`2019-5-23`|[1.7](https://github.com/AylaNetworks/device_linux_gw_public)|[Guide](https://docs.aylanetworks.com/edge-solutions/ayla-linux-gateway-solution/v1-7/)|- Fixes remove node error issue.<br/>- Updates install script to use ssl new version.<br/>- Fixes log cannot send to cloud issue.<br/>- Adds large message prop type support.|

# Ayla Firmware

## Ampak

|Date|Download|Docs|Features|
|-|-|-|
|`2020-05-12`|[2.11]()|&nbsp;|List features here.|
|`2019-08-05`|[2.10]()|&nbsp;|List features here.|
|`2019-07-08`|[2.9.8]()|&nbsp;|List features here.|
|`2018-09-30`|[2.9.4]()|&nbsp;|List features here.|
|`2018-07-15`|[2.9.2]()|&nbsp;|List features here.|
|`2017-12-14`|[2.9]()|&nbsp;|List features here.|
|`2018-02-09`|[2.6.6-beta]()|&nbsp;|List features here.|
|`2018-01-22`|[2.6.5-beta]()|&nbsp;|List features here.|
|`2017-09-25`|[2.6.4-beta]()|&nbsp;|List features here.|
|`2017-08-14`|[2.6.3-beta]()|&nbsp;|List features here.|
|`2017-01-25`|[2.6-beta]()|&nbsp;|List features here.|
|`2017-01-03`|[2.5.3-beta]()|&nbsp;|List features here.|
|`2016-12-01`|[2.5.2-beta]()|&nbsp;|List features here.|
|`2016-11-18`|[2.5.1-beta]()|&nbsp;|List features here.|
|`2016-09-17`|[2.5-beta]()|&nbsp;|List features here.|
|&nbsp;|[2.4.9-beta]()|&nbsp;|List features here.|
|&nbsp;|[2.4.7-beta]()|&nbsp;|List features here.|
|&nbsp;|[2.4.6-beta]()|&nbsp;|List features here.|
|&nbsp;|[2.4.5-beta]()|&nbsp;|List features here.|
|&nbsp;|[2.4.3-beta]()|&nbsp;|List features here.|
|&nbsp;|[2.4.2-beta]()|&nbsp;|List features here.|
|&nbsp;|[2.4.1-beta]()|&nbsp;|List features here.|
|&nbsp;|[2.3-beta]()|&nbsp;|List features here.|
|&nbsp;|[1.15-beta]()|&nbsp;|List features here.|

## Azurewave CU300

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## Inventek ISM43362

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## Murata Type 1VD

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## Murata Type ABR

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## Murata Type 1LD

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## Murata Type YD

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## USI BM09

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## USI BM14

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## USI BM22

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

## USI BM30

|Date|Download|Docs|Features|
|-|-|-|
|`2000-00-00`|[sss]()|&nbsp;|sss|
|`2000-00-00`|[sss]()|&nbsp;|sss|

