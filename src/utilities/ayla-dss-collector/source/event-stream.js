const WebSocket = require('ws')

class EventStream {

  //----------------------------------------------------
  // constructor
  //----------------------------------------------------

  constructor(name, subscription, service_url, state, processEvent) {

    this.stream_id = subscription.id
    this.name = name
    this.subscription = subscription
    this.service_url = service_url
    this.state = state
    this.socket = null
    this.process_event = processEvent
  }

  //----------------------------------------------------
  // open
  //----------------------------------------------------

  open() {
    if(!this.socket) {
      this.socket = new WebSocket(this.service_url + '?stream_key=' + this.subscription.stream_key)
      this.state = 'open'
      this.monitor(this.socket, this.name, this.process_event)
    } else {
      console.log('EventStream: Cannot open socket. It is already open.')
    }
  }

  //----------------------------------------------------
  // close
  //
  // Closing a socket seems to delete the Ayla DSS subscription.
  // Instead, call DELETE /stream?stream_key=<stream-key>.
  // Then, perhaps, close the socket? 
  //----------------------------------------------------

  close(code, msg) {
    if(this.socket) {
      this.socket.close(code, msg)
      this.socket = null
      this.state = 'closed'
    } else {
      console.log('Cannot close socket. It is already closed.')
    }
  }

  //----------------------------------------------------
  // monitor
  //----------------------------------------------------

  monitor(socket, name, processEvent) {

    socket.on('open', function() {
      console.log('Opened event stream: ' + name);
    });

    socket.on('message', function(data) {
      if(data.indexOf("|Z") !== -1) {
        socket.send("Z");
        console.log('Heartbeat: ' + name);
      } else {
        var a = data.split('|');
        if(a.length != 2) {console.log('Cannot parse event: ' + name);} 
        else {processEvent(JSON.parse(a[1]));}
      }
    });

    socket.on('close', function(code, reason) {
      console.log(reason);
    });

    socket.on('error', function(error) {
      console.log(error);
    });

    socket.on('unexpected-response', function(req, res) {
      console.log('Unexpected event: ' + name);
    });
  }
}

module.exports = EventStream
