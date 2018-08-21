---
title: Getting Started
layout: page-with-sidebar.html
---

## CocoaPods
Working with AMAP requires the use of [CocoaPods](https://cocoapods.org) 1.2.1 or higher for dependency management.

If you do not already have [CocoaPods](https://cocoapods.org), you must install it first using Terminal: 

```bash
$ gem install cocoapods
```

Note: This version of AMAP now supports Cocoapods version 1.2.1 and above. If you currently have a version of Cocoapods lower than 1.2.1, it may work, but it is recommended to upgrade using the following command.

```bash
$ gem upgrade cocoapods
```

## Setting up the AMAP Codebase
Following this procedure will allow you to work on and modify your local copy of AMAP, push changes to your own private repository and pull any new updates from Ayla should you so choose. 

For explanation purposes, let's say our project is called '_MyApp_'.

1. Create a private, empty repository for your project _MyApp_. For this example we will assume the git repository URL is `https://github.com/myUser/MyApp.git`. Just replace this url with the real one. 

2. Clone the AMAP Repo.

    ```bash
    $ git clone https://github.com/AylaNetworks/AMAP_iOS_Public.git
    $ cd AMAP_iOS_Public/
    ```

3. Configure your push repository with the url of your project, replace the real URL here.

    ```bash
    $ git remote set-url origin https://github.com/myUser/MyApp.git
    ```

4. Configure git to be able to pull new AMAP updates.

    ```bash
    $ git remote add AMAP https://github.com/AylaNetworks/AMAP_iOS_Public.git
    $ git remote set-url --push AMAP "No pushing please"
    ```

    From this point on use the command `$ git pull origin master` to pull changes from your own project's repository. Use `$ git pull AMAP master` to update AMAP.

5. Push the code to your project's repository.

    ```bash
    $ git push origin master
    ```

## Building the AMAP application
With your local git repositories set up as laid out above, you can begin building the application.

6. Install the required CocoaPods (using Terminal)

    ```bash
    $ pod install
    ```

    Once the Pods have been installed correctly, CocoaPods will generate a `AgileLink.xcworkspace` file. When opening AMAP in Xcode, be sure to _only open the .xcworkspace_ file. 

7. Open the `AgileLink.xcworkspace` file in Xcode.

8. Select the Project from the _Project Navigator_ panel.

9. Rename the _AMAP_ target to the intended name of your application (or create a duplicate). (If your product requirements include Apple HomeKit compatibility, select the 'AMAP HomeKit' target as a starting point instead.)

10. In the _General_ tab, edit your _Target Identity_ (Bundle Identifier, Version and Build).

11. In the _Build Settings_ tab change the build settings (Code Signing and Provisioning Profiles and Product Name) to match your requirements. You may optionally rename the _plist_ file and _Scheme_ as well. 

10. Make sure the _Active Scheme_ is '_AMAP_' (or the custom name entered in step 9) and that you select the device or simulator you wish to run on.

11. Run by clicking the ▶ Button in Xcode or using the Command+R (⌘R) hotkey. The app should build and run on the selected device.

## Troubleshooting Tips

If you can not build the app, one of the following actions may help you to solve the problem.
- If you see `“[!] Unable to find a specification for SAMKeychain”`, try running the `$ pod repo update` command in Terminal.
- Delete cached files and old build intermediates inside Xcode by opening the 'Product' menu and holding down the Option key. The "Clean" option should become "Clean build folder".  Select this option and click "Yes" to confirm.
- Delete the `Podfile.lock` file from your project folder and run the `$ pod update` command in Terminal.