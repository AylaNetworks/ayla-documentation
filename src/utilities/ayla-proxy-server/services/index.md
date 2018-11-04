---
title: Services
layout: ayla-proxy-server.html
a: block
---

### Regional Domains

Ayla divides the world into three service regions: 

1. China (CN)
1. Europe (EU)
1. United States (US)

Each region includes an instance of the Ayla Cloud for field operations. The CN and US regions also include an instance each for development. That's a total of five Ayla Cloud instances:

1. CN Dev
1. CN Field
1. EU Field
1. US Dev
1. US Field

Each of these instances offers (potentially) all ten Ayla services. 

Consider US Dev:

<table class="key-value-table vertical-middle">
<tr>
<th>Service</th>
<th>Domain Name</th>
</tr>
<td>Application</td>
<td>application.aylanetworks.com</td>
</tr>
<tr>
<td>Datastream</td>
<td>stream.aylanetworks.com</td>
</tr>
<tr>
<td>Device</td>
<td>ads-dev.aylanetworks.com</td>
</tr>
<tr>
<td>Factory Proxy</td>
<td>api-dev.aylanetworks.com</td>
</tr>
<tr>
<td>Image</td>
<td>ais.aylanetworks.com</td>
</tr>
<tr>
<td>Log</td>
<td>log.aylanetworks.com</td>
</tr>
<tr>
<td>Notification</td>
<td>ans.aylanetworks.com</td>
</tr>
<tr>
<td>Rules</td>
<td>rulesservice-dev.aylanetworks.com</td>
</tr>
<tr>
<td>User</td>
<td>user-dev.aylanetworks.com</td>
</tr>
<tr>
<td>Zigbee</td>
<td>zigbee.aylanetworks.com</td>
</tr>
</table>

Note that each service (e.g. Ayla Application Service) requires a unique domain name per Ayla Cloud instance. Click [Ayla Application Service](ayla-application-service) to see an example. 

### Service API

To utilize these services, browser-based applications utilize <a href="https://docs.aylanetworks.com/utilities/ayla-proxy-server/source/ayla-proxy-server.js" target="_blank">ayla-proxy-server.js</a> composed of functions (e.g. [Create Datapoint](http://localhost/utilities/ayla-proxy-server/services/ayla-device-service/api/datapoints/create-datapoint/)). Most of these functions include two (callback function) parameters: successCb and errorCb. If the function is successful, the API calls successCb, optionally passing an object containing requested data. 

<pre class="light">function successCb(data)</pre>

Data object:

<pre class="light">
{
  "key1": "value1",
  "key1": "value1",
  "...": "..."
}
</pre>

Otherwise, the API calls errorCb passing a status object with HTTP code and text: 

<pre class="light">function errorCb(status)</pre>

Status object:

<pre class="light">
{
  "code": 404,
  "text": "Not Found"
}
</pre>
