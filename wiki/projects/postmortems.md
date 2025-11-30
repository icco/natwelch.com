---
title: postmortems
---

I maintain two postmortem repositories. The original is by [Dan Luu](https://danluu.com/) at [danluu/post-mortems](https://github.com/danluu/post-mortems). I review and merge all suggestions to that. I then have a very simplistic website for easier searching hosted at [Postmortems.app](https://postmortems.app/). Both projects catalog and organize postmortems, making them searchable and analyzable for the SRE and DevOps communities to learn from past incidents at scale. Instead of postmortems being scattered across company blogs and documentation sites, this aggregates them into one place with structured metadata including categories, timestamps, and deeper analysis capabilities. The community contribution model means the collection keeps growing as people submit new postmortems.

The postmortems.app project includes both a browsing website and a command-line tool. The CLI supports extracting data, generating exports, validating entries, and creating new postmortem entries. The code lives at [icco/postmortems](https://github.com/icco/postmortems).
