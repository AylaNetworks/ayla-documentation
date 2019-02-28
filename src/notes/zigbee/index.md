---
title: Zigbee
layout: notes.html
---

Download [EmberZNet Protocol Stack v5.7.4.0](https://aylait-my.sharepoint.com/:u:/r/personal/robbin_lu_aylanetworks_com/Documents/Microsoft%20Teams%20Chat%20Files/Silicon%20Labs%20EmberZNet-5.7.4.0-GA.exe?csf=1&e=TvCsNW). Install it in windows system, and copy all files of 5.7.4.0-GA folder to /home/pi/EmberZNet/v5.7.4.0 of PI, then you can build zb_gatewayd code on PI.

The implementation of the ZigBee network and enabling communications between the GW and the node devices is completely up to the customer. They get to choose the best way to enable and make sure the implementation is robust. They don’t have to worry about the Ayla agent until they have the ZigBee network up and running. Once ZB is enabled, they will integrate the Ayla agent into their SW stack to talk to the APIs exposed by their ZB stack and access the various properties available on the nodes. This is the typical development process we should recommend.

For the demo, we are providing a reference implementation using the SiLabs ZB stack. The customer is responsible for obtaining the appropriate license to gain access to the Ember libraries and the USB stick. They can then use our reference GW implementation that is enabled to communicate with the Ember APIs for node control. This is just a reference implementation and they are not required to use the ember stack for production. The reference implementation shows how the GW agent would talk with a ZB stack that they can use to port to other libraries.