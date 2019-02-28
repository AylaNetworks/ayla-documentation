---
title: Ayla Mobile
layout: notes.html
---

## Mobile 6.4 Release

### Highlights

1. Insights datapoint source support added to the SDK
1. BLE WiFi on-boarding support in Aura
1. Improved white box device on-boarding in the iOS SDK
1. Grillright T-Stat BLE PaaG support: can be either a gateway node or a Phone as a Gateway node!
1. New DevKit alpha support in Aura for iOS
1. Added WiFi AP-only on-boarding flow for legacy devices (warning: poor unhappy path UX)
1. Innovative new RBG Color picker in Mobile Foundry includes seamless brightness integration
1. Parity for BLE GW support with node notification and sharing for the LED color bulb in AMAP for Android
1. Numerous UI & UX improvements for sign-up, sign-in, on-boarding, accounts, shares, and notifications
1. Tools and language upgrades for both iOS an Android
1. Ayla Aura, Ayla AMAP, and Ayla Mobile Foundry applications are available in the Apple App and Google Play store.

### iOS

SDK

1. Basic refactoring to new BLE GATT Architecture
1. Adds x-ayla-source header set to Mobile to POST datapoints.json
1. Alpha support for BLE WiFi Setup
1. Unit test updates
1. Use routing table instead of DHCP to determine default gateway
1. Local device (PaaG) registration fix
1. SWIFT 4.2 code enhancements

Aura

1. Grillright T-Stat PaaG (local device) support
1. New DevKit alpha support
1. Alpha support for BLE WiFi Setup
1. Added WiFi AP only on-boarding flow for legacy devices ( bad unhappy path for the user)
1. iOS 10.x UX improvements
1. Local device (PaaG) registration bug fix
1. SWIFT 4.2 code support and enhancements
1. Improved reset password message

AMAP

1. Improved handling for an expired or missing refresh token
1. Option to save the password during WiFi setup
1. Improved UI/UX for Account, Shares, and Actions screens
1. Security improvement: removed NSAllowsArbitraryLoads from plist as iOS 9 is no longer supported

AMF

1. Improved customization for device setup and registration flows
1. Implement with new BLE class structure
1. Added minimal.json app configuration
1. Added BLE ThermostatService
1. Setup flow UI/UX improvements
1. RBG Color picker includes brightness
 
### Android

SDK

1. Basic refactoring to new BLE GATT Architecture
1. Adds x-ayla-source header set to Mobile to POST datapoints.json
1. Alpha support for BLE WiFi Setup
1. Improved registration now allows for adjustable retries for SameLAN registration
1. Harding improvement by adding null checks for calls to getLanModule from the setup device
1. Improved LAN error handling
1. Tools upgrade Gradle from v4.4 to v4.6 & Gradle plugin from v3.1.4 to v3.2.0
1. Tools upgrade to Android Studio v3.3

Aura

1. Improved reliability for retrieving device scan results
1. Alpha support for new DevKit
1. Tools upgrade Gradle from v4.4 to v4.6 & Gradle plugin from v3.1.4 to v3.2.0
1. Tools upgrade to Android Studio v3.3

AMAP

1. General user sign-up and sign-in improvements
1. Tools upgrade Gradle from v4.4 to v4.6 & Gradle plugin from v3.1.4 to v3.2.0
1. Tools upgrade to Android Studio v3.3
1. Add BLE GW support
1. Add node notifications for the LED color bulb
1. Add node sharing for the LED color bulb

AMF

1. General user sign-up and sign-in improvements
1. Tools upgrade Gradle from v4.4 to v4.6 & Gradle plugin from v3.1.4 to v3.2.0
1. Tools upgrade to Android Studio v3.3 

### JavaScript

JS SDK v1.0.0

No changes