---
title: API Reference
layout: site.html
a: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Reference</a></li>
    <li><a href="#datastream-service-v1">Datastream Service v1</a></li>
    <li><a href="#datastream-service-v2">Datastream Service v2</a></li>
    <li><a href="#device-service">Device Service</a></li>
    <li><a href="#factory-proxy-service">Factory Proxy Service</a></li>
    <li><a href="#iot-command-center">IoT Command Center</a></li>
    <li><a href="#rules-service">Rules Service</a></li>
    <li><a href="#user-service">User Service</a></li>
    <li><a href="#appendix">Appendix</a>
      <ul>
        <li><a href="#path-parameters">Path Parameters</a></li>
        <li><a href="#query-parameters">Query Parameters</a></li>
      </ul>
    </li>
  </ul>
</aside>

# Datastream Service v1

# Datastream Service v2

# Device Service

# Factory Proxy Service

# IoT Command Center

## Filters

```
{
  "id": 6079,
  "name": "My ESP32 Devices",
  "description": null,
  "attributes": null,
  "dsns": {
    "match": [
      "AC000W006512709"
    ],
    "include": null,
    "exclude": null
  },
  "properties": null,
  "status": null,
  "oem_model": "ledevb",
  "device_metadata": null,
  "created_at": "2020-04-15T13:11:19+0000",
  "updated_at": "2020-04-15T13:11:19+0000",
  "filter_metadata": [],
  "oem_version": null,
  "match_oem_version": true
}
```

## Errors

For response status codes like 404, ICC returns its own error codes and messages in the response data object.

```
{
  "errors": [
    {
      "code": "ICC-0301",
      "message": "resource: Not found"
    }
  ]
}
```

# Rules Service

# User Service

# Appendix

## Path Parameters

## Query Parameters

|Name|Type|Description|
|-|-|-
|abstract_only|sss|sss|
|accepted|sss|sss|
|action_uuid|sss|sss|
|activated_at_after|sss|sss|
|activated_at_before|sss|sss|
|concrete_only|sss|sss|
|confirmation_token|sss|sss|
|connected_at_after|sss|sss|
|connected_at_before|sss|sss|
|country|sss|sss|
|destination_type|sss|sss|
|destination_uuid|sss|sss|
|direction|sss|sss|
|display_name|sss|sss|
|dsn|sss|sss|
|email|sss|sss|
|email_body_html|sss|sss|
|email_subject|sss|sss|
|email_template_id|sss|sss|
|expired|sss|sss|
|filter[created_at_end_date]|sss|sss|
|filter[created_at_since_date]|sss|sss|
|filter[email]|sss|sss|
|filter[firstname]|sss|sss|
|filter[lastname]|sss|sss|
|firstname|sss|sss|
|format|sss|sss|
|id|sss|sss|
|ip|sss|sss|
|is_forward_page|sss|sss|
|job_type|sss|sss|
|keys|sss|sss|
|lastname|sss|sss|
|limit|sss|sss|
|metadata|sss|sss|
|name|sss|sss|
|next|sss|sss|
|oem|sss|sss|
|oemid|sss|sss|
|oem_id|sss|sss|
|oem_model|sss|sss|
|operation|sss|sss|
|order|sss|sss|
|order_by|sss|sss|
|owner_id|sss|sss|
|page|sss|sss|
|paginated|sss|sss|
|per_page|sss|sss|
|phone_country_code|sss|sss|
|phone_number|sss|sss|
|previous|sss|sss|
|property_name|sss|sss|
|property_names[]|sss|sss|
|regtype|sss|sss|
|resource_id|sss|sss|
|resource_name|sss|sss|
|role|sss|sss|
|rule_uuid|sss|sss|
|search_by_property|sss|sss|
|sort_by|sss|sss|
|status|sss|sss|
|street_address|sss|sss|
|target|sss|sss|
|time|sss|sss|
|token|sss|sss|
|type|sss|sss|
|tz_id|sss|sss|
|user_email|sss|sss|
|user_id|sss|sss|
|user_uuid|sss|sss|
|uuid|sss|sss|
|value|sss|sss|
|zip_code|sss|sss|

