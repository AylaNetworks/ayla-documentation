---
title: Cloud API
layout: service-urls.html
e: block
---

The Ayla Cloud API provides programmatic access to Ayla Cloud Services.

Click [API Browser](api-browser) to explore individual APIs.

Click [Change Log](change-log) to view changes to APIs over time.

Ayla provides a distinct URL for each service in each Ayla region/deployment type:

<div class="row">
<div class="col-auto">
<select class="form-control form-control-sm mb-3 service-region" style="min-width: 200px;">
  <option value=0>China Development</option>
  <option value=1>China Field</option>
  <option value=2>EU Field</option>
  <option value=3 selected>US Development</option>
  <option value=4>US Field</option>
</select>
</div>
<div class="col-auto">
<button type="button" class="btn btn-info btn-sm" data-toggle="collapse" data-target="#service-urls-collapse" aria-expanded="false" aria-controls="service-urls-collapse">Regional URLs</button>
</div>
</div>
<div class="collapse" id="service-urls-collapse">
<table id="service-urls">
<tr><th>Service</th><th style="min-width:250px;">URL</th></tr>
<tr><td>Application</td><td><code id="application-service-url"></code></td></tr>
<tr><td>Datastream</td><td><code id="datastream-service-url"></code></td></tr>
<tr><td>Device</td><td><code id="device-service-url"></code></td></tr>
<tr><td>Factory Proxy</td><td><code id="factory-proxy-service-url"></code></td></tr>
<tr><td>Image</td><td><code id="image-service-url"></code></td></tr>
<tr><td>Log</td><td><code id="log-service-url"></code></td></tr>
<tr><td>Notification</td><td><code id="notification-service-url"></code></td></tr>
<tr><td>Rules</td><td><code id="rules-service-url"></code></td></tr>
<tr><td>User</td><td><code id="user-service-url"></code></td></tr>
<tr><td>Zigbee</td><td><code id="zigbee-service-url"></code></td></tr>
</table>
</div>

The following documents provide information about APIs that have not yet been added to the [API Browser](api-browser):

<ul>
<li><a href="/archive/ayla-factory-service-api-specification">Ayla Factory Service API Specification</a></li>
<li><a href="/archive/ayla-iot-command-center-api">Ayla IoT Command Center API</a></li>
<li><a href="/archive/ayla-rbac-api-specification">Ayla RBAC API Specification</a></li>
<li><a href="/archive/ayla-rules-api-specification">Ayla Rules API Specification</a></li>
</ul>
