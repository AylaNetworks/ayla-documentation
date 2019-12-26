/*------------------------------------------------------
Get
------------------------------------------------------*/

$(function () {
  $('#api-get-btn').click(function (event) {
    let btnElement = this
    let apiId = $('#api-id-input').val()
    if (apiId) {
      DOCS.getApi(apiId, 
        function (response) {
          //$('#api-create-btn').prop('disabled', true)
          //$('#api-delete-btn').prop('disabled', false)
          reset()

          let api = response.data
          $('form.api-workbench').data('id', api.id)

          $('#api-description-textarea').val(api.description)
          $('#api-request-description-textarea').val(api.requestDescription)
          $('#api-path-parameters-description-textarea').val(api.pathParametersDescription)
          $('#api-query-parameters-description-textarea').val(api.queryParametersDescription)
          $('#api-request-data-description-textarea').val(api.requestDataDescription)
          $('#api-response-data-description-textarea').val(api.responseDataDescription)
          $('#api-response-description-textarea').val(api.responseDescription)
          $('#api-status-codes-description-textarea').val(api.statusCodesDescription)

          $('#api-method-select').val(api.method.id)
          $('#api-path-input').val(api.path)
          $('#api-name-input').val(api.name)
          $('#api-service-select').val(api.service.id)
          $('#api-status-select').val(api.status.id)
          $('#api-notes-textarea').val(api.notes)

          $('#api-published-select').val(api.published)

          let requestData = api.requestData
          if(requestData == null) {requestData = ''}
          else if(requestData.length) {requestData = JSON.stringify(JSON.parse(requestData), null, 2)}
          $('#api-request-data-textarea').val(requestData)

          for (let i = 0; i < api.pathParameters.length; i++) {
            appendPathParameter(
              api.pathParameters[i].id,
              api.pathParameters[i].name,
              api.pathParameters[i].type,
              api.pathParameters[i].baseText,
              api.pathParameters[i].customText,
              i,
            )
          }

          for (let i = 0; i < api.queryParameters.length; i++) {
            appendQueryParameter(
              api.queryParameters[i].id,
              api.queryParameters[i].name,
              api.queryParameters[i].type,
              api.queryParameters[i].baseText,
              api.queryParameters[i].customText,
              i,
            )
          }

          for (let i = 0; i < api.statusCodes.length; i++) {
            appendStatusCode(api.statusCodes[i].code, api.statusCodes[i].baseText, api.statusCodes[i].customText)
          }

          for (let i = 0; i < api.tags.length; i++) {
            appendTag(api.tags[i].id, api.tags[i].name)
          }

          $('form.api-workbench div.edit-mode').show()
        }, 
        function(error) {
          wbErrorCb(btnElement, error)
        }
      )
    } else {
      displayMsg('The appId field is empty.')
    }
  })
})

/*------------------------------------------------------
Clear
------------------------------------------------------*/

$(function () {
  $('#api-clear-btn').click(function (event) {
    //$('#api-create-btn').prop('disabled', false)
    //$('#api-delete-btn').prop('disabled', true)
    reset()
    $('#api-id-input').val('')
    $('form.api-workbench div.edit-mode').hide()
  })
})

/*------------------------------------------------------
Create
------------------------------------------------------*/

