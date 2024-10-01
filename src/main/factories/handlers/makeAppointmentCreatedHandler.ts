import { type Handler, AppointmentCreatedHandler } from '@/infrastructure'
import { MailGateway } from '@/infrastructure/gateways/MailGateway'
import { SendMail } from '@/usecases'

export const makeAppointmentCreatedHandler = (): Handler => {
  const gateway = new MailGateway()
  const usecase = new SendMail(gateway)
  return new AppointmentCreatedHandler(usecase)
}
