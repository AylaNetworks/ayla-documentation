---
title: Test
layout: site.html
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Test</a></li>
    <li><a href="#device-1">Device 1</a>
      <ul>
        <li><a href="#notification-b1">Notification B1</a></li>
        <li><a href="#notification-r1">Notification R1</a></li>
        <li><a href="#trigger-b1-on-blue_button">Trigger B1 - Blue_button</a></li>
        <li><a href="#trigger-r1-on-blue_button">Trigger R1 - Blue_button</a></li>
      </ul>
    </li>
    <li><a href="#device-2">Device 2</a>
      <ul>
        <li><a href="#notification-b2">Notification B2</a></li>
        <li><a href="#notification-r2">Notification R2</a></li>
        <li><a href="#trigger-b2-on-blue_button">Trigger B2 - Blue_button</a></li>
        <li><a href="#trigger-r2-on-blue_button">Trigger R2 - Blue_button</a></li>
      </ul>
    </li>
  </ul>
</aside>

# Device 1
<pre>{
  "id": 5326808,
  "product_name": "Device 1",
  "model": "AY008ESP1",
  "dsn": "AC000W006512709",
  "oem_model": "ledevb"
}</pre>

## Notification B1
<pre>{
  "notification": {
    "id": 14482608,
    "url": "https://acme.com/notifications",
    "username": "User B",
    "password": "pwd123",
    "notification_type": "on_connect",
    "message": "Notification B1",
    "device_nickname": "Device 1"
  }
}</pre>

### NApp B1-1
<pre>{
  "notification_app": {
    "id": 14886726,
    "notification_id": 14482608,
    "app_type": "email",
    "nickname": "NApp B1-1",
    "notification_app_parameters": {
      "username": "User B",
      "email": "userb@acme.com"
    }
  }
}</pre>

### NApp B1-2
<pre>{
  "notification_app": {
    "id": 14886727,
    "notification_id": 14482608,
    "app_type": "email",
    "nickname": "NApp B1-2",
    "notification_app_parameters": {
      "username": "User R",
      "email": "userr@acme.com"
    }
  }
}</pre>

## Notification R1
<pre>{
  "notification": {
    "id": 14482610,
    "url": "https://acme.com/notifications",
    "username": "User R",
    "password": "pwd123",
    "notification_type": "on_connect",
    "message": "Notification R1",
    "device_nickname": "Device 1"
  }
}</pre>

### NApp R1-1
<pre>{
  "notification_app": {
    "id": 14886730,
    "notification_id": 14482610,
    "app_type": "email",
    "nickname": "NApp R1-1",
    "notification_app_parameters": {
      "username": "User B",
      "email": "userb@acme.com"
    }
  }
}</pre>

### NApp R1-2
<pre>{
  "notification_app": {
    "id": 14886731,
    "notification_id": 14482610,
    "app_type": "email",
    "nickname": "NApp R1-2",
    "notification_app_parameters": {
      "username": "User R",
      "email": "userr@acme.com"
    }
  }
}</pre>

## Trigger B1 on Blue_button

<pre>{
  "trigger": {
    "device_nickname": "Device 1",
    "property_nickname": "Trigger B1",
    "compare_type": "==",
    "period": "always",
    "trigger_type": "always",
    "base_type": "boolean",
    "value": "1",
    "triggered_at": null,
    "key": 11759779,
    "property_key": 18846526,
    "property_name": "Blue_button"
  }
}</pre>

### TApp B1-1

<pre>{
  "trigger_app": {
    "name": "email",
    "nickname": "TApp B1-1",
    "key": 4064165,
    "trigger_key": 11759779,
    "username": null,
    "repeat_freq": null,
    "param1": "userb@acme.com",
    "param2": null,
    "param3": null,
    "param4": null,
    "param5": null,
    "email_template_id": null,
    "email_body_html": null,
    "email_subject": null,
    "contact_id": null
  }
}</pre>

### TApp B1-2

<pre>{
  "trigger_app": {
    "name": "email",
    "nickname": "TApp B1-2",
    "key": 4064166,
    "trigger_key": 11759779,
    "username": null,
    "repeat_freq": null,
    "param1": "userr@acme.com",
    "param2": null,
    "param3": null,
    "param4": null,
    "param5": null,
    "email_template_id": null,
    "email_body_html": null,
    "email_subject": null,
    "contact_id": null
  }
}</pre>

## Trigger R1 on Blue_button

<pre>{
  "trigger": {
    "device_nickname": "Device 1",
    "property_nickname": "Trigger R1",
    "compare_type": "==",
    "period": "always",
    "trigger_type": "always",
    "base_type": "boolean",
    "value": "1",
    "triggered_at": null,
    "key": 11759780,
    "property_key": 18846526,
    "property_name": "Blue_button"
  }
}</pre>

### TApp R1-1

<pre>{
  "trigger_app": {
    "name": "email",
    "nickname": "TApp R1-1",
    "key": 4064167,
    "trigger_key": 11759780,
    "username": null,
    "repeat_freq": null,
    "param1": "userb@acme.com",
    "param2": null,
    "param3": null,
    "param4": null,
    "param5": null,
    "email_template_id": null,
    "email_body_html": null,
    "email_subject": null,
    "contact_id": null
  }
}</pre>

