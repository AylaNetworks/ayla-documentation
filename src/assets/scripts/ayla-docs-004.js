/*------------------------------------------------------
On Load: Generally assign active class.
------------------------------------------------------*/

$(function () {
  let tokens = ("#" + window.location.pathname.substring(1).slice(0, -1)).split("/");
  var last = tokens[tokens.length - 1];
  if (last.length > 1) {
    if (last[0] === "v" && parseInt(last[1])) {
      tokens.pop();
    }
  }
  let selector = tokens.join("-");

  if (selector === "#") {
    $(".navbar-brand").focus();
  } else if (selector === "#search") {
    $("#search-box").focus();
  } else if (tokens[0] === "#posts" || tokens[0] === "#glossary") {
    $(tokens[0]).addClass("active");
    $(tokens[0])
      .children("a")
      .focus();
  } else {
    if ($(tokens[0]).is(":visible")) {
      $(tokens[0]).addClass("active");
      if (tokens[0] === selector) {
        $(tokens[0])
          .children("a")
          .focus();
      }
    }
    if (tokens[0] !== selector && $(selector).is(":visible")) {
      $(selector).addClass("active");
      $(selector).focus();
    }
  }
});

/*------------------------------------------------------
keydownListener
------------------------------------------------------*/

function keydownListener(e) {
  // console.log('Key Code = ' + e.keyCode)

  if (e.keyCode === 9) {
    // tab key
    document.body.classList.add("tab-enabled");
    window.removeEventListener("keydown", keydownListener);
  }
}

window.addEventListener("keydown", keydownListener);

/*------------------------------------------------------
Expand/Collapse sidebar chevrons.
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
    var div = $(this).next("div");
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

// Get this from ayla-proxy-server.js
// var domain = window.location.origin

$(function () {
  $('#search-icon').click(function (event) {
    location.href = '/search'
  });
});

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

$(function () {
  $('#search-button').click(function (event) {
    var searchStr = $('#search-box').val()
    search(searchStr)
  })
})

function search(searchStr) {
  axios({
    method: 'get',
    url: domain + '/api/v1/search?q=' + searchStr + '&size=100',
    headers: { 'Accept': 'application/json' }
  })
    .then(function (response) {
      //console.log(JSON.stringify(response.data, null, 2))
      displaySearchPage(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

function displaySearchPage(data) {

  $('#search-results').empty()

  if (data.hits.hit.length) {
    $('#no-search-results').hide()
    $.each(data.hits.hit, function (index, data) {
      $('#search-results').append(''
        + '<li>'
        + '<a href="' + data.fields.url + '" target="_blank">' + data.fields.title + '</a>. '
        + data.fields.summary
        + '</li>'
      )
    })
  } else {
    $('#no-search-results').show()
  }
}

/*------------------------------------------------------
login/logout stuff
------------------------------------------------------*/

function saveLoginMenuItemState(state) {
  var date = new Date();
  date.setMonth(date.getMonth() + 10);
  var expires = date.toUTCString();
  Cookies.set("login_menu_state", state, { expires: 7 });
}

function getLoginMenuItemState() {
  return Cookies.get("login_menu_state");
}

function deleteLoginMenuItemState() {
  Cookies.remove("login_menu_state");
}

$(function () {
  if (getLoginMenuItemState() == 'true') {
    $("#login-menu-item").removeClass("d-none");
    $("#show-login-menu-item").prop("checked", true);
  } else {
    $("#login-menu-item").addClass("d-none");
    $("#show-login-menu-item").prop("checked", false);
  }
});

$(function () {
  $("#show-login-menu-item").change(function () {
    if ($(this).is(":checked")) {
      $("#login-menu-item").removeClass("d-none");
      saveLoginMenuItemState("true");
    } else {
      $("#login-menu-item").addClass("d-none");
      saveLoginMenuItemState("false");
    }
  });
});

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
      // getAccount()
    }, displayError)
  })
})

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

------------------------------------------------------*/

function displayError(status) {
  console.log(status)
}
