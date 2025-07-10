/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express'
import status from 'http-status'
import config from '../config'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = status.INTERNAL_SERVER_ERROR
  const message = 'Something went wrong!'
  const errorSources = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ]

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.node_env === 'development' ? err?.stack : null,
  })
}

export default globalErrorHandler
