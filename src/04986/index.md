---
title: 04986
classesFromPage: has-pagebar
editIcon: none
---

# Platform Notes

### Certificates

See [these instructions](https://docs.bitnami.com/aws/how-to/generate-install-lets-encrypt-ssl/#step-5-renew-the-let-s-encrypt-certificate) to renew HTTPS certificates from [Let's Encrypt](https://letsencrypt.org/).

```
sudo /opt/bitnami/ctlscript.sh stop apache
sudo /opt/bitnami/letsencrypt/lego --tls --email="sarah@acme.com" --domains="docs.aylanetworks.com" --path="/opt/bitnami/letsencrypt" renew --days 90
sudo /opt/bitnami/ctlscript.sh start apache
```

### Broken links

See [Online Broken Link Checker](https://www.brokenlinkcheck.com/) to find broken links.

### Search

A document id and a document url must be generic. The index.html file at the location will redirect to the document with the current version. This is correct:

```
{
  "id" : "some-page-title",
  "type" : "add",
  "fields" : {
      "title" : "Ayla Development Kit",
      "url" : "https://docs.aylanetworks.com/some-page-title",
      "source_type" : "html",
      "summary" : "This is the summary.",
      "body" : ""
  }
}
```

This is not correct:

```
{
  "id" : "some-page-title-2019-06",
  "type" : "add",
  "fields" : {
      "title" : "Ayla Development Kit",
      "url" : "https://docs.aylanetworks.com/some-page-title-2019-06",
      "source_type" : "html",
      "summary" : "This is the summary.",
      "body" : ""
  }
}
```

### Bitnami Lightsail 404 Redirects

Create ```.htaccess``` with the following content in ```/opt/bitnami/apache2/htdocs```. 

```
ErrorDocument 404 https://docs.aylanetworks.com/
```

Restart Apache with ```sudo /opt/bitnami/ctlscript.sh restart apache```.

```.htaccess``` overrides all the Apache config files.

### Ayla Docs Server

Start the service:

<pre>
$ forever -o output.log -e error.log --minUptime 1000ms --spinSleepTime 1000ms start server.js
</pre>

View the service:

<pre>
$ forever list
info:    Forever processes running
data:        uid  command                                          script    forever pid   id logfile                         uptime     
data:    [0] WsJb /home/bitnami/.nvm/versions/node/v9.8.0/bin/node server.js 22736   22746    /home/bitnami/.forever/WsJb.log 0:0:0:8.52
</pre>

Tail the service log files with the forever utility:

<pre>
$ forever logs 0
data:    server.js:22746 - Running server
data:    server.js:22746 - login
data:    server.js:22746 - getDevices
data:    server.js:22746 - getDevice
data:    server.js:22746 - getProperties
data:    server.js:22746 - getProperty
</pre>

Tail the service log files with tail:

<pre>
$ tail -f output.log
Running server
login
getDevices
getDevice
getProperties
getProperty
</pre>

Stop the service:

<pre>
$ forever stop &lt;Id|Uid|Pid|Index|Script&gt;
</pre>

### ayla_cloud_api database

See [How to Back Up and Restore a MySQL Database](https://webcheatsheet.com/SQL/mysql_backup_restore.php).

<pre>
mysql -u root -s -N -p
</pre>

<pre>
mysqldump -u root -p adms_ayla > adms_ayla-`date '+%FT%T'`.sql
</pre>

[Google JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml)

# Content Notes

## Page Status

|Title|ID|Owner|Editable|Level|
|-|-|-|-|-|
|[**Getting Started**](https://docs.aylanetworks.com/)||Matt Hagen|<span style="color:red;">No</span>|<span style="color:blue;">002</span>|
|[**Edge Solutions**](/edge-solutions)||Matt Hagen|<span style="color:red;">No</span>|<span style="color:blue;">002</span>|
|[Ayla Host Library and Reference Application v2.1](https://docs.aylanetworks.com/edge-solutions/ayla-host-library-and-reference-application/v2-1/)||Matt Hagen|<span style="color:green;">Yes</span>|<span style="color:blue;">002</span>|
|[Ayla Embedded Agent](https://docs.aylanetworks.com/edge-solutions/ayla-embedded-agent/)||Matt Hagen|<span style="color:green;">Yes</span>|<span style="color:blue;">002</span>|
|[Ayla Development Kit v2.0](https://docs.aylanetworks.com/edge-solutions/ayla-development-kit/v2-0/)||Matt Hagen|<span style="color:red;">No</span>|<span style="color:blue;">002</span>|
|&nbsp;&nbsp;&nbsp;[<span style="color:gray;">Ayla ESP32 Solution v1.6</span>](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-6/)||Matt Hagen|&nbsp;|001|
|[Ayla ESP32 Solution v1.5.3](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-5-3/)||Matt Hagen|&nbsp;|001|
|&nbsp;&nbsp;&nbsp;[<span style="color:gray;">Ayla ESP32 Solution v1.5-beta</span>](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-5-beta/)||Matt Hagen|&nbsp;|001|
|&nbsp;&nbsp;&nbsp;[<span style="color:gray;">Ayla ESP32 Solution v1.3.10-beta</span>](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-3-10-beta/)||Matt Hagen|&nbsp;|001|
|&nbsp;&nbsp;&nbsp;[<span style="color:gray;">Ayla ESP32 Solution v1.3.9</span>](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-3-9/)||Matt Hagen|&nbsp;|001|
|&nbsp;&nbsp;&nbsp;[<span style="color:gray;">Ayla ESP32 Solution v1.3.8</span>](https://docs.aylanetworks.com/edge-solutions/ayla-esp32-solution/v1-3-8/)||Matt Hagen|&nbsp;|001|
|[Ayla Portable Solution v2.3.1-beta](https://docs.aylanetworks.com/edge-solutions/ayla-portable-solution/v2-3-1-beta/)||Matt Hagen|&nbsp;|001|
|[Ayla Linux Device Solution v1.7](https://docs.aylanetworks.com/edge-solutions/ayla-linux-device-solution/v1-7/)||Matt Hagen|&nbsp;|001|
|[Ayla Linux Gateway Solution v1.7](https://docs.aylanetworks.com/edge-solutions/ayla-linux-gateway-solution/v1-7/)||Matt Hagen|&nbsp;|001|
|[Ayla Module / MCU Interface](https://docs.aylanetworks.com/edge-solutions/ayla-module-mcu-interface/v2020-04/)||Matt Hagen|<span style="color:green;">Yes</span>|<span style="color:blue;">002</span>|
|[Ethernet for Murata Modules](https://docs.aylanetworks.com/edge-solutions/ethernet-for-murata-modules/)||Matt Hagen|&nbsp;|001|
|[Firmware, Pin Mappings, GATT](https://docs.aylanetworks.com/edge-solutions/firmware-pin-mappings-gatt/)||Matt Hagen|&nbsp;|001|
|[**Cloud Services**](https://docs.aylanetworks.com/cloud-services/)||Matt Hagen|&nbsp;|001|
|[API Browser](https://docs.aylanetworks.com/cloud-services/api-browser)||Matt Hagen|<span style="color:red;">No</span>|001|
|[API Users Guide](https://docs.aylanetworks.com/cloud-services/api-users-guide)||Matt Hagen|<span style="color:green;">Yes</span>|001|
|[API Workbench](https://docs.aylanetworks.com/cloud-services/api-workbench)||Matt Hagen|<span style="color:red;">No</span>|001|
|[**Mobile and Web Apps**](https://docs.aylanetworks.com/mobile-and-web-apps/)||Matt Hagen|&nbsp;|001|
|[**System Administration**](https://docs.aylanetworks.com/system-administration/)||Matt Hagen|&nbsp;|001|
|[Aura Mobile App](https://docs.aylanetworks.com/system-administration//aura-mobile-app/)||Matt Hagen|&nbsp;|001|
|[Ayla Dashboard Portal](https://docs.aylanetworks.com/system-administration/ayla-dashboard-portal/)||Matt Hagen|&nbsp;|001|
|[Ayla Developer Portal](https://docs.aylanetworks.com/system-administration/ayla-developer-portal/)||Matt Hagen|&nbsp;|001|
|[**Tech Notes**](https://docs.aylanetworks.com/tech-notes/)||Matt Hagen|&nbsp;|001|
|[How to write and publish a tech note](https://docs.aylanetworks.com/tech-notes/how-to-write-and-publish-a-tech-note/)||Matt Hagen|<span style="color:green;">Yes</span>|<span style="color:green;">003</span>|
|[**Archive**](https://docs.aylanetworks.com/archive/)||Matt Hagen|<span style="color:red;">No</span>|001|

* Level 002
    1. Set Editable state.
    1. Remove toc in source file.
* Level 003
    1. Modify markdown so that it renders acceptably in Github.

## Pseudonymization

|Key|Value|
|-|-|
|```access_token```|```1234567890abcdef1234567890abcdef```|
|```action_uuid```|```a1234567-1234-1234-1234-a1234567890a```|
|```app_id```|```abc-1A-id```|
|```app_secret```|```abc-a1b2c3d4e5f6a1b2c3d4e5f6XYZ```|
|```devId```|```12345678```|
|```DSN```|```AC000W123456789```|
|```email```|<code>sarah&commat;acme.com</code>|
|```mac```|```00:11:22:aa:bb:cc```|
|```oemId```|```1234abcd```|
|```refresh_token```|```1234512345abcabc1234512345abcabc```|
|```stream_key```|```ab12cd34ef56ab12cd34ef56ab12cd01```|
|```rule_uuid```|```c1234567-1234-1234-1234-a1234567890a```|
|```user_id```|```12345678```|
|```user_uuid```|```b1234567-1234-1234-1234-a1234567890a```|

# Procedure Notes
