

import { Request, Response, NextFunction } from 'express'
import { __post } from '../../../class/post'


export function main(req: Request, res: Response, next: NextFunction) {
  
  console.log('main view post')
  __post.mainPost(res, 'l855rka10bajj7pw6cua' )
  next()
  return
}
