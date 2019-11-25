/*------------------------------------------------------
On Click Get API ID Button
------------------------------------------------------*/

$(function () {
  $('#api-id-btn').click(function (event) {
    let apiId = $('#api-id-input').val()
    if (apiId) {
      DOCS.getApiV1ApisApiId(apiId, function (response) {
        console.log(JSON.stringify(response.data, null, 2))

        let api = response.data

        $('#api-service-select').val(api.service.toLowerCase().replace(' ', '-'))
        $('#api-method-select').val(api.method)
        $('#api-path-input').val(api.path)
        $('#api-name-input').val(api.name)
        $('#api-description-textarea').val(api.description)
        $('#api-request-description-textarea').val(api.request_description)

        let pathParameterDivs = $('#api-path-parameter-divs').find('div.api-path-parameter-div')
        for (let i = 0; i < pathParameterDivs.length; i++) {
          $(pathParameterDivs.eq(i)).find('select.parameters').val('')
          $(pathParameterDivs.eq(i)).find('input.type').val('')
          $(pathParameterDivs.eq(i)).find('input.description').val('')
          $(pathParameterDivs.eq(i)).find('input.description').attr('placeholder', '')
        }
        for (let i = 0; i < api.path_parameters.length; i++) {
          $(pathParameterDivs.eq(i)).find('select.parameters').val(api.path_parameters[i].name)
          $(pathParameterDivs.eq(i)).find('input.type').val(api.path_parameters[i].type)
          $(pathParameterDivs.eq(i)).find('input.description').val(api.path_parameters[i].alt_description)
          $(pathParameterDivs.eq(i)).find('input.description').attr('placeholder', api.path_parameters[i].description)
        }

        let queryParameterDivs = $('#api-query-parameter-divs').find('div.api-query-parameter-div')
        for (let i = 0; i < queryParameterDivs.length; i++) {
          $(queryParameterDivs.eq(i)).find('select.parameters').val('')
          $(queryParameterDivs.eq(i)).find('input.type').val('')
          $(queryParameterDivs.eq(i)).find('input.description').val('')
          $(queryParameterDivs.eq(i)).find('input.description').attr('placeholder', '')
        }
        for (let i = 0; i < api.query_parameters.length; i++) {
          $(queryParameterDivs.eq(i)).find('select.parameters').val(api.query_parameters[i].name)
          $(queryParameterDivs.eq(i)).find('input.type').val(api.query_parameters[i].type)
          $(queryParameterDivs.eq(i)).find('input.description').val(api.query_parameters[i].alt_description)
          $(queryParameterDivs.eq(i)).find('input.description').attr('placeholder', api.query_parameters[i].description)
        }

        if (api.request_data) { $('#api-request-data-textarea').val(JSON.stringify(api.request_data, null, 2)) }
        //$('#api-request-data-textarea').val(JSON.stringify(api.request_data, null, 2))
        $('#api-response-description-textarea').val(api.response_description)

        let statusCodeDivs = $('#api-status-code-divs').find('div.api-status-code-div')
        for (let i = 0; i < api.status_codes.length; i++) {
          $(statusCodeDivs.eq(i)).find('input.code').val(api.status_codes[i].code)
          $(statusCodeDivs.eq(i)).find('input.text').attr('placeholder', api.status_codes[i].text)
          $(statusCodeDivs.eq(i)).find('input.text').val(api.status_codes[i].alt_text)
        }

        $('#api-status-select').val(api.status)

      }, function (error) {
        console.log(JSON.stringify(error, null, 2))
      })
    } else {
      console.log('The appId field is empty.')
    }
  })
})

$(function() {
  $('select.parameters').change(function() {
    let option = $("option:selected", this)
    let details = $(option).data('details')
    let div = $(option).closest('div.api-path-parameter-div')
    if(details) {
      $(div).find('input.type').val(details.type)
      $(div).find('input.description').attr('placeholder', details.description)
    } else {
      $(div).find('input.type').val('')
      $(div).find('input.description').attr('placeholder', '')
    }
  })
})

/*
$(function() {
  $('div.api-query-parameter-div select.parameters').change(function() {
    let option = $("option:selected", this)
    let div = $(option).closest('div.api-query-parameter-div')
    $(div).find('input.type').val($(option).data('details').type)
    $(div).find('input.description').attr('placeholder', $(option).data('details').description)
  })
})
*/

/*------------------------------------------------------
On Load
------------------------------------------------------*/

$(function() {
  DOCS.getApiV1Parameters(function(response) {
    let parameters = response.data
    let selectElements = $('select.parameters')
    for(let i = 0; i < selectElements.length; i++) {
      for(let j=0; j < parameters.length; j++) {
        let option = $('<option/>')
        option.text(parameters[j].name)
        $(option).data('details', parameters[j])
        $(selectElements.eq(i)).append(option)
      }
    }
  }, function(error) {
    console.log(error)
  })
})
