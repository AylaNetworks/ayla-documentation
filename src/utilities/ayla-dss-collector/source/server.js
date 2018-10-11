//------------------------------------------------------
// Ayla DSS Collector
//------------------------------------------------------

const express = require('express')
const minimist = require('minimist')
const fs = require('fs-extra')
const cleanup = require('node-cleanup')
const routes = require('./routes')
const core = require('./core')

const appName = 'Ayla DSS Collector'

const app = express()
app.use(express.json())

routes(app)

cleanup(function (exitCode, signal) {
//  for (key in core.eventStreams) {}
  console.log('\nExiting ' + appName)
})

const cmdline = ''
+ '$ node server.js --email sarah@acme.com --password abc123\n'
+ '$ node server.js --auth-token 12345\n'
+ '$ node server.js'

const args = minimist(process.argv.slice(2), {
  string: 'email',           // --email sarah@acme.com
  string: 'password',        // --password abc123
  string: 'auth-token'       // --auth-token 12345
})
const argc = Object.keys(args).length - 1

if(argc) {

  try {
    var definitions = JSON.parse(fs.readFileSync('config.json'))
    console.log('CONFIG.JSON:')
    console.log(JSON.stringify(definitions, null, 2))
    console.log('--------')
  } catch(e) {
    console.log('Cannot open config.json file')
    return
  }

  if(argc == 2 && args['email'] && args['password']) {
    core.login(args['email'], args['password'], definitions)

  } else if (argc == 1 && args['auth-token']) {
    core.createEventStreams(args['auth-token'], definitions)

  } else {
    console.log(cmdline)
    return
  }
}

app.listen(3000)
console.log('Running ' + appName)
