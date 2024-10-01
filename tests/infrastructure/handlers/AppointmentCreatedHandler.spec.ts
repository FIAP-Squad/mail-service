import { AppointmentCreatedHandler } from '@/infrastructure'
import { type ISendEmail } from '@/usecases'

describe('AppointmentCreatedHandler', () => {
  let sendMailUseCaseMock: ISendEmail
  let appointmentCreatedHandler: AppointmentCreatedHandler
  let eventMock: any

  beforeEach(() => {
    sendMailUseCaseMock = {
      execute: jest.fn()
    }

    appointmentCreatedHandler = new AppointmentCreatedHandler(sendMailUseCaseMock)

    eventMock = {
      doctor: {
        name: 'Dr. John',
        email: 'john@example.com'
      },
      patient: {
        name: 'Jane Doe'
      },
      availability: {
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '10:30'
      }
    }
  })

  test('Should call usecase execute with correct event', async () => {
    await appointmentCreatedHandler.handle(eventMock)
    expect(sendMailUseCaseMock.execute).toHaveBeenCalledWith(eventMock)
    expect(sendMailUseCaseMock.execute).toHaveBeenCalledTimes(1)
  })

  test('Should handle error if usecase throws', async () => {
    const error = new Error('Usecase failed')
    jest.spyOn(sendMailUseCaseMock, 'execute').mockRejectedValueOnce(error)
    const stdoutSpy = jest.spyOn(process.stdout, 'write').mockImplementation()

    await appointmentCreatedHandler.handle(eventMock)
    expect(stdoutSpy).toHaveBeenCalledWith(`Error: ${error.message}, Stack: ${error.stack}`)
    expect(sendMailUseCaseMock.execute).toHaveBeenCalledWith(eventMock)
    stdoutSpy.mockRestore()
  })
})
