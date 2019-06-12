---
title: OTA Updates
layout: ayla-development-kit-2019-06.html
d: block
---

<!--
Versions

To update the module image, I'm not sure the customer will be able to do this, but if they can, they would go to the developer site, select the device, click on the "module image" tab, search for the module version they want (based on the current module version shown), and then click on that image and scroll down to the bottom of the window and click the deploy button.  Assuming the module is connected, it should start to update and reboot almost immediately.  After a minute or two, it should reconnect to the service and show that the new image is deployed.  If there are any problems, you should be able to see them from the dashboard.  Watching the console serial output from the module is a good idea if its possible. 

To update the host image, you need to be an OEM admin.  Select the device on the dashboard, go to host images.  Either select or add one, giving the new version name and uploading the image.  Then deploy it to the device. 

See the following in demo.c:

#ifdef DEMO_IMG_MGMT
        mcu_img_mgmt_init(NULL);
#endif
-->

