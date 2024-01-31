FROM node:21.1-alpine3.17 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.25.3-alpine3.18
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1

#docker container rm -f app-w3
#docker image rm -f app-w3:latest

#docker build . -t app-w3:latest
#docker container run -d --name app-w3 --env-file .env -p 3000:3000 app-w3:latest