---
title: Ayla API Documentation System
layout: api-workbench.html
e: block
---

The system consists of the following:

1. Front-end
  1. Ayla API Browser
  1. Ayla API Workbench
1. Server
  1. Ayla Docs Server
  1. Ayla Docs Server API
1. Database (ayla_api_documentation)

# Objects

## api

|Property|Type|Default|Example|
|-|-|-|-|
|id|integer|Guaranteed|178|
|description|string|""|This is the API description.|
|method|object|null|method|
|name|string|""|getApi|
|notes|string|""|These are notes about the API.|
|path|string|""|/api/v1/aca/apis/{apiId}|
|pathParameters|array|[ ]|pathParameter[ ]|
|queryParameters|array|[ ]|queryParameter[ ]|
|requestData|string|""|{"api_id": ""}|
|requestDescription|string|""|requestDescription|
|responseDescription|string|""|responseDescription|
|service|object|null|service|
|status|object|null|status|
|statusCodes|array|[ ]|statusCodes[ ]|
|tags|array|[ ]|tags[ ]|

## method

|Property|Type|Default|Example|
|-|-|-|-|
|id|integer|Guaranteed|4|
|name|string|Guaranteed|get|

## pathParameter

|Property|Type|Default|Example|
|-|-|-|-|
|id|integer|Guaranteed|27|
|name|string|Guaranteed|apiId|
|type|string|Guaranteed|integer|
|baseText|string|Guaranteed|Unique ID of an Ayla Cloud API.|
|customText|string|""|A custom description of this path parameter.|

## queryParameter

|Property|Type|Default|Example|
|-|-|-|-|
|id|integer|Guaranteed|24|
|name|string|Guaranteed|format|
|type|string|Guaranteed|boolean|
|baseText|string|Guaranteed|1 means apply JSON.stringify to response data.|
|customText|string|""|A custom description of this query parameter.|

## service

|Property|Type|Default|Example|
|-|-|-|-|
|id|integer|Guaranteed|3|
|name|string|Guaranteed|Device|

## status

|Property|Type|Default|Example|
|-|-|-|-|
|id|integer|Guaranteed|6|
|name|string|Guaranteed|New|

## statusCode

|Property|Type|Default|Example|
|-|-|-|-|
|code|integer|Guaranteed|200|
|baseText|string|Guaranteed|OK|
|customText|string|""|Found API|

## tag

