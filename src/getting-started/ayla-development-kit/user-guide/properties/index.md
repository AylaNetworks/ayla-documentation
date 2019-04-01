---
title: Properties
layout: ayla-development-kit.html
a: block
---

The Ayla Cloud sees your Ayla Development Kit as a set of properties:

<img src="../../device-cloud-app.png" width="800">

This page helps you explore each of the properties.

## Boolean properties

1. Tap the Blue_LED property slider:
<img src="aura-blue-led.png" width="200">
The Blue LED on the dev kit illuminates. Tapping the slider sends an update *to the device*.
<img src="kit-blue-led.png" width="300">
1. Tap the Blue_LED slider On/Off several times to generate a history of values.
1. Tap the Blue_LED name. The Property details screen appears. Pull down on the screen momentarily. The Datapoints list appears:
<img src="aura-blue-led-details.png" width="200">
A datapoint is a time-stamped property value.
1. Tap the Green_LED property slider:
<img src="aura-green-led.png" width="200">
The Green LED on the dev kit illuminates. Tapping this slider also sends an update *to the device*.
<img src="kit-green-led.png" width="300">
1. Press the light-blue button on the Ayla Shield of the dev kit:
<img src="kit-blue-button.png" width="300">
The Blue_button property slider slides on.
<img src="aura-blue-button.png" width="200">
So, pressing the button on the kit sends an update *from the device*.

## String properties

1. Tap the white space to the right of the cmd property:
<img src="aura-cmd.png" width="200">
1. Enter a string like <code>community</code>, and tap Update Value.
<img src="aura-cmd-dialog.png" width="200">
Setting the cmd property sends a string value *to the device*.
1. View the log property:
<img src="aura-log.png" width="200">
The host app (on the device) sets <code>log = cmd</code>, and sends the string *from the device*.
1. Tap the version property name:
<img src="aura-version.png" width="200">
The Property Details screen displays three property attributes:
<img src="aura-version-value.png" width="240">
The *Current Value* attribute represents the host (application) software version because another attribute (not seen on this screen), <code>host_sw_version</code>, is set to <code>true</code>. The name <code>version</code> is non-essential.

## Integer properties

1. Tap the value to the right of the input property:
<img src="aura-input.png" width="200">
A dialog box appears.
1. Enter an integer like <code>5</code>, and tap Update Value.
<img src="aura-input-dialog.png" width="200">
Setting the input property sends an integer value *to the device*.
1. View the output property:
<img src="aura-output.png" width="200">
The host app (on the device) sets <code>output = input &#42; input</code>, and sends the integer *from the device*.

## Decimal properties

1. Tap the value to the right of the decimal_in property:
<img src="aura-decimal-in.png" width="200">
A dialog box appears.
1. Enter a decimal like <code>2.71</code>, and tap Update Value.
<img src="aura-decimal-in-dialog.png" width="200">
Setting the decimal_in property sends a decimal value *to the device*.
1. View the decimal_out property:
<img src="aura-decimal-out.png" width="200">
The host app (on the device) sets <code>decimal_out = decimal_in</code>, and sends the decimal *from the device*.

## File properties

The *stream_up* and *stream_down* properties are of type *file*. The following steps demonstrate their use with the aid of three integer properties: *stream_up_len*, *stream_down_len*, and *stream_down_len_match*.

1. Set *stream_up_len* to 100000:
<img src="aura-stream-up-len.png" width="200">
