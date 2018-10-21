---
title: Persist to database
layout: cloud-ayla-datastream-service.html
d: block
---

<pre>
DROP TABLE IF EXISTS events;
CREATE TABLE events(
id int NOT NULL AUTO_INCREMENT,
event_type varchar(32),
oem_id varchar(32),
oem_model varchar(32),
dsn varchar(32),
time varchar(32),
user_uuid varchar(64),
PRIMARY KEY (id)
);

INSERT INTO events (event_type, oem_id, oem_model, dsn, time, user_uuid)
VALUES (
'connectivity',
'0dfc7900',
'ledevb',
'AC000W000340649',
'2018-09-24T10:26:37Z',
'40e45b84-690c-11e8-acf3-12f911dcfe40'
);
</pre>