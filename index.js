const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const handlebars = require('handlebars');
const auth = require('metalsmith-basic-auth');

metalsmith(__dirname)
  .metadata({
    title: "sss",
    description: "sss"
  })
  .source('./src')

  .destination('./build')

  .clean(true)

  .use(markdown())

  .use(auth({
    serverPath: '/home/hagenhau/public_html',
    authName: 'My Protected Area'
  }))

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
