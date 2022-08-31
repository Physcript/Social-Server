
import { Request, Response } from 'express'


export default {
  create: ((req: Request, res: Response) => {
    res.status(200).json({
      message: 'create'
    })
  }),
  findUid: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        post: res.locals.post,
        count: res.locals.count
      } 
    })

    res.locals.post = undefined
    res.locals.count = undefined
  })
}
