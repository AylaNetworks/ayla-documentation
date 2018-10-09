//------------------------------------------------------
// Headers must be initial cap for Ayla.
// Axios response headers are lowercase.
// I am trusting that the error.response.status and error.response.statustext always exist.
//------------------------------------------------------

var AylaDssCollector = {

  //------------------------------------------------------
  // 
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
      url: 'https://docs.aylanetworks.com/dss/session',
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
  // 
  //------------------------------------------------------

  logout: function(authToken, success=successCb, failure=failureCb) {
    var data = {'user': {'access_token': authToken}}
    axios({
      method: 'delete',
      url: 'https://docs.aylanetworks.com/dss/session',
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
  // 
  //------------------------------------------------------

  subscribe: function(data, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'post',
      url: 'https://docs.aylanetworks.com/dss/subscriptions',
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
  // 
  //------------------------------------------------------

  unsubscribe: function(subscriptionType, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'delete',
      url: 'https://docs.aylanetworks.com/dss/subscriptions/' + subscriptionType,
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // 
  //------------------------------------------------------

  getSubscriptions: function(authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/dss/subscriptions',
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Accept': 'application/json'
      }
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
