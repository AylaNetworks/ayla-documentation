---
title: API Workbench
layout: api-workbench.html
e: block
---

<form class="api-workbench">
  <div class="form-row">
    <div class="col-sm-2">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Mode</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-mode-select" class="form-control form-control-sm">
            <option value="inspect">Inspect</option>
            <option value="create">Create</option>
            <option value="edit">Edit</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="form-row">
        <div class="col-sm-12">
          <label>ID</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <input id="api-id-input" type="text" class="form-control form-control-sm" value="178">
        </div>
      </div>
    </div>
    <div class="col-sm-5">
      <div class="form-row">
        <div class="col-sm-12">
          <label>&nbsp;</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-auto">
          <div class="btn-group" role="group">
            <button id="api-get-btn" type="button" class="btn btn-sm btn-info" style="width:60px;">Get</button>
            <button id="api-clear-btn" type="button" class="btn btn-sm btn-info" style="width:60px;">Clear</button>
            <button id="api-save-btn" type="button" class="btn btn-sm btn-info" style="width:60px;" disabled>Save</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 access-token-div">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Access Token</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-12">
          <input id="aca-access-token" type="password" class="form-control form-control-sm" autocomplete='new-password'>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-sm-4">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Method</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-method-select" class="form-control form-control-sm"></select>
        </div>
        <div class="form-group col-auto save-div">
          <button id="api-method-btn" type="button" class="btn btn-sm btn-block btn-warning">Save</button>
        </div>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Path</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <input id="api-path-input" type="text" class="form-control form-control-sm">
        </div>
        <div class="form-group col-auto save-div">
          <button id="api-path-btn" type="button" class="btn btn-sm btn-block btn-warning">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-sm-4">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Name</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <input id="api-name-input" type="text" class="form-control form-control-sm">
        </div>
        <div class="form-group col-auto save-div">
          <button id="api-name-btn" type="button" class="btn btn-sm btn-block btn-warning">Save</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Service</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-service-select" class="form-control form-control-sm"></select>
        </div>
        <div class="form-group col-auto save-div">
          <button id="api-service-btn" type="button" class="btn btn-sm btn-block btn-warning">Save</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Status</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-status-select" class="form-control form-control-sm"></select>
        </div>
        <div class="form-group col-auto save-div">
          <button id="api-status-btn" type="button" class="btn btn-sm btn-block btn-warning">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row"><div class="col-12"><label>Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-description-textarea" class="form-control form-control-sm" rows="1"></textarea></div>
    <div class="form-group col-auto save-div"><button id="api-description-btn" type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Request Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-request-description-textarea" class="form-control form-control-sm" rows="1"></textarea></div>
    <div class="form-group col-auto save-div"><button id="api-request-description-btn" type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Path Parameters</label></div></div>
  <div id="api-path-parameter-divs">
    <div class="form-row api-path-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm path-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-path-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm path-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-path-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm path-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-path-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm path-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
  </div>
  <div class="form-row"><div class="col-12"><label>Query Parameters</label></div></div>
  <div id="api-query-parameter-divs">
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm query-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm query-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm query-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm query-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm query-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-query-parameter-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm query-parameters"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
      <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
  </div>
  <div class="form-row"><div class="col-12"><label>Request Data</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-request-data-textarea" class="form-control form-control-sm" rows="3"></textarea></div>
    <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Response Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-response-description-textarea" class="form-control form-control-sm" rows="1"></textarea></div>
    <div class="form-group col-auto save-div"><button id="api-response-description-btn" type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Status Codes</label></div></div>
  <div id="api-status-code-divs">
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm status-codes"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm status-codes"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm status-codes"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm status-codes"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm status-codes"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
    <div class="form-row api-status-code-div">
      <div class="form-group col-sm-2"><select class="form-control form-control-sm status-codes"></select></div>
      <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm text"></div>
      <div class="form-group col-auto save-div"><button type="button" class="btn btn-sm btn-block btn-warning">Save</button></div>
    </div>
  </div>
</form>
