---
title: Getting Started
layout: site.html
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Homepage</a>
      <ul>
        <li><a href="#set-up-your-account">Set up your account</a></li>
        <li><a href="#access-online-tools">Access online tools</a></li>
        <li><a href="#find-content">Find content</a></li>
      </ul>
    </li>
  </ul>
</aside>

Welcome to Ayla Docs! This video provides an introduction to the Ayla IoT Cloud: 

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/qmMH4I_RVno?rel=0"
  frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

After watching the video, you can [Set up your account](#set-up-your-account), [Access online tools](#access-online-tools), and [Find content](#find-content) that will help you build and manage connected devices.

<hr/>

## Set up your account

To work with the Ayla Cloud, you need a **user** account with access rights in a **cloud** account:

<img src="/assets/images/accounts-and-rights.png" width="250" height="230">

Ayla offers two types of cloud accounts for developers:

<img src="/assets/images/dev-accounts.png" width="450" height="177">

<span style="color:green;">Ayla Public Account</span>

* Use this account to experiment with (primarily) an Ayla Development Kit.
* <a href="https://www.aylanetworks.com/sign-up" target="_blank">Click here</a> to create a user account with EndUser access rights in the Ayla Public Account.
* <a href="http://iot.aylanetworks.com/ayla-dev-kit-freel-trial-program.html" target="_blank">Click here</a> to order a dev kit.
* [Click here](/edge-solutions/ayla-development-kit) to view the relevant guide.
* It is possible to connect other devices to the Ayla Public Account, but you will need to <a href="https://www.aylanetworks.com/company/contact-us" target="_black">contact Ayla</a> to obtain device configuration values. For example, to connect a Raspberry Pi to the Ayla Public Account, you will need Ayla to provide a ```devd.conf``` configuration file.

<span style="color:#e69500;">Ayla Customer Account</span>

* Use this account to experiment with any device (e.g. RPi, ESP32, DevKit, Portable Solution).
* If your company already has an Ayla Customer Account, ask the account admin to create a user account for you.
* <a href="https://www.aylanetworks.com/company/contact-us" target="_black">Click here</a> to contact Ayla about setting up an Ayla Customer Account for your company.

If you choose to start with the Ayla Public Account, you can migrate your user account and devices later:

<img src="/assets/images/migrate-accounts.png" width="446" height="">

## Access online tools

Your user account enables you to access the Ayla Cloud via the following online tools:

* [Ayla Developer Portal](/system-administration/ayla-developer-portal)
* [Ayla Dashboard Portal](/system-administration/ayla-dashboard-portal)
* [Aura Mobile App](/system-administration/aura-mobile-app)

You will use all three when developing connected devices. The first two require you to specify a username and a password. The Aura Mobile App, however, requires additional [configuration](/system-administration/aura-mobile-app/#configuration).

## Find content

To build a connected device or gateway, see [Edge Solutions](/edge-solutions).

To manage your Ayla cloud account, see [System Administration](/system-administration).

To integrate a business system with the Ayla Cloud, and manage data, see [Data Management](/data-management).

To build an Ayla-aware mobile app, see [Front-end Solutions](/front-end-solutions).

To work with Ayla Service APIs, see [Service APIs](/service-apis).

To browse PDFs, see the [Archive](/archive).