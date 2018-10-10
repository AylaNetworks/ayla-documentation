//------------------------------------------------------
// Ayla DSS Collector
// All incoming requests are authorized with Ayla before servicing.
//------------------------------------------------------

const express = require('express')
const axios = require('axios')
const WebSocket = require('ws')
const fs = require('fs-extra')

const app = express()
app.use(express.json())

const appName = 'Ayla DSS Collector'

var eventStreams = {} // key is stream_id (using subscription.id)

const eventStreamKeyFilter = ['stream_id','name','subscription','id','oem','dsn','name','description','property_name',
'connection_status','batch_size','is_suspended','created_at','updated_at','date_suspended','user_uuid','oem_model',
'stream_key','client_type','subscription_type','service_url','state']

//------------------------------------------------------
// 
//------------------------------------------------------

class EventStream {

  constructor(name, subscription, service_url, state) {

    this.stream_id = subscription.id
    this.name = name
    this.subscription = subscription
    this.service_url = service_url
    this.state = state
    this.socket = null
  }

  open() {
    if(!this.socket) {
      this.socket = new WebSocket(this.service_url + '?stream_key=' + this.subscription.stream_key)
      this.state = 'open'
      this.monitor(this)
    } else {
      console.log('Cannot open socket. It is already open.')
    }
  }

  // Closing a socket seems to delete the Ayla DSS subscription.
  // Instead, call DELETE /stream?stream_key=<stream-key>.
  // Then, perhaps, close the socket? 
  close(code, msg) {
    if(this.socket) {
      this.socket.close(code, msg)
      this.socket = null
      this.state = 'closed'
    } else {
      console.log('Cannot close socket. It is already closed.')
    }
  }

  monitor(eventStream) {

    eventStream.socket.on('open', function() {
      console.log('Opening a ' + eventStream.subscription.subscription_type + ' event stream.');
    });

    eventStream.socket.on('message', function(data) {
      if(data.indexOf("|Z") !== -1) {
        eventStream.socket.send("Z");
        console.log('Heartbeat');
      } else {
        var a = data.split('|');
        if(a.length != 2) {console.log('ERROR: Cannot parse event.');} 
        else {eventStream.process(JSON.parse(a[1]));}
      }
    });

    eventStream.socket.on('close', function(code, reason) {
      console.log(reason);
    });

    eventStream.socket.on('error', function(error) {
      console.log(error);
    });

    eventStream.socket.on('unexpected-response', function(req, res) {
      console.log('unexpected');
    });
  }

  process(data) {

    let filename = './'

    switch(data.metadata.event_type) {

      case 'connectivity':
      filename += 'connectivity.log'
      break

      case 'datapoint':
      filename += 'datapoint.log'
      break

      case 'datapointack':
      filename += 'datapointack.log'
      break

      case 'location':
      filename += 'location.log'
      break

      case 'registration':
      filename += 'registration.log'
      break

      default:
      filename += 'default.log'
      break
    }

    fs.appendFile(filename, JSON.stringify(data))
    .then(() => {
      console.log(JSON.stringify(data))
    })
    .catch(err => {
      console.error(err)
    })
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

app.route('/dss/eventstreams')

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

      let streamId = response.data.subscription.id

      console.log('Event Stream count is ' + Object.keys(eventStreams).length)
      eventStreams[streamId] = new EventStream(
        req.body.event_stream_name,
        response.data.subscription, 
        req.body.service_url,
        req.body.state)

      console.log('Event Stream count is ' + Object.keys(eventStreams).length)

      if(req.body.state === 'open') {
        eventStreams[streamId].open()
      }

      res.statusCode = response.status
      res.send(JSON.parse(JSON.stringify(eventStreams[streamId], eventStreamKeyFilter)))
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
      res.end()
    })
  })

  //----------------------------------------------------
  // getEventStreams
  //----------------------------------------------------

  .get(function (req, res) {
    axios({
      method: 'get',
      url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions',
      headers: req.headers
    })
    .then(function (response) {
      let results = []
      for(let i=0; i<response.data.length; i++) {
        for(var key in eventStreams) {
          if(eventStreams[key].stream_id === response.data[i].subscription.id) {
            results.push(JSON.parse(JSON.stringify(eventStreams[key], eventStreamKeyFilter)))
          }
        }
      }
      res.send(results)
    })
    .catch(function (error) {
      if(error.response) {res.statusCode = error.response.status} else {res.statusCode = 404}
      res.end()
    })
  })

//------------------------------------------------------
// 
//------------------------------------------------------

app.route('/dss/eventstreams/:streamId')

  //----------------------------------------------------
  // getEventStream
  //----------------------------------------------------

  .get(function (req, res) {
  })

  //----------------------------------------------------
  // modifyEventStream
  //----------------------------------------------------

  .patch(function (req, res) {
    const streamId = urlStr(req, 1)

    if(req.body.action == 'open') {
      eventStreams[streamId].open()
      res.statusCode = 200
      res.send(req.body)
    } else if(req.body.action == 'close') {
      /*
      axios({
        method: 'delete',
        url: 'https://user-dev.aylanetworks.com/api/v1/stream?' + eventStreams[streamId].subscription.stream_key,
        headers: {'Authorization': req.headers.authorization}
      })
      .then(function (response) {
        console.log('Event Stream count is ' + Object.keys(eventStreams).length)
        eventStreams[streamId].close(1000, 'Closing socket per request from user.')
        console.log('Event Stream count is ' + Object.keys(eventStreams).length)
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
  })

  //----------------------------------------------------
  // deleteEventStream
  //----------------------------------------------------

  .delete(function (req, res) {
    const streamId = urlStr(req, 1)

    if(eventStreams[streamId] == null) {
      res.statusCode = 401
      res.end()
    } else {
      axios({
        method: 'delete',
        url: 'https://user-dev.aylanetworks.com/api/v1/subscriptions/' + streamId + '.json',
        headers: {'Authorization': req.headers.authorization}
      })
      .then(function (response) {
        var data = eventStreams[streamId]
        eventStreams[streamId].close(1000, 'Closing socket prior to deleting the event stream.')
        console.log('Event Stream count is ' + Object.keys(eventStreams).length)
        delete eventStreams[streamId]
        console.log('Event Stream count is ' + Object.keys(eventStreams).length)
        res.statusCode = response.status
        res.send(JSON.parse(JSON.stringify(data, eventStreamKeyFilter)))
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
