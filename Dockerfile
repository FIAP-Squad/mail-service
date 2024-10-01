FROM node:18
WORKDIR /usr/src/mail-service
COPY mail-service/package*.json ./
RUN npm i
COPY mail-service/ .
RUN npm run build
RUN chmod +x ./start.sh
CMD ["./start.sh"]