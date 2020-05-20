---
title: Admin
---

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

### Pseudonymization

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

### Connections

* [Ayla Host Library and Reference Application](https://connection.aylanetworks.com/s/article/Ayla-Host-Library-and-Reference-Application)
* [Module Firmware Release Notes (AYOO6RFW3)](https://connection.aylanetworks.com/s/article/Module-Firmware-Release-Notes-AYOO6RFW0)
* [Azureware: AY001MWA CU300 Firmware Downloads](https://connection.aylanetworks.com/s/article/Azureware-AY001MWA-CU300-Firmware-Downloads)
* [USI: AY001MUX BM30 Firmware Downloads](https://connection.aylanetworks.com/s/article/USI-AY001MUX-BM30-Firmware-Downloads)
* [USI: AY001MUV BM14 Firmware Downloads](https://connection.aylanetworks.com/s/article/USI-AY001MUV-BM14-Firmware-Downloads)
* [USI: AY001MUS BM09 Firmware Downloads](https://connection.aylanetworks.com/s/article/USI-AY001MUS-BM09-Firmware-Downloads)
* [USI: AY001MUP BM22 Firmware Downloads](https://connection.aylanetworks.com/s/article/USI-AY001MUP-BM22-Firmware-Downloads)
* [Murata: Module AY001MTV Type1VD Firmware Downloads](https://connection.aylanetworks.com/s/article/Murata-Module-AY001MTV-Type1VD-Firmware-Downloads)
* [Murata: Module AY001MTM Type ABR Firmware Downloads](https://connection.aylanetworks.com/s/article/2417817)
* [Murata: Module AY001MTL Type 1LD Firmware Downloads](https://connection.aylanetworks.com/s/article/Murata-Module-AY001MTL-Type-1LD-Firmware-Downloads)
* [Murata: Module AY001MTC Type YD Firmware Downloads](https://connection.aylanetworks.com/s/article/Murata-Module-AY001MTC-Type-YD-Firmware-Downloads)
* [ArticlesInventek: AY001MIV ISM43362 Firmware Downloads](https://connection.aylanetworks.com/s/article/Inventek-AY001MIV-ISM43362-Firmware-Downloads)
* [Ampak: Module AY001MAB Firmware Downloads](https://connection.aylanetworks.com/s/article/AY001MAB-Firmware-Downloads)
