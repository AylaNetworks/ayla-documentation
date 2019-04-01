---
title: Authentication
layout: ayla-development-kit.html
a: block
---

 The production agent modules come with the credentials (DSN, server root certs, etc) built-in at the factory. This is one of the benefits of the production agent - OEMs don't have to deal with credential provisioning in their factory. AWS IoT is set up to enable OEMs to credential and enroll their own devices, so they have building blocks to facilitate issuing certificates from the cloud, etc. Joe has been doing some work on in-field provisioning, which is targeted at migrating devices to the Ayla cloud - sort of bootstrapping installation of Ayla credentials by leveraging whatever non-Ayla credentials the device has to establish sufficient trust to securely issue Ayla credentials to it.