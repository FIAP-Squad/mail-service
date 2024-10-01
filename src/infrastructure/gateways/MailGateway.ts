import { emailAdapter } from '@/main/adapters'

export interface IMailGateway {
  send: (to: string, subject: string, text: string, html: string) => Promise<void>
}

export class MailGateway implements IMailGateway {
  async send (to: string, subject: string, text: string, html: string): Promise<void> {
    await emailAdapter.send({ to, subject, text, html })
  }
}
