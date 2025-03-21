FROM node:22-alpine

WORKDIR /usr/src/app

COPY ./package.json ./package.json
COPY ./packages ./packages
COPY ./turbo.json ./turbo.json
COPY ./apps/ws ./apps/ws

RUN npm install
RUN npm run db:generate

EXPOSE 3001

CMD [ "npm", "run", "start:ws" ]