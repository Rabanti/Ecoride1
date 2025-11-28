FROM node:22.19.0

WORKDIR /ECORIDE

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3307

CMD ["npm", "start"]
