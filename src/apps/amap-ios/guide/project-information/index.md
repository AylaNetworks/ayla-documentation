---
title: Project Information
layout: page-with-sidebar.html
---

## Xcode Build targets
The `AgileLink.xcworkspace` file includes a number of build targets: 

- AMAP 
- AMAP HomeKit
    - Use this target as the base of your application if your product requirements include Apple HomeKit compatibility
- Documentation
    - Building this target will recompile the AMAP Documentation and Developer's Guide.

## Updating the AMAP Core Framework or Ayla SDK
Since AMAP uses separate repositories for the AMAP Core Framework and Ayla SDK, it's simple to update the either or both without causing undo disturbance to your in-progress application.  To update the AMAP Core Framework, the Ayla SDK, or to any of the other dependencies, enter the `pod update` command in Terminal.

## Documentation
###  Installation
Run the 'Documentation' build target to install docsets and Developer's Guides for AMAP and the Ayla SDK. AMAP and the Ayla SDK are both documented using [appledoc](https://github.com/tomaz/appledoc/), which collates inline documentation into both an installed docset accessible from within Xcode, and an interactive, HTML-based API and Developer's Guide guide for AMAP.

The Documentation build target will attempt to install appledoc for you if it cannot be found, or you may install it yourself by compiling [from source](https://github.com/tomaz/appledoc/), or by using [Homebrew](http://brew.sh)

```bash
$ brew install appledoc
``` 

With `appledoc` installed, you may run the 'Documentation' target within the '`AgileLink.xcworkspace`' file and run it to compile and install the AMAP and Ayla SDK docsets and guides. This will open an interactive HTML-based API guide for AMAP and the Ayla SDK and allow for AMAP and SDK inline help within Xcode. 

You can also view the inline documentation it by Option-clicking on any AMAP or Ayla SDK class or constant to bring up the _Quick Documentation_ window.

#### AMAP
The _AMAP Developer's Guide_ and _AMAP Architecture Specification_ provide a good starting point for understanding the AMAP framework concepts. By staying within the framework boundaries, the finished application will be able to easily take in any new AMAP releases and bug fixes. If you encounter an issue with the AMAP Core Framework or Ayla SDK during development (account, session, or device management, notifications, or networking issues, for example) please contact customer support for advice and assistance before making changes to the framework.

#### Ayla SDK
The Ayla SDK has its own set of appledoc documentation that will be compiled and installed along with the AMAP documentation when you build the 'Documentation' target within Xcode. It will be saved in the 'doc' folder along with the AMAP guide, and can be accessed by a link from the main page of the AMAP documentation.

## Upgrading from AMAP version 4.x or below.
This version of AMAP *is not compatible* with versions of the Core Framework or Ayla SDK lower than 5.0

## Contribute your code
If you would like to contribute your own code change to our project, please submit pull requests against the ["incoming" branch on Github](https://github.com/AylaNetworks/AMAP_iOS_Public/tree/incoming). We will review and approve your pull requests if appropriate.

## Dependencies

- SAMKeychain ([License](https://github.com/soffes/SAMKeychain/blob/master/LICENSE))
- PDKeychainBindingsController ([License](https://github.com/carlbrown/PDKeychainBindingsController/blob/master/LICENSE))
- libPhoneNumber-iOS ([License](https://github.com/iziz/libPhoneNumber-iOS/blob/master/LICENSE))
- AMSlideMenu ([License](https://github.com/SocialObjects-Software/AMSlideMenu/blob/master/LICENSE))
- TSMessages ([License](https://github.com/KrauseFx/TSMessages/blob/master/LICENSE))
- OCMockito ([License](https://github.com/jonreid/OCMockito/blob/master/LICENSE.txt))
- Google/SignIn ([License](https://github.com/googlesamples/google-services/blob/master/LICENSE))

## Requirements
- [CocoaPods](http://cocoapods.org) 1.3.1
- [Xcode 9.1.0](https://developer.apple.com/xcode/downloads/)
- iOS 9.0 or higher
