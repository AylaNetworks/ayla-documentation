---
title: Introduction
layout: ayla-datastream-service.html
e: block
---

DSS Browser is a browser-based WebSocket application (HTML, CSS, JS, jQuery, Bootstrap) that listens for, and displays, DSS events. It is useful for rapid understanding and experimentation.

The directions on this page focus on the freezer scenario which involves datapoint events only. To explore all five event types, see [DSS Events](../../dss-events).

<ol>
<li>Open <a href="https://docs.aylanetworks.com/cloud/ayla-datastream-service/dss-browser/source/client.html" target="_blank">DSS Browser</a>.</li>
<li>For <code>Name the event stream</code>, enter <code>Freezer too_warm for DSS Browser</code>.</li>
<li>For <code>Enter a stream key</code>, enter the appropriate subscription stream key that you defined in your Dashboard Portal.</li>
<li>Click <code>Create</code>.</li>
<li>Notice the new event stream on the Event Stream list.</li>
<li>Notice the heartbeat counter (HBs) incrementing every 30 seconds or so.</li>
<li>Click the new event stream to reveal details. Click again to hide details.</li>
<li>In Developer Portal, change the value of the too_warm property several times.</li>
<li>In DSS Browser, notice the new events on the Events list.</li>
<li>Notice that the Event Stream event counter has incremented.</li>
<li>Click an event row to reveal the JSON composition of a DSS "datapoint" event.</li>
<li>Attempt to create another event stream with the same stream key. Close the message box.</li>
<li>Delete the event stream and the events.</li>
<li>Create another event stream using the same stream key, but enter "0" in the <code>First Seq ID</code> field. DSS resends all events associated with the stream key starting with seq == 0. Start again, but this time include both a <code>First Seq ID</code> and a <code>Last Seq ID</code>.</li>
</ol>