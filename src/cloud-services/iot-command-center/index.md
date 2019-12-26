---
title: IoT Command Center
layout: site.html
a: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">IoT Command Center</a></li>
    <li><a href="#example">Example</a>
      <ul>
        <li><a href="#initialize-devices">Initialize devices</a></li>
        <li><a href="#create-a-filter">Create a filter</a></li>
        <li><a href="#create-a-job">Create a job</a></li>
        <li><a href="#configure-the-job">Configure the job</a></li>
        <li><a href="#run-the-job">Run the job</a></li>
        <li><a href="#test-the-filter">Test the filter</a></li>
        <li><a href="#inspect-job-devices">Inspect job devices</a></li>
        <li><a href="#add-a-schedule">Add a schedule</a></li>
      </ul>
    </li>
  </ul>
</aside>

This page shows you how to use Ayla ICC APIs to perform the following actions:

|ID|Name|Description|
|-|-|-|
|1|SET_PROPERTY|Update one or more property values for a set of devices.|
|4|OTA|Update host application firmware for a set of devices.|
|5|FILE_TRANSFER|Transfer files to/from file properties for a set of devices.|

In general, client applications use the following pattern to interact with ICC:

1. Create a filter that specifies target devices. Filters use device property values, device attributes, device serial numbers, and other criteria, often in combination.
1. Create a job that specifies the action, filter, execution method (one-time or continuous), delivery option (system-push or user-consent), and schedule option (immediate or scheduled).
1. Configure the job according to the action. If setting properties, specify the properties to set and the values to use. If updating firmware, specify the new firmware version, etc. If transferring files, specify the file name, etc.
1. Add a schedule if needed.
1. Start the job.

# Example

This example, which provides a basis for understanding how to programmatically interact with ICC, assumes the existence of the following two ESP32 devices (among many other devices):

|product_name|dsn|model|oem_model|
|-|-|-|
|ESP32-1|AC000W000000001|AY008ESP1|ledevb|
|ESP32-2|AC000W000000002|AY008ESP1|ledevb|

Each of these two devices includes the following properties:

|Property|Type|Direction|Description|
|-|-|-|
|Green_LED|Boolean|To Device||
|cmd|String|To Device|Sets log = cmd.|
|log|String|From Device||
|input|Integer|To Device|Sets output = input.|
|output|Integer|From Device||
|upload_file|File|To Device|Upload destination.|
|download_file|File|From Device|Download source.|

The example shows you how to do the following:

1. Create a filter targeting all devices where model = AY008ESP1 and Green_LED = 1.
1. Create a job where action = SET_PROPERTY.
1. Configure the job to set cmd = "CMD_1" and input = 1 for all targeted devices.
1. Start the job.
1. Verify that the job did, indeed, set cmd = "CMD_1" and input = 1 for all targeted devices.
1. Experiment with additional functionality. 

To connect your own ESP32 devices, see [Ayla ESP32 Solution v1.5-beta](/edge-solutions/ayla-esp32-solution/v1-5-beta/). Or, you can adapt this example to whatever devices you already have.

## Initialize devices

1. Go to API Browser > Accounts > Details, and verify that you have fresh tokens for your account
1. Go to API Browser > Devices.
  1. Select Device = ESP32-1, Property = Green_LED, and set to "on" (i.e. 1).
  1. Select Device = ESP32-2, Property = Green_LED, and set to "on" (i.e. 1).

## Create a filter

