---
title: hayden
---

[Hayden](https://github.com/icco/hayden) is a web scraping tool that monitors websites for specific text and sends webhook notifications when it finds a match. Originally built to track PS5 availability during the shortage years, it automates the tedious task of manually checking websites for stock updates or content changes. You configure targets with the text you're looking for, and hayden scrapes the pages on a schedule and fires off webhooks when it spots what you want. It's the kind of tool you build when you're tired of refreshing retailer pages hoping for restock notifications.

Built in Go with Docker support, the project follows Go best practices and includes proper documentation. The architecture is straightforward—scraping modules handle the web requests, target management lets you configure what to watch, and webhook integration handles the notifications. While it started as a PS5 tracker, the design is generic enough for any monitoring use case: price tracking, content updates, or waiting for sold-out items to come back in stock. It's open source under MIT with about 80 commits of focused development.
