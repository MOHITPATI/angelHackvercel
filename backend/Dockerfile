# # Use the official Node.js image
# FROM node:14

# # Create and set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose the port
# EXPOSE 5000

# # Start the backend server
# CMD ["node", "server.js"]

# Use the official Node.js image.
FROM node:22-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy application code.
COPY . .

# Start the application
CMD [ "node", "server.js" ]

# Expose the port the app runs on
EXPOSE 5000
