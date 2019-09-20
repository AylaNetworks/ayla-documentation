const appName = 'DSS Collector'

const fs = require('fs-extra')
const WebSocket = require('ws')
const util = require("util")
const mysql = require('mysql')

const streams = {}

const pool = mysql.createPool({
  connectionLimit : 10,
  host: 'host',
  user: 'username',
  password: 'password',
  database: 'database'
})

/*------------------------------------------------------
Stream class
------------------------------------------------------*/

class Stream {
  constructor(id, name, url, key, persistence) {
    this.id = id
    this.name = name
    this.url = url
    this.key = key
    this.persistence = persistence
    this.eventType = 'unknown'
    this.numEvents = 0
    this.numHBs = 0
    this.socket = new WebSocket(url + '?stream_key=' + key)
  }
}

/*------------------------------------------------------
createEventStreams
------------------------------------------------------*/

function createEventStreams(defs) {
  defs.forEach(function(def) {
    streams[def.key] = new Stream(def.id, def.name, def.url, def.key, def.persistence)
    monitorEventStream(streams[def.key])
  })
}

/*------------------------------------------------------
monitorEventStream
------------------------------------------------------*/

function monitorEventStream(stream) {

  stream.socket.onopen = function(msg) {
    console.log('onopen for stream key ' + stream.key)
  }

  stream.socket.onerror = function(msg) {
    console.log('onerror" ' + msg)
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

/*------------------------------------------------------
processEvent
------------------------------------------------------*/

function processEvent(stream, event) {
  console.log('--> ' + event.metadata.event_type.toUpperCase())
  console.log('Data: ' + JSON.stringify(event))

  if(stream.persistence.json) {
    let jsonfile = './events/' + stream.id + '-' + stream.eventType + '.json'
    fs.appendFile(jsonfile, JSON.stringify(event))
    .then(() => {})
    .catch(err => {console.error(err)})
  }

  if(stream.persistence.relational) {
    if(event.datapoint && event.metadata.property_name === 'too_warm') {
      insertTooWarm(event)
    }
  }
}

/*------------------------------------------------------
insertTooWarm
------------------------------------------------------*/

function insertTooWarm(event) {
  var record = {
    sequence_id: event.seq,
    creation_date: event.datapoint.created_at,
    value: event.datapoint.value
  }

  pool.getConnection(function(err, connection) {
    connection.query('INSERT INTO too_warm SET ?', record, function (error, results, fields) {
      if(error) {console.log(error)}
        connection.release()
    })
  })
}

/*------------------------------------------------------
Read Config File and create event streams.
------------------------------------------------------*/

console.log('Running ' + appName)

try {
  var defs = JSON.parse(fs.readFileSync('./config.json'))
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
