
import { Request,Response } from 'express'


export default {
  authenticate: ((req: Request, res: Response) => {
    res.status(200).json({
      message: {
        USER: res.locals.user,
        COMPLETION: res.locals.userCompletion
      }
    })
    res.locals.user = undefined
    res.locals.userCompletion = undefined
  })
}
