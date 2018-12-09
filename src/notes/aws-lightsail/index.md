---
title: AWS Lightsail
layout: notes.html
---

## AWS

* [AWS Lightsail Homepage](https://lightsail.aws.amazon.com/ls/webapp/home/instances)
* [Node JS on Apache Bitnami LAMP Stack](https://www.fperkins.com/uncategorized/nodejs-lamp-apache-bitnami-stack.php)

### Secure Shell (SSH)

<pre>$ ssh -i LightsailDefaultPrivateKey-us-east-1.pem bitnami@18.215.96.8</pre>

### Secure Copy (SCP)

<pre>$ scp -i LightsailDefaultPrivateKey-us-east-1.pem  ~/GitHub/ayla-core-content/build/Archive.zip bitnami@18.215.96.8:htdocs</pre>

### Secure Socket Layer (SSL)

Get new certs every three months. Your account credentials have been saved in your Let's Encrypt configuration directory at /etc/lego/accounts/acme-v02.api.letsencrypt.org/name@acme.com. You should make a secure backup  of this folder now. This configuration directory will also contain certificates and private keys obtained from Let's Encrypt so making regular backups of this folder is ideal.

## Bitnami

* [Start Or Stop Services](https://docs.bitnami.com/aws/faq/administration/control-services/)
* [Connect To PhpMyAdmin](https://docs.bitnami.com/aws/faq/administration/access-phpmyadmin/)
* [Generate And Install A Let's Encrypt SSL Certificate For A Bitnami Application](https://docs.bitnami.com/aws/how-to/generate-install-lets-encrypt-ssl/)
* [Stop Cache Completely](https://community.bitnami.com/t/stop-cache-completely/24819)

## PhpMyAdmin

<ol>
<li>Run this in a terminal:
<pre>ssh -i LightsailDefaultPrivateKey-us-east-1.pem -N -L 8888:127.0.0.1:80 bitnami@18.215.96.8</pre>
</li>
<li>Browse to <a href="http://127.0.0.1:8888/phpmyadmin">http://127.0.0.1:8888/phpmyadmin</a>.</li>
</ol>
</div>
