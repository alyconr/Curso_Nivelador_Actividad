FROM node:14
WORKDIR /usr/src/app
COPY package*.json cosway.js ./
RUN npm install
EXPOSE 8001
CMD ["node" , "cosway.js"]


