'use strict';

const express = require('express')
const axios = require('axios')
const EventStream = require('./stream')
const processEvents = require('./process-events')
const core = require('./core')

//------------------------------------------------------
// 
//------------------------------------------------------

exports.login = function(req, res) {
  axios({
    method: 'post',
    url: 'https://user-dev.aylanetworks.com/users/sign_in',
    headers: req.headers,
    data: JSON.stringify(req.body)
  })
  .then(function (response) {
    res.statusCode = response.status
    res.send(response.data)
  })
  .catch(function (error) {
    if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
    res.end()
  })
}

//------------------------------------------------------
// 
//------------------------------------------------------

exports.logout = function(req, res) {
  axios({
    method: 'post',
    url: 'https://user-dev.aylanetworks.com/users/sign_out',
    headers: req.headers,
    data: JSON.stringify(req.body)
  })
  .then(function (response) {
    res.statusCode = response.status
    res.send(response.data)
  })
  .catch(function (error) {
    if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
    res.end()
  })
}

//------------------------------------------------------
// 
//------------------------------------------------------

exports.getEventStreams = function(req, res) {
  axios({
    method: 'get',
    url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions',
    headers: req.headers
  })
  .then(function (response) {
    let results = []
    for(let i=0; i<response.data.length; i++) {
      for(var key in core.eventStreams) {
        if(core.eventStreams[key].stream_id === response.data[i].subscription.id) {
          results.push(JSON.parse(JSON.stringify(core.eventStreams[key], core.eventStreamKeyFilter)))
        }
      }
    }
    res.statusCode = response.status
    res.send(results)
  })
  .catch(function (error) {
    if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
    res.end()
  })
}

//------------------------------------------------------
// 
//------------------------------------------------------

exports.createEventStream = function(req, res) {
  var data = {
    "oem_model": req.body.oem_model,
    "client_type": req.body.client_type,
    "subscription_type": req.body.subscription_type,
    "property_name": req.body.property_name
  }
  axios({
    method: 'post',
    url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions.json',
    headers: req.headers,
    data: JSON.stringify(data)
  })
  .then(function (response) {

    let streamId = response.data.subscription.id

    core.eventStreams[streamId] = new EventStream(
      req.body.event_stream_name,
      response.data.subscription, 
      {"json": "true","csv": "true","relational": "true"},
      req.body.service_url,
      req.body.state,
      processEvents)
    console.log('Created event stream: ' + core.eventStreams[streamId].name + '. Count is ' + Object.keys(core.eventStreams).length)

    if(req.body.state === 'open') {
      core.eventStreams[streamId].open()
    }

    res.statusCode = response.status
    res.send(JSON.parse(JSON.stringify(core.eventStreams[streamId], core.eventStreamKeyFilter)))
  })
  .catch(function (error) {
    if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
    res.end()
  })
}

//------------------------------------------------------
// 
//------------------------------------------------------

exports.getEventStream = function(req, res) {
}

//------------------------------------------------------
// 
//------------------------------------------------------

exports.modifyEventStream = function(req, res) {
  const streamId = urlStr(req, 1)

  if(req.body.action == 'open') {
    core.eventStreams[streamId].open()
    res.statusCode = 200
    res.send(req.body)
  } else if(req.body.action == 'close') {
    /*
    axios({
      method: 'delete',
      url: 'https://user-dev.aylanetworks.com/api/v1/stream?' + core.eventStreams[streamId].subscription.stream_key,
      headers: {'Authorization': req.headers.authorization}
    })
    .then(function (response) {
      console.log('Event Stream count is ' + Object.keys(core.eventStreams).length)
      core.eventStreams[streamId].close(1000, 'Closing socket per request from user.')
      console.log('Event Stream count is ' + Object.keys(core.eventStreams).length)
      res.statusCode = 200
      res.send(req.body)
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
      res.end()
    })
    */
    res.statusCode = 200
    res.send(req.body)
  }
}

//------------------------------------------------------
// 
//------------------------------------------------------

exports.deleteEventStream = function(req, res) {
  const streamId = urlStr(req, 1)

  if(core.eventStreams[streamId] == null) {
    res.statusCode = 401
    res.end()
  } else {
    axios({
      method: 'delete',
      url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions/' + streamId + '.json',
      headers: {'Authorization': req.headers.authorization}
    })
    .then(function (response) {
      var data = core.eventStreams[streamId]
      core.eventStreams[streamId].close(1000, '')
      let name = core.eventStreams[streamId].name
      delete core.eventStreams[streamId]
      console.log('Closed and deleted event stream: ' + name + '. Count is ' + Object.keys(core.eventStreams).length)
      res.statusCode = response.status
      res.send(JSON.parse(JSON.stringify(data, core.eventStreamKeyFilter)))
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
      res.end()
    })
  }
}

//------------------------------------------------------
// 
//------------------------------------------------------

function urlStr(req, index) {
  const fields = req.url.split('/')
  return fields[fields.length-index]
}
