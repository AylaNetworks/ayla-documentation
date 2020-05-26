---
title: Migrating a template from development to field
layout: technote.html
author: Trinh Phan
creationDate: May 19, 2020
---

This tech note helps Ayla Network OEMs migrate templates from development services to field services.

1. Sign into the Ayla Dashboard of the destination (field) service, using an `OEM:Admin` user account.
    <div><img src="login.png" width="400" height="271"></div>
1. Click `OEM Migration` in the left column.
    <div><img src="oem-migrate.png" width="120" height="337"></div>
1. Select the service (e.g. `US Dev`) where the template currently resides, enter the credentials of your source admin account, and click `Start Migration`.
    <div><img src="select-src-env.png" width="300" height="348"></div>
1. Click `New Migration`.
    <div><img src="select-oem.png" width="600" height="236"></div>
1. Check `Templates`, and click `Continue`.
    <div><img src="select-object-types.png" width="300" height="209"></div>
1. Check the template you want to migrate, and select `Next Object Type`.
    <div><img src="next-object-type.png" width="300" height="357"></div>
1. Click `Validate`.
    <div><img src="validate.png" width="300" height="376"></div>
1. Enter the credentials of your destination admin account, and click `LOG IN`.
    <div><img src="log-into-src-env.png" width="300" height="186"></div>
1. Once Validation completes, select `GO TO MIGRATION`.
    <div><img src="validation-completed.png" width="300" height="380"></div>
1. Select `MIGRATE`.
    <div><img src="migrate.png" width="300" height="382"></div>
1. Enter the credentials of your destination admin account, and click `LOG IN`.
    <div><img src="log-into-dst-env.png" width="300" height="186"></div>
1. Once Migration completes, Select `DONE`.
    <div><img src="migration-completed.png" width="300" height="384"></div>
    The template should appear in the Ayla Dashboard of the field service with a new ID.
