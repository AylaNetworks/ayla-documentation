const appName = 'Ayla Proxy Server'

const express = require('express')
const cleanup = require('node-cleanup')
const routes = require('./routes')
const fs = require('fs-extra')

const app = express()
app.use(express.json())

routes(app)

cleanup(function (exitCode, signal) {
  console.log('\nExiting ' + appName)
})

try {
  config = JSON.parse(fs.readFileSync('./config.json'))
} catch(e) {
  console.log(e)
  return
}

exports.config = config
exports.services = config.services

app.listen(8080)
console.log('Running ' + appName + ' on Port 8080')
