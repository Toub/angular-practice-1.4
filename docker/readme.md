jeromebouyer Web site
================

# Docker BUILD

## Dependencies

This project depends of the following containers:
- MongoDB 2.6: https://registry.hub.docker.com/_/mongo/

## Docker DEV

### Docker DEV build

Build the docker DEV image:

    docker build -t="toubiweb/jeromebouyer-web-dev" -f=docker/dockerfiles/dev.dockerfile .

### Docker DEV run


## Docker RUN build

Build the docker image from sources:  
    
    docker build -t="toubiweb/jeromebouyer-web-prod" .
    
## Docker test the image

    docker run --rm -i \
        --link=mongodb26_mongodb26_1:mongodb \
        -v /home/toub/Documents/dev/jeromebouyer/jeromebouyer-web/server/config/local.env.prod.local.js:/app/dist/server/config/local.env.js \
        -v /home/toub/Documents/dev/jeromebouyer/jeromebouyer-web/server/logs:/app/dist/server/logs \
        -v /home/toub/Documents/dev/jeromebouyer/jeromebouyer-web/server/uploads:/app/dist/server/uploads \
        -v /home/toub/Documents/dev/jeromebouyer/jeromebouyer-web/server/images:/app/dist/server/images \
        -p 8080:8080 \
        -t toubiweb/jeromebouyer-web-prod /bin/bash
    
# Docker RUN

## Docker compose

We use Docker compose to run the application: https://docs.docker.com/compose/cli/
    
## TODO / FIXME above

Jenkins build:

	DOCKER_HOST_IP=172.17.42.1

	BASE_DIR=/home/jenkins/share/jeromebouyer-web
	DEPLOY_DIR=$BASE_DIR/deploy

	rm -rf $DEPLOY_DIR
	mkdir -p $BASE_DIR

	cp -r "$WORKSPACE" $DEPLOY_DIR

	HOST_WORKING_DIR=/opt/docker/jenkins/share/jeromebouyer-web/deploy

	ssh docker@$DOCKER_HOST_IP -p 2002 "cd $HOST_WORKING_DIR && docker build -t="toubiweb/jeromebouyer-web" ."    
    
# Pre-requisites

Run a mongoDB image with shared directory:

    mkdir -p /opt/docker/mongodb/data

    docker run -d \
        -p 27019:27017 \
        -v /opt/docker/mongodb/data:/data/db \
        --name mongodb dockerfile/mongodb
   
# Test the image

    docker run --rm -i \
        --link=mongodb:mongodb \
        -p 8080:8080 \
        -t toubiweb/jeromebouyer-web /bin/bash
   
### Run application

Start a new container

    docker run -d \
        --link=mongodb:mongodb \
        -p 9212:8080 \
        --name jeromebouyer.com -t toubiweb/jeromebouyer-web

Jenkins start:

	DOCKER_HOST_IP=172.17.42.1
	CONTAINER_NAME="beta.jeromebouyer.com"

	BASE_DIR=/home/jenkins/share/jeromebouyer-web
	DEPLOY_DIR=$BASE_DIR/deploy

	set +e
	ssh docker@$DOCKER_HOST_IP -p 2002 "docker stop $CONTAINER_NAME"
	ssh docker@$DOCKER_HOST_IP -p 2002 "docker rm $CONTAINER_NAME"
	set -e

	ssh docker@$DOCKER_HOST_IP -p 2002 "docker run -d \
			--link=mongodb:mongodb \
			--volume=/opt/docker/jenkins/share/$CONTAINER_NAME/upload:/app/dist/server/upload \
			--volume=/opt/docker/jenkins/share/$CONTAINER_NAME/images:/app/dist/server/images \
			--volume=/opt/docker/jenkins/share/$CONTAINER_NAME/logs:/app/dist/server/logs \
			--volume=/opt/docker/jenkins/share/$CONTAINER_NAME/environment/production.js:/app/dist/server/config/environment/production.js \
			-p 9212:8080 \
			--name $CONTAINER_NAME -t toubiweb/jeromebouyer-web"

## Import / Export database

Export from NEW prod database on s1.toubiweb.com (throw SSH tunel):

    mongodump --host localhost:27020 -d jeromebouyerweb-prod -o ./dumps
    
Import to dev database:

    mongorestore --drop --db jeromebouyerweb-dev ./dumps/jeromebouyerweb-prod/