var urls = []
urls['cn'] = []
urls['cn']['dev'] = 'wss://stream.ayla.com.cn/stream/stream'
urls['cn']['field'] = 'wss://stream-field.ayla.com.cn/stream'
urls['eu'] = []
urls['eu']['field'] = 'wss://stream-field-eu.aylanetworks.com/stream'
urls['us'] = []
urls['us']['dev'] = 'wss://stream.aylanetworks.com/stream'
urls['us']['field'] = 'wss://stream-field.aylanetworks.com/stream'

var streams = {}
var nextStreamId = 1
var streamPropFilter = ['url','key','beginningSeqId','endingSeqId','eventType','numEvents','numHBs']

/*------------------------------------------------------
Set Service Url
------------------------------------------------------*/

function setServiceUrl() {
  let service = JSON.parse($('#service').val())
  $('#service-url').val(urls[service.region][service.deployment])
}

$(function() {
  setServiceUrl()
})

$(function() {
  $('#service').change(function() {
    setServiceUrl()
  })
})

$(function() {
  $('#create-event-stream-form').on('reset', function(e)
  {
    setTimeout(function() {setServiceUrl()})
  })
})

/*------------------------------------------------------
Stream
------------------------------------------------------*/

class Stream {
  constructor(name, url, key, bSeqId, eSeqId) {
    this.id = nextStreamId++
    this.name = name
    this.url = url
    this.key = key
    this.beginningSeqId = bSeqId
    this.endingSeqId = eSeqId
    this.eventType = 'unknown'
    this.numEvents = 0
    this.numHBs = 0

    let fullUrl = url + '?stream_key=' + key
    if(bSeqId) {
      fullUrl += '&seq_start=' + bSeqId
      if(eSeqId) {
        fullUrl += '&seq_end=' + eSeqId
      }
    }

    this.socket = new WebSocket(fullUrl)
  }
}

/*------------------------------------------------------
processEvent
------------------------------------------------------*/

function processEvent(stream, event) {
  var value = ''

  switch(event.metadata.event_type) {
    case 'connectivity':
    value = event.connection.status
    break

    case 'datapoint':
    value = event.datapoint.value
    if(value.length > 30) {value = value.slice(0, 30) + ' ...'}
      value = event.metadata.display_name + ' = ' + value
    break

    case 'datapointack':
    value = event.datapointack.value
    if(value.length > 30) {value = value.slice(0, 30) + ' ...'}
      value = event.metadata.display_name + ' = ' + value
    break

    case 'location':
    value = 'lat = ' + event.location_event.lat + ', long = ' + event.location_event.long
    break

    case 'registration':
    value = event.registration_event.registered
    break

    default:
    break
  }

  displayEvent(stream, event, value)
}

/*------------------------------------------------------
displayEvent
------------------------------------------------------*/

function displayEvent(stream, event, value) {
  let item = ''
  + '<tr class="summary">'
  + '<td class="chk"><input type="checkbox"></td>'
  + '<td>' + stream.id + '</td>'
  + '<td>' + event.seq + '</td>'
  + '<td>' + event.metadata.event_type + '</td>'
  + '<td>' + event.metadata.dsn.substr(event.metadata.dsn.length - 3) + '</td>'
  + '<td>' + value + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=5><pre>' + JSON.stringify(event, null, 2) + '</pre></td>'
  + '</tr>'
  $('#events > tbody').prepend(item)
}

/*------------------------------------------------------
displayEventStream
------------------------------------------------------*/

function displayEventStream(stream) {
  let item = ''
  + '<tr id="ID' + stream.key + '" class="summary">'
  + '<td class="chk"><input type="checkbox" value="' + stream.key + '"></td>'
  + '<td>' + stream.id + '</td>'
  + '<td class="name">' + stream.name + '</td>'
  + '<td class="numEvents">0</td>'
  + '<td class="numHBs">0</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan=4><pre>s</pre></td>'
  + '</tr>'
  $('#event-streams > tbody').append(item)
}

/*------------------------------------------------------
monitorEventStream
------------------------------------------------------*/

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
  }
}

/*------------------------------------------------------
Create Event Stream
------------------------------------------------------*/

$(function() {
  $('#create-event-stream-form').submit(function(event) {

    let key = $('#stream-key').val()

    for(var k in streams) {
      if(k === key) {
        displayMessage('This stream key is already in use.')
        return
      }
    }

    let name = $('#event-stream-name').val()
    if(!name) {
      name = $('#event-stream-name').prop('placeholder')
    }
    let url = $('#service-url').val()
    let bSeqId = $('#beginning-seqid').val()
    let eSeqId = $('#ending-seqid').val()

    streams[key] = new Stream(name, url, key, bSeqId, eSeqId)
    monitorEventStream(streams[key])
    displayEventStream(streams[key])

    $('#create-event-stream-form').get(0).reset()
  })
})

/*------------------------------------------------------
Clear Event Stream Form
------------------------------------------------------*/

$(function() {
  $('#create-event-stream-form .clear-form').click(function(event) {
    $('#create-event-stream-form').get(0).reset()
  })
})

/*------------------------------------------------------
Delete Events
------------------------------------------------------*/

$(function() {
  $('#delete-events-btn').click(function(event) {
    let checkboxes = $('#events tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      let tr1 = $(checkbox).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()
    })
  })
})

/*------------------------------------------------------
Select ALL Events
------------------------------------------------------*/

$(function() {
  $('#select-all-events-btn').click(function(event) {
    $('#events tbody tr td input[type=checkbox]').prop('checked', true)
  })
})

/*------------------------------------------------------
Deselect ALL Events
------------------------------------------------------*/

$(function() {
  $('#deselect-all-events-btn').click(function(event) {
    $('#events tbody tr td input[type=checkbox]').prop('checked', false)
  })
})

/*------------------------------------------------------
Delete Event Streams
------------------------------------------------------*/

$(function() {
  $('#delete-event-streams-btn').click(function(event) {
    let checkboxes = $('#event-streams tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {

      let key = $(checkbox).val()
      streams[key].socket.close()
      delete streams[key]

      let tr1 = $(checkbox).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()
    })
  })
})

/*------------------------------------------------------
Select All Event Streams
------------------------------------------------------*/

$(function() {
  $('#select-all-event-streams-btn').click(function(event) {
    $('#event-streams tbody tr td input[type=checkbox]').prop('checked', true)
  })
})

/*------------------------------------------------------
Deselect All Event Streams
------------------------------------------------------*/

$(function() {
  $('#deselect-all-event-streams-btn').click(function(event) {
    $('#event-streams tbody tr td input[type=checkbox]').prop('checked', false)
  })
})

/*------------------------------------------------------
Display Event Stream Details
------------------------------------------------------*/

$(function() {
  $("#event-streams").delegate('tr td:not(.chk)', "click", function(e) {
    let tr1 = $(this).parent()
    let tr2 = $(tr1).next()
    let key = $(tr1).find('input').val()
    let pre = $(tr2).find('pre')
    $(pre).empty()
    $(pre).append(JSON.stringify(streams[key], streamPropFilter, 2))
    $(tr2).toggle()
  })
})

/*------------------------------------------------------
Display Event Details
------------------------------------------------------*/

$(function() {
  $("#events").delegate('tr td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
displayMessage
------------------------------------------------------*/

function displayMessage(msg) {
  $('#msg-box span').html(msg)
  $('#msg-box').show()
}

$(function() {
  $('#msg-box button').click(function(event) {
    $('#msg-box').hide()
  })
})
