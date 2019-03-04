---
title: Configuration
layout: ayla-integrated-agents.html
a: block
---

<ol>
<li>Change directory to <code>&#126;/esp/esp-idf/patches</code>.</li>
<li>View patches:
<pre>
$ ls -1
lwip.patch
nvs_flash.patch
spi_flash.patch
</pre>
</li>
<li>Apply <code>lwip.patch</code> manually, and then delete the file.</li>
<li>Change directory to <code>&#126;/esp/esp-idf/examples/ayla_demo</code>.</li>
<li>Set oem id, oem model, and template version in <code>./main/conf.h</code>:
<pre>
#define DEMO_OEM_ID "abcd1234"
#define DEMO_LEDEVB_MODEL "esp32devkitc"
#define DEMO_TEMPLATE_VERSION "ESP32 Dev Kit C 1.0"
</pre>
<li>Configure the app with the correct python version and serial port:
<pre>
$ make menuconfig
</pre>
</li>
<li>Build the app:
<pre>
$ make
</pre>
</li>
<li>Flash the app to the ESP32 Dev Kit:
<pre>
$ make flash
</pre>
</li>
<li>Monitor the app:
<pre>
$ make monitor
</pre>
</li>
<li>Create/obtain a dsn and key for your device ...</li>
<li>Set dsn and key:
<pre>
# nvs-set "ada.f.id/dev_id" AC000W006512709
# nvs-set "ada.f.id/key" MIIBCgKCAQEAuaWvqF3BQYQDTnb+uTbw/k7NGVOUOYKaKkIs1v7zxAfZB8pRu3tNfPLCQj6Q4j7dMOGuJoaMpbVilAuQ12MY1k/miwe1LbBsWgVQRd8vTQ7rMbrFg8SjnsLu0bMUXTm+s+hGKwr2s7wnQW0+X+WLXiSsMZFXdmROZVxV76B5mwBkXqlhN8BUJAp5OxM0KVNV/a3A32eepueir+woAhfeJKBAHUEc9VCT1lEueuF3ysSvQiKbHeA1Hw3ZLAX6V9aO6+ZrWtdsO9zwu00wW9Gkix1i+hxz6Ri4b/F0o+OzJPKUgpTMNHeoA1su8/X4f+ytDl68YTQDkJdv/peDfZSxmwIDAQAB
# esp-reboot
</pre>
<li>Get/set time:
<pre>
# time-get
# time-set 2019 03 03 12 10 00
</pre>
</li>
<li>Generate a Factory Log Line to verify dsn and key:
<pre>
# factory-log
factory-log line:
3,1551615095,2019/03/03 12:11:35 UTC,label,0,AY008ESP1,AC000W006512709,30aea4dda0c0,esp32_wroom_32,p1,903779923283605830,0bbb112e,esp32devkitc,0,Matt Hagen Company Name,ayla_ledevb_demo 1.3 Mar  3 2019 11:42:06
</pre>
</li>
<li>Set up Wi-Fi:
<pre>
# nvs-set ada.f.wifi/profile/0/ssid &lt;ssid&gt;
# nvs-set ada.f.wifi/profile/0/security &lt;security_type&gt;
# nvs-set ada.f.wifi/profile/0/key &lt;passphrase&gt;
# nvs-set ada.f.wifi/profile/0/enable 1
# esp-reboot
</pre>
</li>
</ol>

NVS = [Non-Volatile Storage](https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/storage/nvs_flash.html).

<pre>
# nvs-set "ada.f.id/dev_id" AC000W000123456
# nvs-set "ada.f.id/key" MIIBIjANBgkqhkiG9w0BAQEFAAOC ... DAQAB
# esp-reboot
</pre>

<code>make flash</code> is the same as the following:

<pre>
$ python3 /Users/matt/esp/esp-idf/components/esptool_py/esptool/esptool.py --chip esp32 --port /dev/cu.SLAB_USBtoUART --baud 115200 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 40m --flash_size detect 0x1000 /Users/matt/esp/esp-idf/examples/ayla_demo/build/bootloader/bootloader.bin 0x10000 /Users/matt/esp/esp-idf/examples/ayla_demo/build/ayla_demo.bin 0x8000 /Users/matt/esp/esp-idf/examples/ayla_demo/build/partitions_singleapp.bin
</pre>

