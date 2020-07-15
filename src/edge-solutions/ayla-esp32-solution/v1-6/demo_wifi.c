/*
 * Copyright 2011-2018 Ayla Networks, Inc.  All rights reserved.
 *
 * Use of the accompanying software is permitted only in accordance
 * with and subject to the terms of the Software License Agreement
 * with Ayla Networks, Inc., a copy of which can be obtained from
 * Ayla Networks, Inc.
 */
#include <sys/types.h>
#include <string.h>
#include <stdio.h>

#include <lwip/sys.h>
#include "esp_system.h"
#include "esp_wifi.h"
#include "esp_wifi_types.h"

#include <ayla/utypes.h>
#include <ada/libada.h>
#include <ayla/assert.h>
#include <ada/err.h>
#include <ayla/log.h>
#include <ada/dnss.h>
#include <net/net.h>
#include <ada/server_req.h>
#include <adw/wifi.h>
#include <adw/wifi_conf.h>

#include "conf_wifi.h"
#include "demo.h"
#include <esp_wifi.h>

/*
 * Country code information.
 */
static const wifi_country_t demo_wifi_country = {
	.cc = DEMO_WIFI_CC,
	.schan = DEMO_WIFI_SCHAN,
	.nchan = DEMO_WIFI_NCHAN,
	.max_tx_power = DEMO_WIFI_MAX_TX_PWR,
};

/*
 * Set the country code.
 * Called by the event handler whenever Wi-Fi is enabled.
 */
static void demo_wifi_set_country_code(void)
{
	esp_err_t rc;

	rc = esp_wifi_set_country(&demo_wifi_country);
	if (rc != ESP_OK) {
		log_put(LOG_ERR "set country code failed rc %u", rc);
	}
}

/*
 * Event handler.
 * This is called by the Wi-Fi subsystem on connects and disconnects
 * and similar events.
 * This allows the application to start or stop services on those events,
 * and to implement status LEDs, for example.
 */

static void demo_wifi_event_handler(enum adw_wifi_event_id id, void *arg)
{
	switch (id) {
	case ADW_EVID_AP_START:
		break;

	case ADW_EVID_AP_UP:
		server_enable_redir();
		server_up();
		dnss_up();
		break;

	case ADW_EVID_AP_DOWN:
		dnss_down();
		break;

	case ADW_EVID_STA_UP:
		break;

	case ADW_EVID_STA_DHCP_UP:
#if ENABLE_SNTP
		epoch_time();
#endif
		ada_client_up();
		server_up();
		demo_cloud_up();
		break;

	case ADW_EVID_STA_DOWN:
		ada_client_down();
		break;

	case ADW_EVID_ENABLE:
		demo_wifi_set_country_code();
		break;

	case ADW_EVID_SETUP_START:
	case ADW_EVID_SETUP_STOP:
	case ADW_EVID_DISABLE:
		break;

	case ADW_EVID_RESTART_FAILED:
		log_put(LOG_WARN "resetting due to Wi-Fi failure");
		sys_msleep(400);
		esp_restart();
		break;

	default:
		break;
	}
}

int demo_wifi_cmd(int argc, char **argv)
{
	adw_wifi_cli(argc, argv);
	return 0;
}

void demo_wifi_enable(void)
{
	char *argv[] = { "wifi", "enable" };

	adw_wifi_cli(2, argv);
}

void demo_wifi_init(void)
{
	//struct ada_conf *cf = &ada_conf;
	int enable_redirect = 1;
	char ssid[32];
	const u8 *pssid;

	adw_wifi_event_register(demo_wifi_event_handler, NULL);
	adw_wifi_init();
	adw_wifi_page_init(enable_redirect);

	pssid = adw_wifi_ap_ssid_get();
	if (!pssid[0]) {
		/*
		 * Set the network name for AP mode,
		 * for use during Wi-Fi setup.
		 */
		snprintf(ssid, sizeof(ssid), OEM_AP_SSID_PREFIX);
		// snprintf(ssid, sizeof(ssid),
		//     OEM_AP_SSID_PREFIX "-%2.2x%2.2x%2.2x%2.2x%2.2x%2.2x",
		//     cf->mac_addr[0], cf->mac_addr[1], cf->mac_addr[2],
		//     cf->mac_addr[3], cf->mac_addr[4], cf->mac_addr[5]);
		adw_wifi_ap_ssid_set(ssid);
	}

	adw_wifi_ios_setup_app_set(OEM_IOS_APP);

	adw_check_wifi_enable_conf();
#ifndef AYLA_DEMO_TEST
	demo_wifi_enable();
#endif
}
