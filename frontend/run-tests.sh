#!/bin/bash

# Constants
HEALTH_CHECK_URL="http://localhost:3000"
API_COLLECTION_PATH="tests/bruno-frontend-collection/"
WAIT_FOR_START=30
MAX_RETRIES=30
RETRY_INTERVAL=5

# Function to check health container
check_health() {
    local retry_count=0
    local response status_code content_type content_type_lower
    local curl_exit_code

    while [ $retry_count -lt $MAX_RETRIES ]; do
        response=$(curl -s -I -o /dev/null -w "%{http_code},%{content_type}" -m 10 "$HEALTH_CHECK_URL")
        curl_exit_code=$?

        if [ $curl_exit_code -ne 0 ]; then
            echo "curl request failed with exit code $curl_exit_code"
            sleep $RETRY_INTERVAL
            retry_count=$((retry_count + 1))
            continue
        fi

        status_code=$(echo "$response" | cut -d',' -f1)
        content_type=$(echo "$response" | cut -d',' -f2)
        content_type_lower=$(echo "$content_type" | tr '[:upper:]' '[:lower:]')

        if [[ "$status_code" -eq 200 ]] && [[ "$content_type_lower" == text/html* ]]; then
            echo "Health check passed"
            return 0
        else
            echo "Waiting for container to be healthy... (Attempt $((retry_count + 1))/$MAX_RETRIES)"
            sleep $RETRY_INTERVAL
            retry_count=$((retry_count + 1))
        fi
    done

    echo "Health check failed after $MAX_RETRIES attempts"
    return 1
}

# Function to run tests based on environment
run_tests() {
    echo "Running tests in $NODE_ENV mode..."
    cd $API_COLLECTION_PATH
    
    if [ "$NODE_ENV" == "development" ]; then
        npm run bru-local
      # npx playwright test
    elif [ "$NODE_ENV" == "production" ]; then
        npm run bru-prod
    else
        echo "NODE_ENV is not set or has an invalid value. Please set it to 'development' or 'production'."
        exit 1
    fi
}

# Main execution
echo "Current NODE_ENV: $NODE_ENV"

if [ "$1" == "docker" ]; then
    echo "Docker mode detected, performing health check after $WAIT_FOR_START seconds..."
    sleep $WAIT_FOR_START
    if check_health; then
        run_tests
    else
        exit 1
    fi
else
    run_tests
fi
