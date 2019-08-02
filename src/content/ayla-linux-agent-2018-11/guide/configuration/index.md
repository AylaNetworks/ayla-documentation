---
title: Configuration
layout: ayla-linux-agent-2018-11.html
a: block
---

See [How to create a configuration file for the Ayla Linux Agent](/blog/how-to-create-a-configuration-file-for-the-ayla-linux-agent/).

Then, reboot:

<pre>
sudo reboot now
</pre>

If, before rebooting, you were communicating with the RPi via Wi-Fi on your LAN, after rebooting, you will not immediately be able to do so.

<p style="color:red;">This is normal behavior.</p>

Here's what happens: During a reboot, Raspbian runs the Ayla Agent which prevents Raspbian from re-connecting wirelessly to your LAN. Instead, the Ayla Agent broadcasts the SSID of its own LAN, inviting you to connect via your mobile device. Once you do, you can use the Aura Mobile App to configure the Ayla Agent to join your LAN which enables Ayla Agent to do the following:

1. Connect the RPi to the Ayla Cloud, pairing the RPi with a digital twin created from a template.
1. Register the device to your user account. 

The [Registration](../registration) page shows you how.

