---
title: Operation
layout: ayla-datastream-service.html
d: block
---

### Run DSS Collector

Follow these steps to start experimenting with DSS Collector:

1. Change to the dss-collector directory:
<pre>$ cd dss-collector</pre>
1. Run DSS Collector:
<pre>$ node collector.js</pre>
<div>DSS Collector displays the config file, opens two streams, and begins to receive heartbeats from Ayla DSS:</div>
<pre>Running DSS Collector
CONFIG.JSON:
[
  {
    "id": "ES1",
    "name": "Freezer too_warm for DSS Collector",
    "url": "wss://stream.aylanetworks.com/stream",
    "key": "abcdef01234567890000000000000001",
    "persistence": {
      "json": false,
      "relational": false
    }
  },
  {
    "id": "ES2",
    "name": "Freezer max_temp for DSS Collector",
    "url": "wss://stream.aylanetworks.com/stream",
    "key": "abcdef01234567890000000000000002",
    "persistence": {
      "json": false,
      "relational": false
    }
  }
]
onopen for stream key abcdef01234567890000000000000001
onopen for stream key abcdef01234567890000000000000002
--> HEARTBEAT: Freezer max_temp for DSS Collector
--> HEARTBEAT: Freezer too_warm for DSS Collector</pre>
1. Use Developer Portal to modify the too_warm property value of the Freezer device several times, and view DSS Collector output:
<pre>--> DATAPOINT
Data: {"seq":"81","metadata":{"oem_id":"0bbb112e","oem_model":"freezer-model","dsn":"VD0bbb112e0000011","property_name":"too_warm","display_name":"Too Warm","base_type":"boolean","event_type":"datapoint"},"datapoint":{"id":"858ec04e-d5e0-11e8-0cb4-cf62cbb7102b","created_at_from_device":null,"updated_at":"2018-10-22T09:54:52Z","created_at":"2018-10-22T09:54:52Z","user_uuid":"00000000-0000-0000-0000-000000000000","echo":false,"closed":false,"value":0,"metadata":{"key1":"","key2":""}}}
--> DATAPOINT
Data: {"seq":"82","metadata":{"oem_id":"0bbb112e","oem_model":"freezer-model","dsn":"VD0bbb112e0000011","property_name":"too_warm","display_name":"Too Warm","base_type":"boolean","event_type":"datapoint"},"datapoint":{"id":"85ce5826-d5e0-11e8-a7f6-245134964eb9","created_at_from_device":null,"updated_at":"2018-10-22T09:54:52Z","created_at":"2018-10-22T09:54:52Z","user_uuid":"00000000-0000-0000-0000-000000000000","echo":false,"closed":false,"value":1,"metadata":{"key1":"","key2":""}}}
--> DATAPOINT
Data: {"seq":"83","metadata":{"oem_id":"0bbb112e","oem_model":"freezer-model","dsn":"VD0bbb112e0000011","property_name":"too_warm","display_name":"Too Warm","base_type":"boolean","event_type":"datapoint"},"datapoint":{"id":"861c4dc4-d5e0-11e8-aa46-f866d707a973","created_at_from_device":null,"updated_at":"2018-10-22T09:54:53Z","created_at":"2018-10-22T09:54:53Z","user_uuid":"00000000-0000-0000-0000-000000000000","echo":false,"closed":false,"value":0,"metadata":{"key1":"","key2":""}}}</pre>
1. Do the same with the max_temp property:
<pre>--> DATAPOINT
Data: {"seq":"10","metadata":{"oem_id":"0bbb112e","oem_model":"freezer-model","dsn":"VD0bbb112e0000011","property_name":"max_temp","display_name":"Max Temp","base_type":"integer","event_type":"datapoint"},"datapoint":{"id":"ba239578-d5e0-11e8-8766-b73b1765d576","created_at_from_device":null,"updated_at":"2018-10-22T09:56:20Z","created_at":"2018-10-22T09:56:20Z","user_uuid":"00000000-0000-0000-0000-000000000000","echo":false,"closed":false,"value":-5,"metadata":{}}}
--> HEARTBEAT: Freezer too_warm for DSS Collector
--> DATAPOINT
Data: {"seq":"11","metadata":{"oem_id":"0bbb112e","oem_model":"freezer-model","dsn":"VD0bbb112e0000011","property_name":"max_temp","display_name":"Max Temp","base_type":"integer","event_type":"datapoint"},"datapoint":{"id":"bddb9ed6-d5e0-11e8-b35c-ff397f60f4a0","created_at_from_device":null,"updated_at":"2018-10-22T09:56:26Z","created_at":"2018-10-22T09:56:26Z","user_uuid":"00000000-0000-0000-0000-000000000000","echo":false,"closed":false,"value":-6,"metadata":{}}}
--> DATAPOINT
Data: {"seq":"12","metadata":{"oem_id":"0bbb112e","oem_model":"freezer-model","dsn":"VD0bbb112e0000011","property_name":"max_temp","display_name":"Max Temp","base_type":"integer","event_type":"datapoint"},"datapoint":{"id":"c11eb01a-d5e0-11e8-67d7-066dff484cc1","created_at_from_device":null,"updated_at":"2018-10-22T09:56:32Z","created_at":"2018-10-22T09:56:32Z","user_uuid":"00000000-0000-0000-0000-000000000000","echo":false,"closed":false,"value":-7,"metadata":{}}}</pre>
1. Stop DSS Collector using <code>Ctl-c</code>.

### Forever notes

If [forever](https://www.npmjs.com/package/forever) is installed in your runtime environment, you can use the following commands:

Start the service:

<pre>
$ forever -o output.log -e error.log --minUptime 1000ms --spinSleepTime 1000ms start collector.js
</pre>

View the service:

<pre>
$ forever list
info:    Forever processes running
data:        uid  command                                          script       forever pid   id logfile                         uptime     
data:    [0] WsJb /home/bitnami/.nvm/versions/node/v9.8.0/bin/node collector.js 22736   22746    /home/bitnami/.forever/WsJb.log 0:0:0:8.52
</pre>

Tail the service log files with the forever utility:

<pre>
$ forever logs 0
...
</pre>

Tail the service log files with tail:

<pre>
$ tail -f output.log
...
</pre>

Stop the service:

<pre>
$ forever stop &lt;Id|Uid|Pid|Index|Script&gt;
</pre>

