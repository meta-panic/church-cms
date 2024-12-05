#!/bin/bash

echo $NODE_ENV

# Check the value of NODE_ENV
if [ "$NODE_ENV" == "develop" ]; then
    echo "Running in development mode..."
    npm run build
    npm run develop:watch
elif [ "$NODE_ENV" == "prod" ]; then
    echo "Running in production mode..."
    npm run build
    npm run start
else
    echo "NODE_ENV is not set or has an invalid value. Please set it to 'develop' or 'prod'."
    exit 1
fi
