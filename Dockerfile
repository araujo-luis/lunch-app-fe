FROM node:latest as build-app
WORKDIR /lunch-app-fe
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build-app /lunch-app-fe/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/