---
title: Releases
layout: apps-amap-ios.html
---

### v5.8.03 -- 2018-5-22
- GDPR compliance support

### v5.8.02 -- 2018-4-13
- Fixes auth from cache when touch ID is not enabled
- Bulit using iOS_AylaSdk version 5.8.04

### v5.8.01 -- 2018-1-19
- Redirect to Login Screen after changing password

### v5.8.00 -- 2017-12-19
- New known SSID on-boarding flow for iOS 11
- Support for iOS_AylaSDK 5.8
- Fixed iAMAP-441: Localize "Invalid Email or Password" Error Message
- General bug fixes and improvements

### v5.7.01 -- 2017-11-03
- Fix build bug in Xcode 9

### v5.7.00 -- 2017-09-28

New & Improved
- iOS 11 support
- Support for simplified Chinese
- Acknowledge APNS receipt when app is in the foreground

Bug Fixes & Chores
- Excludes WatchKit code from app compilation
- Built using iOS_AylaSDK_Public version 5.7.00
- Use new TriggerApp API for more flexible APNS support
- Fix Google OAuth bug
- Built using AMAP_iOS_Core_Framework_Public version 5.7.00
- Built using Xcode 9.0
- Support for iOS 9 through iOS 11.0
- Includes all prior AMAP & Core Framework 5.x bug & hot fixes

Known issues
- WiFi device on-boarding degradation in iOS 11
- The captive network assistant is no longer dismissed when launching an app via custom url scheme redirect
- A bug report has been filed with Apple

### v5.6.02 -- 2017-08-11
- Fix bug to allow '+' sign in WiFi password

### v5.6.01 -- 2017-07-05
- Excludes WatchKit 1.0 code from app compilation temporarily

### v5.6.00 -- 2017-06-23
- Built using SDK v5.6
- New support for IDP Partners using Ayla's Demo Partner Service (similar to the SSO reference service)
- Improved SSID and password management
- New app notes for IDP, Notification, Schedules and Sharing
- New device sorting mechanisms, default sort by connectedAt
- SSID save and recall during Wi-Fi setup
- Bug fixes and improvements
- Removed Apple Watch support

### v5.5.00 -- 2017-04-03

#### New & Improved
- Geofence and beacon improvements
  - New batched action sets make it easier for automations to control multiple devices and/or actions per device
- Google OAuth2 AuthProvider Support
  - Replaces Webview OAuth which has been deprecated by Google
  - See app note /doc folder for details
- Wi-Fi Setup support for iPhone 7 running iOS 10.3
- Minor improvements in Wi-Fi Setup, Contacts UI/UX
- Unified propertyTrigger and tripperApp save
- Improved About and email logs preamble
- Improved email address change handling
- Improved owner contact management
- Allow gateway and node sharing

#### Bug Fixes & Chores
- Google OAuth2 AuthProvider Support
  - Replaces Webview OAuth which has been deprecated by Google
  - See app note /doc/AppNote-UsingGoogleSign-in.pdf for details
- Built using iOS_AylaSDK_Public version 5.5.00
- Built using AMAP_iOS_Core_Framework_Public version 5.5.00
- Built using XCode 8.3
- Includes all prior hot fixes

### v5.4.02 -- 2017-03-17
- Support SDK 5.4.02 and Core 5.4.02

### v5.4.01 -- 2017-03-14
- Fix pod install bug

### v5.4.00 -- 2017-01-30
#### New & Improved
- New beacon support
- Improved geo-fence cross-platform support
- WiFi Setup and Registration Improvements
- DeviceActions now only show scheduleable properties
- Support for iPhone 7 running iOS 10.2+

#### Bugs Fixes and Chores
- Built using iOS_AylaSDK_Public version 5.4.00
- Built using AMAP_iOS_Core_Framework_Public version 5.4.00
- Adds missing objects in HomeKit target
- New unit tests and improved unit tests
- Re-skinned to original UI colors
- Changed .strings encoding to UTF-8
- Setup message localization
- Includes all prior hot fixes

### v5.3.00 -- 2016-11-07
#### New & Improved
- Geo-fencing support
  Automatically control a device based on your location and direction
- TouchID support
  Use TouchID to sign-in
- UI Improvements
  Minor UI refresh

#### Bug Fixes & Chores
- Built using the latest releases
- Documentation updated
- AMAP_iOS_Core_Framework release/5.3.00
- iOS Ayla Mobile Library (iAML) release/5.3.01

### v5.2.01 -- 2016-08-25
- Fixes crash in device sharing
- Improved location handling

### v5.2.00 -- 2016-08-22
#### New & Improved
- Improved performance and reliability
- UI & UX Improvements
- Dropped support for Zigbee Gateways (use Generic Gateway)

#### Bug Fixes & Chores
- Built using the latest releases
- AMAP_iOS_Core_Framework release/5.2.00
- iOS Ayla Mobile SDK release/5.2.00