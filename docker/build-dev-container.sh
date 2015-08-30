#!/bin/bash

LOCAL_DOCKER_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# build container
docker build -t="toubiweb/angular-practice-1.4-dev" -f=./dockerfiles/dev.dockerfile $LOCAL_DOCKER_DIR/..
