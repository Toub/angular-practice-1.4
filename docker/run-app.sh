#!/bin/bash

set -e
set -x

LOCAL_DOCKER_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# create and run containers environment
docker-compose --project toubiweb/angular-practice-1.4-dev --file $LOCAL_DOCKER_DIR/compose/dev.docker-compose.yml up -d

# enter to container
docker exec -it tb_tpa_app bash

