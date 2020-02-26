---
title: API Reference
layout: site.html
a: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">API Reference</a></li>
    <li><a href="#query-parameters">Query Parameters</a></li>
    <li><a href="#device-service">Device Service</a>
      <ul>
        <li><a href="#device">Device</a></li>
        <li><a href="#property">Property</a></li>
      </ul>
    </li>
  </ul>
</aside>

# Query Parameters

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

# Device Service

## Device

|Name|Type|Description|
|-|-|-|
|activated_at|sss|2019-03-05T17:46:47Z|
|address|sss|null|
|ans_enabled|sss|TRUE|
|ans_server|sss|ans.aylanetworks.com|
|connected_at|sss|2019-12-23T21:54:31Z|
|connection_status|sss|Online|
|created_at|sss|2019-03-05T17:46:46Z|
|device_type|sss|Wifi|
|dsn|sss|AC000W000000001|
|enable_ssl|sss|null|
|has_properties|sss|TRUE|
|homekit|sss|null|
|id|sss|1234567|
|imei|sss|null|
|ip|sss|22.255.200.55|
|key|sss|1234567|
|lan_enabled|sss|FALSE|
|lan_ip|sss|192.168.1.10|
|last_get_at|sss|2019-12-23T21:54:31Z|
|lat|sss|48.8566|
|lng|sss|2.3522|
|locality|sss|75000|
|log_enabled|sss|FALSE|
|mac|sss|001122aabbcc|
|model|sss|AY008ESP1|
|module_updated_at|sss|2019-12-23T21:48:16Z|
|oem|sss|1234abcd|
|oem_model|sss|ledevb|
|product_class|sss|null|
|product_name|sss|Device 1|
|provisional|sss|FALSE|
|registered|sss|TRUE|
|registrable|sss|TRUE|
|registration_type|sss|Dsn|
|regtoken|sss|null|
|setup_token|sss|null|
|ssid|sss|Paris_WiFi|
|sw_version|sss|1.5|
|template_id|sss|100000|
|unique_hardware_id|sss|null|
|user_id|sss|12345678|
|user_uuid|sss|b1234567-1234-1234-1234-a1234567890a|

## Property

|Name|Type|Description|
|-|-|-|
|ack_enabled|sss|null|
|app_type|sss|null|
|base_type|sss|boolean|
|data_updated_at|sss|2020-01-06T21:08:02Z|
|denied_roles|sss|[]|
|derived|sss|FALSE|
|device_key|sss|5326808|
|direction|sss|input|
|display_name|sss|Green_LED|
|host_sw_version|sss|FALSE|
|key|sss|18846531|
|name|sss|Green_LED|
|product_name|sss|Device 1|
|read_only|sss|FALSE|
|recipe|sss|null|
|retention_days|sss|30|
|scope|sss|user|
|time_series|sss|FALSE|
|track_only_changes|sss|FALSE|
|type|sss|Property|
|value|sss|1|