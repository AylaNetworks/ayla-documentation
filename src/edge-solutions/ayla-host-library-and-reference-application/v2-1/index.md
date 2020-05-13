---
title: Ayla Host Library and Reference Application v2.1
layout: site.html
c: block
---

# Introduction 

This document describes: 

* Host applications which connect to an Ayla module containing an Ayla Production Agent. 
* The Ayla host library which provides connectivity to the Ayla module from a host MCU. 
* Reference host applications.
* Ayla hardware demonstration kits. 
* How to build and install the host application on the demonstration kits.  
* How to port the host library and reference applications to other MCU types or other platforms.  

This document is intended for those familiar with embedded C programming.  

The Ayla host library and reference applications package contains libraries and example applications. This document version corresponds to host library version 2.1 and the reference applications included in that package. 

The Ayla host library assists a device developer in connecting an MCU to an Ayla module to access the Ayla device service.  It is intended to be portable so that it can be used by customers with their host apps on whatever platform they choose. 

The reference host application ledevb contains code to demonstrate the use of the host library to send and receive simple properties, to configure certain module features, and to handle over-the-air (OTA) firmware updates. 

The reference host application demo_batch contains code to demonstrate sampling values over time and sending them periodically to the service with a single batch API. 

The host library and reference applications are built without an Operating System (OS) and can be ported to work with an RTOS.  

By default, they use a SPI connection between the Host MCU and the module.  A build option can select UART mode instead of SPI.  Other build options can add or remove features. 

The code is supported for the STM32F3Discovery board or the STM32F303RE Nucleo board.  A port to use the code on Linux connecting to the module over a UART is also provided. 

The code can be built with GCC on Linux, Mac-OS, or Windows. 

# Host Applications

# Host Library

# Reference Host Applications

# Reference Libraries

# Reference Evaluation Boards

# Reference Platform Code

# Building Host Code

The demo software package can be built using `make` from the command line. 

## Demo Components

The demo software package is divided into these components: 

* `ayla/libayla`: This folder contains Ayla’s platform-independent host library. Portions of this library are optional and will be included in the final application only if referenced. Code in this folder should be portable to any platform without modification. 
* `example`: This folder contains top-level reference files to exercise various Ayla features. The standard application used in Ayla’s development kits is in "app/ledevb."   An application using batch datapoints is in "app/demo_batch". 
* `ext`: This folder includes code developed by STMicroelectronics, ARM Limited, or others for platform support. 
* `arch`: This folder contains platform-specific code. It needs to be modified to suit your platform needs. The code includes UART/SPI configuration, I/O config, and bootloader.  
* `proj`: This folder contains project files for the unsupported toolchain: Keil. 
* `target`: This folder contains build options for each target board. 
* `toolchain`: This folder contains gmake settings for each toolchain (compiler suite). 

## Building the App

The Makefile works natively on Linux or Mac-OS or under Cygwin on Windows. The user must install the GNU ARM toolchain, Python, and OpenOCD as prerequisites. 

1. For Windows, install cygwin, keeping default tools, and adding "make", "python3.7" interpreter, and "gcc". 
1. Download and extract gnu_arm_eabi_none toolchain inside `<gnuarmtc>` (e.g. `/cygdrive/c/Program Files (x86)/GNU Tools ARM Embedded/8 2018-q4-major`). 
1. Unzip host library pkg (e.g., Ayla-host-lib-2.0.zip) inside a cygwin user home directory folder. 
1. Install openocd 0.10.0 or later from http://www.freddiechopin.info/en/download into cygwin /usr/share (it should be /usr/share/openocd).  OpenOCD is a tool that gives access to on-chip debugging via JTAG for loading flash and debugging. 
1. Add the /usr/share/openocd/bin or bin-x64 to $PATH.  Use bin-x64 if you have a 64-bit Windows system. 
    ```
    PATH=$PATH:~/openocd-0.10.0/bin-x64 
    ```
1. Set TOOLCHAIN_DIR in your environment to `<gnuarmtc>` or edit `<demo>/toolchain/arm-none-eabi.mk` to set TOOLCHAIN_DIR to `<gnuarmtc>`: 
    ```
    export TOOLCHAIN_DIR="/cygdrive/c/Program Files (x86)/GNU Tools ARM Embedded/8 2018-q4-major" 
    ```
