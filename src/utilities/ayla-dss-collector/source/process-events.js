const fs = require('fs-extra')
const jsonexport = require('jsonexport');
const db = require('./database');

var processEvents = function(data, persistence) {

  console.log(persistence)

  let jsonfile = './events/'
  let csvfile = './events/'

  switch(data.metadata.event_type) {

    case 'connectivity':
    jsonfile += 'connectivity.json'
    csvfile += 'connectivity.csv'
    break

    case 'datapoint':
    jsonfile += 'datapoint.json'
    csvfile += 'datapoint.csv'
    break

    case 'datapointack':
    jsonfile += 'datapointack.json'
    csvfile += 'datapointack.csv'
    break

    case 'location':
    jsonfile += 'location.json'
    csvfile += 'location.csv'
    break

    case 'registration':
    jsonfile += 'registration.json'
    csvfile += 'registration.csv'
    break

    default:
    jsonfile += 'default.json'
    csvfile += 'default.csv'
    break
  }

  console.log('--> ' + data.metadata.event_type.toUpperCase())
  console.log('Persistence: ' + JSON.stringify(persistence))
  console.log('Data: ' + JSON.stringify(data))

  if(persistence.json) {
    fs.appendFile(jsonfile, JSON.stringify(data))
    .then(() => {})
    .catch(err => {console.error(err)})
  }

  if(persistence.csv) {
    jsonexport(data, {verticalOutput:false}, function(err, csv) {
      if(err) {
        console.log('Error writing to CSV file.')
      } else {
        fs.appendFile(csvfile, csv.split('\n')[1] + '\n')
        .catch(err => {console.error(err)})
      }
    })
  }

  if(persistence.relational) {
    db.insert(data)
  }
}

module.exports = processEvents
