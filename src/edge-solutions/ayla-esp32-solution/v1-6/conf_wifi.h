/*
 * Copyright 2011-2018 Ayla Networks, Inc.  All rights reserved.
 *
 * Use of the accompanying software is permitted only in accordance
 * with and subject to the terms of the Software License Agreement
 * with Ayla Networks, Inc., a copy of which can be obtained from
 * Ayla Networks, Inc.
 */
#ifndef __AYLA_DEMO_CONF_WIFI_H__
#define __AYLA_DEMO_CONF_WIFI_H__

/*
 * App name for iOS redirects during Wi-Fi setup in AP mode.
 */
#define OEM_IOS_APP "Aura"		/* Ayla Control App */

/*
 * Wi-Fi AP-mode SSID prefix.  Name will have - an MAC address appended.
 */
#define OEM_AP_SSID_PREFIX "Ayla-DevKit"

/*
 * Wi-Fi country code information.
 */
#define DEMO_WIFI_CC		"US"	/* country code */
#define DEMO_WIFI_SCHAN		1	/* start channel */
#define DEMO_WIFI_NCHAN		11	/* number of channels */
#define DEMO_WIFI_MAX_TX_PWR	30	/* max transmit power in dBm */

int demo_wifi_cmd(int argc, char **argv);

void demo_wifi_init(void);

#endif
