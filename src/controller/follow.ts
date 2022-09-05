

import { Request, Response } from 'express'

export default {
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'Followed'
    })
  }),
  check: ((req: Request, res: Response) => {
    res.status(200).json({
      message: res.locals.result 
    })
  })
}
