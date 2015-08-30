# Pull base image.
FROM nodesource/jessie:0.10.36

MAINTAINER Nicolas Toublanc <n.toublanc@gmail.com>

ENV APT_PACKAGES ruby-compass ruby-sass libvips-dev wget gdebi vim xdg-utils

# install via APT (dev env: do not clean as we may want to install more packages manually later)
RUN apt-get update && \
    apt-get install -q -y $APT_PACKAGES

# upgrade npm
RUN npm install -g npm

ENV GLOBAL_NPM_PACKAGES bower gulp grunt-cli forever yo generator-gulp-angular generator-angular-fullstack

# install globally via npm
RUN npm install -g $GLOBAL_NPM_PACKAGES

# development mode
ENV NODE_ENV development

# define working directory (to build app)
WORKDIR /app/src

ENV APP_HOME /app/src
RUN adduser --disabled-password --gecos '' user
RUN adduser user sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN chown -R user "$APP_HOME"

USER user
RUN npm config set proxy http://npmproxy:8060/; npm config set https-proxy http://npmproxy:8060/; npm config set strict-ssl false

# define default command.
CMD /bin/bash

# Expose ports.
EXPOSE 9000