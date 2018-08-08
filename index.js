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
      apps_sn: 'partials/apps_sn',
      devices_sn: 'partials/devices_sn',
      head: 'partials/head',
      js: 'partials/js',
      menu: 'partials/menu'
    }
  }))

  .build(function(err, files) {
    if (err) { throw err; }
  });
