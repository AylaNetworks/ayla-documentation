const auth = require('metalsmith-basic-auth');
const fileMetadata = require('metalsmith-filemetadata');
const handlebars = require('handlebars');
const layouts = require('metalsmith-layouts');
const lunr = require('metalsmith-lunr');
const lunr_ = require('lunr');
const markdown = require('metalsmith-markdown');
const metalsmith = require('metalsmith');
const msIf = require('metalsmith-if');

var environment;

metalsmith(__dirname)

  .metadata({
    title: "sss",
    description: "sss"
  })

  .source('./src')

  .destination('./build')

  .clean(true)

  .use(markdown())

  .use(lunr())

  .use(auth({
    serverPath: '/home/hagenhau/public_html',
    authName: 'My Protected Area'
  }))

  .use(layouts({
    engine: 'handlebars',
    partials: {
      apps_sn: 'partials/apps_sn',
      cloud_sn: 'partials/cloud_sn',
      devices_sn: 'partials/devices_sn',
      head: 'partials/head',
      js: 'partials/js',
      menu: 'partials/menu'
    }
  }))

  .build(function(err, files) {
    if (err) { throw err; }
  });
