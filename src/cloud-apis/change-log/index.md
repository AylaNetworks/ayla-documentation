---
title: Change Log
layout: site.html
e: block
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li><a href="#core-title">Change Log</a></li>
    <li><a href="#2019-12-14">2019-12-14</a></li>
    <li><a href="#2019-09-16">2019-09-16</a></li>
  </ul>
</aside>

This page lists changes to Ayla Cloud APIs under the effective dates.

### Key
|||Meaning|
|-|-|-|
|<span class="future">&plus;</span>||New API|
||<span class="past">&#x21d0;</span>|Use the new API above instead of this one.|
|<span class="past">&minus;</span>||Deprecated API|
||<span class="future">&#x21d2;</span>|Use this API instead of the deprecated one above.|
|<span class="different">&rlarr;</span>||Modified API|

### 2019-12-14
|||Method|Resource|
|-|-|-|-|
|<span class="past">&minus;</span>||```GET```|```/apiv1/properties/:id/triggers/all(.:format)```|
||<span class="future">&#x21d2;</span>|```GET```|```/apiv1/dsns/{dsn}/properties/{property_name}/triggers/all(.:format)```|
|<span class="past">&minus;</span>||```GET```|```/apiv1/properties/:property_id/datapoints(.:format)```|
||<span class="future">&#x21d2;</span>|```GET```|```/apiv1/dsns/{dsn}/properties/{property_name}/datapoints.(:format)```|
|<span class="past">&minus;</span>||```POST```|```/apiv1/properties/:property_id/datapoints(.:format)```|
||<span class="future">&#x21d2;</span>|```POST```|```/apiv1/dsns/{dsn}/properties/{property_name}/datapoints(.:format)```|
|<span class="past">&minus;</span>||```GET```|```/apiv1/properties/:property_id/triggers(.:format)```|
||<span class="future">&#x21d2;</span>|```GET```|```/apiv1/dsns/{dsn}/properties/{property_name}/triggers```|
|<span class="past">&minus;</span>||```POST```|```/apiv1/properties/:property_id/triggers(.:format)```|
||<span class="future">&#x21d2;</span>|```POST```|```/apiv1/dsns/{dsns}/properties/{property_name}/triggers(.:format)```|
|<span class="past">&minus;</span>||```GET```|```/apiv1/properties/:property_id/datapoints/time_range_filter(.:format)```|
||<span class="future">&#x21d2;</span>|```GET```|```/apiv1/dsns/{dsn}/properties/{property_name}/datapoints/time_range_filter.(:format)```|
|<span class="past">&minus;</span>||```GET```|```/apiv1/properties/:id(.:format)```|
||<span class="future">&#x21d2;</span>|```GET```|```/apiv1/dsns/:dsn/properties/:property_name(.:format)```|
|<span class="past">&minus;</span>||```POST```|```/apiv1/devices/:device_id/properties/:property_id/datapoints(.:format)```|
||<span class="future">&#x21d2;</span>|```POST```|```/apiv1/devices/:device_id/properties/:property_name/datapoints(.:format)```|
|<span class="past">&minus;</span>||```GET```|```/apiv1/devices/:device_id/properties/:property_id(.:format)```|
||<span class="future">&#x21d2;</span>|```GET```|```/apiv1/dsns/:dsn/properties/:property_name(.:format)```|
|<span class="past">&minus;</span>||```DELETE```|```/apiv1/properties/:id(.:format)```|
|<span class="past">&minus;</span>||```GET```|```/apiv1/properties/:id(.:format)```|
|<span class="past">&minus;</span>||```POST```|```/apiv1/devices/:device_id/properties(.:format)```|
|<span class="past">&minus;</span>||```POST```|```/apiv1/properties(.:format)```|
|<span class="past">&minus;</span>||```PUT```|```/apiv1/properties/:id(.:format)```|
|<span class="past">&minus;</span>||```PUT```|```/apiv1/properties/:id/publish(.:format)```|
|<span class="past">&minus;</span>||```GET```|```/apiv1/properties/:property_id/datapoints/time_range_filter(.:format)```|

