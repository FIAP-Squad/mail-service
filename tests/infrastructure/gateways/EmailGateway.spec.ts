import { EmailGateway } from '@/infrastructure'

describe('EmailGateway', () => {
  let adapterMock: { send: jest.Mock }
  let emailGateway: EmailGateway

  beforeEach(() => {
    adapterMock = {
      send: jest.fn()
    }
    emailGateway = new EmailGateway()
    emailGateway.send = adapterMock.send
  })

  test('Should call adapter with correct parameters', async () => {
    const params = {
      to: 'john@example.com',
      subject: 'Subject Test',
      text: 'Plain text message',
      html: '<p>HTML message</p>'
    }

    await emailGateway.send(params.to, params.subject, params.text, params.html)

    expect(adapterMock.send).toHaveBeenCalledWith(params.to, params.subject, params.text, params.html)
    expect(adapterMock.send).toHaveBeenCalledTimes(1)
  })
})
