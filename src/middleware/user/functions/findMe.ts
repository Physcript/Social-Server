
import { Request, Response, NextFunction } from 'express'

import { byUid } from '../validate/find'

export async function findMe(req:Request, res:Response, next:NextFunction) {
  
  const { uid } = req.params ?? ''
  const user: any = await byUid(uid)
  
  user.password = ''
  user.token = ''
  
  res.locals.user = user

  next()
  return 
}
