import env from '@/main/config/env'
import nodemailer from 'nodemailer'

export type SendEmailParams = {
  to: string
  subject: string
  text: string
  html: string
}

export class EmailAdapter {
  private readonly user: string = env.EMAIL_CLIENT.EMAIL_USERNAME
  private readonly pass: string = env.EMAIL_CLIENT.EMAIL_PASSWORD

  private _setup (): any {
    return nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: this.user,
        pass: this.pass
      }
    })
  }

  async send ({ to, subject, text, html }: SendEmailParams): Promise<void> {
    const sender = this._setup()
    await sender.sendMail({
      from: this.user,
      to,
      subject,
      text,
      html
    })
  }
}

export const emailAdapter = new EmailAdapter()
