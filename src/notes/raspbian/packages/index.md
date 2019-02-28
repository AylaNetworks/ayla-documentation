---
title: Packages
layout: notes.html
b: block
---

Everything in Debian is a package. See [Debian Apt](https://wiki.debian.org/Apt) and [Raspbian Apt](https://www.raspberrypi.org/documentation/linux/software/apt.md).

* <a href="https://en.wikipedia.org/wiki/APT_(Debian)">apt</a> (Advanced Package Tool) is a set of CLI tools for managing Debian packages (e.g. installation and dependency resolution).
* <a href="https://en.wikipedia.org/wiki/Dpkg">dpkg</a> does the actual work underneath <code>apt</code>.
* <a href="https://en.wikipedia.org/wiki/Aptitude_(software)">aptitude</a> is a [TUI](https://en.wikipedia.org/wiki/Text-based_user_interface) built on top of <code>apt</code>. It is built with the [ncurses](https://en.wikipedia.org/wiki/Ncurses) library.

<code>apt</code> keeps a list of software sources on your Pi in a file at <code>/etc/apt/sources.list</code>. To upgrade the list before installing software, run <code>sudo apt update</code>. To see upgradable packages, run <code>apt list --upgradable</code>.

Below are several example packages. Search [Debian package directories](https://www.debian.org/distrib/packages#search_packages) and [Raspbian Repository](https://raspbian.org/RaspbianRepository) to find more.

<iframe 
  width="600" 
  height="600" 
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSthD3q1-45h5Lj42hITfslCTg7VPBdZrWEz9A296R5KAmDQq0TaNGBjaiv9E7l-PXUicnoIlzMja6X/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"> 
</iframe>