### 2019-09-16

|||Method|Resource|*|
|-|-|-|-|-|
|<span class="past">&minus;</span>||```POST```|```/properties/:property_id/datapoints(.:format)```||
||<span class="future">&#x21d2;</span>|```POST```|```/dsns/:dsn/properties/:property_name/datapoints(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/properties/:property_id/datapoints(.:format)```||
||<span class="future">&#x21d2;</span>|```POST```|```/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/datapoints(.:format)```||
||<span class="future">&#x21d2;</span>|```GET```|```/devices/:device_id/properties/:property_id(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/dsns/:dsn/properties/:property_name/datapoints(.:format)```||
||<span class="future">&#x21d2;</span>|```POST```|```/dsns/:dsn/properties/:property_name(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_name/datapoints(.:format)```||
||<span class="future">&#x21d2;</span>|```GET```|```/dsns/:dsn/properties/:property_name(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/datapoints(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/devices/:device_id/properties/:property_id/datapoints(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/datapoints/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/datapoints/:id/edit(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/datapoints/:id(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/devices/:device_id/properties/:property_id/datapoints/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/devices/:device_id/properties/:property_id/datapoints/:id(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/triggers(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/devices/:device_id/properties/:property_id/triggers(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/triggers/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/triggers/:id/edit(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:property_id/triggers/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/devices/:device_id/properties/:property_id/triggers/:id(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/devices/:device_id/properties/:property_id/triggers/:id(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/devices/:device_id/properties(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:id/edit(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/devices/:device_id/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/devices/:device_id/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/devices/:device_id/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/devices/:device_id/properties(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/properties/:id/edit(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/properties/:property_id/datapoints(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/properties/:property_id/datapoints(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/properties/:property_id/datapoints/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/properties/:property_id/triggers(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/properties/:property_id/triggers(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/properties/:property_id/triggers/new(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/properties(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/properties/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:property_id/datapoints(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/dev/v1/devices/:device_id/properties/:property_id/datapoints(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:property_id/datapoints/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:property_id/datapoints/:id/edit(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:property_id/datapoints/:id(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/dev/v1/devices/:device_id/properties/:property_id/datapoints/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/dev/v1/devices/:device_id/properties/:property_id/datapoints/:id(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:property_id/triggers(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/dev/v1/devices/:device_id/properties/:property_id/triggers(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:property_id/triggers/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:property_id/triggers/:id/edit(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:property_id/triggers/:id(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/dev/v1/devices/:device_id/properties/:property_id/triggers/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/dev/v1/devices/:device_id/properties/:property_id/triggers/:id(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:id/edit(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/dev/v1/devices/:device_id/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/dev/v1/devices/:device_id/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/dev/v1/devices/:device_id/properties(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/devices/:device_id/properties/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/properties/:id/edit(.:format)```||
|<span class="past">&minus;</span>||```PUT```|```/dev/v1/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```DELETE```|```/dev/v1/properties/:id(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/properties/:property_id/datapoints(.:format)```||
|<span class="past">&minus;</span>||```POST```|```/dev/v1/properties/:property_id/datapoints(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/properties/:property_id/datapoints/new(.:format)```||
|<span class="past">&minus;</span>||```GET```|```/dev/v1/properties/:property_id/triggers(.:format)```||
|<span class="different">&rlarr;</span>||```POST```|```/users```|<small>1</small>|
|<span class="different">&rlarr;</span>||```POST```|```/users/password```|<small>1</small>|
|<span class="different">&rlarr;</span>||```POST```|```/users/confirmation```|<small>1</small>|
|<span class="different">&rlarr;</span>||```POST```|```/users/shares```|<small>1</small>|

1. These four APIs cause emails to be sent to a user who creates an account, changes a password, needs to confirm account information, or participates in device sharing. These APIs no longer support the ```email_subject``` parameter for the subject line of the email, nor the ```email_body_html``` parameter for any customized text embedded in the body of the email. 