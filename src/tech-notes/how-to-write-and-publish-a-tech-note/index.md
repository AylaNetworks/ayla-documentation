---
title: How to write and publish a tech note
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Write/publish tech note</a></li>
    <li><a href="#workflow">Workflow</a></li>
    <li>
      <a href="#the-writing-process">The writing process</a>
      <ul>
        <li><a href="#general">General</a></li>
        <li><a href="#metadata">Metadata</a></li>
        <li><a href="#headings">Headings</a></li>
        <li><a href="#images">Images</a></li>
        <li><a href="#lists">Lists</a></li>
      </ul>
    </li>
  </ul>
</aside>

A Tech Note is an Ayla Docs page focused on a technical topic of current interest to at least one prospect, customer, or partner. Tech Notes are published on the [Tech Notes](/tech-notes) page. Any Ayla employee can write a Tech Note.

# Workflow

1. The author initiates the process of writing and publishing a Tech Note by creating a [Jira Ticket](https://aylanetworks.atlassian.net/jira/software/projects/AD/boards/135) with a summary composed of the phrase "Tech Note:" plus the proposed topic. (e.g. "Tech Note: Ack-enabled properties").
1. The Ayla Docs team creates a Github directory [like this one](https://github.com/AylaNetworks/ayla-documentation/tree/master/src/tech-notes/00000001) for the Tech Note. The directory contains an `index.md` file [like this one](https://github.com/AylaNetworks/ayla-documentation/blob/master/src/tech-notes/00000001/index.md).
1. The Ayla Docs team links from the Jira ticket to the Github directory, and notifies the author via email.
1. The author opens the Jira ticket and clicks on the Github link.
1. The author opens the `index.md` file, clicks the pencil icon, and starts writing the Tech Note, saving periodically by clicking the `Proposed changes` button at the bottom of the page, asking the Ayla Docs team questions via the Jira ticket, and uploading any relevant images to the Github directory. 
1. The author solicits peer reviews by emailing the `index.md` link to reviewers who provide feedback (1) in the Jira ticket or (2) in the `index.md` file using the following syntax:
    ```
    [Joe]: # (This is my inline comment.)
    ``` 
1. The author finishes writing the Tech Note, deletes all inline comments, and notifies the Ayla Docs team via the Jira ticket.
1. The Ayla Docs team edits the Tech Note, communicating with the author as necessary via the Jira Ticket.
1. The Ayla Docs team publishes the Tech Note by generating an Ayla Docs page, and adding a link to the [Tech Notes](/tech-notes) page.

# The writing process

## General

Here are guidelines for writing a good Tech Note:

1. Understand your topic. 
1. Understand what your audience needs to know about your topic, and include only that.
1. Write concise, accurate content. 
1. Avoid vague adjectives like fast, incredible, and easy.
1. Minimize text decorations such as italics, bold, quotation marks, and underlines.
1. Start by writing a few paragraphs, and then requesting a quick review from the Ayla Docs team.

## Metadata

Tech Note metadata appears at the top of the `index.md` file like this:

|title|layout|author|createDate|lastModifiedDate|
|-|-|-|-|-|-|
|Handling ack-enabled properties|technote.html|Matt Hagen|May 31, 2020|June 1, 2020|

* **title**: Use [sentence case](https://en.wikipedia.org/wiki/Letter_case#Sentence_case).
* **layout**: Enter `technote.html`.
* **author**: Enter your name.
* **createDate**: The Ayla Docs team will enter this date.
* **lastModifedData**: The Ayla Docs team will enter this date.

## Headings

1. Use [sentence case](https://en.wikipedia.org/wiki/Letter_case#Sentence_case).
1. If necessary, use Level 3 headings (`### Level 3`) to group content. In many cases, this will suffice.
    <div><img src="headings-3.png" width="350" height="239"></div>
1. If necessary, use Level 2 headings (`## Level 2`) to group Level 3 headings and content. This will produce a Page TOC. 
    <div><img src="headings-2-3.png" width="350" height="239"></div>
1. If necessary, use Level 1 headings (`# Level 1`) to group Level 2 headings and content. This will also produce a Page TOC.
    <div><img src="headings-1-2-3.png" width="350" height="239"></div>

## Images

If you plan to include images with your Tech Note, always discuss your ideas with the Ayla Docs team via the Jira ticket, first. This will save you time. Issues related to images include the following:

1. Does the image add value to the Tech Note?
1. Will the image become obsolete quickly?
1. Does the image contain PPI?
1. Does the image contain extraneous or distracting information?
1. If a diagram, is there a more effective way to diagram the information?

Images on Ayla Docs include shadows rather than borders. The Ayla Docs team can help you achieve this effect. 

To add an image to your Tech Note, do the following:

1. Upload the image file to your Tech Note Github directory (in the same directory with your `index.md` file).
1. Use an `<img>` tag to include the image in your Tech Note. Always set width and height (using an [Aspect Ratio Calculator](https://andrew.hedges.name/experiments/aspect_ratio/) as needed). Max width is `800px`.

Here is the markdown version:

```
<img src="img-600.png" width="300" height="180">
```

Here is the html version:

<img src="img-600.png" width="300" height="180">

## Lists

Use a numbered list to provide steps. Each step should start with a verb, or a prepositional phrase and then a verb:

1. Browse to this website.
1. Click on this button.
1. In the IP Address field, enter the IP address.

It is possible to include code snippets and images in lists. Below is an example. Code snippets and images must be indented with four spaces. An image must be wrapped in a `<div>` tag.

Here is the markdown version:

<pre><code>1. At vero eos et accusamus et iusto ...
    ```
    $(function() {
      $("select.ayla-regions").change(function() {
        writeRegionUrls()
        displayAccounts()
      })
    })
    ```
    Temporibus autem quibusdam et ...
    &lt;div&gt;&lt;img src="img-600.png" width="300" height="180"&gt;&lt;/div&gt;
1. Excepteur sint occaecat cupidatat ...
1. Lorem ipsum dolor sit amet ...
</code></pre>

Here is the html version:

1. At vero eos et accusamus et iusto ...
    ```
    $(function() {
      $("select.ayla-regions").change(function() {
        writeRegionUrls()
        displayAccounts()
      })
    })
    ```
    Temporibus autem quibusdam et ...
    <div><img src="img-600.png" width="300" height="180"></div>
1. Excepteur sint occaecat cupidatat ...
1. Lorem ipsum dolor sit amet ...

# References

* [Wikipedia:Manual of Style](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style)
* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)