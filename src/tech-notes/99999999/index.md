---
title: Ayla Data Export for Device Events
layout: technote.html
author: name
creationDate: Month 00, 0000
lastModifiedDate: Month 00, 0000
---

The Ayla Data Export feature provides OEM developers and data analysts with greater flexibility for retrieving and consuming historic device event data from the Ayla Cloud Service.

## Why Use Ayla's Data Export Feature

This feature can assist in the analysis and debugging of the following use cases:

* Troubleshooting inconsistent device behavior over a period of time
* Identifying usage patterns and scope for improvement
* Maintaining an archive of device events data for product lifecycle management

Customers who do not need access to real-time data or who do not wish to build external systems to maintain an active Data Stream Services (DSS) subscription can use this feature to export their historic data for analysis or archiving. This feature also allows customers to access and retrieve data beyond the current standard data retention policy on the Ayla Customer Dashboard, which currently is 90 days from the date of capture.

## Where the Data Files Are Stored 

The following 5 device event types are stored on Amazon S3 (Simple Storage Service):

* Datapoint
* Datapoint Ack
* Location
* Connection
* Registration

Amazon S3 creates a folder for each event type to compile its data files. When new event data is available after the most recent save, the event data files are posted to Amazon S3 in their respective event type folders. You may notice more time-stamped subfolders being added under specific event type folders if the volume of data being generated for that event type is high. Each event type folder can have multiple subfolders that are timestamped based on when the data within the folder was created. Each subfolder contains only one CSV event data file.

## How to Use Ayla's Data Export Feature

To use this feature, complete the following three major steps, which are described in this section:

1. Retrieve the OEM Access Credentials: Gain access to the Ayla Customer Dashboard with OEM Admin privileges.
2. Use an Amazon S3 compatible client:  View and retrieve device event files using a Grapical User Interface (GUI) or Command Line Interface (CLI) to Amazon S3.
3. View and Consume the event data files: Use the appropriate application to read and consume the generated.csv device event data files.

### Step 1: Retrieve the OEM Access Credentials

