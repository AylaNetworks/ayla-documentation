---
title: Add nodes
layout: ayla-dynamic-gateway-agent.html
f: block
---

This page shows you how to add sensor and thermostat nodes to your Simulator Gateway. 

## Fast Facts

1. You add/delete nodes by setting the gateway "Add Sensor Nodes" and "Add Thermostat Nodes" (Integer) properties.
1. If you set one of these properties to 3, the Simulator Gateway will add three candidate nodes of that type.
1. If you set one to -3, the gateway will delete three nodes of that type.
1. Candidate nodes appear in the (Devices) Candidates tab. This is where you register them.
1. The registration process associates a node with the appropriate template (that you made).
1. Once registered, a candidate becomes a node, appearing in the (Devices) Nodes tab and on the Devices list.

## Prepare to monitor node activity

Because, upon registration, sensor and thermostat nodes begin immediately to generate datapoints every 15 seconds, it makes sense to prepare to monitor node activity before adding nodes. Below are few ways to monitor node activity.

### Tail the messages log

Secure Shell to your RPi, and tail the messages log:
<pre class="light">
$ tail -f /var/log/messages
</pre>
<div>Here is a sample:</div>
<pre>
Nov 15 10:39:49 rpi appd: [info-app] appd_node_prop_send_handler: batching node property: sensor_sim_01::s1:gg_sens:temp = 55.331
Nov 15 10:39:49 rpi appd: [info-app] appd_node_prop_send_handler: batching node property: sensor_sim_01::s1:gg_sens:humidity = 59.640
Nov 15 10:39:49 rpi appd: [info-app] appd_node_prop_send_handler: batching node property: sensor_sim_01::s1:gg_sens:light_level = 71.107
Nov 15 10:39:49 rpi appd: [info-app] appd_node_ops_confirm_handler: node prop sensor_sim_01::s1:gg_sens:temp sent successfully to dests 01
Nov 15 10:39:49 rpi appd: [info-app] appd_node_ops_confirm_handler: node prop sensor_sim_01::s1:gg_sens:humidity sent successfully to dests 01
Nov 15 10:39:49 rpi appd: [info-app] appd_node_ops_confirm_handler: node prop sensor_sim_01::s1:gg_sens:light_level sent successfully to dests 01
Nov 15 10:40:00 rpi appd: [info-app] appd_node_prop_send_handler: batching node property: thermostat_sim_02::s1:gg_tstat:local_temp = 65.709
Nov 15 10:40:00 rpi appd: [info-app] appd_node_ops_confirm_handler: node prop thermostat_sim_02::s1:gg_tstat:local_temp sent successfully to dests 01
</pre>

### Monitor property datapoints

In the Ayla Developer Portal, browse to View My Devices &gt; A Sim GW Node &gt; A Property &gt; Datapoints. Once registered, a node will generate data every 15 seconds.

### Utilize the Ayla Datastream Service

