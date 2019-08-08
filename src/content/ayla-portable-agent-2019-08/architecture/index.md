---
title: Architecture
layout: ayla-portable-agent-2019-08.html
---

Files

```
|-- Makefile
|-- README
|-- ayla
|   |-- doc
|   |   |-- pda-http-adapter-layer-api-2.3.1-beta.pdf
|   |   |-- pda-http-application-api-2.3.1-beta.pdf
|   |-- include
|   |   |-- ada
|   |   |   |-- ada.h
|   |   |   |-- ada_conf.h
|   |   |   |-- ada_wifi.h
|   |   |   |-- build.h
|   |   |   |-- client_ota.h
|   |   |   |-- dnss.h
|   |   |   |-- err.h
|   |   |   |-- notify.h
|   |   |   |-- prop.h
|   |   |   |-- prop_mgr.h
|   |   |   |-- sched.h
|   |   |   |-- sprop.h
|   |   |   |-- task_label.h
|   |   |-- adw
|   |   |   |-- adw.h
|   |   |-- al
|   |       |-- al_ada_thread.h
|   |       |-- al_aes.h
|   |       |-- al_assert.h
|   |       |-- al_cli.h
|   |       |-- al_clock.h
|   |       |-- al_err.h
|   |       |-- al_hash_sha1.h
|   |       |-- al_hash_sha256.h
|   |       |-- al_hmac_sha256.h
|   |       |-- al_httpd.h
|   |       |-- al_log.h
|   |       |-- al_net_addr.h
|   |       |-- al_net_dns.h
|   |       |-- al_net_if.h
|   |       |-- al_net_mdnss.h
|   |       |-- al_net_stream.h
|   |       |-- al_net_udp.h
|   |       |-- al_os_lock.h
|   |       |-- al_os_mem.h
|   |       |-- al_os_reboot.h
|   |       |-- al_os_thread.h
|   |       |-- al_persist.h
|   |       |-- al_random.h
|   |       |-- al_rsa.h
|   |       |-- al_utypes.h
|   |       |-- al_wifi.h
|   |-- lib
|   |   |-- native
|   |       |-- libada-cfg-dft.a
|   |       |-- libada-cfg-wifi.a
|   |       |-- libadw-cfg-wifi.a
|   |       |-- libayla-cfg-dft.a
|   |       |-- libayla-cfg-wifi.a
|   |       |-- libplat-linux-cfg-dft.a
|   |       |-- libplat-linux-cfg-wifi.a
|   |-- make
|   |   |-- client_defs.mk
|   |   |-- common_cc.mk
|   |   |-- common_defs.mk
|   |-- src
|   |   |-- ext
|   |   |   |-- hostap
|   |   |   |   |-- CONTRIBUTIONS
|   |   |   |   |-- COPYING
|   |   |   |   |-- README
|   |   |   |   |-- src
|   |   |   |       |-- common
|   |   |   |       |   |-- wpa_ctrl.c
|   |   |   |       |   |-- wpa_ctrl.h
|   |   |   |       |-- utils
|   |   |   |           |-- build_config.h
|   |   |   |           |-- common.c
|   |   |   |           |-- common.h
|   |   |   |           |-- includes.h
|   |   |   |           |-- os.h
|   |   |   |           |-- os_unix.c
|   |   |   |           |-- trace.h
|   |   |   |           |-- wpa_debug.c
|   |   |   |           |-- wpa_debug.h
|   |   |   |           |-- wpabuf.h
|   |   |   |-- jsmn
|   |   |       |-- LICENSE
|   |   |       |-- Makefile
|   |   |       |-- README
|   |   |       |-- demo.c
|   |   |       |-- jsmn.c
|   |   |       |-- jsmn.h
|   |   |       |-- test.sh
|   |   |-- libada
|   |   |   |-- Makefile
|   |   |   |-- ada_err.c
|   |   |   |-- ada_lock.h
|   |   |   |-- ada_version.mk
|   |   |   |-- certs
|   |   |   |   |-- Baltimore_CyberTrust_Root.pem
|   |   |   |   |-- Makefile
|   |   |   |   |-- entrust-ca-g2-sha256-2048.pem
|   |   |   |   |-- entrust-ca-sha1-2048-sn-0x456b5054.pem
|   |   |   |   |-- valicert-cl2-sha1-1024.pem
|   |   |   |-- client.c
|   |   |   |-- client_auth.c
|   |   |   |-- client_common.c
|   |   |   |-- client_common.h
|   |   |   |-- client_conf.c
|   |   |   |-- client_int.h
|   |   |   |-- client_lock.h
|   |   |   |-- client_main.c
|   |   |   |-- client_ota.c
|   |   |   |-- client_prop.c
|   |   |   |-- client_req.h
|   |   |   |-- conf_json.c
|   |   |   |-- dnss.c
|   |   |   |-- dnss_internal.h
|   |   |   |-- dnss_util.c
|   |   |   |-- http_client.c
|   |   |   |-- http_client.h
|   |   |   |-- include
|   |   |   |   |-- ada
|   |   |   |       |-- ada_lan_conf.h
|   |   |   |       |-- client.h
|   |   |   |       |-- linker_text.h
|   |   |   |       |-- log_page.h
|   |   |   |       |-- notify_proto.h
|   |   |   |       |-- server_req.h
|   |   |   |-- lan.c
|   |   |   |-- lan_int.h
|   |   |   |-- log_client.c
|   |   |   |-- log_page.c
|   |   |   |-- notify.c
|   |   |   |-- notify_int.h
|   |   |   |-- oem.c
|   |   |   |-- prop_int.h
|   |   |   |-- prop_mgr.c
|   |   |   |-- prop_mgr_int.h
|   |   |   |-- prop_page.c
|   |   |   |-- sched.c
|   |   |   |-- schedeval.c
|   |   |   |-- schedeval.h
|   |   |   |-- server.c
|   |   |   |-- server_mem.c
|   |   |   |-- server_req.c
|   |   |   |-- sprop.c
|   |   |   |-- text
|   |   |       |-- custom.css.c
|   |   |       |-- custom.css.txt
|   |   |       |-- regtoken.html.c
|   |   |       |-- regtoken.html.txt
|   |   |-- libadw
|   |   |   |-- Makefile
|   |   |   |-- include
|   |   |   |   |-- adw
|   |   |   |       |-- wifi.h
|   |   |   |       |-- wifi_conf.h
|   |   |   |-- text
|   |   |   |   |-- lock.gif.c
|   |   |   |   |-- lock.gif.txt
|   |   |   |   |-- refresh.gif.c
|   |   |   |   |-- refresh.gif.txt
|   |   |   |   |-- wifi.html.c
|   |   |   |   |-- wifi.html.txt
|   |   |   |   |-- wifi.js
|   |   |   |   |-- wifi.js.README
|   |   |   |   |-- wifi.js.c
|   |   |   |   |-- wifi.js.txt
|   |   |   |-- wifi.c
|   |   |   |-- wifi_conf.c
|   |   |   |-- wifi_int.h
|   |   |   |-- wifi_page.c
|   |   |   |-- wifi_page.h
|   |   |-- libayla
|   |       |-- Makefile
|   |       |-- base64.c
|   |       |-- callback.c
|   |       |-- clock_fmt.c
|   |       |-- clock_utils.c
|   |       |-- conf.c
|   |       |-- conf_str.h
|   |       |-- crc.c
|   |       |-- crc16.c
|   |       |-- crc8.c
|   |       |-- endian.c
|   |       |-- format_mac.c
|   |       |-- format_string.c
|   |       |-- hostname_valid.c
|   |       |-- http.c
|   |       |-- include
|   |       |   |-- ayla
|   |       |       |-- assert.h
|   |       |       |-- base64.h
|   |       |       |-- callback.h
|   |       |       |-- clock.h
|   |       |       |-- conf.h
|   |       |       |-- conf_token.h
|   |       |       |-- conf_tokens.h
|   |       |       |-- crc.h
|   |       |       |-- dns.h
|   |       |       |-- endian.h
|   |       |       |-- http.h
|   |       |       |-- ipaddr_fmt.h
|   |       |       |-- jsmn_get.h
|   |       |       |-- json.h
|   |       |       |-- log.h
|   |       |       |-- mem_dump.h
|   |       |       |-- mod_log.h
|   |       |       |-- nameval.h
|   |       |       |-- parse.h
|   |       |       |-- snprintf.h
|   |       |       |-- timer.h
|   |       |       |-- tlv.h
|   |       |       |-- uri_code.h
|   |       |       |-- utf8.h
|   |       |       |-- utypes.h
|   |       |       |-- wifi_error.h
|   |       |       |-- wifi_status.h
|   |       |       |-- xml.h
|   |       |-- ipaddr_fmt.c
|   |       |-- jsmn_get.c
|   |       |-- jsmn_iterate.c
|   |       |-- json_format_string.c
|   |       |-- log.c
|   |       |-- log_buf.c
|   |       |-- log_conf.c
|   |       |-- log_io.c
|   |       |-- lookup_by_name.c
|   |       |-- lookup_by_val.c
|   |       |-- mem_dump.c
|   |       |-- parse_argv.c
|   |       |-- parse_date.c
|   |       |-- parse_hex.c
|   |       |-- parse_mac.c
|   |       |-- parse_url.c
|   |       |-- timer.c
|   |       |-- tlv.c
|   |       |-- uri_arg_allowed_map.c
|   |       |-- uri_decode.c
|   |       |-- uri_encode.c
|   |       |-- utf8.c
|   |       |-- vsnprintf.c
|   |       |-- xml.c
|   |       |-- xml_decode.c
|   |       |-- xml_encode.c
|   |-- test
|       |-- altest
|       |   |-- Makefile
|       |   |-- pfm_test_frame.c
|       |   |-- test.c
|       |   |-- testcases
|       |       |-- test_aes.c
|       |       |-- test_assert.c
|       |       |-- test_cli.c
|       |       |-- test_clock.c
|       |       |-- test_err.c
|       |       |-- test_hmac_sha256.c
|       |       |-- test_httpd.c
|       |       |-- test_log.c
|       |       |-- test_net_addr.c
|       |       |-- test_net_dns.c
|       |       |-- test_net_if.c
|       |       |-- test_net_mdns.c
|       |       |-- test_net_stream.c
|       |       |-- test_net_udp.c
|       |       |-- test_os_lock.c
|       |       |-- test_os_mem.c
|       |       |-- test_os_thread.c
|       |       |-- test_persist.c
|       |       |-- test_random.c
|       |       |-- test_rsa.c
|       |       |-- test_sha1.c
|       |       |-- test_sha256.c
|       |       |-- test_wifi.c
|       |-- altest-httpd-client
|       |   |-- altest_httpd_client.py
|       |-- altest-server
|       |   |-- altest-server.py
|       |   |-- certs
|       |       |-- AylaQATestRoot.crt
|       |       |-- altest.aylanetworks.com.chain
|       |       |-- altest.aylanetworks.com.key
|       |       |-- altest.aylanetworks.com.pub.key
|       |       |-- altest.aylanetworks.com.pub2.key
|       |-- apptest
|       |   |-- Makefile
|       |   |-- automation_apptest_script
|       |   |   |-- README
|       |   |   |-- py
|       |   |   |   |-- README
|       |   |   |   |-- ada
|       |   |   |   |   |-- TestAdaClient.py
|       |   |   |   |   |-- TestAdaLog.py
|       |   |   |   |   |-- TestAdaOta.py
|       |   |   |   |   |-- TestAdaProp.py
|       |   |   |   |   |-- TestAdaSched.py
|       |   |   |   |   |-- TestAdaSuite.py
|       |   |   |   |-- lib
|       |   |   |       |-- CmdAda.py
|       |   |   |       |-- CmdAdw.py
|       |   |   |       |-- CmdAdwAmeba.py
|       |   |   |       |-- CmdAdwLinux.py
|       |   |   |       |-- CmdAdwMod.py
|       |   |   |       |-- CmdAdwQca.py
|       |   |   |       |-- CmdAdwTest.py
|       |   |   |       |-- CmdAdwWmsdk.py
|       |   |   |       |-- Log.py
|       |   |   |       |-- Pexpect.py
|       |   |   |       |-- Serial.py
|       |   |   |       |-- TestCaseAda.py
|       |   |   |       |-- Util.py
|       |   |   |-- rc.sh
|       |   |   |-- util
|       |   |       |-- addusb.sh
|       |   |       |-- aylausb.sh
|       |   |       |-- bashrc.sh
|       |   |       |-- testenv.sh
|       |   |       |-- usb2ser.sh
|       |   |-- src
|       |       |-- apptest.c
|       |       |-- apptest.h
|       |       |-- apptest_conf.h
|       |       |-- apptest_demo.c
|       |       |-- apptest_demo.h
|       |       |-- apptest_ota.c
|       |       |-- apptest_sched_conf.c
|       |       |-- apptest_wifi.c
|       |-- common
|           |-- adap_sched_stubs.c
|           |-- adap_stubs.c
|           |-- adap_wifi_stubs.c
|           |-- cli.c
|           |-- demo_cli.c
|           |-- demo_cli_client.c
|           |-- demo_cli_conf.c
|           |-- demo_cli_log.c
|           |-- demo_cli_mem.c
|           |-- demo_cli_notify.c
|           |-- demo_cli_reset.c
|           |-- demo_cli_sched.c
|           |-- demo_cli_show.c
|           |-- demo_cli_updown.c
|           |-- demo_cli_wifi.c
|           |-- linux
|               |-- demo_factory_conf.c
|-- examples
|   |-- common
|   |   |-- adap_sched_stubs.c
|   |   |-- adap_stubs.c
|   |   |-- adap_wifi_stubs.c
|   |   |-- cli.c
|   |   |-- demo_cli.c
|   |   |-- demo_cli_client.c
|   |   |-- demo_cli_conf.c
|   |   |-- demo_cli_log.c
|   |   |-- demo_cli_mem.c
|   |   |-- demo_cli_notify.c
|   |   |-- demo_cli_reset.c
|   |   |-- demo_cli_sched.c
|   |   |-- demo_cli_show.c
|   |   |-- demo_cli_updown.c
|   |   |-- demo_cli_wifi.c
|   |   |-- linux
|   |       |-- demo_factory_conf.c
|   |-- include
|   |   |-- demo
|   |       |-- cli.h
|   |       |-- demo.h
|   |-- ledevb
|   |   |-- Makefile
|   |   |-- demo_ledevb.c
|   |   |-- demo_ota.c
|   |   |-- demo_sched.c
|   |-- wifisetup
|       |-- Makefile
|       |-- demo_wifi.c
|       |-- demo_wifisetup.c
|-- linux_cc.mk
|-- linux_defs.mk
|-- platform
    |-- include
    |   |-- platform
    |       |-- pfm_httpd.h
    |       |-- pfm_net_dhcpc.h
    |       |-- pfm_net_dhcps.h
    |       |-- pfm_net_tcp.h
    |       |-- pfm_net_tls.h
    |       |-- pfm_ota.h
    |       |-- pfm_test_cases.h
    |       |-- pfm_test_frame.h
    |-- linux
    |   |-- Makefile
    |   |-- al_ada_thread.c
    |   |-- al_aes.c
    |   |-- al_assert.c
    |   |-- al_cli.c
    |   |-- al_clock.c
    |   |-- al_err.c
    |   |-- al_hash_sha1.c
    |   |-- al_hash_sha256.c
    |   |-- al_hmac_sha256.c
    |   |-- al_httpd.c
    |   |-- al_log.c
    |   |-- al_net_addr.c
    |   |-- al_net_dns.c
    |   |-- al_net_if.c
    |   |-- al_net_mdnss.c
    |   |-- al_net_stream.c
    |   |-- al_net_udp.c
    |   |-- al_os_lock.c
    |   |-- al_os_mem.c
    |   |-- al_os_reboot.c
    |   |-- al_os_thread.c
    |   |-- al_persist.c
    |   |-- al_random.c
    |   |-- al_rsa.c
    |   |-- al_wifi.c
    |   |-- include
    |   |   |-- al
    |   |   |   |-- al_compiler.h
    |   |   |-- platform
    |   |       |-- pfm_assert.h
    |   |       |-- pfm_clock.h
    |   |       |-- pfm_net_addr.h
    |   |       |-- pfm_net_dns.h
    |   |       |-- pfm_net_if.h
    |   |       |-- pfm_net_stream.h
    |   |       |-- pfm_net_udp.h
    |   |       |-- pfm_os_mem.h
    |   |       |-- pfm_os_thread.h
    |   |       |-- pfm_persist.h
    |   |       |-- pfm_pwb_linux.h
    |   |       |-- pfm_stacksize.h
    |   |       |-- pfm_test_desc.h
    |   |       |-- pfm_wifi.h
    |   |-- main.c
    |   |-- pfm_net_dhcpc.c
    |   |-- pfm_net_dhcps.c
    |   |-- pfm_net_tcp.c
    |   |-- pfm_net_tls.c
    |   |-- pfm_ota.c
    |   |-- pfm_test_cases.c
    |   |-- stubs.c
    |   |-- utils
    |       |-- conf-gen.py
    |-- stubs
        |-- Makefile
        |-- al_ada_thread.c
        |-- al_aes.c
        |-- al_assert.c
        |-- al_cli.c
        |-- al_clock.c
        |-- al_err.c
        |-- al_hash_sha1.c
        |-- al_hash_sha256.c
        |-- al_hmac_sha256.c
        |-- al_httpd.c
        |-- al_log.c
        |-- al_net_addr.c
        |-- al_net_dns.c
        |-- al_net_if.c
        |-- al_net_mdnss.c
        |-- al_net_stream.c
        |-- al_net_udp.c
        |-- al_os_lock.c
        |-- al_os_mem.c
        |-- al_os_reboot.c
        |-- al_os_thread.c
        |-- al_persist.c
        |-- al_random.c
        |-- al_rsa.c
        |-- al_wifi.c
        |-- include
        |   |-- al
        |   |   |-- al_compiler.h
        |   |-- platform
        |       |-- pfm_net_addr.h
        |       |-- pfm_net_stream.h
        |-- main.c
        |-- pfm_ota.c
```

