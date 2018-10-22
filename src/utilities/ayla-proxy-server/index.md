---
title: Ayla Proxy Server
---

### Architecture

The Ayla Proxy Server, deployed in your domain, accesses the Ayla REST API on behalf of apps running in your domain that are prevented by [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) from accessing the Ayla REST API directly.

<div class="row hspace">
<div class="col-lg-6 col-md-10 col-sm-12">
<img class="img-fluid" src="ayla-proxy-server.png">
</div>
</div>

You install an instance of the Ayla Proxy Server in your domain. Each client application includes [ayla-proxy-client.js](source/ayla-proxy-client.js). 

Here is an <a href="https://docs.aylanetworks.com/utilities/ayla-proxy-server/source/client.html" target="_blank">example client application</a>.

### Operation

Start the service:

<pre>
$ forever -o output.log -e error.log --minUptime 1000ms --spinSleepTime 1000ms start server.js
</pre>

View the service:

<pre>
$ forever list
info:    Forever processes running
data:        uid  command                                          script    forever pid   id logfile                         uptime     
data:    [0] WsJb /home/bitnami/.nvm/versions/node/v9.8.0/bin/node server.js 22736   22746    /home/bitnami/.forever/WsJb.log 0:0:0:8.52
</pre>

Tail the service log files with the forever utility:

<pre>
$ forever logs 0
data:    server.js:22746 - Running server
data:    server.js:22746 - login
data:    server.js:22746 - getDevices
data:    server.js:22746 - getDevice
data:    server.js:22746 - getProperties
data:    server.js:22746 - getProperty
</pre>

Tail the service log files with tail:

<pre>
$ tail -f output.log
Running server
login
getDevices
getDevice
getProperties
getProperty
</pre>

Stop the service:

<pre>
$ forever stop <Id|Uid|Pid|Index|Script>
</pre>

