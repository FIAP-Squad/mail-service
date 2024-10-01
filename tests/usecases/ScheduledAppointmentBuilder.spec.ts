import { ScheduledAppointmentBuilder } from '@/usecases'

describe('ScheduledAppointmentBuilder', () => {
  const mockParams = {
    doctor: { name: 'Dr. John' },
    patient: { name: 'Jane Doe' },
    date: '2024-01-01',
    startTime: '10:00',
    endTime: '10:30'
  }

  test('Should generate correct plain text', () => {
    const plainText = ScheduledAppointmentBuilder.buildPlainText(mockParams)
    expect(plainText).toBe(`Olá, Dr. Dr. John!

Você tem uma nova consulta marcada!
Paciente: Jane Doe.
Data e horário: 2024-01-01 às 10:00 - 10:30.`)
  })

  test('Should generate correct HTML', () => {
    const htmlContent = ScheduledAppointmentBuilder.buildHTML(mockParams)
    expect(htmlContent).toContain('<p>Olá, Dr. Dr. John!</p>')
    expect(htmlContent).toContain('<p><strong>Paciente:</strong> Jane Doe</p>')
    expect(htmlContent).toContain('<p><strong>Data e horário:</strong> 2024-01-01 às 10:00 - 10:30</p>')
  })
})
