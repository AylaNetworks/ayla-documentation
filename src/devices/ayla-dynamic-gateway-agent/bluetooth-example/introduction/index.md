---
title: Introduction
layout: ayla-dynamic-gateway-agent.html
b: block
---

Notes:

1. [MovingTech 4.5W LED Bluetooth Bulb](https://www.amazon.com/gp/product/B01A5JX7BO) ($35.00)
1. [Oregon Scientific AW133 Grill Right Bluetooth BBQ Thermometer](https://www.amazon.com/Oregon-Scientific-AW133-Bluetooth-%20Thermometer/dp/B00JFSW0AQ) ($49.99)
1. [Nordic Semiconductor Multiprotocol Bluetooth LE Proprietary System-on-Chip](https://www.digikey.com/product-detail/en/nordic-semiconductor-asa/NRF52-%20DK/1490-1053-ND/5773879) ($39.00)

[How to setup Bluetooth on a Raspberry Pi 3](https://www.cnet.com/how-to/how-to-setup-bluetooth-on-a-raspberry-pi-3/)

<pre>
$ sudo bluetoothctl

# agent on

# default-agent

# scan on
Discovery started
[CHG] Controller B8:27:EB:80:7B:CC Discovering: yes
[NEW] Device E6:E5:C0:FA:A0:ED IDTQ133A
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -36
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -44
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -61
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -47
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -32
[CHG] Device E6:E5:C0:FA:A0:ED RSSI: -47
</pre>