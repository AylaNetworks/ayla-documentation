/*------------------------------------------------------
On Change action
------------------------------------------------------*/

var prevMode = 'inspect'

$(function() {
  $('#api-mode-select').change(function() {
    let mode = $('#api-mode-select option:selected').val()
    if(mode == 'inspect') {
      $('form.api-workbench div.save-div').hide()
      $('form.api-workbench div.get-div').show()
      $('form.api-workbench div.access-token-div').hide()
      $('#api-id-input').prop('disabled', false)
      $('#api-get-btn').prop('disabled', false)
      $('#api-save-btn').prop('disabled', true)
      if(prevMode == 'create') {reset()}
    } else if(mode == 'create') {
      reset()
      $('#api-id-input').val('')
      $('form.api-workbench div.save-div').hide()
      $('form.api-workbench div.get-div').hide()
      $('form.api-workbench div.access-token-div').show()
      $('#api-id-input').prop('disabled', true)
      $('#api-get-btn').prop('disabled', true)
      $('#api-save-btn').prop('disabled', false)
    } else if(mode == 'edit') {
      $('form.api-workbench div.save-div').show()
      $('form.api-workbench div.get-div').show()
      $('form.api-workbench div.access-token-div').show()
      $('#api-id-input').prop('disabled', false)
      $('#api-get-btn').prop('disabled', false)
      $('#api-save-btn').prop('disabled', true)
      if(prevMode == 'create') {reset()}
    }
    prevMode = mode
  })
})

/*------------------------------------------------------
On Click Get
------------------------------------------------------*/

$(function () {
  $('#api-get-btn').click(function (event) {
    let apiId = $('#api-id-input').val()
    if (apiId) {
      DOCS.getApi(apiId, function (response) {
        //console.log(JSON.stringify(response.data, null, 2))
        reset()

        let api = response.data
        $('form.api-workbench').data('id', api.id)
        $('#api-service-select').val(api.service.id)
        $('#api-method-select').val(api.method.id)
        $('#api-path-input').val(api.path.text)
        $('#api-name-input').val(api.name)
        $('#api-description-textarea').val(api.description)
        $('#api-request-description-textarea').val(api.requestDescription)

        let pathParameterDivs = $('#api-path-parameter-divs').find('div.api-path-parameter-div')
        if(api.pathParameters) {
          for (let i = 0; i < api.pathParameters.length; i++) {
            $(pathParameterDivs.eq(i)).find('select.path-parameters').val(api.pathParameters[i].name)
            $(pathParameterDivs.eq(i)).find('input.type').val(api.pathParameters[i].type)
            $(pathParameterDivs.eq(i)).find('input.description').val(api.pathParameters[i].customText)
            $(pathParameterDivs.eq(i)).find('input.description').attr('placeholder', api.pathParameters[i].baseText)
          }
        }

        let queryParameterDivs = $('#api-query-parameter-divs').find('div.api-query-parameter-div')
        if(api.queryParameters) {
          for (let i = 0; i < api.queryParameters.length; i++) {
            $(queryParameterDivs.eq(i)).find('select.query-parameters').val(api.queryParameters[i].name)
            $(queryParameterDivs.eq(i)).find('input.type').val(api.queryParameters[i].type)
            $(queryParameterDivs.eq(i)).find('input.description').val(api.queryParameters[i].customText)
            $(queryParameterDivs.eq(i)).find('input.description').attr('placeholder', api.queryParameters[i].baseText)
          }
        }

        if (api.requestData) { $('#api-request-data-textarea').val(JSON.stringify(api.requestData, null, 2)) }

        $('#api-response-description-textarea').val(api.responseDescription)

        let statusCodeDivs = $('#api-status-code-divs').find('div.api-status-code-div')
        if(api.statusCodes) {
          for (let i = 0; i < api.statusCodes.length; i++) {
            $(statusCodeDivs.eq(i)).find('select.status-codes').val(api.statusCodes[i].code)
            $(statusCodeDivs.eq(i)).find('input.text').attr('placeholder', api.statusCodes[i].baseText)
            $(statusCodeDivs.eq(i)).find('input.text').val(api.statusCodes[i].customText)
          }
        }

        $('#api-status-select').val(api.status.id)

      }, function (error) {
        console.log(JSON.stringify(error, null, 2))
        reset()
      })
    } else {
      console.log('The appId field is empty.')
    }
  })
})

/*------------------------------------------------------
On Click Clear
------------------------------------------------------*/

$(function () {
  $('#api-clear-btn').click(function (event) {
    reset()
  })
})

/*------------------------------------------------------
On Click Save
------------------------------------------------------*/

$(function () {
  $('#api-save-btn').click(function (event) {
    console.log('Save')
  })
})

