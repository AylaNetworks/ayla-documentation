---
title: Implementation
layout: cloud-ayla-datastream-service.html
d: block
---

DSS Collector consists of one source file ([collector.js](../source/collector.js)) and one configuration file ([config.json](../source/config.json)).

### Logical flow of execution

DSS Collector does the following:

<ol>
<li>Reads the config file into an object called <code>defs</code>.</li>
<li>Outputs the contents of the config file to the console.</li>
<li>Invokes <code>createEventStreams</code> to instantiate a <code>Stream</code> class for each stream definition in the config file.</li>
<li>Stores each <code>Stream</code> instance in an object called <code>streams</code>.</li>
<li>Invokes <code>monitorEventStream</code> for each <code>Stream</code> instance.</li>
<li>Listens on each event stream socket for DSS messages.</li>
<li>Checks each incoming message to determine if it is a heartbeat or an actual event.</li>
<li>Responds appropriately to heartbeats.</li>
<li>Invokes <code>processEvent</code> for each event.</li>
<li>Outputs the event to the console.</li>
<li>Determines whether to save the event to a json file and/or a relational database table. (See the next section.)</li>
</ol>
