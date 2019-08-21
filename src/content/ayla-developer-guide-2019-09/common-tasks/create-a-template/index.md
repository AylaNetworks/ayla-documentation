---
title: Create a template
layout: ayla-developer-guide-2019-09.html
i: block
---

1. Create and save a ```properties.csv``` file to your local file system. Include a header row, and one row for each property you want to include in your template. The example below includes three properties (cmd, log, and version):

    ```
  base_type,direction,name,scope
  string,input,cmd,oem
  string,output,log,oem
  string,output,version,oem
    ```

1. Browse to the [Ayla Developer Portal](/content/ayla-developer-portal), and click Design a Device.

1. Click Add, fill out the form, and click OK.

    <img src="new-template.png" width="700">

1. Search for your new template on the list, click to open, and click Properties.

1. Click Import, choose your ```properties.csv```, and click Import:

    <img src="new-template-properties.png" width="700">

1. Click the Version property, check Host SW Version, and click OK:

    <img src="host-sw-version.png" width="200">