---
title: client
layout: ayla-module-command-line-interface.html
b: block
---

<code>client</code>

Displays the current client configuration.

<code>client &lt;enable&vert;disable&gt;</code>

Controls whether the client is enabled or disabled.

<code>client poll_interval &lt;# of secs&gt;</code>

Sets the frequency of the client polling ADS for updates and checks for internet connectivity if the notification service is no longer reachable. Default = 300 seconds. If set to 0, no polling takes place (useful for modules without to-device properties).

<code>client test</code>

Sets a mode that indicates to ADS that the connections are being done for OEM testing and notcounted as the first connection from the device by an end-user.This setting is not persisted and lasts only until the next reboot.

<code>client server region &lt;region code&gt;</code>

Sets the region for the device, which determines the set of ADS servers that the device should use.This requires that the device be in setup mode, and a save and a reset be performed after the is issued. The device’s DSN and other information must be present on the service for that region for this to succeed. Current supported region values include "CN"for China and "US"for everywhere else. If set to the empty string, the region will be set to the default (US).
