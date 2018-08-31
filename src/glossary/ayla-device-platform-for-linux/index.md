---
title: Ayla Device Platform for Linux
layout: glossary.html
---

# Software Components

The Ayla Linux solution includes the following software components which communicate via messages sent over Unix domain sockets. To promote maintainability and code reuse, Internal message payloads and protocols are generally defined in <code>lib/ayla</code> or <code>lib/app</code>.

### devd

The Ayla Linux Agent (devd) provides the following functionality:
* Communicates via HTTPS with the Ayla Device Service (ADS)* Connects to and receives event notifications from the Ayla Notification Service (ANS)* Handles HTTP requests from devices on the local network with its internal web server* Responds to mDNS address requests for DSN hostnames* Supports LAN mode encrypted sessions for communication with Ayla mobile apps o Provides an IPC interface for internal messaging with other Ayla daemons

### appd

The customer application (appd) is a customer-written application daemon with application-specific code. It defines and manages device properties, and either directly implements device behavior, or provides an interface for device software to interact with the Ayla cloud. By default, devd launches and monitors appd. If appd crashes or quits, devd re-launches it. To speed development, a demo application daemon is provided.

### devdwatch
This watchdog application monitors devd and re-launches devd if it crashes or quits. If available, Ayla recommends the system's built-in process-restart functionality instead of devdwatch. (See the systemd "Restart" option for details.)

### acgi

This CGI utility is executed by the system’s primary web server. Acgi parses each request, and forwards valid requests to devd, which handles them using its internal web server. This component is required to support LAN mode, Wi-Fi Setup, and Same-LAN registration. For acgi to work, some device configuration is required. Please see the LAN Mode section for more details.

### ota_update

This utility downloads, verifies, and applies an over-the-air (OTA) firmware image. The utility is invoked by devd when the service indicates a pending device update. For ota_update to be fully functional, OTA-related platform-specific functions must be implemented in the <code>lib/platform</code> library. Platform-specific functions implement image storage, readback, and apply the downloaded image to the system. See the Device OTA section for more details.### condThis Wi-Fi connection manager daemon enables Ayla Wi-Fi Setup functionality and provides an abstraction layer between Ayla daemons and the Wi-Fi driver. This daemon manages scan results and network profiles, configures AP mode, and establishes connections to Wi-Fi access points. (Optional component and may be omitted if Ayla Wi- Fi Setup solution is not needed.)

### logd
Ayla daemons write specially-tagged log messages to Syslog. Ayla logging client (logd) parses syslog output, filters messages based on log config managed by devd, and posts them to Ayla logging service. Can be remotely enabled from the Ayla OEM Dashboard and configured to monitor and debug. (Optional component and may be omitted if remote logging functionality is not needed.)

