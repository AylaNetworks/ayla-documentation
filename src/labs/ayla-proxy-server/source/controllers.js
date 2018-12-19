'use strict'

const express = require('express')
const axios = require('axios')
const server = require('./server')
const url = require('url')

const http = 'https://'

/*------------------------------------------------------
createAccessRule
------------------------------------------------------*/

exports.createAccessRule = function(req, res) {
  axios({
    method: 'post',
    url: http + server.services.datastream.domain + '/api/v1/oemAccessRules',
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
createDatapoint
------------------------------------------------------*/

exports.createDatapoint = function(req, res) {
  axios({
    method: 'post',
    url: http + server.services.device.domain + '/apiv1/properties/' + urlSegment(req, 2) + '/datapoints',
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
createSubscription
------------------------------------------------------*/

exports.createSubscription = function(req, res) {
  axios({
    method: 'post',
    url: http + server.services.datastream.domain + '/api/v1/subscriptions.json',
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
createNode
------------------------------------------------------*/

exports.createNode = function(req, res) {
  var dsn = urlSegment(req, 2)
  var authorization = req.headers.authorization

  axios({
    method: 'put',
    url: http + server.services.device.domain + '/apiv1/devices/' + dsn + '/register',
    headers: req.headers,
    data: JSON.stringify(req.body)
  })
  .then(function (response) {
    return axios({
      method: 'get',
      url: http + server.services.device.domain + '/apiv1/dsns/' + dsn,
      headers: {
        'Authorization': authorization,
        'Accept': 'application/json'
      }
    })
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
deleteAccessRule
------------------------------------------------------*/

exports.deleteAccessRule = function(req, res) {
  axios({
    method: 'delete',
    url: http + server.services.datastream.domain + '/api/v1/oemAccessRules/' + urlSegment(req, 1),
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
deleteConnection
------------------------------------------------------*/

exports.deleteConnection = function(req, res) {
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
deleteDevice
------------------------------------------------------*/

exports.deleteDevice = function(req, res) {
  axios({
    method: 'delete',
    url: http + server.services.device.domain + '/apiv1/devices/' + urlSegment(req, 1),
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
deleteSubscription
------------------------------------------------------*/

exports.deleteSubscription = function(req, res) {
  axios({
    method: 'delete',
    url: http + server.services.datastream.domain + '/api/v1/subscriptions/' + urlSegment(req, 1) + '.json',
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
getAccessRule
------------------------------------------------------*/

exports.getAccessRule = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.datastream.domain + '/api/v1/oemAccessRules/' + urlSegment(req, 1),
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
getAccessRules
------------------------------------------------------*/

exports.getAccessRules = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.datastream.domain + '/api/v1/oemAccessRules',
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
getCandidates

Ayla returns 404 for zero candidates. It returns 500 if you ask a node for Node candidates. 
It returns 412 if you ask a Zigbee GW for node candidates that doesn't have any. 
It is better to return 200 and [] because the client can use the same code path.
See https://softwareengineering.stackexchange.com/questions/358243/should-no-results-be-an-error-in-a-restful-response.
------------------------------------------------------*/

exports.getCandidates = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.device.domain + '/apiv1/devices/register.json?dsn=' + urlSegment(req, 2) + '&regtype=Node',
    headers: req.headers
  })
  .then(function (response) {
    res.statusCode = response.status
    res.send(response.data)
  })
  .catch(function (error) {
    if(error.response) {
      if(error.response.status === 404 || error.response.status === 500 || error.response.status === 412) {
        res.statusCode = 200
        res.send(JSON.parse('[]'))
      } else {
        res.statusCode = error.response.status
        res.end()
      }
    } else {
      res.statusCode = 404
      res.end()
    }
  })
}

/*------------------------------------------------------
getNodes
------------------------------------------------------*/

exports.getNodes = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.device.domain + '/apiv1/dsns/' + urlSegment(req, 2) + '/registered_nodes',
    headers: req.headers
  })
  .then(function (response) {
    res.statusCode = response.status
    res.send(response.data)
  })
  .catch(function (error) {
    if(error.response) {
      if(error.response.status === 405) {
        res.statusCode = 200
        res.send(JSON.parse('[]'))
      } else {
        res.statusCode = error.response.status
        res.end()
      }
    } else {
      res.statusCode = 404
      res.end()
    }
  })
}

/*------------------------------------------------------
getAccount
------------------------------------------------------*/

exports.getAccount = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.user.domain + '/users/get_user_profile',
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
    url: http + server.services.device.domain + '/apiv1/devices/' + urlSegment(req, 1),
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
getDatapoints
------------------------------------------------------*/

exports.getDatapoints = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.device.domain + '/apiv1/properties/' + urlSegment(req, 2) + '/datapoints',
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
  const myUrl = url.parse(req.url, true)
  const defaultQuery = 'paginated=true'
  var newUrl = http + server.services.device.domain + '/apiv1/devices'
  if(myUrl.search === '?') {
    newUrl += '?' + defaultQuery
  } else {
    newUrl += myUrl.search + '&' + defaultQuery
  }
  //console.log(newUrl)
  //console.log(JSON.stringify(myUrl, null, 2))

  axios({
    method: 'get',
    url: newUrl,
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
getDssDomain
------------------------------------------------------*/

exports.getDssDomain = function(req, res) {
  res.statusCode = 200
  res.send(server.services.datastream.domain)
}

/*------------------------------------------------------
getServerConfiguration
------------------------------------------------------*/

exports.getServerConfiguration = function(req, res) {
  res.statusCode = 200
  res.send(server.config)
}

/*------------------------------------------------------
getProperty
------------------------------------------------------*/

exports.getProperty = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.device.domain + '/apiv1/properties/' + urlSegment(req, 1),
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
    url: http + server.services.device.domain + '/apiv1/devices/' + urlSegment(req, 2) + '/properties',
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
getSubscription
------------------------------------------------------*/

exports.getSubscription = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.datastream.domain + '/api/v1/subscriptions/' + urlSegment(req, 1) + '.json',
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
getSubscriptions
------------------------------------------------------*/

exports.getSubscriptions = function(req, res) {
  axios({
    method: 'get',
    url: http + server.services.datastream.domain + '/api/v1/subscriptions.json',
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
    url: http + server.services.user.domain + '/users/sign_in',
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
    url: http + server.services.user.domain + '/users/sign_out',
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
    url: http + server.services.device.domain + '/apiv1/devices/' + urlSegment(req, 1),
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

function urlSegment(req, index) {
  const fields = url.parse(req.url).pathname.split('/')
  return fields[fields.length-index]
}
/*
function urlQueryValue(req, key) {
  return req.url.searchParams.get(key)
}
*/
function displayUrl(req) {
  var p = url.parse(req.url, true)
  console.log(p.pathname)
  console.log(p.search)
  console.log(p.query)

}
