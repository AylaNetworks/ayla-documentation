var AylaProxyServer = {

//------------------------------------------------------
// login
//------------------------------------------------------

login: function(email, password, success=defCb, failure=defCb) {
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
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// logout
//------------------------------------------------------

logout: function(success=defCb, failure=defCb) {

  var data = {
    'user': {
      'access_token': Cookies.get('access_token')
    }
  }

  axios({
    method: 'delete',
    url: 'https://docs.aylanetworks.com/api/v1/session',
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token'),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// getDevices
//------------------------------------------------------

getDevices: function(success=defCb, failure=defCb) {
  axios({
    method: 'get',
    url: 'https://docs.aylanetworks.com/api/v1/devices',
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token'),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// createDevice
//------------------------------------------------------

createDevice: function(dsn, url, success=defCb, failure=defCb) {

  var data = {"device":{"dsn": dsn}}

  axios({
    method: 'post',
    url: 'https://docs.aylanetworks.com/api/v1/devices',
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token'),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success(response.data, url)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// getDevice
//------------------------------------------------------

getDevice: function(deviceId, success=defCb, failure=defCb) {
  axios({
    method: 'get',
    url: 'https://docs.aylanetworks.com/api/v1/devices/' + deviceId,
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token'),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// deleteDevice
//------------------------------------------------------

deleteDevice: function(deviceId, success=defCb, failure=defCb) {
  axios({
    method: 'delete',
    url: 'https://docs.aylanetworks.com/api/v1/devices/' + deviceId,
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token')
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// getProperties
//------------------------------------------------------

getProperties: function(deviceId, success=defCb, failure=defCb) {
  axios({
    method: 'get',
    url: 'https://docs.aylanetworks.com/api/v1/devices/' + deviceId + '/properties',
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token'),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// getProperty
//------------------------------------------------------

getProperty: function(propertyId, success=defCb, failure=defCb) {
  axios({
    method: 'get',
    url: 'https://docs.aylanetworks.com/api/v1/properties/' + propertyId,
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token'),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// createDatapoint
//------------------------------------------------------

createDatapoint: function(propertyId, value, success=defCb, failure=defCb) {

  var data = {
    'datapoint': {
      'value': value,
      'metadata': {
        'key1': '',
        'key2': ''
      }
    }
  }

  axios({
    method: 'post',
    url: 'https://docs.aylanetworks.com/api/v1/properties/' + propertyId + '/datapoints',
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token'),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// createDssSubscription
//------------------------------------------------------

createDssSubscription: function(data, url, success=defCb, failure=defCb) {
  axios({
    method: 'post',
    url: 'https://docs.aylanetworks.com/api/v1/dss/subscriptions',
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token'),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success(response.data, url)})
  .catch(function (error) {failure(error.response.data)})
},

//------------------------------------------------------
// deleteDssSubscription
//------------------------------------------------------

deleteDssSubscription: function(subscriptionId, success=defCb, failure=defCb) {
  axios({
    method: 'delete',
    url: 'https://docs.aylanetworks.com/api/v1/dss/subscriptions' + subscriptionId,
    headers: {
      'Authorization': 'auth_token ' + Cookies.get('access_token')
    }
  })
  .then(function (response) {success(response.data)})
  .catch(function (error) {failure(error.response.data)})
}

};

//------------------------------------------------------
// defCb
//------------------------------------------------------

let defCb = function(response) {
  console.log(JSON.stringify(response, null, 2))
}
