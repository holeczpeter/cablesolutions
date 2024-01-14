#!/usr/bin/env sh
set -e
#DEPLOYMENT_MESSAGE
DEPLOYMENT_MESSAGE='New Build'
#build
npm run build
#deploy.yml 
mkdir -p dist/.github/workflows
cp .github/workflows/publish.yml dist/.github/workflows/publish.yml
#commit
cd dist
git init
git add -A
git commit -m "$DEPLOYMENT_MESSAGE"
git push -f https://github.com/holeczpeter/cablesolutions.git main:gh-pages
cd -