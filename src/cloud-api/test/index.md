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
    <div id="ayla-region-urls" class="collapse">
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
    <div id="ayla-account-details" class="collapse">
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

<h1 id="access-rules-header" class="api-category" data-toggle="collapse" href="#access-rules-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Access Rules</div></div>
    <div class="col-sm-9"><div class="service">Datastream Service</div></div>
  </div>
</h1>
<div class="collapse" id="access-rules-content"></div>

<h1 id="contacts-header" class="api-category" data-toggle="collapse" href="#contacts-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Contacts</div></div>
    <div class="col-sm-9"><div class="service">User Service</div></div>
  </div>
</h1>
<div class="collapse" id="contacts-content"></div>

<h1 id="datapoints-header" class="api-category" data-toggle="collapse" href="#datapoints-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Datapoints</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>

<div class="collapse" id="datapoints-content">
  <div class="api post">
    <div class="header collapsed" data-toggle="collapse" href="#post-apiv1-devices-devId-properties-propName-datapoints">
      <div class="row align-items-center no-gutters">
        <div class="col-12 col-md-auto method">POST</div>
        <div class="col-12 col-md url">/apiv1/devices/{devId}/properties/{propName}/datapoints</div>
        <div class="col-12 col-md-auto name">createDatapointByDevId</div>
      </div>
    </div>
    <div class="content collapse" id="post-apiv1-devices-devId-properties-propName-datapoints">
      <div class="form-row">
        <div class="col-12 col-sm description">This API creates a datapoint for the specified property. The metadata in the request data is optional.</div>
        <div class="col-12 col-sm-auto service">Device Service</div>
      </div>
      <div class="heading">Request</div>
      <div class="subheading">Path Parameters</div>
      <div class="form-row path-parameter">
        <div class="col-12 col-lg-3">
          <input type="text" class="form-control form-control-sm value" placeholder="devId">
        </div>
        <div class="col-12 col-lg-9">
          <div><span class="name">devId</span>. <span  class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div>
        </div>
      </div>
      <div class="form-row path-parameter">
        <div class="col-12 col-lg-3">
          <input type="text" class="form-control form-control-sm value" placeholder="propName">
        </div>
        <div class="col-12 col-lg-9">
          <div><span class="name">propName</span>. <span  class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div>
        </div>
      </div>
      <div class="subheading">Data</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-request-data-element">Hide</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">Reset</button>
      </div>
      <pre class="request-data-element" contenteditable="true">{
    "datapoint": {
      "value": "string"<span class="optional">,
      "metadata": {
        "key1": "string",
        "key2": "string"
      }</span>
    }
  }</pre>
      <div class="form-row">
        <div class="col-12">
          <button type="button" class="btn btn-danger btn-sm run">Run</button>
        </div>
      </div>
      <div class="heading">Response</div>
      <div class="subheading">Body</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
        <button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>
      </div>
      <pre class="response-data-element" style="display:none;"></pre>
      <div class="subheading">Status Codes</div>
      <div class="status-codes">
        <div class="form-row status-code sc201"><div class="col-1 code">201</div><div class="col-11 text">Created</div></div>
        <div class="form-row status-code sc401"><div class="col-1 code">401</div><div class="col-11 text">Unauthorized</div></div>
        <div class="form-row status-code sc403"><div class="col-1 code">403</div><div class="col-11 text">Forbidden</div></div>
        <div class="form-row status-code sc404"><div class="col-1 code">404</div><div class="col-11 text">Not Found</div></div>
      </div>
    </div>
  </div>
</div>

<h1 id="devices-header" class="api-category" data-toggle="collapse" href="#devices-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Devices</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>

