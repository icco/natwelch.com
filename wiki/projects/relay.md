---
title: relay
---

[Relay](https://github.com/icco/relay) is a Discord bot service that enables webhook integration between web services and Discord. The concept is simple: you POST any JSON to the `/hook` endpoint, and relay formats it and sends it to Discord. This creates a bridge for getting notifications from external systems directly into Discord channels without manually checking those systems. Instead of building Discord integration into every service you run, you point them all at relay and let it handle the Discord side of things.

It's a focused, lightweight service that does one thing well. The `/hook` endpoint is flexible enough to handle various JSON payloads, making it useful for CI/CD notifications, monitoring alerts, or any automated workflow that needs to notify people in Discord. The project solves the common problem of reducing manual monitoring overhead by streaming updates directly to where your team already communicates.

I don't use this anymore, having migrated instead to [notifiarr](https://notifiarr.com/), which does similar things but in a much fully featured way.
