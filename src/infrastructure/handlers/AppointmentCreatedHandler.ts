import { type Handler } from '@/infrastructure'
import { type ISendEmail } from '@/usecases'

export class AppointmentCreatedHandler implements Handler {
  constructor (private readonly _usecase: ISendEmail) { }
  async handle (event: any): Promise<void> {
    try {
      await this._usecase.execute(event)
    } catch (error) {
      process.stdout.write(`Error: ${error.message}, Stack: ${error.stack}`)
    }
  }
}
