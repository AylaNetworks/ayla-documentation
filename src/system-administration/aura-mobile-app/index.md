---
title: Aura Mobile App
layout: site.html
b: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Aura Mobile App</a></li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#screens">Screens</a>
      <ul>
        <li><a href="#login-screen">Login Screen</a></li>
        <li><a href="#main-menu">Main Menu</a></li>
        <li><a href="#device-screen">Device Screen</a></li>
      </ul>
    </li>
  </ul>
</aside>

Available for iOS and Android, the Aura Mobile App is designed to help developers interact with any device deployed in either development or field accounts in any Ayla Cloud region. Firmware developers can use Aura to connect, register, and test edge solutions. Integrators can use Aura to test integrations between the Ayla Cloud and business systems. And, front-end developers can use Aura to envision the features and functionality they might need in a customized mobile app. 

# Configuration

By default, the Aura Mobile App is configured to access the Ayla Public Account, but you can configure it to access your Ayla Company Account. Here are the steps for iOS users:

<ol>
<li>Log into your Ayla Customer Account via the [Ayla Dashboard Portal](/system-administration/ayla-dashboard-portal/).</li>
<li>Click OEM Profile in the sidebar.</li>
<li>Click Apps in the horizontal menu.</li>
<li>Create an app configuration named Aura.
<img src="create-aura-app-id.png" width="360">
The configuration will be assigned an Application ID and an Application Secret:
<img src="appid-and-appsecret.png" width="500">
</li>
<li>In a text editor, create a file called <code>&lt;mycompany&gt;.auraconfig</code>, and copy & paste the following into the file:
<pre>
{
  "appId": "",
  "appSecret": "",
  "name": "My Company Name",
  "serviceLocation": "USA",
  "serviceType": "Development"
}
</pre>
</li>
<li>Copy & paste your Application ID and Application Secret into the file, customize the other fields, and save.</li>
<li>Email the file as an attachment to yourself.</li>
<li>Open the email on your mobile device.</li>
<img src="email.png" width="200">
<li>Tap to Download.</li>
<li>Hard-press the <code>Tab to Download</code> window to reveal share options:</li>
<img src="share.png" width="200">
<li>Click <code>Copy to Aura</code>. Aura should indicate success:</li>
<img src="success.png" width="200">
<li>Click <code>Save</code> in Aura:</li>
<img src="save.png" width="200">
<li>Log into Aura with the email address and password associated with your Ayla Customer account.</li>
</ol>

## Login Screen

The Login screen includes a Sign Up button, a Wi-Fi Setup button, and a gear icon:

<img src="aura-login.png" width="720">

* The Sign Up button enables a new user to create a user account with EndUser access rights in the Ayla Public (Cloud) Account. 
* The Wi-Fi Setup button enables users to navigate to the Settings screen of the mobile device. 
* The gear icon displays a **Configuration** screen, important when you want to point Aura to an Ayla Customer Account. Configuration parameters appear at the bottom of the screen. See [Configuration](#configuration) for details.

## Main Menu

Once logged in, tap the hamburger:

<img src="hamburger.png" width="200">

The Main Menu appears. The following diagram shows the structure of the Aura Mobile App:

<img src="aura-menu.png" width="720">

## Device Screen

Tapping a device on the Devices List reveals the Device screen:

<img src="aura-device.png" width="720">

