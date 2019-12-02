/*------------------------------------------------------
Get
------------------------------------------------------*/

$(function () {
  $('#api-get-btn').click(function (event) {
    $('#api-save-btn').prop('disabled', true)
    let apiId = $('#api-id-input').val()
    if (apiId) {
      DOCS.getApi(apiId, function (response) {
        reset()

        let api = response.data
        $('form.api-workbench').data('id', api.id)
        $('#api-method-select').val(api.method.id)
        $('#api-path-input').val(api.path.text)
        $('#api-name-input').val(api.name)
        $('#api-service-select').val(api.service.id)
        $('#api-status-select').val(api.status.id)
        $('#api-description-textarea').val(api.description)
        $('#api-request-description-textarea').val(api.requestDescription)

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

        if (api.requestData) { $('#api-request-data-textarea').val(JSON.stringify(api.requestData, null, 2)) }

        $('#api-response-description-textarea').val(api.responseDescription)

        for (let i = 0; i < api.statusCodes.length; i++) {
          appendStatusCode(api.statusCodes[i].code, api.statusCodes[i].baseText, api.statusCodes[i].customText)
        }

        $('#api-notes-textarea').val(api.notes)

        $('form.api-workbench div.edit-mode').show()

      }, function (error) {
        console.log(JSON.stringify(error, null, 2))
      })
    } else {
      console.log('The appId field is empty.')
    }
  })
})

/*------------------------------------------------------
Clear
------------------------------------------------------*/

$(function () {
  $('#api-clear-btn').click(function (event) {
    $('#api-save-btn').prop('disabled', false)
    reset()
    $('#api-id-input').val('')
    $('form.api-workbench div.edit-mode').hide()
  })
})

/*------------------------------------------------------
Save
------------------------------------------------------*/

