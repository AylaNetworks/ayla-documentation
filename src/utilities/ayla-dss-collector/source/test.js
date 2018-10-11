'use strict'

const express = require('express')
const minimist = require('minimist')
const fs = require('fs-extra')

const app = express()
const appName = 'Test'

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
  } catch(e) {
    console.log('Cannot open config.json file')
    return
  }

  if(argc == 2 && args['email'] && args['password']) {
    var email = args['email']
    var password = args['password']
  } else if (argc == 1 && args['auth-token']) {
    var authToken = args['auth-token']
  } else {
    console.log(cmdline)
    return
  }

  definitions.forEach(function(definition) {
    console.log(definition)
  })
  console.log(email)
  console.log(password)
  console.log(authToken)
}

app.listen(3000)
console.log('Running ' + appName)
