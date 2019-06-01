FROM node:8.11.4

RUN mkdir /app
WORKDIR /app

COPY . .
RUN yarn build

CMD ["yarn", "serve", "-s", "build", "-p", "3000"]
