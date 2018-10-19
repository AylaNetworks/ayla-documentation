---
title: Use Case
layout: cloud-ayla-datastream-service.html
---

### Create a template

<ol>
  <li>Browse to Developer Portal.</li>
  <li>Click <code>View My Devices > Templates</code>.</li>
  <li>Click <code>Add</code>, and create a template with the following parameters:
    <table class="key-value-table">
      <tr>
        <th>Visibility:</th>
        <td>oem</td>
      </tr>
      <tr>
        <th>Name:</th>
        <td>Freezer</td>
      </tr>
      <tr>
        <th>Description:</th>
        <td>Walk-in freezer</td>
      </tr>
      <tr>
        <th>Registation Type:</th>
        <td>Same-LAN</td>
      </tr>
      <tr>
        <th>Model:</th>
        <td>freezer-model</td>
      </tr>
      <tr>
        <th>Product Name:</th>
        <td>freezer-product</td>
      </tr>
    </table>
  </li>
  <li>On the template list, find and click your new template.</li>
  <li>Click <code>Properties</code>.</li>
  <li>Click <code>Add</code>, and create a property with the following parameters:
    <table class="key-value-table">
      <tr>
        <th>Property Type:</th>
        <td>TemplateProperty</td>
      </tr>
      <tr>
        <th>Name:</th>
        <td>temp_upper_limit</td>
      </tr>
      <tr>
        <th>Display Name:</th>
        <td>Temp Upper Limit</td>
      </tr>
      <tr>
        <th>Base Type:</th>
        <td>integer</td>
      </tr>
      <tr>
        <th>Direction:</th>
        <td>To Device</td>
      </tr>
      <tr>
        <th>Scope:</th>
        <td>oem</td>
      </tr>
    </table>
  </li>
  <li>Click <code>Add</code>, and create a second property with the following parameters:
    <table class="key-value-table">
      <tr>
        <th>Property Type:</th>
        <td>TemplateProperty</td>
      </tr>
      <tr>
        <th>Name:</th>
        <td>too_warm</td>
      </tr>
      <tr>
        <th>Display Name:</th>
        <td>Too Warm</td>
      </tr>
      <tr>
        <th>Base Type:</th>
        <td>boolean</td>
      </tr>
      <tr>
        <th>Direction:</th>
        <td>From Device</td>
      </tr>
      <tr>
        <th>Scope:</th>
        <td>oem</td>
      </tr>
    </table>
  </li>
</ol>

### Create virtual devices

<ol>
  <li>Browse to OEM Dashboard.</li>
  <li>Click <code>Devices > Virtual Devices</code>.</li>
  <li>Click <code>Create Virtual Device</code>, and create one with the following parameters:
    <table class="key-value-table">
      <tr>
        <th>Product Name:</th>
        <td>Freezer</td>
      </tr>
      <tr>
        <th>OEM Model:</th>
        <td>freezer-model</td>
      </tr>
    </table>
  </li>
  <li>On the Virtual Devices list, find and click your new device.</li>
  <li>Click <code>Template</code>.</li>
  <li>Click <code>Edit</code>, select <code>Freezer</code> from <code>Associate a template</code>, and click <code>Update</code>.</li>
</ol>

### Assign a user to the devices

<ol>
  <li>In OEM Dashboard, click <code>Devices > Virtual Devices</code>.</li>
  <li>On the Virtual Devices list, select the checkbox for the <code>Freezer</code> device.</li>
  <li>Click <code>Assign/Change User</code>, fill in the form, and click <code>Update</code>.</li>
  <li>Browse to Developer Portal to view your new <code>Freezer</code> device.</li>
  <li>Click the device <code>Serial Number</code> to view the <code>Temp Upper Limit</code> and <code>Too Warm</code> properties.</li>
</ol>

### Create an access rule

<ol>
  <li>In OEM Dashboard, click <code>DataStream</code>.</li>
  <li>Click <code>Access Rules</code>.</li>
  <li>Click <code>Create Access Rule</code>, and create one with the following parameters:
    <table class="key-value-table">
      <tr>
        <th>Role:</th>
        <td>OEM::Admin (or your role)</td>
      </tr>
      <tr>
        <th>Model:</th>
        <td>freezer-model</td>
      </tr>
      <tr>
        <th>Client Type:</th>
        <td>cloud</td>
      </tr>
      <tr>
        <th>Type:</th>
        <td>datapoint</td>
      </tr>
    </table>
  </li>
</ol>

### Create subscriptions

<ol>
  <li>Click <code>Subscriptions</code>.</li>
  <li>Click <code>Create Subscription</code>, and create one with the following parameters:
    <table class="key-value-table">
      <tr>
        <th>Name:</th>
        <td>Freezer datapoint for DSS Browser</td>
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
  <li>Create a second, idential subscription with the name <code>Freezer datapoint for DSS Collector</code>.</li>
</ol>
