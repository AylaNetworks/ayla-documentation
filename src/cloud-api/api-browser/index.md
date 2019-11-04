---
title: API Browser
layout: api.html
e: block
apiFile: ayla-cloud-api.yaml
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Browser</a></li>
  </ul>
</aside>

<div class="mb-1" style="color:steelblue;cursor:pointer;" data-toggle="collapse" href="#collapseExample">Click for directions.</div>
<div id="collapseExample" class="collapse mb-4">
<div class="card card-body" style="background:#f2f2f2;border-color:#e6e6e6;">
<div>This API Browser enables you to explore each Ayla Cloud API individually.</div>
<h3 class="mt-3">Authentication</h3>
<p>Click Login in the top menu to populate the following textbox with an auth_token required by most APIs:</p>
<div class="row mb-3">
<div class="col-auto">
<input id="input-auth-token" class="form-control form-control-sm" type="text" style="width:300px;" placeholder="auth_token" disabled>
</div>
</div>
<div>You need not specify an appId nor appSecret when logging into the Ayla Public Account.</div>
<h3 class="mt-3">Current Limitations</h3>
<ol class="mb-0">
<li>Supported regions: ```US Dev```. Support for ```US Field``` will be added soon.</li>
<li>Supported media types: ```application/json```.</li>
<li>Feedback is welcome. Contact matt&#64;aylanetworks.com.</li>
</ol>
<h3 class="mt-2">Device Tool</h3>
<div>The Device Tool below is provided as a convenience. When logged in, the Device Tool displays information about all devices registered to you. True, you can obtain this information by calling individual APIs, and we recommend that you do so. But, once you are familiar with basic device, property, and datapoint APIs, you may find the Device Tool helpful. Click <img style="display:inline;margin:0 0 2px 0;" src="/assets/images/info.png" width="16" height="16"> to obtain Device IDs, Property IDs, DSNs, etc. Click <img style="display:inline;margin:0 0 2px 0;" src="/assets/images/refresh.png" width="19" height="15"> to reload the current device, current property, or the entire tool. And, you can update "To Device" property values, too.</div>
</div>
</div>

<div id="dt-group" class="cmpt" style="margin-bottom:1rem;">
  <h3 style="margin-left:2px;">Device Tool
    <span id="dt-group-refresh-all" class="link-btn ml-3" style="font-weight:normal;float:right;"><img style="display:inline;margin:0 0 2px 0;" src="/assets/images/refresh.png" width="19" height="15"></span>
  </h3>
  <div class="row" style="clear:right;">
    <div class="col-sm-4">
      <div class="link-btns">
        <span style="font-size:95%;font-weight:bold;margin:0 12px 0 3px;color:#4d4d4d;">Device</span>
        <span class="link-btn" data-toggle="collapse" data-target="#dt-device-details"><img style="display:inline;margin:0 0 2px 0;" src="/assets/images/info.png" width="16" height="16"></span>
        <span id="dt-group-refresh-device" class="link-btn"><img style="display:inline;margin:0 0 2px 0;" src="/assets/images/refresh.png" width="19" height="15"></span>
      </div>
      <select id="dt-device-selector" class="form-control form-control-sm ayla-data populate-at-init"></select>
    </div>
    <div class="col-sm-4 mt-3 mt-sm-0">
      <div class="link-btns">
        <span style="font-size:95%;font-weight:bold;margin:0 12px 0 3px;color:#4d4d4d;">Property</span>
        <span class="link-btn" data-toggle="collapse" data-target="#dt-property-details"><img style="display:inline;margin:0 0 2px 0;" src="/assets/images/info.png" width="16" height="16"></span>
        <span id="dt-group-refresh-property" class="link-btn"><img style="display:inline;margin:0 0 2px 0;" src="/assets/images/refresh.png" width="19" height="15"></span>
      </div>
      <select id="dt-property-selector" class="form-control form-control-sm ayla-data"></select>
    </div>
    <div class="col-sm-4 mt-3 mt-sm-0">
      <div class="link-btns">
        <span style="font-size:95%;font-weight:bold;margin:0 12px 0 3px;color:#4d4d4d;">Value</span>
      </div>
      <div class="row no-gutters">
        <div class="col">
          <div id="dt-value-wrapper"><input type="text" class="form-control form-control-sm" disabled></div>
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

<div id="swagger-ui"></div>
