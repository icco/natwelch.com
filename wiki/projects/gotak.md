---
title: GoTak
---

[GoTak](https://gotak.app/) is a complete game server for playing [Tak](https://boardgamegeek.com/boardgame/197405/tak) online. Tak is an abstract strategy board game, and GoTak implements the full ruleset—road detection, piece limits, win conditions, the works. The server provides a REST API for creating games, joining matches, and making moves. It also includes a library for parsing and generating [PTN](https://web.archive.org/web/20190508064910/https://www.reddit.com/r/Tak/wiki/portable_tak_notation) (Portable Tak Notation), which is the standard format for recording Tak games.

The project includes three applications: a web server, CLI tool, and PTN parser. It's a production-ready platform for anyone wanting to host Tak games or build Tak-related applications. The code lives at [github.com/icco/gotak](https://github.com/icco/gotak), and the project solves the problem of having a robust, open-source Tak server that developers can actually use and extend.
