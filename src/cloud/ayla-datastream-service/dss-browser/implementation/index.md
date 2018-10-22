---
title: Implementation
layout: cloud-ayla-datastream-service.html
e: block
---

<a href="../source/client.html" target="_blank">DSS Browser</a> consists of three files:

* client.html
* client.css
* client.js

To view the files, open DSS Browser in a new tab, and view the source. In Chrome, for example, click <code>View > Developer > View Source</code>.

DSS Browser is a fairly self-explanatory single-page app built with jQuery and Bootstrap. 

Here are a few key points:

<ol>
<li>The app supports multiple event streams.</li>
<li>It implements each event stream as an instance of a Stream class.</li>
<li>It stores each instance in a "dictionary" object using the stream key as the key.</li>
<li>It responds to Ayla DSS heartbeat messages.</li>
<li>It uses a JSON.stringify filter to limit display fields.</li>
</ol>