<code>esptool.py</code> is the boot loader utility:

<pre>
$ python3 /Users/matt/esp/esp-idf/components/esptool_py/esptool/esptool.py
esptool.py v2.6
usage: esptool [-h] [--chip {auto,esp8266,esp32}] [--port PORT] [--baud BAUD]
               [--before {default_reset,no_reset,no_reset_no_sync}]
               [--after {hard_reset,soft_reset,no_reset}] [--no-stub]
               [--trace] [--override-vddsdio [{1.8V,1.9V,OFF}]]
               {load_ram,dump_mem,read_mem,write_mem,write_flash,run,image_info,make_image,elf2image,read_mac,chip_id,flash_id,read_flash_status,write_flash_status,read_flash,verify_flash,erase_flash,erase_region,version}
               ...

esptool.py v2.6 - ESP8266 ROM Bootloader Utility

positional arguments:
  {load_ram,dump_mem,read_mem,write_mem,write_flash,run,image_info,make_image,elf2image,read_mac,chip_id,flash_id,read_flash_status,write_flash_status,read_flash,verify_flash,erase_flash,erase_region,version}
                        Run esptool {command} -h for additional help
    load_ram            Download an image to RAM and execute
    dump_mem            Dump arbitrary memory to disk
    read_mem            Read arbitrary memory location
    write_mem           Read-modify-write to arbitrary memory location
    write_flash         Write a binary blob to flash
    run                 Run application code in flash
    image_info          Dump headers from an application image
    make_image          Create an application image from binary files
    elf2image           Create an application image from ELF file
    read_mac            Read MAC address from OTP ROM
    chip_id             Read Chip ID from OTP ROM
    flash_id            Read SPI flash manufacturer and device ID
    read_flash_status   Read SPI flash status register
    write_flash_status  Write SPI flash status register
    read_flash          Read SPI flash content
    verify_flash        Verify a binary blob against flash
    erase_flash         Perform Chip Erase on SPI flash
    erase_region        Erase a region of the flash
    version             Print esptool version

optional arguments:
  -h, --help            show this help message and exit
  --chip {auto,esp8266,esp32}, -c {auto,esp8266,esp32}
                        Target chip type
  --port PORT, -p PORT  Serial port device
  --baud BAUD, -b BAUD  Serial port baud rate used when flashing/reading
  --before {default_reset,no_reset,no_reset_no_sync}
                        What to do before connecting to the chip
  --after {hard_reset,soft_reset,no_reset}, -a {hard_reset,soft_reset,no_reset}
                        What to do after esptool.py is finished
  --no-stub             Disable launching the flasher stub, only talk to ROM
                        bootloader. Some features will not be available.
  --trace, -t           Enable trace-level output of esptool.py interactions.
  --override-vddsdio [{1.8V,1.9V,OFF}]
                        Override ESP32 VDDSDIO internal voltage regulator (use
                        with care)
</pre>

## Notes

<code>&#126;/esp/esp-idf/components/console/commands.c</code> seems related to <code>&#126;/esp/esp-idf/examples/ayla_demo/main/command.c</code>.

<code>&#126;/esp/esp-idf/examples/system/console</code> seems related. See also [Console example](https://github.com/espressif/esp-idf/tree/master/examples/system/console) on Github. 

Use <code>esp_console_cmd_register</code> to add commands. 

[Ayla White Box Agent User Guide](https://aylait.sharepoint.com/sites/eng/device/Shared%20Documents/Forms/AllItems.aspx?csf=1&e=1ah3r6&FolderCTID=0x01200035018376B736F7469262A6CA3CD80952&id=%2Fsites%2Feng%2Fdevice%2FShared%20Documents%2FEngineering%2FEngineering%20Devices%2FModule%20Software%2FAyla_Device_Agent%2Freleases%2Fada-1%2E3%2E8%2FAyla%20White%20Box%20Agent%20With%20ESP32%20User%20Guide%20-%20DRAFT%2Epdf&parent=%2Fsites%2Feng%2Fdevice%2FShared%20Documents%2FEngineering%2FEngineering%20Devices%2FModule%20Software%2FAyla_Device_Agent%2Freleases%2Fada-1%2E3%2E8)
