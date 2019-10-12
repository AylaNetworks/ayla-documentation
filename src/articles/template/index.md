---
title: Template
---

<span class="by-line">By First Last on Month Day, Year</span>

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Heading 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

1. Tempor incididunt ut labore.
1. Sed do eiusmod tempor incididunt.
1. Voluptate velit esse cillum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

* Tempor incididunt ut labore.
* Sed do eiusmod tempor incididunt.
* Voluptate velit esse cillum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

|Lorem ipsum|Consectetur|Non Proident|
|-|-|-|
|Dolor in reprehenderit|Sed do|Est laborum|
|Esse cillum|Ea commodo|Qui officia|
|Deserunt mollit|Culpa qui|Proident|

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Here is a link to the [Ayla Development Kit](/bar/ayla-development-kit).

Here is an inline code example: <code>cd &#126;/tree/cedar</code>.

This is a pre block:

<pre>
$(function() {
  $('#delete-events-btn').click(function(event) {
    $('#events tr th input[type=checkbox]').prop('checked', false)
    let checkboxes = $('#events tbody tr td input[type=checkbox]:checked')
    $.each(checkboxes, function(index, checkbox) {
      let tr1 = $(checkbox).closest('tr')
      let tr2 = $(tr1).next()
      $(tr1).remove()
      $(tr2).remove()
    })
  })
})
</pre>

img-800.png
<img src="img-800.png">

img-600.png
<img src="img-600.png">

img-400.png
<img src="img-400.png">

img-200.png
<img src="img-200.png">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

1. img-800.png
<img src="img-800.png">
1. img-600.png
<img src="img-600.png">
1. img-400.png
<img src="img-400.png">
1. img-200.png
<img src="img-200.png">
1. This is preformatted code inside an ordered list:
<pre>
$ xcode-select --install
</pre>