<div class="collapse" id="devices-content">
  <div class="api get">
    <div class="header collapsed" data-toggle="collapse" href="#get-apiv1-devices-devid">
      <div class="row align-items-center no-gutters">
        <div class="col-12 col-md-auto method">GET</div>
        <div class="col-12 col-md url">/apiv1/devices/{devId}</div>
        <div class="col-12 col-md-auto name">getDeviceByDevId</div>
      </div>
    </div>
    <div class="content collapse" id="get-apiv1-devices-devid">
      <div class="form-row">
        <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="col-12 col-sm-auto service">Device Service</div>
      </div>
      <div class="heading">Request</div>
      <div class="subheading">Path Parameters</div>
      <div class="form-row path-parameter">
        <div class="col-12 col-lg-3">
          <input type="text" class="form-control form-control-sm value" placeholder="devId">
        </div>
        <div class="col-12 col-lg-9">
          <div><span class="name">devId</span>. <span  class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12">
          <button type="button" class="btn btn-danger btn-sm run">Run</button>
        </div>
      </div>
      <div class="heading">Response</div>
      <div class="subheading">Body</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
        <button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>
      </div>
      <pre class="response-data-element" style="display:none;"></pre>
      <div class="subheading">Status Codes</div>
      <div class="status-codes">
        <div class="form-row status-code sc200"><div class="col-1 code">200</div><div class="col-11 text">OK</div></div>
        <div class="form-row status-code sc401"><div class="col-1 code">401</div><div class="col-11 text">Unauthorized</div></div>
        <div class="form-row status-code sc403"><div class="col-1 code">403</div><div class="col-11 text">Forbidden</div></div>
        <div class="form-row status-code sc404"><div class="col-1 code">404</div><div class="col-11 text">Not Found</div></div>
      </div>
    </div>
  </div>

  <div class="api get">
    <div class="header collapsed" data-toggle="collapse" href="#get-apiv1-dsns-dsn">
      <div class="row align-items-center no-gutters">
        <div class="col-12 col-md-auto method">GET</div>
        <div class="col-12 col-md url">/apiv1/dsns/{dsn}</div>
        <div class="col-12 col-md-auto name">getDeviceByDsn</div>
      </div>
    </div>
    <div class="content collapse" id="get-apiv1-dsns-dsn">
      <div class="form-row">
        <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="col-12 col-sm-auto service">Device Service</div>
      </div>
      <div class="heading">Request</div>
      <div class="form-row path-parameter">
        <div class="col-12 col-lg-3">
          <input type="text" class="form-control form-control-sm value" placeholder="dsn">
        </div>
        <div class="col-12 col-lg-9">
          <div><span class="name">dsn</span>. <span  class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12">
          <button type="button" class="btn btn-danger btn-sm run">Run</button>
        </div>
      </div>
      <div class="heading">Response</div>
      <div class="subheading">Body</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
        <button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>
      </div>
      <pre class="response-data-element" style="display:none;"></pre>
      <div class="subheading">Status Codes</div>
      <div class="status-codes">
        <div class="form-row status-code sc200"><div class="col-1 code">200</div><div class="col-11 text">OK</div></div>
        <div class="form-row status-code sc401"><div class="col-1 code">401</div><div class="col-11 text">Unauthorized</div></div>
        <div class="form-row status-code sc403"><div class="col-1 code">403</div><div class="col-11 text">Forbidden</div></div>
        <div class="form-row status-code sc404"><div class="col-1 code">404</div><div class="col-11 text">Not Found</div></div>
      </div>
    </div>
  </div>
</div>

<h1 id="gateways-header" class="api-category" data-toggle="collapse" href="#gateways-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Gateways</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>
<div class="collapse" id="gateways-content"></div>

<h1 id="groups-header" class="api-category" data-toggle="collapse" href="#groups-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Groups</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>
<div class="collapse" id="groups-content"></div>

<h1 id="metadata-header" class="api-category" data-toggle="collapse" href="#metadata-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Metadata</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>
<div class="collapse" id="metadata-content"></div>

<h1 id="properties-header" class="api-category" data-toggle="collapse" href="#properties-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Properties</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>

