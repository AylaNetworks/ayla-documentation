---
title: Ayla Data Export for Device Events
layout: technote.html
author: Sherri Sotnick
creationDate: July, 2020
lastModifiedDate: Month 00, 0000
---

The Ayla Data Export feature provides OEM developers and data analysts with greater flexibility for retrieving and consuming historic device event data from the Ayla Cloud Service.

## Why Use Ayla's Data Export Feature

This feature can assist in the analysis and debugging of the following use cases:

* Troubleshooting inconsistent device behavior over a period of time
* Identifying usage patterns and scope for improvement
* Maintaining an archive of device events data for product lifecycle management

Customers who do not need access to real-time data or who do not wish to build external systems to maintain an active Data Stream Services (DSS) subscription can use this feature to export their historic data for analysis or archiving. This feature also allows our customers to access and retrieve data beyond the current standard data retention policy on the Ayla Customer Dashboard, which currently is 90 days from the date of capture.

## Where the Data Files Are Stored 

The following 5 device event types are stored on Amazon S3 (Simple Storage Service):

* Datapoint
* Datapoint Ack
* Location
* Connection
* Registration

Amazon S3 creates a folder for each event type to compile its data files. When new event data is available after the most recent save, the event data files are posted to Amazon S3 in their respective event type folders. You may notice more time-stamped subfolders being added under specific event type folders if the volume of data being generated for that event types is high. Each event type folder can have multiple subfolders that are timestamped based on when the data within the folder was created. Each subfolder contains only one CSV event data file.

## How to Use Ayla's Data Export Feature

To use this feature, complete the following three major steps, which are described in this section:

1. Retrieve the OEM Access Credentials: Gain access to the Ayla Customer Dashboard with OEM Admin privileges.
2. Use an Amazon S3 compatible client:  View and retrieve device event files using a Grapical User Interface (GUI) or Command Line Interface (CLI) to Amazon S3.
3. View and Consume the event data files: Use the appropriate application to read and consume the generated.csv device event data files.

### Step 1: Retrieve the OEM Access Credentials

1. Log in to the [Ayla Customer Dashboard](https://dashboard.aylanetworks.com).
2. Click **OEM Profile** in the navigation panel, and then click the **Data Export** tab to view the OEM access credentials. Refer to the following example:

   <div><img src="Dashboard_DataExport2.png" width="800" height="200"></div>

   The access credentials remain valid indefinitely unless an OEM Admin requests new credentials.

3. To request new access credentials, click the **REFRESH CREDENTIALS** button, and then click **ACCEPT** in the confirmation message. Refer to the following example:

   <div><img src="Dashboard_DataExp_RefreshCreds.png" width="800" height="195"></div>

### Step 2: Use an Amazon S3 Compatible Client to Access the Data Files

The Ayla Cloud Service regularly implements processes to aggregate new device events that are packaged into data files. These files are stored on Amazon S3 and organized by date, timestamp, and event type. The data files may contain duplicate events or out-of-sequence events data. These files are maintained for 12 months. You may use any client compatible with Amazon S3 to access the Ayla data files. Following are two examples of these clients:

* CyberDuck
  + Mac/Windows Grapical User Interface (GUI)
  + [http://cyberduck.io](http://cyberduck.io)
* s3Cmd
  + Mac/Windows Command Line Interface (CLI)
  + [http://s3tools.org/s3cmd](http://s3tools.org/s3cmd)
   
Please note that Ayla Networks does not endorse any particular client, including the two examples above. The example in this tech note uses the CyberDuck client. Therefore, the fields may be different if you are using another client. Use the client as follows to access the Ayla data files on Amazon S3:

1. Download the client from its company website, and then open the client. The example below these three steps shows the open connection window for the CyberDuck client.
 
2. Select the Amazon S3 option in the fields for the protocal and server, and then enter the OEM access credentials in the corresponding fields, also shown in the example below these three steps. Note that if you are a developer working across multiple OEMs, make sure that you enter the correct OEM access credentials for the data files you wish to view.

3. Enter any additional parameters in the other fields, and then click Connect. <div><img src="DataExp_MapCredsToS3CyberDuck.png" width="600" height="494"></div>

Once you successfully connect to Amazon S3, you gain access to the device event data files associated with the OEM access credentials that were entered.

Following is an example of the folders for the 5 event types on Amazon S3. As mentioned earlier, the Ayla device event data files are grouped into these 5 event types.

<img src="DataExp_EventFileFoldersOnS3.png" width="204" height="186">

Following is an example of the event subfolders within the main folder for each of the 5 event types. Each subfolder is tagged with a timestamp formatted as YYYY-MM-DD-HH:MM:SS in UTC. The frequency in which the subfolders and data files are created in the event type folders varies depending on amount of data generated for the event type. Some event types typically generate more data than others. You may therefore see some gaps between the timestamped subfolders (also shown in the example below). For instance, the Datapoint or Datapoint Ack event folders typically have more subfolders and data files compared to Registration or Location event folders. 

<img src="DataExp_TimeGaps_EventFileFoldersOnS3.png" width="800" height="190">

### Step 3: View and Consume the Event Data Files

Every subfolder in the event type folders has one CSV event data file. You therefore need an application (such as Microsoft Excel) to view the saved .csv data files. The example below shows the contents of an CSV file opened in Microsoft Excel. Notice that each individual property of the datapoint event displays as a single line entry in the .csv file. This data entry pattern is the same in the .csv files across all event types.

<img src="DataExp_ViewCSVfiles_Excel.png" width="800" height="57">

**NOTE:** String values are base64 encoded.

## Ayla Device Event Data Export Files by Event Type

**NOTE:** The display_name, val_string, and metadata values are base64 encoded.

|Datapoint            |Datapoint ACK        | Connection |Location | Registration|
|-            | -        | - | - | -|
|oem_id                   |  oem_model              |  oem_id        |  oem_id      |  oem_id  |
|oem_model                |  dsn                    |  oem_model     |  oem_model   |  oem_model  |
|dsn                      |  property_name          |  dsn           |  dsn         |  dsn|
|property_name            |  display_name           | event_time     |  ip          |  user_uuid|
|display_name             |  base_type              | user_uuid      |  lat         |  registered  |
|base_type                |  time_uuid              | status         |  long        |  registration_type |
|time_uuid                |  created_at_from_device |                |  provider    |  registered at|
|created_at_from_device   |  updated_at             |                |  user_uuid   |  unregistered at|
|updated_at               |  created_at             |                |  created_at  ||
|created_at               |  user_uuid              |                |              ||
|user_uuid                |  echo                   |                |              ||
|echo                     |  closed                 |                |              ||
|closed                   |  discarded              |                |              ||
|discarded                |  scope                  |                |              ||
|scope                    |  val_int                |                |              ||
|val_int                  |  val_decimal            |                |              ||
|val_decimal              |  val_float              |                |              ||
|val_float                |  val_boolean            |                |              ||
|val_boolean              |  val_string             |                |              ||
|val_string               |  metadata               |                |              ||
|metadata                 |  ack_message            |                |              ||
|direction (input/output) |  ack_status             |                |              ||
|                        |  ack_id                  |                |              ||
|                        |  ack_id                  |                |              ||
|                        |  acked_at                |                |              ||


