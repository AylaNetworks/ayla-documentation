var DOCS = {
  getApiV1Apis: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/apis',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getApiV1ApisApiId: function(apiId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/apis/' + apiId,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {DOCS.callSuccessCb(response, successCb)})
    .catch(function(error) {DOCS.callErrorCb(error.response, errorCb)})
  },

  getApiV1Parameters: function(successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/parameters',
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
