FROM node:18
WORKDIR /usr/src/email-service
COPY email-service/package*.json ./
RUN npm i
COPY email-service/ .
RUN npm run build
RUN chmod +x ./start.sh
CMD ["./start.sh"]