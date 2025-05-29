#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Print a message to the console
echo "🚀 Starting hueneu studio website..."

# Navigate to the project directory if the script is not already there
# Assuming the script is in the root of the project
# cd /path/to/your/project # Uncomment and set this if your script is elsewhere

# Install dependencies
# Check for package-lock.json, yarn.lock, or pnpm-lock.yaml to use the correct package manager
if [ -f "pnpm-lock.yaml" ]; then
  echo "Found pnpm-lock.yaml, installing dependencies with pnpm..."
  pnpm install
elif [ -f "yarn.lock" ]; then
  echo "Found yarn.lock, installing dependencies with yarn..."
  yarn install
else
  echo "Found package-lock.json or no lockfile, installing dependencies with npm..."
  npm install
fi

# Build the SvelteKit application
echo "
🏗️ Building the application..."
if [ -f "pnpm-lock.yaml" ]; then
  pnpm run build
elif [ -f "yarn.lock" ]; then
  yarn run build
else
  npm run build
fi

# Run the SvelteKit application preview server on port 9000
# The 'preview' script is typically defined in package.json by SvelteKit
# We pass --port 9000 to ensure it runs on the specified port.
# The extra '--' is used to pass arguments to the script being run by npm/pnpm/yarn.
echo "
🌐 Launching the application on http://localhost:9000"
if [ -f "pnpm-lock.yaml" ]; then
  pnpm run preview -- --port 9000
elif [ -f "yarn.lock" ]; then
  yarn run preview -- --port 9000
else
  npm run preview -- --port 9000
fi

# The script will keep running here as the server starts
