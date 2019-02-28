---
title: Shell
layout: notes.html
b: block
---

To find your current shell, run <code>echo "$SHELL"</code> or <code>ps -p $$</code>.

<pre>
$ echo "$SHELL"
/bin/bash
</pre>

To find all installed shells:

<pre>
$ cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
</pre>
