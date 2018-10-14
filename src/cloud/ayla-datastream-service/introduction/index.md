---
title: Introduction
layout: cloud-ayla-datastream-service.html
---

<h3>Ayla Datastream Service (DSS)</h3>

The Ayla Datastream Service (DSS) is a [WebSocket](https://en.wikipedia.org/wiki/WebSocket) service that provides the following event notifications to subscribing client applications:

<table>
  <tr>
    <th>Event Type</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>connectivity</td>
    <td>The Ayla Cloud started/stopped interacting with a registered device.</td>
  </tr>
  <tr>
    <td>datapoint</td>
    <td>A digital twin property value changed.</td>
  </tr>
  <tr>
    <td>datapointack</td>
    <td>An Ayla Agent confirmed to the Ayla Cloud that a device property value changed.</td>
  </tr>
  <tr>
    <td>location</td>
    <td>A digital twin latitute/longitude value(s) changed.</td>
  </tr>
  <tr>
    <td>registration</td>
    <td>The Ayla Cloud registered a (new) device.</td>
  </tr>
</table>

DSS is available to the following client profiles at the following urls:

<table>
  <tr>
    <th>Region</th>
    <th>Deployment Type</th>
    <th>Client Type</th>
    <th>URL</th>
  </tr>
  <tr>
    <td rowspan="4">China</td>
    <td rowspan="2">Development</td>
    <td>Cloud</td>
    <td>wss://stream.ayla.com.cn/stream/stream</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td>wss://mstream.ayla.com.cn/stream</td>
  </tr>
  <tr>
    <td rowspan="2">Field</td>
    <td>Cloud</td>
    <td>wss://stream-field.ayla.com.cn/stream</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td>wss://mstream-field.ayla.com.cn/stream</td>
  </tr>
  <tr>
    <td rowspan="2">Europe</td>
    <td rowspan="2">Field</td>
    <td>Cloud</td>
    <td>wss://stream-field-eu.aylanetworks.com/stream</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td>wss://mstream-field-eu.aylanetworks.com/stream</td>
  </tr>
  <tr>
    <td rowspan="6">United States</td>
    <td rowspan="2">Development</td>
    <td>Cloud</td>
    <td>wss://stream.aylanetworks.com/stream</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td>wss://mstream-dev.aylanetworks.com/stream</td>
  </tr>
  <tr>
    <td rowspan="2">Staging</td>
    <td>Cloud</td>
    <td>wss://staging-dss.ayladev.com/stream</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td>wss://staging-mstream.ayladev.com/stream</td>
  </tr>
  <tr>
    <td rowspan="2">Field</td>
    <td>Cloud</td>
    <td>wss://stream-field.aylanetworks.com/stream</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td>wss://mstream-field.aylanetworks.com/stream</td>
  </tr>
</table>

