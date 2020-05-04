---
title: Using BLE to set up Wi-Fi for ESP32
layout: site.html
---

<span style="font-size:90%;">By Steve Grau on May 5, 2020</span>

Replace with your text. 

___

Here are some tips:

1. Type your text above the three underscores.
1. Use the examples below as needed. Leave them. I will delete them when I edit your text.
1. If you need to add a diagram or other image, just type "Insert Image Here" on a line by itself. I will help you insert the image later. 
1. If you need to divide your document with headings, use Level 3 headings first. If you really need to group Level 3 headings, then use Level 2 headings. If you really need to group Level 2 headings, then use Level 1 headings. 
1. If needed, I will generate a "page" sidebar on the right side of the page.

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Heading 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is a link to a [Ubuntu Docker image](https://hub.docker.com/_/ubuntu).

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

1. Create an `esp` directory, and change directory:
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