---
title: Create subscriptions
layout: cloud-ayla-datastream-service.html
c: block
---

Include how to create subscriptions programmatically using the REST API. Refer to the REST API section.

<ol>
  <li>In OEM Dashboard, click <code>DataStream</code>.</li>
  <li>Click <code>Subscriptions</code>.</li>
  <li>Click <code>Create Subscription</code>, and create one with the following parameters:
    <table class="key-value-table">
      <tr>
        <th>Name:</th>
        <td>Freezer datapoint events for DSS Browser</td>
      </tr>
      <tr>
        <th>OEM Model:</th>
        <td>freezer-model</td>
      </tr>
      <tr>
        <th>Client Type:</th>
        <td>cloud</td>
      </tr>
      <tr>
        <th>Subscription Type:</th>
        <td>datapoint</td>
      </tr>
    </table>
  </li>
  <li>Create a second subscription with the following parameters:
    <table class="key-value-table">
      <tr>
        <th>Name:</th>
        <td>Freezer datapoint events for DSS Collector</td>
      </tr>
      <tr>
        <th>OEM Model:</th>
        <td>freezer-model</td>
      </tr>
      <tr>
        <th>Client Type:</th>
        <td>cloud</td>
      </tr>
      <tr>
        <th>Subscription Type:</th>
        <td>datapoint</td>
      </tr>
    </table>
  </li>
</ol>
