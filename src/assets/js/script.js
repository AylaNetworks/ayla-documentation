$(function() {
  var menuItemId = $('#menu-item-id').html();
  $('#' + menuItemId).addClass('active');

  if(menuItemId === 'devices' || menuItemId === 'cloud' || menuItemId === 'apps') {
    var url = $(location).attr('href').replace('.html', '');
    var a = url.split("/");

    if(a[a.length-1] !== 'index') {
      var sideNavId = '#' + a[a.length-3] + '-' + a[a.length-2] + '-' + a[a.length-1];
      if($(sideNavId).length > 0) {
        openBook($(sideNavId).parent('ol'));
        $(sideNavId).children('a').first().addClass('active');
      }
    }
  }
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

function openBook(ol) {
  var img = $(ol).parent('li').children('span').first().children('img').first();
  var src = $(img).attr('src');
  var path = src.substring(0, src.lastIndexOf("/"));
  $(img).attr('src', path + '/book-open-icon.png');
  $(ol).show();
}

function closeBook(ol) {
  var img = $(ol).parent('li').children('span').first().children('img').first();
  var src = $(img).attr('src');
  var path = src.substring(0, src.lastIndexOf("/"));
  $(img).attr('src', path + '/book-blue-icon.png');
  $(ol).hide();
}
