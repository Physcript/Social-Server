


import { Request, Response, NextFunction } from 'express'
import { isValid } from '../validate/create'
import { __post } from '../../../class/post'

export const create = async (req: Request, res: Response, next: NextFunction) => {
  
  const { post } = req.body
  const error = isValid(post)
  
  if(Object.keys(error).length >= 1) 
    {
      res.status(401).json({
        error: 'Empty body'
      })
      return
    }

  await __post.create(req,res) 
  
  next()
  return
}
