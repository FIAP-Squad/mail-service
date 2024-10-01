// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ScheduledAppointmentBuilder {
  static buildPlainText ({ doctor, patient, date, startTime, endTime }: { doctor: { name: string }, patient: { name: string }, date: string, startTime: string, endTime: string }): string {
    return `Olá, Dr. ${doctor.name}!

Você tem uma nova consulta marcada!
Paciente: ${patient.name}.
Data e horário: ${date} às ${startTime} - ${endTime}.`
  }

  static buildHTML ({ doctor, patient, date, startTime, endTime }: { doctor: { name: string }, patient: { name: string }, date: string, startTime: string, endTime: string }): string {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Health&Med - Nova consulta agendada</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background-color: #4CAF50;
          color: #ffffff;
          text-align: center;
          padding: 20px;
          font-size: 24px;
        }
        .content {
          padding: 20px;
          line-height: 1.6;
          color: #333333;
        }
        .footer {
          background-color: #f4f4f4;
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #666666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          Nova consulta agendada
        </div>
        <div class="content">
          <p>Olá, Dr. ${doctor.name}!</p>
          <p>Você tem uma nova consulta marcada!</p>
          <p><strong>Paciente:</strong> ${patient.name}</p>
          <p><strong>Data e horário:</strong> ${date} às ${startTime} - ${endTime}</p>
          <p>Por favor, verifique sua agenda para confirmar a consulta e preparar-se adequadamente.</p>
        </div>
        <div class="footer">
          &copy; 2024 Health&Med. Todos os direitos reservados.
        </div>
      </div>
    </body>
    </html>
    `
  }
}
