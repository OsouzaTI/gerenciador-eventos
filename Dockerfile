FROM node:18

WORKDIR /usr/src/app
CMD [ "node", "server.js" ]

EXPOSE 80