$(function () {
  $('#api-save-btn').click(function (event) {
    let btnElement = this
    let accessToken = $('#aca-access-token').val()
    DOCS.postApi(accessToken,
      function(response) {saveSuccessCb(btnElement, response)}, 
      function(error) {saveErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
reset
------------------------------------------------------*/

function reset() {
  $('form.api-workbench div.edit-mode button.save').removeClass('btn-secondary btn-danger').addClass('btn-outline-secondary')
  $('form.api-workbench').data('id', 0)
  $('#api-method-select').val('')
  $('#api-path-input').val('')
  $('#api-name-input').val('')
  $('#api-service-select').val('')
  $('#api-status-select').val('')
  $('#api-description-textarea').val('')
  $('#api-request-description-textarea').val('')
  resetPathParametersSelect()
  $('#api-path-parameter-rows').empty()
  resetQueryParametersSelect()
  $('#api-query-parameter-rows').empty()
  $('#api-request-data-textarea').val('')
  $('#api-response-description-textarea').val('')
  resetStatusCodesSelect()
  $('#api-status-code-rows').empty()
  $('#api-notes-textarea').val('')
}

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
  let removeBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary remove">Remove</button>'
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
  let removeBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary remove">Remove</button>'
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
  let removeBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary remove">Remove</button>'
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
putApiDescription
putApiMethod
putApiName
putApiNotes
putApiPath
putApiRequestDescription
putApiResponseDescription
putApiService
putApiStatus
------------------------------------------------------*/

$(function () {
  $('#api-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let description = $('#api-description-textarea').val()
      DOCS.putApiDescription(apiId, description, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-method-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let methodId = $('#api-method-select option:selected').val()
      DOCS.putApiMethod(apiId, methodId, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-name-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let name = $('#api-name-input').val()
      DOCS.putApiName(apiId, name, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-notes-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let notes = $('#api-notes-textarea').val()
      DOCS.putApiNotes(apiId, notes, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-path-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let text = $('#api-path-input').val()
      DOCS.putApiPath(apiId, text, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-request-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let description = $('#api-request-description-textarea').val()
      DOCS.putApiRequestDescription(apiId, description, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-response-description-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let description = $('#api-response-description-textarea').val()
      DOCS.putApiResponseDescription(apiId, description, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-service-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let serviceId = $('#api-service-select option:selected').val()
      DOCS.putApiService(apiId, serviceId, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-status-btn').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let statusId = $('#api-status-select option:selected').val()
      DOCS.putApiStatus(apiId, statusId, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

/*------------------------------------------------------
Add, Remove, Save path parameters
------------------------------------------------------*/

$(function () {
  $('#api-path-parameter-ctl-row button.add').click(function (event) {
    let id = $('#api-path-parameter-ctl-row select option:selected').data('details').id
    let name = $('#api-path-parameter-ctl-row select option:selected').val()
    let pos = $('#api-path-parameter-ctl-row input.pos').val()
    let type = $('#api-path-parameter-ctl-row input.type').val()
    let baseText = $('#api-path-parameter-ctl-row input.description').attr('placeholder')
    let customText = $('#api-path-parameter-ctl-row input.description').val()
    console.log(id + ' ' + name + ' ' + pos + ' ' + type + ' ' + baseText + ' ' + customText)
    insertPathParameter(id, name, type, baseText, customText, pos)
    resetPathParametersSelect()
  })
})

$(function () {
  $('#api-path-parameter-rows').delegate('button.remove', 'click', function(event) {
    $(this).closest('div.api-path-parameter-row').remove()
  })
})

$(function () {
  $('#api-path-parameter-ctl-row button.save-all').click(function (event) {
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
    //console.log(JSON.stringify(requestData, null, 2))
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    DOCS.putApiPathParameters(apiId, requestData, accessToken,
      function(response) {saveSuccessCb(btnElement, response)}, 
      function(error) {saveErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
Add, Remove, Save query parameters
------------------------------------------------------*/

$(function () {
  $('#api-query-parameter-ctl-row button.add').click(function (event) {
    let id = $('#api-query-parameter-ctl-row select option:selected').data('details').id
    let name = $('#api-query-parameter-ctl-row select option:selected').val()
    let pos = $('#api-query-parameter-ctl-row input.pos').val()
    let type = $('#api-query-parameter-ctl-row input.type').val()
    let baseText = $('#api-query-parameter-ctl-row input.description').attr('placeholder')
    let customText = $('#api-query-parameter-ctl-row input.description').val()
    console.log(id + ' ' + name + ' ' + pos + ' ' + type + ' ' + baseText + ' ' + customText)
    insertQueryParameter(id, name, type, baseText, customText, pos)
    resetQueryParametersSelect()
  })
})

$(function () {
  $('#api-query-parameter-rows').delegate('button.remove', 'click', function(event) {
    $(this).closest('div.api-query-parameter-row').remove()
  })
})

$(function () {
  $('#api-query-parameter-ctl-row button.save-all').click(function (event) {
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
    //console.log(JSON.stringify(requestData, null, 2))
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    DOCS.putApiQueryParameters(apiId, requestData, accessToken,
      function(response) {saveSuccessCb(btnElement, response)}, 
      function(error) {saveErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
Add, Remove, Save status codes
------------------------------------------------------*/

$(function () {
  $('#api-status-code-ctl-row button.add').click(function (event) {
    let code = $('#api-status-code-ctl-row select option:selected').val()
    let baseText = $('#api-status-code-ctl-row input.text').attr('placeholder')
    let customText = $('#api-status-code-ctl-row input.text').val()
    console.log(code + ' ' + baseText + ' ' + customText)
    insertStatusCode(code, baseText, customText)
    resetStatusCodesSelect()
  })
})


$(function () {
  $('#api-status-code-rows').delegate('button.remove', 'click', function(event) {
    $(this).closest('div.api-status-code-row').remove()
  })
})

$(function () {
  $('#api-status-code-ctl-row button.save-all').click(function (event) {
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
    // console.log(JSON.stringify(requestData, null, 2))
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    DOCS.putApiStatusCodes(apiId, requestData, accessToken,
      function(response) {saveSuccessCb(btnElement, response)}, 
      function(error) {saveErrorCb(btnElement, error)}
    )
  })
})

/*------------------------------------------------------
saveSuccessCb
saveErrorCb
------------------------------------------------------*/

function saveSuccessCb(btnElement, response) {
  if($(btnElement).hasClass('save')) {$(btnElement).removeClass('btn-outline-secondary').addClass('btn-secondary')}
  console.log(JSON.stringify(response.data, null, 2))
}

function saveErrorCb(btnElement, error) {
  $(btnElement).removeClass('btn-outline-secondary').addClass('btn-danger')
  console.log(error)
}

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
  $('#aca-access-token').val(localStorage.getItem('aca-access-token'))

  DOCS.getMethods(function(response) {
    let selectElement = $('#api-method-select')
    let option = $('<option/>').text('---')
    $(option).val('')
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      let option = $('<option/>').text(response.data[j].name.toUpperCase()).val(response.data[j].id)
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
      let option = $('<option/>').text(response.data[j].name).val(response.data[j].id)
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

  DOCS.getStatuses(function(response) {
    let selectElement = $('#api-status-select')
    let option = $('<option/>').text('---')
    $(option).val('')
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      let option = $('<option/>').text(response.data[j].name).val(response.data[j].id)
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
})
