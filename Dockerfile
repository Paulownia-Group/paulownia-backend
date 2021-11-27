FROM node:latest

COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
