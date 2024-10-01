import { EmailAdapter } from '@/main/adapters'
import nodemailer from 'nodemailer'

jest.mock('nodemailer')

describe('EmailAdapter', () => {
  let emailAdapter: EmailAdapter
  let sendMailMock: jest.Mock
  let createTransportMock: jest.Mock

  beforeEach(() => {
    emailAdapter = new EmailAdapter()
    sendMailMock = jest.fn().mockResolvedValue(true)
    createTransportMock = nodemailer.createTransport as jest.Mock
    createTransportMock.mockReturnValue({ sendMail: sendMailMock })
  })

  test('Should throw error if sendMail fails', async () => {
    sendMailMock.mockRejectedValueOnce(new Error('Failed to send email'))
    const params = {
      to: 'john@example.com',
      subject: 'Test Subject',
      text: 'Plain text message',
      html: '<p>HTML message</p>'
    }

    await expect(emailAdapter.send(params)).rejects.toThrow('Failed to send email')
  })
})
