import { ScheduledAppointmentBuilder } from './ScheduledAppointmentBuilder'

export type SendEmailParams = {
  doctor: {
    name: string
    email: string
  }
  patient: {
    name: string
  }
  date: string
  startTime: string
  endTime: string
}

export interface ISendEmail {
  execute: (params: SendEmailParams) => Promise<void>
}

export class SendEmail implements ISendEmail {
  constructor (
    private readonly _gateway: { send: (to: string, subject: string, text: string, html: string) => Promise<void> }
  ) { }

  async execute (params: SendEmailParams): Promise<void> {
    const { doctor, patient, date, startTime, endTime } = params
    const subject = 'Health&Med - Nova consulta agendada'
    const text = ScheduledAppointmentBuilder.buildPlainText({ doctor, patient, date, startTime, endTime })
    const html = ScheduledAppointmentBuilder.buildHTML({ doctor, patient, date, startTime, endTime })
    await this._gateway.send(doctor.email, subject, text, html)
  }
}
