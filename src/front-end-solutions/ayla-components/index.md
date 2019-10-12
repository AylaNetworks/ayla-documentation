---
title: Ayla Components
layout: site.html
a: block
---

<div class="cmpt">
  <h3>Templates</h3>
  <div class="link-btns">
    <span id="create-template-btn" class="link-btn" data-toggle="collapse" data-target="#create-template-form-collapse">Create</span>
    <span id="delete-template-btn" class="link-btn">Delete</span>
    <span class="link-btn" onclick="populateTemplates()">Refresh</span>
    <span id="" class="link-btn" data-toggle="collapse" data-target="#template-details">Details</span>
  </div>
  <div id="create-template-form-collapse" class="collapse" style="margin-bottom: 1.2rem;">
    <form id="create-template-form" class="steps" action="javascript:void(0);">
      <ol>
        <li>
          <div class="label">Name the template.</div>
          <input id="create-template-name" type="text" class="form-control form-control-sm" value="Virtual Device v1.0" required>
        </li>
        <li>
          <div class="label">Write a description.</div>
          <input id="create-template-description" type="text" class="form-control form-control-sm" value="Template for virtual devices." required>
        </li>
        <li>
          <div class="label">Enter an OEM model.</div>
          <input id="create-template-oem-model" type="text" class="form-control form-control-sm" value="virtual-device" required>
        </li>
        <li>
          <div class="label">Enter a template version.</div>
          <input id="create-template-version" type="text" class="form-control form-control-sm" value="virtual-device-v1.0" required>
        </li>
        <li>
          <div class="label">Choose registration method.</div>
          <select id="create-template-registration-method" class="form-control form-control-sm">
            <option value='AP-Mode'>AP Mode</option>
            <option value='Button-Push'>Button Push</option>
            <option value='Display'>Display</option>
            <option value='Dsn' selected>DSN</option>
            <option value='Same-LAN'>Same LAN</option>
            <option value='None' selected>None</option>
          </select>
        </li>
        <li>
          <div class="label">Choose visibility.</div>
          <select id="create-template-visibility" class="form-control form-control-sm">
            <option value='oem'>OEM</option>
            <option value='private'>Private</option>
          </select>
        </li>
        <li>
          <div class="label">Choose template type.</div>
          <select id="create-template-type" class="form-control form-control-sm">
            <option value='sss'>Cluster</option>
            <option value='sss'>Gateway</option>
            <option value='sss'>Node</option>
            <option value='sss'>Sensor</option>
            <option value='wifi' selected>Wi-Fi</option>
          </select>
        </li>
        <li>
          <div class="label">Enter properties (one per row) in CSV format. Include a header row.</div>
          <textarea id="template-properties" class="form-control" rows="5" value="test">
base_type,direction,name,scope
boolean,input,Green_LED,user
boolean,input,Red_LED,user
boolean,output,Blue_button,user
integer,input,input,user
integer,output,output,user
string,input,cmd,user
string,output,log,user
decimal,input,decimal_in,user
decimal,output,decimal_out,user
string,output,version,user
          </textarea>
        </li>
        <li>
          <div class="label">Create the template, reset the fields, or close the form.</div>
          <button type="submit" class="btn btn-outline-secondary btn-sm">Create</button>
          <button type="reset" class="btn btn-outline-secondary btn-sm">Reset</button>
          <button type="reset" class="btn btn-outline-secondary btn-sm" onclick="$('#create-template-form-collapse').collapse('hide')">Close</button>
        </li>
      </ol>
    </form>
  </div>
  <div class="row">
    <div class="col-auto">
      <select id="select-template" class="form-control form-control-sm ayla-data populate-at-init" style="min-width:200px;"></select>
    </div>
  </div>
  <pre id="template-details" class="collapse"></pre>
</div>

<div class="cmpt">
  <h3>Access Rules</h3>
  <div class="link-btns">
    <span id="create-access-rule-btn" class="link-btn" data-toggle="collapse" data-target="#create-access-rule-form-collapse">Create</span>
    <span id="delete-access-rules-btn" class="link-btn">Delete</span>
    <span class="link-btn" onclick="populateAccessRules()">Refresh</span>
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
  <table id="aylax-access-rules" class="ayla-data populate-at-init">
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

<div class="cmpt">
  <h3>Subscriptions</h3>
  <div class="link-btns">
    <span id="create-subscription-btn" class="link-btn" data-toggle="collapse" data-target="#create-subscription-form-collapse">Create</span>
    <span id="deploy-subscriptions-btn" class="link-btn">Deploy</span>
    <span id="promote-subscription-btn" class="link-btn">Promote</span>
    <span id="delete-subscriptions-btn" class="link-btn">Delete</span>
    <span class="link-btn" onclick="populateSubscriptions()">Refresh</span>
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
  <table id="aylax-subscriptions" class="ayla-data populate-at-init">
    <thead>
      <tr>
        <th><input type="checkbox" value="0"></th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

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
  <table id="aylax-event-streams" class="ayla-data">
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

<div id="dt-group" class="cmpt" style="margin-bottom:1rem;">
  <h3 id="device-tool">Device Tool</h3>
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
        <pre id="dt-device-details" class="collapse" data-parent="#dt-group"></pre>
      </div>
    </div>
    <div class="row">
      <div class="col-4 d-none d-sm-block"></div>
      <div class="col-12 col-sm-8">
        <pre id="dt-property-details" class="collapse" data-parent="#dt-group"></pre>
      </div>
    </div>
  </div>
</div>

<div class="cmpt">
  <h3>Events</h3>
  <div class="link-btns">
    <span id="delete-events-btn" class="link-btn">Delete</span>
  </div>
  <table id="aylax-events" class="ayla-data">
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
