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

var eventStreams = {}

//------------------------------------------------------
// 
//------------------------------------------------------

class EventStream {

  constructor(name, subscription, initial_state, service_url) {

    this.name = name
    this.subscription = subscription
    this.initial_state = initial_state
    this.service_url = service_url
    this.socket = null
  }

  open() {
    /*
    if(!this.socket) {
      this.socket = new WebSocket(this.service_url + '?stream_key=' + this.subscription.stream_key)
    }
    */
  }

  close(code, msg) {
    /*
    if(this.socket) {
      this.socket.close(code, msg)
      this.socket = null
    }
    */
  }
}

//------------------------------------------------------
// 
//------------------------------------------------------

class Stream {

  constructor(subscription, service_url) {

    this.subscription = subscription
    this.service_url = service_url
    this.socket = null
  }

  open() {
    this.socket = new WebSocket(this.service_url + '?stream_key=' + this.subscription.stream_key)
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
    .then(function (response) {
      res.statusCode = response.status
      res.send(response.data)
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
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
    .then(function (response) {
      res.statusCode = response.status
      res.send(response.data)
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
      res.end()
    })
  })

//------------------------------------------------------
// 
//------------------------------------------------------

app.route('/dss/eventstream')

  //----------------------------------------------------
  // createEventStream
  //----------------------------------------------------

  .post(function (req, res) {
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

      let id = response.data.subscription.id

      eventStreams[id] = new EventStream(
        req.body.event_stream_name,
        response.data.subscription, 
        req.body.initial_state,
        req.body.service_url)

      // Do in constructor?
      //if(req.body.initial_state === 'open') {
      //  eventStreams[id].open()
      //}

      res.statusCode = response.status
      res.send(eventStreams[id])
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
      res.end()
    })
  })

//------------------------------------------------------
// 
//------------------------------------------------------

app.route('/dss/eventstream/:id')

  //----------------------------------------------------
  // deleteEventStream
  //----------------------------------------------------

  .delete(function (req, res) {
    const id = urlStr(req, 1)

    axios({
      method: 'delete',
      url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions/' + id + '.json',
      headers: {'Authorization': req.headers.authorization}
    })
    .then(function (response) {
      var data = eventStreams[id]
      if(data) {
        eventStreams[id].close(1000, 'Deleting ' + type + ' event stream.')
        delete streams[id]
        res.statusCode = response.status
        res.send(data)
      } else {
        res.send('Not on the list')
      }
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
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
          if(streams[key] != null && streams[key].subscription.id === response.data[i].subscription.id) {
            subscriptions.push(response.data[i].subscription)
          }
        }
      }
      res.send(subscriptions)
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
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
        url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions/' + streams[type].subscription.id + '.json',
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
        if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
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
        streams[type] = new Stream(response.data.subscription, req.body.url)
        res.send(streams[type])
      })
      .catch(function (error) {
        if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
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
        url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions/' + streams[type].subscription.id + '.json',
        headers: {'Authorization': req.headers.authorization}
      })
      .then(function (response) {
        var data = streams[type]
        streams[type].close(1000, 'Unsubscribed from receiving ' + type + ' events.')
        streams[type] = null;
        res.send(data)
      })
      .catch(function (error) {
        if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
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
