---
title: API Browser v1.1
layout: api-test.html
e: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Browser</a></li>
    <li><a href="#application-service-header">Application Service</a></li>
    <li><a href="#datastream-service-header">Datastream Service</a></li>
    <li><a href="#device-service-header">Device Service</a></li>
    <li><a href="#factory-proxy-service-header">Factory Proxy Service</a></li>
    <li><a href="#image-service-header">Image Service</a></li>
    <li><a href="#iot-command-center-service-header">IoT Command Center</a></li>
    <li><a href="#log-service-header">Log Service</a></li>
    <li><a href="#notification-service-header">Notification Service</a></li>
    <li><a href="#rules-service-header">Rules Service</a></li>
    <li><a href="#user-service-header">User Service</a></li>
    <li><a href="#zigbee-service-header">Zigbee Service</a></li>
  </ul>
</aside>
<p style="font-size:90%;">To refresh access tokens, click ```Accounts > Account > Details > Return Tokens > Get Tokens```.</p>
<div class="btn-group control-btns">
  <button id="directions-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Directions</button>
  <button id="accounts-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Accounts</button>
  <button id="devices-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Devices</button>
  <button id="filter-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Filter</button>
</div>
<div id="directions-section">
  <p>The API Browser helps you use Ayla Cloud APIs to explore and manipulate devices, properties, datapoints, schedules, access rules, subscriptions, and many other Ayla data structures. To get started, follow these steps:</p>
  <ol>
    <li>Click the Account button.</li>
    <li>Choose a Region.</li>
    <li>Click Details.</li>
    <li>If you are accessing an Ayla Public Account, enter your email & password, and click Get Tokens.</li>
    <li>If you are accessing an Ayla Customer Account, include an app_id & app_secret.</li>
    <li>To add additional accounts, click <code>Blank Form</code>.</li>
    <li>To test access, expand Device Services below, and run the getDevices API.</li>
  </ol>
  <p>Please send feedback to **matt&#64;aylanetworks.com**.</p>
