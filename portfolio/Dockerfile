# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files (including src/) into the container
COPY . .

# Build the Vite project
RUN npm run build

# Use Nginx to serve the built app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=0 /app/dist ./

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
