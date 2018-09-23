---
title: Ayla Datastream Service (DSS)
layout: cloud-ayla-datastream-service.html
---

The Ayla Datastream Service is a WebSocket Server that notifies a WebSocket client about events associated with devices. Events include the following:

1. Connectivity (a device goes online/offline)
1. Registration (a device registers/unregisters)
1. Datapoint (a device property value changes)
1. Datapoint Acknowledgement (an Ayla Agent sends an acknowledgement of a datapoint change)
1. Location (the longitude/latitute of a device changes)

A DSS client must subscribe to an event type in order to receive associated notifications.

Click [DSS Client](client) to experiment with the Ayla Datastream Service.