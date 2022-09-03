FROM node:alpine as base

RUN apk add --no-cache bash wait4ports

WORKDIR /app
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENTRYPOINT [ "bash", "entry-point.sh" ]