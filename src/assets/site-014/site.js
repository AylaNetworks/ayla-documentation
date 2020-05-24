/*------------------------------------------------------
On Load for pure JS
------------------------------------------------------*/

function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    callbackFunc();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

/*------------------------------------------------------
On Load: Assign active and focus.
------------------------------------------------------*/

$(function () {

  let selector = ''
  let tokens = ("#" + window.location.pathname.substring(1).slice(0, -1)).split("/");

  if(tokens.length > 1 && tokens[0] == '#tech-notes') {
    selector = tokens[0]
  } else {
    var last = tokens[tokens.length - 1];
    if (last.length > 1) {
      if (last[0] === "v" && parseInt(last[1])) {
        tokens.pop();
      }
    }
    selector = tokens.join("-");
  }

  if (selector === "#") {
    //$(".navbar-brand").focus();
    $("#getting-started").focus();
    $("#getting-started").addClass("active");
  } else if (selector === "#search") {
    $("#search-box").focus();
  } else {
    $(selector).addClass("active");
    $(selector).focus();
  }

  if($('#edit-icon').css('display') == 'inline') {
    console.log('Has edit-icon')
    $('#edit-icon a').attr('href', 'https://github.com/AylaNetworks/ayla-documentation/tree/master/src' + window.location.pathname + 'index.md')
  }

});

/*------------------------------------------------------
keydownListener
------------------------------------------------------*/

function keydownListener(e) {
  if (e.keyCode === 9) {
    document.body.classList.add("tab-enabled");
    window.removeEventListener("keydown", keydownListener);
  }
}

window.addEventListener("keydown", keydownListener);

/*------------------------------------------------------
Expand/Collapse sidebar icons.
------------------------------------------------------*/

$(function () {
  $("img.title-icon").click(function (event) {
    var file = $(this).attr("src");
    if (file === "/assets/images/icon-none.png") {
      $(this).attr("src", "/assets/images/icon-block.png");
      $("img.chapter-icon").attr("src", "/assets/images/icon-block.png");
      $("div.pages").show();
    } else {
      location.href = $("#sidebar a.active").attr("href");
    }
  });
});

$(function () {
  $("img.chapter-icon").click(function (event) {
    var div = $(this).next("div.pages");
    if ($(div).is(":visible")) {
      $(this).attr("src", "/assets/images/icon-none.png");
      $(div).hide();
    } else {
      $(this).attr("src", "/assets/images/icon-block.png");
      $(div).show();
    }
  });
});

/*------------------------------------------------------
Select Version
------------------------------------------------------*/

$(function () {
  $(".version-select").change(function () {
    $(this).blur();
    location.href = $(".version-select option:selected").val();
  });
});

/*------------------------------------------------------
Select Page Width
------------------------------------------------------*/

$(function () {
  $(".page-width").change(function () {
    $("#core").removeClass(function (index, className) {
      return (className.match(/(^|\s)width-\S+/g) || []).join(" ");
    });
    $("#core").addClass(this.value);
  });
});

/*------------------------------------------------------
pagebar stuff
------------------------------------------------------*/

var updatePagebar = true;

$(function () {
  if ($("body.has-pagebar").length) {
    updatePagebar = true;
    $('#pagebar a[href="#core-title"]').addClass("active");
    window.addEventListener("scroll", updatePagebarOnScroll);
  }
});

$(function () {
  $("#pagebar ul li a").click(function (event) {
    $("#pagebar ul li a").removeClass("active");
    $(this).addClass("active");
    updatePagebar = false;
  });
});

function updatePagebarOnScroll() {
  if (updatePagebar == false) {
    updatePagebar = true;
    return;
  }

  var a = $("#core h1, #core h2");
  if (a.length) {
    var found = false;
    for (var i = a.length - 1; i >= 0; i--) {
      var rect = a[i].getBoundingClientRect();
      if (rect.y <= 0.0) {
        found = true;
        if ($('#pagebar a[href="' + "#" + a[i].id + '"]').length) {
          $('#pagebar a[href="#core-title"]').removeClass("active");
          $("#pagebar a").removeClass("active");
          $('#pagebar a[href="' + "#" + a[i].id + '"]').addClass("active");
        }
        break;
      }
    }
    if (found == false) {
      $("#pagebar a").removeClass("active");
      $('#pagebar a[href="#core-title"]').addClass("active");
    }
  }
}

/*------------------------------------------------------
search stuff
------------------------------------------------------*/

var domain = window.location.origin

$(function () {
  $('#search-box').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      var searchStr = $('#search-box').val()
      search(searchStr)
    }
    event.stopPropagation();
  });
});

function search(searchStr) {
  searchStr = searchStr.replace(/ /g, '%20AND%20')
  let searchUrl = 'https://docs.aylanetworks.com/solr/ayla-docs/select'
  axios({
    method: 'get',
    url: searchUrl + '?q=' + searchStr,
    headers: { 'Accept': 'application/json' }
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data, null, 2))
      displaySearchResults(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

function displaySearchResults(data) {
  $('.active').removeClass('active')
  $('div.pages').hide()
  $('img.chapter-icon').attr("src", "/assets/images/icon-none.png")
  $('#core-title').text('Search Results')
  $('#core-content').empty()
  $('body').removeClass('has-pagebar')

  if (data.response.docs.length) {
    var results = $('<ol/>')
    $.each(data.response.docs, function (index, doc) {
      $(results).append(''
        + '<li>'
        + '<a href="' + doc.url + '">' + doc.title + '</a>. '
        + doc.description
        + '</li>'
      )
    })
    $('#core-content').append(results)
  } else {
    $('#core-content').append('<p>No search results</p>')
  }
}

/*------------------------------------------------------
download
------------------------------------------------------*/

$(function () {
  $('a.download').click(function (event) {
    event.preventDefault()
    console.log('This is a download')
  })
})