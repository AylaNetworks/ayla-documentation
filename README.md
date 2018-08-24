# Ayla Core Content

This repository contains source files for the [Ayla Core Content](https://hagenhaus.com/) website where Ayla Networks publishes essential guides, tutorials, references, and terminology, as well as information about training and certification. The site is currently hosted at a temporary location, and password protected. Email matt@aylanetworks.com for access. It will move to a permanent url soon. Click [ACC Jira project](https://aylanetworks.atlassian.net/browse/ACC) to see the associated Jira project.

Not just a website, Ayla Core Content (ACC) revolutionizes how Ayla creates, publishes, and manages technical documentation. It changes perceptions, attitudes, processes, job descriptions, and company organization. It removes bottlenecks, and enables the flow of information from subject matter experts to information consumers. 

## Features

### Markdown files

The ACC build process uses [Metalsmith](http://www.metalsmith.io/) to transform Github-flavored markdown files, html templates, css, js, and image files into a static website. See the diagram:

![acc-metalsmith.jpg](acc-metalsmith.jpg)

The ability to source markdown files presents a big opportunity. Technical documentation writers, for example, create provide a simple markdown style guide that helps engineers and others write markdown that transforms into decent html. Writers work with engineers to understand the details and importance of the style guide. Writes do more editing and organizing of text, and less original content production. Engineers write instructions, descriptions, and definitions (in markdown). Writers edit and enhance these drafts. The Metalsmith build process produces the final product. 




