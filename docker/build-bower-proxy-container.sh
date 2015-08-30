#!/bin/bash

# build container
docker build -t="toubiweb/bower-proxy" -f=./dockerfiles/bower-proxy.dockerfile .
