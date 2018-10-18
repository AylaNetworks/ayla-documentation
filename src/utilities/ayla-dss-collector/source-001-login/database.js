var util = require("util");
var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: 'dfu74ebeofyC',
  database: 'dss'
});

exports.insert = function(data) {

  var uuid = ''
  var time = new Date().toISOString()

  switch(data.metadata.event_type) {

    case 'connectivity':
    uuid = data.connection.user_uuid
    break;

    case 'datapoint':
    uuid = data.datapoint.user_uuid
    break;

    case 'datapointack':
    uuid = data.datapoint.user_uuid
    break;

    case 'location':
    uuid = data.location_event.user_uuid
    break;

    case 'registration':
    uuid = data.registration_event.user_uuid
    break;

    default:
    break;
  }

  var record = {
    event_type: data.metadata.event_type,
    oem_id: data.metadata.oem_id,
    oem_model: data.metadata.oem_model,
    dsn: data.metadata.dsn,
    time: time,
    user_uuid: uuid
  };

  pool.getConnection(function(err, connection) {
    connection.query('INSERT INTO events SET ?', record, function (error, results, fields) {
      if(error) {console.log(error)}
      connection.release()
    })
  })
}
