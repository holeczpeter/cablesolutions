#!/usr/bin/env sh

set -e

#DEPLOYMENT_MESSAGE
DEPLOYMENT_MESSAGE='New Build'

#build
npm run build

#deploy.yml 
mkdir -p dist/.github/workflows
cp .github/workflows/deploy.yml dist/.github/workflows/deploy.yml

#commit
cd dist
git init
git add -A
git commit -m "$DEPLOYMENT_MESSAGE"
git push -f https://github.com/holeczpeter/holeczpeter.git main:gh-pages
cd -