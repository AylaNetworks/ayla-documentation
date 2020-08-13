---
title: Ayla Rule Engine (ARE)
layout: technote.html
author: Matt Hagen
creationDate: August 8, 2020
lastModifiedDate: August 10, 2020
classesFromPage: has-pagebar
---

**Under Construction**

This Tech Note introduces the Ayla Rule Engine (ARE) which, once populated with user-defined rules and actions, evaluates device events in light of rules, and, when rule conditions warrant, performs the associated actions. Consider the following diagram:

<img src="ayla-rule-engine.png" width="750" height="363">

As illustrated in the diagram, devices provide ARE with a steady supply of events indicating various device-related state changes. Ayla Cloud subsystems like the OTA Service also supply ARE with events derived from device events. The `version` event, for example, indicates that a device's firmware needs to be updated. ARE leverages user-defined rules to make sense of these events. Rules always evaluate to true or false. If a rule evaluates to true, ARE performs the action(s) associated with the rule. In the diagram, for example, ARE sends an email to Sarah and posts data to an endpoint when a particular device becomes active. Rules use Ayla Rule Expression Syntax (ARES) to encode conditional expressions. Actions also use ARES to define parameters. Developers can work with rules and actions via the Rules Service APIs described in the [API Browser](https://docs.aylanetworks.com/cloud-services/api-browser/). OEM users can also work with rules and actions, to a limited extent, via the Ayla Developer Portal.

# Example

To introduce basic concepts related to rules and actions, this section provides an example using the Rules Service APIs, accessible in the [API Browser](https://docs.aylanetworks.com/cloud-services/api-browser), and the device, rules, and actions represented in the diagram below:

<img src="example.png" width="750" height="288">

The device in the diagram includes two properties, `Blue_button` and `Blue_LED`, that interact with the cloud as follows:

1. A person presses the blue button on the device.
1. The host app running on the device sets its local copy of `Blue_button` to 1.
1. The host app and the Ayla agent send the new value to the Ayla Cloud.
1. The cloud creates a datapoint event, and submits it to the Ayla Rule Engine (ARE).
1. ARE searches its list of rules, and finds two that are relevant to the event.
1. ARE provides the new value to both rules.
1. The first rule's condition is **not** met, so it does not perform its two associated actions. 
1. The second rule's condition **is** met, so it performs its two associated actions, sending an email to Yan, and setting `Blue_LED` to 1.

## Creating actions

An **action** defines a task like `set Blue_LED to 1`. ARE supports several types of actions including `DATAPOINT` and `AMS_EMAIL`. `AMS` stands for Ayla Message Service. To create the actions for the example, follow these steps:

1. Open the [API Browser](https://docs.aylanetworks.com/cloud-services/api-browser/) in another tab.
1. Click Accounts, choose a Region, enter email, password, app_id, and app_secret, click Get Tokens, and close the tab.
1. Click Devices, select a device, and ensure that the list of properties includes `cmd`, `log`, `Blue_LED`, and `Green_LED`.
1. Click Rules Service, and expand `createAction`.
1. Copy and paste the following into the Request Data textbox, and replace the DSN. You can use `true` or `1` interchangeably.
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
    Action parameters define the task. The key, `datapoint`, indicates the type, and the value specifies the task itself:
    ```
    DATAPOINT(AC000W000000001, Blue_LED) = 1
    ```
    This ARES expression means "set the `Blue_LED` property on devive `AC000W000000001` to 1.
1. Click Run. The Status Code should indicate 201.
1. Under Response Data, click `show` to see results.
1. Repeat to create the other three actions.
1. Expand `getActions`, click Run, click Show, and find the `action_uuid` for each action. You will need these to create rules below. You might copy and paste the ids into a text file like this:
    ```
    Set Blue_LED  true   a1000000-0000-0000-0000-00000000001a
    Set Blue_LED  false  a0000000-0000-0000-0000-00000000000a
    Set Green_LED true   b1000000-0000-0000-0000-00000000001b
    Set Green_LED false  b0000000-0000-0000-0000-00000000000b
    ```

## Creating rules

A **rule** associates a rule expression (that evaluates to `true` or `false`, like `log == 'off'`) with a list of actions to perform if the expression evaluates to `true`. To create the rules for the example, follow these steps:

1. Expand `createRule`. 
1. Copy and paste the following into the Request Data textbox, and replace the DSN and action_ids:
    ```
    {
      "rule": {
        "name": "log == on",
        "description": "",
        "expression": "str_equals(DATAPOINT(AC000W000000001,log),'on')",
        "action_ids": [
          "a1000000-0000-0000-0000-00000000001a",
          "b1000000-0000-0000-0000-00000000001b"
        ]
      }
    }
    ```
    A rule expression specifies a condition. Expressions that evaluate strings often contain functions like `str_equals` or `str_contains`. Other expressions may not contain functions.
1. Click Run. The Status Code should indicate 201.
1. Under Response Data, click `show` to see results.
1. Repeat to create the other rule.
1. Expand `getRules`, click Run, click Show, and view each rule object which includes a `rule_uuid` and an array of `action_ids`.

## Testing

To test the rules and actions, follow these steps:

1. On your mobile device, open the Aura Mobile App.
1. Tap a device.
1. Tap the gear at the top, and tap Fetch All Properties.
1. Toggle `Blue_LED` and `Green_LED` to `off`. 
1. Set `cmd` to `on`. After a second or two, both LEDs indicate `on`.
1. Set `cmd` to `off`. After a second or two, both LEDs indicate `off`.

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
