#!/bin/bash

TELEGRAM_API="https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage"

# Base names for containers
CMS_PREFIX="cms-b80ow4gcgs4k44g4ck4kgcow"
DB_PREFIX="db-b80ow4gcgs4k44g4ck4kgcow"

# Status file location
STATUS_FILE_CMS="$(dirname "$0")/cms_status.txt"
STATUS_FILE_DB="$(dirname "$0")/db_status.txt"
LOG_FILE="/home/rita/container_statuses/cron.log"

# Function to make Telegram API request
make_telegram_request() {
    local message="$1"
    local response
    
    # Log attempt
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Sending Telegram message: $message" >> "$LOG_FILE"
    
    response=$(curl -s -X POST "$TELEGRAM_API" \
        -d chat_id="${TELEGRAM_CHAT_ID}" \
        -d text="<b>[Container Status]:</b>${message}" \
        -d parse_mode="HTML")
    
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Telegram response: $response" >> "$LOG_FILE"
    echo "$response"
}


# Function to send Telegram notification
send_telegram_notification() {
    local message="$1"
    local response
    
    # First attempt
    response=$(make_telegram_request "$message")
    
    # If failed, retry after delay
    if ! echo "$response" | grep -q '"ok":true'; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] First attempt failed, retrying..." >> "$LOG_FILE"
        sleep 1
        make_telegram_request "$message"
    fi
}


# Function to get CMS status
get_cms_status() {
    if [ -f "$STATUS_FILE_CMS" ]; then
        cat "$STATUS_FILE_CMS"
    fi
}

# Function to save CMS status
save_cms_status() {
    local status="$1"
    echo "$status" > "$STATUS_FILE_CMS"
}

# Function to get DB status
get_db_status() {
    if [ -f "$STATUS_FILE_DB" ]; then
        cat "$STATUS_FILE_DB"
    fi
}

# Function to save DB status
save_db_status() {
    local status="$1"
    echo "$status" > "$STATUS_FILE_DB"
}

# Function to check container status
check_container() {
    local container_name="$1"
    local container_type="$2"
    
    # Get current status using Docker health check
    local current_status="stopped"
    if docker ps --format '{{.Names}}' | grep -q "^${container_name}"; then
        # Get health status directly from Docker
        health_status=$(docker inspect --format='{{.State.Health.Status}}' "$container_name")
        
        case "$health_status" in
            "healthy")
                current_status="running"
                ;;
            "unhealthy")
                current_status="unhealthy"
                ;;
            "starting")
                current_status="starting"
                ;;
            *)
                current_status="unknown"
                ;;
        esac
    fi
    
    # Get previous status
    local previous_status=""
    case "$container_type" in
        "cms")
            previous_status=$(get_cms_status)
            ;;
        "db")
            previous_status=$(get_db_status)
            ;;
    esac
    
    # Compare and notify if different
    if [ "$current_status" != "$previous_status" ]; then
        local message=""
        case "$container_type" in
            "cms")
                message="Strapi container status changed: <b>${previous_status}</b> → <b>${current_status}</b>"
                save_cms_status "$current_status"
                ;;
            "db")
                message="Database container status changed: <b>${previous_status}</b> → <b>${current_status}</b>"
                save_db_status "$current_status"
                ;;
        esac
        send_telegram_notification "$message"
    else
        case "$container_type" in
            "cms")
                message="Strapi container status unchanged: <b>${current_status}</b>"
                ;;
            "db")
                message="Database container status unchanged: <b>${current_status}</b>"
                ;;
        esac
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] $message"
    fi
}

# Main execution
echo "Checking containers..."
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Running as user: $(whoami)" >> "$LOG_FILE"

# Find and check CMS container
CMS_CONTAINER=$(docker ps --format '{{.Names}}' | grep "^${CMS_PREFIX}")
if [ -n "$CMS_CONTAINER" ]; then
    echo "Found CMS container: $CMS_CONTAINER"
    check_container "$CMS_CONTAINER" "cms"
else
    echo "CMS container not found"
    if [ "$(get_previous_status "${CMS_PREFIX}")" != "stopped" ]; then
        send_telegram_notification "⚠️ CMS container not found!"
        save_status "${CMS_PREFIX}" "stopped"
    fi
fi

# Find and check DB container
DB_CONTAINER=$(docker ps --format '{{.Names}}' | grep "^${DB_PREFIX}")
if [ -n "$DB_CONTAINER" ]; then
    echo "Found DB container: $DB_CONTAINER"
    check_container "$DB_CONTAINER" "db"
else
    echo "DB container not found"
    if [ "$(get_previous_status "${DB_PREFIX}")" != "stopped" ]; then
        send_telegram_notification "⚠️ Database container not found!"
        save_status "${DB_PREFIX}" "stopped"
    fi
fi
