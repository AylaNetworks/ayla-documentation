---
title: How to write and publish a tech note
---

Need to create, update, or clarify Ayla-related content for a prospective customer, existing customer, partner, or colleague? Write and publish a Tech Note, and send the link! The process is quick and easy. And, the Ayla Docs Team can integrate the information into other documents over time.

### Process

1. Create a ticket in the [Ayla Docs Jira Project](https://aylanetworks.atlassian.net/jira/software/projects/AD/boards/135). Include the phrase `Tech Note` in the title of your ticket. The Ayla Docs Team will add to your ticket a link to a [Github folder](https://github.com/AylaNetworks/ayla-documentation/tree/master/src/tech-notes/00000001) dedicated to your tech note. The folder will contain `index.md`. The `.md` stands for [markdown](https://guides.github.com/features/mastering-markdown). 
1. In your new folder, click `index.md`.
1. Click on the pencil icon.
1. Change the title.
1. Write your tech note. 
1. Use the Jira ticket to ask questions and/or request publication from your [Github folder](https://github.com/AylaNetworks/ayla-documentation/tree/master/src/tech-notes/00000001) to [Ayla Docs](https://docs.aylanetworks.com/tech-notes/00000001/).

### Writing tips

* Focus on writing accurate content.
* Minimize the use of headings. If necessary, use Level 3 headings (`### Level 3`) to group your content as you see on this page. In most cases, this should suffice. If necessary, use Level 2 headings (`## Level 2`) to group Level 3 headings and content.
* When in doubt, write a set of steps. Each step should tell the reader to do something. And, each step should start with a verb (e.g. *Click ...*) or a prepositional phrase followed by a verb (e.g. *When you are finished, contact ...*).

### Markdown tips

To see the markdown version of the examples below, browse to the [Github version](https://github.com/AylaNetworks/ayla-documentation/blob/master/src/tech-notes/how-to-write-and-publish-a-tech-note/index.md) of the page you are reading, and click `Raw`.

This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

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

This is an image (automatically indented slightly on purpose):

<img src="img-600.png" width="300" height="180">

This is a table:

|First Name|Last Name|Nationality|
|-|-|-|
|Audrey|Tautou|French|
|山﨑|賢人|Japanese|

This is an ordered list with a code snippet and image:

1. Do this ...
    ```
    $(function() {
      $("select.ayla-regions").change(function() {
        writeRegionUrls()
        displayAccounts()
      })
    })
    ```
    The following screen appears ...
    <div><img src="img-600.png" width="300" height="180"></div>
1. Do this ...