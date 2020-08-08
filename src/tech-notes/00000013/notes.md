---
title: Ayla Rule Engine (ARE)
layout: technote.html
author: Matt Hagen
creationDate: August 4, 2020
lastModifiedDate: August 4, 2020
classesFromPage: has-pagebar
---

<aside id="pagebar" class="d-xl-block collapse">
  <ul>
    <li>
      <a href="#core-title">Ayla Rule Engine (ARE)</a>
    </li>
    <li>
      <a href="#rules">Rules</a>
    </li>
    <li>
      <a href="#actions">Actions</a>
      <ul>
        <li><a href="#datapoint-actions">Datapoint actions</a></li>
        <li><a href="#url-actions">Url actions</a></li>
      </ul>
    </li>
    <li>
      <a href="#permissions">Permissions</a>
    </li>
    <li>
      <a href="#expressions">Expressions</a>
    </li>
    <li>
      <a href="#errors">Errors</a>
    </li>
    <li>
      <a href="#notes">Notes</a>
    </li>
    <li>
      <a href="#tutorials">Tutorials</a>
    </li>
  </ul>
</aside>

<span style="color:red;">UNDER CONSTRUCTION</span>

# Rules

Action type plays a special role in the life cycle of so called "abstract rules", a.k.a. "OEM level rules" (e.g. diagnostic rules, OTA rules, etc.) - it defines one or multiple predefined operations performed at a time of the rule firing.
Example of predefined operations:

* updated device diagnostic state - for a diagnostic rule.
* check eligibility of a device for an OTA - for an OTA rule.

Rules can be abstract (OEM-level) or concrete.

# Actions

An action defines a task to be performed by ARE. Examples include the following:

* Set property `Blue_LED` to `true` for `Device A`.

Action types include the following:

|Action Type|Description|
|-|-|
|`AMS_APNS`|Send APNS request via AMS.|
|`AMS_EMAIL`|Send email via AMS.|
|`AMS_FCM`|Send FMS request via AMS.|
|`AMS_KAFKA`|Send Kafka message via AMS.|
|`AMS_PUSH`|Send push request via AMS.|
|`AMS_SMS`|Send SMS via AMS.|
|`DATAPOINT`|Create a datapoint.|
|`DATASTREAM`|Stream events to Amazon Kinesis destination.|
|`DATASTREAM_EVENTHUB`|Stream events to Microsoft Event Hub Destination.|
|`DIAGNOSTIC`|Set a diagnostic state.|
|`EMAIL`|Send an email.|
|`SMS`|Send a SMS.|
|`URL`|Call a url.|

When specified in a request data object, an action type is case-insensitive, so the following are equivalent:

```
{"action": {"name": "...", "type": "DATAPOINT", "parameters": {"..."}}}
{"action": {"name": "...", "type": "datapoint", "parameters": {"..."}}}
```

Actions can be abstract or concrete.

## Datapoint actions

### Example 1: Boolean

<div style="color:gray;font-weight:bold;font-size:92%;">Request</div>

```
{
  "action": {
    "name": "DP 709 Blue_LED true",
    "type": "DATAPOINT",
    "parameters": {
      "datapoint": "DATAPOINT(AC000W006512709,Blue_LED) = 1"
    }
  }
}
```

<div style="color:gray;font-weight:bold;font-size:92%;">Response</div>

```
{
  "action": {
    "action_uuid": "5612e420-d639-11ea-a0be-0d06588da888",
    "name": "DP 709 Blue_LED",
    "user_uuid": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "type": "DATAPOINT",
    "is_abstract": false,
    "parameters": {
      "datapoint": "DATAPOINT(AC000W006512709,Blue_LED) = 1"
    },
    "rule_ids": [],
    "created_at": "2020-08-04T10:00:33.469Z",
    "updated_at": "2020-08-04T10:00:33.469Z",
    "created_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "updated_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "oem": "0bbb112e"
  }
}
```

### Example 2: String

