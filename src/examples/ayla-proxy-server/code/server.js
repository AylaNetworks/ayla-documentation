//------------------------------------------------------
// Ayla Proxy Server
//------------------------------------------------------

const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json())

//------------------------------------------------------
// /api/v1/session
//------------------------------------------------------

app.route('/api/v1/session')

  .post(function (req, res) {
    console.log('login')

    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/users/sign_in',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.statusText)})
  })

  .delete(function (req, res) {
    console.log('logout')

    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/users/sign_out',
      headers: {
        'Authorization': 'auth_token ' + authToken(req),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.statusText)})
  })

//------------------------------------------------------
// /api/v1/devices
//------------------------------------------------------

app.route('/api/v1/devices')

  .get(function (req, res) {
    console.log('getDevices')

    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/apiv1/devices',
      headers: {
        'Authorization': 'auth_token ' + authToken(req),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.statusText)})
  })

//------------------------------------------------------
// /api/v1/devices/:deviceId
//------------------------------------------------------

app.route('/api/v1/devices/:deviceId')

  .get(function (req, res) {
    console.log('getDevice')

    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/apiv1/devices/' + urlStr(req, 1),
      headers: {
        'Authorization': 'auth_token ' + authToken(req),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.statusText)})
  })

//------------------------------------------------------
// /api/v1/devices/:deviceId/properties
//------------------------------------------------------

app.route('/api/v1/devices/:deviceId/properties')

  .get(function (req, res) {
    console.log('getProperties')

    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/apiv1/devices/' + urlStr(req, 2) + '/properties',
      headers: {
        'Authorization': 'auth_token ' + authToken(req),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.statusText)})
  })

//------------------------------------------------------
// /api/v1/properties/:propertyId
//------------------------------------------------------

app.route('/api/v1/properties/:propertyId')

  .get(function (req, res) {
    console.log('getProperty')

    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/apiv1/properties/' + urlStr(req, 1),
      headers: {
        'Authorization': 'auth_token ' + authToken(req),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.statusText)})
  })

//------------------------------------------------------
// /api/v1/properties/:propertyId/datapoints
//------------------------------------------------------

app.route('/api/v1/properties/:propertyId/datapoints')

  .post(function (req, res) {
    console.log('createDatapoint')

    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/apiv1/properties/' + urlStr(req, 2) + '/datapoints',
      headers: {
        'Authorization': 'auth_token ' + authToken(req),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.statusText)})
  })

//------------------------------------------------------
// /api/v1/dss/subscriptions
//------------------------------------------------------

app.route('/api/v1/dss/subscriptions')

  .post(function (req, res) {
    console.log('createDssSubscription')

    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions.json',
      headers: {
        'Authorization': 'auth_token ' + authToken(req),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.statusText)})
  })

//------------------------------------------------------
// authToken
//------------------------------------------------------

function authToken(req) {
  const fields = req.headers.authorization.split(' ')
  return fields[fields.length-1]
}

//------------------------------------------------------
// urlStr
//------------------------------------------------------

function urlStr(req, index) {
  const fields = req.url.split('/')
  return fields[fields.length-index]
}

//------------------------------------------------------
// Start your engine
//------------------------------------------------------

app.listen(8080)
console.log('Running server')