</div>
<div id="accounts-section">
  <div class="panel">
    <h3>Accounts</h3>
    <div class="form-row">
      <div class="col-12 col-sm-6">
        <div class="form-row">
          <div class="col-12">
            <label>Region</label>
          </div>
        </div>
        <div class="form-row">
          <div class="col mb-2">
            <select class="form-control form-control-sm ayla-regions">
              <option value="cndev">China Development</option>
              <option value="cnfield">China Field</option>
              <option value="eufield">EU Field</option>
              <option value="usdev" selected>US Development</option>
              <option value="usfield">US Field</option>
            </select>
          </div>
          <div class="col-auto">
            <button type="button" class="btn btn-sm btn-info btn-block" data-toggle="collapse" data-target="#ayla-region-urls" aria-expanded="false">Urls</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="form-row">
          <div class="col-12">
            <label>Account</label>
          </div>
        </div>
        <div class="form-row">
          <div class="col mb-2">
            <select class="form-control form-control-sm ayla-accounts"></select>
          </div>
          <div class="col-auto">
            <button type="button" class="btn btn-sm btn-info btn-block" data-toggle="collapse" data-target="#ayla-account-details" aria-expanded="false">Details</button>
          </div>
        </div>
      </div>
    </div>
    <div id="ayla-region-urls" class="collapse" style="padding: 6px; background: snow;">
      <div class="title">Regional URLs</div>
      <div class="form-row">
        <div class="col-12 col-md-6 mb-2">
          <label>Application Service</label>
          <input id="application-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Log Service</label>
          <input id="log-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12 col-md-6 mb-2">
          <label>Datastream Service</label>
          <input id="datastream-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Notification Service</label>
          <input id="notification-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12 col-md-6 mb-2">
          <label>Device Service</label>
          <input id="device-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Rules Service</label>
          <input id="rules-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12 col-md-6 mb-2">
          <label>Factory Proxy Service</label>
          <input id="factory-proxy-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>User Service</label>
          <input id="user-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12 col-md-6 mb-2">
          <label>Image Service</label>
          <input id="image-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Zigbee Service</label>
          <input id="zigbee-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
      </div>
    </div>
    <div id="ayla-account-details" class="collapse" style="padding: 6px; background: snow;">
      <div class="title">Account Details</div>
      <div class="form-row">
        <div class="col-12 col-md-6 col-lg-3 mb-2">
          <label>email</label>
          <input id="ayla-account-email" type="text" class="form-control form-control-sm">
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-2">
          <label>password</label>
          <input id="ayla-account-password" type="password" class="form-control form-control-sm" autocomplete='new-password'>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-2">
          <label>app_id</label>
          <input id="ayla-account-app-id" type="text" class="form-control form-control-sm">
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-2">
          <label>app_secret</label>
          <input id="ayla-account-app-secret" type="text" class="form-control form-control-sm">
        </div>
      </div>
      <div class="form-row">
        <div class="col-12 col-md-6 col-lg-3 mt-2 mb-2">
          <button id="ayla-account-tokens-btn" type="button" class="btn btn-sm btn-block">&nbsp;</button>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-2 mb-2">
          <button id="ayla-add-account-btn" type="button" class="btn btn-sm btn-primary btn-block">Blank Form</button>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mt-2 mb-2">
          <button id="ayla-remove-account-btn" type="button" class="btn btn-sm btn-danger btn-block">Remove Account</button>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12 col-lg-3 mb-2">
          <label>access_token</label>
          <input id="ayla-account-access-token" type="text" class="form-control form-control-sm">
        </div>
        <div class="col-12 col-lg-3 mb-2">
          <label>refresh_token</label>
          <input id="ayla-account-refresh-token" type="text" class="form-control form-control-sm">
        </div>
        <div class="col-12 col-lg-3 mb-2">
          <label>uuid</label>
          <input id="ayla-account-uuid" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-lg-3 mb-2">
          <label>user_id</label>
          <input id="ayla-account-user-id" type="text" class="form-control form-control-sm" disabled>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="devices-section">
  <div class="panel">
    <h3>Devices</h3>
    <div class="form-row">
      <div class="col-12 col-md-4">
        <div class="form-row">
          <div class="col-12">
            <label>Device</label>
          </div>
        </div>
        <div class="form-row">
          <div class="col mb-2">
            <select id="dt-device-selector" class="form-control form-control-sm"></select>
          </div>
          <div class="col-auto">
            <button type="button" class="btn btn-sm btn-info btn-block" data-toggle="collapse" data-target="#dt-device-details" aria-expanded="false">Details</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="form-row">
          <div class="col-12">
            <label>Property</label>
          </div>
        </div>
        <div class="form-row">
          <div class="col mb-2">
            <select id="dt-property-selector" class="form-control form-control-sm"></select>
          </div>
          <div class="col-auto">
            <button type="button" class="btn btn-sm btn-info btn-block" data-toggle="collapse" data-target="#dt-property-details" aria-expanded="false">Details</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-4 mb-2">
        <label>Value</label>
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
    <pre id="dt-device-details" class="collapse"></pre>
    <pre id="dt-property-details" class="collapse"></pre>
  </div>
</div>
<div id="filter-section">
  <div class="panel">
    <div class="form-row mb-2">
      <div class="col-auto">
         <h3 style="margin:0 !important;line-height:1.4;">Filter</h3>
      </div>
      <div class="col">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlinetags" value="all" checked>
          <label class="form-check-label">All</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlinetags" value="none">
          <label class="form-check-label">None</label>
        </div>
      </div>
    </div>
    <div class="form-row tag-row">
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
  </div>
</div>
<!--
<h1 id="adms-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col-sm" data-toggle="collapse" href="#adms-service-content"><div class="name">ADMS</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="adms-service-content"></div>
-->
<h1 id="application-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#application-service-content"><div class="name">Application Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="application-service-content"></div>
<h1 id="datastream-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#datastream-service-content"><div class="name">Datastream Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="datastream-service-content"></div>
<h1 id="device-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#device-service-content"><div class="name">Device Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="device-service-content"></div>
<h1 id="factory-proxy-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#factory-proxy-service-content"><div class="name">Factory Proxy Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="factory-proxy-service-content"></div>
<h1 id="image-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#image-service-content"><div class="name">Image Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="image-service-content"></div>
<h1 id="iot-command-center-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#iot-command-center-service-content"><div class="name">IoT Command Center</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="iot-command-center-service-content"></div>
<h1 id="log-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#log-service-content"><div class="name">Log Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="log-service-content"></div>
<h1 id="notification-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#notification-service-content"><div class="name">Notification Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="notification-service-content"></div>
<h1 id="rules-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#rules-service-content"><div class="name">Rules Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="rules-service-content"></div>
<h1 id="user-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#user-service-content"><div class="name">User Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="user-service-content"></div>
<h1 id="zigbee-service-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#zigbee-service-content"><div class="name">Zigbee Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="zigbee-service-content"></div>
