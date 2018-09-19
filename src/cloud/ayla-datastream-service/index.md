---
title: Ayla Datastream Service (DSS)
layout: cloud-ayla-datastream-service.html
---

The Ayla Datastream Service is a WebSocket Server that notifies a WebSocket client about events associated with devices. Events include the following:

1. Connectivity (a device does online/offline)
1. Registration (a device registers/unregisters)
1. Datapoint (device property value changes)
1. Datapoint Acknowledgement (Ayla Linux Agent or Ayla Dynamic Gateway Agent sends acknowledgement of datapoint change)
1. Location (device longitude/latitute changes)

A DSS client must subscribe to an event type in order to receive associated notifications.

Click [Ayla DSS Client](client) to experiment with the Ayla Datastream Service.