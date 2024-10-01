FROM node:18
WORKDIR /usr/src/mail-service
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN chmod +x ./start.sh
CMD ["./start.sh"]
EXPOSE 5050