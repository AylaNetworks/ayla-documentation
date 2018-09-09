---
title: Modify the output Property
layout: devices-ayla-linux-agent.html
b: block
---

This page shows you how to modify the output property. 

To verify that you are able to customize, build, and run your own version of appd, you will modify the behavior of appd slightly, and then stop the current version of the app daemon, run your new version, and verify the new behavior. Recall from [Guide: Tests](/devices/ayla-linux-agent/guide/tests/) that appd includes two integer properties called input and output, and that when you set input to a value, appd sets output to the square of the value.

<div class="row align-items-center">
<div class="col-lg-4 col-md-6 col-sm-12">
<img class="img-fluid" src="../../guide/tests/aura-016.jpg">
</div>
</div>

The code for setting output to input<sup>2</sup> resides in <code>~/device_linux_public/app/appd/appd.c</code>:

<pre>
static int appd_input_set(struct prop *prop, const void *val, size_t len, const struct op_args *args) {
  ...
  output = input * input;
  ...
}
</pre>

Rather than setting output to input<sup>2</sup>, your version of appd will set output to input + input. Here are the steps:

<ol>
<li>Open appd.c for editing:
<pre>
$ nano ~/device_linux_public/app/appd/appd.c
</pre>
</li>
<li>Search for <code>output = input * input;</code>.</li>
<li>Change to <code>output = input + input;</code>, and save the file. Note that you can always find a copy of the original appd files on Github.</li>
<li>Build your new version of appd:
<pre>
$ cd device_linux_public/
$ make
</pre>
Output should look similar to this:
<pre>
make -s -C lib/ayla all
make -s -C lib/platform all
make -s -C lib/app all
make -s -C daemon/devd all
make -s -C daemon/cond all
make -s -C daemon/logd all
make -s -C util/acgi all
make -s -C util/acli all
make -s -C util/devdwatch all
make -s -C util/gw_setup_agent all
make -s -C util/ota all
make -s -C app/appd all
CC appd.c
Linking appd
</pre>
<li>Make and run the host app.</li>
<li>In Aura, set the input property to 4. appd should set the output value to 8:
<div class="row align-items-center">
<div class="col-lg-4 col-md-6 col-sm-12">
<img class="img-fluid" src="aura-024.jpg">
</div>
</div>
This new behavior verifies that your version of appd is running.
</li>
</ol>

