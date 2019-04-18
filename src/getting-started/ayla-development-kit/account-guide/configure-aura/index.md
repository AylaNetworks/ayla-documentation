---
title: Configure Aura
layout: ayla-development-kit.html
d: block
---

When you move your user account and devices from the Ayla Public Account to an Ayla Customer Account, you need to configure Aura to access the new account:

<img src="configure-aura.png" width="400">

Here are the steps for iOS users:

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