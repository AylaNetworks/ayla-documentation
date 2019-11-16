---
title: Test
layout: test.html
e: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Browser</a></li>
    <li><a href="#access-rules-header">Access Rules</a></li>
    <li><a href="#contacts-header">Contacts</a></li>
    <li><a href="#datapoints-header">Datapoints</a></li>
    <li><a href="#devices-header">Devices</a></li>
    <li><a href="#gateways-header">Gateways</a></li>
    <li><a href="#groups-header">Groups</a></li>
    <li><a href="#metadata-header">Metadata</a></li>
    <li><a href="#properties-header">Properties</a></li>
    <li><a href="#shares-header">Shares</a></li>
    <li><a href="#schedules-header">Schedules</a></li>
    <li><a href="#schedule-actions-header">Schedule Actions</a></li>
    <li><a href="#subscriptions-header">Subscriptions</a></li>
    <li><a href="#time-zones-header">Time Zones</a></li>
    <li><a href="#user-accounts-header">User Accounts</a></li>
  </ul>
</aside>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="accounts-tab" data-toggle="tab" href="#accounts-tab-pane" role="tab" aria-controls="home" aria-selected="true">Accounts</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="devices-tab" data-toggle="tab" href="#devices-tab-pane" role="tab" aria-controls="profile" aria-selected="false">Devices</a>
  </li>
</ul>
<div class="tab-content">
  <div class="panel tab-pane fade show active" id="accounts-tab-pane" role="tabpanel" aria-labelledby="accounts-tab-pane">
    <div class="form-row ">
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
            <button type="button" class="btn btn-sm btn-info btn-block" data-toggle="collapse" data-target="#ayla-region-urls" aria-expanded="false">Details</button>
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
        <div class="col-12 col-md-6 col-lg-3">
          <div class="form-row">
            <div class="col-12 col-md-6 mt-2 mb-2">
              <button id="ayla-add-account-btn" type="button" class="btn btn-sm btn-dark btn-block">+ Acct</button>
            </div>
            <div class="col-12 col-md-6 mt-2 mb-2">
              <button id="ayla-remove-account-btn" type="button" class="btn btn-sm btn-danger btn-block">- Acct</button>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12 col-lg-3 mb-2">
          <label>access_token</label>
          <input id="ayla-account-access-token" type="text" class="form-control form-control-sm" disabled>
        </div>
        <div class="col-12 col-lg-3 mb-2">
          <label>refresh_token</label>
          <input id="ayla-account-refresh-token" type="text" class="form-control form-control-sm" disabled>
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
  <div class="panel tab-pane fade" id="devices-tab-pane" role="tabpanel" aria-labelledby="devices-tab-pane">
    <div class="form-row ">
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
<h1 id="access-rules-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#access-rules-content">
    <div class="row">
      <div class="col-sm"><div class="name">Access Rules</div></div>
      <div class="col-sm-auto"><div class="service">Datastream Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="access-rules-content"></div>
<h1 id="contacts-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#contacts-content">
    <div class="row">
      <div class="col-sm"><div class="name">Contacts</div></div>
      <div class="col-sm-auto"><div class="service">User Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="contacts-content"></div>
<h1 id="datapoints-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#datapoints-content">
    <div class="row">
      <div class="col-sm"><div class="name">Datapoints</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="datapoints-content"></div>
<h1 id="devices-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#devices-content">
    <div class="row">
      <div class="col-sm"><div class="name">Devices</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="devices-content"></div>
<h1 id="gateways-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#gateways-content">
    <div class="row">
      <div class="col-sm"><div class="name">Gateways</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="gateways-content"></div>
<h1 id="groups-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#groups-content">
    <div class="row">
      <div class="col-sm"><div class="name">Groups</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="groups-content"></div>
<h1 id="metadata-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#metadata-content">
    <div class="row">
      <div class="col-sm"><div class="name">Metadata</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="metadata-content"></div>
<h1 id="properties-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#properties-content">
    <div class="row">
      <div class="col-sm"><div class="name">Properties</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="properties-content"></div>
<h1 id="shares-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#shares-content">
    <div class="row">
      <div class="col-sm"><div class="name">Shares</div></div>
      <div class="col-sm-auto"><div class="service">User Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="shares-content"></div>
<h1 id="schedules-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#schedules-content">
    <div class="row">
      <div class="col-sm"><div class="name">Schedules</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="schedules-content"></div>
<h1 id="schedule-actions-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#schedule-actions-content">
    <div class="row">
      <div class="col-sm"><div class="name">Schedule Actions</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="schedule-actions-content"></div>
<h1 id="subscriptions-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#subscriptions-content">
    <div class="row">
      <div class="col-sm"><div class="name">Subscriptions</div></div>
      <div class="col-sm-auto"><div class="service">Datastream Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="subscriptions-content"></div>
<h1 id="time-zones-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#time-zones-content">
    <div class="row">
      <div class="col-sm"><div class="name">Time Zones</div></div>
      <div class="col-sm-auto"><div class="service">Device Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="time-zones-content"></div>
<h1 id="user-accounts-header" class="api-category">
  <div class="api-category" data-toggle="collapse" href="#user-accounts-content">
    <div class="row">
      <div class="col-sm"><div class="name">User Accounts</div></div>
      <div class="col-sm-auto"><div class="service">User Service</div></div>
    </div>
  </div>
</h1>
<div class="collapse" id="user-accounts-content"></div>
