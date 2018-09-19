//*********************************************
// Login Button Event Handler
//*********************************************

$(function() {
  $("#login-form" ).submit(function(event) {
    event.preventDefault();

    var email = $('#email').val();
    var password = $('#password').val();

    var data = JSON.stringify({
      "user": {
        "email": email,
        "password": password,
        "application": {
          "app_id": "alya-api-browser-id",
          "app_secret": "alya-api-browser-2tFsUL41FELUlyfrSMEZ4kNKwJg"
        }
      }
    });
  
    var jqxhr = $.ajax({
      method: "POST",
      url: "login.php",
      contentType: 'application/json',
      data: data,
      dataType: 'json'
    })
    .done(function(msg) {
      console.log(msg);
      var obj = JSON.parse(msg);
      if("error" in obj){
        $('#login').blur();
      } else {
        $('#password').val('');
        $('#password').attr('placeholder', '');
        $('#login').removeClass('btn-secondary').addClass('btn-success').html('Logout').blur();
        console.log(obj.access_token);
      }
    })
    .fail(function(jqXHR, textStatus) {
      console.log('FAIL: ' + textStatus);
    })
    .always(function() {
      // console.log('always');
    });
  });
});

//*********************************************
// Connect Button Event Handler
//*********************************************

$(function() {
  $( "#connect-form" ).submit(function( event ) {

    event.preventDefault();
  });
});

// var webSocket = null;
//$(function() {
//  $('#connect').click(function(event) {
//
/*
    var webSocketURL = 'ws://stream.aylanetworks.com?stream_key=9ba847f606054acab0fddf30f6c62f8b';

    try {
webSocket = new WebSocket(webSocketURL);



webSocket.onmessage = function (messageEvent) {


     {


webSocket.close();

    } catch (exception) {

    }

*/
//  });
//});