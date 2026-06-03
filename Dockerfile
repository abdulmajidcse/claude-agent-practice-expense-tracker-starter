# Development image for the Vite + React expense tracker
FROM node:22-alpine

WORKDIR /app

# Install dependencies first to leverage Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source
COPY . .

EXPOSE 5173

# Bind to 0.0.0.0 so the dev server is reachable from outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
