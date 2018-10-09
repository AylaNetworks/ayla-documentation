//------------------------------------------------------
// Ayla Proxy Server
//------------------------------------------------------

const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const appName = 'Ayla Proxy Server'

//------------------------------------------------------
// /api/v1/session
//------------------------------------------------------

app.route('/api/v1/session')

  //----------------------------------------------------
  // Login
  //----------------------------------------------------

  .post(function (req, res) {
    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/users/sign_in',
      headers: req.headers,
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

  //----------------------------------------------------
  // Logout
  //----------------------------------------------------

  .delete(function (req, res) {
    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/users/sign_out',
      headers: req.headers,
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

//------------------------------------------------------
// /api/v1/devices
//------------------------------------------------------

app.route('/api/v1/devices')

  //----------------------------------------------------
  // Get Devices
  //----------------------------------------------------

  .get(function (req, res) {
    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/apiv1/devices',
      headers: req.headers
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

  //----------------------------------------------------
  // Create Device
  //----------------------------------------------------

  .post(function (req, res) {
    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/apiv1/devices',
      headers: req.headers,
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

//------------------------------------------------------
// /api/v1/devices/:deviceId
//------------------------------------------------------

app.route('/api/v1/devices/:deviceId')

  //----------------------------------------------------
  // Get Device
  //----------------------------------------------------

  .get(function (req, res) {
    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/apiv1/devices/' + urlStr(req, 1),
      headers: req.headers
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

  //----------------------------------------------------
  // Delete Device
  //----------------------------------------------------

  .delete(function (req, res) {
    axios({
      method: 'delete',
      url: 'https://user-dev.aylanetworks.com/apiv1/devices/' + urlStr(req, 1),
      headers: req.headers
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

//------------------------------------------------------
// /api/v1/devices/:deviceId/properties
//------------------------------------------------------

app.route('/api/v1/devices/:deviceId/properties')

  //----------------------------------------------------
  // Get Properties
  //----------------------------------------------------

  .get(function (req, res) {
    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/apiv1/devices/' + urlStr(req, 2) + '/properties',
      headers: req.headers
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

//------------------------------------------------------
// /api/v1/properties/:propertyId
//------------------------------------------------------

app.route('/api/v1/properties/:propertyId')

  //----------------------------------------------------
  // Get Property
  //----------------------------------------------------

  .get(function (req, res) {
    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/apiv1/properties/' + urlStr(req, 1),
      headers: req.headers
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

//------------------------------------------------------
// /api/v1/properties/:propertyId/datapoints
//------------------------------------------------------

app.route('/api/v1/properties/:propertyId/datapoints')

  //----------------------------------------------------
  // Create Datapoint
  //----------------------------------------------------

  .post(function (req, res) {
    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/apiv1/properties/' + urlStr(req, 2) + '/datapoints',
      headers: req.headers,
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

//------------------------------------------------------
// /api/v1/dss/subscriptions
//------------------------------------------------------

app.route('/api/v1/dss/subscriptions')

  //----------------------------------------------------
  // Create DSS Subscription
  //----------------------------------------------------

  .post(function (req, res) {
    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions.json',
      headers: req.headers,
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

//------------------------------------------------------
// /api/v1/dss/subscriptions
//------------------------------------------------------

app.route('/api/v1/dss/subscriptions/:subscriptionId')

  //----------------------------------------------------
  // Delete DSS Subscription
  //----------------------------------------------------

  .delete(function (req, res) {
    axios({
      method: 'delete',
      url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions/' + urlStr(req, 1) + '.json',
      headers: req.headers
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {res.send(error.response.data)})
  })

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
console.log('Running ' + appName)
