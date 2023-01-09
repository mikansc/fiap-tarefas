FROM node:18.12.1-alpine

WORKDIR /app

COPY ./package.json .

RUN yarn install --frozen-lockfile

COPY . .

ARG CONN_STRING
ARG SECRECT_KEY

ENV DB_CONNECTION_STRING=${CONN_STRING}
ENV MY_SECRET_KEY=${SECRECT_KEY}

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]