---
title: Database
layout: page-full-width.html
---

# ayla_documentation

### feedback

<pre>
DROP TABLE IF EXISTS feedback;
CREATE TABLE feedback(
  feedbackId int NOT NULL AUTO_INCREMENT, 
  firstName varchar(64),
  lastName varchar(64),
  email varchar(128),
  company varchar(64),
  page varchar(128),
  description varchar(4096),
  PRIMARY KEY (feedbackId)
);
</pre>

<pre>
INSERT INTO feedback (firstName, lastName, email, company, page, description) 
  VALUES (
    'John', 
    'Doe', 
    'jd@acme.com',
    'Acme', 
    '/devices/ayla-linux-agent/guide/introduction/', 
    'This is a description.'
  );
</pre>

# dss

### connectivity

### datapoint

<pre>
DROP TABLE IF EXISTS datapoint;
CREATE TABLE datapoint(
  datapointId varchar(64) NOT NULL,
  userId varchar(64) NOT NULL,
  creationDate varchar(24),
  dsn varchar(32),
  propertyName varchar(128),
  propertyType varchar(16),
  propertyValue varchar(32),
  PRIMARY KEY (datapointId)
);
</pre>

<pre>
INSERT INTO datapoint (datapointId, userId, creationDate, dsn, propertyName, propertyType, propertyValue) 
  VALUES (
    '4f5cf43e-c3d7-11e8-414c-b46c1c9fa3f0', 
    '40e45b84-690c-11e8-acf3-12f911dcfe40', 
    '2018-09-29T11:03:35Z',
    'AC000W000340779', 
    'log', 
    'string',
    'Lorem ipsum dolor sit amet'
  );
</pre>

### datapointack

### location

### registration
