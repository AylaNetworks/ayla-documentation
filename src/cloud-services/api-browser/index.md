---
title: API Browser
layout: api-browser.html
a: block
editIcon: none
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Browser</a></li>
    <li><a href="#datastream-header">Datastream Service</a></li>
    <li><a href="#device-header">Device Service</a></li>
    <li><a href="#factory-proxy-header">Factory Proxy Service</a></li>
    <li><a href="#iot-command-center-header">IoT Command Center</a></li>
    <li><a href="#message-header">Message Service</a></li>
    <li><a href="#rules-header">Rule Service</a></li>
    <li><a href="#user-header">User Service</a></li>
  </ul>
</aside>
<div style="font-size:85%;margin-bottom:6px;">See the [API Users Guide](../api-users-guide). Send feedback to matt&#64;aylanetworks.com.</div>
<div class="btn-group control-btns special">
  <button id="accounts-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Accounts</button>
  <button id="devices-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Devices</button>
  <button id="streams-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Streams</button>
  <button id="events-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Events</button>
  <button id="filter-button" type="button" class="btn btn-sm btn-outline-info" data-toggle="button" aria-pressed="false" autocomplete="off">Filter</button>
</div>
<div id="accounts-section">
  <div class="panel">
    <h3>Accounts</h3>
    <div class="form-row">
      <div class="col-12 col-md-6">
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
              <option value="qaalpha">QA Alpha</option>
              <option value="usdev" selected>US Development</option>
              <option value="usfield">US Field</option>
            </select>
          </div>
          <div class="col-auto">
            <button type="button" class="btn btn-sm btn-info btn-block" data-toggle="collapse" data-target="#ayla-region-urls" aria-expanded="false">Urls</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
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
            <button type="button" class="btn btn-sm btn-info btn-block" data-toggle="collapse" data-target="#ayla-account-details" aria-expanded="true">Details</button>
          </div>
        </div>
      </div>
    </div>
    <div id="ayla-region-urls" class="collapse" style="padding: 6px; background: snow;">
      <div class="title">Regional URLs</div>
      <div class="form-row">
        <div class="col-12 col-md-6 mb-2">
          <label>Datastream Service</label>
          <input id="datastream-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Datastream Service WS-Cloud</label>
          <input id="datastream-cloud-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Datastream Service WS-Mobile</label>
          <input id="datastream-mobile-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Device Service</label>
          <input id="device-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Factory Proxy Service</label>
          <input id="factory-proxy-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>IoT Command Center Service</label>
          <input id="icc-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Message Service</label>
          <input id="message-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>Rules Service</label>
          <input id="rules-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <label>User Service</label>
          <input id="user-service-url" type="text" class="form-control form-control-sm" disabled>
        </div>
      </div>
    </div>
    <div id="ayla-account-details" class="collapse show" style="padding: 6px; background: snow;">
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
          <input id="ayla-account-access-token" type="text" class="form-control form-control-sm" readonly>
        </div>
        <div class="col-12 col-lg-3 mb-2">
          <label>refresh_token</label>
          <input id="ayla-account-refresh-token" type="text" class="form-control form-control-sm" readonly>
        </div>
        <div class="col-12 col-lg-3 mb-2">
          <label>uuid</label>
          <input id="ayla-account-uuid" type="text" class="form-control form-control-sm" readonly>
        </div>
        <div class="col-12 col-lg-3 mb-2">
          <label>user_id</label>
          <input id="ayla-account-user-id" type="text" class="form-control form-control-sm" readonly>
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
<div id="event-streams-section">
  <div class="panel">
    <h3>DSS Streams</h3>
    <div class="form-row mb-2">
      <div class="col-md-3">
        <input id="stream-name" type="text" class="form-control form-control-sm" placeholder="Stream Name">
      </div>
      <div class="col-md-3">
        <input id="stream-key" type="text" class="form-control form-control-sm" placeholder="Stream Key">
      </div>
      <div class="col-md-2">
        <input id="stream-seq-start" type="text" class="form-control form-control-sm" placeholder="start">
      </div>
      <div class="col-md-2">
        <input id="stream-seq-end" type="text" class="form-control form-control-sm" placeholder="end">
      </div>
      <div class="col-md-2">
        <button id="stream-btn" type="button" class="btn btn-sm btn-info btn-block">Create</button>
      </div>
    </div>
    <div class="link-btns">
      <span id="delete-streams-btn" class="link-btn">Delete</span>
    </div>
    <table id="streams-table">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th class="es">ES</th>
          <th>Name</th>
          <th>Events</th>
          <th>HBs</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</div>
<div id="events-section">
  <div class="panel">
    <h3>DSS Events</h3>
    <div class="link-btns">
      <span id="delete-events-btn" class="link-btn">Delete</span>
    </div>
    <table id="events-table">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th class="es">ES</th>
          <th>Seq</th>
          <th>Type</th>
          <th>DSN</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
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
<h1 id="datastream-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#datastream-content"><div class="name">Datastream Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="datastream-content"></div>
<h1 id="device-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#device-content"><div class="name">Device Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="device-content"></div>
<h1 id="factory-proxy-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#factory-proxy-content"><div class="name">Factory Proxy Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="factory-proxy-content"></div>
<h1 id="iot-command-center-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#iot-command-center-content"><div class="name">IoT Command Center</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="iot-command-center-content"></div>
<h1 id="message-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#message-content"><div class="name">Message Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="message-content"></div>
<h1 id="rules-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#rules-content"><div class="name">Rule Service</div></div>
      <div class="col-auto count"><input type="text" class="count" disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="rules-content"></div>
<h1 id="user-header" class="api-service">
  <div class="api-service">
    <div class="row">
      <div class="col" data-toggle="collapse" href="#user-content"><div class="name">User Service</div></div>
      <div class="col-auto count"><input type="text" class="count" value=0 disabled></div>
    </div>
  </div>
</h1>
<div class="collapse" id="user-content"></div>
