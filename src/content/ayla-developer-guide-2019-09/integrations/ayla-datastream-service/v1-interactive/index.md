---
title: Ayla Datastream Service (Interactive)
layout: ayla-developer-guide-2019-09.html
b: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Datastream Service</a>
    <li><a href="#interactive-example">Interactive example</a>
    <ul>
      <li><a href="#prepare-a-device">Prepare a device</a>
      <li><a href="#create-access-rules">Create access rules</a>
      <li><a href="#create-subscriptions">Create subscriptions</a>
      <li><a href="#create-event-streams">Create event streams</a>
      <li><a href="#monitor-events">Monitor events</a>
    </ul>
    </li>
  </ul>
</aside>

Use the [standard version](../) of this page.

# Interactive example

## Prepare a device

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Create access rules

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="cmpt">
  <h3>Access Rules</h3>
  <div class="link-btns">
    <span id="create-access-rule-btn" class="link-btn" data-toggle="collapse" data-target="#create-access-rule-form-collapse">Create</span>
    <span id="delete-access-rules-btn" class="link-btn">Delete</span>
    <span class="link-btn" onclick="getAccessRules()">Refresh</span>
  </div>
  <div id="create-access-rule-form-collapse" class="collapse" style="margin-bottom: 1.2rem;">
    <form id="create-access-rule-form" class="steps" action="javascript:void(0);">
      <ol>
        <li>
          <div class="label">Choose a role.</div>
          <select id="create-access-rule-role" class="form-control form-control-sm">
            <option value='OEM::Admin'>OEM::Admin</option>
            <option value='OEM::Staff'>OEM::Staff</option>
            <option value='OEM::SupportEngineer'>OEM::SupportEngineer</option>
            <option value='OEM::SupportManager'>OEM::SupportManager</option>
          </select>
        </li>
        <li>
          <div class="label">Choose a subscription type.</div>
          <select id="create-access-rule-subscription-type" class="form-control form-control-sm">
            <option value='connectivity'>connectivity</option>
            <option value='datapoint' selected>datapoint</option>
            <option value='datapointack'>datapointack</option>
            <option value='location'>location</option>
            <option value='registration'>registration</option>
          </select>
        </li>
        <li>
          <div class="label">Choose a client type.</div>
          <select id="create-access-rule-client-type" class="form-control form-control-sm">
            <option value='cloud'>cloud</option> 
            <option value='user_opt_in'>user_opt_in</option> 
          </select>
        </li>
        <li>
          <div class="label">Enter an OEM model.</div>
          <input id="create-access-rule-oem-model" type="text" class="form-control form-control-sm" required>
        </li>
        <li>
          <div class="label">Enter a property name, or enter &#42; to target all properties.</div>
          <input id="create-access-rule-property-name" type="text" class="form-control form-control-sm" placeholder="*">
        </li>
        <li>
          <div class="label">Create the access rule, reset the fields, or close the form.</div>
          <button type="submit" class="btn btn-outline-secondary btn-sm">Create</button>
          <button type="reset" class="btn btn-outline-secondary btn-sm">Reset</button>
          <button type="reset" class="btn btn-outline-secondary btn-sm" onclick="$('#create-access-rule-form-collapse').collapse('hide')">Close</button>
        </li>
      </ol>
    </form>
  </div>
  <table id="aylax-access-rules" class="populate-at-init">
    <thead>
      <tr>
        <th><input type="checkbox"></th>
        <th>OEM Model</th>
        <th>Property</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