It takes only a few seconds to utilize the DSS Browser utility in the [Ayla Datastream Service](https://docs.aylanetworks.com/cloud/ayla-datastream-service/):

1. [Create an access rule](https://docs.aylanetworks.com/cloud/ayla-datastream-service/getting-started/create-an-access-rule/).
1. [Create a subscription](https://docs.aylanetworks.com/cloud/ayla-datastream-service/getting-started/create-subscriptions/).
1. [Run DSS Browser](https://docs.aylanetworks.com/cloud/ayla-datastream-service/dss-browser/) or [DSS Collector](https://docs.aylanetworks.com/cloud/ayla-datastream-service/dss-collector/).

<div>Here is an example of DSS Browser:</div>
<div class="row">
<div class="col-lg-9 col-md-10 col-sm-12">
<img class="img-fluid img-top-bottom" src="dss-browser-example.png">
</div>
</div>

## Add nodes

### Add a sensor node

1. Browse to the Ayla Developer Portal.
1. Click View My Devices > Sim GW 1.
1. Click Add Sensor Nodes, change Current Value to 1, and click OK.
1. Pause for a few seconds. Current Value changes from 1 to 0.
1. Click OK. Note that Number of Nodes is set to 1.
1. Click (Devices) Nodes. The list is empty.
1. Click (Devices) Candidates. The list contains one new candidate sensor node:
<div class="row">
<div class="col-lg-6 col-md-9 col-sm-12">
<img class="img-fluid img-top-bottom" src="sensor-node-candidate.png">
</div>
</div>
The serial number begin with "V" indicating that the node is a "virtual" device.
1. Click the Register link.
1. Click (Devices) Nodes to view the new node on the list.
<div class="row">
<div class="col-lg-6 col-md-9 col-sm-12">
<img class="img-fluid img-top-bottom" src="sensor-node.png">
</div>
</div>
1. Click View My Devices. The node appears on this list, too.
<div class="row">
<div class="col-lg-6 col-md-9 col-sm-12">
<img class="img-fluid img-top-bottom" src="node-on-devices-list.png">
</div>
</div>
1. Click the new sensor node. The node properties list appears:
<div class="row">
<div class="col-lg-6 col-md-9 col-sm-12">
<img class="img-fluid img-top-bottom" src="sensor-node-properties.png">
</div>
</div>
<div>The <span style="color:red;">red</span> arrows indicate properties from the Sim GW Node template.</div>
<div>The <span style="color:blue;">blue</span> arrows indicate properties from the Sim GW SNode template.</div>
<div>The <span style="color:#cccc00;">yellow</span> arrow indicates the default oem_host_version property assigned to all devices.</div>
1. Click humidity &gt; Datapoints to view accumulating data.
<div class="row">
<div class="col-lg-6 col-md-9 col-sm-12">
<img class="img-fluid img-top-bottom" src="datapoints.png">
</div>
</div>
1. Click Details, and set Product Name to "Sim GW 1 SNode 1".
1. See the periodic updates in <code>/var/log/messages</code>:
<pre>
Nov 15 09:22:03 rpi appd: [info-app] appd_node_prop_send_handler: batching node property: sensor_sim_01::s1:gg_sens:temp = 53.767
Nov 15 09:22:03 rpi appd: [info-app] appd_node_prop_send_handler: batching node property: sensor_sim_01::s1:gg_sens:humidity = 63.059
Nov 15 09:22:03 rpi appd: [info-app] appd_node_prop_send_handler: batching node property: sensor_sim_01::s1:gg_sens:light_level = 56.244
Nov 15 09:22:04 rpi appd: [info-app] appd_node_ops_confirm_handler: node prop sensor_sim_01::s1:gg_sens:temp sent successfully to dests 01
Nov 15 09:22:04 rpi appd: [info-app] appd_node_ops_confirm_handler: node prop sensor_sim_01::s1:gg_sens:humidity sent successfully to dests 01
Nov 15 09:22:04 rpi appd: [info-app] appd_node_ops_confirm_handler: node prop sensor_sim_01::s1:gg_sens:light_level sent successfully to dests 01
</pre>

### Add a thermostat node

1. Add a thermostat node in the same way you added a sensor node. Expect to find these properties.
<div class="row">
<div class="col-lg-6 col-md-9 col-sm-12">
<img class="img-fluid img-top-bottom" src="thermostat-node-properties.png">
</div>
</div>
<div>The <span style="color:red;">red</span> arrows indicate properties from the Sim GW Node template.</div>
<div>The <span style="color:blue;">blue</span> arrows indicate properties from the Sim GW TNode template.</div>
<div>The <span style="color:#cccc00;">yellow</span> arrow indicates the default oem_host_version property assigned to all devices.</div>
1. Set the temp_setpoint property to a value (e.g. 70). Watch for datapoints from local_temp.
1. Set vacation_mode to 1. heat_on changes to 0. Watch local_temp decrease:
<div class="row">
<div class="col-lg-4 col-md-8 col-sm-12">
<img class="img-fluid img-top-bottom" src="vacation-mode.png">
</div>
</div>

### Add multiple nodes

1. In the Ayla Developer Portal, click View My Devices &gt; Sim GW 1.
1. Click the Add Sensor Nodes property.
1. Change the Current Value to 5, and click OK.
1. Click (Devices) Candidates. You may have to refresh because candidate creation takes a few seconds.
<div class="row">
<div class="col-lg-6 col-md-9 col-sm-12">
<img class="img-fluid img-top-bottom" src="five-candidate-nodes.png">
</div>
</div>
1. Click the register link for each candidate. Refresh the page (and click Candidates tab) between each registration.
1. Click (Devices) Nodes. See the new nodes. 
<div class="row">
<div class="col-lg-5 col-md-8 col-sm-12">
<img class="img-fluid img-top-bottom" src="all-nodes.png">
</div>
</div>
