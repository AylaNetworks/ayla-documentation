---
title: DSS Client (with database)
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
          <label>Devices</label>&nbsp;-&nbsp;<a class="label-note" data-toggle="collapse" href="#device-details-pre">Details</a>
          <select id="select-devices" class="form-control form-control-sm"></select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="collapse" id="device-details-pre" style="margin-top: 12px;">
            <pre id="device-details" style="height:300px;"></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-12">
          <label>Properties</label>&nbsp;-&nbsp;<a class="label-note" data-toggle="collapse" href="#property-details-pre">Details</a>
          <select id="select-properties" class="form-control form-control-sm"></select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="collapse" id="property-details-pre" style="margin-top: 12px;">
            <pre id="property-details" style="height:300px;"></pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label>Value Type</label>
          <input type="text" class="form-control form-control-sm" id="property-value-type" disabled="true">
        </div>
        <div class="col-md-6">
          <label>Direction</label>
          <input type="text" class="form-control form-control-sm" id="property-direction" disabled="true">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label>Value</label>
          <input type="text" class="form-control form-control-sm" id="property-value" placeholder="null">
        </div>
        <div class="col-md-6">
          <label>&nbsp;</label>
          <button type="button" class="btn btn-primary btn-sm btn-block" id="get-set-value">Original</button>
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
