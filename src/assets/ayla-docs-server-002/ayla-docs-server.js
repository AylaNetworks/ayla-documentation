var adserver = window.location.origin

var DOCS = {

  getApis: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/apis',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getPublishedApis: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/apis?published=1',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getApisWhereServiceIdStatusId: function(serviceId, statusId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/apis?service=' + serviceId + '&status=' + statusId,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getApisWhereStatusId: function(statusId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/apis?status=' + statusId,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  postApi: function(requestData, accessToken, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: adserver + '/api/v1/adms/apis',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getApi: function(apiId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/apis/' + apiId,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiDescription: function(apiId, description, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.description = description
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/description',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiMethod: function(apiId, methodId, accessToken, successCb=null, errorCb=null) {
    let method = {}
    method.id = methodId
    let requestData = {}
    requestData.method = method
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/method',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiName: function(apiId, name, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.name = name
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/name',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiNotes: function(apiId, notes, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.notes = notes
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/notes',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiPath: function(apiId, path, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.path = path
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/path',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiPathParameters: function(apiId, requestData, accessToken, successCb=null, errorCb=null) {
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/path-parameters',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiPathParametersDescription: function(apiId, pathParametersDescription, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.pathParametersDescription = pathParametersDescription
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/path-parameters-description',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiPublished: function(apiId, published, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.published = published
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/published',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiQueryParameters: function(apiId, requestData, accessToken, successCb=null, errorCb=null) {
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/query-parameters',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiQueryParametersDescription: function(apiId, queryParametersDescription, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.queryParametersDescription = queryParametersDescription
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/query-parameters-description',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiRequestData: function(apiId, requestDataIn, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.requestData = requestDataIn
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/request-data',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiRequestDataDescription: function(apiId, requestDataDescription, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.requestDataDescription = requestDataDescription
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/request-data-description',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiRequestDescription: function(apiId, requestDescription, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.requestDescription = requestDescription
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/request-description',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiResponseDataDescription: function(apiId, responseDataDescription, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.responseDataDescription = responseDataDescription
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/response-data-description',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiResponseDescription: function(apiId, responseDescription, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.responseDescription = responseDescription
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/response-description',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiService: function(apiId, serviceId, accessToken, successCb=null, errorCb=null) {
    let service = {}
    service.id = serviceId
    let requestData = {}
    requestData.service = service
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/service',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiStatus: function(apiId, statusId, accessToken, successCb=null, errorCb=null) {
    let status = {}
    status.id = statusId
    let requestData = {}
    requestData.status = status
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/status',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  postApiStatusCode: function(apiId, statusCode, customText, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.customText = customText
    axios({
      method: 'post',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/status-codes/' + statusCode,
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiStatusCode: function(apiId, statusCode, customText, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.customText = customText
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/status-codes/' + statusCode,
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  deleteApiStatusCode: function(apiId, statusCode, accessToken, successCb=null, errorCb=null) {
    axios({
      method: 'delete',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/status-codes/' + statusCode,
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiStatusCodes: function(apiId, requestData, accessToken, successCb=null, errorCb=null) {
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/status-codes',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiStatusCodesDescription: function(apiId, statusCodesDescription, accessToken, successCb=null, errorCb=null) {
    let requestData = {}
    requestData.statusCodesDescription = statusCodesDescription
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/status-codes-description',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  putApiTags: function(apiId, requestData, accessToken, successCb=null, errorCb=null) {
    axios({
      method: 'put',
      url: adserver + '/api/v1/adms/apis/' + apiId + '/tags',
      headers: {
        'Authorization': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getFieldByName: function(name, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/fields/' + name,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getMethods: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/methods',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getPaths: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/paths',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getPathParameters: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/path-parameters',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getQueryParameters: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/query-parameters',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getServices: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/services',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getStatuses: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/statuses',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getStatusCodes: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/status-codes',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getTags: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: adserver + '/api/v1/adms/tags',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  callSuccessCb: function(response, successCb) {if(successCb) {successCb(response)}},
  callErrorCb: function(response, errorCb) {if(errorCb) {errorCb(response)}}
}
