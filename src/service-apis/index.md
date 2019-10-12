---
title: Service APIs
layout: site.html
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Service APIs</a></li>
    <li><a href="#service-urls">Service URLs</a>
      <ul>
        <li><a href="#application-service">Application Service</a></li>
        <li><a href="#datastream-service">Datastream Service</a></li>
        <li><a href="#device-service">Device Service</a></li>
        <li><a href="#factory-proxy-service">Factory Proxy Service</a></li>
        <li><a href="#image-service">Image Service</a></li>
        <li><a href="#log-service">Log Service</a></li>
        <li><a href="#notification-service">Notification Service</a></li>
        <li><a href="#rules-service">Rules Service</a></li>
        <li><a href="#user-service">User Service</a></li>
        <li><a href="#zigbee-service">Zigbee Service</a></li>
      </ul>
    </li>
  </ul>
</aside>


* <a href="https://developer.aylanetworks.com/apibrowser">Ayla API Browser</a>
* <a href="/data-management/ayla-datastream-service/#api">Ayla Datastream Service</a>
* <a href="/archive/ayla-factory-service-api-specification">Ayla Factory Service API Specification</a>
* <a href="/archive/ayla-rbac-api-specification">Ayla RBAC API Specification</a>
* <a href="/archive/ayla-rules-api-specification">Ayla Rules API Specification</a>
* <a href="/archive/ayla-service-api-specification">Ayla Service API Specification</a>

# Service URLs

## Application Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>application.ayla.com.cn</td>
</tr>
<tr>
<td>field</td>
<td>app-field.ayla.com.cn</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>app-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>application.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>app-field.aylanetworks.com</td>
</tr>
</table>

## Datastream Service

Use <code>wss</code> for WebSockets, and <code>https</code> for the REST API.

<div class="table-responsive-md">
<table>
<tr>
<th>client-type</th>
<th>region</th>
<th>deployment</th>
<th>protocol</th>
<th>datastream-domain</th>
</tr>
<tr>
<td rowspan="10">cloud</td>
<td rowspan="4">cn</td>
<td rowspan="2">dev</td>
<td>wss</td>
<td>stream.ayla.com.cn</td>
</tr>
<tr>
<td>https</td>
<td>stream.ayla.com.cn</td>
</tr>
<tr>
<td rowspan="2">field</td>
<td>wss</td>
<td>stream-field.ayla.com.cn</td>
</tr>
<tr>
<td>https</td>
<td>stream-field.ayla.com.cn</td>
</tr>
<tr>
<td rowspan="2">eu</td>
<td rowspan="2">field</td>
<td>wss</td>
<td>stream-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td>https</td>
<td>stream-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="4">us</td>
<td rowspan="2">dev</td>
<td>wss</td>
<td>stream.aylanetworks.com</td>
</tr>
<tr>
<td>https</td>
<td>stream.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">field</td>
<td>wss</td>
<td>stream-field.aylanetworks.com</td>
<tr>
<td>https</td>
<td>stream-field.aylanetworks.com</td>
</tr>
</tr>
<tr>
<td rowspan="10">mobile</td>
<td rowspan="4">cn</td>
<td rowspan="2">dev</td>
<td>https</td>
<td>mdss-dev.ayla.com.cn</td>
</tr>
<tr>
<td>wss</td>
<td>mstream-dev.ayla.com.cn</td>
</tr>
<tr>
<td rowspan="2">field</td>
<td>https</td>
<td>mdss-field.ayla.com.cn</td>
</tr>
<tr>
<td>wss</td>
<td>mstream-field.ayla.com.cn</td>
</tr>
<tr>
<td rowspan="2">eu</td>
<td rowspan="2">field</td>
<td>https</td>
<td>mdss-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td>wss</td>
<td>mstream-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="4">us</td>
<td rowspan="2">dev</td>
<td>https</td>
<td>mdss-dev.aylanetworks.com</td>
</tr>
<tr>
<td>wss</td>
<td>mstream-dev.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">field</td>
<td>https</td>
<td>mdss-field.aylanetworks.com</td>
<tr>
<td>wss</td>
<td>mstream-field.aylanetworks.com</td>
</tr>
</tr>
</table>
</div>

## Device Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>ads-dev.ayla.com.cn</td>
</tr>
<tr>
<td>field</td>
<td>ads-field.ayla.com.cn</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>ads-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>ads-dev.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>ads-field.aylanetworks.com</td>
</tr>
</table>

## Factory Proxy Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>api-dev.ayla.com.cn</td>
</tr>
<tr>
<td>field</td>
<td>api-field.ayla.com.cn</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>api-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>api-dev.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>api-field.aylanetworks.com</td>
</tr>
</table>

## Image Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>ais.ayla.com.cn</td>
</tr>
<tr>
<td>field</td>
<td>ais-field.ayla.com.cn</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>ais-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>ais.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>ais-field.aylanetworks.com</td>
</tr>
</table>

## Log Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>log.ayla.com.cn</td>
</tr>
<tr>
<td>field</td>
<td>log-field.ayla.com.cn</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>log-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>log.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>log-field.aylanetworks.com</td>
</tr>
</table>

## Notification Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>ans.ayla.com.cn</td>
</tr>
<tr>
<td>field</td>
<td>ans-field.ayla.com.cn</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>ans-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>ans.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>ans-field.aylanetworks.com</td>
</tr>
</table>

## Rules Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>field</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>&nbsp;</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>rulesservice-dev.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>&nbsp;</td>
</tr>
</table>

## User Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>user-dev.ayla.com.cn</td>
</tr>
<tr>
<td>field</td>
<td>user-field.ayla.com.cn</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>user-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>user-dev.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>user-field.aylanetworks.com</td>
</tr>
</table>

## Zigbee Service

<table>
<tr>
<th>region</th>
<th>deployment</th>
<th>domain</th>
</tr>
<tr>
<td rowspan="2">cn</td>
<td>dev</td>
<td>zigbee.ayla.com.cn</td>
</tr>
<tr>
<td>field</td>
<td>zigbee-field.ayla.com.cn</td>
</tr>
<tr>
<td>eu</td>
<td>field</td>
<td>zigbee-field-eu.aylanetworks.com</td>
</tr>
<tr>
<td rowspan="2">us</td>
<td>dev</td>
<td>zigbee.aylanetworks.com</td>
</tr>
<tr>
<td>field</td>
<td>zigbee-field.aylanetworks.com</td>
</tr>
</table>