Ayla Device Agent (ADA) Configuration

```
// ayla/include/ada/ada_conf.h

struct ada_conf {
    /**
    * The parameters come from ada application
    */
    char region[ADA_CONF_REGION_MAX]; /**< Service region, US or CN. */
    char dsn[ADA_CONF_DEV_SN_MAX];    /**< Device DSN. */
    char pubkey[ADA_CONF_PUBKEY_MAX]; /**< Device RSA public key. */
    int pubkey_len;                   /**< The length of public key */
    char oem[ADA_CONF_OEM_MAX];       /**< OEM string. */
    char model[ADA_CONF_MODEL_MAX];   /**< OEM model. */
    u8 oemkey[ADA_CONF_OEM_KEY_MAX];  /**< Encrypted OEM key. */
    char mfg_serial[ADA_CONF_DEV_ID_MAX]; /**< Manufacture serial. */
    char mfg_model[ADA_CONF_MFG_MODEL_MAX]; /**< Manufacture serial. */
    char conf_server[ADA_CONF_ADS_HOST_MAX];  /**< Server host name, if override desired. */
    u16 poll_interval;                /**< Interval for polling if needed, seconds */
    u8 mac_addr[ADA_CONF_MAC_ADDR_MAX];/**< System MAC address for identification */
    char hw_id[ADA_CONF_HWID_MAX];    /**< pointer to unique hardware-ID string */
    u8 get_all:1;                     /**< 1 to get all to device properties when the first time sign in the ADS. */
    u8 disable_sync_time:1; /**< disable sync time */

    /**
    * Items set by platform.
    */
    u8 lan_disable:1;       /**< set to disable LAN mode */
    u8 test_connect:1;      /**< don't count as first connect */
    u8 enable;              /**< client enabled */
    u8 conf_serv_override;  /**< override conf_server, use ads-dev */
    u16 conf_port;          /**< secure server port, if not default */
    u16 conf_pub_port;      /**< insecure server port, if not default */

    /**
    * Items set by client only, but of interest to the platform.
    */
    char host_symname[CLIENT_CONF_SYMNAME_LEN];
    char reg_token[CLIENT_CONF_REG_TOK_LEN]; /**< user registration token */
    u8 reg_user;            /**< a user is registered */
    enum client_event event_mask; /**< mask of reportable events */
};
```