<div class="collapse" id="properties-content">
  <div class="api get">
    <div class="header collapsed" data-toggle="collapse" href="#get-apiv1-devices-devid-properties">
      <div class="row align-items-center no-gutters">
        <div class="col-12 col-md-auto method">GET</div>
        <div class="col-12 col-md url">/apiv1/devices/{devId}/properties</div>
        <div class="col-12 col-md-auto name">getPropertiesByDevId</div>
      </div>
    </div>
    <div class="content collapse" id="get-apiv1-devices-devid-properties">
      <div class="form-row">
        <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="col-12 col-sm-auto service">Device Service</div>
      </div>
      <div class="heading">Request</div>
      <div class="form-row path-parameter">
        <div class="col-12 col-lg-3">
          <input type="text" class="form-control form-control-sm value" placeholder="devId">
        </div>
        <div class="col-12 col-lg-9">
          <div><span class="name">devId</span>. <span  class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12">
          <button type="button" class="btn btn-danger btn-sm run">Run</button>
        </div>
      </div>
      <div class="heading">Response</div>
      <div class="subheading">Body</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
        <button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>
      </div>
      <pre class="response-data-element" style="display:none;"></pre>
      <div class="subheading">Status Codes</div>
      <div class="status-codes">
        <div class="form-row status-code sc200"><div class="col-1 code">200</div><div class="col-11 text">OK</div></div>
        <div class="form-row status-code sc401"><div class="col-1 code">401</div><div class="col-11 text">Unauthorized</div></div>
        <div class="form-row status-code sc403"><div class="col-1 code">403</div><div class="col-11 text">Forbidden</div></div>
        <div class="form-row status-code sc404"><div class="col-1 code">404</div><div class="col-11 text">Not Found</div></div>
      </div>
    </div>
  </div>

  <div class="api get">
    <div class="header collapsed" data-toggle="collapse" href="#get-apiv1-devices-devid-properties-propname">
      <div class="row align-items-center no-gutters">
        <div class="col-12 col-md-auto method">GET</div>
        <div class="col-12 col-md url">/apiv1/devices/{devId}/properties/{propName}</div>
        <div class="col-12 col-md-auto name">getPropertyByDevId</div>
      </div>
    </div>
    <div class="content collapse" id="get-apiv1-devices-devid-properties-propname">
      <div class="form-row">
        <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="col-12 col-sm-auto service">Device Service</div>
      </div>
      <div class="heading">Request</div>
      <div class="form-row path-parameter">
        <div class="col-12 col-lg-3">
          <input type="text" class="form-control form-control-sm value" placeholder="devId">
        </div>
        <div class="col-12 col-lg-9">
          <div><span class="name">devId</span>. <span  class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div>
        </div>
      </div>
      <div class="form-row path-parameter">
        <div class="col-12 col-lg-3">
          <input type="text" class="form-control form-control-sm value" placeholder="propName">
        </div>
        <div class="col-12 col-lg-9">
          <div><span class="name">propName</span>. <span  class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12">
          <button type="button" class="btn btn-danger btn-sm run">Run</button>
        </div>
      </div>
      <div class="heading">Response</div>
      <div class="subheading">Body</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
        <button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>
      </div>
      <pre class="response-data-element" style="display:none;"></pre>
      <div class="subheading">Status Codes</div>
      <div class="status-codes">
        <div class="form-row status-code sc200"><div class="col-1 code">200</div><div class="col-11 text">OK</div></div>
        <div class="form-row status-code sc401"><div class="col-1 code">401</div><div class="col-11 text">Unauthorized</div></div>
        <div class="form-row status-code sc403"><div class="col-1 code">403</div><div class="col-11 text">Forbidden</div></div>
        <div class="form-row status-code sc404"><div class="col-1 code">404</div><div class="col-11 text">Not Found</div></div>
      </div>
    </div>
  </div>
</div>

<h1 id="shares-header" class="api-category" data-toggle="collapse" href="#shares-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Shares</div></div>
    <div class="col-sm-9"><div class="service">User Service</div></div>
  </div>
</h1>
<div class="collapse" id="shares-content"></div>

<h1 id="schedules-header" class="api-category" data-toggle="collapse" href="#schedules-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Schedules</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>
<div class="collapse" id="schedules-content"></div>

<h1 id="schedule-actions-header" class="api-category" data-toggle="collapse" href="#schedule-actions-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Schedule Actions</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>
<div class="collapse" id="schedule-actions-content"></div>

<h1 id="subscriptions-header" class="api-category" data-toggle="collapse" href="#subscriptions-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Subscriptions</div></div>
    <div class="col-sm-9"><div class="service">Datastream Service</div></div>
  </div>
</h1>
<div class="collapse" id="subscriptions-content"></div>

<h1 id="time-zones-header" class="api-category" data-toggle="collapse" href="#time-zones-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">Time Zones</div></div>
    <div class="col-sm-9"><div class="service">Device Service</div></div>
  </div>
</h1>
<div class="collapse" id="time-zones-content"></div>

<h1 id="user-accounts-header" class="api-category" data-toggle="collapse" href="#user-accounts-content">
  <div class="row">
    <div class="col-sm-3"><div class="name">User Accounts</div></div>
    <div class="col-sm-9"><div class="service">User Service</div></div>
  </div>
</h1>

