# Pull base image.
FROM nodesource/jessie:0.10.36

MAINTAINER Nicolas Toublanc <n.toublanc@gmail.com>

ENV APT_PACKAGES ruby-compass ruby-sass libvips-dev wget gdebi vim xdg-utils

# install via APT (dev env: do not clean as we may want to install more packages manually later)
RUN apt-get update && \
    apt-get install -q -y $APT_PACKAGES

ENV GLOBAL_NPM_PACKAGES npm-proxy-cache

# install globally via npm
RUN npm install -g $GLOBAL_NPM_PACKAGES

# define working directory
WORKDIR /app

# 2 weeks = 1209600 seconds
ENV CACHE_EXPIRATION_TTL=1209600

# run proxy cache
CMD npm-proxy-cache --host 0.0.0.0 --port 8060 --storage=/app/npm-cache --ttl $CACHE_EXPIRATION_TTL --expired

# Expose ports.
EXPOSE 8060