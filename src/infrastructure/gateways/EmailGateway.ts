import { emailAdapter } from '@/main/adapters'

export interface IEmailGateway {
  send: (to: string, subject: string, text: string, html: string) => Promise<void>
}

export class EmailGateway implements IEmailGateway {
  async send (to: string, subject: string, text: string, html: string): Promise<void> {
    await emailAdapter.send({ to, subject, text, html })
  }
}
