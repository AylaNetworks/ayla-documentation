---
title: createDssSubscription
layout: cloud-ayla-datastream-service.html
a: block
---

<pre>POST /api/v1/subscriptions.json</pre>

### Request Parameters

<table class="normal-table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Necessity</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>batch_size</td>
    <td>integer</td>
    <td>optional</td>
    <td>1</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>client_type</td>
    <td>string</td>
    <td>required</td>
    <td>&nbsp;</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>description</td>
    <td>string</td>
    <td>optional</td>
    <td>null</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>dsn</td>
    <td>string</td>
    <td>optional</td>
    <td>*</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>optional</td>
    <td>null</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>oem</td>
    <td>string</td>
    <td>optional</td>
    <td>?</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>oem_model</td>
    <td>string</td>
    <td>optional</td>
    <td>*</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>property_name</td>
    <td>string</td>
    <td>optional</td>
    <td>*</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>subscription_type</td>
    <td>string</td>
    <td>required</td>
    <td>&nbsp;</td>
    <td>sss</td>
  </tr>
  <tr>
    <td>user_uuid</td>
    <td>string</td>
    <td>optional</td>
    <td>&nbsp;</td>
    <td>?</td>
  </tr>
</table>