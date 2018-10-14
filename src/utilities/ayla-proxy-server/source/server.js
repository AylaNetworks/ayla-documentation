const appName = 'Ayla Proxy Server'

const express = require('express')
const cleanup = require('node-cleanup')
const routes = require('./routes')

const app = express()
app.use(express.json())

routes(app)

cleanup(function (exitCode, signal) {
  console.log('\nExiting ' + appName)
})

app.listen(8080)
console.log('Running ' + appName + ' on Port 8080')
