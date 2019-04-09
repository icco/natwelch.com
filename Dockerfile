FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV PORT 8080
EXPOSE $PORT
ENV GITHUB_TOKEN

RUN yarn run build

CMD [ "yarn", "run", "start" ]
