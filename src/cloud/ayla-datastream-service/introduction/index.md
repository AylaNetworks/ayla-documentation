---
title: Introduction
layout: cloud-ayla-datastream-service.html
c: block
---

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
