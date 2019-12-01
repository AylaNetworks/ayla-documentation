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
            api.pathParameters[i].pos,
          )
        }

        for (let i = 0; i < api.queryParameters.length; i++) {
          appendQueryParameter(
            api.queryParameters[i].id,
            api.queryParameters[i].name,
            api.queryParameters[i].type,
            api.queryParameters[i].baseText,
            api.queryParameters[i].customText,
            api.queryParameters[i].pos,
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
  $('#api-path-parameter-divs').empty()
  resetQueryParametersSelect()
  $('#api-query-parameter-divs').empty()
  $('#api-request-data-textarea').val('')
  $('#api-response-description-textarea').val('')
  resetStatusCodesSelect()
  $('#api-status-code-divs').empty()
  $('#api-notes-textarea').val('')
}

/*------------------------------------------------------
appendPathParameter
------------------------------------------------------*/

function appendPathParameter(id, name, type, baseText, customText, pos) {
  let scElement = createPathParameter(id, name, type, baseText, customText, pos)
  $('#api-path-parameter-divs').append(scElement)
}

/*------------------------------------------------------
insertPathParameter
------------------------------------------------------*/

function insertPathParameter() {
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
  $(posInput).val(parseInt(pos)+1)
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
  let saveBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary save">Save</button>'
  let saveDiv = $('<div class="form-group col-auto edit-mode"></div>')
  saveDiv.append(saveBtn)
  let deleteBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary delete">Delete</button>'
  let deleteDiv = $('<div class="form-group col-auto edit-mode"></div>')
  deleteDiv.append(deleteBtn)
  let scElement = $('<div class="form-row api-path-parameter-div">')
  $(scElement).data('id', id)
  scElement.append(nameDiv)
  scElement.append(posDiv)
  scElement.append(typeDiv)
  scElement.append(descriptionDiv)
  scElement.append(saveDiv)
  scElement.append(deleteDiv)
  return scElement
}

/*------------------------------------------------------
resetPathParametersSelect
------------------------------------------------------*/

function resetPathParametersSelect() {
  $('#api-path-parameters-select').val('---')
  let row = $('#api-path-parameters-select').closest('div.form-row')
  $(row).find('input.pos').val('')
  $(row).find('input.type').val('')
  $(row).find('input.description').val('')
  $(row).find('input.description').attr('placeholder', '')
}

/*------------------------------------------------------
appendQueryParameter
------------------------------------------------------*/

function appendQueryParameter(id, name, type, baseText, customText, pos) {
  let scElement = createQueryParameter(id, name, type, baseText, customText, pos)
  $('#api-query-parameter-divs').append(scElement)
}

/*------------------------------------------------------
insertQueryParameter
------------------------------------------------------*/

function insertQueryParameter() {
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
  $(posInput).val(parseInt(pos)+1)
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
  let saveBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary save">Save</button>'
  let saveDiv = $('<div class="form-group col-auto edit-mode"></div>')
  saveDiv.append(saveBtn)
  let deleteBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary delete">Delete</button>'
  let deleteDiv = $('<div class="form-group col-auto edit-mode"></div>')
  deleteDiv.append(deleteBtn)
  let scElement = $('<div class="form-row api-query-parameter-div">')
  $(scElement).data('id', id)
  scElement.append(nameDiv)
  scElement.append(posDiv)
  scElement.append(typeDiv)
  scElement.append(descriptionDiv)
  scElement.append(saveDiv)
  scElement.append(deleteDiv)
  return scElement
}

/*------------------------------------------------------
resetQueryParametersSelect
------------------------------------------------------*/

function resetQueryParametersSelect() {
  $('#api-query-parameters-select').val('---')
  let row = $('#api-query-parameters-select').closest('div.form-row')
  $(row).find('input.pos').val('')
  $(row).find('input.type').val('')
  $(row).find('input.description').val('')
  $(row).find('input.description').attr('placeholder', '')
}

/*------------------------------------------------------
appendStatusCode
------------------------------------------------------*/

function appendStatusCode(code, baseText, customText) {
  let scElement = createStatusCode(code, baseText, customText)
  $('#api-status-code-divs').append(scElement)
}

/*------------------------------------------------------
insertStatusCode
------------------------------------------------------*/

function insertStatusCode(code, baseText, customText) {
  let scElement = createStatusCode(code, baseText, customText)
  let divs = $('#api-status-code-divs div.api-status-code-div')
  if(divs.length) {
    for(let i=0; i<divs.length; i++) {
      if(code < $(divs.eq(i)).find('input.code').val()) {
        $(scElement).insertBefore($(divs.eq(i))); break
      } else if (i == (divs.length-1)) {
        $(scElement).insertAfter($(divs.eq(i))); break
      }
    }
  } else {
    $('#api-status-code-divs').append(scElement)
  }
  $(scElement).find('div.edit-mode').show()
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
  let saveBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary save">Save</button>'
  let saveDiv = $('<div class="form-group col-auto edit-mode"></div>')
  saveDiv.append(saveBtn)
  let deleteBtn = '<button type="button" class="btn btn-sm btn-block btn-outline-secondary delete">Delete</button>'
  let deleteDiv = $('<div class="form-group col-auto edit-mode"></div>')
  deleteDiv.append(deleteBtn)
  let scElement = $('<div class="form-row api-status-code-div">')
  scElement.append(codeDiv)
  scElement.append(textDiv)
  scElement.append(saveDiv)
  scElement.append(deleteDiv)
  return scElement
}

/*------------------------------------------------------
resetStatusCodesSelect
------------------------------------------------------*/

function resetStatusCodesSelect() {
  $('#api-status-codes-select').val('---')
  let row = $('#api-status-codes-select').closest('div.form-row')
  $(row).find('input.text').val('')
  $(row).find('input.text').attr('placeholder', '')
}

/*------------------------------------------------------
On Click btn
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

$(function () {
  $('button.add-path-parameter').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let id = $('#api-path-parameters-select option:selected').data('details').id
      let name = $('#api-path-parameters-select option:selected').val()
      let selectRow = $(this).closest('div.form-row')
      let pos = $(selectRow).find('input.pos').val()
      let type = $(selectRow).find('input.type').val()
      let baseText = $(selectRow).find('input.description').attr('placeholder')
      let customText = $(selectRow).find('input.description').val()
      console.log(id + ' ' + name + ' ' + pos + ' ' + type + ' ' + baseText + ' ' + customText)
      // insertPathParameter()
      resetPathParametersSelect()
    }
  })
})

$(function () {
  $('#api-path-parameter-divs').delegate('button.save', 'click', function(event) {
    console.log('Save path-parameter')
  })
})

$(function () {
  $('#api-path-parameter-divs').delegate('button.delete', 'click', function(event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let pathParameterDiv = $(this).closest('div.api-path-parameter-div')
      let id = $(pathParameterDiv).data('id')
      console.log('Deleting ' + id)
      $(pathParameterDiv).remove()
    }
  })
})

$(function () {
  $('button.add-query-parameter').click(function (event) {
    console.log('Add query-parameter')
  })
})

$(function () {
  $('#api-query-parameter-divs').delegate('button.save', 'click', function(event) {
    console.log('Save query-parameter')
  })
})

$(function () {
  $('#api-query-parameter-divs').delegate('button.delete', 'click', function(event) {
    console.log('Delete query-parameter')
  })
})

$(function () {
  $('button.add-status-code').click(function (event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let statusCode = $('#api-status-codes-select option:selected').val()
      let selectRow = $(this).closest('div.form-row')
      let customText = $(selectRow).find('input.text').val()
      DOCS.postApiStatusCode(apiId, statusCode, customText, accessToken,
        function(response) {
          let statusCode = response.data.statusCode
          insertStatusCode(statusCode.code, statusCode.baseText, statusCode.customText)
          resetStatusCodesSelect()
          saveSuccessCb(btnElement, response)
        }, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-status-code-divs').delegate('button.save', 'click', function(event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let statusCodeDiv = $(this).closest('div.api-status-code-div')
      let statusCode = $(statusCodeDiv).find('input.code').val()
      let customText = $(statusCodeDiv).find('input.text').val()
      DOCS.putApiStatusCode(apiId, statusCode, customText, accessToken,
        function(response) {saveSuccessCb(btnElement, response)}, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

$(function () {
  $('#api-status-code-divs').delegate('button.delete', 'click', function(event) {
    let btnElement = this
    let apiId = $('form.api-workbench').data('id')
    let accessToken = $('#aca-access-token').val()
    if(apiId) {
      let statusCodeDiv = $(this).closest('div.api-status-code-div')
      let statusCode = $(statusCodeDiv).find('input.code').val()
      DOCS.deleteApiStatusCode(apiId, statusCode, accessToken,
        function(response) {
          $(statusCodeDiv).remove()
          saveSuccessCb(btnElement, response)
        }, 
        function(error) {saveErrorCb(btnElement, error)}
      )
    }
  })
})

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
  $('#api-path-parameters-select').change(function() {
    let option = $("option:selected", this)
    let details = $(option).data('details')
    let div = $(option).closest('div.form-row')
    $(div).find('input.pos').val(parseInt($('#api-path-parameter-divs div.api-path-parameter-div').length)+1)
    $(div).find('input.type').val(details.type)
    $(div).find('input.description').attr('placeholder', details.text)
  })
})

$(function() {
  $('#api-query-parameters-select').change(function() {
    let option = $("option:selected", this)
    let details = $(option).data('details')
    let div = $(option).closest('div.form-row')
    $(div).find('input.pos').val(parseInt($('#api-query-parameter-divs div.api-query-parameter-div').length)+1)
    $(div).find('input.type').val(details.type)
    $(div).find('input.description').attr('placeholder', details.text)
  })
})

$(function() {
  $('#api-status-codes-select').change(function() {
    let option = $("option:selected", this)
    let details = $(option).data('details')
    let div = $(option).closest('div.form-row')
    $(div).find('input.text').attr('placeholder', details.text)
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
    let selectElement = $('#api-path-parameters-select')
    let option = $('<option/>').text('---')
    $(option).data('details', JSON.parse('{"id":"","name":"","type":"","text":""}'))
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].name).data('details', response.data[j])
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})

  DOCS.getQueryParameters(function(response) {
    let selectElement = $('#api-query-parameters-select')
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
    let selectElement = $('#api-status-codes-select')
    let option = $('<option/>').text('---')
    $(option).data('details', JSON.parse('{"code":"","text":""}'))
    $(selectElement).append(option)
    for(let j=0; j < response.data.length; j++) {
      option = $('<option/>').text(response.data[j].code).data('details', response.data[j])
      $(selectElement).append(option)
    }
  }, function(error) {console.log(error)})
})
