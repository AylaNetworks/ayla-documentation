const breadcrumbs = require('breadcrumbs');
const fileMetadata = require('metalsmith-filemetadata');
const handlebars = require('handlebars');
const layouts = require('metalsmith-layouts');
// const lunr = require('metalsmith-lunr-index');
const markdown = require('metalsmith-markdown');
const metalsmith = require('metalsmith');
const msIf = require('metalsmith-if');
const path = require('metalsmith-path')
const permalinks = require('metalsmith-permalinks');
const writemetadata = require('metalsmith-writemetadata');
const highlight = require('metalsmith-code-highlight');

var environment;

metalsmith(__dirname)

  .metadata({
    description: "",
    title: "",
    nav: "",
    titleDisplay: "block",
    guideUrl: "",
    tutorialUrl: "",
    referenceUrl: "",
    a: "none",
    b: "none",
    c: "none"
  })

  .source('./src')

  .destination('./build')

  .clean(true)

  .use(markdown())

  .use(path({
    directoryIndex: 'index.html'
  }))

  .use(breadcrumbs())

//  .use(lunr({
//    fields: {title: 1}
//  }))

  .use(layouts({
    default: "page-full-width.html",
    pattern: "**/index.html",
    engine: 'handlebars',
    partials: {
      top: 'partials/top',
      head: 'partials/head',
      menu: 'partials/menu',
      breadcrumbs: 'partials/breadcrumbs',
      js: 'partials/js',
      bottom: 'partials/bottom'
    }
  }))

//  .use(highlight())

//  .use(writemetadata({
//    pattern: ['**/*.html']/*,
//    ignorekeys: ['contents']*/
//  }))

//  .use(permalinks({
//    relative: false
//  }));

  .build(function(err, files) {
    if (err) { throw err; }
  });
