FROM node:14-alpine

WORKDIR /usr/src/app
RUN apk add --no-cache git

COPY .snyk package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile

COPY . .

ENV NODE_ENV=production
ENV PORT 8080
EXPOSE $PORT

RUN yarn run build

CMD [ "yarn", "run", "start" ]
