import 'module-alias/register'
import { brokerClient } from '@/main/adapters'
import brokerSetup from '@/main/config/listeners'

async function startServer (): Promise<void> {
  try {
    await brokerClient.connect()
    await brokerSetup(brokerClient)
    await brokerClient.run()
  } catch (error) {
    console.error('Error starting the server:', error)
    process.exit(1)
  }
}

void startServer()
