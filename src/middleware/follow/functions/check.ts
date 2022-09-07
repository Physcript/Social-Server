

import { Request, Response, NextFunction } from 'express'
import { __follow } from '../../../class/follow'

export async function check (req: Request, res: Response, next: NextFunction) {
  const { toFollow } = req.body ?? ''
  const { uid } = res.locals.user ?? ''

  const result = await __follow.check(uid,toFollow)
  const count = await __follow.countFollow(toFollow)

  res.locals.result = await result
  res.locals.count = await count

  next()
  return

}
