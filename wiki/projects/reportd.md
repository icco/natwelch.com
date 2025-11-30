---
title: ReportD
---

ReportD is a service for receiving browser security and performance reports. If you use [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy), [NEL](https://www.w3.org/TR/network-error-logging/), [HPKP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Public-Key-Pins), [Expect-CT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT) or other tools that support the [Web Reporting API](https://www.w3.org/TR/reporting/), you can use this as a target. Instead of sending violation reports to some external service, you point your apps at reportd and keep the data on your own infrastructure. It's the kind of tool you set up once and forget about until you actually need to debug something.

You send reports to `reportd.natwelch.com/reports/$servicename` for security issues and `/analytics/$servicename` for web vitals. The code lives at [github.com/icco/reportd](https://github.com/icco/reportd). The whole thing is designed to be a lightweight receiver. There are no fancy dashboards or complex analytics, just a reliable endpoint that captures what your browsers are reporting. You can see the data at [reportd.natwelch.com](https://reportd.natwelch.com/).
