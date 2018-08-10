$(function() {

  var sideNavClass = $('#sidenav').attr("class").split(' ')[0];
  var itemId = '';

  if(sideNavClass === 'devices') {
    var a = window.location.pathname.replace('.html', '').split("/");
    if(a.length >= 5) {
      itemId = '#' + a[a.length-3] + '-' + a[a.length-2] + '-' + a[a.length-1];
      if($(itemId).length) {
        openBook($(itemId).parent('ol'));
        $(itemId).children('a').first().addClass('active');
      }
    }
  }

  else if(sideNavClass === 'apps') {
    var a = window.location.pathname.replace('.html', '').split("/");
    if(a.length >= 5) {
      itemId = '#' + a[a.length-3] + '-' + a[a.length-2] + '-' + a[a.length-1];
      if($(itemId).length) {
        openBook($(itemId).parent('ol'));
        $(itemId).children('a').first().addClass('active');
      }
    }
  }

  else if(sideNavClass === 'glossary') {
    var a = window.location.pathname.replace('.html', '').split("/");
    if(a.length >= 4) {
      itemId = '#' + a[a.length-2] + '-' + a[a.length-1];
      if($(itemId).length) {
        $(itemId).children('a').first().addClass('active');
      }
    }
  }

  //alert(sideNavClass);
  //alert(itemId);
});

$(function() {
  $('#sidenav > ul > li > span').click(function() {
    var ol = $(this).parent('li').children('ol').first();
    if($(ol).is(":hidden")) {
      openBook(ol);
    } else {
      closeBook(ol);
    }
  });
});

$(function() {
  $("#sidenav").mCustomScrollbar({
  theme: "minimal"
});

$(function() {
  $('#sidenavCollapse').on('click', function () {
    $('#sidenav, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  });
});

function openBook(ol) {
  //var img = $(ol).parent('li').children('span').first().children('img').first();
  //var src = $(img).attr('src');
  //var path = src.substring(0, src.lastIndexOf("/"));
  //$(img).attr('src', path + '/book-open-icon.png');
  $(ol).show();
}

function closeBook(ol) {
  //var img = $(ol).parent('li').children('span').first().children('img').first();
  //var src = $(img).attr('src');
  //var path = src.substring(0, src.lastIndexOf("/"));
  //$(img).attr('src', path + '/book-blue-icon.png');
  $(ol).hide();
}
