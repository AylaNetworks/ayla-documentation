$(function() {
  $('#toggle-width').click(function(event) {
    event.preventDefault()
    if($('#core').hasClass('width-full')) {
      $('#core').removeClass('width-full')
      $('#core').addClass('width-medium')
    } else if ($('#core').hasClass('width-medium')) {
      $('#core').removeClass('width-medium')
      $('#core').addClass('width-narrow')
    } else if ($('#core').hasClass('width-narrow')) {
      $('#core').removeClass('width-narrow')
      $('#core').addClass('width-full')
    }
  })
})

/*
$(function() {

})
*/