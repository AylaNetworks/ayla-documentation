---
title: Master List
---

|Status|Meaning|
|-|-|
|<span style="color:green">Green</span>|Published.|
|<span style="color:red">Red</span>|Assigned.|
|<span style="color:orange">Orange</span>|Under consideration.|
|<span style="color:gray">Gray</span>|Available.|
|<span style="color:black">Black</span>|Reserved.|

### [<span style="color:green">00000001</span>](/tech-notes/00000001/): My New Tech Note

### [<span style="color:green">00000002</span>](/tech-notes/00000002/): Handling ack-enabled properties

### [<span style="color:red">00000003</span>](/tech-notes/00000003/): Additional Best Practices for Device Developers

### [<span style="color:green">00000004</span>](/tech-notes/00000004/): Migrating a template from development to field

### [<span style="color:green">00000005</span>](/tech-notes/00000005/): New Template Architecture

### [<span style="color:red">00000006</span>](/tech-notes/00000006/): Setting up and performing a factory reset for ESP32

### [<span style="color:green">00000007</span>](/tech-notes/00000007/): Supporting end users of Ayla-enabled devices

### [<span style="color:green">00000008</span>](/tech-notes/00000008/): Using BLE to set up Wi-Fi for ESP32

### [<span style="color:orange">00000009</span>](/tech-notes/00000009/): Ayla Mobile Apps and Cross-platform App Frameworks

### [<span style="color:orange">00000010</span>](/tech-notes/00000010/): QA Alpha

### [<span style="color:orange">00000011</span>](/tech-notes/00000011/): Device self-offline status

Phil Hsu on 2020-05-28: We have a requirement from our product to introduce a new connection status to distinguish between Offline (determined by cloud) and SelfOffline (device sends DISCONNECT). 
The flow is descibed in [this page](https://aylanetworks.atlassian.net/wiki/spaces/EN/pages/927760392/DNC+devices+connection+status+flow). 
This concept is similar to Online and PollingOnline. Currently only MQTT devices will send DISCONNECT to cloud(MQTT Broker).
We will need to add a new status in CSS and ADS. The new status name is open for discussion. Please give any feedback or concerns.
If no further inquiries by the end of this week, I will start the implementation design next week. 

### [<span style="color:orange">00000012</span>](/tech-notes/00000012/): Message properties

### [<span style="color:orange">00000013</span>](/tech-notes/00000013/): Advanced Rules Engine

* See [ARE API 2.0](https://aylanetworks.atlassian.net/wiki/spaces/EN/pages/469958682/ARE+API+2.0)
* See also [Cloud Service Team Home](https://aylanetworks.atlassian.net/wiki/spaces/EN/pages/6521524).

### [<span style="color:gray">00000014</span>](/tech-notes/00000014/): Available

### [<span style="color:gray">00000015</span>](/tech-notes/00000015/): Available

### [<span style="color:gray">00000016</span>](/tech-notes/00000016/): Available

### [<span style="color:gray">99999998</span>](/tech-notes/99999998/): Available

### [<span style="color:gray">99999999</span>](/tech-notes/99999999/): Available