<div class="collapse" id="user-accounts-content">
  <div class="api get">
    <div class="header collapsed" data-toggle="collapse" href="#get-users-uuid">
      <div class="row align-items-center no-gutters">
        <div class="col-12 col-md-auto method">GET</div>
        <div class="col-12 col-md url">/users/{uuid}</div>
        <div class="col-12 col-md-auto name">getUserByUuid</div>
      </div>
    </div>
    <div class="content collapse" id="get-users-uuid">
      <div class="form-row">
        <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="col-12 col-sm-auto service">User Service</div>
      </div>
      <div class="heading">Request</div>
      <div class="form-row path-parameter">
        <div class="col-12 col-lg-3">
          <input type="text" class="form-control form-control-sm value" placeholder="uuid">
        </div>
        <div class="col-12 col-lg-9">
          <div><span class="name">uuid</span>. <span  class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-12">
          <button type="button" class="btn btn-danger btn-sm run">Run</button>
        </div>
      </div>
      <div class="heading">Response</div>
      <div class="subheading">Body</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
        <button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>
      </div>
      <pre class="response-data-element" style="display:none;"></pre>
      <div class="subheading">Status Codes</div>
      <div class="status-codes">
        <div class="form-row status-code sc200"><div class="col-1 code">200</div><div class="col-11 text">OK</div></div>
        <div class="form-row status-code sc401"><div class="col-1 code">401</div><div class="col-11 text">Unauthorized</div></div>
        <div class="form-row status-code sc403"><div class="col-1 code">403</div><div class="col-11 text">Forbidden</div></div>
        <div class="form-row status-code sc404"><div class="col-1 code">404</div><div class="col-11 text">Not Found</div></div>
      </div>
    </div>
  </div>

  <div class="api post">
    <div class="header collapsed" data-toggle="collapse" href="#post-users-sign-in">
      <div class="row align-items-center no-gutters">
        <div class="col-12 col-md-auto method">POST</div>
        <div class="col-12 col-md url">/users/sign_in</div>
        <div class="col-12 col-md-auto name">getTokens</div>
      </div>
    </div>
    <div class="content collapse" id="post-users-sign-in">
      <div class="form-row">
        <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="col-12 col-sm-auto service">User Service</div>
      </div>
      <div class="heading">Request</div>
      <div class="subheading">Data</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-request-data-element">Hide</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">Reset</button>
      </div>
  <pre class="request-data-element" contenteditable="true">{
    "user": {
      "email": "<span class='email'></span>",
      "password": "",
      "application": {
        "app_id": "<span class='app-id'></span>",
        "app_secret": "<span class='app-secret'></span>"
      }
    }
  }</pre>
      <div class="form-row">
        <div class="col-12">
          <button type="button" class="btn btn-danger btn-sm run">Run</button>
        </div>
      </div>
      <div class="heading">Response</div>
      <div class="subheading">Body</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
        <button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>
      </div>
      <pre class="response-data-element" style="display:none;"></pre>
      <div class="subheading">Status Codes</div>
      <div class="status-codes">
        <div class="form-row status-code sc201"><div class="col-1 code">201</div><div class="col-11 text">Created</div></div>
        <div class="form-row status-code sc401"><div class="col-1 code">401</div><div class="col-11 text">Unauthorized</div></div>
        <div class="form-row status-code sc403"><div class="col-1 code">403</div><div class="col-11 text">Forbidden</div></div>
        <div class="form-row status-code sc404"><div class="col-1 code">404</div><div class="col-11 text">Not Found</div></div>
      </div>
    </div>
  </div>

  <div class="api post">
    <div class="header collapsed" data-toggle="collapse" href="#post-users-sign-out">
      <div class="row align-items-center no-gutters">
        <div class="col-12 col-md-auto method">POST</div>
        <div class="col-12 col-md url">/users/sign_out</div>
        <div class="col-12 col-md-auto name">returnTokens</div>
      </div>
    </div>
    <div class="content collapse" id="post-users-sign-out">
      <div class="form-row">
        <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="col-12 col-sm-auto service">User Service</div>
      </div>
      <div class="heading">Request</div>
      <div class="subheading">Data</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-request-data-element">Hide</button>
        <button type="button" class="btn btn-outline-secondary btn-sm">Reset</button>
      </div>
  <pre class="request-data-element" contenteditable="true">{
    "user": {
      "access_token": "<span class='access-token'></span>"
    }
  }</pre>
      <div class="form-row">
        <div class="col-12">
          <button type="button" class="btn btn-danger btn-sm run">Run</button>
        </div>
      </div>
      <div class="heading">Response</div>
      <div class="subheading">Body</div>
      <div class="btn-group">
        <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
        <button type="button" class="btn btn-outline-secondary btn-sm clear">Clear</button>
      </div>
      <pre class="response-data-element" style="display:none;"></pre>
      <div class="subheading">Status Codes</div>
      <div class="status-codes">
        <div class="form-row status-code sc201"><div class="col-1 code">201</div><div class="col-11 text">Created</div></div>
        <div class="form-row status-code sc401"><div class="col-1 code">401</div><div class="col-11 text">Unauthorized</div></div>
        <div class="form-row status-code sc403"><div class="col-1 code">403</div><div class="col-11 text">Forbidden</div></div>
        <div class="form-row status-code sc404"><div class="col-1 code">404</div><div class="col-11 text">Not Found</div></div>
      </div>
    </div>
  </div>
</div>
