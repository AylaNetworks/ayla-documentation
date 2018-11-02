---
title: Implementation
layout: ayla-datastream-service.html
e: block
---

DSS Browser consists of three files:

* client.html
* client.css
* client.js

To view the files, open <a href="https://docs.aylanetworks.com/cloud/ayla-datastream-service/dss-browser/source/client.html" target="_blank">DSS Browser</a> in a new tab, and view the source. In Chrome, for example, click <code>View > Developer > View Source</code>. Then, click on the links for client.css and/or client.js.

DSS Browser is a fairly self-explanatory single-page app built with jQuery and Bootstrap. You can deploy your own instance by copying the three files, saving them to disk, and opening client.html with a browser. 

Here are a few key points:

<ol>
<li>The app supports multiple event streams.</li>
<li>It implements each event stream as an instance of a Stream class.</li>
<li>It stores each instance in a "dictionary" object using the stream key as the key.</li>
<li>It responds to Ayla DSS heartbeat messages.</li>
<li>It uses a JSON.stringify filter to limit display fields.</li>
</ol>

