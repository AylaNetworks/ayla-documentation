'use strict'

const express = require('express')
const axios = require('axios')

const domain = 'https://user-dev.aylanetworks.com'
const streamDomain = 'https://stream.aylanetworks.com'

/*------------------------------------------------------
createDatapoint
------------------------------------------------------*/

exports.createDatapoint = function(req, res) {
  axios({
    method: 'post',
    url: domain + '/apiv1/properties/' + urlStr(req, 2) + '/datapoints',
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

/*------------------------------------------------------
deleteDevice
------------------------------------------------------*/

exports.deleteDevice = function(req, res) {
  axios({
    method: 'delete',
    url: domain + '/apiv1/devices/' + urlStr(req, 1),
    headers: req.headers
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

/*------------------------------------------------------
dssCreateSubscription
------------------------------------------------------*/

exports.dssCreateSubscription = function(req, res) {
  axios({
    method: 'post',
    url: streamDomain + '/api/v1/subscriptions.json',
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

/*------------------------------------------------------
dssDeleteConnection
------------------------------------------------------*/

exports.dssDeleteConnection = function(req, res) {
  axios({
    method: 'delete',
    url: req.body.url + '?stream_key=' + req.body.streamKey
  })
  .then(function (response) {
    res.statusCode = response.status
    res.end()
  })
  .catch(function (error) {
    if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
    res.end()
  })
}

/*------------------------------------------------------
dssDeleteSubscription
------------------------------------------------------*/

exports.dssDeleteSubscription = function(req, res) {
  axios({
    method: 'delete',
    url: streamDomain + '/api/v1/subscriptions/' + urlStr(req, 1) + '.json',
    headers: {'Authorization': req.headers.authorization}
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

/*------------------------------------------------------
dssGetSubscription
------------------------------------------------------*/

exports.dssGetSubscription = function(req, res) {
  axios({
    method: 'get',
    url: streamDomain + '/api/v1/subscriptions/' + urlStr(req, 1) + '.json',
    headers: {'Authorization': req.headers.authorization}
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

/*------------------------------------------------------
dssGetSubscriptions
------------------------------------------------------*/

exports.dssGetSubscriptions = function(req, res) {
  axios({
    method: 'get',
    url: streamDomain + '/api/v1/subscriptions.json',
    headers: req.headers
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

/*------------------------------------------------------
getDevice
------------------------------------------------------*/

exports.getDevice = function(req, res) {
  axios({
    method: 'get',
    url: domain + '/apiv1/devices/' + urlStr(req, 1),
    headers: req.headers
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

/*------------------------------------------------------
getDevices
------------------------------------------------------*/

exports.getDevices = function(req, res) {
  axios({
    method: 'get',
    url: domain + '/apiv1/devices',
    headers: req.headers
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

/*------------------------------------------------------
getProperties
------------------------------------------------------*/

exports.getProperties = function(req, res) {
  axios({
    method: 'get',
    url: domain + '/apiv1/devices/' + urlStr(req, 2) + '/properties',
    headers: req.headers
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

/*------------------------------------------------------
getProperty
------------------------------------------------------*/

exports.getProperty = function(req, res) {
  axios({
    method: 'get',
    url: domain + '/apiv1/properties/' + urlStr(req, 1),
    headers: req.headers
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

/*------------------------------------------------------
login
------------------------------------------------------*/

exports.login = function(req, res) {
  axios({
    method: 'post',
    url: domain + '/users/sign_in',
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

/*------------------------------------------------------
logout
------------------------------------------------------*/

exports.logout = function(req, res) {
  axios({
    method: 'post',
    url: domain + '/users/sign_out',
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

/*------------------------------------------------------
updateDevice
------------------------------------------------------*/

exports.updateDevice = function(req, res) {
  axios({
    method: 'put',
    url: domain + '/apiv1/devices/' + urlStr(req, 1),
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

/*------------------------------------------------------

------------------------------------------------------*/

function urlStr(req, index) {
  const fields = req.url.split('/')
  return fields[fields.length-index]
}