/*------------------------------------------------------
reset
------------------------------------------------------*/

function reset() {
  $('form.api-workbench').data('id', 0)
  $('#api-service-select').val('')
  $('#api-method-select').val('')
  $('#api-path-input').val('')
  $('#api-name-input').val('')
  $('#api-description-textarea').val('')
  $('#api-request-description-textarea').val('')
  let pathParameterDivs = $('#api-path-parameter-divs').find('div.api-path-parameter-div')
  for (let i = 0; i < pathParameterDivs.length; i++) {
    $(pathParameterDivs.eq(i)).find('select.path-parameters').val('')
    $(pathParameterDivs.eq(i)).find('input.type').val('')
    $(pathParameterDivs.eq(i)).find('input.description').val('')
    $(pathParameterDivs.eq(i)).find('input.description').attr('placeholder', '')
  }
  $('#api-request-data-textarea').val('')
  $('#api-response-description-textarea').val('')
  let queryParameterDivs = $('#api-query-parameter-divs').find('div.api-query-parameter-div')
  for (let i = 0; i < queryParameterDivs.length; i++) {
    $(queryParameterDivs.eq(i)).find('select.query-parameters').val('')
    $(queryParameterDivs.eq(i)).find('input.type').val('')
    $(queryParameterDivs.eq(i)).find('input.description').val('')
    $(queryParameterDivs.eq(i)).find('input.description').attr('placeholder', '')
  }
  let statusCodeDivs = $('#api-status-code-divs').find('div.api-status-code-div')
  for (let i = 0; i < statusCodeDivs.length; i++) {
    $(statusCodeDivs.eq(i)).find('select.status-codes').val('')
    $(statusCodeDivs.eq(i)).find('input.text').attr('placeholder', '')
    $(statusCodeDivs.eq(i)).find('input.text').val('')
  }
  $('#api-status-select').val('')
}

/*------------------------------------------------------
On Click Save
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

function saveSuccessCb(btnElement, response) {
  $(btnElement).removeClass('btn-warning').addClass('btn-success')
  console.log(JSON.stringify(response.data, null, 2))
}

function saveErrorCb(btnElement, error) {
  $(btnElement).removeClass('btn-warning').addClass('btn-danger')
  console.log(error)
}

/*------------------------------------------------------
On Change Select
------------------------------------------------------*/

$(function() {
  $('select.path-parameters').change(function() {
    let option = $("option:selected", this)
    let details = $(option).data('details')
    let div = $(option).closest('div.api-path-parameter-div')
    $(div).find('input.type').val(details.type)
    $(div).find('input.description').attr('placeholder', details.text)
  })
})

$(function() {
  $('select.query-parameters').change(function() {
    let option = $("option:selected", this)
    let details = $(option).data('details')
    let div = $(option).closest('div.api-query-parameter-div')
    $(div).find('input.type').val(details.type)
    $(div).find('input.description').attr('placeholder', details.text)
  })
})

$(function() {
  $('select.status-codes').change(function() {
    let option = $("option:selected", this)
    let details = $(option).data('details')
    let div = $(option).closest('div.api-status-code-div')
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
    let selectElements = $('select.path-parameters')
    for(let i = 0; i < selectElements.length; i++) {
      let option = $('<option/>').text('---')
      $(option).data('details', JSON.parse('{"id":"","name":"","type":"","text":""}'))
      $(selectElements.eq(i)).append(option)
      for(let j=0; j < response.data.length; j++) {
        option = $('<option/>').text(response.data[j].name).data('details', response.data[j])
        $(selectElements.eq(i)).append(option)
      }
    }
  }, function(error) {console.log(error)})

  DOCS.getQueryParameters(function(response) {
    let selectElements = $('select.query-parameters')
    for(let i = 0; i < selectElements.length; i++) {
      let option = $('<option/>').text('---')
      $(option).data('details', JSON.parse('{"id":"","name":"","type":"","text":""}'))
      $(selectElements.eq(i)).append(option)
      for(let j=0; j < response.data.length; j++) {
        option = $('<option/>').text(response.data[j].name).data('details', response.data[j])
        $(selectElements.eq(i)).append(option)
      }
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
    let selectElements = $('select.status-codes')
    for(let i = 0; i < selectElements.length; i++) {
      let option = $('<option/>').text('---')
      $(option).data('details', JSON.parse('{"code":"","text":""}'))
      $(selectElements.eq(i)).append(option)
      for(let j=0; j < response.data.length; j++) {
        option = $('<option/>').text(response.data[j].code).data('details', response.data[j])
        $(selectElements.eq(i)).append(option)
      }
    }
  }, function(error) {console.log(error)})
})
