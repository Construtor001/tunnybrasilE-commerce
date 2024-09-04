FROM node:20.9.0

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . ./

CMD ["npm", "run", "dev"]