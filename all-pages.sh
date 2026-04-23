#!/bin/bash
set -euo pipefail

BASE="https://natwelch.com"

{
  echo "$BASE"
  echo "$BASE/wiki"
  find wiki -name "*.md" | sort | while read -r file; do
    slug="${file#wiki/}"
    slug="${slug%.md}"
    echo "$BASE/wiki/$slug"
  done
} | jq -Rsc 'split("\n") | map(select(length > 0))'
