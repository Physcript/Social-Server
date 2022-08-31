

import {Request,Response,NextFunction} from 'express'
export async function logout(req: Request, res: Response, next: NextFunction) {

  const user = await res.locals.user
  user.token = ''
  user.save()
  next()
  return
}


