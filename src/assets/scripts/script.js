$(function() {
  if($('#sidenav').length != 0) {
    var selector = '#' + window.location.pathname.substring(1).slice(0,-1).replace(/\//g, '-') + ' > a';
    if($(selector).length) {
      $(selector).addClass('active');
    }
  }
});

$(function() {
  let breadcrumbs = '<a href="/">Home</a>';
  if(window.location.pathname != '/') {
    let path = window.location.pathname.substr(1).slice(0, -1);
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

$(function() {
  $('#feedback').click(function(event) {
    event.preventDefault();
    window.location.href = '/feedback/?page=' + $('#breadcrumbs').text();
  });
});

$(function() {
  $("#sidenav").mCustomScrollbar({theme: "minimal"});

  $(function() {
    $('#sidenavCollapse').on('click', function () {
      $('#sidenav, #content').toggleClass('active');
      $('.collapse.in').toggleClass('in');
    });
  });
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function nthIndex(str, pat, n){
  var L= str.length, i= -1;
  while(n-- && i++<L){
    i= str.indexOf(pat, i);
    if (i < 0) break;
  }
  return i;
}