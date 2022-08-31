
import { Request, Response, NextFunction } from 'express'
import { byUid } from '../../user/validate/find'
import { byUid as _byUid } from '../validate/find'

export async function update(req: Request, res: Response, next: NextFunction){
  // url == avatar

  const { firstName,lastName,address,public_id,url } = req.body
  const uid = res.locals.user.uid ?? ''

  const user = await byUid(uid)
  const completion = await _byUid(uid)
  

  user!.firstName = firstName ?? ''
  user!.lastName = lastName ?? ''
  user!.address = address ?? ''
  user!.avatar = url ?? ''
  user!.avatar_id = public_id ?? ''
  
  completion!.complete = true
  
  await user!.save()
  await completion!.save()

  next()
  return
}
