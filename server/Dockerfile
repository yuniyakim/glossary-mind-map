FROM node:21-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npm", "start"]
