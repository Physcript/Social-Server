
import { Request, Response, NextFunction } from 'express'
import { __follow } from '../../../class/follow'

export async function create (req: Request, res: Response, next: NextFunction) {
  

  // need headers token
  // need toFollow id of followed one

  // validate via token
  const { toFollow } = req.body  
  const { uid } = res.locals.user ?? ''

  await __follow.follow_unfollow(uid,toFollow) 
  
  next()
  return
}