<div style="color:gray;font-weight:bold;font-size:92%;">Request</div>

```
{
  "action": {
    "name": "DP 709 cmd on",
    "type": "DATAPOINT",
    "parameters": {
      "datapoint": "DATAPOINT(AC000W006512709,cmd) = 'on'"
    }
  }
}
```

<div style="color:gray;font-weight:bold;font-size:92%;">Response</div>

```
{
  "action_uuid": "4a556f00-d642-11ea-af7e-a78c3ef711b5",
  "name": "DP 709 cmd on",
  "user_uuid": "bc99cace-9b83-11ea-a601-0a580ae9531e",
  "type": "DATAPOINT",
  "is_abstract": false,
  "parameters": {
    "datapoint": "DATAPOINT(AC000W006512709,cmd) = 'on'"
  },
  "rule_ids": [],
  "created_at": "2020-08-04T11:04:39.350Z",
  "updated_at": "2020-08-04T11:04:39.350Z",
  "created_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
  "updated_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
  "oem": "0bbb112e"
}
```

## Url actions

<span style="color:red;">Always GET requests?</span>

### Example 1: No authentication

<div style="color:gray;font-weight:bold;font-size:92%;">Request</div>

```
{
  "action": {
    "name": "URL 001",
    "type": "URL",
    "parameters": {
      "body": "URL 001",
      "endpoint": "https://webhooks/001"
    }
  }
}
```

<div style="color:gray;font-weight:bold;font-size:92%;">Response</div>

```
{
  "action": {
    "action_uuid": "f3c17601-d63e-11ea-a0be-0d06588da888",
    "name": "URL 001",
    "user_uuid": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "type": "URL",
    "is_abstract": false,
    "parameters": {
      "endpoint": "https://webhooks/001",
      "body": "URL 001"
    },
    "rule_ids": [],
    "created_at": "2020-08-04T10:40:45.414Z",
    "updated_at": "2020-08-04T10:40:45.414Z",
    "created_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "updated_by": "bc99cace-9b83-11ea-a601-0a580ae9531e"
  }
}
```

### Example 2: Basic authentication

<span style="color:red;">Parameters accepts any key:value pair. What are the meaningful possibilities? Can the user specify username, password, authentication scheme, etc.? What are the other schemes?</span>

<div style="color:gray;font-weight:bold;font-size:92%;">Request</div>

```
{
  "action": {
    "name": "URL 002",
    "type": "URL",
    "parameters": {
      "body": "URL 002",
      "endpoint": "https://webhooks/002",
      "scheme": "basic",
      "username": "sarah",
      "password": "Pwd123456!"
    }
  }
}
```

<div style="color:gray;font-weight:bold;font-size:92%;">Response</div>

```
{
  "action": {
    "action_uuid": "ee3358b1-d658-11ea-af7e-a78c3ef711b5",
    "name": "URL 002",
    "user_uuid": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "type": "URL",
    "is_abstract": false,
    "parameters": {
      "password": "Pwd123456!",
      "endpoint": "https://webhooks/002",
      "scheme": "basic",
      "body": "URL 002",
      "username": "sarah"
    },
    "rule_ids": [],
    "created_at": "2020-08-04T13:46:43.015Z",
    "updated_at": "2020-08-04T13:46:43.015Z",
    "created_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "updated_by": "bc99cace-9b83-11ea-a601-0a580ae9531e"
  }
}
```

# Permissions

# Templates

We are not using template rules any more. Thus template rules are similar to location based rules in a sense that exposing them to the OEM's is not desirable.

# Expressions

* An expression is a combination of symbols (a syntactic entity) that can be evaluated to determine a value.
* Ayla Rule Expression Syntax (ARES) defines the allowed symbols and combinations for Ayla rules.
* ARES supports arbitrary complexity and nesting.
* ARES expressions can be abstract or concrete.
* All abstract rules contain expression with a group notation syntax.
* A rule is an expression that evaluates to true or false.
* Rule evaluation is the process of replacing a rule expression with the equivalent boolean value.
* Evaluation becomes possible upon substitution of every rule subject with its corresponding value.
* An entity is ...
* A rule expression ...
* A rule subject ...
    ```
    DATAPOINT(dsn_1,prop_name_1)
    LOCATION(uuid_1)
    ```
