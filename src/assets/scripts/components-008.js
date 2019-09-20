streamUrl = 'wss://stream.aylanetworks.com/stream'
var streams = {}
var nextStreamId = 1
var streamPropFilter = ['url','key','beginningSeqId','endingSeqId','eventType','numEvents','numHBs']

/*
Login/Logout
Access Rules
Subscriptions
Event Streams
Stream class
Events
Generic
*/

/*------------------------------------------------------
Ayla Components: on load
------------------------------------------------------*/

$(function () {
  if ($("body.has-ayla-components").length) {
    displayMessage('Yes, this page has at least one Ayla component.')

    $("#login-menu-item").removeClass("d-none")

    if(MyAyla.isLoggedIn()) {
      displayMessage('And, yes, the user is logged in.')
      getAylaComponents()

    } else {
      displayMessage('But, no, the user is not logged in.')
    }

  } else {
    displayMessage('No, this page does not have any Ayla components.')
  }
})

/*------------------------------------------------------
Ayla Components: get
------------------------------------------------------*/

function getAylaComponents() {
  if ($('#access-rules').length) {getAccessRules()}
  if ($('#subscriptions').length) {getSubscriptions()}
}

/*------------------------------------------------------
Login/Logout: Login
------------------------------------------------------*/

$(function () {
  $('#login-form').submit(function (event) {
    event.preventDefault()
    $('body').trigger('click')
    var email = $('#email').val()
    var password = $('#password').val()
    var appId = $('#appId').val()
    var appSecret = $('#appSecret').val()
    MyAyla.login(email, password, appId, appSecret, function (data) {
      $('#account-link').html('Logout')
      // Can do stuff here.
    }, displayError)
  })
})

/*------------------------------------------------------
Login/Logout: Logout
------------------------------------------------------*/

$(function () {
  $('#logout-form').submit(function (event) {
    event.preventDefault()
    $('body').trigger('click')
    // emptyAll()
    MyAyla.logout(function (data) {
      $('#account-link').html('Login')
    }, displayError)
  })
})

/*------------------------------------------------------
Login/Logout: On Load
------------------------------------------------------*/

$(function() {
  if(MyAyla.isLoggedIn()) {
    $('#account-link').html('Logout')
    //getAccount()
  } else {
    $('#account-link').html('Login')
    //getServerConfiguration()
  }
})

$(function() {$('.click-body').click(function(event) {$('body').trigger('click')})})

/*------------------------------------------------------
Login/Logout: On click menu item, show appropriate form.
------------------------------------------------------*/

$(function() {
  $('#account-link').click(function(event) {
    if(MyAyla.isLoggedIn()) {
      $('#login-form').hide()
      $('#logout-form').show()
    } else {
      let appId = MyAyla.getAppId()
      if(appId) {$('#appId').val(appId)}
      let appSecret = MyAyla.getAppSecret()
      if(appSecret) {$('#appSecret').val(appSecret)}
      $('#login-form').show()
      $('#logout-form').hide()
    }
  })
})

/*------------------------------------------------------
Access Rules: Create
------------------------------------------------------*/

$(function() {
  $('#create-access-rule-form').submit(function(event) {
    displayMessage('submit #create-access-rule-form')

    let oemModel = $('#create-access-rule-oem-model').val()
    if(!oemModel) {oemModel = '*'}
    let propertyName = $('#create-access-rule-property-name').val()
    if(!propertyName) {propertyName = "*"}

    let data = {
      "subscription_type": $('#create-access-rule-subscription-type').val(),
      "role": $('#create-access-rule-role').val(),
      "oem_model": oemModel,
      "property_name": propertyName,
      "client_type": $('#create-subscription-client-type').val()
    }

    MyAyla.createAccessRule(data, function (data) {
      displayAccessRule(data.OemAccessRule)
    }, displayError)

    $('#create-access-rule-form').get(0).reset()
    $('#create-access-rule-form-collapse').removeClass('show')
  })
})

/*------------------------------------------------------
Access Rules: Get
------------------------------------------------------*/

function getAccessRules() {
  displayMessage('getAccessRules')

  MyAyla.getAccessRules(function (rules) {
    $('#access-rules > tbody').empty()
    rules.forEach(function(data) {
      displayAccessRule(data.OemAccessRule)
    })
  }, displayError)
}

/*------------------------------------------------------
Access Rules: Display
------------------------------------------------------*/

