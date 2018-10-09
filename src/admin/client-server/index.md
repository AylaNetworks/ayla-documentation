---
title: Client-Server
layout: page-full-width.html
---

### Client (JS)
<pre>
sss
</pre>

### Server (PHP)
<pre>
// Create and return JSON.
$d = array();
$d['id'] = '234';
$d['name'] = 'Sarah';
echo json_encode($d);

// Get POST data and return it.
echo json_encode(file_get_contents('php://input'));
</pre>