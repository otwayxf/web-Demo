# node 8 lts
# FROM node:8 AS build
FROM nginx:stable

# Install global packages
# RUN npm i pm2 -g

# set nodes-sass mirror
# RUN yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
# RUN npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass

# Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# Install app dependencies
# COPY ./package.json ./yarn.lock /usr/src/app/
# RUN yarn install --production

# Copy app bundle files
# RUN mkdir -p /usr/src/app/dist
# WORKDIR /usr/src/app/dist
# COPY ./dist/ /usr/src/app/dist/

# Copy PM2 configuration file
# COPY ./pm2.config.js /usr/src/app/

# Copy enviroment configuration files
# COPY ./config/env.js ./config/paths.js /usr/src/app/config/
# COPY ./.env* /usr/src/app/

# nginx
# FROM nginx:stable

# move dist
COPY ./dist/ /usr/share/nginx/html/
# nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
