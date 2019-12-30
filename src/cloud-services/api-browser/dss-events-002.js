var streams = {}
var nextStreamId = 1
var streamPropFilter = ['url','key','beginningSeqId','endingSeqId','eventType','numEvents','numHBs']

/*------------------------------------------------------
class Stream constructor
------------------------------------------------------*/

class Stream {
  constructor(name, url, key, eventType='unknown', seqStart=null, seqEnd=null) {
    this.id = nextStreamId++
    this.name = name
    this.url = url
    this.key = key
    this.eventType = eventType
    this.seqStart = seqStart
    this.seqEnd = seqEnd
    this.numEvents = 0
    this.numHBs = 0

    let fullUrl = url + '?stream_key=' + key
    if(seqStart) {
      fullUrl += '&seq_start=' + seqStart
      if(seqEnd) {
        fullUrl += '&seq_end=' + seqEnd
      }
    }
    this.socket = new WebSocket(fullUrl)
  }
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

  addEvent(stream, event, value)
}

/*------------------------------------------------------
addEvent
------------------------------------------------------*/

function addEvent(stream, event, value) {
  let item = ''
  + '<tr class="summary simple-details">'
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
  $('#events-table > tbody').prepend(item)
}

/*------------------------------------------------------
Delete Events
------------------------------------------------------*/

$(function() {
  $('#delete-events-btn').click(function(event) {
    let checkboxes = $('#events-table tbody tr td input[type=checkbox]:checked')
    $('#events-table thead input[type=checkbox]').prop('checked', false)
    $.each(checkboxes, function(index, checkbox) {
      let tr1 = $(this).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()    
    })
  })
})

/*------------------------------------------------------
Toggle Details
------------------------------------------------------*/

$(function() {
  $("body div.panel").delegate('tr.simple-details td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
Select All / Deselect All
------------------------------------------------------*/

$(function() {
  $('div.panel table thead tr th input[type=checkbox]').click(function(event) {
    let table = $(this).closest('table')
    if($(this).prop('checked')) {
      $(table).find('tbody tr td input[type=checkbox]').prop('checked', true)
    } else {
      $(table).find('tbody tr td input[type=checkbox]').prop('checked', false)
    }
  })
})
