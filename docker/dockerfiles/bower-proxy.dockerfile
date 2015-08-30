# Pull base image.
FROM nodesource/jessie:0.10.36

MAINTAINER Nicolas Toublanc <n.toublanc@gmail.com>

ENV APT_PACKAGES ruby-compass ruby-sass libvips-dev wget gdebi vim xdg-utils

# install via APT (dev env: do not clean as we may want to install more packages manually later)
RUN apt-get update && \
    apt-get install -q -y $APT_PACKAGES

ENV GLOBAL_NPM_PACKAGES private-bower

# install globally via npm
RUN npm install -g $GLOBAL_NPM_PACKAGES

# define working directory
WORKDIR /app

ADD dockerfiles/bower-proxy.config.json /app/bower-proxy.config.json

# run proxy cache
CMD private-bower --config=/app/bower-proxy.config.json

# Expose ports.
EXPOSE 5678