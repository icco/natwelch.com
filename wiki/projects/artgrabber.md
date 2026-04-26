---
title: artgrabber
---

[artgrabber](https://github.com/icco/artgrabber) is a Discord bot for art curation built around Dropbox. It monitors a designated Dropbox folder for new images—JPG, PNG, GIF, WebP, BMP—and automatically posts them into a Discord channel.

The voting mechanic is the interesting part: users react to each image with number emojis (1–5), and the bot copies images that receive votes back into a "wallpapers" subfolder in Dropbox. An SQLite database tracks what's already been posted so duplicates never appear. The net effect is a lightweight, crowd-curated wallpaper pipeline—drop images into a folder and the ones worth keeping bubble up through community reaction.

It's written in Go, runs in Docker, and is configured entirely through environment variables.
