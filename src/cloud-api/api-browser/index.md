---
title: API Browser
layout: api.html
apiFile: ayla-cloud-api-006.yaml
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Browser</a></li>
  </ul>
</aside>

## Authorization

Click Login to populate the box with an auth_token required by most APIs:

<div class="row">
<div class="col-auto">
<input id="input-auth-token" class="form-control form-control-sm" type="text" style="width:300px;" disabled>
</div>
</div>

## Current Limitations

1. Supported regions: ```US Dev```.
1. Supported media types: ```application/json```.

## Device Tool

<div id="dt-group" class="cmpt" style="margin-bottom:1rem;">
  <div class="row">
    <div class="col-sm-4">
      <div class="link-btns">
        <span class="link-btn" data-toggle="collapse" data-target="#dt-device-details">Device Details</span>
      </div>
      <select id="dt-device-selector" class="form-control form-control-sm ayla-data populate-at-init"></select>
    </div>
    <div class="col-sm-4 mt-3 mt-sm-0">
      <div class="link-btns">
        <span class="link-btn" data-toggle="collapse" data-target="#dt-property-details">Property Details</span>
      </div>
      <select id="dt-property-selector" class="form-control form-control-sm ayla-data"></select>
    </div>
    <div class="col-sm-4 mt-3 mt-sm-0">
      <div class="link-btns">
        <span class="link-btn">Value</span>
      </div>
      <div class="row no-gutters">
        <div class="col">
          <div id="dt-value-wrapper"></div>
        </div>
        <div class="col-auto ml-2" id="dt-value-button-wrapper" style="display:none;">
          <button id="dt-save-value-btn" type="button" class="btn btn-info btn-sm">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="row">
      <div class="col-12">
        <pre id="dt-device-details" class="collapse mt-2" data-parent="#dt-group"></pre>
      </div>
    </div>
    <div class="row">
      <div class="col-4 d-none d-sm-block"></div>
      <div class="col-12 col-sm-8">
        <pre id="dt-property-details" class="collapse mt-2" data-parent="#dt-group"></pre>
      </div>
    </div>
  </div>
</div>

<!--
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
-->

## Service APIs

<div id="swagger-ui"></div>