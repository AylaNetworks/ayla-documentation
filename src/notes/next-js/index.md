---
title: Next.js
layout: notes.html
---

## Tutorial 1: Baseline

Demonstrates a baseline implementation.

<ol>
<li>Install packages:
<pre>
$ mkdir tutorial001
$ cd tutorial001/
$ npm init -y
$ npm install --save react react-dom next
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "next"
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

## Tutorial 2: Client-side clean URLs

Demonstrates route masking and client-side clean urls.

<ol>
<li>Install packages:
<pre>
$ mkdir tutorial002
$ cd tutorial002/
$ npm init -y
$ npm install --save react react-dom next
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "next"
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

## Tutorial 3: Server-side clean URLs

Demonstrates server-side clean urls. Note that <code>serve.js</code> assigns id to title, so title changes on server-side refresh. This is okay because, usually, the server uses the id to fetch the title, text, and all other info from a remote data source rather than from the client. 

<ol>
<li>Install packages:
<pre>
$ mkdir tutorial003
$ cd tutorial003/
$ npm init -y
$ npm install --save react react-dom next express
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

## Tutorial 4: Fetching data

Demonstrates fetching data from a remote data source ([TVmaze API](http://www.tvmaze.com/api)) with <code>getInitialProps</code>. One the homepage, when you click on a show, data is fetched from the client side. If you put the same "show" url directly into the browser, then data is fetched from the server side.

<ol>
<li>Install packages:
<pre>
$ mkdir tutorial004
$ cd tutorial004/
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

## Tutorial 5: Styling

Demonstrates css-file-based (including SASS and PostCSS) and css-in-js styling. Next recommends the second method for Next.js implementations. Next.js comes preloaded with a CSS in JS framework called [styled-jsx](https://github.com/zeit/styled-jsx). CSS rules have no impact on anything other than the components (not even child components). That means, your CSS rules are scoped. This is a template string: <code>(&#96;{&#96;&#96;}&#96;)</code>. Styled jsx works as a babel plugin. It will parse all of the CSS and apply it in the build process. It also supports having constraints inside styled-jsx. CSS rules have no effect on nested components. Check out [Global Selectors](https://github.com/zeit/styled-jsx#one-off-global-selectors). With styled-jsx all necessary prefixing and CSS validation is done inside a babel plugin, so there is no additional runtime overhead. See [CSS-in-JS](https://github.com/zeit/next.js#css-in-js), too.

The Styling Components lesson has a good example of markdown. 

<ol>
<li>Install packages:
<pre>
$ mkdir tutorial005
$ cd tutorial005/
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

## Tutorial 6: Deploying an app

<ol>
<li>Install packages:
<pre>
$ mkdir tutorial006
$ cd tutorial006/
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

## Tutorial X: Generating static pages

Demonstrates generating static pages from data obtained via a REST API. This doesn't work yet. 

<ol>
<li>Install packages:
<pre>
$ mkdir tutorial000
$ cd tutorial000/
$ npm init -y
$ npm install --save react react-dom next express isomorphic-unfetch react-markdown serve
$ sudo npm install -g serve
</pre>
</li>
<li>Modify <code>package.json</code>:
<pre>
"scripts": {
  "dev": "node server.js",
  "build": "node server.js build",
  "export": "node server export"
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
* [Migrating to Static Next.js and Now](https://medium.com/@fixitup2/migrating-to-static-next-js-and-now-a4bf1ff7e825)
* [Now + GitHub](https://zeit.co/blog/now-for-github)
* [How can I export static HTML pages from next.js when they need data from a third-party API?](https://stackoverflow.com/questions/53687491/how-can-i-export-static-html-pages-from-next-js-when-they-need-data-from-a-third)
* [Introduction to Next.js - fetching data from API](https://dev.to/aurelkurtula/introduction-to-the-basics-of-nextjs---part-two-pad)
* [Data fetch example](https://github.com/zeit/next.js/tree/canary/examples/data-fetch)
* [Next.js Examples](https://github.com/zeit/next.js/tree/canary/examples)
* [Zeit on Spectrum](https://spectrum.chat/zeit?authed=true)
* [Zeit Chat](https://zeit.co/chat)
