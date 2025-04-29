FROM node 
# se define una image base NODE

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . . 

EXPOSE 8080

CMD [ "npm", "start" ]