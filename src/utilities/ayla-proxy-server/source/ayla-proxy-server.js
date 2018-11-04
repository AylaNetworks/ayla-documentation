var MyAyla = {

/*------------------------------------------------------
createDatapoint
------------------------------------------------------*/

createDatapoint: function(propertyId, value, successCb=null, errorCb=null) {
  let data = {
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
    url: domain + '/api/v1/properties/' + propertyId + '/datapoints',
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {callSuccessCb(response, successCb)})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
createSubscription

Request
{
  "oem_model": "*",
  "client_type": "mobile",
  "subscription_type": "datapoint",
  "property_name": "*"
}

Response
{
  "subscription": {
    "id": 149818,
    "oem": "0dfc7900",
    "dsn": "AC000W000340779,AC000W005606115",
    "name": null,
    "description": null,
    "property_name": "*",
    "connection_status": "Offline",
    "batch_size": 1,
    "is_suspended": false,
    "created_at": "2018-10-04T13:04:32Z",
    "updated_at": "2018-10-04T13:04:32Z",
    "date_suspended": null,
    "user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40",
    "oem_model": "*",
    "stream_key": "234af7d24c996857b09a9637ebece795",
    "client_type": "mobile",
    "subscription_type": "datapoint"
  }
}
------------------------------------------------------*/

createSubscription: function(data, successCb=null, errorCb=null) {
  axios({
    method: 'post',
    url: domain + '/api/v1/dss/subscriptions',
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {callSuccessCb(response, successCb)})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
deleteConnection

Request

Response
------------------------------------------------------*/

deleteConnection: function(url, streamKey, successCb=null, errorCb=null) {
  let data = {
    'url': url,
    'streamkey': streamKey
  }
  axios({
    method: 'delete',
    url: domain + '/api/v1/dss/streams',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {success({})})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
deleteSubscription

Request

Response
------------------------------------------------------*/

deleteSubscription: function(subscriptionId, successCb=null, errorCb=null) {
  axios({
    method: 'delete',
    url: domain + '/api/v1/dss/subscriptions/' + subscriptionId,
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {callSuccessCb(response, successCb)})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
getSubscription

Request

Response
------------------------------------------------------*/

getSubscription: function(subscriptionId, successCb=null, errorCb=null) {
  axios({
    method: 'get',
    url: domain + '/api/v1/dss/subscriptions/' + subscriptionId,
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {callSuccessCb(response, successCb)})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
getSubscriptions

Request

Response
------------------------------------------------------*/

getSubscriptions: function(successCb=null, errorCb=null) {
  axios({
    method: 'get',
    url: domain + '/api/v1/dss/subscriptions',
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {callSuccessCb(response, successCb)})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
getAppId
------------------------------------------------------*/

getAppId: function() {
  return Cookies.get('app_id')
},

/*------------------------------------------------------
getAppSecret
------------------------------------------------------*/

getAppSecret: function() {
  return Cookies.get('app_secret')
},

/*------------------------------------------------------
getDevice
------------------------------------------------------*/

getDevice: function(deviceId, successCb=null, errorCb=null) {
  axios({
    method: 'get',
    url: domain + '/api/v1/devices/' + deviceId,
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {callSuccessCb(response, successCb)})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
getDevices
------------------------------------------------------*/

getDevices: function(successCb=null, errorCb=null) {
  axios({
    method: 'get',
    url: domain + '/api/v1/devices',
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {callSuccessCb(response, successCb)})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
getProperties
------------------------------------------------------*/

getProperties: function(deviceId, successCb=null, errorCb=null) {
  axios({
    method: 'get',
    url: domain + '/api/v1/devices/' + deviceId + '/properties',
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Accept': 'application/json'
    }
  })
  .then(function (response) {callSuccessCb(response, successCb)})
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
getProperty
------------------------------------------------------*/

getProperty: function(successCb=null, errorCb=null) {
},

/*------------------------------------------------------
isLoggedIn
------------------------------------------------------*/

isLoggedIn: function() {
  return getAuthToken() ? true : false
},

/*------------------------------------------------------
login
------------------------------------------------------*/

login: function(email, password, appId, appSecret, successCb=null, errorCb=null) {
  var data = {
    'user': {
      'email': email,
      'password': password,
      'application': {
        'app_id': appId,
        'app_secret': appSecret
      }
    }
  }
  axios({
    method: 'post',
    url: domain + '/api/v1/session',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {
    saveAuthToken(response.data.access_token)
    saveAppId(appId)
    saveAppSecret(appSecret)
    callSuccessCb(response, successCb)
  })
  .catch(function (error) {callErrorCb(error, errorCb)})
},

/*------------------------------------------------------
logout
------------------------------------------------------*/

logout: function(successCb=null, errorCb=null) {
  var data = {'user': {'access_token': getAuthToken()}}
  axios({
    method: 'delete',
    url: domain + '/api/v1/session',
    headers: {
      'Authorization': 'auth_token ' + getAuthToken(),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {
    deleteAuthToken()
    callSuccessCb(response, successCb)
  })
  .catch(function (error) {callErrorCb(error, errorCb)})
}

}

/*------------------------------------------------------
callSuccessCb
------------------------------------------------------*/

function callSuccessCb(response, successCb) {
  if(successCb) {
    successCb(response.data)
  }
}

/*------------------------------------------------------
callErrorCb
------------------------------------------------------*/

function callErrorCb(error, errorCb) {
  if(errorCb) {
    if(error.response && error.response.statusText) {
      errorCb({"code": error.response.status, "text": error.response.statusText})
    } else {
      errorCb({"code": 520, "text": error})
    }
  }
}

/*------------------------------------------------------
saveAuthToken
------------------------------------------------------*/

function saveAuthToken(authToken) {
  var date = new Date()
  date.setMonth(date.getMonth() + 10)
  var expires = date.toUTCString()
  Cookies.set('auth_token', authToken, {expires: 7})
}

/*------------------------------------------------------
getAuthToken
------------------------------------------------------*/

function getAuthToken() {
  return Cookies.get('auth_token')
}

/*------------------------------------------------------
deleteAuthToken
------------------------------------------------------*/

function deleteAuthToken() {
  Cookies.remove('auth_token')
}

/*------------------------------------------------------
saveAppId
------------------------------------------------------*/

function saveAppId(appId) {
  var date = new Date()
  date.setMonth(date.getMonth() + 10)
  var expires = date.toUTCString()
  Cookies.set('app_id', appId, {expires: 7})
}

/*------------------------------------------------------
saveAppSecret
------------------------------------------------------*/

function saveAppSecret(appSecret) {
  var date = new Date()
  date.setMonth(date.getMonth() + 10)
  var expires = date.toUTCString()
  Cookies.set('app_secret', appSecret, {expires: 7})
}
