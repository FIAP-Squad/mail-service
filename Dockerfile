FROM node:18
WORKDIR /usr/src/mail-service
COPY mail-service/package*.json ./
RUN npm i
COPY mail-service/ .
RUN npm run build
RUN npx prisma generate
ENV MYSQL_URL=mysql://root:root@db:3306/db
RUN chmod +x ./start.sh
CMD ["./start.sh"]