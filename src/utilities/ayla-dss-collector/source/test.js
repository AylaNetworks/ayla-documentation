const express = require('express')
const jsonexport = require('jsonexport');

const appName = 'Test'

const app = express()

var event = {"seq":"2","metadata":{"oem_id":"0dfc7900","oem_model":"ledevb","dsn":"AC000W000340779","property_name":"Blue_LED","display_name":"Blue LED","base_type":"boolean","resource_tags":[],"event_type":"datapoint"},"datapoint":{"id":"91c74ac6-cd47-11e8-1508-d0154653c8a5","created_at_from_device":null,"updated_at":"2018-10-11T11:19:50Z","created_at":"2018-10-11T11:19:50Z","user_uuid":"40e45b84-690c-11e8-acf3-12f911dcfe40","echo":false,"closed":false,"value":0,"metadata":{"key1":"","key2":""}}}




var options={verticalOutput:false}
 
jsonexport(event, {verticalOutput:false}, function(err, csv){
  if(err) return console.log(err)


//  for(var key in csv) {
//    console.log(key + ': ' + csv[key])
//  }

  let s = csv.split('\n')[1]


  console.log(s)
});

/*
app.listen(3000)
console.log('Running ' + appName)
*/