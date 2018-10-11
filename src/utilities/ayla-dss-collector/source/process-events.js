const fs = require('fs-extra')

var processEvents = function(data) {

  let filename = './events/'

  switch(data.metadata.event_type) {

    case 'connectivity':
    filename += 'connectivity.log'
    break

    case 'datapoint':
    filename += 'datapoint.log'
    break

    case 'datapointack':
    filename += 'datapointack.log'
    break

    case 'location':
    filename += 'location.log'
    break

    case 'registration':
    filename += 'registration.log'
    break

    default:
    filename += 'default.log'
    break
  }

  fs.appendFile(filename, JSON.stringify(data))
  .then(() => {console.log('--> EVENT: ' + JSON.stringify(data))})
  .catch(err => {console.error(err)})
}

module.exports = processEvents