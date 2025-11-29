---
title: Fog
---

I am a core contributor to [Fog](http://fog.io/), a Ruby library for talking to various cloud providers in a consistent way. Fog abstracts away the differences between AWS, Google Cloud, Rackspace, and others, giving you a unified interface for provisioning servers, managing storage, and working with cloud resources. The library works at multiple levels—high-level collections for common tasks, low-level requests for provider-specific features, and mocks for testing without actually spinning up expensive infrastructure. It's designed to reduce vendor lock-in and make switching between cloud providers less painful.

My contributions have waned in recent years, but I wrote the original implementations for a few fog providers, including [fog-google](https://github.com/fog/fog-google). The project has since moved toward a modular architecture with provider-specific gems, which makes sense for reducing dependency bloat. Fog is actively maintained with semantic versioning, and the core abstraction—making clouds easier to work with—remains relevant even as the cloud landscape evolves. It's one of those infrastructure tools that quietly powers a lot of Ruby applications without much fanfare.
