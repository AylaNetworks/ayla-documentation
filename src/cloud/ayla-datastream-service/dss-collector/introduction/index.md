---
title: Introduction
layout: ayla-datastream-service.html
d: block
---

DSS Collector is a Node.js WebSocket client capable of receiving and storing DSS events. These instructions show you how to install, run, and modify DSS Collector. We built the Collector on AWS Lightsail (LAMP edition) with [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed. We tested it with Node.js versions 6.14.4, 8.12.0, and 9.8.0. We also found [nvm](https://github.com/creationix/nvm) and [forever](https://www.npmjs.com/package/forever) useful, although you don't need these here.

### Installation

Follow these steps to install DSS Collector.

1. Create a project directory:
<pre>$ mkdir dss-collector</pre>
1. Change to the new directory:
<pre>$ cd dss-collector</pre>
1. Initialize the project:
<pre>$ npm init -y</pre>
1. Install the [ws](https://www.npmjs.com/package/ws) module:
<pre>$ npm install --save ws</pre>
1. Install the [fs-extra](https://github.com/jprichardson/node-fs-extra) module:
<pre>$ npm install --save fs-extra</pre>
1. Install the [mysql](https://www.npmjs.com/package/mysql) module:
<pre>$ npm install mysql</pre>
1. Create [collector.js](../source/collector.js) in the directory.</li>
1. Create [config.json](../source/config.json) in the directory. Replace the two placeholder stream keys with your own.</li>
1. Create the following subdirectory:
<pre>$ mkdir events</pre>
