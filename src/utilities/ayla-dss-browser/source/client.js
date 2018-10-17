var urls = []
urls['cn'] = []
urls['cn']['dev'] = []
urls['cn']['dev']['cloud'] = 'wss://stream.ayla.com.cn/stream/stream'
urls['cn']['dev']['mobile'] = 'wss://mstream.ayla.com.cn/stream'
urls['cn']['staging'] = []
urls['cn']['staging']['cloud'] = ''
urls['cn']['staging']['mobile'] = ''
urls['cn']['field'] = []
urls['cn']['field']['cloud'] = 'wss://stream-field.ayla.com.cn/stream'
urls['cn']['field']['mobile'] = 'wss://mstream-field.ayla.com.cn/stream'

urls['eu'] = []
urls['eu']['dev'] = []
urls['eu']['dev']['cloud'] = ''
urls['eu']['dev']['mobile'] = ''
urls['eu']['staging'] = []
urls['eu']['staging']['cloud'] = ''
urls['eu']['staging']['mobile'] = ''
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

var streamKeyFilter = ['url','streamKey','eventType','eventCount','pulseCount']

//------------------------------------------------------
// Stream
//------------------------------------------------------

class Stream {
  constructor(name, url, streamKey) {
    this.name = name
    this.url = url
    this.streamKey = streamKey
    this.eventType = 'unknown'
    this.eventCount = 0
    this.pulseCount = 0
    this.socket = new WebSocket(url + '?stream_key=' + streamKey)
  }
}

//------------------------------------------------------
// displayEvent
//------------------------------------------------------

function displayEvent(stream, event) {

  $('#ID' + stream.streamKey).children('td.event-ct').first().html(stream.eventCount)

  let title = 'Seq ' + event.seq + ': ' + toInitialCaps(event.metadata.event_type) + ' event for ' + event.metadata.dsn + ': ';

  switch(event.metadata.event_type) {
    case 'connectivity':
    title += event.connection.status;
    break;

    case 'datapoint':
    var value = event.datapoint.value;
    if(value.length > 30) {value = value.slice(0, 30) + ' ...';}
    title += event.metadata.display_name + ' = ' + value;
    break;

    case 'datapointack':
    var value = event.datapointack.value;
    if(value.length > 30) {value = value.slice(0, 30) + ' ...';}
    title += event.metadata.display_name + ' = ' + value;
    break;

    case 'location':
    title += 'lat = ' + event.location_event.lat + ', long = ' + event.location_event.long
    break;

    case 'registration':
    title += 'registered = ' + event.registration_event.registered;
    break;

    default:
    break;
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
  let id = 'ID' + stream.streamKey
  let item = ''
  + '<tr id="' + id + '">'
  + '<td><input type="checkbox" value="' + stream.streamKey + '"></td>'
  + '<td class="name">' + stream.name + '</td>'
  + '<td class="event-ct">0</td>'
  + '<td class="pulse-ct">0</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=3><pre>s</pre></td>'
  + '</tr>'
  $('#event-streams').append(item)
}

//------------------------------------------------------
// displayPulse
//------------------------------------------------------

function displayPulse(stream) {
  $('#ID' + stream.streamKey).children('td.pulse-ct').first().html(stream.pulseCount)
}

//------------------------------------------------------
// monitor
//------------------------------------------------------

function monitor(stream) {

  stream.socket.onopen = function(msg) {
    console.log('open')
  }

  stream.socket.onerror = function(msg) {
    console.log('error is ' + msg)
  }

  stream.socket.onmessage = function(msg) {

    if(msg.data.includes('|Z')) {
      stream.socket.send('Z')
      stream.pulseCount++
      displayPulse(stream)
    }

    else {
      var arr = msg.data.split('|')
      if(arr.length != 2) {
        console.log('ERROR: Event split into ' + arr.length + 'substrings.')
        return
      }
      let event = JSON.parse(arr[1])
      stream.eventType = event.metadata.event_type
      stream.eventCount++
      displayEvent(stream, event)
    }
  }

  stream.socket.onclose = function(msg) {
    console.log('close')
  }
}

//------------------------------------------------------
// onClickCreateEventStream
//------------------------------------------------------

$(function() {
  $('#create-event-stream-form').submit(function(event) {
    let name = $('#event-stream-name').val()
    let service = JSON.parse($('#service').val())
    let clientType = $('#client-type').val()
    let streamKey = $('#stream-key').val()
    let url = urls[service.region][service.deployment][clientType]

    streams[streamKey] = new Stream(name, url, streamKey)
    monitor(streams[streamKey])
    displayEventStream(streams[streamKey])

    $('#create-event-stream-form').get(0).reset()
  })
})

//------------------------------------------------------
// onClick Events Buttons
//------------------------------------------------------

$(function() {
  $('#delete-event-btn').click(function(event) {
    let checkboxes = $('#events div input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      $(checkbox).parent().remove()
    })
  })
})

$(function() {
  $('#select-all-events-btn').click(function(event) {
    $('#events div input[type=checkbox]').prop('checked', true)
  })
})

$(function() {
  $('#deselect-all-events-btn').click(function(event) {
    $('#events div input[type=checkbox]').prop('checked', false)
  })
})

//------------------------------------------------------
// onClick Event Streams Buttons
//------------------------------------------------------

$(function() {
  $('#delete-event-stream-btn').click(function(event) {
    let checkboxes = $('#event-streams tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      console.log($(this).val())
      let tr1 = $(checkbox).parent().parent()
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()
    })
  })
})

$(function() {
  $('#select-all-event-streams-btn').click(function(event) {
    $('#event-streams tr td input[type=checkbox]').prop('checked', true)
  })
})

$(function() {
  $('#deselect-all-event-streams-btn').click(function(event) {
    $('#event-streams tr td input[type=checkbox]').prop('checked', false)
  })
})

//------------------------------------------------------
// onClick Event Stream Details
//------------------------------------------------------

$(function() {
  $("#event-streams").delegate('tr td.name', "click", function(e) {
    let tr1 = $(this).parent()
    let tr2 = $(tr1).next()
    let streamKey = $(tr1).find('input').val()
    console.log(streamKey)
    let stream = streams[streamKey]
    console.log(stream.name)
    let pre = $(tr2).find('pre')
    $(pre).empty()
    $(pre).append(JSON.stringify(stream, streamKeyFilter, 2))
    $(tr2).toggle()
  })
})

//------------------------------------------------------
// toInitialCaps
//------------------------------------------------------

function toInitialCaps(s) {
  return s.substring(0,1).toUpperCase() + s.substring(1)
}

//------------------------------------------------------
// toDateTime
//------------------------------------------------------

function toDateTime(date) {
  return date.toISOString().slice(0,19).replace('T', ' ');
}