* Rule subjects derive from Ayla Events.
* In a rule expression, rule subjects look like function/method calls in a programming language.
* Rule subject names are always uppercase.
* Rule subject arguments can be dsn, property name, user uuid.
* Concrete subject arguments are used like literals in a typical programming language (i.e. without quotes).
* Subject types include the following:
    ```
    DATAPOINT(dsn, propname)

    ```
* Entities in a rule expression are called rule subjects.
* Rule subjects can be standalone terms or function arguments.
    ```
    distance_miles(LOCATION(uuid_1),LOCATION(dsn_1))
    ``` 
* Each rule subject corresponds to a particular Ayla Data Pipeline (DPL) event. 
* Each rule subject has a type and value at the time of rule evaluation.
* Space characters are optional in rule expressions.
* An event filter is a comma separated list of filter terms surrounded by curly brackets.
* Each event filter term consists of three parts: name, symbol, value.
    ```
    {oem_model <= foo, oem_model_version < 'abc efg'}
    VERSION(${oem_model <= foo, oem_model_version < bar})
    ```
* Allowed event filter name tags:
    * oem_model
    * oem_model_version
    * status
    * dsn
    * property_name
    * ayla_model
    * ayla_model_version
    * base_mod_img_model
    * base_mod_img_version
    * from_mod_img_version
    * from_host_img_version
* Single-subject expressions
* Multiple-subject expressions
    ```
    (DATAPOINT(dsn_1,prop_name_1) > DATAPOINT(dsn_2,prop_name_2)) && DATAPOINT(dsn_1,prop_name_3)
    ```

```
VIRTUAL(uuid_2) 
&& 
(
  (DATAPOINT(dsn_1,prop_name_1) - DATAPOINT(dsn_2, prop_name_2) > DATAPOINT(dsn_3,prop_name_3) + DATAPOINT(dsn_4, prop_name_4))
  && 
  (distance_miles(LOCATION(uuid_1),LOCATION(dsn_1)) < 112)
)
```

## Questions

1. Case-sensitive?
1. What is a virtual event (VIRTUAL(uuid_2))?
1. Shall I mention location?

# Errors

APIs return 403, 404, and 422 with `data.errors[]`.

|Code|Description|
|-|-|
|ARE-403|You are not authorized to access specified data|
|ARE-404|Action not found|
|ARE-404|Device property of rule subject not found|
|ARE-404|Rule not found|
|ARE-443|Action with given name already exists|
|ARE-488|Action subject property is oem scope or read only, hence cannot be modified|
|ARE-491|Action subject property direction is output, hence cannot be modified|

# Notes

```
select api.id, api.name, methods.name, api.path, srv.name, api.published as public, statuses.name
from api 
join methods on api.method_id=methods.id 
join srv on api.srv_id=srv.id
join statuses on api.status_id=statuses.id
where srv_id=8;
```

