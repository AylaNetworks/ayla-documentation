//*********************************************
// On Load
//*********************************************

$(function() {
  if($('#sidenav').length != 0) {
    var selector = '#' + window.location.pathname.substring(1).slice(0,-1).replace(/\//g, '-');
    if($(selector).length) {
      $(selector).addClass('active');
    }
  }
});

$(function() {
  let breadcrumbs = '<a href="/">Home</a>';
  if(window.location.pathname != '/') {

    let p1 = window.location.pathname.substr(1);
    let path = p1.substr(0, p1.lastIndexOf('/')) || p1;

    //let path = window.location.pathname.substr(1).slice(0, -1);
    let arr = path.split('/').map(s => {
      let arr2 = s.split('-').map(s2 => {
        return s2.charAt(0).toUpperCase() + s2.slice(1);
      });
      let r = '';
      arr2.forEach((t) => {
        r = r + ' ' + t;
      });
      return r;
    });
    arr.forEach((x, index) => {
      var p = window.location.pathname;
      var i = nthIndex(window.location.pathname, '/', index+2);
      var url = p.slice(0, i) + '/';
      breadcrumbs = breadcrumbs + ' ▸ ' + '<a href="' + url + ' ">' + x.trim() + '</a>';
    });
  }
  $('#breadcrumbs').html(breadcrumbs);
});

$(function() {
  if($('title').html().toLowerCase() === 'feedback') {
    $('#feedback').addClass('active');
    $('#page').val(getParameterByName('page'));
  }
});

//*********************************************
// Account Link Dropdown Event Handler
//*********************************************

$(function() {
  $('#account-link').click(function(event) {

    console.log('Dropdown link clicked.')

    if(Cookies.get('access_token')) {
      $('#login-form').hide();
      $('#logout-form').show();
    } else {
      $('#login-error-div').hide();
      $('#login-form').show();
      $('#logout-form').hide();
    }

  });
});

//*********************************************
// Login Form Event Handler
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
      url: "/assets/server/login.php",
      contentType: 'application/json',
      data: data,
      dataType: 'json'
    })
    .done(function(msg) {
      console.log('LOGIN MSG: ' + msg);
      try {
        var obj = JSON.parse(msg);
      } catch(e) {
        return;
      }

      if("error" in obj) {

        $('#login-error-text').html(obj.error);
        $('#login-error-div').show();
        setTimeout(function() {
          $('#login-submit').removeClass('active');
        }.bind('#login-submit'), 10);

      } 
      else {

        var date = new Date();
        date.setMonth(date.getMonth() + 10);
        var expires = date.toUTCString();
        Cookies.set('access_token', obj.access_token, { expires: 7 });
        Cookies.set('refresh_token', obj.refresh_token, { expires: 7 });
        $('#login-error-line').hide();
        $('#login-form').hide();
        $('#logout-form').show();
        console.log('ACCESS TOKEN COOKIE VALUE: ' + Cookies.get('access_token'));

      }      
    })
    .fail(function(jqXHR, textStatus) {
      console.log('FAIL: ' + textStatus);
    })
    .always(function() {
    });

  });
});

//*********************************************
// Login Close Event Handler
//*********************************************

$(function() {
  $('#login-close').click(function(event) {
      $("body").trigger("click");
  });
});

//*********************************************
// Logout Form Event Handler
//*********************************************

$(function() {
  $("#logout-form" ).submit(function(event) {
    event.preventDefault();
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    $('#login-error-div').hide();
    $('#login-form').show();
    $('#logout-form').hide();
    console.log('ACCESS TOKEN COOKIE VALUE: ' + Cookies.get('access_token'));
  });
});

//*********************************************
// Logout Close Event Handler
//*********************************************

$(function() {
  $('#logout-close').click(function(event) {
      $("body").trigger("click");
  });
});

//*********************************************
// 
//*********************************************

$(function() {
  $('#sidenav > ul > li > img.toggle').click(function(event) {
    var ol = $(this).parent('li').children('ol').first();
    if($(ol).is(":visible")) {
      $(this).attr('src', '/assets/images/chevron-none-24.png');
      $(ol).hide();
    } else {
      $(this).attr('src', '/assets/images/chevron-block-24.png');
      $(ol).show();
    }
  });
});

//*********************************************
// 
//*********************************************

$(function() {
  $('#feedback').click(function(event) {
    event.preventDefault();
    window.location.href = '/feedback/?page=' + window.location.pathname;
  });
});

//*********************************************
// 
//*********************************************

$(function() {
  $("#sidenav").mCustomScrollbar({theme: "minimal"});

  $(function() {
    $('#sidenavCollapse').on('click', function () {
      $('#sidenav, #content').toggleClass('active');
      $('.collapse.in').toggleClass('in');
    });
  });
});

//*********************************************
// 
//*********************************************

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//*********************************************
// 
//*********************************************

function nthIndex(str, pat, n){
  var L= str.length, i= -1;
  while(n-- && i++<L){
    i= str.indexOf(pat, i);
    if (i < 0) break;
  }
  return i;
}

//*********************************************
// 
//*********************************************
/*
$(function() {
  $("#search").keyup(function (e) {
   if (e.keyCode == 13) {
    alert("Search");  
   }
  });
});
*/