FROM node:16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
ENTRYPOINT ["tail", "-f", "/dev/null"]
