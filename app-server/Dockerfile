FROM node:14.16.0-alpine3.10
# Create app directory
WORKDIR /usr/app
# Install app dependencies
COPY package.json .
RUN npm install --quiet

COPY . .