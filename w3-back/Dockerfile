FROM node:21.1-alpine3.17
WORKDIR /api
COPY package*.json ./
RUN npm install --prod
COPY ./src ./src
EXPOSE 3001
CMD ["node", "./src/index.js"]

HEALTHCHECK CMD curl --fail http://localhost:3001 || exit 1

#docker container rm -f api-w3
#docker image rm -f api-w3:latest

#docker build . -t api-w3:latest
#docker container run -d --name api-w3 --env-file .env -p 3001:3001 api-w3:latest