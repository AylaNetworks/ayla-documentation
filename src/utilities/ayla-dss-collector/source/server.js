//------------------------------------------------------
// Ayla DSS Collector
// All incoming requests are authorized with Ayla before servicing.
//------------------------------------------------------

const express = require('express')
const axios = require('axios')
const fs = require('fs');

const app = express()
app.use(express.json())

const appName = 'Ayla DSS Collector'

const streams = []
streams['connectivity'] = null
streams['datapoint'] = null
streams['datapointack'] = null
streams['location'] = null
streams['registration'] = null

//------------------------------------------------------
// 
//------------------------------------------------------

class Stream {

  constructor(subscriptionId, streamKey, serviceUrl) {
    this.subscriptionId = subscriptionId
    this.streamKey = streamKey
    this.serviceUrl = serviceUrl
    this.socket = null
  }

  open() {
    this.socket = new WebSocket(this.serviceUrl + '?stream_key=' + this.streamKey)
  }

  close(code, msg) {
    if(this.socket) {
      this.socket.close(code, msg)
      this.socket = null
    }
  }
}

//------------------------------------------------------
// 
//------------------------------------------------------

/*
app.route('/dss')

  .get(function (req, res) {
    fs.readFile('/home/bitnami/htdocs/utilities/ayla-dss-collector/source/index.html', function (error, page) {
      res.set('Content-Type', 'text/html')
      res.send(page)
    })
  })
*/

//------------------------------------------------------
// 
//------------------------------------------------------

app.route('/dss/session')

  //----------------------------------------------------
  // login
  //----------------------------------------------------

  .post(function (req, res) {
    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/users/sign_in',
      headers: req.headers,
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {
      if(error && error.response && error.response.status) {
        res.statusCode = error.response.status
      } else {
        res.statusCode = 404
      }
      res.end()
    })
  })

  //----------------------------------------------------
  // logout
  //----------------------------------------------------

  .delete(function (req, res) {
    axios({
      method: 'post',
      url: 'https://user-dev.aylanetworks.com/users/sign_out',
      headers: req.headers,
      data: JSON.stringify(req.body)
    })
    .then(function (response) {res.send(response.data)})
    .catch(function (error) {
      if(error && error.response && error.response.status) {
        res.statusCode = error.response.status
      } else {
        res.statusCode = 404
      }
      res.end()
    })
  })

//------------------------------------------------------
// 
//------------------------------------------------------

app.route('/dss/subscriptions')

  //----------------------------------------------------
  // getSubscriptions
  //----------------------------------------------------

  .get(function (req, res) {
    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions',
      headers: req.headers
    })
    .then(function (response) {
      let subscriptions = []
      for(let i=0; i<response.data.length; i++) {
        for(var key in streams) {
          if(streams[key] != null && streams[key].subscriptionId === response.data[i].subscription.id) {
            subscriptions.push(response.data[i].subscription)
          }
        }
      }
      res.send(subscriptions)
    })
    .catch(function (error) {
      if(error && error.response && error.response.status) {
        res.statusCode = error.response.status
      } else {
        res.statusCode = 404
      }
      res.end()
    })
  })

  //----------------------------------------------------
  // subscribe
  //----------------------------------------------------

  .post(function (req, res) {
    const type = req.body.subscription_type

    if(streams[type]) {
      axios({
        method: 'get',
        url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions/' + streams[type].subscriptionId + '.json',
        headers: {
          'Authorization': req.headers.authorization,
          'Accept': req.headers.accept
        }
      })
      .then(function (response) {
        res.statusCode = 409
        res.end()
      })
      .catch(function (error) {
        if(error && error.response && error.response.status) {
          res.statusCode = error.response.status
        } else {
          res.statusCode = 404
        }
        res.end()
      })
    } else {
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
        response.data.subscription.service_url = req.body.url
        streams[type] = new Stream(
          response.data.subscription.id, 
          response.data.subscription.stream_key, 
          response.data.subscription.service_url)
        res.send(response.data.subscription)
      })
      .catch(function (error) {
        if(error && error.response && error.response.status) {
          res.statusCode = error.response.status
        } else {
          res.statusCode = 404
        }
        res.end()
      })
    }
  })

//------------------------------------------------------
// 
//------------------------------------------------------

app.route('/dss/subscriptions/:type')

  //----------------------------------------------------
  // unsubscribe
  //----------------------------------------------------

  .delete(function (req, res) {
    const type = urlStr(req, 1)

    if(streams[type] == null) {
      res.statusCode = 401
      res.end()
    } else {
      axios({
        method: 'delete',
        url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions/' + streams[type].subscriptionId + '.json',
        headers: {'Authorization': req.headers.authorization}
      })
      .then(function (response) {
        var data = {
          "id": streams[type].subscriptionId,
          "stream_key": streams[type].streamKey,
          "subscription_type": type,
          "service_url": streams[type].serviceUrl
        }
        streams[type].close(1000, 'Unsubscribed from receiving ' + type + ' events.')
        streams[type] = null;
        res.send(data)
      })
      .catch(function (error) {
        if(error && error.response && error.response.status) {
          res.statusCode = error.response.status
        } else {
          res.statusCode = 404
        }
        res.end()
      })
    }
  })

//------------------------------------------------------
// 
//------------------------------------------------------

function urlStr(req, index) {
  const fields = req.url.split('/')
  return fields[fields.length-index]
}

//------------------------------------------------------
// 
//------------------------------------------------------

app.listen(3000)
console.log('Running ' + appName)
