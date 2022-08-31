
import bcrypt from 'bcrypt'

import { Request, Response, NextFunction } from 'express'
import { isValid } from '../validate/create'
import { __user } from '../../../class/user'

export const create = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  const isvalid: Object = await isValid(email,password)

  if(Object.keys(isvalid).length >= 1)
    {
      res.status(401).json({
        error: isvalid
      }) 
      return
    }
  
  const encrypt = await bcrypt.hash(password, 8)
  const uid = await Date.now().toString(36) + Math.random().toString(36).substr(2)
  __user.create(email,encrypt,uid) 
  next()
  return
}
