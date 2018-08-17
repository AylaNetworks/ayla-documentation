$(function() {

  if($('#sidenav').length != 0) {
    var sideNavClass = $('#sidenav').attr("class").split(' ')[0];
    var itemId = '';

    var a = window.location.pathname.replace('.html', '').split("/");
    if(a.length >= 4) {
      itemId = '#' + a[a.length-2] + '-' + a[a.length-1];
      if($(itemId).length) {
        openBook($(itemId).parent('ol'));
        $(itemId).children('a').first().addClass('active');
      }
    }
  }

  if($('#content').attr("class").split(' ')[0] === 'feedback') {
    var category = getParameterByName('category');
    var item = getParameterByName('item');
    $('#category').val(category);
    $('#item').val(item);
  }

});

$(function() {
  $('#feedback').click(function(event) {

    event.preventDefault();

    var category = $('#content').attr("class").split(' ')[0];
    var item = 'none';

    if (category === 'home') {
      category = 'general';
    }

    else if(category === 'devices' || category === 'cloud' || category === 'apps') {
      var chapter = $('a.active').html();
      if(chapter) {
        var book = $('a.active').closest('ol').closest('li').children('span').first().html();
        item = book + ' > ' + chapter;
      }
    }

    else if(category === 'glossary' || category === 'certification') {
      var term = $('a.active').html();
      if(term) {
        item = term;
      }
    }

    window.location.href = '/content/feedback/?category=' + category + '&item=' + item;
  });
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
    /* $('a[aria-expanded=true]').attr('aria-expanded', 'false'); */
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

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
