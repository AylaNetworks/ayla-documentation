---
title: Test
layout: test.html
e: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Test</a></li>
  </ul>
</aside>

<div class="form-row">
  <div class="form-group col-auto">
    <select class="form-control form-control-sm ayla-regions" style="min-width: 200px;">
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
    <select class="form-control form-control-sm ayla-accounts" style="min-width: 200px;">
    </select>
  </div>
  <div class="form-group col-auto">
    <button type="button" class="btn btn-secondary btn-sm" data-toggle="collapse" data-target="#ayla-account-details" aria-expanded="false">Details</button>
  </div>
  <div class="form-group col-auto">
    <button id="ayla-add-account-btn" type="button" class="btn btn-secondary btn-sm">Add</button>
  </div>
  <div class="form-group col-auto">
    <button id="ayla-remove-account-btn" type="button" class="btn btn-secondary btn-sm">Remove</button>
  </div>
</div>
<div id="ayla-region-urls" class="collapse" style="padding:9px 12px;background:#d8f3ea;margin-bottom:18px;border-radius:4px;">
  <div class="form-row">
    <div class="col-12 col-lg-6 mb-2">
      <label>Application Service</label>
      <input id="application-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
    <div class="col-12 col-lg-6 mb-2">
      <label>Log Service</label>
      <input id="log-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
  </div>
  <div class="form-row">
    <div class="col-12 col-lg-6 mb-2">
      <label>Datastream Service</label>
      <input id="datastream-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
    <div class="col-12 col-lg-6 mb-2">
      <label>Notification Service</label>
      <input id="notification-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
  </div>
  <div class="form-row">
    <div class="col-12 col-lg-6 mb-2">
      <label>Device Service</label>
      <input id="device-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
    <div class="col-12 col-lg-6 mb-2">
      <label>Rules Service</label>
      <input id="rules-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
  </div>
  <div class="form-row">
    <div class="col-12 col-lg-6 mb-2">
      <label>Factory Proxy Service</label>
      <input id="factory-proxy-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
    <div class="col-12 col-lg-6 mb-2">
      <label>User Service</label>
      <input id="user-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
  </div>
  <div class="form-row">
    <div class="col-12 col-lg-6 mb-2">
      <label>Image Service</label>
      <input id="image-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
    <div class="col-12 col-lg-6 mb-2">
      <label>Zigbee Service</label>
      <input id="zigbee-service-url" type="text" class="form-control form-control-sm" disabled>
    </div>
  </div>
</div>
<div id="ayla-account-details" class="collapse" style="padding:9px 12px 0 12px;background:#f9ebd2;margin-bottom:18px;border-radius:4px;">
  <div class="form-row">
    <div class="form-group col-12 col-lg-3">
      <label>email</label>
      <input id="ayla-account-email" type="text" class="form-control form-control-sm">
    </div>
    <div class="form-group col-12 col-lg-3">
      <label>password</label>
      <input id="ayla-account-password" type="password" class="form-control form-control-sm" autocomplete='new-password'>
    </div>
    <div class="form-group col-12 col-lg-3">
      <label>app_id</label>
      <input id="ayla-account-app-id" type="text" class="form-control form-control-sm">
    </div>
    <div class="form-group col-12 col-lg-3">
      <label>app_secret</label>
      <input id="ayla-account-app-secret" type="text" class="form-control form-control-sm">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-12 col-lg-3">
      <button id="ayla-account-tokens-btn" type="button" class="btn btn-sm btn-block">&nbsp;</button>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-12 col-lg-3">
      <label>access_token</label>
      <input id="ayla-account-access-token" type="text" class="form-control form-control-sm" disabled>
    </div>
    <div class="form-group col-12 col-lg-3">
      <label>refresh_token</label>
      <input id="ayla-account-refresh-token" type="text" class="form-control form-control-sm" disabled>
    </div>
    <div class="form-group col-12 col-lg-3">
      <label>uuid</label>
      <input id="ayla-account-uuid" type="text" class="form-control form-control-sm" disabled>
    </div>
    <div class="form-group col-12 col-lg-3">
      <label>user_id</label>
      <input id="ayla-account-user-id" type="text" class="form-control form-control-sm" disabled>
    </div>
  </div>
</div>

<div class="form-row">
  <div class="form-group col-auto">
    <select class="form-control form-control-sm devices" style="min-width: 200px;"></select>
  </div>
  <div class="form-group col-auto">
    <select class="form-control form-control-sm properties" style="min-width: 200px;"></select>
  </div>
</div>

<div class="api get">
  <div class="header collapsed" data-toggle="collapse" href="#get-apiv1-devices">
    <div class="row align-items-center no-gutters">
      <div class="col-12 col-md-auto method">GET</div>
      <div class="col-12 col-md url">/apiv1/devices</div>
      <div class="col-12 col-md-auto name">getDevices</div>
    </div>
  </div>
  <div class="content collapse" id="get-apiv1-devices">
    <div class="form-row">
      <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <div class="col-12 col-sm-auto service">Device Service</div>
    </div>
    <div class="form-row">
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
  <div class="header collapsed" data-toggle="collapse" href="#get-users-get-user-profile">
    <div class="row align-items-center no-gutters">
      <div class="col-12 col-md-auto method">GET</div>
      <div class="col-12 col-md url">/users/get_user_profile</div>
      <div class="col-12 col-md-auto name">getUserProfile</div>
    </div>
  </div>
  <div class="content collapse" id="get-users-get-user-profile">
    <div class="form-row">
      <div class="col-12 col-sm description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <div class="col-12 col-sm-auto service">User Service</div>
    </div>
    <div class="form-row">
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
    "email": "string",
    "password": "string",
    "application": {
      "app_id": "string",
      "app_secret": "string"
    }
  }
}</pre>
    <div class="form-row">
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
    "access_token": ""
  }
}</pre>
    <div class="form-row">
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
      <div class="col-3">
        <button type="button" class="btn btn-warning btn-sm run">Run</button>
      </div>
    </div>
    <div class="heading">Response</div>
    <div class="subheading">Body</div>
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary btn-sm toggle-response-data-element">Show</button>
      <button type="button" class="btn btn-outline-secondary btn-sm api-clear">Clear</button>
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
