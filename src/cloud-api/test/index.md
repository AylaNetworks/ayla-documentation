---
title: Test
layout: test.html
e: block
---

<div class="form-row">
  <div class="form-group col-auto">
    <select class="form-control form-control-sm ayla-region" style="min-width: 200px;">
      <option value="cndev">China Development</option>
      <option value="cnfield">China Field</option>
      <option value="eufield">EU Field</option>
      <option value="usdev" selected>US Development</option>
      <option value="usfield">US Field</option>
    </select>
  </div>
  <div class="form-group col-auto">
    <button type="button" class="btn btn-secondary btn-sm" data-toggle="collapse" data-target="#ayla-region-urls" aria-expanded="false">URLs</button>
  </div>
  <div class="form-group col-auto">
    <button type="button" class="btn btn-secondary btn-sm" data-toggle="collapse" data-target="#ayla-region-accounts" aria-expanded="false">Accounts</button>
  </div>
</div>
<div id="ayla-region-urls" class="collapse" style="padding:12px;background:#f2f2f2;margin-bottom:18px;border-radius:3px;">
  <table class="mb-0">
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
<div id="ayla-region-accounts" class="collapse" style="padding:16px 12px 0 12px;background:#f2f2f2;margin-bottom:18px;border-radius:3px;">
  <div class="form-row">
    <div class="form-group col-12 col-lg-3">
      <input id="region-email" type="text" class="form-control form-control-sm" placeholder="email">
    </div>
    <div class="form-group col-12 col-lg-3">
      <input id="region-password" type="text" class="form-control form-control-sm" placeholder="password">
    </div>
    <div class="form-group col-12 col-lg-3">
      <input id="region-app-id" type="text" class="form-control form-control-sm" placeholder="app_id">
    </div>
    <div class="form-group col-12 col-lg-3">
      <input id="region-app-secret" type="text" class="form-control form-control-sm" placeholder="app_secret">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-12 col-lg-3">
      <button id="region-tokens-btn" type="button" class="btn btn-sm btn-block">&nbsp;</button>
    </div>
    <div class="form-group col-12 col-lg-3">
      <input id="region-access-token" type="text" class="form-control form-control-sm" placeholder="access_token">
    </div>
    <div class="form-group col-12 col-lg-3">
      <input id="region-refresh-token" type="text" class="form-control form-control-sm" placeholder="refresh_token">
    </div>
    <div class="form-group col-12 col-lg-3">
      <button id="region-forget-btn" type="button" class="btn btn-danger btn-sm btn-block">Forget Account</button>
    </div>
  </div>
</div>
<div class="api get">
  <div class="api-title" data-toggle="collapse" href="#get-apiv1-devices">
    <span class="api-method">GET</span>
    <span class="api-url">/apiv1/devices</span>
    <span class="api-service">Device</span>
  </div>
  <div id="get-apiv1-devices" class="api-content collapse">
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>

<div class="api get">
  <div class="api-title" data-toggle="collapse" href="#get-apiv1-devices-deviceid">
    <span class="api-method">GET</span>
    <span class="api-url">/apiv1/devices/{deviceId}</span>
    <span class="api-service">Device</span>
  </div>
  <div id="get-apiv1-devices-deviceid" class="api-content collapse">
    <input class="api-path-parameter" type="text" placeholder="deviceId">
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>

<div class="api get">
  <div class="api-title" data-toggle="collapse" href="#get-apiv1-devices-deviceid-properties">
    <span class="api-method">GET</span>
    <span class="api-url">/apiv1/devices/{deviceId}/properties</span>
    <span class="api-service">Device</span>
  </div>
  <div id="get-apiv1-devices-deviceid-properties" class="api-content collapse">
    <input class="api-path-parameter" type="text" placeholder="deviceId">
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>

<div class="api post">
  <div class="api-title" data-toggle="collapse" href="#post-apiv1-devices-deviceId-properties-propertyName-datapoints">
    <span class="api-method">POST</span>
    <span class="api-url">/apiv1/devices/{deviceId}/properties/{propertyName}/datapoints</span>
    <span class="api-service">Device</span>
  </div>
  <div id="post-apiv1-devices-deviceId-properties-propertyName-datapoints" class="api-content collapse">
    <input class="api-path-parameter" type="text" placeholder="deviceId">
    <input class="api-path-parameter" type="text" placeholder="propertyName">
    <pre class="api-request-body" contenteditable="true">{
  "datapoint": {
    "value": "string",
    "metadata": {
      "key1": "string",
      "key2": "string"
    }
  }
}</pre>
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>

<div class="api get">
  <div class="api-title" data-toggle="collapse" href="#get-apiv1-dsns-dsn">
    <span class="api-method">GET</span>
    <span class="api-url">/apiv1/dsns/{dsn}</span>
    <span class="api-service">Device</span>
  </div>
  <div id="get-apiv1-dsns-dsn" class="api-content collapse">
    <input class="api-path-parameter" type="text" placeholder="dsn">
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>

<div class="api get">
  <div class="api-title" data-toggle="collapse" href="#get-users-get-user-profile">
    <span class="api-method">GET</span>
    <span class="api-url">/users/get_user_profile</span>
    <span class="api-service">User</span>
  </div>
  <div id="get-users-get-user-profile" class="api-content collapse">
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>

<div class="api post">
  <div class="api-title" data-toggle="collapse" href="#post-users-sign-in">
    <span class="api-method">POST</span>
    <span class="api-url">/users/sign_in</span>
    <span class="api-service">User</span>
  </div>
  <div id="post-users-sign-in" class="api-content collapse">
<pre class="api-request-body" contenteditable="true">{
  "user": {
    "email": "string",
    "password": "string",
    "application": {
      "app_id": "string",
      "app_secret": "string"
    }
  }
}</pre>
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>

<div class="api post">
  <div class="api-title" data-toggle="collapse" href="#post-users-sign-out">
    <span class="api-method">POST</span>
    <span class="api-url">/users/sign_out</span>
    <span class="api-service">User</span>
  </div>
  <div id="post-users-sign-out" class="api-content collapse">
<pre class="api-request-body" contenteditable="true">{
  "user": {
    "access_token": ""
  }
}</pre>
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>

<div class="api get">
  <div class="api-title" data-toggle="collapse" href="#get-users-uuid">
    <span class="api-method">GET</span>
    <span class="api-url">/users/{uuid}</span>
    <span class="api-service">User</span>
  </div>
  <div id="get-users-uuid" class="api-content collapse">
    <input class="api-path-parameter" type="text" placeholder="uuid">
    <div class="btn-group">
      <button type="button" class="btn btn-danger btn-sm api-run">Run</button>
      <button type="button" class="btn btn-warning btn-sm api-clear">Clear</button>
    </div>
    <pre class="api-response-body"></pre>
  </div>
</div>
