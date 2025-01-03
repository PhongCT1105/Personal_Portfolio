FROM node:22-alpine

# Install curl
RUN apk add --no-cache curl

# Set the working directory
WORKDIR /app/

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . ./

# Expose the port for development
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]
