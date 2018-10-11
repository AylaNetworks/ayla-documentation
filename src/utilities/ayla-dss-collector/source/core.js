
const axios = require('axios')
const EventStream = require('./event-stream')
const processEvents = require('./process-events')
const core = require('./core')

exports.eventStreams = {}

exports.eventStreamKeyFilter = ['stream_id','name','subscription','id','oem','dsn','name','description','property_name',
'connection_status','batch_size','is_suspended','created_at','updated_at','date_suspended','user_uuid','oem_model',
'stream_key','client_type','subscription_type','persistence','json','csv','relational','service_url','state']

//------------------------------------------------------
// login
//------------------------------------------------------

exports.login = function(email, password, definitions) {
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
    url: 'https://user-dev.aylanetworks.com/users/sign_in',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {
    core.createEventStreams(response.data.access_token, definitions)
  })
  .catch(function (error) {
    console.log(error)
  })
}

//------------------------------------------------------
// createEventStreams
//------------------------------------------------------

exports.createEventStreams = function(authToken, definitions) {
  definitions.forEach(function(definition) {
    core.createEventStream(authToken, definition)
  })
}

//------------------------------------------------------
// createEventStream
//------------------------------------------------------

exports.createEventStream = function(authToken, definition) {

  if(!definition.event_stream_name) {
    definition.event_stream_name = new Date().toISOString() + ' ' + definition.subscription_type
  }

  var data = {
    "oem_model": definition.oem_model,
    "client_type": definition.client_type,
    "subscription_type": definition.subscription_type,
    "property_name": definition.property_name
  }
  axios({
    method: 'post',
    url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions.json',
    headers: {
      'Authorization': 'auth_token ' + authToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify(data)
  })
  .then(function (response) {

    let streamId = response.data.subscription.id

    core.eventStreams[streamId] = new EventStream(
      definition.event_stream_name,
      response.data.subscription, 
      definition.persistence,
      definition.service_url,
      definition.state,
      processEvents)
    console.log('Created event stream: ' + core.eventStreams[streamId].name + '. Count is ' + Object.keys(core.eventStreams).length)

    core.eventStreams[streamId].open()
  })
  .catch(function (error) {
    console.log(error)
  })
}
