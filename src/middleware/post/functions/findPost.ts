
import { Request,Response,NextFunction } from 'express'
import { __post } from '../../../class/post'


export async function findPost(req: Request, res:Response, next: NextFunction) {
  const { limit } = req.body

  const { uid } = req.params ?? ''

  if(limit == undefined)
    {
      await __post.findUid(res,uid)
    }
    else
    {
      await __post.findUid(res,uid,limit)
    }
  next()
  return
}
