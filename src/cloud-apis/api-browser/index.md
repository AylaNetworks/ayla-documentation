---
title: API Browser
layout: api.html
e: block
apiFile: cloud-apis.yml
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Browser</a></li>
  </ul>
</aside>

<div class="row">
<div class="col-auto">
<select class="form-control form-control-sm mb-3 service-region" style="min-width: 200px;">
  <option selected disabled hidden>Select a service region</option>
  <option value=0>China Development</option>
  <option value=1>China Field</option>
  <option value=2>EU Field</option>
  <option value=3>US Development</option>
  <option value=4>US Field</option>
</select>
</div>
<div class="col-auto">
<button type="button" class="btn btn-info btn-sm" data-toggle="collapse" data-target="#service-urls-collapse" aria-expanded="false" aria-controls="service-urls-collapse">View service region urls</button>
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

<div id="swagger-ui"></div>