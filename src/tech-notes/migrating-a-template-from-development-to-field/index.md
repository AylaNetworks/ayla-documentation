---
title: Migrating a template from development to field
layout: site.html
---

<span style="font-size:90%;">By Trinh Phan on May 19, 2020</span>

This tech note helps Ayla Network OEMs migrate templates from development services to field services.

1. Sign into the Ayla Dashboard of the destination (field) service, using an `OEM:Admin` user account.
<img src="login.png" width="400" height="271">
1. Click `OEM Migration` in the left column.
<img src="oem-migrate.png" width="120" height="337">
1. Select the service (e.g. `US Dev`) where the template currently resides, enter the credentials of your source admin account, and click `Start Migration`.
<img src="select-src-env.png" width="300" height="348">
1. Click `New Migration`.
<img src="select-oem.png" width="600" height="236">
1. Check `Templates`, and click `Continue`.
<img src="select-object-types.png" width="300" height="209">
1. Check the template you want to migrate, and select `Next Object Type`.
<img src="next-object-type.png" width="300" height="357">
1. Click `Validate`.
<img src="validate.png" width="300" height="376">
1. Enter the credentials of your destination admin account, and click `LOG IN`.
<img src="log-into-src-env.png" width="300" height="186">
1. Once Validation completes, select `GO TO MIGRATION`.
<img src="validation-completed.png" width="300" height="380">
1. Select `MIGRATE`.
<img src="migrate.png" width="300" height="382">
1. Enter the credentials of your destination admin account, and click `LOG IN`.
<img src="log-into-dst-env.png" width="300" height="186">
1. Once Migration completes, Select `DONE`.
<img src="migration-completed.png" width="300" height="384">
    The template should appear in the Ayla Dashboard of the field service with a new ID.