1. Log in to the [Ayla Customer Dashboard](https://dashboard.aylanetworks.com).
2. Click **OEM Profile** in the navigation panel, and then click the **Data Export** tab to view the OEM access credentials. Refer to the following example:

   <div><img src="data-export.png" width="800" height="288"></div>

   The access credentials remain valid indefinitely unless an OEM Admin requests new credentials.

3. To request new access credentials, click the **REFRESH CREDENTIALS** button, and then click **ACCEPT** in the confirmation message. Refer to the following example:

   <div><img src="refresh-creds.png" width="662" height="199"></div>

### Step 2: Use an Amazon S3 Compatible Client to Access the Data Files

The Ayla Cloud Service regularly implements processes to aggregate new device events that are packaged into data files. These files are stored on Amazon S3 and organized by date, timestamp, and event type. The data files may contain duplicate events or out-of-sequence events data. These files are maintained for 12 months. You may use any client compatible with Amazon S3 to access the Ayla data files. Following are two examples of these clients:

* CyberDuck
  + Mac/Windows Grapical User Interface (GUI)
  + [http://cyberduck.io](http://cyberduck.io)
* s3Cmd
  + Mac/Windows Command Line Interface (CLI)
  + [http://s3tools.org/s3cmd](http://s3tools.org/s3cmd)
   
Ayla Networks does not endorse any particular client, including the two examples above. The example in this tech note uses the CyberDuck client. The fields may be different if you are using another client. Use the client as follows to access the Ayla data files on Amazon S3:

1. Download the client from its company website, and then open the client. The example below these three steps shows the open connection window for the CyberDuck client.
 
2. Select the Amazon S3 option in the fields for the protocal and server, and then enter the OEM access credentials in the corresponding fields, also shown in the example below these three steps. If you are working across multiple OEMs, make sure that you enter the correct OEM access credentials for the data files you wish to view.

3. Enter any additional parameters in the other fields, and then click Connect. 
<div><img src="DataExp_MapCredsToS3CyberDuck.png" width="400" height="329"></div>

Once you successfully connect to Amazon S3, you gain access to the device event data files associated with the OEM access credentials that were entered.

Following is an example of the folders for the 5 event types on Amazon S3. As mentioned earlier, the Ayla device event data files are grouped into these 5 event types.

<img src="DataExp_EventFileFoldersOnS3.png" width="150" height="137">

Following is an example of the event subfolders within the main folder for each of the 5 event types. Each subfolder is tagged with a timestamp formatted as YYYY-MM-DD-HH:MM:SS in UTC. The frequency in which the subfolders and data files are created in the event type folders varies depending on amount of data generated for the event type. Some event types typically generate more data than others. You may therefore see some gaps between the timestamped subfolders (also shown in the example below). For instance, the Datapoint or Datapoint Ack event folders typically have more subfolders and data files compared to Registration or Location event folders. 

<img src="DataExp_TimeGaps_EventFileFoldersOnS3.png" width="550" height="130">

### Step 3: View and Consume the Event Data Files

Every subfolder in the event type folders has one CSV event data file. You therefore need an application (such as Microsoft Excel) to view the saved .csv data files. The example below shows the contents of an CSV file opened in Microsoft Excel. Notice that each individual property of the datapoint event displays as a single line entry in the .csv file. This data entry pattern is the same in the .csv files across all event types. String values are base64 encoded.

<img src="DataExp_ViewCSVfiles_Excel.png" width="800" height="57">

## Ayla Device Event Data Export Files by Event Type

### connectivity

|Key|Example Value|
|-|-|
|oem_id|1234abcd|
|oem_model|ledevb|
|dsn|AC000W000123456|
|resource_tags||
|event_type|connectivity|
|event_time|2018-09-24T10:26:37Z|
|user_uuid|00000000-0000-0000-0000-000000000000|
|status|Online|

### datapoint

|Key|Example Value|
|-|-|
|oem_id|1234abcd|
|oem_model|linuxevb|
|dsn|AC000W005606115|
|property_name|Blue_LED|
|display_name|Blue_LED|
|base_type|boolean|
|resource_tags||
|event_type|datapoint|
|id|1ff9b91c-bfe4-11e8-1261-67d251d3ec96|
|created_at_from_device|null|
|updated_at|2018-09-24T10:25:14Z|
|created_at|2018-09-24T10:25:14Z|
|user_uuid|00000000-0000-0000-0000-000000000000|
|echo|true|
|closed|false|
|value|0|
|metadata|&nbsp;|

### datapointack

|Key|Example Value|
|-|-|
|ack_id|160c8c90-bfe4-11e8-87f4-8d732085e587|
|ack_message|0|
|ack_status|200|
|acked_at|2018-09-24T10:24:57Z|
|base_type|boolean|
|closed|false|
|created_at_from_device|null|
|created_at|2018-09-24T10:24:57Z|
|display_name|Blue_LED|
|dsn|AC000W005606115|
|echo|false|
|event_type|datapointack|
|id|15af3cfc-bfe4-11e8-f2f0-9aab1d61f636|
|metadata|&nbsp;|
|oem_id|1234abcd|
|oem_model|linuxevb|
|property_name|Blue_LED|
|resource_tags||
|updated_at|2018-09-24T10:24:57Z|
|user_uuid|00000000-0000-0000-0000-000000000000|
|value|1|

### location

|Key|Example Value|
|-|-|
|created_at|2018-09-24T11:04:07Z|
|dsn|AC000W000340779|
|event_type|location|
|ip|67.255.234.73|
|lat| 44.769500|
|long|-69.428300|
|oem_id|1234abcd|
|oem_model|ledevb|
|provider|ip-based|
|resource_tags||
|user_uuid|00000000-0000-0000-0000-000000000000|

### registration

|Key|Example Value|
|-|-|
|dsn|AC000W000123456|
|event_type|registration|
|oem_id|1234abcd|
|oem_model|ledevb|
|registered|false|
|registration_type|AP-Mode|
|resource_tags||
|unregistered_at|2018-09-24T10:29:50Z|
|user_uuid|null|

