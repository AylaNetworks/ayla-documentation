---
title: Aura Mobile App
layout: ayla-development-kit.html
a: block
---

This page provides a site map of the Aura Mobile app.

<img src="apps-aura.png" width="440">

## Login Screen

The Login screen includes a Sign Up button, a Wi-Fi Setup button, and a gear icon:

<img src="aura-login.png" width="720">

The gear icon displays a **Configuration** screen, important when you want to point Aura to an Ayla Customer Account. Note the Default Configurations and Custom Configurations sections. Each Default Configuration represents a region in the Ayla Public account. Tap a region to point Aura to that particular region. See the details for your chosen region at the bottom of the screen. You can also configure Aura to access an Ayla Customer account by creating a Custom Configuration like this:

<ol>
<li>Log into your Ayla Customer Account via the [Ayla Dashboard Portal](/apps/ayla-dashboard-portal/).</li>
<li>Click OEM Profile in the sidebar.</li>
<li>Click Apps in the horizontal menu.</li>
<li>Create an app configuration named Aura.</li>
<img src="create-aura-app-id.png" width="360">
The configuration will be assigned an Application ID and an Application Secret:
<img src="appid-and-appsecret.png" width="500">
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

## Main Menu

Once logged in, tap the hamburger:

<img src="hamburger.png" width="200">

The Main Menu appears. The following diagram shows the structure of the Aura Mobile App:

<img src="aura-menu.png" width="720">

## Device Screen

Tapping a device on the Devices List reveals the Device screen:

<img src="aura-device.png" width="720">