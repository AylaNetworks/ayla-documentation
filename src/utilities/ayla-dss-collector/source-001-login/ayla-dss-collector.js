var AylaDssCollector = {

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
  // logout
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
  // createEventStream
  //------------------------------------------------------

  createEventStream: function(data, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'post',
      url: 'https://docs.aylanetworks.com/dss/eventstreams',
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
  // getEventStream
  //------------------------------------------------------

  //------------------------------------------------------
  // getEventStreams
  //------------------------------------------------------

  getEventStreams: function(authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'get',
      url: 'https://docs.aylanetworks.com/dss/eventstreams',
      headers: {
        'Authorization': 'auth_token ' + authToken,
        'Accept': 'application/json'
      }
    })
    .then(function (response) {success(response.data)})
    .catch(function (error) {failure(error.response.status, error.response.statusText)})
  },

  //------------------------------------------------------
  // openEventStream
  //------------------------------------------------------

  openEventStream: function(streamId, authToken, success=successCb, failure=failureCb) {
    var data = {'action': 'open'}
    AylaDssCollector.modifyEventStream(data, streamId, authToken, success, failure)
  },

  //------------------------------------------------------
  // closeEventStream
  //------------------------------------------------------

  closeEventStream: function(streamId, authToken, success=successCb, failure=failureCb) {
    var data = {'action': 'close'}
    AylaDssCollector.modifyEventStream(data, streamId, authToken, success, failure)
  },

  //------------------------------------------------------
  // modifyEventStream
  //------------------------------------------------------

  modifyEventStream: function(data, streamId, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'patch',
      url: 'https://docs.aylanetworks.com/dss/eventstreams/' + streamId,
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
  // deleteEventStream
  //------------------------------------------------------

  deleteEventStream: function(streamId, authToken, success=successCb, failure=failureCb) {
    axios({
      method: 'delete',
      url: 'https://docs.aylanetworks.com/dss/eventstreams/' + streamId,
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
