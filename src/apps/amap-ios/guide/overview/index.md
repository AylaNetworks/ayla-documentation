---
title: Overview
layout: page-with-sidebar.html
---

Ayla's Agile Mobile Application Platform (AMAP) provides the underpinnings required to support multiple devices and themes, with a strong separation of MVC, UI, business logic, and SDK calls.

The AMAP codebase consists of three primary components:

1. [Ayla SDK](https://github.com/AylaNetworks/iOS_AylaSDK_Public) - This piece is the core of most any Ayla-enabled application. Any application functionality and UI is built on top of the main SDK, which handles the communication between the mobile device and the Ayla Cloud Service.
1. [AMAP Core Framework](https://github.com/AylaNetworks/AMAP_iOS_Core_Framework_Public) - The Core Framework contains the core logic required to handle the application lifecycle quirks, user authentication, caching, and higher-level object management required for any AMAP-based application. This piece should not be modified by end developers.
1. [AMAP iOS](https://github.com/AylaNetworks/AMAP_iOS_Public) - This piece contains all the UI presentation resources and OEM-specific data and business logic. Expanding upon the two lower layers, this piece can and should be modified or reconstructed to fit the needs of the customer and developers.

The [Podfile](https://github.com/AylaNetworks/AMAP_iOS_Public/blob/master/Podfile) specifies the exact library versions used to build the application. To build the app using a different version of the Ayla SDK or AMAP_Core_Framework, you can change the Podfile to include a specific version. Note that Ayla testing is done on specific version combinations so it is always best to use the versions specified at release time while updating to the latest hot-fixes. For example:

```ruby
conditional_assign("ayla_sdk_branch", "release/5.8.04")
conditional_assign("ayla_amap_core_branch", "release/5.8.01")
```

The above code tells release/5.8.04 branch of Ayla Sdk and release/5.8.01 of AMAP_Core_Framework were used to build the current release.