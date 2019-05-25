---
title: Introduction
layout: ayla-proxy-server-2018-08.html
---

Deployed in your domain, and configured for your Ayla region and deployment type (e.g. US Dev), the <span style="color:red;">Ayla Proxy Server</span> accesses Ayla services on behalf of browser applications running in your domain that are prevented by [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) from accessing the Ayla REST API directly as depicted in the following diagram:

<a href="ayla-proxy-server-services.png"><img src="ayla-proxy-server-services.png" width="800"></a>

Ayla divides the world into three service regions: China (CN), Europe (EU), and United States (US). Each region includes an instance of the Ayla Cloud for field operations. The CN and US regions also include an instance each for development. That's a total of five Ayla Cloud instances. The following diagrams shows several instances of the Ayla Proxy Server deployed in domains across Ayla regions:

<a href="ayla-proxy-server-services-regions.png"><img src="ayla-proxy-server-services-regions.png" width="800"></a>
