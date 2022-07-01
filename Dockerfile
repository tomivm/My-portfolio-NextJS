FROM node:16-alpine3.15

RUN mkdir -p /usr/app/

WORKDIR /usr/app

#copy from to
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

 CMD ["npm","start"]

