---
title: Create a template
layout: ayla-datastream-service-2018-10.html
c: block
---

1. In Developer Portal, click <code>View My Devices > Templates</code>.
1. Click <code>Add</code>, and create a template with the following parameters:
<table>
<tr><th>Visibility:</th><td>oem</td></tr>
<tr><th>Name:</th><td>Freezer</td></tr>
<tr><th>Description:</th><td>Walk-in freezer</td></tr>
<tr><th>Registation Type:</th><td>Same-LAN</td></tr>
<tr><th>Model:</th><td>freezer-model</td></tr>
<tr><th>Product Name:</th><td>freezer-product</td></tr>
</table>
1. On the template list, find and click your new template.
1. Click <code>Properties</code>.
1. Click <code>Add</code>, and create a property with the following parameters:
<table>
<tr><th>Property Type:</th><td>TemplateProperty</td></tr>
<tr><th>Name:</th><td>max_temp</td></tr>
<tr><th>Display Name:</th><td>Max Temp</td></tr>
<tr><th>Base Type:</th><td>integer</td></tr>
<tr><th>Direction:</th><td>To Device</td></tr>
<tr><th>Scope:</th><td>oem</td></tr>
</table>
1. Click <code>Add</code>, and create another property with the following parameters:
<table>
<tr><th>Property Type:</th><td>TemplateProperty</td></tr>
<tr><th>Name:</th><td>too_warm</td></tr>
<tr><th>Display Name:</th><td>Too Warm</td></tr>
<tr><th>Base Type:</th><td>boolean</td></tr>
<tr><th>Direction:</th><td>From Device</td></tr>
<tr><th>Scope:</th><td>oem</td></tr>
</table>
