# Use official Node.js image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the React app
COPY . .
RUN npm run build

# Use a lightweight server to serve the React build
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
