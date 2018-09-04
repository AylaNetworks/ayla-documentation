---
title: Adding an LED
layout: devices-ayla-linux-agent.html
b: block
---

The host application (appd) has a property called Green_LED which does not actually control a real LED:

<div class="row align-items-center">
<div class="col-lg-4 col-md-6 col-sm-12">
<img class="img-fluid" src="../../guide/tests/aura-013.jpg">
</div>
</div>

This page shows you how to modify your RPi and your version of appd to control a real LED.

<div class="row align-items-center hspace">
<div class="col-lg-6 col-md-8 col-sm-12">
<img class="img-fluid" src="rpi-led-iphone.jpg">
</div>
</div>

# Wire and test the LED

<ol>
<li>Shutdown your RPi.</li>
<li>Wire the GPIO pins on your RPi to a breadboard, adding a green LED and a resister as seen in the diagram below.
<div class="row hspace">
<div class="col-lg-6 col-md-8 col-sm-12">
<img class="img-fluid img-border" src="pinout-led.jpg">
</div>
</div>
You can see the same wiring scheme for a red LED in the [CanaKit Raspberry Pi Quick Start Guide](https://www.canakit.com/Media/CanaKit-Raspberry-Pi-Quick-Start-Guide-3.2.pdf), Page 9. The slightly longer wire on the LED goes in the positive (red) hole in the breadboard. We used a breadboard, jumper wires, and an LED from an [Elegoo Super Starter Kit for Arduino](https://www.newegg.com/Product/Product.aspx?Item=9SIABFW5178264&ignorebbr=1).
</li>
<li>Restart your RPi.</li>
</ol>

### Test with blink.py

<ol>
<li>ssh to your RPi.</li>
<li>Create a directory called <code>/home/pi/ayla_tests</code>.</li>
<li>Create a text file in this directory called <code>blink.py</code> with the following code:
<pre>
import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
while True:
  GPIO.output(18, True)
  time.sleep(1)
  GPIO.output(18, False)
  time.sleep(1)
</pre>
</li>
<li>Ensure the new file is executable:
<pre>
$ chmod +x blink.py
</pre>
</li>
<li>Run the python program with <code>python blink.py</code> to verify that your wiring is correct. The green LED should blink.</li>
<li>Press Ctrl-C to stop the program.</li>
</ol>

### Test with blink.c

<ol>
<li>Install [Wiring Pi](/devices/ayla-linux-agent/reference/wiring-pi).</li>
<li>Create a text file in <code>/home/pi/ayla_tests</code> called blink.c with the following code:
<pre>
#include &lt;stdio.h&gt;
#include &lt;wiringPi.h&gt;
#define GREEN_LED 1

int main(void) {
  printf("Start of blink program\n");
  wiringPiSetup();
  pinMode(GREEN_LED, OUTPUT);
  for(;;) {
    digitalWrite(GREEN_LED, HIGH);
    delay(500);
    printf("High\n");
    digitalWrite(GREEN_LED,  LOW);
    delay(500);
    printf("Low\n");
  }
  return 0;
}
</pre>
</li>
<li>Build the program:
<pre>
$ gcc -Wall -o blink blink.c -lwiringPi
</pre>
</li>
<li>Run the program to verify that you can control the LED from a program written in C. The LED should blink.
<pre>
./blink
</pre>
</li>
<li>Press Ctrl-C to stop the program.</li>
</ol>

# Modify appd to control the LED

Recall that appd is composed of three files, main.c, appd.c, and appd.h, which reside in <code>/home/pi/device_linux_public/app/appd</code> along with Makefile. You will modify each of these files.

### Modify Makefile

<ol>
<li>Open <code>~/device_linux_public/app/appd/Makefile</code> for editing.</li>
<li>Scroll to the section called "List of libraries to link."</li>
<li>Add wiringPi (with an uppercase 'P').
<pre>
LIBS = ssl crypto curl jansson wiringPi
</pre>
</li>
<li>Save the file.</li>
</ol>

### Modify main.c

<ol>
<li>Open <code>~/device_linux_public/app/appd/main.c</code> for editing.</li>
<li>Include the wiringPi.h header file:
<pre>
#include <wiringPi.h>
</pre>
</li>
<li>Scroll to the main function, and add the following code just before the call to app_run:
<pre>
wiringPiSetup();
</pre>
</li>
<li>Save the file.</li>
</ol>

### Modify appd.h

<ol>
<li>Open <code>~/device_linux_public/app/appd/appd.h</code> for editing.</li>
<li>Add the following:
<pre>
#define GREEN_LED 1
</pre>
</li>
<li>Save the file.</li>
</ol>

### Modify appd.c

<ol>
<li>Open <code>~/device_linux_public/app/appd/appd.c</code> for editing.</li>
<li>Scroll to the <code>app_prop_table</code>, and find the entry for the Green_LED:
<pre>
{
  .name = "Green_LED",
  .type = PROP_BOOLEAN,
  .set = appd_led_set,
  .send = prop_arg_send,
  .arg = &green_led,
  .len = sizeof(green_led),
  .ads_failure_cb = appd_prop_ads_failure_cb,
},
</pre>
</li>
<li>Modify the set field:
<pre>
{
  .name = "Green_LED",
  .type = PROP_BOOLEAN,
  .set = appd_green_led_set,
  .send = prop_arg_send,
  .arg = &green_led,
  .len = sizeof(green_led),
  .ads_failure_cb = appd_prop_ads_failure_cb,
},
</pre>
</li>
<li>Add the following function to the file. Do so before <code>app_prop_table</code>:
<pre>
static int appd_green_led_set(struct prop \*prop, const void \*val, size_t len, const struct op_args \*args) {
  pinMode(GREEN_LED, OUTPUT);
  int green_led = \*((uint8_t \*)val);
  if(green_led == 1) {
    digitalWrite(GREEN_LED, HIGH);
  } else {
    digitalWrite(GREEN_LED, LOW);
  }
  return 0;
}
</pre>
</li>
<li>Save the file.</li>
</ol>

### Build, run, and test appd

Build and run appd according to the instructions in [Building appd](/devices/ayla-linux-agent/tutorials/building-appd/). Test the new functionality by toggling the Green LED property on/off in Aura, and verifying that the actual LED on the breadboard turns on/off.