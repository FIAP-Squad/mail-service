import { type Handler, AppointmentCreatedHandler } from '@/infrastructure'
import { EmailGateway } from '@/infrastructure/gateways/EmailGateway'
import { SendEmail } from '@/usecases'

export const makeAppointmentCreatedHandler = (): Handler => {
  const gateway = new EmailGateway()
  const usecase = new SendEmail(gateway)
  return new AppointmentCreatedHandler(usecase)
}
