

import { Request, Response, NextFunction } from 'express'
import { __post } from '../../../class/post'


export async function main(req: Request, res: Response, next: NextFunction) {
  const uid = res.locals.uid 
  let post = await __post.mainPost(res, uid )
  res.locals.post = post
  next()
  return
}
