---
title: File System
layout: notes.html
b: block
---

See [File System Hierarchy Standard](https://wiki.debian.org/FilesystemHierarchyStandard).

See [Linux File Hierarchy Structure](https://www.geeksforgeeks.org/linux-file-hierarchy-structure/)

See [Linux Directory Structure and File System Hierarchy](https://www.linuxtrainingacademy.com/linux-directory-structure-and-file-system-hierarchy/).

|Top-level Directory|Description|
|-|-|
|bin|Essential command executable binaries for all users (e.g., cat, ls, cp).|
|boot|Boot loader, kernels and initrd files.|
|dev|Device files.|
|etc|Host-specific system-wide configuration files.|
|home|User home directories.|
|lib|Libraries essential for the binaries in /bin/ and /sbin/.|
|lost+found|Some files and fragment that were recovered during the previous fsck.|
|media|Mount points for removable media such as CD-ROMs.|
|mnt|Temporarily mounted file systems.|
|opt|Optional or third party pre-compiled software.|
|proc|Virtual file system documenting kernel and process status with mostly text files (e.g. uptime, network).|
|root|Home directory for the root user.|
|run||
|sbin|System administrative binaries (e.g., init, route, ifup).|
|srv|Site-specific data which is served by the system.|
|sys|The filesystem for exporting kernel objects.|
|tmp|Temporary space, typically cleared on reboot.|
|usr|Secondary hierarchy for shareable, read-only data (formerly UNIX source repository, now UNIX system resources).|
|var|Variable data, most notably log files.|

Contents of <code>/home/pi</code>:

<pre>
$ ls -1
Desktop
Documents
Downloads
MagPi
Music
Pictures
Public
Templates
Videos
</pre>
