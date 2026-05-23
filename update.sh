#! /bin/zsh

set -ex

rm -rf package-lock.json dist .next .contentlayer

pnpm install
pnpm update
git add package* pnpm-lock.yaml
git diff --quiet --staged || git commit -m 'chore(deps): pnpm upgrade'

pnpm run lint
git add src
git diff --quiet --staged || git commit -m 'chore: lint'

pnpm run build

git add public
git diff --quiet --staged || git commit -m 'chore: update build artifacts'

git push -u
