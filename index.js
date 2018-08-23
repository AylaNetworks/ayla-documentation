const breadcrumbs = require('breadcrumbs');
const fileMetadata = require('metalsmith-filemetadata');
const handlebars = require('handlebars');
const layouts = require('metalsmith-layouts');
const lunr = require('metalsmith-lunr');
const lunr_ = require('lunr');
const markdown = require('metalsmith-markdown');
const metalsmith = require('metalsmith');
const msIf = require('metalsmith-if');
const path = require('metalsmith-path')
const writemetadata = require('metalsmith-writemetadata');

var environment;

metalsmith(__dirname)

  .metadata({
    description: "",
    title: "",
    nav: "",
    titleDisplay: "block",
    guideUrl: "",
    tutorialUrl: "",
    referenceUrl: ""
  })

  .source('./src')

  .destination('./build')

  .clean(true)

  .use(markdown())

  .use(path({
    directoryIndex: 'index.html'
  }))

  .use(breadcrumbs())

  // .use(lunr())

  .use(layouts({
    default: "page-full-width.html",
    pattern: "**/*.html",
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

//  .use(writemetadata({
//    pattern: ['**/*.html']/*,
//    ignorekeys: ['contents']*/
//  }))

  .build(function(err, files) {
    if (err) { throw err; }
  });
