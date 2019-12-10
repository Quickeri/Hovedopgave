FROM node:13.2.0-slim

# build server
WORKDIR /app/server

COPY server/package*.json ./

RUN npm install --production

COPY server .

# build client
WORKDIR /app/client

COPY client/package*.json ./

RUN npm install --production

COPY client .

# outputs dist files to /app/server/dist
RUN npm run prod

WORKDIR /app

# move client output from /app/client/dist to /app/server/dist
RUN cp -a client/dist/. server/dist

# clean up client
RUN rm -rf ./client

# move to server folder location so paths resolve correctly in app
WORKDIR /app/server

CMD [ "node", "src/root.js" ]