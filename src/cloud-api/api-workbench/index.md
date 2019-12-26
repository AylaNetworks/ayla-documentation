---
title: API Workbench
layout: api-workbench.html
e: block
---

<div id="msg-box" style="display:none;">
  <div class="row">
    <div class="col-auto status" style="display:none;"><pre></pre></div>
    <div class="col msg"><pre></pre></div>
    <div class="col-auto"><button type="button" class="btn btn-sm btn-outline-light">Close</button></div>
  </div>
</div>
<form class="api-workbench">
  <div class="form-row">
    <div class="col-sm-2">
      <div class="form-row">
        <div class="form-group col">
          <input id="api-id-input" type="text" class="form-control form-control-sm" placeholder="API ID">
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="form-row">
        <div class="form-group col">
          <div class="btn-group special" role="group">
            <button id="api-get-btn" type="button" class="btn btn-sm btn-outline-secondary save">Get</button>
            <button id="api-clear-btn" type="button" class="btn btn-sm btn-outline-secondary">Clear</button>
            <button id="api-create-btn" type="button" class="btn btn-sm btn-outline-secondary save">Create</button>
            <!--<button id="api-delete-btn" type="button" class="btn btn-sm btn-outline-secondary save" disabled>Delete</button>-->
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-5">
    </div>
    <div class="col-sm-2">
      <div class="form-row">
        <div class="form-group col-12">
          <input id="adms-access-token" type="password" class="form-control form-control-sm" autocomplete='new-password'>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-sm-3">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Method&nbsp;&#42;</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-method-select" class="form-control form-control-sm"></select>
        </div>
        <div class="form-group col-auto edit-mode">
          <button id="api-method-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button>
        </div>
      </div>
    </div>
    <div class="col-sm-7">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Path&nbsp;&#42;</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <input id="api-path-input" type="text" class="form-control form-control-sm">
        </div>
        <div class="form-group col-auto edit-mode">
          <button id="api-path-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button>
        </div>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Published</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-published-select" class="form-control form-control-sm">
            <option value=0>No</option>
            <option value=1>Yes</option>
          </select>
        </div>
        <div class="form-group col-auto edit-mode">
          <button id="api-published-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-sm-4">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Name&nbsp;&#42;</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <input id="api-name-input" type="text" class="form-control form-control-sm">
        </div>
        <div class="form-group col-auto edit-mode">
          <button id="api-name-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Service&nbsp;&#42;</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-service-select" class="form-control form-control-sm"></select>
        </div>
        <div class="form-group col-auto edit-mode">
          <button id="api-service-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="form-row">
        <div class="col-sm-12">
          <label>Status&nbsp;&#42;</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <select id="api-status-select" class="form-control form-control-sm"></select>
        </div>
        <div class="form-group col-auto edit-mode">
          <button id="api-status-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row"><div class="col-12"><label>Description&nbsp;&#42;</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-description-textarea" class="form-control form-control-sm" rows="2"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-description-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Request Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-request-description-textarea" class="form-control form-control-sm" rows="2"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-request-description-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Path Parameters Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-path-parameters-description-textarea" class="form-control form-control-sm" rows="2"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-path-parameters-description-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Path Parameters</label></div></div>
  <div id="api-path-parameter-ctl-row" class="form-row">
    <div class="form-group col-sm-2"><select class="form-control form-control-sm"></select></div>
    <div class="form-group col-sm-1"><input type="text" class="form-control form-control-sm pos"></div>
    <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
    <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
    <div class="col-sm-3">
      <div class="form-row">
        <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary add">+</button></div>
        <div class="form-group col">&nbsp;</div>
        <div class="form-group col-auto edit-mode"><button type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
      </div>
    </div>
  </div>
  <div id="api-path-parameter-rows"></div>
  <div class="form-row"><div class="col-12"><label>Query Parameters Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-query-parameters-description-textarea" class="form-control form-control-sm" rows="2"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-query-parameters-description-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Query Parameters</label></div></div>
  <div id="api-query-parameter-ctl-row" class="form-row">
    <div class="form-group col-sm-2"><select class="form-control form-control-sm"></select></div>
    <div class="form-group col-sm-1"><input type="text" class="form-control form-control-sm pos"></div>
    <div class="form-group col-sm-2"><input type="text" class="form-control form-control-sm type" disabled></div>
    <div class="form-group col-sm-4"><input type="text" class="form-control form-control-sm description"></div>
    <div class="col-sm-3">
      <div class="form-row">
        <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary add">+</button></div>
        <div class="form-group col">&nbsp;</div>
        <div class="form-group col-auto edit-mode"><button type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
      </div>
    </div>
  </div>
  <div id="api-query-parameter-rows"></div>
  <div class="form-row"><div class="col-12"><label>Request Data Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-request-data-description-textarea" class="form-control form-control-sm" rows="2"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-request-data-description-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Request Data</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-request-data-textarea" class="form-control form-control-sm" rows="3"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-request-data-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Response Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-response-description-textarea" class="form-control form-control-sm" rows="2"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-response-description-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Response Data Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-response-data-description-textarea" class="form-control form-control-sm" rows="2"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-response-data-description-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Status Codes Description</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-status-codes-description-textarea" class="form-control form-control-sm" rows="2"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-status-codes-description-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
  <div class="form-row"><div class="col-12"><label>Status Codes</label></div></div>
  <div id="api-status-code-ctl-row" class="form-row">
    <div class="form-group col-sm-2"><select class="form-control form-control-sm"></select></div>
    <div class="form-group col-sm-3"><input type="text" class="form-control form-control-sm text"></div>
    <div class="col-sm-7">
      <div class="form-row">
        <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary add">+</button></div>
        <div class="form-group col">&nbsp;</div>
        <div class="form-group col-auto edit-mode"><button type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
      </div>
    </div>
  </div>
  <div id="api-status-code-rows"></div>
  <div class="form-row"><div class="col-12"><label>Tags</label></div></div>
  <div id="api-tag-ctl-row" class="form-row">
    <div class="form-group col-sm-3"><select class="form-control form-control-sm"></select></div>
    <div class="col-sm-9">
      <div class="form-row">
        <div class="form-group col-auto"><button type="button" class="btn btn-sm btn-block btn-outline-secondary add">+</button></div>
        <div class="form-group col">&nbsp;</div>
        <div class="form-group col-auto edit-mode"><button type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
      </div>
    </div>
  </div>
  <div id="api-tag-rows"></div>
  <div class="form-row"><div class="col-12"><label>Notes</label></div></div>
  <div class="form-row">
    <div class="form-group col"><textarea id="api-notes-textarea" class="form-control form-control-sm" rows="20"></textarea></div>
    <div class="form-group col-auto edit-mode"><button id="api-notes-btn" type="button" class="btn btn-sm btn-block btn-outline-secondary save">&#x2714;</button></div>
  </div>
</form>