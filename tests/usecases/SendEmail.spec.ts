import { SendEmail, type SendEmailParams } from '@/usecases'

describe('SendEmail Usecase', () => {
  let gatewayMock: { send: jest.Mock }
  let sendMail: SendEmail
  const mockParams: SendEmailParams = {
    doctor: {
      name: 'Dr. John',
      email: 'john@example.com'
    },
    patient: {
      name: 'Jane Doe'
    },
    date: '2024-01-01',
    startTime: '10:00',
    endTime: '10:30'
  }

  beforeEach(() => {
    gatewayMock = {
      send: jest.fn()
    }
    sendMail = new SendEmail(gatewayMock)
  })

  test('Should call gateway with correct parameters', async () => {
    await sendMail.execute(mockParams)

    expect(gatewayMock.send).toHaveBeenCalledWith(
      'john@example.com',
      'Health&Med - Nova consulta agendada',
      expect.any(String),
      expect.any(String)
    )
    expect(gatewayMock.send).toHaveBeenCalledTimes(1)
  })

  test('Should throw an error if gateway fails', async () => {
    gatewayMock.send.mockRejectedValueOnce(new Error('Gateway Error'))
    await expect(sendMail.execute(mockParams)).rejects.toThrow('Gateway Error')
  })
})