$(function () {
  $('#api-create-btn').click(function (event) {

    let method = {}
    method.id = $('#api-method-select option:selected').val()
    if(method.id.length) {method.name = $('#api-method-select option:selected').text()}
    else {method.name = ''}

    let pathParameters = []
    let ppRows = $('#api-path-parameter-rows div.api-path-parameter-row')
    for(let i=0; i<ppRows.length; i++) {
      let pp = {}
      pp.id = $(ppRows.eq(i)).data('id')
      pp.name = $(ppRows.eq(i)).find('input.name').val()
      pp.type = $(ppRows.eq(i)).find('input.type').val()
      pp.baseText = $(ppRows.eq(i)).find('input.description').attr('placeholder')
      pp.customText = $(ppRows.eq(i)).find('input.description').val()
      pathParameters.push(pp)
    }

    let queryParameters = []
    let qpRows = $('#api-query-parameter-rows div.api-query-parameter-row')
    for(let i=0; i<qpRows.length; i++) {
      let qp = {}
      qp.id = $(qpRows.eq(i)).data('id')
      qp.name = $(qpRows.eq(i)).find('input.name').val()
      qp.type = $(qpRows.eq(i)).find('input.type').val()
      qp.baseText = $(qpRows.eq(i)).find('input.description').attr('placeholder')
      qp.customText = $(qpRows.eq(i)).find('input.description').val()
      queryParameters.push(qp)
    }

    let rd = $('#api-request-data-textarea').val()
    if(rd == null) {rd = ''}
    else if(rd.length) {rd = JSON.stringify(JSON.parse(rd), null, 2)}

    let service = {}
    service.id = $('#api-service-select option:selected').val()
    if(service.id.length) {service.name = $('#api-service-select option:selected').text()}
    else {service.name = ''}

    let status = {}
    status.id = $('#api-status-select option:selected').val()
    if(status.id.length) {status.name = $('#api-status-select option:selected').text()}
    else {status.name = ''}

    let statusCodes = []
    let scRows = $('#api-status-code-rows div.api-status-code-row')
    for(let i=0; i<scRows.length; i++) {
      let sc = {}
      sc.code = $(scRows.eq(i)).find('input.code').val()
      sc.baseText = $(scRows.eq(i)).find('input.text').attr('placeholder')
      sc.customText = $(scRows.eq(i)).find('input.text').val()
      statusCodes.push(sc)
    }

    let tags = []
    let tRows = $('#api-tag-rows div.api-tag-row')
    for(let i=0; i<tRows.length; i++) {
      let t = {}
      t.id = $(tRows).eq(i).data('id')
      t.name = $(tRows).eq(i).find('input.name').val()
      tags.push(t)
    }

    let requestData = {}
    requestData.description = $('#api-description-textarea').val()
    requestData.method = method
    requestData.name = $('#api-name-input').val()
    requestData.notes = $('#api-notes-textarea').val()
    requestData.path = $('#api-path-input').val()
    requestData.pathParameters = pathParameters
    requestData.pathParametersDescription = $('#api-path-parameters-description-textarea').val()
    requestData.published = $('#api-published-select').val()
    requestData.queryParameters = queryParameters
    requestData.queryParametersDescription = $('#api-query-parameters-description-textarea').val()
    requestData.requestData = rd
    requestData.requestDataDescription = $('#api-request-data-description-textarea').val()
    requestData.requestDescription = $('#api-request-description-textarea').val()
    requestData.responseDataDescription = $('#api-response-data-description-textarea').val()
    requestData.responseDescription = $('#api-response-description-textarea').val()
    requestData.service = service
    requestData.status = status
    requestData.statusCodes = statusCodes
    requestData.statusCodesDescription = $('#api-status-codes-description-textarea').val()
    requestData.tags = tags

    let btnElement = this
    let accessToken = $('#adms-access-token').val()
    DOCS.postApi(requestData, accessToken,
      function(response) {
        $('#api-id-input').val(response.data.apiId)
        wbSuccessCb(btnElement, response)
      }, 
      function(error) {wbErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
Delete
------------------------------------------------------*/
/*
$(function () {
  $('#api-delete-btn').click(function (event) {
    console.log('delete')
  })
})
*/
/*------------------------------------------------------
reset
------------------------------------------------------*/

function reset() {
  $('form.api-workbench button.save').removeClass('btn-secondary btn-danger').addClass('btn-outline-secondary')
  $('form.api-workbench').data('id', 0)

  $('#api-description-textarea').val('')
  $('#api-request-description-textarea').val('')
  $('#api-path-parameters-description-textarea').val('')
  $('#api-query-parameters-description-textarea').val('')
  $('#api-request-data-description-textarea').val('')
  $('#api-response-data-description-textarea').val('')
  $('#api-response-description-textarea').val('')
  $('#api-status-codes-description-textarea').val('')

  $('#api-published-select').val('')

  $('#api-method-select').val('')
  $('#api-name-input').val('')
  $('#api-notes-textarea').val('')
  $('#api-path-input').val('')
  $('#api-path-parameter-rows').empty()
  resetPathParametersSelect()
  $('#api-query-parameter-rows').empty()
  resetQueryParametersSelect()
  $('#api-request-data-textarea').val('')
  $('#api-service-select').val('')
  $('#api-status-select').val('')
  $('#api-status-code-rows').empty()
  resetStatusCodesSelect()
  $('#api-tag-rows').empty()
  resetTagsSelect()
}

/*------------------------------------------------------
Add Path Parameter
------------------------------------------------------*/

$(function () {
  $('#api-path-parameter-ctl-row button.add').click(function (event) {
    let id = $('#api-path-parameter-ctl-row select option:selected').data('details').id
    let name = $('#api-path-parameter-ctl-row select option:selected').val()
    let pos = $('#api-path-parameter-ctl-row input.pos').val()
    let type = $('#api-path-parameter-ctl-row input.type').val()
    let baseText = $('#api-path-parameter-ctl-row input.description').attr('placeholder')
    let customText = $('#api-path-parameter-ctl-row input.description').val()
    insertPathParameter(id, name, type, baseText, customText, pos)
    resetPathParametersSelect()
  })
})

/*------------------------------------------------------
Remove Path Parameter
------------------------------------------------------*/

$(function () {
  $('#api-path-parameter-rows').delegate('button.remove', 'click', function(event) {
    $(this).closest('div.api-path-parameter-row').remove()
  })
})

/*------------------------------------------------------
appendPathParameter
------------------------------------------------------*/

function appendPathParameter(id, name, type, baseText, customText, pos) {
  let row = createPathParameter(id, name, type, baseText, customText, pos)
  $('#api-path-parameter-rows').append(row)
}

/*------------------------------------------------------
insertPathParameter
------------------------------------------------------*/

function insertPathParameter(id, name, type, baseText, customText, pos) {
  let row = createPathParameter(id, name, type, baseText, customText, pos)
  let rows = $('#api-path-parameter-rows div.api-path-parameter-row')
  if(rows.length && pos < rows.length) {$(row).insertBefore($(rows.eq(pos)))}
  else {$('#api-path-parameter-rows').append(row)}
  rows = $('#api-path-parameter-rows div.api-path-parameter-row')
  for(let i=0; i<rows.length; i++) {
    $(rows.eq(i)).find('input.pos').val(i)
  }
}

/*------------------------------------------------------
createPathParameter
------------------------------------------------------*/

function createPathParameter(id, name, type, baseText, customText, pos) {
  let nameInput = $('<input type="text" class="form-control form-control-sm name" disabled>')
  $(nameInput).val(name)
  let nameDiv = $('<div class="form-group col-sm-2">')
  nameDiv.append(nameInput)
  let posInput = $('<input type="text" class="form-control form-control-sm pos">')
  $(posInput).val(pos)
  let posDiv = $('<div class="form-group col-sm-1">')
  posDiv.append(posInput)
  let typeInput = $('<input type="text" class="form-control form-control-sm type" disabled>')
  $(typeInput).val(type)
  let typeDiv = $('<div class="form-group col-sm-2">')
  typeDiv.append(typeInput)
  let descriptionInput = $('<input type="text" class="form-control form-control-sm description">')
  $(descriptionInput).val(customText)
  $(descriptionInput).attr('placeholder', baseText)
  let descriptionDiv = $('<div class="form-group col-sm-4">')
  descriptionDiv.append(descriptionInput)
  let removeBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary remove">&ndash;</button>'
  let removeDiv = $('<div class="form-group col-auto"></div>')
  removeDiv.append(removeBtn)
  let row = $('<div class="form-row api-path-parameter-row">')
  $(row).data('id', id)
  row.append(nameDiv)
  row.append(posDiv)
  row.append(typeDiv)
  row.append(descriptionDiv)
  row.append(removeDiv)
  return row
}

/*------------------------------------------------------
resetPathParametersSelect
------------------------------------------------------*/

function resetPathParametersSelect() {
  $('#api-path-parameter-ctl-row select').val('---')
  $('#api-path-parameter-ctl-row input.pos').val('')
  $('#api-path-parameter-ctl-row input.type').val('')
  $('#api-path-parameter-ctl-row input.description').val('')
  $('#api-path-parameter-ctl-row input.description').attr('placeholder', '')
}

/*------------------------------------------------------
Add Query Parameter
------------------------------------------------------*/

$(function () {
  $('#api-query-parameter-ctl-row button.add').click(function (event) {
    let id = $('#api-query-parameter-ctl-row select option:selected').data('details').id
    let name = $('#api-query-parameter-ctl-row select option:selected').val()
    let pos = $('#api-query-parameter-ctl-row input.pos').val()
    let type = $('#api-query-parameter-ctl-row input.type').val()
    let baseText = $('#api-query-parameter-ctl-row input.description').attr('placeholder')
    let customText = $('#api-query-parameter-ctl-row input.description').val()
    insertQueryParameter(id, name, type, baseText, customText, pos)
    resetQueryParametersSelect()
  })
})

/*------------------------------------------------------
Remove Query Parameter
------------------------------------------------------*/

$(function () {
  $('#api-query-parameter-rows').delegate('button.remove', 'click', function(event) {
    $(this).closest('div.api-query-parameter-row').remove()
  })
})

/*------------------------------------------------------
appendQueryParameter
------------------------------------------------------*/

function appendQueryParameter(id, name, type, baseText, customText, pos) {
  let row = createQueryParameter(id, name, type, baseText, customText, pos)
  $('#api-query-parameter-rows').append(row)
}

/*------------------------------------------------------
insertQueryParameter
------------------------------------------------------*/

function insertQueryParameter(id, name, type, baseText, customText, pos) {
  let row = createQueryParameter(id, name, type, baseText, customText, pos)
  let rows = $('#api-query-parameter-rows div.api-query-parameter-row')
  if(rows.length && pos < rows.length) {$(row).insertBefore($(rows.eq(pos)))}
  else {$('#api-query-parameter-rows').append(row)}
  rows = $('#api-query-parameter-rows div.api-query-parameter-row')
  for(let i=0; i<rows.length; i++) {
    $(rows.eq(i)).find('input.pos').val(i)
  }
}

/*------------------------------------------------------
createQueryParameter
------------------------------------------------------*/

function createQueryParameter(id, name, type, baseText, customText, pos) {
  let nameInput = $('<input type="text" class="form-control form-control-sm name" disabled>')
  $(nameInput).val(name)
  let nameDiv = $('<div class="form-group col-sm-2">')
  nameDiv.append(nameInput)
  let posInput = $('<input type="text" class="form-control form-control-sm pos">')
  $(posInput).val(pos)
  let posDiv = $('<div class="form-group col-sm-1">')
  posDiv.append(posInput)
  let typeInput = $('<input type="text" class="form-control form-control-sm type" disabled>')
  $(typeInput).val(type)
  let typeDiv = $('<div class="form-group col-sm-2">')
  typeDiv.append(typeInput)
  let descriptionInput = $('<input type="text" class="form-control form-control-sm description">')
  $(descriptionInput).val(customText)
  $(descriptionInput).attr('placeholder', baseText)
  let descriptionDiv = $('<div class="form-group col-sm-4">')
  descriptionDiv.append(descriptionInput)
  let removeBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary remove">&ndash;</button>'
  let removeDiv = $('<div class="form-group col-auto"></div>')
  removeDiv.append(removeBtn)
  let row = $('<div class="form-row api-query-parameter-row">')
  $(row).data('id', id)
  row.append(nameDiv)
  row.append(posDiv)
  row.append(typeDiv)
  row.append(descriptionDiv)
  row.append(removeDiv)
  return row
}

/*------------------------------------------------------
resetQueryParametersSelect
------------------------------------------------------*/

function resetQueryParametersSelect() {
  $('#api-query-parameter-ctl-row select').val('---')
  $('#api-query-parameter-ctl-row input.pos').val('')
  $('#api-query-parameter-ctl-row input.type').val('')
  $('#api-query-parameter-ctl-row input.description').val('')
  $('#api-query-parameter-ctl-row input.description').attr('placeholder', '')
}

/*------------------------------------------------------
Add Status Code
------------------------------------------------------*/

$(function () {
  $('#api-status-code-ctl-row button.add').click(function (event) {
    let code = $('#api-status-code-ctl-row select option:selected').val()
    let baseText = $('#api-status-code-ctl-row input.text').attr('placeholder')
    let customText = $('#api-status-code-ctl-row input.text').val()
    insertStatusCode(code, baseText, customText)
    resetStatusCodesSelect()
  })
})

/*------------------------------------------------------
Remove Status Code
------------------------------------------------------*/

$(function () {
  $('#api-status-code-rows').delegate('button.remove', 'click', function(event) {
    $(this).closest('div.api-status-code-row').remove()
  })
})

/*------------------------------------------------------
appendStatusCode
------------------------------------------------------*/

function appendStatusCode(code, baseText, customText) {
  let row = createStatusCode(code, baseText, customText)
  $('#api-status-code-rows').append(row)
}

/*------------------------------------------------------
insertStatusCode
------------------------------------------------------*/

function insertStatusCode(code, baseText, customText) {
  let row = createStatusCode(code, baseText, customText)
  let rows = $('#api-status-code-rows div.api-status-code-row')
  if(rows.length) {
    for(let i=0; i<rows.length; i++) {
      if(code < $(rows.eq(i)).find('input.code').val()) {
        $(row).insertBefore($(rows.eq(i))); break
      } else if (i == (rows.length-1)) {
        $(row).insertAfter($(rows.eq(i))); break
      }
    }
  } else {
    $('#api-status-code-rows').append(row)
  }
  $(row).find('div.edit-mode').show()
}

/*------------------------------------------------------
createStatusCode
------------------------------------------------------*/

function createStatusCode(code, baseText, customText) {
  let codeInput = $('<input type="text" class="form-control form-control-sm code" disabled>')
  $(codeInput).val(code)
  let codeDiv = $('<div class="form-group col-sm-2"></div>')
  codeDiv.append(codeInput)
  let textInput = $('<input type="text" class="form-control form-control-sm text">')
  $(textInput).val(customText)
  $(textInput).attr('placeholder', baseText)
  let textDiv = $('<div class="form-group col-sm-3"></div>')
  textDiv.append(textInput)
  let removeBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary remove">&ndash;</button>'
  let removeDiv = $('<div class="form-group col-auto edit-mode"></div>')
  removeDiv.append(removeBtn)
  let row = $('<div class="form-row api-status-code-row">')
  row.append(codeDiv)
  row.append(textDiv)
  row.append(removeDiv)
  return row
}

/*------------------------------------------------------
resetStatusCodesSelect
------------------------------------------------------*/

function resetStatusCodesSelect() {
  $('#api-status-code-ctl-row select').val('---')
  $('#api-status-code-ctl-row input.text').val('')
  $('#api-status-code-ctl-row input.text').attr('placeholder', '')
}

/*------------------------------------------------------
Add Tags
------------------------------------------------------*/

$(function () {
  $('#api-tag-ctl-row button.add').click(function (event) {
    let id = $('#api-tag-ctl-row select option:selected').val()
    let name = $('#api-tag-ctl-row select option:selected').text()
    insertTag(id, name)
    resetTagsSelect()
  })
})

/*------------------------------------------------------
Remove Tags
------------------------------------------------------*/

$(function () {
  $('#api-tag-rows').delegate('button.remove', 'click', function(event) {
    $(this).closest('div.api-tag-row').remove()
  })
})

/*------------------------------------------------------
appendTag
------------------------------------------------------*/

function appendTag(id, name) {
  let row = createTag(id, name)
  $('#api-tag-rows').append(row)
}

/*------------------------------------------------------
insertTag
------------------------------------------------------*/

function insertTag(id, name) {
  let row = createTag(id, name)
  let rows = $('#api-tag-rows div.api-tag-row')
  if(rows.length) {
    for(let i=0; i<rows.length; i++) {
      if(name < $(rows.eq(i)).find('input.name').val()) {
        $(row).insertBefore($(rows.eq(i))); break
      } else if (i == (rows.length-1)) {
        $(row).insertAfter($(rows.eq(i))); break
      }
    }
  } else {
    $('#api-tag-rows').append(row)
  }
  $(row).find('div.edit-mode').show()
}

/*------------------------------------------------------
createTag
------------------------------------------------------*/

function createTag(id, name) {
  let nameInput = $('<input type="text" class="form-control form-control-sm name" disabled>')
  $(nameInput).val(name)
  let nameDiv = $('<div class="form-group col-sm-3"></div>')
  nameDiv.append(nameInput)
  let removeBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary remove">&ndash;</button>'
  let removeDiv = $('<div class="form-group col-auto edit-mode"></div>')
  removeDiv.append(removeBtn)
  let row = $('<div class="form-row api-tag-row">')
  $(row).data('id', id)
  row.append(nameDiv)
  row.append(removeDiv)
  return row
}

/*------------------------------------------------------
resetTagsSelect
------------------------------------------------------*/

function resetTagsSelect() {
  $('#api-tag-ctl-row select').val('')
}

/*------------------------------------------------------
Save Description
------------------------------------------------------*/

$(function () {
  $('#api-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let description = $('#api-description-textarea').val()
      DOCS.putApiDescription(apiId, description, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Method
------------------------------------------------------*/

$(function () {
  $('#api-method-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let methodId = $('#api-method-select option:selected').val()
      DOCS.putApiMethod(apiId, methodId, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Name
------------------------------------------------------*/

$(function () {
  $('#api-name-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let name = $('#api-name-input').val()
      DOCS.putApiName(apiId, name, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Notes
------------------------------------------------------*/

$(function () {
  $('#api-notes-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let notes = $('#api-notes-textarea').val()
      DOCS.putApiNotes(apiId, notes, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Path
------------------------------------------------------*/

$(function () {
  $('#api-path-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let path = $('#api-path-input').val()
      DOCS.putApiPath(apiId, path, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Path Parameters
------------------------------------------------------*/

$(function () {
  $('#api-path-parameter-ctl-row button.save').click(function (event) {
    let btnElement = this
    let arr = []
    let rows = $('#api-path-parameter-rows div.api-path-parameter-row')
    for(let i=0; i<rows.length; i++) {
      let obj = {}
      obj.id = $(rows).eq(i).data('id')
      obj.name = $(rows).eq(i).find('input.name').val()
      obj.type = $(rows).eq(i).find('input.type').val()
      obj.baseText = $(rows).eq(i).find('input.description').attr('placeholder')
      obj.customText = $(rows).eq(i).find('input.description').val()
      arr.push(obj)
    }
    let requestData = {}
    requestData.pathParameters = arr
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    DOCS.putApiPathParameters(apiId, requestData, accessToken,
      function(response) {wbSuccessCb(btnElement, response)}, 
      function(error) {wbErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
Save Path Parameters Description
------------------------------------------------------*/

$(function () {
  $('#api-path-parameters-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let pathParametersDescription = $('#api-path-parameters-description-textarea').val()
      DOCS.putApiPathParametersDescription(apiId, pathParametersDescription, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Published
------------------------------------------------------*/

$(function () {
  $('#api-published-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let published = $('#api-published-select').val()
      DOCS.putApiPublished(apiId, published, accessToken,
        function(response) {wbSuccessCb(btnElement, response)},
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Query Parameters
------------------------------------------------------*/

$(function () {
  $('#api-query-parameter-ctl-row button.save').click(function (event) {
    let btnElement = this
    let arr = []
    let rows = $('#api-query-parameter-rows div.api-query-parameter-row')
    for(let i=0; i<rows.length; i++) {
      let obj = {}
      obj.id = $(rows).eq(i).data('id')
      obj.name = $(rows).eq(i).find('input.name').val()
      obj.type = $(rows).eq(i).find('input.type').val()
      obj.baseText = $(rows).eq(i).find('input.description').attr('placeholder')
      obj.customText = $(rows).eq(i).find('input.description').val()
      arr.push(obj)
    }
    let requestData = {}
    requestData.queryParameters = arr
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    DOCS.putApiQueryParameters(apiId, requestData, accessToken,
      function(response) {wbSuccessCb(btnElement, response)}, 
      function(error) {wbErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
Save Query Parameters Description
------------------------------------------------------*/

$(function () {
  $('#api-query-parameters-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let queryParametersDescription = $('#api-query-parameters-description-textarea').val()
      DOCS.putApiQueryParametersDescription(apiId, queryParametersDescription, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Request Data
------------------------------------------------------*/

$(function () {
  $('#api-request-data-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let requestData = $('#api-request-data-textarea').val()
      if(requestData == null) {requestData = ''}
      else if(requestData.length) {requestData = JSON.stringify(JSON.parse(requestData))}
      DOCS.putApiRequestData(apiId, requestData, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Request Data Description
------------------------------------------------------*/

$(function () {
  $('#api-request-data-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let description = $('#api-request-data-description-textarea').val()
      DOCS.putApiRequestDataDescription(apiId, description, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Request Description
------------------------------------------------------*/

$(function () {
  $('#api-request-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let description = $('#api-request-description-textarea').val()
      DOCS.putApiRequestDescription(apiId, description, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Response Data Description
------------------------------------------------------*/

$(function () {
  $('#api-response-data-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let description = $('#api-response-data-description-textarea').val()
      DOCS.putApiResponseDataDescription(apiId, description, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Response Description
------------------------------------------------------*/

$(function () {
  $('#api-response-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let description = $('#api-response-description-textarea').val()
      DOCS.putApiResponseDescription(apiId, description, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Service
------------------------------------------------------*/

$(function () {
  $('#api-service-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let serviceId = $('#api-service-select option:selected').val()
      DOCS.putApiService(apiId, serviceId, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Status
------------------------------------------------------*/

$(function () {
  $('#api-status-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let statusId = $('#api-status-select option:selected').val()
      DOCS.putApiStatus(apiId, statusId, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Status Codes
------------------------------------------------------*/

$(function () {
  $('#api-status-code-ctl-row button.save').click(function (event) {
    let btnElement = this
    let arr = []
    let rows = $('#api-status-code-rows div.api-status-code-row')
    for(let i=0; i<rows.length; i++) {
      let obj = {}
      obj.code = $(rows).eq(i).find('input.code').val()
      obj.baseText = $(rows).eq(i).find('input.text').attr('placeholder')
      obj.customText = $(rows).eq(i).find('input.text').val()
      arr.push(obj)
    }
    let requestData = {}
    requestData.statusCodes = arr
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    DOCS.putApiStatusCodes(apiId, requestData, accessToken,
      function(response) {wbSuccessCb(btnElement, response)}, 
      function(error) {wbErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
Save Status Codes Description
------------------------------------------------------*/

$(function () {
  $('#api-status-codes-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    if(apiId) {
      let description = $('#api-status-codes-description-textarea').val()
      DOCS.putApiStatusCodesDescription(apiId, description, accessToken,
        function(response) {wbSuccessCb(btnElement, response)}, 
        function(error) {wbErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Save Tags
------------------------------------------------------*/

$(function () {
  $('#api-tag-ctl-row button.save').click(function (event) {
    let btnElement = this
    let arr = []
    let rows = $('#api-tag-rows div.api-tag-row')
    for(let i=0; i<rows.length; i++) {
      let obj = {}
      obj.id = $(rows).eq(i).data('id')
      obj.name = $(rows).eq(i).find('input.name').val()
      arr.push(obj)
    }
    let requestData = {}
    requestData.tags = arr
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#adms-access-token').val()
    DOCS.putApiTags(apiId, requestData, accessToken,
      function(response) {wbSuccessCb(btnElement, response)}, 
      function(error) {wbErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
Error Handling
------------------------------------------------------*/

function wbSuccessCb(btnElement, response) {
  if($(btnElement).hasClass('save')) {$(btnElement).removeClass('btn-outline-secondary').addClass('btn-secondary')}
}

function wbErrorCb(btnElement, error) {
  $(btnElement).removeClass('btn-outline-secondary').addClass('btn-danger')
  displayMsg(JSON.stringify(error.data, null, 2), error.status, error.statusText)
}

function displayMsg(msg, code, text) {
  if(msg.length && msg != '""') {
    $('#msg-box div.msg pre').html(msg)
  }
  if(code) {
    $('#msg-box div.status pre').html(code + ': ' + text)
    $('#msg-box div.status').show()
  }
  $('#msg-box').show()
}

$(function () {
  $('#msg-box button').click(function (event) {
    $('form.api-workbench button.save').removeClass('btn-danger').addClass('btn-outline-secondary')
    $('#msg-box').hide()
    $('#msg-box div.msg pre').html('')
    $('#msg-box div.status pre').html('')
    $('#msg-box div.status').hide()
  })
})

/*------------------------------------------------------
On Change Select
------------------------------------------------------*/

$(function() {
  $('#api-path-parameter-ctl-row select').change(function() {
    let details = $("option:selected", this).data('details')
    let pos = $('#api-path-parameter-rows div.api-path-parameter-row').length
    $('#api-path-parameter-ctl-row input.pos').val(pos)
    $('#api-path-parameter-ctl-row input.type').val(details.type)
    $('#api-path-parameter-ctl-row input.description').attr('placeholder', details.text)
  })
})

$(function() {
  $('#api-query-parameter-ctl-row select').change(function() {
    let details = $("option:selected", this).data('details')
    let pos = $('#api-query-parameter-rows div.api-query-parameter-row').length
    $('#api-query-parameter-ctl-row input.pos').val(pos)
    $('#api-query-parameter-ctl-row input.type').val(details.type)
    $('#api-query-parameter-ctl-row input.description').attr('placeholder', details.text)
  })
})

$(function() {
  $('#api-status-code-ctl-row select').change(function() {
    let details = $("option:selected", this).data('details')
    $('#api-status-code-ctl-row input.text').attr('placeholder', details.text)
  })
})

/*------------------------------------------------------
On Load
------------------------------------------------------*/

$(function() {
  $('#adms-access-token').val(localStorage.getItem('adms-access-token'))

  DOCS.getMethods(function(response) {
    let selectElement = $('#api-method-select')
    let option = $('<option/>').text('---')
    $(option).val('')
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].name.toUpperCase()).val(response.data[j].id)
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

  DOCS.getPathParameters(function(response) {
    let selectElement = $('#api-path-parameter-ctl-row select')
    let option = $('<option/>').text('---')
    $(option).data('details', JSON.parse('{"id":"","name":"","type":"","text":""}'))
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].name).data('details', response.data[j])
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

  DOCS.getQueryParameters(function(response) {
    let selectElement = $('#api-query-parameter-ctl-row select')
    let option = $('<option/>').text('---')
    $(option).data('details', JSON.parse('{"id":"","name":"","type":"","text":""}'))
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].name).data('details', response.data[j])
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

  DOCS.getServices(function(response) {
    let selectElement = $('#api-service-select')
    let option = $('<option/>').text('---')
    $(option).val('')
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].name).val(response.data[j].id)
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

  DOCS.getStatuses(function(response) {
    let selectElement = $('#api-status-select')
    let option = $('<option/>').text('---')
    $(option).val('')
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].name).val(response.data[j].id)
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

  DOCS.getStatusCodes(function(response) {
    let selectElement = $('#api-status-code-ctl-row select')
    let option = $('<option/>').text('---')
    $(option).data('details', JSON.parse('{"code":"","text":""}'))
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].code).data('details', response.data[j])
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

  DOCS.getTags(function(response) {
    let selectElement = $('#api-tag-ctl-row select')
    let option = $('<option/>').text('---')
    $(option).val('')
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].name).val(response.data[j].id)
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

})
