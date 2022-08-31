import bcrypt from 'bcrypt'

import { Request, Response, NextFunction } from 'express'
import { byEmail } from '../validate/find' 
import { __user } from '../../../class/user'

export async function login(req: Request, res: Response, next: NextFunction) {
  let { email,password } = req.body

  if(email.trim() === '' || password.trim() === '')
    {
      res.status(401).json({
        error: 'Invalid email/password'
      })
      return
    }
  const user = await byEmail(email ?? '')

  if(!user) 
    {
      res.status(401).json({
        error: 'Invalid email/password'
      })
      return
    }
  const isMatch = await bcrypt.compare(password, user!.password ?? '')

  if(!isMatch)
    {
      res.status(401).json({
        error: 'Invalid email/password'  
      })
      return
    }
  
  await __user.login(user, res)   

  next()
  return

}
