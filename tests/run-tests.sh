#!/bin/bash

# Constants
DOCKER_FRONT_URL="http://frontend:3000"
BRUNO_TESTS_PATH="bruno-tests"
BRUNO_FRONTEND_COLLECTION="bruno-frontend-collection"
BRUNO_CMS_COLLECTION="bruno-cms-collection"
DOCKER_CMS_HEALTHCKECK_URL="http://cms:1337/_health"
PLAYWRIGHT_STRAPI_TEST="strapi-admin-ui-tests.spec.ts"
WAIT_FOR_START=30
MAX_RETRIES=30
RETRY_INTERVAL=5

# Function to check health frontend container
check_frontend_health() {
    local retry_count=0
    local response status_code content_type content_type_lower
    local curl_exit_code

    while [ $retry_count -lt $MAX_RETRIES ]; do
        response=$(curl -s -I -o /dev/null -w "%{http_code},%{content_type}" -m 10 "$DOCKER_FRONT_URL")
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

# Function to check cms health container
check_cms_health() {
    local retry_count=0
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        if curl -f $DOCKER_CMS_HEALTHCKECK_URL &>/dev/null; then
            echo "Health check passed"
            return 0
        fi
        
        echo "Waiting for container to be healthy... (Attempt $((retry_count + 1))/$MAX_RETRIES)"
        sleep $RETRY_INTERVAL
        retry_count=$((retry_count + 1))
    done
    
    echo "Health check failed after $MAX_RETRIES attempts"
    return 1
}

# Function to run frontend tests based on environment
run_frontend_tests() {
    cd $BRUNO_TESTS_PATH
    
    if [ "$1" == "docker" ]; then
        echo "Running frontend tests in docker mode..."
        bru run $BRUNO_FRONTEND_COLLECTION --env docker-environment
        cd ../
        npx playwright test --grep-invert $PLAYWRIGHT_STRAPI_TEST --project=docker
    elif [ "$NODE_ENV" == "development" ]; then
        echo "Running frontend tests in $NODE_ENV mode..."
        bru run $BRUNO_FRONTEND_COLLECTION --env local-environment
        cd ../
        npx playwright test --grep-invert $PLAYWRIGHT_STRAPI_TEST --project=local
    elif [ "$NODE_ENV" == "production" ]; then
        echo "Running frontend tests in $NODE_ENV mode..."
        NODE_OPTIONS=--dns-result-order=ipv4first npx -y --package @usebruno/cli bru run $BRUNO_FRONTEND_COLLECTION --env local-environment # because containers use localhost
        cd ../
        npx playwright test --grep-invert $PLAYWRIGHT_STRAPI_TEST --project=docker
    else
        echo "NODE_ENV is not set or has an invalid value. Please set it to 'development' or 'production'."
        exit 1
    fi
}

# Function to run cms tests based on environment
run_cms_tests() {
    cd $BRUNO_TESTS_PATH
    
    if [ "$1" == "docker" ]; then
        echo "Running cms tests in docker mode..."
        bru run $BRUNO_CMS_COLLECTION --env docker-environment
        cd ../
        npx playwright test $PLAYWRIGHT_STRAPI_TEST --project=docker
    elif [ "$NODE_ENV" == "development" ]; then
        echo "Running cms tests in $NODE_ENV mode..."
        bru run $BRUNO_CMS_COLLECTION --env local-environment
        cd ../
        npx playwright test $PLAYWRIGHT_STRAPI_TEST --project=local
    elif [ "$NODE_ENV" == "production" ]; then
        echo "Running cms tests in $NODE_ENV mode..."
        NODE_OPTIONS=--dns-result-order=ipv4first npx -y --package @usebruno/cli bru run $BRUNO_CMS_COLLECTION --env local-environment # because containers use localhost
        cd ../
        npx playwright test $PLAYWRIGHT_STRAPI_TEST --project=docker
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
    if check_frontend_health; then
        run_frontend_tests "$1"
    fi
    if check_cms_health; then
        run_cms_tests "$1"
    else
        exit 1
    fi
else
    run_frontend_tests "$1"
    run_cms_tests "$1"
fi