1. Install Python.  For Windows, you can use https://www.python.org/downloads/windows.  This was tested with Python 3.7.3, but other versions should work. 
1. Run make.  This will build the host library, libdemo, libcons, libarch, and the demo.  The default target is the Nucleo board in SPI mode, with a debug console.  To select the discovery board, specify BOARD=discovery.  To select UART mode, select USE_UART=1.  To disable the debug console, specify NO_CONSOLE=1.  For example, use just 'make' for the Nucleo board: 
    ```
    make 
    make BOARD=discovery USE_UART=0 
    ```
1. Run "make download" with all of the other options you used for your build. This will download the demo to the devkit:
    ```
    make download 
    ```
1. For a new board that has not been set up before, the bootloader, which boots the app and is used to apply firmware updates, must be built and installed.  To do this run "make download_loader" 
    ```
    make download_loader 
    ```

After these build steps are complete, the board can be reset to start the app running. A gdb debugging session is available with "make debug". 

## Make Files

This section documents how the make files are organized to select the components to be built and the compile options to be used.  Using this organization may help in porting to new targets. 

The approach used attempts to define a set of variables so that common make files can be used for uniformity and easy of support.  This makes things a bit harder to understand at first, but hopefully they are easy to use and not too hard to modify as needed. 

A basic understanding the GNU make syntax and features is important before attempting to modify the files. 

Each Makefile sets two variables, DIR and SRC. DIR is the relative path from the top of the host_library package file hierarchy to the directory containing the Makefile.  SRC is the relative path from the directory DIR back to the top of the hierarchy.  These variables are used by included make files to find other files. 

### Top Level Makefile

The top level Makefile sets variables to select the target board, and then includes the associated target.mk file which sets the architecture directory and then includes the definitions for that architecture. The variables used here can be over-ridden in the command line, the environment, or in an optional file config.mk.  The variables are shown with their default values in the table below:

|Variable|Default|Meaning|
|-|-|-|
|TARGET|stm32f3_nucleo|target hardware, subdir of target/|
|BOARD|stm32f3_nucleo|alternate for TARGET|
|APP_DIR|example/app|Location of applications|
|DEMO|ledevb|selected application in APP_DIR|
|DEMO_DIR|$(APP_DIR)/$(DEMO)|Path to application directory|

After setting the variables, the target definitions are included from target/$(TARGET)/target.mk. 

target.mk in turn sets the ARCH_DIR variable to the directory for the MCU architecture definitions and includes arch.mk from that directory.  target.mk may set other variables as well, to add compile options or default settings for library features. 

arch.mk defines variables for the MCU architecture that are common to all targets using that architecture. 

After including target.mk, the top-level Makefile includes make/common_defs.mk which sets common compile flags and other variables to be used later in the build.  See the next section for those variables. 

Next, the top-level Makefile makes the various targets specified, or the default target, if none are specified.  Usually this means running make against the Makefile in the application directory, for example, $(DEMO_DIR)/Makefile which expands to example/app/ledevb/Makefile. 

The relationships between the make files are shown below: 

IMAGE

### Common Definitions

### Common Compile Rules

### Application Makefile

### Demo Makefile 

# Porting Host Code

If the host library needs to be ported to a different MCU, this section can assist with the process. The host library itself is intended to be portable, but may need minor changes inside the `ayla/libayla` subtree. 

The `arch` subtree contains all architecture-specific code that could be replicated or modified to support your platform.

Section 3.11 above describes the APIs needed by the host library from the platform.  These should be implemented in a separate platform-specific library for portability. 

The example code uses abstractions from mcu_io.h in the arch subdirectories to access LEDs and buttons, but whether a new host application uses these is optional. 

Here are some recommendations:

* In the arch folder: 
    * Create a subdirectory named for your architecture with contents similar to those in the stm32f3 and stm32 directories.  Note that some of these files may not be necessary, depending on your platform and host application. 
    * Modify the mcu_io.c and mcu_io.h files to match your IO configuration. 
    * If using UART to the module, modify the uart_platform files. 
    * If using SPI to the module, modify the spi_platform files. 
* If MCU Over The Air (OTA) is needed, rewrite the following file: 
    * Create a bootloader that determines which image to boot.  It may need to swap the location of the images in flash.  The file arch/stm32/loader.c may be used as a reference. 
    * Use libdemo/demo_img_mgmt.c as a module to use target MCU persistent storage. 
* In your arch subdirectory, make changes as required to arch.mk and arch_image.mk to control how the host application links with the platform library.   
* Also in your arch subdirectory, modify Makefile to make the platform library (libtarget.a) itself. 