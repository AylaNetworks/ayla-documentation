var urls = []
urls['cn'] = []
urls['cn']['dev'] = []
urls['cn']['dev']['cloud'] = 'wss://stream.ayla.com.cn/stream/stream'
urls['cn']['dev']['mobile'] = 'wss://mstream.ayla.com.cn/stream'
urls['cn']['field'] = []
urls['cn']['field']['cloud'] = 'wss://stream-field.ayla.com.cn/stream'
urls['cn']['field']['mobile'] = 'wss://mstream-field.ayla.com.cn/stream'

urls['eu'] = []
urls['eu']['field'] = []
urls['eu']['field']['cloud'] = 'wss://stream-field-eu.aylanetworks.com/stream'
urls['eu']['field']['mobile'] = 'wss://mstream-field-eu.aylanetworks.com/stream'

urls['us'] = []
urls['us']['dev'] = []
urls['us']['dev']['cloud'] = 'wss://stream.aylanetworks.com/stream'
urls['us']['dev']['mobile'] = 'wss://mstream-dev.aylanetworks.com/stream'
urls['us']['staging'] = []
urls['us']['staging']['cloud'] = 'wss://staging-dss.ayladev.com/stream'
urls['us']['staging']['mobile'] = 'wss://staging-mstream.ayladev.com/stream'
urls['us']['field'] = []
urls['us']['field']['cloud'] = 'wss://stream-field.aylanetworks.com/stream'
urls['us']['field']['mobile'] = 'wss://mstream-field.aylanetworks.com/stream'

var streams = {}
var nextStreamId = 1
var streamKeyFilter = ['url','streamKey','eventType','numEvents','numHBs']

//------------------------------------------------------
// Stream
//------------------------------------------------------

class Stream {
  constructor(name, url, key) {
    this.id = 'ES' + nextStreamId++
    this.name = this.id + ': ' + name
    this.url = url
    this.key = key
    this.eventType = 'unknown'
    this.numEvents = 0
    this.numHBs = 0
    this.socket = new WebSocket(url + '?stream_key=' + key)
  }
}

//------------------------------------------------------
// processEvent
//------------------------------------------------------

function processEvent(stream, event) {

  let title = stream. id + '-EV' + event.seq + ': ' + event.metadata.event_type + ' event for ' + event.metadata.dsn + ': '

  switch(event.metadata.event_type) {
    case 'connectivity':
    title += event.connection.status
    break

    case 'datapoint':
    var value = event.datapoint.value
    if(value.length > 30) {value = value.slice(0, 30) + ' ...'}
    title += event.metadata.display_name + ' = ' + value
    break

    case 'datapointack':
    var value = event.datapointack.value
    if(value.length > 30) {value = value.slice(0, 30) + ' ...'}
    title += event.metadata.display_name + ' = ' + value
    break

    case 'location':
    title += 'lat = ' + event.location_event.lat + ', long = ' + event.location_event.long
    break

    case 'registration':
    title += 'registered = ' + event.registration_event.registered
    break

    default:
    break
  }

  let id = 'ID' + new Date().getTime()
  let item = ''
  + '<div class="form-check event">'
  + '<input type="checkbox" class="form-check-input">'
  + '<span data-toggle="collapse" href="#' + id + '">'
  + '<label class="form-check-label collapsible">' + title + '</label>'
  + '</span>'
  + '<div id="' + id + '" class="collapse">'
  + '<pre>' + JSON.stringify(event, null, 2) + '</pre>'
  + '</div>'
  + '</div>'
  $('#events').prepend(item)
  
}

//------------------------------------------------------
// displayEventStream
//------------------------------------------------------

function displayEventStream(stream) {
  let id = 'ID' + stream.key
  let item = ''
  + '<tr id="' + id + '">'
  + '<td><input type="checkbox" value="' + stream.key + '"></td>'
  + '<td class="name">' + stream.name + '</td>'
  + '<td class="numEvents">0</td>'
  + '<td class="numHBs">0</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=3><pre>s</pre></td>'
  + '</tr>'
  $('#event-streams').append(item)
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

    if(msg.data.includes('|Z')) {
      stream.socket.send('Z')
      stream.numHBs++
      $('#ID' + stream.key).children('td.numHBs').first().html(stream.numHBs)
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
      $('#ID' + stream.key).children('td.numEvents').first().html(stream.numEvents)
      processEvent(stream, event)
    }
  }

  stream.socket.onclose = function(msg) {
    console.log('onclose for stream key ' + stream.key)
    console.log('stream.readyState = ' + stream.readyState)
  }
}

//------------------------------------------------------
// Create Event Stream
//------------------------------------------------------

$(function() {
  $('#create-event-stream-form').submit(function(event) {
    let name = $('#event-stream-name').val()
    if(!name) {
      name = $('#event-stream-name').prop('placeholder')
    }
    let service = JSON.parse($('#service').val())
    let clientType = $('#client-type').val()
    let key = $('#stream-key').val()
    let url = urls[service.region][service.deployment][clientType]

    streams[key] = new Stream(name, url, key)
    monitorEventStream(streams[key])
    displayEventStream(streams[key])

    $('#create-event-stream-form').get(0).reset()
  })
})

//------------------------------------------------------
// Delete Event
//------------------------------------------------------

$(function() {
  $('#delete-event-btn').click(function(event) {
    let checkboxes = $('#events div input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      $(checkbox).parent().remove()
    })
  })
})

//------------------------------------------------------
// Select ALL Events
//------------------------------------------------------

$(function() {
  $('#select-all-events-btn').click(function(event) {
    $('#events div input[type=checkbox]').prop('checked', true)
  })
})

//------------------------------------------------------
// Deselect ALL Events
//------------------------------------------------------

$(function() {
  $('#deselect-all-events-btn').click(function(event) {
    $('#events div input[type=checkbox]').prop('checked', false)
  })
})

//------------------------------------------------------
// Delete Event Streams
//------------------------------------------------------

$(function() {
  $('#delete-event-stream-btn').click(function(event) {
    let checkboxes = $('#event-streams tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {

      let streamKey = $(this).val()
      console.log('Deleting event stream with key ' + streamKey)
      //let stream = streams[streamKey]

      //AylaProxyServer.deleteDssStream(stream.url, streamKey, function (data) {
      //  console.log('Success deleting stream')
        let tr1 = $(checkbox).parent().parent()
        let tr2 = $(tr1).next()
        $(tr1).remove()
        $(tr2).remove()
      //}, function(statusCode, statusText) {
      //  console.log('Error deleting stream')
      //})

    })
  })
})

//------------------------------------------------------
// Select All Event Streams
//------------------------------------------------------

$(function() {
  $('#select-all-event-streams-btn').click(function(event) {
    $('#event-streams tr td input[type=checkbox]').prop('checked', true)
  })
})

//------------------------------------------------------
// Deselect All Event Streams
//------------------------------------------------------

$(function() {
  $('#deselect-all-event-streams-btn').click(function(event) {
    $('#event-streams tr td input[type=checkbox]').prop('checked', false)
  })
})

//------------------------------------------------------
// Display Event Stream Details
//------------------------------------------------------

$(function() {
  $("#event-streams").delegate('tr td.name', "click", function(e) {
    let tr1 = $(this).parent()
    let tr2 = $(tr1).next()
    let streamKey = $(tr1).find('input').val()
    let stream = streams[streamKey]
    let pre = $(tr2).find('pre')
    $(pre).empty()
    $(pre).append(JSON.stringify(stream, streamKeyFilter, 2))
    $(tr2).toggle()
  })
})
