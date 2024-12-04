# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code and build
COPY . .
RUN npm run build

# Use Nginx to serve the built app
FROM nginx:alpine

# Copy built files to Nginx's default HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Redirect logs and start the Nginx server
CMD ["sh", "-c", "ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log && nginx -g 'daemon off;'"]
