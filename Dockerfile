FROM node:10

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV PORT 8080
EXPOSE $PORT

CMD [ "yarn", "run", "start" ]
