---
title: Linux Agent
layout: ayla-edge-solutions-2019-02.html
c: block
---

The Ayla Linux Agent (devd) securely connects a Linux-based host application (appd) to the Ayla Cloud. 

<div class="related-content">
<div class="title">Related guides and references</div>
<ul>
<li><a href="/content/ayla-linux-agent">Ayla Linux Agent</a></li>
</ul>
</div>

Both devd and appd (can) run as daemons:

<a href="ayla-linux-agent.png"><img src="ayla-linux-agent.png" width="320"></a>

In the diagram, <code>appd</code> is the sample host application (supplied by Ayla) running on Raspian. Programmers can modify <code>appd</code> to control peripherals represented by the LED and buttons on the breadboard. They can also create, in the Ayla Cloud, a digital twin representing the LED and the buttons as properties. Then, by interfacing with <code>devd</code> via sockets, <code>appd</code> keeps the digital twin and the peripherals in sync, sending and receiving property updates.
