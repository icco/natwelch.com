---
title: recommend
---

[recommend](https://github.com/icco/recommender) is an AI-powered daily recommendation engine for movies and TV shows. It scans my Plex media library, fetches metadata from TMDb, then uses OpenAI to pick up to four movies and three TV shows worth watching based on viewing history. The suggestions show up in a small web UI with title, year, rating, genre, and runtime.

It runs on a cron schedule so there's always a fresh set of recommendations without having to think about it. Built with Go, Chi, GORM, SQLite, and deployed via Docker Compose.

Or at least that's the idea, it does not work at all.
