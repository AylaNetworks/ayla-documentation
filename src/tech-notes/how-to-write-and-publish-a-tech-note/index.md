---
title: How to write and publish a tech note
layout: site.html
---

Thank you for writing a tech note!

### Process

1. Text or email a title to Matt Hagen. Matt will send you a link to a Github folder dedicated to your tech note. The folder will contain a text file named `index.md`. The `.md` stands for [markdown](https://guides.github.com/features/mastering-markdown). 
1. Click on the `index.md` file.
1. Click on the pencil icon. If you need access rights, contact Matt for help.
1. Write your tech note. 
1. If you need to include supplemental files (e.g. image files), or if you have any questions, contact Matt for help.
1. When you are finished, contact Matt who will work with you to perfect and publish your tech note. 

### Writing tips

* Focus on writing accurate content. Don't focus on look and feel.
* Minimize the use of headings. If necessary, use Level 3 headings (`### Level 3`) to group your content as you see on this page. In most cases, this should suffice. If necessary, use Level 2 headings (`## Level 2`) to group Level 3 headings and content.
* When in doubt, write a set of steps. Each step should tell the reader to do something. And, each step should start with a verb (e.g. *Click ...*) or a prepositional phrase followed by a verb (e.g. *When you are finished, contact ...*). For an example, see the [Process](#process) section above.

### Markdown tips

[Browse to this page](https://github.com/AylaNetworks/ayla-documentation/blob/master/src/tech-notes/how-to-write-and-publish-a-tech-note/index.md), and click `Raw`, to see the following tips in markdown.

This is a paragraph:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is **strong**.

This is an unordered list:

* Green
* Red
    * Maroon
    * Brick
* Blue

This is an ordered list:

1. Green
1. Red
    1. Maroon
    1. Brick
1. Blue 

This is a link to [Google](https://www.google.com/).

This is inline code: `cd ~/dir1/dir2`.

This is a code snippet:

```
$(function() {
  $("select.ayla-regions").change(function() {
    writeRegionUrls()
    displayAccounts()
  })
})
```

This is an image:

<img src="img-600.png" width="300" height="180">

This is a table:

|First Name|Last Name|Nationality|
|-|-|-|
|Audrey|Tautou|French|
|山﨑|賢人|Japanese|

This is an ordered list with a code snippet and an image:

1. Do this ...
    ```
    $(function() {
      $("select.ayla-regions").change(function() {
        writeRegionUrls()
        displayAccounts()
      })
    })
    ```
1. Do this ...
  <img src="img-600.png" width="300" height="180">
1. Do this ...