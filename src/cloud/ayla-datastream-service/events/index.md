---
title: Events
layout: ayla-datastream-service.html
b: block
---

Ayla DSS generates five types of events:

1. A [connectivity](connectivity) event means the Ayla Cloud started/stopped interacting with a registered device.
1. A [datapoint](datapoint) event means a digital twin property value changed.
1. A [datapointack](datapointack) event means an Ayla Agent confirmed to the Ayla Cloud that a device property value changed.
1. A [location](location) event means a digital twin latitute/longitude value changed.
1. A [registration](registration) event means the Ayla Cloud registered/unregistered a device.

You can use DSS Browser or DSS Collector to explore all five types of events. You can use a virtual device to cause registration and datapoint events, or a real device to cause all five. Be sure to do the following:

<ol>
<li>In Dashboard Portal, click <code>Datastreams &gt; Access Rules</code>, to add a rule that gives you authorization to create a subscription.</li>
<li>In Dashboard Portal, click <code>Datastreams &gt; Subscriptions</code>, to add a subscription that defines the type of events you want to receive.</li>
<li>In DSS Browser or DSS Collector, use your new subscription stream key to create an event stream.</li>
<li>Change the digital twin representing your device in a way that causes the desired type of event.</li>
</ol>