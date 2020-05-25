---
title: New Template Architecture
---

<span style="font-size:90%;">By Yew Yin Ng on February 4, 2020</span>

With the new Ayla template architecture rollout, any changes made to a specific template will automatically be reflected on the devices linked to that template without requiring a template re-association. To ensure template version compatibility, the following functionality will no longer be available on the Ayla Dashboard and Developer Portal:

1. The ability to create/edit/delete properties within a single device
1. The ability to make changes to committed OEM-level templates

We recommend that developers treat Private templates as active templates for development/experimentation, and OEM templates as committed templates. Once developers are comfortable with a certain version of a private template, the private template should be committed by promoting it to an OEM template to lock down the version.
 

Here's the new flow for creating/editing templates:

1. Create a new Private template, or clone an existing Private or OEM template into a new Private template.
1. Make the desired changes to the Private template
1. Associate the Private template with the target development device(s). Once associated, any subsequent changes to the Private template (or its properties) will reflect automatically on the devices linked to that template. No re-association is necessary.
1. Once the Private template changes have been finalized and it’s ready to be promoted to an OEM template, clone the Private template to an OEM template. Ensure that the new OEM template has a unique oem host version before committing. Having more than one OEM template with the same oem model and oem host version may result in version conflicts. All new devices connecting to the Ayla Service with the matching oem host version and oem model will automatically be associated with the corresponding OEM template.

Repeat the steps for any subsequent updates required on the OEM template.