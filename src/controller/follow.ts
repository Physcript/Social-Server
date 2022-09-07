

import { Request, Response } from 'express'

export default {
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'Followed'
    })
  }),
  check: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        result: res.locals.result,
        count: res.locals.count
      } 
    })

    res.locals.result = undefined
    res.locals.count = undefined
  })
}
