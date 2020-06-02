---
title: Additional Best Practices for Device Developers
layout: technote.html
author: Sahir Sahit
creationDate: June 2, 2020
lastModifiedDate: June 2, 2020
---

### User Transfer

When a user unregisters a device and a new user registers the device gets the event about this. At this time, if the current state of the device should be known the the new user, the device should send up the latest value for properties. This is because, when user ownership changes, the new user will not have access to the latest property values unless the device sends it up.

### Connectivity troubleshooting

As a best practices, we should ask customers to add standard WiFi datas into templates. We should get WiFi RSSI, Dissociation Count and Authentication errors so in the future it makes troubleshooting easier. 

### Periodic Data Collection

As a best practices, implement fuzzy schedules when having your fleet of devices send data at a specific time, so the data does not all come in at the some time, which would lead to latency, hitting rate limits and potential cloud instability.

### Use Fixed SSID during device Wi-Fi setup

As much as possible, try to implement Fixed-SSID for Soft AP connectivity and AP-Mode registration type for user registration (unless there are good reasons to use other types of registration). When entering Soft AP setup mode, the device should be configured to remain in Soft AP mode and continue broadcasting its own SSID for at least 30 minutes (if not longer). Setting a longer expiration time ensures that the device is always ready in case the user is distracted from completing the device setup flow. If a BLE radio is available, the default setup method that should be implemented is Wi-Fi setup over BLE. These guidelines will ensure that the device works well with the Mobile App to create a good device onboarding experience.

### Flags

Enable the right flag during factory testing so that the device isn't marked `activated`.
