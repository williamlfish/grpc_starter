#!/usr/bin/env bash
set -e 

GREEN='\033[0;32m'

NC='\033[0m' # No Color

colorP() { 
    printf "\n\n$GREEN $1 $NC \n\n" 
}

colorP 'installing all the things!!'

yarn


if test -f ".env"; then
    colorP "setting env from .env file"
    set -a; source .env
fi

if test -f "docker-compose.yaml"; then
    colorP "starting docker-compose"
    docker-compose up -d
fi


nodemon