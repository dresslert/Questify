FROM node:20.17

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY questify-web/package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port and start application
EXPOSE 3000
CMD ["tail", "-f", "/dev/null"]
