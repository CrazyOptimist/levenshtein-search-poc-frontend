# build stage
FROM node:14-alpine as build-frontend
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build --prod

# production stage
FROM nginx:alpine as production-frontend
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-frontend /app/build /usr/share/nginx/html
