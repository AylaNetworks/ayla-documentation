---
title: Explore properties
layout: ayla-developer-kit.html
a: block
---

The host app running on the Ayla Dev Kit (the app you will modify in [Customize](../../customize)) defines ...

## Boolean properties

1. Click Ayla Dev Kit on the Aura Devices list:
<img src="aura-devices-device.png" height="340">
1. Tap the Blue_LED property slider:
<img src="aura-blue-led.png" width="300">
The Blue LED on the dev kit illuminates. Tapping the slider sends an update *to the device*.
<img src="kit-blue-led.png" width="300">
1. Tap the Green_LED property slider:
<img src="aura-green-led.png" width="300">
The Green LED on the dev kit illuminates. Tapping this slider also sends an update *to the device*.
<img src="kit-green-led.png" width="300">
1. Press the light-blue button on the Ayla Shield of the dev kit:
<img src="kit-blue-button.png" width="300">
The Blue_button property slider slides on.
<img src="aura-blue-button.png" width="300">
So, pressing the button on the kit sends an update *from the device*.

## String properties

1. Tap the white space to the right of the cmd property:
<img src="aura-cmd.png" width="300">
1. Enter a string like <code>community</code>, and tap Update Value.
<img src="aura-cmd-dialog.png" width="200">
Setting the cmd property sends a string value *to the device*.
1. View the log property:
<img src="aura-log.png" width="300">
The host app (on the device) sets <code>log = cmd</code>, and sends the string *from the device*.

## Integer properties

1. Tap the value to the right of the input property:
<img src="aura-input.png" width="300">
A dialog box appears.
1. Enter an integer like <code>5</code>, and tap Update Value.
<img src="aura-input-dialog.png" width="200">
Setting the input property sends an integer value *to the device*.
1. View the output property:
<img src="aura-output.png" width="300">
The host app (on the device) sets <code>output = input &#42; input</code>, and sends the integer *from the device*.

## Decimal properties

1. Tap the value to the right of the decimal_in property:
<img src="aura-decimal-in.png" width="300">
A dialog box appears.
1. Enter a decimal like <code>2.71</code>, and tap Update Value.
<img src="aura-decimal-in-dialog.png" width="200">
Setting the decimal_in property sends a decimal value *to the device*.
1. View the decimal_out property:
<img src="aura-decimal-out.png" width="300">
The host app (on the device) sets <code>decimal_out = decimal_in</code>, and sends the decimal *from the device*.

## Version property

1. Tap the version property name:
<img src="aura-version.png" width="300">
Property details appear:
<img src="aura-version-details.png" width="240">

## File properties

File properties are minimally implemented in the example host application. You set the stream_up_length integer property (To Device) to a value, and the host app sets the stream_up file property (From Device) to a url string.

1. Tap the value to the right of the stream_up_length property:
<img src="aura-stream-up-len.png" width="300">
1. Enter an integer value like <code>10</code>, and tap Update Value.
<img src="aura-stream-up-len-dialog.png" width="200">
Setting the stream-up-len property sends an integer value *to the device*.
1. View the stream_up property:
<img src="aura-stream-up.png" width="300">
1. Tap the property name to see details:
<img src="aura-stream-up-details.png" width="240">
