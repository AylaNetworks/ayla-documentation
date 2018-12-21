---
title: Implement the Green_LED Property
layout: ayla-linux-agent.html
b: block
---

This tutorial shows you how to control a green LED with your version of the host application using an existing property called Green_LED. By default, the Green_LED property does not actually control a real LED:

<img src="../../guide/tests/aura-013.jpg" width="300">

# Wire and test a Green LED

### Wire the Green LED

1. Shutdown your RPi.
1. Wire the GPIO pins on your RPi to a breadboard, adding a green LED and a 220 Ω resister as seen in the diagram below.
<img src="pinout.svg" width="550">
We used a breadboard, jumper wires, and an LED from an [Elegoo Super Starter Kit for Arduino](https://www.newegg.com/Product/Product.aspx?Item=9SIABFW5178264&ignorebbr=1).
1. Restart your RPi.

### Test with green_led.py

1. ssh to your RPi.
1. Create a directory called <code>/home/pi/ayla_tests</code>.
1. Create a text file in this directory called <code>green_led.py</code> with the following code:
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
1. Ensure the new file is executable:
<pre>
$ chmod +x green_led.py
</pre>
1. Run the python program to verify that your wiring is correct:
<pre>
python green_led.py</pre>
The green LED should blink.
1. Press Ctrl-C to stop the program.

### Test with green_led.c

1. Install Wiring Pi on your RPi.
1. Execute the following command to view a table showing the various schemes for specifying a GPIO pin:
<pre>
$ gpio readall
</pre>
The schemes are BCM, wPi, Name, and Physical. We are using the wPi scheme where wPi 1 == BCM 18.
1. Create a text file called <code>&#126;/ayla_tests/green_led.c</code> with the following code:
<pre>
#include &lt;stdio.h&gt;
#include &lt;wiringPi.h&gt;
#define GREEN_LED 1
int main(void) {
  printf("Starting program\n");
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
1. Build the program:
<pre>
$ gcc -Wall -o green_led green_led.c -lwiringPi
</pre>
1. Run the program to verify that you can control the LED from a program written in C. The LED should blink.
<pre>
./green_led
</pre>
1. Press Ctrl-C to stop the program.

# Modify appd to control the LED

Recall that appd is composed of three files, main.c, appd.c, and appd.h, which reside in <code>/home/pi/device_linux_public/app/appd</code> along with Makefile. You will modify each of these files.

### Modify Makefile

1. Open <code>&#126;/device_linux_public/app/appd/Makefile</code> for editing.
1. Scroll to the section called "List of libraries to link."
1. Add wiringPi (with an uppercase 'P').
<pre>
LIBS = ssl crypto curl jansson wiringPi
</pre>
1. Save the file.

### Modify main.c

1. Open <code>&#126;/device_linux_public/app/appd/main.c</code> for editing.
1. Include the wiringPi.h header file:
<pre>
#include <wiringPi.h>
</pre>
1. Scroll to the main function, and add the following code just before the call to app_run:
<pre>
wiringPiSetup();
</pre>
1. Save the file.

### Modify appd.h

1. Open <code>&#126;/device_linux_public/app/appd/appd.h</code> for editing.
1. Add the following:
<pre>
#define GREEN_LED 1
</pre>
1. Save the file.

### Modify appd.c

1. Open <code>&#126;/device_linux_public/app/appd/appd.c</code> for editing.
1. Include the wiringPi.h header file:
<pre>
#include <wiringPi.h>
</pre>
1. Scroll to the <code>app_prop_table</code>, and find the entry for the Green_LED, and modify the set field:
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
1. Add the following function to the file. Do so before <code>app_prop_table</code>:
<pre>
static int appd_green_led_set(struct prop \*prop, const void \*val, size_t len, const struct op_args \*args) {
  pinMode(GREEN_LED, OUTPUT);
  int green_led = \*((uint8_t \*)val);
  if(green_led == 1) {
    digitalWrite(GREEN_LED, HIGH);
  } else {
    digitalWrite(GREEN_LED, LOW);
  }
  if (prop_arg_set(prop, val, len, args) != ERR_OK) {
    return -1;
  }
  return 0;
}
</pre>
1. Save the file.

### Make, run, and test appd

Make and run the host app. Test the new functionality by toggling the Green LED property on/off in Aura, and verifying that the actual LED on the breadboard turns on/off.