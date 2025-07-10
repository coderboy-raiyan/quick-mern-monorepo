import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import notFound from './middlewares/notFound'
import router from './routes'

const app: Application = express()

// parser
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }))

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Server is healthy' })
})

// routes
app.use('/api/v1', router)

// not found
app.use(notFound)

// global Error handler
app.use(globalErrorHandler)

export default app
