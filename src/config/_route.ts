
import userRoute from '../route/user'
import postRoute from '../route/post'
import authRoute from '../route/auth'

import { Express, Request, Response, NextFunction } from 'express'

module.exports = (app: Express) => {
  
  app.use('/api/u', userRoute)
  app.use('/api/p', postRoute)
  app.use('/api/a', authRoute)

  app.use((req: Request, res: Response) => {
    res.status(404).json({
      error: 'Not found'
    })
  })

}
