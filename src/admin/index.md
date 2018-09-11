---
title: Admin
---

[Style Guide](style-guide)

<pre>
DROP TABLE IF EXISTS Feedback;
CREATE TABLE Feedback(
  feedbackId int NOT NULL AUTO_INCREMENT, 
  firstName varchar(64),
  lastName varchar(64),
  email varchar(128),
  company varchar(64),
  page varchar(128),
  description varchar(512),
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