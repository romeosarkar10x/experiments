# Print version information
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Hugo version: $(hugo version)"
echo "Dart-sass version: $(sass --version)"

# Build site
hugo

# Install `Cloudflare Wrangler`
npm install -g wrangler

# Deploy to `Cloudflare Pages`
wrangler pages deploy ./public --project-name=expt --branch=main --commit-dirty=true
