FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV NODE_ENV=production
ENV PORT 8080
EXPOSE $PORT

RUN yarn run build

CMD [ "yarn", "run", "start" ]
