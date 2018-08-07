var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var handlebars = require('handlebars');

Metalsmith(__dirname)
  .metadata({
    title: "sss",
    description: "sss"
  })
  .source('./src')

  .destination('./build')

  .clean(true)

  .use(markdown())

  .use(layouts({
    engine: 'handlebars',
    partials: {
      head: 'partials/head',
      menu: 'partials/menu',
      js: 'partials/js'
    }
  }))

  .build(function(err, files) {
    if (err) { throw err; }
  });
