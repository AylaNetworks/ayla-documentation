/*------------------------------------------------------
On Load: Assign active and focus.
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
    //$(".navbar-brand").focus();
    $("#getting-started").focus();
    $("#getting-started").addClass("active");
  } else if (selector === "#search") {
    $("#search-box").focus();
  } else {
    $(selector).addClass("active");
    $(selector).focus();
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

// Get this from ayla-proxy-server.js
// var domain = window.location.origin

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

// Move this function into ayla-proxy-server.js.

function search(searchStr) {
  axios({
    method: 'get',
    url: domain + '/api/v1/search?q=' + searchStr + '&size=100',
    headers: { 'Accept': 'application/json' }
  })
    .then(function (response) {
      // console.log(JSON.stringify(response.data, null, 2))
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

  if (data.hits.hit.length) {
    var results = $('<ol/>')
    $.each(data.hits.hit, function (index, data) {
      $(results).append(''
        + '<li>'
        + '<a href="' + data.fields.url + '">' + data.fields.title + '</a>. '
        + data.fields.summary
        + '</li>'
      )
    })
    $('#core-content').append(results)
  } else {
    $('#core-content').append('<p>No search results</p>')
  }
}

var serviceUrls = new Array();
serviceUrls[0] = new Array(); //china-dev
serviceUrls[0][0] = "application.ayla.com.cn";
serviceUrls[0][1] = "stream.ayla.com.cn";
serviceUrls[0][2] = "ads-dev.ayla.com.cn";
serviceUrls[0][3] = "api-dev.ayla.com.cn";
serviceUrls[0][4] = "ais.ayla.com.cn";
serviceUrls[0][5] = "log.ayla.com.cn";
serviceUrls[0][6] = "ans.ayla.com.cn";
serviceUrls[0][7] = "rulesservice-dev.ayla.com.cn";
serviceUrls[0][8] = "user-dev.ayla.com.cn";
serviceUrls[0][9] = "zigbee.ayla.com.cn";
serviceUrls[1] = new Array(); // china-field
serviceUrls[1][0] = "app-field.ayla.com.cn";
serviceUrls[1][1] = "stream-field.ayla.com.cn";
serviceUrls[1][2] = "ads-field.ayla.com.cn";
serviceUrls[1][3] = "api-field.ayla.com.cn";
serviceUrls[1][4] = "ais-field.ayla.com.cn";
serviceUrls[1][5] = "log-field.ayla.com.cn";
serviceUrls[1][6] = "ans-field.ayla.com.cn";
serviceUrls[1][7] = "rulesservice-field.ayla.com.cn";
serviceUrls[1][8] = "user-field.ayla.com.cn";
serviceUrls[1][9] = "zigbee-field.ayla.com.cn";
serviceUrls[2] = new Array(); // eu-field
serviceUrls[2][0] = "app-field-eu.aylanetworks.com";
serviceUrls[2][1] = "stream-field-eu.aylanetworks.com";
serviceUrls[2][2] = "ads-field-eu.aylanetworks.com";
serviceUrls[2][3] = "api-field-eu.aylanetworks.com";
serviceUrls[2][4] = "ais-field-eu.aylanetworks.com";
serviceUrls[2][5] = "log-field-eu.aylanetworks.com";
serviceUrls[2][6] = "ans-field-eu.aylanetworks.com";
serviceUrls[2][7] = "rulesservice-field-eu.aylanetworks.com";
serviceUrls[2][8] = "user-field-eu.aylanetworks.com";
serviceUrls[2][9] = "zigbee-field-eu.aylanetworks.com";
serviceUrls[3] = new Array(); // us-dev
serviceUrls[3][0] = "application.aylanetworks.com";
serviceUrls[3][1] = "stream.aylanetworks.com";
serviceUrls[3][2] = "ads-dev.aylanetworks.com";
serviceUrls[3][3] = "api-dev.aylanetworks.com";
serviceUrls[3][4] = "ais.aylanetworks.com";
serviceUrls[3][5] = "log.aylanetworks.com";
serviceUrls[3][6] = "ans.aylanetworks.com";
serviceUrls[3][7] = "rulesservice-dev.aylanetworks.com";
serviceUrls[3][8] = "user-dev.aylanetworks.com";
serviceUrls[3][9] = "zigbee.aylanetworks.com";
serviceUrls[4] = new Array(); // us-field
serviceUrls[4][0] = "app-field.aylanetworks.com";
serviceUrls[4][1] = "stream-field.aylanetworks.com";
serviceUrls[4][2] = "ads-field.aylanetworks.com";
serviceUrls[4][3] = "api-field.aylanetworks.com";
serviceUrls[4][4] = "ais-field.aylanetworks.com";
serviceUrls[4][5] = "log-field.aylanetworks.com";
serviceUrls[4][6] = "ans-field.aylanetworks.com";
serviceUrls[4][7] = "rulesservice-field.aylanetworks.com";
serviceUrls[4][8] = "user-field.aylanetworks.com";
serviceUrls[4][9] = "zigbee-field.aylanetworks.com";

$(function () {
  $("select.service-region").change(function () {
    var p = 'https://'
    var region = $("select.service-region option:selected").val();
    $('#application-service-url').text(p + serviceUrls[region][0]);
    $('#datastream-service-url').text(p + serviceUrls[region][1]);
    $('#device-service-url').text(p + serviceUrls[region][2]);
    $('#factory-proxy-service-url').text(p + serviceUrls[region][3]);
    $('#image-service-url').text(p + serviceUrls[region][4]);
    $('#log-service-url').text(p + serviceUrls[region][5]);
    $('#notification-service-url').text(p + serviceUrls[region][6]);
    if(serviceUrls[region][7]) {
      $('#rules-service-url').text(p + serviceUrls[region][7]);
    } else {
      $('#rules-service-url').text('');
    }
    $('#user-service-url').text(p + serviceUrls[region][8]);
    $('#zigbee-service-url').text(p + serviceUrls[region][9]);
  });
});
