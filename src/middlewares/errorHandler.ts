import { NextFunction, Request, Response } from 'express'

const errorHandler = async (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err)
  return res.status(500).json({ msg: err.message })
}
export = errorHandler
