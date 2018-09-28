---
title: DSS Client
layout: page-dssclientdb.html
---

<nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist">
<a class="nav-item nav-link active" data-toggle="tab" href="#events-page" role="tab">Events</a>
<a class="nav-item nav-link" data-toggle="tab" href="#devices-page" role="tab">Devices</a>
<a class="nav-item nav-link" data-toggle="tab" href="#analytics-page" role="tab">Analytics</a>
<a class="nav-item nav-link" data-toggle="tab" href="#about-page" role="tab">About</a>
</div>
</nav>

<div class="tab-content">

<!-- BEGIN EVENTS PAGE -->
<div class="tab-pane fade show active" id="events-page" role="tabpanel">
</div>
<!-- END EVENTS PAGE -->

<!-- BEGIN DEVICES PAGE -->
<div class="tab-pane fade" id="devices-page" role="tabpanel">
  <div class="row">
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-12">
          <label style="font-size: 120% !important;color:tomato;">Devices</label>
          <select id="select-devices" class="form-control form-control-sm"></select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Connection Status</label>
          <input type="text" class="form-control form-control-sm" id="device-connection-status" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Software Version</label>
          <input type="text" class="form-control form-control-sm" id="device-software-version" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>DSN</label>
          <input type="text" class="form-control form-control-sm" id="device-dsn" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Device Type</label>
          <input type="text" class="form-control form-control-sm" id="device-type" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Device ID</label>
          <input type="text" class="form-control form-control-sm" id="device-id" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Product Name</label>
          <input type="text" class="form-control form-control-sm" id="device-product-name" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Model</label>
          <input type="text" class="form-control form-control-sm" id="device-model" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>OEM Model</label>
          <input type="text" class="form-control form-control-sm" id="device-oem-model" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Template ID</label>
          <input type="text" class="form-control form-control-sm" id="device-template-id" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>MAC Address</label>
          <input type="text" class="form-control form-control-sm" id="device-mac-address" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>LAN IP</label>
          <input type="text" class="form-control form-control-sm" id="device-lan-ip" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>LAN Enabled</label>
          <input type="text" class="form-control form-control-sm" id="device-lan-enabled" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Has Properties</label>
          <input type="text" class="form-control form-control-sm" id="device-has-properties" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Product Class</label>
          <input type="text" class="form-control form-control-sm" id="device-product-class" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Connection Time</label>
          <input type="text" class="form-control form-control-sm" id="device-connection-time" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Latitude</label>
          <input type="text" class="form-control form-control-sm" id="device-latitude" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Longitude</label>
          <input type="text" class="form-control form-control-sm" id="device-longitude" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Locality</label>
          <input type="text" class="form-control form-control-sm" id="device-locality" disabled="true">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-12">
          <label style="font-size: 120% !important;color:tomato;">Properties</label>
          <select id="select-properties" class="form-control form-control-sm"></select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Value</label>&nbsp;&nbsp;<span id="set-property-value"><a href="">(Click to set new value)</a></span>
          <div id="value-wrapper"><input type="text" class="form-control form-control-sm" id="property-value" disabled="true"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Value Type</label>
          <input type="text" class="form-control form-control-sm" id="property-value-type" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Direction</label>
          <input type="text" class="form-control form-control-sm" id="property-direction" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Property ID</label>
          <input type="text" class="form-control form-control-sm" id="property-id" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Device ID</label>
          <input type="text" class="form-control form-control-sm" id="property-device-id" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Name</label>
          <input type="text" class="form-control form-control-sm" id="property-db-name" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Display Name</label>
          <input type="text" class="form-control form-control-sm" id="property-display-name" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Read Only</label>
          <input type="text" class="form-control form-control-sm" id="property-read-only" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Scope</label>
          <input type="text" class="form-control form-control-sm" id="property-scope" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Last Update Time</label>
          <input type="text" class="form-control form-control-sm" id="property-last-update-time" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Product Name</label>
          <input type="text" class="form-control form-control-sm" id="property-product-name" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Track Only Changes</label>
          <input type="text" class="form-control form-control-sm" id="property-track-only-changes" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Host Software Version</label>
          <input type="text" class="form-control form-control-sm" id="property-host-software-version" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Time Series</label>
          <input type="text" class="form-control form-control-sm" id="property-time-series" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Derived</label>
          <input type="text" class="form-control form-control-sm" id="property-derived" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Retention Days</label>
          <input type="text" class="form-control form-control-sm" id="property-retention-days" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label>Ack Enabled</label>
          <input type="text" class="form-control form-control-sm" id="property-ack-enabled" disabled="true">
        </div>
      </div>
    </div>
  </div>
</div>
<!-- END DEVICES PAGE -->

<!-- BEGIN ANALYTICS PAGE -->
<div class="tab-pane fade" id="analytics-page" role="tabpanel">
</div>
<!-- END ANALYTICS PAGE -->

<!-- BEGIN ABOUT PAGE -->
<div class="tab-pane fade" id="about-page" role="tabpanel">
</div>
<!-- END ABOUT PAGE -->

</div>
