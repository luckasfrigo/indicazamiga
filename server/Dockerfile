FROM node:8.11.4

RUN mkdir /app
WORKDIR /app

COPY ./package.json .
RUN yarn

COPY . .

CMD ["yarn", "start"]
