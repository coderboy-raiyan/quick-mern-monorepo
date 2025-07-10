import http from 'http'
import app from './app'
import config from './config'
import db from './db/db'

const server = http.createServer(app)

async function bootstrap(): Promise<void> {
  try {
    await db()
    server.listen(config.port, () => {
      console.log('Server is listening on PORT ' + config.port)
    })
  } catch (error) {
    console.log(error)
  }
}

bootstrap()