function displayAccessRule(rule) {
  let item = ''
  + '<tr class="summary simple-details">'
  + '<td class="chk"><input type="checkbox" value="' + rule.id + '"></td>'
  + '<td>' + rule.oem_model + '</td>'
  + '<td>' + rule.property_name + '</td>'
  + '<td>' + rule.subscription_type + '</td>'
  + '</tr>'
  + '<tr class="details" style="display:none;">'
  + '<td>&nbsp;</td>'
  + '<td colspan="4"><pre>' + JSON.stringify(rule, null, 2) + '</pre></td>'
  + '</tr>'
  $('#access-rules > tbody').append(item)
}

/*------------------------------------------------------
Access Rules: Delete
------------------------------------------------------*/

$(function() {
  $('#delete-access-rules-btn').click(function(event) {
    displayMessage('click #delete-access-rules-btn')

    $('#access-rules tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#access-rules tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      MyAyla.deleteAccessRule($(checkbox).val(), function(data) {
        let tr1 = $(checkbox).closest('tr')
        let tr2 = $(tr1).next()
        $(tr1).remove()
        $(tr2).remove()
      }, displayError)
    })
  })
})

/*------------------------------------------------------
Subscriptions: Create
------------------------------------------------------*/

$(function() {
  $('#create-subscription-form').submit(function(event) {
    displayMessage('submit #create-subscription-form')

    let name = $('#create-subscription-name').val()
    if(!name) {name = $('#create-subscription-name').prop('placeholder')}

    let oemModel = $('#create-subscription-oem-model').val()
    if(!oemModel) {oemModel = '*'}

    let dsn = $('#create-subscription-dsn').val()
    if(!dsn) {dsn = '*'}

    let propertyName = $('#create-subscription-property-name').val()
    if(!propertyName) {propertyName = "*"}

    let data = {
      "name": name,
      "description": $('#create-subscription-description').val(),
      "subscription_type": $('#create-subscription-subscription-type').val(),
      "oem_model": oemModel,
      "dsn": dsn,
      "property_name": propertyName,
      "client_type": $('#create-subscription-client-type').val()
    }

    MyAyla.createSubscription(data, function (data) {
      displaySubscription(data.subscription)
    }, displayError)

    $('#create-subscription-form').get(0).reset()
    $('#create-subscription-form-collapse').removeClass('show')
  })
})

/*------------------------------------------------------
Subscriptions: Get
------------------------------------------------------*/

function getSubscriptions() {
  displayMessage('getSubscriptions')

  MyAyla.getSubscriptions(function (subscriptions) {
    $('#subscriptions > tbody').empty()
    subscriptions.forEach(function(data) {
      displaySubscription(data.subscription)
    })
  }, displayError)
}

/*------------------------------------------------------
Subscriptions: Deploy
------------------------------------------------------*/

$(function() {
  $('#deploy-subscriptions-btn').click(function(event) {
    displayMessage('click #deploy-subscriptions-btn')

    $('#subscriptions tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#subscriptions tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      $(checkbox).prop('checked', false).hide()
      $(checkbox).next('img').css('display', 'inline')
      let subscription = $(checkbox).data('details')
      let name = subscription.name
      let key = subscription.stream_key
      let eventType = subscription.subscription_type
      streams[key] = new Stream(name, streamUrl, key, eventType)
      monitorEventStream(streams[key])
      displayEventStream(streams[key])
    })
  })
})

/*------------------------------------------------------
Subscriptions: Promote
------------------------------------------------------*/

$(function() {
  $('#promote-subscription-btn').click(function(event) {
    displayMessage('click #promote-subscription-btn')

    $('#subscriptions tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#subscriptions tbody tr td input[type=checkbox]:checked')
    if(checkboxes.length) {
      let subscription = $(checkboxes[0]).data('details')
      let name = subscription.name
      let key = subscription.stream_key
      $('#event-stream-name').val(subscription.name)
      $('#stream-key').val(subscription.stream_key)
      $(checkboxes[0]).prop('checked', false)
      $('#create-event-stream-form-collapse').collapse('show')
    }
  })
})

/*------------------------------------------------------
Subscriptions: Display
------------------------------------------------------*/

function displaySubscription(subscription) {
  displayMessage('displaySubscription')

  var tr = $('<tr/>').addClass('summary simple-details')
  var input = $('<input/>').prop('type', 'checkbox').val(subscription.stream_key).data('details', subscription)
  var image = '<img src="/assets/images/green-circle-16.png" style="display:none;">'
  var td = $('<td/>').addClass('chk')
  td.append(input)
  td.append(image)
  tr.append(td)
  tr.append('<td>' + subscription.name + '</td>')
  $('#subscriptions > tbody').append(tr)
  tr = $('<tr/>').addClass('details').css('display', 'none')
  tr.append('<td>&nbsp;</td>')
  tr.append('<td><pre>' + JSON.stringify(subscription, null, 2) + '</pre></td>')
  $('#subscriptions > tbody').append(tr)
}

