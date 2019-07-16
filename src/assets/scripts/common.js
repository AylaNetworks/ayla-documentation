$(function() {
  var selector = '#' + window.location.pathname.substring(1).slice(0,-1).replace(/\//g, '-');
  let a = selector.split('-');
  if(selector === '#') {
    $('.navbar-brand').focus()
  } else if (selector === '#search') {
    $('#search-box').focus()
  } else if (a[0] === '#posts' || a[0] === '#glossary') {
    $(a[0]).addClass('active');
    $(a[0]).children('a').focus()
  } else {
    if($(a[0]).is(":visible")) {
      $(a[0]).addClass('active');
      if(a[0] === selector) {
        $(a[0]).children('a').focus()
      }
    }
    if(a[0] !== selector && $(selector).is(":visible")) {
      $(selector).addClass('active');
      $(selector).focus()
    }
  }
});

function enableTab(e) {
  if (e.keyCode === 9) { // tab key
    document.body.classList.add('tab-enabled');
    window.removeEventListener('keydown', enableTab);
  }
}
window.addEventListener('keydown', enableTab);

$(function() {
  $('img.title-icon').click(function(event) {
    var file = $(this).attr('src');
    if(file === '/assets/images/icon-none.png') {
      $(this).attr('src', '/assets/images/icon-block.png')
      $('img.chapter-icon').attr('src', '/assets/images/icon-block.png')
      $('div.pages').show()
    } else {
      location.href = $('#sidebar a.active').attr('href')
    }
  });
});

$(function() {
  $('img.chapter-icon').click(function(event) {
    var div = $(this).next('div')
    if($(div).is(":visible")) {
      $(this).attr('src', '/assets/images/icon-none.png');
      $(div).hide();
    } else {
      $(this).attr('src', '/assets/images/icon-block.png');
      $(div).show();
    }
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

$(function() {
  $(".version-select").change(function() {
    $(this).blur()
    location.href = $('.version-select option:selected').val()
  })
})
