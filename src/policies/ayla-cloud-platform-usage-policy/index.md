---
title: Ayla Cloud Platform Usage Policy
layout: site.html
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li>
      <a href="#core-title">Usage Policy</a>
      <ul>
        <li><a href="#data-availability">Data Availability</a></li>
        <li><a href="#transactions">Transactions</a></li>
      </ul>
    </li>
  </ul>
</aside>

## Data Availability

<table>
<tr>
<th rowspan=2 style="text-align:center;vertical-align:middle;">Category</th>
<th rowspan=2 style="text-align:center;vertical-align:middle;">Type</th>
<th colspan=3 style="text-align:center;">Availability</th>
</tr>
<tr>
<th style="text-align:center;">Immediate</th>
<th style="text-align:center;">By Request</th>
<th style="text-align:center;">Total</th>
</tr>
<tr>
<td rowspan=3>Device Data</td>
<td>Datapoints</td>
<td rowspan=4>3 months</td>
<td rowspan=2>2 years 9 months</td>
<td rowspan=2>3 years</td>
</tr>
<tr>
<td>Data Export Files</td>
</tr>
<tr>
<td>Log Files</td>
<td rowspan=7 style="background:#f9f6f6;">&nbsp;</td>
<td rowspan=2>3 months</td>
</tr>
<tr>
<td>Mobile Data</td>
<td>Log Files</td>
</tr>
<tr>
<td rowspan=3>System Data</td>
<td>Device Metadata</td>
<td rowspan=4>20 years</td>
<td rowspan=4>20 years</td>
</tr>
<tr>
<td>User Metadata</td>
</tr>
<tr>
<td>Service Data</td>
</tr>
<tr>
<td rowspan=2>Reports</td>
<td>Transaction Reports</td>
</tr>
<tr>
<td>Insights Reports</td>
<td>1 year</td>
<td>1 year</td>
</tr>
</table>

## Transactions

<table>
<tr>
<th>Operation</th>
<th>Description</th>
<th>Transaction Count</th>
</tr>
<tr>
<td>Connectivity</td>
<td>Provide a secure, authenticated connection between your devices and the Ayla cloud platform.</td>
<td>n/a</td>
</tr>
<tr>
<td>Provisioning</td>
<td>Provision the device with a unique key and serial number. Run manufacturing scripts at the factory for secure provisioning.</td>
<td>n/a</td>
</tr>
<tr>
<td>Registration</td>
<td>Register a user on the platform and associate a device to the user.</td>
<td>n/a</td>
</tr>
<tr>
<td>Device Templates</td>
<td>The templates that define the properties, metadata and configuration of the device.</td>
<td>n/a</td>
</tr>
<tr>
<td rowspan=2>Send Data</td>
<td>Managed Properties: Send integer, boolean, string, message or decimal property or metadata value to the cloud from a device, mobile app or feeds.</td>
<td>1 transaction for every 4KB of data sent for each transmission to the cloud.<br/>Example 1: 1 datapoint is sent as a String with a size of 1KB, this will count as 1 transaction.<br/>Example 2: 7 datapoints are sent in a Batch, with a size of 6KB, this will count as 2 transactions.</td>
</tr>
<tr>
<td>Streaming Only Properties: Send integer, boolean, string, message or decimal property or metadata value to the cloud from a device or mobile app for a "streaming only” property.</td>
<td>0.5 transaction for every 4KB of data sent for each transmission to the cloud.<br/>Example 1: 1 datapoint is sent as a Message property with a size of 10KB, this will count as 1.5 transactions.<br/>Example 2: 7 datapoints are sent in a Batch, with a size of 3KB, this will count as 0.5 transactions, only if all 7 datapoints are for streaming only properties. For batches with part managed properties and part streaming only properties, these will be counted as a managed property batch transaction.</td>
</tr>
<tr>
<td rowspan=2>Stream Data</td>
<td>DSSv1: Stream a integer, boolean, string, message or decimal property or metadata value from the cloud using the Cloud Data Streaming Service v1 (websockets).</td>
<td>1 transaction per datapoint streamed.</td>
</tr>
<tr>
<td>DSSv2: Stream a integer, boolean, string, message or decimal property or metadata value from the cloud using the Cloud Data Streaming Service v2 (AWS Kinesis, Azure Event Hub).</td>
<td>1 transaction per 1KB of data streamed across all streaming transmissions. For example, if 2000 datapoints are streamed in one day and that results in a total size of 50KB, that will count as 50 transactions for that day.</td>
</tr>
<tr>
<td rowspan=2>Files and OTA</td>
<td>Upload a file property or log file from the device or mobile app.</td>
<td>1 transaction for every 8KB uploaded for each transmission to the cloud. For example, if the file is 21KB, that will count as 3 transactions.</td>
</tr>
<tr>
<td>Download a file property or OTA Image to a device, mobile app or web app</td>
<td>1 transaction for every 8KB downloaded for each transmission from the cloud. For example, if the recipe file is 1KB, that will count as 1 transaction.</td>
</tr>
<tr>
<td>Storage</td>
<td>Data transfer and storage across all storage types.</td>
<td>n/a</td>
</tr>
<tr>
<td rowspan=4>Rules</td>
<td>Evaluate a Rule Condition.</td>
<td>1 transaction for every 1000 rules evaluated</td>
</tr>
<tr>
<td>Execute a Rule Action.</td>
<td>1 transaction per rule action triggered</td>
</tr>
<tr>
<td>Execute a Data Lake Rule.</td>
<td>0.25 transactions for every datapoint processed</td>
</tr>
<tr>
<td>Query to Retrieve Data Lake Rule results.</td>
<td>1 transaction per query</td>
</tr>
<tr>
<td>SMS</td>
<td>Send an SMS Notification.</td>
<td>250 transactions per SMS notification</td>
</tr>
<tr>
<td rowspan=2>Analytics</td>
<td>Send property or metadata to analytics pipeline for processing or Machine Learning model training.</td>
<td>1 transaction per 1000 datapoints sent for model training.</td>
</tr>
<tr>
<td>Query to retrieve analytics output or to evaluate data against the ML model.</td>
<td>1 transaction per query</td>
</tr>
<tr>
<td rowspan=2>Search</td>
<td>Searching the platform for devices, users, properties and data.</td>
<td>n/a</td>
</tr>
<tr>
<td>Read/Retrieve a non-file property value from the Service API.</td>
<td>n/a</td>
</tr>
<tr>
<td>Service API</td>
<td>Update user, template, schedule or device metadata information.</td>
<td>n/a</td>
</tr>
<tr>
<td>Data Export</td>
<td>Generate and download data export file from cloud.</td>
<td>n/a</td>
</tr>
<tr>
<td>Schedules</td>
<td>Download Schedule data to the device.</td>
<td>n/a</td>
</tr>
<tr>
<td>Device Sharing</td>
<td>Execute family share actions.</td>
<td>n/a</td>
</tr>
<tr>
<td>LAN Mode</td>
<td>Direct mobile app control over LAN</td>
<td>n/a</td>
</tr>
<tr>
<td>User Management</td>
<td>User management actions including creating, updating, authenticating and deleting users.</td>
<td>n/a</td>
</tr>
<tr>
<td>Role-based Access Control</td>
<td>Configuration and updates of Role Based Access Controls and user permission management.</td>
<td>n/a</td>
</tr>
</table>