[Business rules engine](https://en.wikipedia.org/wiki/Business_rules_engine)

If you delete an action, ARE removes it from any rules with which it was previously associated.

# Tutorials

You have a device with DSN AC000W000000001. The device has properties:

* decimal_in
* decimal_out
* Blue_LED

## Tutorial 1

In this tutorial, you create two actions and two rules:

* Action: set Blue_LED = 1
* Action: set Blue_LED = 0
* Rule: if decimal_in >= 5.0
* Rule: if decimal_in < 5.0

### Create Actions

```
{
  "action": {
    "name": "set Blue_LED = 1",
    "type": "DATAPOINT",
    "parameters": {
      "datapoint": "DATAPOINT(AC000W006512709,Blue_LED) = 1"
    }
  }
}
```
```
{
  "action": {
    "action_uuid": "a5fe4cd0-d7cf-11ea-b8a1-1f87348da1ae",
    "name": "set Blue_LED = 1",
    "user_uuid": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "type": "DATAPOINT",
    "is_abstract": false,
    "parameters": {
      "datapoint": "DATAPOINT(AC000W006512709,Blue_LED) = 1"
    },
    "rule_ids": [],
    "created_at": "2020-08-06T10:29:03.224Z",
    "updated_at": "2020-08-06T10:29:03.224Z",
    "created_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "updated_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "oem": "0bbb112e"
  }
}
```

```
{
  "action": {
    "name": "set Blue_LED = 0",
    "type": "DATAPOINT",
    "parameters": {
      "datapoint": "DATAPOINT(AC000W006512709,Blue_LED) = 0"
    }
  }
}
```
```
{
  "action": {
    "action_uuid": "c315cf51-d7cf-11ea-b8a1-1f87348da1ae",
    "name": "set Blue_LED = 0",
    "user_uuid": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "type": "DATAPOINT",
    "is_abstract": false,
    "parameters": {
      "datapoint": "DATAPOINT(AC000W006512709,Blue_LED) = 0"
    },
    "rule_ids": [],
    "created_at": "2020-08-06T10:29:52.146Z",
    "updated_at": "2020-08-06T10:29:52.146Z",
    "created_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "updated_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "oem": "0bbb112e"
  }
}
```

### Create Rules

```
{
  "rule": {
    "name": "if decimal_in >= 5.0",
    "description": "if decimal_in property value >= 5.0",
    "expression": "DATAPOINT(AC000W006512709, decimal_in) >= 5.0",
    "is_template": false,
    "action_ids": [
      "a5fe4cd0-d7cf-11ea-b8a1-1f87348da1ae"
    ]
  }
}
```
```
{
  "rule": {
    "rule_uuid": "7b276450-d7d0-11ea-8522-d15f37b392cf",
    "name": "if decimal_in >= 5.0",
    "description": "if decimal_in property value >= 5.0",
    "expression": "DATAPOINT(AC000W006512709, decimal_in) >= 5.0",
    "is_enabled": true,
    "is_abstract": false,
    "is_template": false,
    "action_ids": [
      "a5fe4cd0-d7cf-11ea-b8a1-1f87348da1ae"
    ],
    "parameters": {},
    "user_uuid": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "created_at": "2020-08-06T10:35:01.017Z",
    "updated_at": "2020-08-06T10:35:01.017Z",
    "created_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "updated_by": "bc99cace-9b83-11ea-a601-0a580ae9531e"
  }
}
```

```
{
  "rule": {
    "name": "if decimal_in < 5.0",
    "description": "if decimal_in property value < 5.0",
    "expression": "DATAPOINT(AC000W006512709, decimal_in) < 5.0",
    "is_template": false,
    "action_ids": [
      "c315cf51-d7cf-11ea-b8a1-1f87348da1ae"
    ]
  }
}
```

```
{
  "rule": {
    "rule_uuid": "b9d1b840-d7d0-11ea-8522-d15f37b392cf",
    "name": "if decimal_in < 5.0",
    "description": "if decimal_in property value < 5.0",
    "expression": "DATAPOINT(AC000W006512709, decimal_in) < 5.0",
    "is_enabled": true,
    "is_abstract": false,
    "is_template": false,
    "action_ids": [
      "c315cf51-d7cf-11ea-b8a1-1f87348da1ae"
    ],
    "parameters": {},
    "user_uuid": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "created_at": "2020-08-06T10:36:46.194Z",
    "updated_at": "2020-08-06T10:36:46.194Z",
    "created_by": "bc99cace-9b83-11ea-a601-0a580ae9531e",
    "updated_by": "bc99cace-9b83-11ea-a601-0a580ae9531e"
  }
}
```