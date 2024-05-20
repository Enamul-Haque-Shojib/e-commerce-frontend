FROM node:alpine AS builder

ENV NODE_ENV production

WORKDIR /src

COPY ./package.json ./
RUN npm install

COPY . .

RUN npm run build


CMD ["npm", "start"]


