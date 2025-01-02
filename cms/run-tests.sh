#!/bin/bash

# Constants
HEALTH_CHECK_URL="http://localhost:1337/_health"
API_COLLECTION_PATH="../bruno-church-api-collection"
WAIT_FOR_START=20
MAX_RETRIES=30
RETRY_INTERVAL=4

# Function to run tests based on environment
run_tests() {
    echo "Running tests in $NODE_ENV mode..."
    cd $API_COLLECTION_PATH
    
    if [ "$NODE_ENV" == "development" ]; then
        bru run --env local-environment
    elif [ "$NODE_ENV" == "production" ]; then
        bru run --env prod-environment
    else
        echo "NODE_ENV is not set or has an invalid value. Please set it to 'development' or 'production'."
        exit 1
    fi
}

# Function to check health container
check_health() {
    local retry_count=0
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        if curl -f $HEALTH_CHECK_URL &>/dev/null; then
            echo "Health check passed"
            return 0
        fi
        
        echo "Waiting for service to be healthy... (Attempt $((retry_count + 1))/$MAX_RETRIES)"
        sleep $RETRY_INTERVAL
        retry_count=$((retry_count + 1))
    done
    
    echo "Health check failed after $MAX_RETRIES attempts"
    return 1
}

# Main execution
echo "Current NODE_ENV: $NODE_ENV"

if [ "$1" == "docker" ]; then
    echo "Docker mode detected, performing health check..."
    sleep $WAIT_FOR_START
    if check_health; then
        run_tests
    else
        exit 1
    fi
else
    run_tests
fi
