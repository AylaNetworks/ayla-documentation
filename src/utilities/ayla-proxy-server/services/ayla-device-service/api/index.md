---
title: Ayla Device Service ~ Javascript API
layout: ayla-device-service.html
---

### DeviceGroup
* name
* **devices**

### Device
* name
* registration
  * type
  * status (boolean)
  * token
* dsn
* model
* agent
  * swVersion
* host
  * swVersion
* isLogging
* oem
* oemModel
* macAddress
* connectedDateTime
* lan
  * ipAddress
  * type
  * autoSync (boolean)
  * keepAlive
  * lifetime
* timezone
* template
* location
  * latitude
  * longitude
  * locality
* **properties**
* **schedules**

### Property
* name
* displayName
* type
* isTimeSeries
* isAckEnabled
* value
* direction
* scope
* trackChangesOnly
* retentionPolicy
* **triggers**
* **deniedRoles**
* **datapoints**

### Schedule

### Trigger
* name
* type
* operator
* compareValue
* **applications**

### TriggerApplication
* name
* type
* isActive

### DeniedRole
* name
* operation

### Datapoint
* detectedDateTime
* fetchedDateTime
* value
* metadata
* wasEchoed
* acknowledgement
  * dateTime
  * status
  * message