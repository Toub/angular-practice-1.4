#!/bin/bash

# build container
docker build -t="toubiweb/npm-proxy" -f=./dockerfiles/npm-proxy.dockerfile .
