var domain = window.location.origin

/*------------------------------------------------------
Click Magnifying Glass
------------------------------------------------------*/

$(function() {
  $('#search-icon').click(function(event) {
    location.href = '/search'
  });
});

/*------------------------------------------------------
Press Enter in Search Box
------------------------------------------------------*/

$(function() {
  $('#search-box').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      var searchStr = $('#search-box').val() 
      search(searchStr)
    }
    event.stopPropagation();
  });
});

/*------------------------------------------------------
Click Search Button next to Search Box
------------------------------------------------------*/

$(function() {
  $('#search-button').click(function(event) {
    var searchStr = $('#search-box').val()
    search(searchStr)
  })
})

/*------------------------------------------------------
Perform search and call display
------------------------------------------------------*/

function search(searchStr) {
  axios({
    method: 'get',
    url: domain + '/api/v1/search?q=' + searchStr + '&size=100',
    headers: {'Accept': 'application/json'}
  })
  .then(function (response) {
    //console.log(JSON.stringify(response.data, null, 2))
    displaySearchPage(response.data)
  })
  .catch(function (error) {
    console.log(error)
  })
}

/*------------------------------------------------------
Display Search Page
------------------------------------------------------*/

function displaySearchPage(data) {

  $('#search-results').empty()

  if(data.hits.hit.length) {
    $('#no-search-results').hide()
    $.each(data.hits.hit, function(index, data) {
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
