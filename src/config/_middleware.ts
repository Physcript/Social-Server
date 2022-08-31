
import { Request, Response, NextFunction, Express } from 'express'

module.exports = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Method: ${req.method} Url: ${req.url}`)
    next()
  })
  return
}
