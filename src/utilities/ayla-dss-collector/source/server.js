const appName = 'Ayla DSS Collector'

const express = require('express')
const WebSocket = require('ws')
const fs = require('fs-extra')
const cleanup = require('node-cleanup')

const app = express()

var streams = {}

//------------------------------------------------------
// Stream
//------------------------------------------------------

class Stream {

  constructor(id, name, url, key) {
    this.id = id
    this.name = name
    this.url = url
    this.key = key
    this.eventType = 'unknown'
    this.numEvents = 0
    this.numHBs = 0
    this.socket = new WebSocket(url + '?stream_key=' + key)
  }
}

//------------------------------------------------------
// cleanup
//------------------------------------------------------

cleanup(function (exitCode, signal) {
  console.log('\nExiting ' + appName)
})

//------------------------------------------------------
// createEventStreams
//------------------------------------------------------

function createEventStreams(defs) {
  defs.forEach(function(def) {
    streams[def.key] = new Stream(def.id, def.name, def.url, def.key)
    monitorEventStream(streams[def.key])
  })
}

//------------------------------------------------------
// monitorEventStream
//------------------------------------------------------

function monitorEventStream(stream) {

  stream.socket.onopen = function(msg) {
    console.log('onopen for stream key ' + stream.key)
  }

  stream.socket.onerror = function(msg) {
    console.log('onerror and error is ' + msg)
  }

  stream.socket.onmessage = function(msg) {

    if(msg.data.indexOf("|Z") !== -1) {
      stream.socket.send("Z")
      stream.numHBs++
      console.log('--> HEARTBEAT: ' + stream.name)
    } 

    else {
      var arr = msg.data.split('|')
      if(arr.length != 2) {
        console.log('ERROR: Event split into ' + arr.length + 'substrings.')
        return
      }
      let event = JSON.parse(arr[1])
      stream.eventType = event.metadata.event_type
      stream.numEvents++
      processEvent(stream, event)
    }
  }

  stream.socket.onclose = function(msg) {
    console.log('onclose for stream key ' + stream.key)
    console.log('stream.readyState = ' + stream.readyState)
  }
}

//------------------------------------------------------
// processEvent
//------------------------------------------------------

function processEvent(stream, event) {
  console.log('--> ' + event.metadata.event_type.toUpperCase())
  console.log('Data: ' + JSON.stringify(event))

  let jsonfile = './events/' + stream.id + '-' + stream.eventType + '.json'
  fs.appendFile(jsonfile, JSON.stringify(event))
  .then(() => {})
  .catch(err => {console.error(err)})
}

//------------------------------------------------------
// Read Config File and Create Event Streams
//------------------------------------------------------

try {
  var defs = JSON.parse(fs.readFileSync('config.json'))
  console.log('CONFIG.JSON:')
  console.log(JSON.stringify(defs, null, 2))
  console.log('--------')
} catch(e) {
  console.log('Cannot open config.json file')
  return
}

try {
  createEventStreams(defs)
} catch(e) {
  console.log(e)
  return
}

//------------------------------------------------------
// Start your engines
//------------------------------------------------------

app.listen(3000)
console.log('Running ' + appName + ' on Port 3000')
