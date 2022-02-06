FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
# COPY tsconfig.json ./

RUN npm ci

COPY . .

RUN npm run build
