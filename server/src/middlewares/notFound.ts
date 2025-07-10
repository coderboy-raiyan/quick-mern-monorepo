/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    success: false,
    message: 'API not found!',
    error: '',
  })
}

export default notFound
