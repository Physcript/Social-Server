

import { Request, Response, NextFunction } from 'express'
import { byUid } from '../../userCompletion/validate/find'
import { byUid as _byUid } from '../../user/validate/find'

import User from '../../../model/User'

import config from '../../../config'
import jwt from 'jsonwebtoken'

export async function login (req: Request, res: Response, next: NextFunction) {
  
  const { token } = req.headers

  const data = await jwt.verify(`${token}`,`${config.token.login}`, (err,decoded) => {
    if(err) {
      return
    }
    // fix this
    res.locals._user = decoded
    return decoded
  })

  if(data === undefined )
    {
      res.status(401).json({
        error: 'error token'
      })
      return
    }

  const _userCompletion = await byUid(res.locals._user.uid )
  res.locals.userCompletion = _userCompletion!.complete ??  false
  const user = await _byUid(res.locals._user.uid)
  res.locals.user = user

  next()
  return

}