/*------------------------------------------------------
Subscriptions: Delete
------------------------------------------------------*/

$(function() {
  $('#delete-subscriptions-btn').click(function(event) {
    displayMessage('click #delete-subscriptions-btn')

    $('#subscriptions tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#subscriptions tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      MyAyla.deleteSubscription($(checkbox).data('details').id, function(data) {
        let tr1 = $(checkbox).closest('tr')
        let tr2 = $(tr1).next()
        $(tr1).remove()
        $(tr2).remove()
      }, displayError)
    })
  })
})

/*------------------------------------------------------
Event Streams: Create
------------------------------------------------------*/

$(function() {
  $('#create-event-stream-form').submit(function(event) {
    displayMessage('submit #create-event-stream-form')

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

    let bSeqId = $('#create-event-stream-beginning-seqid').val()
    let eSeqId = $('#create-event-stream-ending-seqid').val()

    var vs = $('#subscriptions input[type=checkbox]')
    $.each(vs, function(index, v) {
      if($(v).val() == key) {
        $(v).hide()
        $(v).next('img').css('display', 'inline')
      }
    })

    streams[key] = new Stream(name, streamUrl, key, 'unknown', bSeqId, eSeqId)
    monitorEventStream(streams[key])
    displayEventStream(streams[key])

    $('#create-event-stream-form').get(0).reset()
    $('#create-event-stream-form-collapse').removeClass('show')
  })
})

/*------------------------------------------------------
Event Streams: Display
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
  $('#dss-event-streams > tbody').append(item)
}

/*------------------------------------------------------
Event Streams: Display Details
------------------------------------------------------*/

$(function() {
  $("#dss-event-streams").delegate('tr td:not(.chk)', "click", function(e) {
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
Event Streams: Delete
------------------------------------------------------*/

$(function() {
  $('#delete-event-streams-btn').click(function(event) {
    $('#dss-event-streams tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#dss-event-streams tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      let key = $(checkbox).val()
      streams[key].socket.close()
      delete streams[key]
      let tr1 = $(checkbox).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()
      //$('#subscriptions input[type=checkbox][value=' + key + ']').show()
      var vs = $('#subscriptions input[type=checkbox]')
      $.each(vs, function(index, v) {
        if($(v).val() == key) {
          $(v).show()
          $(v).next('img').hide()
        }
      })
    })
  })
})

/*------------------------------------------------------
Streams class: Constructor
------------------------------------------------------*/

class Stream {
  constructor(name, url, key, eventType='unknown', bSeqId=null, eSeqId=null) {
    this.id = nextStreamId++
    this.name = name
    this.url = url
    this.key = key
    this.eventType = eventType
    this.beginningSeqId = bSeqId
    this.endingSeqId = eSeqId
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
Streams class: processEvent
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
Streams class: monitorEventStream
------------------------------------------------------*/

function monitorEventStream(stream) {

  stream.socket.onopen = function(msg) {
    displayMessage('onopen for stream key ' + stream.key)
  }

  stream.socket.onerror = function(msg) {
    displayMessage('onerror and error is ' + msg)
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
        displayMessage('ERROR: Event split into ' + arr.length + 'substrings.')
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
    displayMessage('onclose for stream key ' + stream.key)
  }
}

/*------------------------------------------------------
Events: Display
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
  $('#dss-events > tbody').prepend(item)
}

/*------------------------------------------------------
Events: Display Details
------------------------------------------------------*/

$(function() {
  $("#dss-events").delegate('tr td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
Events: Delete
------------------------------------------------------*/

$(function() {
  $('#delete-events-btn').click(function(event) {
    displayMessage('click #delete-events-btn')

    $('#dss-events tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#dss-events tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      let tr1 = $(checkbox).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()
    })
  })
})

/*------------------------------------------------------
Generic: Display Details
------------------------------------------------------*/

$(function() {
  $("body div.cmpt").delegate('tr.simple-details td:not(.chk)', "click", function(e) {
    $(this).parent().next().toggle()
  })
})

/*------------------------------------------------------
Generic: Select All / Deselect All
------------------------------------------------------*/

$(function() {
  $('div.cmpt table thead tr th input[type=checkbox]').click(function(event) {
    let table = $(this).closest('table')
    if($(this).prop('checked')) {
      $(table).find('tbody tr td input[type=checkbox]').prop('checked', true)
    } else {
      $(table).find('tbody tr td input[type=checkbox]').prop('checked', false)
    }
  })
})

/*------------------------------------------------------
displayError and displayMessage
------------------------------------------------------*/

function displayError(status) {
  displayMessage(status.code + ' ' + status.text)
}

function displayMessage(msg) {
  console.log(msg)
}
