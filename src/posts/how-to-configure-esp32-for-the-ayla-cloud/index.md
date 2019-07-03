---
title: How to configure ESP32 for the Ayla Cloud
layout: post.html
contentVersion: "2019-07-05"
---

<span class="by-line">Leo Pereira</span>

# CLI commands to be implemented

Commands that have been implemented in examples/ayla_demo/main/command.c
•	nvs-set
•	nvs-get
•	oem key
•	factory-log 
•	save
•	setup_mode
•	esp-reboot

Commands that need to be implemented
•	command to set test_connect flag (defined in ada/ada_conf.h)



## Programming the device

To program the device you will need to have console access to the device and execute the CLI in the exact order shown below:

1.	nvs-set "ada.f.id/dev_id"  <DSN>
2.	nvs-set "ada.f.id/key"  <key>
3.	save
4.	esp-reboot
5.	oem key  <oem secret>
6.	save
7.	setup_mode disable
8.	save

### Provision the device on Ayla cloud

To provision the device by sending the logs to Ayla you need to execute the factory-log command and put the output in the log file that you send to Ayla.

To verify connectivity to the Ayla cloud and automatically provision the device on the Ayla cloud you will need to do the following
•	set test_connect flag
•	set up wifi profile to connect the device to the cloud
•	verify the device successfully connected to the cloud and authenticated by checking for the message “OEM auth passed” on the console.


