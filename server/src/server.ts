import express, { Request, Response } from 'express'
import http from 'http'
import config from './config'
import db from './db/db'

const app = express()
const server = http.createServer(app)

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Server is healthy' })
})

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
