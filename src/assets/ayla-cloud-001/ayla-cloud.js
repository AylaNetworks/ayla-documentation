var AYLA = {
  getApiv1Devices: function(server, accessToken, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices',
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DevicesDevId: function(server, accessToken, devId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + devId,
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DevicesDevIdProperties: function(server, accessToken, devId, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + devId + '/properties',
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DevicesDevIdPropertiesPropName: function(server, accessToken, devId, propName, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/devices/' + devId + '/properties/' + propName,
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  postApiv1DevicesDevIdPropertiesPropertyNameDatapoints: function(server, accessToken, devId, propName, requestData, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/apiv1/devices/' + devId + '/properties/' + propName + '/datapoints',
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getApiv1DsnsDsn: function(server, accessToken, dsn, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/apiv1/dsns/' + dsn,
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getUsersGetUserProfile: function(server, accessToken, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/users/get_user_profile',
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  postUsersRefreshToken: function(server, refreshToken, successCb=null, errorCb=null) {
    let user = {}
    user.refresh_token = refreshToken
    let requestData = {}
    requestData.user = user
    axios({
      method: 'post',
      url: server + '/users/refresh_token',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  postUsersSignIn: function(server, requestData, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/users/sign_in',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  postUsersSignOut: function(server, requestData, successCb=null, errorCb=null) {
    axios({
      method: 'post',
      url: server + '/users/sign_out',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(requestData)
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  getUsersUuid: function(server, accessToken, uuid, successCb=null, errorCb=null) {
    axios({
      method: 'get',
      url: server + '/users/' + uuid,
      headers: {
        'Authorization': 'auth_token ' + accessToken,
        'Accept': 'application/json'
      }
    })
    .then(function(response) {AYLA.callSuccessCb(response, successCb)})
    .catch(function(error) {AYLA.callErrorCb(error.response, errorCb)})
  },

  callSuccessCb: function(response, successCb) {if(successCb) {successCb(response)}},
  callErrorCb: function(response, errorCb) {if(errorCb) {errorCb(response)}}
}