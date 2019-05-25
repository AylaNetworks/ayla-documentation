---
title: Events
layout: ayla-datastream-service-2018-10.html
b: block
---

Ayla DSS generates five types of events:

* A [connectivity](connectivity) event means the Ayla Cloud started/stopped interacting with a registered device.
* A [datapoint](datapoint) event means a digital twin property value changed.
* A [datapointack](datapointack) event means an Ayla Agent confirmed to the Ayla Cloud that a device property value changed.
* A [location](location) event means a digital twin latitute/longitude value changed.
* A [registration](registration) event means the Ayla Cloud registered/unregistered a device.

You can use DSS Browser or DSS Collector to explore all five types of events. You can use a virtual device to cause registration and datapoint events, or a real device to cause all five. Be sure to do the following:

1. In Dashboard Portal, click <code>Datastreams &gt; Access Rules</code>, to add a rule that gives you authorization to create a subscription.
1. In Dashboard Portal, click <code>Datastreams &gt; Subscriptions</code>, to add a subscription that defines the type of events you want to receive.
1. In DSS Browser or DSS Collector, use your new subscription stream key to create an event stream.
1. Change the digital twin representing your device in a way that causes the desired type of event.
