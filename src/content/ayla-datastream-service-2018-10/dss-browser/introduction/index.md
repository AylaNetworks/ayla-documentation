---
title: Introduction
layout: ayla-datastream-service-2018-10.html
e: block
---

DSS Browser is a browser-based WebSocket application (HTML, CSS, JS, jQuery, Bootstrap) that listens for, and displays, DSS events. It is useful for rapid understanding and experimentation.

The directions on this page focus on the freezer scenario which involves datapoint events only. To explore all five event types, see [DSS Events](../../events).

1. Run [DSS Browser](../source/client.html).
1. For <code>Name the event stream</code>, enter <code>Freezer too_warm for DSS Browser</code>.
1. For <code>Enter a stream key</code>, enter the appropriate subscription stream key that you defined in your Dashboard Portal.
1. Click <code>Create</code>.
1. Notice the new event stream on the Event Stream list.
1. Notice the heartbeat counter (HBs) incrementing every 30 seconds or so.
1. Click the new event stream to reveal details. Click again to hide details.
1. In Developer Portal, change the value of the too_warm property several times.
1. In DSS Browser, notice the new events on the Events list.
1. Notice that the Event Stream event counter has incremented.
1. Click an event row to reveal the JSON composition of a DSS "datapoint" event.
1. Attempt to create another event stream with the same stream key. Close the message box.
1. Delete the event stream and the events.
1. Create another event stream using the same stream key, but enter "0" in the <code>First Seq ID</code> field. DSS resends all events associated with the stream key starting with seq == 0. Start again, but this time include both a <code>First Seq ID</code> and a <code>Last Seq ID</code>.
