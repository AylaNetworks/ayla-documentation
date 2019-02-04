---
title: Simple code in lists
layout: authoring-guide.html
b: block
---

For code without indentation and empty lines, use markdown list notation (e.g. <code>1. </code>) with HTML <code>&lt;pre&gt;</code> tags:

<pre>
1. Create a project directory:
&lt;pre&gt;$ mkdir dss-collector&lt;/pre&gt;
1. Change to the new directory:
&lt;pre&gt;$ cd dss-collector&lt;/pre&gt;
1. Initialize the project:
&lt;pre&gt;
$ npm init -y
More lines here are fine.
Like this one.
And this one.
&lt;/pre&gt;
</pre>

Here is the rendered list:

1. Create a project directory:
<pre>$ mkdir dss-collector</pre>
1. Change to the new directory:
<pre>$ cd dss-collector</pre>
1. Initialize the project:
<pre>
$ npm init -y
More lines here are fine.
Like this one.
And this one.
</pre>
