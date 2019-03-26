FROM node:10-alpine

WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./
RUN npm install --only=production

COPY . .

ENV PORT 8080
EXPOSE $PORT

CMD [ "npm", "start" ]