## Create subscriptions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="cmpt">
  <h3>Subscriptions</h3>
  <div class="link-btns">
    <span id="create-subscription-btn" class="link-btn" data-toggle="collapse" data-target="#create-subscription-form-collapse">Create</span>
    <span id="deploy-subscriptions-btn" class="link-btn">Deploy</span>
    <span id="promote-subscription-btn" class="link-btn">Promote</span>
    <span id="delete-subscriptions-btn" class="link-btn">Delete</span>
    <span class="link-btn" onclick="getSubscriptions()">Refresh</span>
  </div>
  <div id="create-subscription-form-collapse" class="collapse" style="margin-bottom: 1.2rem;">
    <form id="create-subscription-form" class="steps" action="javascript:void(0);">
      <ol>
        <li>
          <div class="label">Name the subscription. Spaces and special characters are acceptable.</div>
          <input id="create-subscription-name" type="text" class="form-control form-control-sm" placeholder="New Subscription">
        </li>
        <li>
          <div class="label">Write an optional description.</div>
          <input id="create-subscription-description" type="text" class="form-control form-control-sm" placeholder="This is a description.">
        </li>
        <li>
          <div class="label">Choose a subscription type.</div>
          <select id="create-subscription-subscription-type" class="form-control form-control-sm">
            <option value='connectivity'>connectivity</option>
            <option value='datapoint' selected>datapoint</option>
            <option value='datapointack'>datapointack</option>
            <option value='location'>location</option>
            <option value='registration'>registration</option>
          </select>
        </li>
        <li>
          <div class="label">Choose a client type.</div>
          <select id="create-subscription-client-type" class="form-control form-control-sm">
            <option value='cloud'>cloud</option> 
            <option value='user_opt_in'>user_opt_in</option> 
          </select>
        </li>
        <li>
          <div class="label">Enter a DSN. Or, enter &#42; to target all DSNs, and specify an OEM model in the next step.</div>
          <input id="create-subscription-dsn" type="text" class="form-control form-control-sm" placeholder="*">
        </li>
        <li>
          <div class="label">Enter an OEM model. Or, enter &#42; to target all models, and specify a DSN in the previous step.</div>
          <input id="create-subscription-oem-model" type="text" class="form-control form-control-sm" required>
        </li>
        <li>
          <div class="label">Enter a property name, or enter &#42; to target all properties.</div>
          <input id="create-subscription-property-name" type="text" class="form-control form-control-sm" placeholder="*">
        </li>
        <li>
          <div class="label">Create the subscription, reset the fields, or close the form.</div>
          <button type="submit" class="btn btn-outline-secondary btn-sm">Create</button>
          <button type="reset" class="btn btn-outline-secondary btn-sm">Reset</button>
          <button type="reset" class="btn btn-outline-secondary btn-sm" onclick="$('#create-subscription-form-collapse').collapse('hide')">Close</button>
        </li>
      </ol>
    </form>
  </div>
  <table id="aylax-subscriptions" class="populate-at-init">
    <thead>
      <tr>
        <th><input type="checkbox" value="0"></th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

## Create event streams

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="cmpt">
  <h3>Event Streams</h3>
  <div class="link-btns">
    <span id="create-event-stream-btn" class="link-btn" data-toggle="collapse" data-target="#create-event-stream-form-collapse">Create</span>
    <span id="delete-event-streams-btn" class="link-btn">Delete</span>
  </div>
  <div id="create-event-stream-form-collapse" class="collapse" style="margin-bottom: 1.2rem;">
    <form id="create-event-stream-form" class="steps" action="javascript:void(0);">
      <ol>
        <li>
          <div class="label">Name the event stream. Spaces and special characters are acceptable.</div>
          <input id="event-stream-name" type="text" class="form-control form-control-sm" placeholder="New Event Stream">
        </li>
        <li>
          <div class="label">Enter a DSS stream key.</div>
          <input id="stream-key" type="text" class="form-control form-control-sm" required>
        </li>
        <li>
          <div class="label">Enter a beginning sequence number.</div>
          <input id="create-event-stream-beginning-seqid" type="text" class="form-control form-control-sm">
        </li>
        <li>
          <div class="label">Enter an ending sequence number.</div>
          <input id="create-event-stream-ending-seqid" type="text" class="form-control form-control-sm">
        </li>
        <li>
          <div class="label">Create the event stream, reset the fields, or close the form.</div>
          <button type="submit" class="btn btn-outline-secondary btn-sm">Create</button>
          <button type="reset" class="btn btn-outline-secondary btn-sm">Reset</button>
          <button type="reset" class="btn btn-outline-secondary btn-sm" onclick="$('#create-event-stream-form-collapse').collapse('hide')">Close</button>
        </li>
      </ol>
    </form>
  </div>
  <table id="aylax-event-streams" class="populatable">
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

## Monitor events

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="cmpt">
  <h3>Value Update Tool</h3>
  <div class="row">
    <div class="col-sm-4">
      <label>Devices</label>
      <select id="aylax-devices" style="width:200px;" class="form-control form-control-sm populate-at-init"></select>
    </div>
    <div class="col-sm-4">
      <label>Properties</label>
      <input type="text" class="form-control form-control-sm">
    </div>
    <div class="col-sm-4">
      <label>Value</label>
      <input type="text" class="form-control form-control-sm">
    </div>
  </div>
</div>

<div class="cmpt">
  <h3>Events</h3>
  <div class="link-btns">
    <span id="delete-events-btn" class="link-btn">Delete</span>
  </div>
  <table id="aylax-events" class="populatable">
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

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>