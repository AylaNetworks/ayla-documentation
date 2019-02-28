---
title: Next.js
layout: notes.html
---

## Project 001

Demonstrates a baseline implementation.

<ol>
<li>Install packages:
<pre>
$ mkdir project001
$ cd project001/
$ npm init -y
$ npm install --save react react-dom next
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"  
},
</pre>
</li>
<li>Create directories and files.</li>
<li>Build and run:
<pre>
$ npm run dev
</pre>
The <code>package.json</code> script specifies <code>"dev": "next"</code>. So, <code>npm run dev</code> targets <code>./node_modules/next</code>. The <code>package.json</code> there includes this:
<pre>
"bin": {
  "next": "./dist/bin/next"
}
</pre>
And, <code>./node_modules/next/dist/bin/next</code> includes this:
<pre>
const defaultCommand = 'dev';
</pre>
</li>
<li>Visit [http://54.82.26.63:3000/](http://54.82.26.63:3000/)</li>
</ol>

## Project 002

Demonstrates route masking and client-side clean urls.

<ol>
<li>Install packages:
<pre>
$ mkdir project002
$ cd project002/
$ npm init -y
$ npm install --save react react-dom next
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"  
},
</pre>
</li>
<li>Create directories and files.</li>
<li>Build and run:
<pre>
$ npm run dev
</pre>
</li>
<li>Visit [http://54.82.26.63:3000/](http://54.82.26.63:3000/)</li>
</ol>

## Project 003

Demonstrates server-side clean urls. Note that <code>serve.js</code> assigns id to title, so title changes on server-side refresh. This is okay because, usually, the server uses the id to fetch the title, text, and all other info from a remote data source rather than from the client. 

<ol>
<li>Install packages:
<pre>
$ mkdir project003
$ cd project003/
$ npm init -y
$ npm install --save react react-dom next express
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "node server.js",
  "build": "next build",
  "start": "NODE_ENV=production node server.js" 
},
</pre>
</li>
<li>Create directories and files.</li>
<li>Build and run:
<pre>
$ npm run dev
</pre>
</li>
<li>Visit [http://54.82.26.63:3000/](http://54.82.26.63:3000/)</li>
</ol>

## Project 004

Demonstrates fetching data from a remote data source ([TVmaze API](http://www.tvmaze.com/api)) with <code>getInitialProps</code>. One the homepage, when you click on a show, data is fetched from the client side. If you put the same "show" url directly into the browser, then data is fetched from the server side.

<ol>
<li>Install packages:
<pre>
$ mkdir project004
$ cd project004/
$ npm init -y
$ npm install --save react react-dom next express isomorphic-unfetch
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "node server.js"
},
</pre>
</li>
<li>Create directories and files.</li>
<li>Build and run:
<pre>
$ npm run dev
</pre>
</li>
<li>Visit [http://54.82.26.63:3000/](http://54.82.26.63:3000/)</li>
</ol>

## Project 005

Demonstrates css-file-based (including SASS and PostCSS) and css-in-js styling. Next recommends the second method for Next.js implementations. Next.js comes preloaded with a CSS in JS framework called [styled-jsx](https://github.com/zeit/styled-jsx). CSS rules have no impact on anything other than the components (not even child components). That means, your CSS rules are scoped. This is a template string: <code>(&#96;{&#96;&#96;}&#96;)</code>. Styled jsx works as a babel plugin. It will parse all of the CSS and apply it in the build process. It also supports having constraints inside styled-jsx. CSS rules have no effect on nested components. Check out [Global Selectors](https://github.com/zeit/styled-jsx#one-off-global-selectors). With styled-jsx all necessary prefixing and CSS validation is done inside a babel plugin, so there is no additional runtime overhead. See [CSS-in-JS](https://github.com/zeit/next.js#css-in-js), too.

The Styling Components lesson has a good example of markdown. 

<ol>
<li>Install packages:
<pre>
$ mkdir project005
$ cd project005/
$ npm init -y
$ npm install --save react react-dom next express isomorphic-unfetch react-markdown
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "node server.js"
},
</pre>
</li>
<li>Create directories and files.</li>
<li>Build and run:
<pre>
$ npm run dev
</pre>
</li>
<li>Visit [http://54.82.26.63:3000/](http://54.82.26.63:3000/)</li>
</ol>

## Project 006

Demonstrates generating a static website. 

<ol>
<li>Install packages:
<pre>
$ mkdir project006
$ cd project006/
$ npm init -y
$ npm install --save react react-dom next express isomorphic-unfetch react-markdown serve
$ npm install -g serve
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "node server.js",
  "build": "next build",
  "export": "next export"
},
</pre>
</li>
<li>Create directories and files.</li>
<li>Build and run:
<pre>
$ npm run build
$ npm run export
$ cd out
$ serve -p 3001
</pre>
</li>
<li>Visit [http://54.82.26.63:3001/](http://54.82.26.63:3001/)</li>
</ol>

## Site 001

<ol>
<li>Install packages:
<pre>
$ mkdir site001
$ cd site001/
$ npm init -y
$ npm install --save react react-dom next express isomorphic-unfetch react-markdown
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "node server.js"
},
</pre>
</li>
<li>Create directories and files.</li>
<li>Build and run:
<pre>
$ npm run dev
</pre>
</li>
<li>Visit [http://54.82.26.63:3000/](http://54.82.26.63:3000/)</li>
</ol>

## Links

* [https&colon;//nextjs.org/](https://nextjs.org/)
* [https&colon;//zeit.co/](https://zeit.co/)
* [https&colon;//github.com/zeit/next.js](https://github.com/zeit/next.js)
* [https&colon;//developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Github REST API 3](https://developer.github.com/v3/)