1. Go to API Browser > IoT Command Center > previewFilter.
1. Copy the following filter request object into the Request Data box:
<pre>{
     "name": "AY008ESP1 devices where Green_LED = 1",
     "description": "This filter uses an attribute array and a property array.",
     "attributes": [
       {
         "key": "model",
         "value": "AY008ESP1",
         "op": "="
       }
     ],
     "properties":[
       {
         "key": "Green_LED",
         "op": "=", 
         "value":"1"
       }
     ],
     "oem_model": "ledevb"
}</pre>
1. Click Run, and then click Show. The response data is an array of filtered devices:
<pre>{
     "total": 2,
     "oem_model": "ledevb",
     "devices": [
       {
         "lifecycle": "registered",
         "connection_status": "Online",
         "connected_at": "2019-12-23 00:00:00",
         "dsn": "AC000W000000001"
       },
       {
         "lifecycle": "registered",
         "connection_status": "Online",
         "connected_at": "2019-12-23 00:00:00",
         "dsn": "AC000W000000002"
       }
     ]
}</pre>
1. Go to API Browser > IoT Command Center > createFilter.
1. Copy the same filter request object into the Request Data box:
1. Click Run, and then click Show. The response data is a Filter Object. It should resemble the following:
<pre>{
     "id": 2250,
     "name": "AY008ESP1 devices where Green_LED = 1",
     "description": "This filter uses an attribute array and a property array.",
     "attributes": [
       {
         "key": "model",
         "value": "AY008ESP1",
         "op": "="
       }
     ],
     "dsns": null,
     "properties": [
       {
         "key": "Green_LED",
         "value": "1",
         "metadata": null,
         "op": "="
       }
     ],
     "status": null,
     "oem_model": "ledevb",
     "device_metadata": null,
     "created_at": "2019-12-24T10:03:28+0000",
     "updated_at": "2019-12-24T10:03:28+0000",
     "filter_metadata": [],
     "oem_version": null,
     "match_oem_version": true
}</pre>

## Create a job

1. Go to API Browser > IoT Command Center > createJob.
1. Copy the following object into the Request Data box:
<pre>{
     "name": "Set cmd and input",
     "description": "Set cmd and input for AY008ESP1 devices if Green_LED = 1",
     "type_id": "SET_PROPERTY",
     "filter_id": 2250,
     "exec_method": "ONE_TIME",
     "delivery_option": "SYSTEM_PUSH",
     "retries": 0
}</pre>
1. Click Run, and then click Show. The response data is a Job Object. It should resemble the following:
<pre>{
     "id": 2444,
     "name": "Set cmd and input",
     "description": "Set cmd and input for AY008ESP1 devices if Green_LED = 1",
     "status": "CREATED",
     "payload": null,
     "type_id": 1,
     "filter": {
       "id": 2250,
       "name": "AY008ESP1 devices where Green_LED = 1",
       "description": "This filter uses an attribute array and a property array.",
       "attributes": [
         {
           "key": "model",
           "value": "AY008ESP1",
           "op": "="
         }
       ],
       "dsns": null,
       "properties": [
         {
           "key": "Green_LED",
           "value": "1",
           "metadata": null,
           "op": "="
         }
       ],
       "status": null,
       "oem_model": "ledevb",
       "device_metadata": null,
       "created_at": "2019-12-24T10:03:28+0000",
       "updated_at": "2019-12-24T10:03:28+0000",
       "filter_metadata": [],
       "oem_version": null,
       "match_oem_version": true
     },
     "filter_name": "AY008ESP1 devices where Green_LED = 1",
     "schedule_type": "IMMEDIATE",
     "started_at": null,
     "stopped_at": null,
     "created_at": "2019-12-24T10:16:12+0000",
     "updated_at": "2019-12-24T10:16:12+0000",
     "device_total": 0,
     "devices_processing": 0,
     "devices_succeed": 0,
     "devices_failed": 0,
     "job_metadata": [],
     "exec_method": "ONE_TIME",
     "delivery_option": "SYSTEM_PUSH",
     "job_type": "Set property"
}</pre>

## Configure the job

1. Go to API Browser > IoT Command Center > setPropertiesForJob.
1. For Path Parameters > jobId, enter your jobId.
1. Copy the following object into the Request Data box:
<pre>{
     "properties": [
       {
         "key": "cmd",
         "value": "CMD_1"
       },
       {
         "key": "input",
         "value": "1"
       }
     ]
}</pre>
1. Click Run, and then click Show. The response data should be the same as the request data.

## Run the job

1. Go to API Browser > IoT Command Center > startJob.
1. For Path Parameters > jobId, enter your jobId.
1. Click Run, and verify that the returned status code = 200.
1. Go to API Browser > Devices.
  1. Select Device = ESP32-1, Property = cmd, and verify that value = ```CMD_1```.
  1. Select Device = ESP32-1, Property = input, and verify that value = ```1```.
  1. Select Device = ESP32-2, and repeat for both properties.
  1. The ```log``` and ```output``` properties for both devices should be ```CMD_1``` and ```1```, respectively, too.

## Test the filter

