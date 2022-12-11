#!/bin/bash

docker stop blog-container
docker rm blog-container
docker rmi blog-image
docker image build -t blog-image:1.0 .
docker run -p 80:80 -d --name blog-container blog-image:1.0