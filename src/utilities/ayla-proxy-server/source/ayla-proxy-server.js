var AylaProxyServer = {

  //------------------------------------------------------
  // createDatapoint
  //------------------------------------------------------

  createDatapoint: function(propertyId, value, authToken, success=successCb, failure=failureCb) {
    let data = {
      "datapoint": {
        "value": value,
        "metadata": {
          "key1": "",
          "key2": ""
        }
      }
    }
    axios({
      method: 'post',
      url: 'https://docs.aylanetworks.com/api/v1/properties/' + propertyId + '/datapoints',
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: JSON.stringify(data)
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})

  },

  //------------------------------------------------------
  // createDssSubscription
  //------------------------------------------------------

  createDssSubscription: function(data, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'post',
      url: 'https://docs.aylanetworks.com/api/v1/dss/subscriptions',
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: JSON.stringify(data)
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // deleteDssSubscription
  //------------------------------------------------------

  deleteDssSubscription: function(subscriptionId, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'delete',
      url: 'https://docs.aylanetworks.com/api/v1/dss/subscriptions/' + subscriptionId,
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // getDevice
  //------------------------------------------------------

  getDevice: function(deviceId, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/devices/' + deviceId,
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // getDevices
  //------------------------------------------------------

  getDevices: function(authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/devices',
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // getDssSubscriptions
  //------------------------------------------------------

  getDssSubscriptions: function(authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/dss/subscriptions',
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // getProperties
  //------------------------------------------------------

  getProperties: function(deviceId, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/api/v1/devices/' + deviceId + '/properties',
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // getProperty
  //------------------------------------------------------

  getProperty: function(authToken, success=successCb, failure=failureCb) {
  },

  //------------------------------------------------------
  // login
  //------------------------------------------------------

  login: function(email, password, success=successCb, failure=failureCb) {
    var data = {
      'user': {
        'email': email,
        'password': password,
        'application': {
          'app_id': 'alya-api-browser-id',
          'app_secret': 'alya-api-browser-2tFsUL41FELUlyfrSMEZ4kNKwJg'
        }
      }
    }
    axios({
      method: 'post',
      url: 'https://docs.aylanetworks.com/api/v1/session',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: JSON.stringify(data)
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // logout
  //------------------------------------------------------

  logout: function(authToken, success=successCb, failure=failureCb) {
    var data = {'user': {'access_token': authToken}}
    axios({
      method: 'delete',
      url: 'https://docs.aylanetworks.com/api/v1/session',
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: JSON.stringify(data)
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  }

};

//------------------------------------------------------
// 
//------------------------------------------------------

let successCb = function(data) {console.log(JSON.stringify(data, null, 2))}
let failureCb = function(statusCode, statusText) {console.log(statusCode + ' ' + statusText)}
