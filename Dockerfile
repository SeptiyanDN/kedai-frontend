# Use Node.js image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Set environment variables
ENV PORT=3000

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
