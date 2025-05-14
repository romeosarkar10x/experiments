FROM debian:latest

ENV DART_SASS_VERSION="1.88.0"
ENV HUGO_VERSION="0.147.3"

RUN <<EOF
apt-get update && apt-get upgrade -y
apt-get install -y nodejs npm git wget
EOF

# Install `dart-sass`
RUN <<EOF
wget https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz
tar -xzf dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz
rm dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz
EOF

# Install `hugo`
RUN <<EOF
mkdir hugo
wget https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.tar.gz
tar -xzf hugo_${HUGO_VERSION}_linux-amd64.tar.gz -C hugo
rm hugo_${HUGO_VERSION}_linux-amd64.tar.gz
EOF

COPY entrypoint.sh entrypoint.sh