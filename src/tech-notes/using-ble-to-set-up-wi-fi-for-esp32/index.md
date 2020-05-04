---
title: Using BLE to set up Wi-Fi for ESP32
layout: site.html
---

<span style="font-size:90%;">By Steve Grau on May 5, 2020</span>

# Heading 1

## Heading 2

This is a link: [ubuntu](https://hub.docker.com/_/ubuntu).

This is an unordered list:

* Red
* Yellow
* Blue

This is an ordered list:

1. Red
1. Yellow
1. Blue

This is a table:

|Name|Hex|RGB|
|-|-|-|
|Blue|0000FF|0,0,255|
|DarkSeaGreen|8FBC8F|143,188,143|

This is inline code: `apt install nano screen iputils-ping`. 

This is a code snippet:

```
function keydownListener(e) {
  if (e.keyCode === 9) {
    document.body.classList.add("tab-enabled");
    window.removeEventListener("keydown", keydownListener);
  }
}
```

This is an ordered list with code snippets:

1. Create an ```esp``` directory, and change directory:
    ```
    # mkdir esp
    # cd esp
    ```
1. Download ESP32 toolchain for Linux:
    ```
    # wget https://dl.espressif.com/dl/xtensa-esp32-elf-linux64-1.22.0-80-g6c4433a-5.2.0.tar.gz
    ```
1. Extract the archive file:
    ```
    # tar -xzf xtensa-esp32-elf-linux64-1.22.0-80-g6c4433a-5.2.0.tar.gz
    ```