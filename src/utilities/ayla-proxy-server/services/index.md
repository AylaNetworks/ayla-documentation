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

Each of these instances offers (potentially) all ten Ayla services. Consider US Dev:

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

Each service requires a unique domain name per Ayla Cloud instance. Consider the Ayla Application Service:

<table class="key-value-table vertical-middle">
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td><a href="https://application.ayla.com.cn" target="_blank">application.ayla.com.cn</a></td>
</tr>
<tr>
<td>field</td>
<td><a href="https://app-field.ayla.com.cn" target="_blank">app-field.ayla.com.cn</a></td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td><a href="https://app-field-eu.aylanetworks.com" target="_blank">app-field-eu.aylanetworks.com</a></td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td><a href="https://application.aylanetworks.com" target="_blank">application.aylanetworks.com</a></td>
</tr>
<tr>
<td>field</td>
<td><a href="https://app-field.aylanetworks.com" target="_blank">app-field.aylanetworks.com</a></td>
</tr>
</table>

### Service API

The Ayla Proxy Server enables browser-based applications to access all of these services. The application need only include <a href="https://docs.aylanetworks.com/utilities/ayla-proxy-server/source/ayla-proxy-server.js" target="_blank">ayla-proxy-server.js</a>, and call the functions defined therein. The sidebar enables you to navigate to function descriptions. Most functions include the parameters successCb and errorCb which are callback functions:

<pre class="light">
function createDatapoint(propertyId, value, successCb=null, errorCb=null)
</pre>

If the function is successful, the API calls successCb, optionally passing an object containing requested data. 

<pre class="light">function successCb(data)</pre>

<code>data</code> object:

<pre class="light">
{
  "datapoint": {
    "updated_at": "2018-11-02T14:15:06Z",
    "created_at": "2018-11-02T14:15:06Z",
    "echo": false,
    "metadata": {
      "key1": "",
      "key2": ""
    },
    "value": 1
  }
}
</pre>

Otherwise, the API calls errorCb passing a status object with HTTP code and text: 

<pre class="light">function errorCb(status)</pre>

<code>status</code> object:

<pre class="light">
{
  "code": 404,
  "text": "Not Found"
}
</pre>

Here is an example:

<pre class="light">
MyAyla.createDatapoint(propertyId, value, function(data) {
  console.log(JSON.stringify(data.datapoint))
}, function(status) {
  console.log(JSON.stringify(status))
})
</pre>

Functions preceded by <code>MyAyla</code> are user functions:

<pre class="light">
MyAyla.createDatapoint(...) {
  ...
}
</pre>

Functions preceded by <code>AylaAdmin</code> are admin functions:

<pre class="light">
AylaAdmin.deleteUserAccount(...) {
  ...  
}
</pre>
