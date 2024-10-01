import { type IBrokerAdapter } from '@/main/adapters'
import { makeAppointmentCreatedHandler } from '@/main/factories/handlers'

export default async (broker: IBrokerAdapter): Promise<void> => {
  await broker.subscribe('appointment-created', makeAppointmentCreatedHandler())
}
