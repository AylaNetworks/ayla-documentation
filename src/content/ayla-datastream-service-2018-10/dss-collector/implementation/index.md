---
title: Implementation
layout: ayla-datastream-service-2018-10.html
d: block
---

DSS Collector consists of one source file ([collector.js](../source/collector.js)) and one configuration file ([config.json](../source/config.json)).

DSS Collector follows this logic:

1. Reads the config file into an object called <code>defs</code>.
1. Outputs the contents of the config file to the console.
1. Invokes <code>createEventStreams</code> to instantiate a <code>Stream</code> class for each stream definition in the config file.
1. Stores each <code>Stream</code> instance in an object called <code>streams</code>.
1. Invokes <code>monitorEventStream</code> for each <code>Stream</code> instance.
1. Listens on each event stream socket for DSS messages.
1. Checks each incoming message to determine if it is a heartbeat or an actual event.
1. Responds appropriately to heartbeats.
1. Invokes <code>processEvent</code> for each event.
1. Outputs the event to the console.
1. Determines whether to save the event to a json file and/or a relational database table. (See the next section.)
