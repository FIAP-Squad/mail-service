export default {
  PORT: process.env.PORT,
  RABBITMQ: {
    PROTOCOL: process.env.RABBITMQ_PROTOCOL,
    HOST_NAME: process.env.RABBITMQ_HOST_NAME,
    PORT: process.env.RABBITMQ_PORT,
    USERNAME: process.env.RABBITMQ_USERNAME,
    PASSWORD: process.env.RABBITMQ_PASSWORD
  },
  EMAIL_CLIENT: {
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
  }
}
