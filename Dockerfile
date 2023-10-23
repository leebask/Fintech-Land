FROM node:16.17-alpine as runner
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn

FROM runner as builder
WORKDIR /usr/src/app
COPY . .
# COPY .env.prod .env
RUN yarn
RUN yarn build-prod

FROM nginx:alpine
WORKDIR /etc/nginx
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY nginx .
ENV PORT=8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]