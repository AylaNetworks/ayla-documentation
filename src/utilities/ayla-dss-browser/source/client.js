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

var streamKeyFilter = ['url','streamKey']

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
    this.heartbeatCount = 0
    this.socket = new WebSocket(url + '?stream_key=' + streamKey)
    this.monitor(this)
  }

  monitor(stream) {

    stream.socket.onopen = function(event) {
      console.log('open')
    }

    stream.socket.onerror = function(error) {
      console.log('error is ' + error)
    }

    stream.socket.onmessage = function(event) {
      if(event.data.includes('|Z')) {
        stream.socket.send('Z')
        stream.heartbeatCount++
      } else {
        var arr = event.data.split('|')
        if(arr.length != 2) {
          console.log('ERROR: Event split into ' + arr.length + 'substrings.')
        } else {
          let event = JSON.parse(arr[1])
          stream.eventCount++
          stream.eventType = event.metadata.event_type
          console.log(JSON.stringify(stream, ['name','eventType','eventCount','heartbeatCount'], 2))
          displayEvent(event)
        }
      }
    }

    stream.socket.onclose = function(event) {
      console.log('close')
    }
  }
}

//------------------------------------------------------
// displayEvent
//------------------------------------------------------

function displayEvent(event) {

  console.log('in displayEvent')

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
  let id = 'ID' + new Date().getTime()
  let item = ''
  + '<div class="form-check event-stream">'
  + '<input type="checkbox" class="form-check-input" value="' + stream.streamKey + '">'
  + '<span data-toggle="collapse" href="#' + id + '">'
  + '<label class="form-check-label collapsible">' + stream.name + '</label>'
  + '</span>'
  + '<div id="' + id + '" class="collapse">'
  + '<pre>' + JSON.stringify(stream, streamKeyFilter, 2) + '</pre>'
  + '</div>'
  + '</div>'
  $('#event-streams').append(item)
}

$(function() {
  $('.es-name').click(function(event) {
    $(this).parent().next('tr').toggle()
  })
})

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



    let stream = new Stream(name, url, streamKey, processEvents)
    displayEventStream(stream)

    // displayEvent({"seq": "1","metadata": {"oem_id": "0dfc7900","oem_model": "ledevb","dsn": "AC000W000340649","resource_tags": [],"event_type": "connectivity"},"connection": {"event_time": "2018-09-24T10:26:37Z","user_uuid": "40e45b84-690c-11e8-acf3-12f911dcfe40","status": "Online"}})

    $('#create-event-stream-form').get(0).reset()
  })
})

//------------------------------------------------------
// onClickDeleteEvent
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
// onClickDeleteEventStream
//------------------------------------------------------

$(function() {
  $('#delete-event-stream-btn').click(function(event) {
    let checkboxes = $('#event-streams div input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      console.log($(this).val())
      $(checkbox).parent().remove()
    })
  })
})

//------------------------------------------------------
// onClickSelectAllEvents
//------------------------------------------------------

$(function() {
  $('#select-all-events-btn').click(function(event) {
    $('#events div input[type=checkbox]').prop('checked', true)
  })
})

//------------------------------------------------------
// onClickDeselectAllEvents
//------------------------------------------------------

$(function() {
  $('#deselect-all-events-btn').click(function(event) {
    $('#events div input[type=checkbox]').prop('checked', false)
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
