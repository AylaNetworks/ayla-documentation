---
title: Ayla Dynamic Gateway Agent
layout: ayla-dynamic-gateway-agent.html
---

Under construction

### Description

Ayla’s Generic Gateway library provides APIs which enable a Linux-based gateway to create a virtual representation of every node it communicates with on the Ayla cloud service. The gateway software defines the data for each node by associating the node with one or more templates that a developer must create in the Ayla cloud service. After the virtual nodes have been created in the Ayla service, the gateway uses the Generic Gateway APIs to report changes in node state to the Ayla cloud. The Ayla libraries also automatically fetch any property changes made in the Ayla cloud through a mobile application or another external source. The Aylas ervice and Generic Gateway APIs support a hierarchical data model.  A node corresponds to an individually addressable device on the local network. A subdevice corresponds to any functionally distinct part of the node. A subdevice’s data is represented by one or more templates which are defined in the Ayla service. 

For example, if the gateway is communicating with a power strip on the local network, the power strip is represented as a node. Each individual power outlet in the strip could be individually addressed as a subdevice, and the properties of each power outlet (for example, switch position, current draw, and so on) would be represented as a template associated with each subdevice. A subdevice must be uniquely addressable across a node.  While this model allows for complex devices, a simple device can be represented as a single node, subdevice, and template.

### Resources

* Generic Gateway Application for Linux
* Ayla BLE/ZigBee/Multi Protocol Gateway Application for Linux
* [device_linux_gw_public](https://github.com/AylaNetworks/device_linux_gw_public)

### Terminology

* Device
* Gateway
* Gateway library
* Node
* Subdevice
* Template

### Migrating to OEM account

### Other

[gateway.h](https://github.com/AylaNetworks/device_linux_gw_public/blob/master/lib/app/include/app/gateway.h)

A gateway can create a virtual representation of a node in Ayla’s cloud service by filling in the information for a node inside a struct gw_node and calling gw_node_add.
