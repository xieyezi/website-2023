#!/bin/bash

docker stop profile-container
docker rm profile-container
docker rmi profile-image
docker image build -t profile-image:latest .
docker run -p 80:80 -d --name profile-container profile-image:latest