---
title: API Workbench
layout: api-workbench.html
e: block
---

<form class="api-workbench">
  <div class="form-row">
    <div class="col-sm-3">
      <div class="form-row">
        <div class="col-sm-12">
          <label>id</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <input id="api-id-input" type="text" class="form-control form-control-sm">
        </div>
        <div class="form-group col-auto">
          <button id="api-id-btn" type="button" class="btn btn-sm btn-block btn-success">Get</button>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-row">
        <div class="col-sm-12">
          <label>status</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-status-select" class="form-control form-control-sm">
            <option selected value>&nbsp;</option>
            <option value="experimental">Experimental</option>
            <option value="trusted">Trusted</option>
            <option value="needs-improvement">Needs Improvement</option>
            <option value="deprecated">Deprecated</option>
            <option value="removed">Removed</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div class="form-group col-auto">
          <button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
    </div>
    <div class="col-sm-3">
    </div>
  </div>
  <div class="form-row">
    <div class="col-sm-6">
      <div class="form-row">
        <div class="col-sm-12">
          <label>method</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-method-select" class="form-control form-control-sm">
            <option selected value>&nbsp;</option>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select>
        </div>
        <div class="form-group col-auto">
          <button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-row">
        <div class="col-sm-12">
          <label>path</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <input id="api-path-input" type="text" class="form-control form-control-sm">
        </div>
        <div class="form-group col-auto">
          <button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-sm-6">
      <div class="form-row">
        <div class="col-sm-12">
          <label>name</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <input id="api-name-input" type="text" class="form-control form-control-sm">
        </div>
        <div class="form-group col-auto">
          <button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-row">
        <div class="col-sm-12">
          <label>service</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-service-select" class="form-control form-control-sm">
            <option selected value>&nbsp;</option>
            <option value="application">Application</option>
            <option value="datastream">Datastream</option>
            <option value="device">Device</option>
            <option value="factory-proxy">Factory Proxy</option>
            <option value="image">Image</option>
            <option value="log">Log</option>
            <option value="notification">Notification</option>
            <option value="rules">Rules</option>
            <option value="user">User</option>
            <option value="zigbee">Zigbee</option>
          </select>
        </div>
        <div class="form-group col-auto">
          <button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row"><div class="col-12"><label>description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-description-textarea" class="form-control form-control-sm" rows="1"></textarea></div>
    <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>request_description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-request-description-textarea" class="form-control form-control-sm" rows="1"></textarea></div>
    <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>path_parameters</label></div></div>
  <div id="api-path-parameter-divs">
    <div class="form-row api-path-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-path-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-path-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-path-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
  </div>
  <div class="form-row"><div class="col-12"><label>query_parameters</label></div></div>
  <div id="api-query-parameter-divs">
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm parameters"><option selected value>&nbsp;</option></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
  </div>
  <div class="form-row"><div class="col-12"><label>request_data</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-request-data-textarea" class="form-control form-control-sm" rows="3"></textarea></div>
    <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>response_description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-response-description-textarea" class="form-control form-control-sm" rows="1"></textarea></div>
    <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>status_codes</label></div></div>
  <div id="api-status-code-divs">
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm code"></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm code"></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm code"></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm code"></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm code"></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm code"></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary">Save</button></div>
    </div>
  </div>
</form>
