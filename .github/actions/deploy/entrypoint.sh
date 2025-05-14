#!/bin/sh

# Exit immediately if any command exits with a non-zero status
set -e

# Print version information
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Hugo version: $(hugo version)"
echo "Dart-sass version: $(sass --version)"

# Trust the current directory despite ownership differences
git config --global --add safe.directory $(pwd)

# Build site
hugo

# Install `Cloudflare Wrangler`
npm install -g wrangler

# Deploy to `Cloudflare Pages`
wrangler pages deploy ./public --project-name=expt --branch=main --commit-dirty=true
