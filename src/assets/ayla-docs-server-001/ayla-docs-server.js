var DOCS = {

  getApis: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getApi: function(apiId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId,
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId + '/description',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId + '/method',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId + '/name',
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

  putApiPath: function(apiId, text, accessToken, successCb=null, errorCb=null) {
    let path = {}
    path.text = text
    let requestData = {}
    requestData.path = path
    axios({
      method: 'put',
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId + '/path',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId + '/request-description',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId + '/response-description',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId + '/service',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/apis/' + apiId + '/status',
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

  getMethods: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/aca/methods',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/paths',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/path-parameters',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/query-parameters',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/services',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/statuses',
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
      url: 'https://docs.aylanetworks.com/api/v1/aca/status-codes',
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
