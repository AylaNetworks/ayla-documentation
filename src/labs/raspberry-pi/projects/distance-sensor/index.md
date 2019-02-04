---
title: Distance Sensor
layout: raspberry-pi.html
a: block
---

## Wiring

<img src="wiring-001" width="500">

## Pinout

<img src="pinout.svg" width="500">

## GPIO

<pre>
$ gpio readall
 +-----+-----+---------+------+---+---Pi 3+--+---+------+---------+-----+-----+
 | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |
 +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+
 |     |     |    3.3v |      |   |  1 || 2  |   |      | 5v      |     |     |
 |   2 |   8 |   SDA.1 | ALT0 | 1 |  3 || 4  |   |      | 5v      |     |     |
 |   3 |   9 |   SCL.1 | ALT0 | 1 |  5 || 6  |   |      | 0v      |     |     |
 |   4 |   7 | GPIO. 7 |   IN | 0 |  7 || 8  | 1 | ALT5 | TxD     | 15  | 14  |
 |     |     |      0v |      |   |  9 || 10 | 1 | ALT5 | RxD     | 16  | 15  |
 |  17 |   0 | GPIO. 0 |   IN | 0 | 11 |<span style="color:yellow;">| 12 | 0 | OUT  | GPIO. 1 | 1   | 18  |</span>
 |  27 |   2 | GPIO. 2 |   IN | 0 | 13 || 14 |   |      | 0v      |     |     |
 |  22 |   3 | GPIO. 3 |   IN | 0 | 15 || 16 | 0 | IN   | GPIO. 4 | 4   | 23  |
 |     |     |    3.3v |      |   | 17 |<span style="color:yellow;">| 18 | 0 | IN   | GPIO. 5 | 5   | 24  |</span>
 |  10 |  12 |    MOSI | ALT0 | 0 | 19 || 20 |   |      | 0v      |     |     |
 |   9 |  13 |    MISO | ALT0 | 0 | 21 || 22 | 0 | IN   | GPIO. 6 | 6   | 25  |
 |  11 |  14 |    SCLK | ALT0 | 0 | 23 || 24 | 1 | OUT  | CE0     | 10  | 8   |
 |     |     |      0v |      |   | 25 || 26 | 1 | OUT  | CE1     | 11  | 7   |
 |   0 |  30 |   SDA.0 |   IN | 1 | 27 || 28 | 1 | IN   | SCL.0   | 31  | 1   |
 |   5 |  21 | GPIO.21 |   IN | 1 | 29 || 30 |   |      | 0v      |     |     |
 |   6 |  22 | GPIO.22 |   IN | 1 | 31 || 32 | 0 | IN   | GPIO.26 | 26  | 12  |
 |  13 |  23 | GPIO.23 |   IN | 0 | 33 || 34 |   |      | 0v      |     |     |
 |  19 |  24 | GPIO.24 |   IN | 0 | 35 || 36 | 0 | IN   | GPIO.27 | 27  | 16  |
 |  26 |  25 | GPIO.25 |   IN | 0 | 37 || 38 | 0 | IN   | GPIO.28 | 28  | 20  |
 |     |     |      0v |      |   | 39 || 40 | 0 | IN   | GPIO.29 | 29  | 21  |
 +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+
 | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |
 +-----+-----+---------+------+---+---Pi 3+--+---+------+---------+-----+-----+
</pre>

## distance_sensor.py

<pre>
import RPi.GPIO as GPIO
import time
 
GPIO.setmode(GPIO.BCM)
 
GPIO_TRIGGER = 18
GPIO_ECHO = 24
 
GPIO.setup(GPIO_TRIGGER, GPIO.OUT)
GPIO.setup(GPIO_ECHO, GPIO.IN)
 
def distance():
  GPIO.output(GPIO_TRIGGER, True)
 
  time.sleep(0.00001)
  GPIO.output(GPIO_TRIGGER, False)
 
  StartTime = time.time()
  StopTime = time.time()
 
  while GPIO.input(GPIO_ECHO) == 0:
    StartTime = time.time()
 
  while GPIO.input(GPIO_ECHO) == 1:
    StopTime = time.time()
 
  TimeElapsed = StopTime - StartTime
  # multiply by sonic speed (34300 cm/s) and divide by 2
  distance = (TimeElapsed * 34300) / 2
 
  return distance
 
if __name__ == '__main__':
  try:
    while True:
      dist = distance()
      print ("Measured Distance = %.1f cm" % dist)
      time.sleep(1)
 
  except KeyboardInterrupt:
    print("Measurement stopped by User")
    GPIO.cleanup()
</pre>

## distance_sensor.c

<pre>
#include &lt;stdio.h&gt;
#include &lt;wiringPi.h&gt;

#define TRIG (1)
#define ECHO (5)

int main(int argc, char *argv[]) {
  printf("Starting program\n");
  wiringPiSetup();

  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);

  digitalWrite(TRIG, LOW);
  delay(50);

  while(1) {
    digitalWrite(TRIG, HIGH);
    delayMicroseconds(10);

    digitalWrite(TRIG, LOW);
    unsigned int echoStart = millis();

    while(digitalRead(ECHO) == LOW && millis()-echoStart &lt; 1000) {}

    if (millis()-echoStart &lt; 1000) {
      // Mark start
      unsigned int start = micros();
      while(digitalRead(ECHO) == HIGH) {}

      // Mark end
      unsigned int end = micros();
      unsigned int delta = end-start;

      double distance = 34029 * delta / 2000000.0;
      printf("Distance: %f\n", distance);
    }
    delay(1000);
  }
}
</pre>

## Links

* [HC-SR04 Project](http://fritzing.org/projects/hc-sr04-project)
* [Using a Raspberry Pi distance sensor (HC-SR04)](https://tutorials-raspberrypi.com/raspberry-pi-ultrasonic-sensor-hc-sr04/)
* [C WiringPi HC-SR04](https://github.com/nkolban/PiBook/tree/master/C%20WiringPi%20HC-SR04)