### TApp R1-2

<pre>{
  "trigger_app": {
    "name": "email",
    "nickname": "TApp R1-2",
    "key": 4064168,
    "trigger_key": 11759780,
    "username": null,
    "repeat_freq": null,
    "param1": "userr@acme.com",
    "param2": null,
    "param3": null,
    "param4": null,
    "param5": null,
    "email_template_id": null,
    "email_body_html": null,
    "email_subject": null,
    "contact_id": null
  }
}</pre>

# Device 2
<pre>{
  "id": 5372856,
  "product_name": "Device 2",
  "model": "AY008ESP1",
  "dsn": "AC000W006670592",
  "oem_model": "ledevb"
}</pre>

## Notification B2
<pre>{
  "notification": {
    "id": 14482609,
    "url": "https://acme.com/notifications",
    "username": "User B",
    "password": "pwd123",
    "notification_type": "on_connect",
    "message": "Notification B2",
    "device_nickname": "Device 2"
  }
}</pre>

### NApp B2-1
<pre>{
  "notification_app": {
    "id": 14886728,
    "notification_id": 14482609,
    "app_type": "email",
    "nickname": "NApp B2-1",
    "notification_app_parameters": {
      "username": "User B",
      "email": "userb@acme.com"
    }
  }
}</pre>

### NApp B2-2
<pre>{
  "notification_app": {
    "id": 14886729,
    "notification_id": 14482609,
    "app_type": "email",
    "nickname": "NApp B2-2",
    "notification_app_parameters": {
      "username": "User R",
      "email": "userr@acme.com"
    }
  }
}</pre>

## Notification R2
<pre>{
  "notification": {
    "id": 14482611,
    "url": "https://acme.com/notifications",
    "username": "User R",
    "password": "pwd123",
    "notification_type": "on_connect",
    "message": "Notification R2",
    "device_nickname": "Device 2"
  }
}</pre>

### NApp R2-1
<pre>{
  "notification_app": {
    "id": 14886732,
    "notification_id": 14482611,
    "app_type": "email",
    "nickname": "NApp R2-1",
    "notification_app_parameters": {
      "username": "User B",
      "email": "userb@acme.com"
    }
  }
}</pre>

### NApp R2-2
<pre>{
  "notification_app": {
    "id": 14886733,
    "notification_id": 14482611,
    "app_type": "email",
    "nickname": "NApp R2-2",
    "notification_app_parameters": {
      "username": "User R",
      "email": "userr@acme.com"
    }
  }
}</pre>

## Trigger B2 on Blue_button

<pre>{
  "trigger": {
    "device_nickname": "Device 2",
    "property_nickname": "Trigger B2",
    "compare_type": "==",
    "period": "always",
    "trigger_type": "always",
    "base_type": "boolean",
    "value": "1",
    "triggered_at": null,
    "key": 11759781,
    "property_key": 18846514,
    "property_name": "Blue_button"
  }
}</pre>

### TApp B2-1

<pre>{
  "trigger_app": {
    "name": "email",
    "nickname": "TApp B2-1",
    "key": 4064169,
    "trigger_key": 11759781,
    "username": null,
    "repeat_freq": null,
    "param1": "userb@acme.com",
    "param2": null,
    "param3": null,
    "param4": null,
    "param5": null,
    "email_template_id": null,
    "email_body_html": null,
    "email_subject": null,
    "contact_id": null
  }
}</pre>

### TApp B2-2

<pre>{
  "trigger_app": {
    "name": "email",
    "nickname": "TApp B2-2",
    "key": 4064170,
    "trigger_key": 11759781,
    "username": null,
    "repeat_freq": null,
    "param1": "userr@acme.com",
    "param2": null,
    "param3": null,
    "param4": null,
    "param5": null,
    "email_template_id": null,
    "email_body_html": null,
    "email_subject": null,
    "contact_id": null
  }
}</pre>

## Trigger R2 on Blue_button

<pre>{
  "trigger": {
    "device_nickname": "Device 2",
    "property_nickname": "Trigger R2",
    "compare_type": "==",
    "period": "always",
    "trigger_type": "always",
    "base_type": "boolean",
    "value": "1",
    "triggered_at": null,
    "key": 11759782,
    "property_key": 18846514,
    "property_name": "Blue_button"
  }
}</pre>

### TApp R2-1

<pre>{
  "trigger_app": {
    "name": "email",
    "nickname": "TApp R2-1",
    "key": 4064171,
    "trigger_key": 11759782,
    "username": null,
    "repeat_freq": null,
    "param1": "userb@acme.com",
    "param2": null,
    "param3": null,
    "param4": null,
    "param5": null,
    "email_template_id": null,
    "email_body_html": null,
    "email_subject": null,
    "contact_id": null
  }
}</pre>

### TApp R2-2

<pre>{
  "trigger_app": {
    "name": "email",
    "nickname": "TApp R2-2",
    "key": 4064172,
    "trigger_key": 11759782,
    "username": null,
    "repeat_freq": null,
    "param1": "userr@acme.com",
    "param2": null,
    "param3": null,
    "param4": null,
    "param5": null,
    "email_template_id": null,
    "email_body_html": null,
    "email_subject": null,
    "contact_id": null
  }
}</pre>
