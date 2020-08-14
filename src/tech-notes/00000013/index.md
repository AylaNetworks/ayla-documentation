---
title: Ayla Rule Engine (ARE)
layout: technote.html
author: Matt Hagen
creationDate: Month 00, 0000
lastModifiedDate: Month 00, 0000
classesFromPage: has-pagebar
---

This Tech Note introduces the Ayla Rule Engine (ARE) which evaluates device events in light of user-defined rules, and, when rule conditions warrant, performs associated user-defined actions. Consider the following diagram:

<img src="ayla-rule-engine.png" width="800" height="327">

As illustrated in the diagram, mobile/web apps and devices cause state changes to digital twins. The Ayla Cloud converts these state changes to device events (e.g. `datapoint`) and derived events (e.g. `version`) which initiate activity throughout the cloud. When ARE receives events, for example, it leverages user-defined rules to make sense of them. Rules always evaluate to true or false. If a rule evaluates to true, ARE performs the action(s) associated with the rule. Some actions leverage destinations and publications defined in the Ayla Message Service (AMS). Rules and actions use Ayla Rule Expression Syntax (ARES) to define conditional expressions and parameters respectively. Developers can use the [API Browser](https://docs.aylanetworks.com/cloud-services/api-browser/) to experiment with rules, actions, destinations, and publications.

# Example

To introduce basic concepts, this section provides an example represented in the diagram below:

<img src="example.png" width="800" height="272">

### Examining the example

The device in the diagram includes two properties, `Blue_button` and `Blue_LED`, that interact with the cloud as follows:

1. A person presses the blue button on the device.
1. The host app running on the device sets its local copy of `Blue_button` to 1.
1. The host app and the Ayla agent send the new value to the Ayla Cloud.
1. The cloud updates the digital twin with the new value.
1. The cloud creates a datapoint event representing the new `Blue_button` value, and submits it to ARE.
1. ARE searches its array of rules, finds two that are relevant, and uses them to evaluate the event.
1. The first rule's condition is **not** met, so ARE does not perform the two associated actions. 
1. The second rule's condition **is** met, so ARE performs the two associated actions:
    1. ARE sends an email to Veer (via AMS).
    1. ARE sets `Blue_LED` to 1.

### Implementing the example

The following steps how you how to create one destination, three actions, and two rules:

1. Open the [API Browser](https://docs.aylanetworks.com/cloud-services/api-browser/) in another tab.
1. Click Accounts, choose a Region, enter email, password, app_id, and app_secret, click Get Tokens, and close the tab.
1. Click Devices, select a device, and ensure that it includes `Blue_button`, and `Blue_LED` properties.
1. Click Message Service, expand `createDestination`, and create a destination.
    ```
    {
      "destination": {
        "type": "email",
        "body": "body",
        "deliver_to": "veer@acme.com",
        "title": "title",
        "provider": "smtp",
        "user_message": "User Message",
        "user_name": "Veer Patel"
      }
    }
    ```
1. Click Rules Service, and expand `createAction`.
1. Create an AMS_EMAIL action for sending an email to Veer:
    ```
    {
      "action": {
        "name": "Email to Veer",
        "type": "AMS_EMAIL",
        "is_abstract": false,
        "parameters": {
        },
        "destination_ids": [
          "00000000-0000-0000-0000-000000000000"
        ]
      }
    }
    ```
1. Create a DATAPOINT action for setting Blue_LED to 0:
    ```
    {
      "action": {
        "name": "Set Blue_LED 0",
        "type": "DATAPOINT",
        "parameters": {
          "datapoint": "DATAPOINT(AC000W006512709, Blue_LED) = 0"
        }
      }
    }
    ```
1. Create a DATAPOINT action for setting Blue_LED to 1:
    ```
    {
      "action": {
        "name": "Set Blue_LED 1",
        "type": "DATAPOINT",
        "parameters": {
          "datapoint": "DATAPOINT(AC000W006512709, Blue_LED) = 1"
        }
      }
    }
    ```
1. Click Rules Service, and expand `createRule`.
1. Create a rule for when Blue_button equals 0:
    ```
    {
      "rule": {
        "name": "Blue_button == 0",
        "description": "",
        "expression": "DATAPOINT(AC000W000000001,Blue_button) == 0",
        "action_ids": [
          "00000000-0000-0000-0000-000000000000",
          "00000000-0000-0000-0000-000000000000"
        ]
      }
    }
    ```
1. Create a rule for when Blue_button equals 1:
    ```
    {
      "rule": {
        "name": "Blue_button == 1",
        "description": "",
        "expression": "DATAPOINT(AC000W000000001,Blue_button) == 1",
        "action_ids": [
          "00000000-0000-0000-0000-000000000000",
          "00000000-0000-0000-0000-000000000000"
        ]
      }
    }
    ```
1. On your mobile device, open the Aura Mobile App.
1. Tap a device.
1. Tap the gear at the top, and tap Fetch All Properties.
1. Set `Blue_button` to 1. The Blue_LED property value changes to 1, and your receive an email.

# Events

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Expressions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Rule Subjects

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Functions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Action Types

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Concrete actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Abstract actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Action examples

## AMS_APNS actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## AMS_EMAIL actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## AMS_FCM actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## AMS_KAFKA actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## AMS_PUSH actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## AMS_SMS actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## DATAPOINT actions

### Boolean

```
{
  "action": {
    "name": "Set Blue_LED true",
    "type": "DATAPOINT",
    "parameters": {
      "datapoint": "DATAPOINT(AC000W000000001, Blue_LED) = 1"
    }
  }
}
```

### Decimal

### Integer

```
{
  "action": {
    "name": "Set input 5",
    "type": "DATAPOINT",
    "parameters": {
      "datapoint": "DATAPOINT(AC000W000000001, input) = 5"
    }
  }
}
```

### String

```
{
  "action": {
    "name": "Set cmd on",
    "type": "DATAPOINT",
    "parameters": {
      "datapoint": "DATAPOINT(AC000W000000001,cmd) = 'on'"
    }
  }
}
```

## DATASTREAM actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## DATASTREAM_EVENTHUB actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## DIAGNOSTIC actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## EMAIL actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## SMS actions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## URL actions

* How do you receive notification of errors?

### dpl_event placeholder

This action sends an entire `dpl_event` object to the endpoint.

```
{
  "action": {
    "name": "URL Action Test",
    "type": "URL",
    "parameters": {
      "body": "{{{dpl_event}}}",
      "endpoint": "https://docs.aylanetworks.com/api/v1/tests"
    }
  }
}
```

The `{{{dpl_event}}}` placeholder expands to this:

```
{
  "dpl_event": {
    "metadata": {
      "oem_id": "1234abcd",
      "oem_model": "ledevb",
      "dsn": "AC000W000000001",
      "property_name": "decimal_out",
      "display_name": "decimal_out",
      "base_type": "decimal",
      "event_type": "datapoint"
    },
    "datapoint": {
      "id": "10000001-abcd-abcd-abcd-100000000001",
      "updated_at": "2020-08-11T12:31:21Z",
      "created_at": "2020-08-11T12:31:21Z",
      "echo": false,
      "closed": false,
      "value": "1.0",
      "metadata": {},
      "user_uuid": "20000002-abcd-abcd-abcd-200000000002",
      "discarded": false,
      "scope": "user",
      "direction": "output"
    },
    "timestamp": "2020-08-11T12:31:21.000+0000"
  }
}
```

### Other placeholders

This action sends rule and event information to the endpoint:

```
{
  "action": {
    "name": "URL Action Test",
    "type": "URL",
    "parameters": {
      "body": "{\"rule_id\":\"{{rule.id}}\",\"rule_uuid\":\"{{rule.uuid}}\",\"rule_name\":\"{{rule.name}}\",\"rule_expression\":\"{{rule.expression}}\",\"event_metadata_dsn\":\"{{event.metadata.dsn}}\",\"event_user_uuid\":\"{{event.user_uuid}}\",\"event_timestamp_UNIX\":\"{{event_timestamp_UNIX}}\",\"event_timestamp_ISO8601\":\"{{event_timestamp_ISO8601}}\",\"action_uuid\":\"{{action.uuid}}\"}",
      "endpoint": "https://docs.aylanetworks.com/api/v1/tests"
    }
  }
}
```

The various placeholders expand to these:

```
{
  "rule_id": "141765",
  "rule_uuid": "30000003-abcd-abcd-abcd-300000000003",
  "rule_name": "",
  "rule_expression": "",
  "event_metadata_dsn": "AC000W000000001",
  "event_user_uuid": "20000002-abcd-abcd-abcd-200000000002",
  "event_timestamp_UNIX": "1597148678708",
  "event_timestamp_ISO8601": "2020-08-11T12:24Z",
  "action_uuid": "40000004-abcd-abcd-abcd-400000000004"
}
```

# Rules

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Concrete Rules

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Abstract Rules

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# About the APIs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