1. Go to API Browser > Devices.
1. Select Device = ESP32-2, Property = Green_LED, and set to "off" (i.e. 0).
1. Go to API Browser > IoT Command Center > setPropertiesForJob.
1. Configure the job to set cmd = CMD_2 and input = 2.
1. Go to API Browser > IoT Command Center > startJob, and run the job.
1. Verify that the job targeted ESP32-1, but not ESP32-2.
1. Reset Green_LED = 1 for ESP32-2.

## Inspect job devices

1. Go to API Browser > IoT Command Center > getDeviceSnapshot.
1. For Path Parameters > jobId, enter your jobId.
1. Click Run, and then click Show. The response data is an array of devices affected by the most recent job execution:
<pre>{
     "total": 1,
     "oem_model": "ledevb",
     "devices": [
       {
         "lifecycle": "registered",
         "connection_status": "Online",
         "connected_at": "2019-12-23 00:00:00",
         "dsn": "AC000W000000001"
       }
     ],
     "previous_page": null,
     "next_page": null,
     "current_page_number": 1,
     "start_count_on_page": 1,
     "end_count_on_page": 1
}</pre>
1. Go to API Browser > IoT Command Center > setPropertiesForJob.
1. Configure the job to set cmd = CMD_3 and input = 3.
1. Go to API Browser > IoT Command Center > startJob, and run the job.
1. Run getDeviceSnapshot again. The response data should resemble the following:
<pre>{
     "total": 2,
     "oem_model": "ledevb",
     "devices": [
       {
         "lifecycle": "registered",
         "connection_status": "Online",
         "connected_at": "2019-12-23 00:00:00",
         "dsn": "AC000W000000001"
       },
       {
         "lifecycle": "registered",
         "connection_status": "Online",
         "connected_at": "2019-12-23 00:00:00",
         "dsn": "AC000W000000002"
       }
     ],
     "previous_page": null,
     "next_page": null,
     "current_page_number": 1,
     "start_count_on_page": 1,
     "end_count_on_page": 2
}</pre>

## Add a schedule

1. Go to API Browser > IoT Command Center > setPropertiesForJob.
1. Configure the job to set cmd = CMD_4 and input = 4.
1. Go to API Browser > IoT Command Center > createJobSchedule.
1. For Path Parameters > jobId, enter your jobId.
1. Copy the following object into the Request Data box:
<pre>{
     "name": "My Schedule",
     "timezone": "GMT-8:00",
     "start_time": "2019-12-26 06:00",
     "end_time": "2019-12-26 23:00",
     "schedule_type": "daily",
     "repeats": [
       {
         "start_time": {
           "time": "06:40"
         },
         "stop_time": {
           "time": "06:41"
         }
       }
     ]
}</pre>
1. sss

# Issues

1. Filters stop working when I specify oem_version. For example, previewFilter returns two devices using this filter:
<pre>{
     "name": "DSN Array",
     "description": "DSN array of ESP32 devices.",
     "dsns": {
       "match": [
         "AC000W006670592",
         "AC000W006512709"
       ]
     },
     "oem_model": "ledevb"
}</pre>
<p>But, it returns zero devices using this filter:
<pre>{
     "name": "DSN Array",
     "description": "DSN array of ESP32 devices.",
     "dsns": {
       "match": [
         "AC000W006670592",
         "AC000W006512709"
       ]
     },
     "oem_model": "ledevb",
     "oem_version": "ada-esp-idf-src-1.5-beta",
     "match_oem_version": true
}</pre>
1. Filters that work with previewFilter don't work with getDevicesByFilter.
1. Why do schedules have names? Why don't schedules exist apart from jobs?
1. createJobSchedule returns 500. Here is the request:
<pre>{
     "name": "My Schedule",
     "timezone": "GMT-8:00",
     "start_time": "2019-12-26 06:00",
     "end_time": "2019-12-26 23:00",
     "schedule_type": "daily",
     "repeats": [
       {
         "start_time": {
           "time": "06:40"
         },
         "stop_time": {
           "time": "06:41"
         }
       }
     ]
}</pre>
1. Here is the response:
<pre>{
     "error": {
       "code": "500",
       "message": "500 - Internal server error. The server encountered an internal error ..."
     }
}</pre>
1. More about schedules: How do I schedule a job to run once every hour, every day, forever? Prove your answer. Also, setting end_time = null does not work. 