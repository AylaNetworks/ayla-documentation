---
title: Packages
layout: notes.html
a: block
---

Everything in Debian is a package. See [Debian Apt](https://wiki.debian.org/Apt) and [Raspbian Apt](https://www.raspberrypi.org/documentation/linux/software/apt.md). There are over 29,000 packages available for Debian (2018).

* <a href="https://en.wikipedia.org/wiki/APT_(Debian)">apt</a> (Advanced Package Tool) is a set of CLI tools for managing Debian packages (e.g. installation and dependency resolution).
* <a href="https://en.wikipedia.org/wiki/Dpkg">dpkg</a> does the actual work underneath <code>apt</code>.
* <a href="https://en.wikipedia.org/wiki/Aptitude_(software)">aptitude</a> is a [TUI](https://en.wikipedia.org/wiki/Text-based_user_interface) built on top of <code>apt</code>. It is built with the [ncurses](https://en.wikipedia.org/wiki/Ncurses) library.

<code>apt</code> tools leverage configuration files in <code>/etc/apt</code>.

Here is <code>/etc/apt/sources.list</code>:

<pre>
eb http://raspbian.raspberrypi.org/raspbian/ stretch main contrib non-free rpi
# Uncomment line below then 'apt-get update' to enable 'apt-get source'
#deb-src http://raspbian.raspberrypi.org/raspbian/ stretch main contrib non-free rpi
</pre>

See [Debian Packages](https://www.debian.org/distrib/packages) and [Debian Policy Manual](https://www.debian.org/doc/debian-policy/).

|Name|Description|
|-|-|
|[bison](https://packages.debian.org/stretch/bison)|YACC-compatible parser generator|
|[flex](https://packages.debian.org/stretch/flex)|Fast lexical analyzer generator|
|[gcc](https://packages.debian.org/stretch/gcc)|GNU C compiler|
|[git](https://packages.debian.org/stretch/git)|Fast, scalable, distributed revision control system|
|[gperf](https://packages.debian.org/stretch/gperf)|Perfect hash function generator|
|[libffi-dev](https://packages.debian.org/stretch/libffi-dev)|Foreign Function Interface library (development files)|
|[libncurses-dev](https://packages.debian.org/stretch/libncurses-dev)|Virtual package for ncurses|
|[make](https://packages.debian.org/stretch/make)|Utility for directing compilation|
|[python](https://packages.debian.org/stretch/python)|Interactive high-level object-oriented language|
|[python-cryptography](https://packages.debian.org/stretch/python-cryptography)|Python library exposing cryptographic recipes and primitives|
|[python-future](https://packages.debian.org/stretch/python-future)|Single-source support for Python 3 and 2|
|[python-pip](https://packages.debian.org/stretch/python-pip)|Python package installer|
|[python-pyparsing](https://packages.debian.org/stretch/python-pyparsing)|Python parsing module|
|[python-serial](https://packages.debian.org/stretch/python-serial)|Module encapsulating access for the serial port|
|[python-setuptools](https://packages.debian.org/stretch/python-setuptools)|Extensions to the python-distutils for large or complex distributions.|
|[wget](https://packages.debian.org/stretch/wget)|Retrieves files from the web via HTTP(s) and FTP|
