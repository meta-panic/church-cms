#!/bin/bash

echo $NODE_ENV

# Check the value of NODE_ENV
if [ "$NODE_ENV" == "development" ]; then
    echo "Running in development mode..."
    npm run dev
# elif [ "$NODE_ENV" == "production" ]; then
#     echo "Running in production mode..."
#     npm run dev
else
    echo "NODE_ENV is not set or has an invalid value. Please set it to 'development' or 'production'."
    exit 1
fi
