FROM node:12 as react

# set working directory
WORKDIR /app

# add node_modules to PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

# install node_modules from scratch
RUN npm ci

COPY . ./

RUN npm run build

## Run 
FROM nginx:alpine

COPY --from=react /app/build /usr/share/nginx/html