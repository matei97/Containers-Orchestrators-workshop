FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
RUN apk --no-cache add curl
COPY . .
EXPOSE 8080
CMD ["npm", "start"]