---
title: Concepts
layout: site.html
a: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#account">Account</a></li>
    <li><a href="#digital-twin">Digital Twin</a></li>
    <li><a href="#region">Region</a></li>
  </ul>
</aside>

# Account

The Ayla Cloud is a collection of Ayla Cloud Accounts, each identified by an oem id and an oem secret:

<img src="/assets/images/ayla-cloud-accounts.png" width="280">

Each cloud account includes a set of user accounts, each associated with credentials (i.e. username and password):

<img src="/assets/images/user-accounts.png" width="216">

Each user account belongs to one, and only one, cloud account. So, a human being wanting to access several Ayla cloud accounts must have a separate user account in each cloud account.

Each user account is associated with one or more roles (sets of access rights):

<img src="/assets/images/roles.png" width="216">

Users access Ayla cloud accounts via apps and portals (e.g. Ayla Developer Portal, Ayla Dashboard Portal, and Aura Mobile App) that talk to the Ayla RESTful API:

<img src="/assets/images/connect-register-explore.png" width="540">

Ayla uses a particular Ayla Cloud Account (oem id = 0dfc7900) as a sandbox account. Ayla calls this account the <span style="color:forestgreen;">Ayla Public Account</span>. When a human being fills out [this form](https://developer.aylanetworks.com/registrations/new) and clicks OK, Ayla creates for the human being a user account with EndUser access rights in the Ayla Public Account:

<img src="/assets/images/enduser.png" width="216">

Typically, users use the <span style="color:forestgreen;">Ayla Public Account</span> to experiment with the Ayla Development Kit:

<img src="/assets/images/connect-register.png" width="216">

When the user wants to learn more, Ayla creates for the user's company a dedicated Ayla Cloud Account called an <span style="color:orange;">Ayla Customer Account</span>:

<img src="/assets/images/ayla-public-customer-accounts.png" width="446">

Then, Ayla can transfer the user account and device(s) from the Ayla Public Account to the Ayla Customer Account:

<img src="/assets/images/transfer.png" width="446">

# Digital Twin

Composed of properties, a digital twin is a cloud-based model of a device or gateway, the representation that apps and portals see:

<img src="/assets/images/digital-twin.png" width="800">

When a device connects to the Ayla Cloud, the cloud instantiates a digital twin (to represent the device) from one or more templates it selects based on information supplied by the device. Typically, the cloud instantiates many digital twins from the same template:

<img src="/assets/images/template-digital-twins.png" width="360">

# Region

Ayla Cloud Accounts are grouped into regions within the Ayla Cloud. The United States (US) and China (CN) include development regions:

<img src="/assets/images/regions.png" width="700">

Each Ayla portal and service has a separate URL for each region. See [Service APIs](service-apis).
