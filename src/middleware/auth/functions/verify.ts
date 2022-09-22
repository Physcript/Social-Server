
import { Request,Response,NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../../../config/'
import User from '../../../model/User'

export async function verify (req: Request, res: Response, next: NextFunction) {
    
  const { token } = req.headers ?? ''
  let { uid } = req.body ?? ''
  
  let _uid = undefined

  const data = await jwt.verify(`${token}`,`${config.token.login}`, (err,decoded) => {
    if(err) {
      return
      console.log('no token header found')
    }
    res.locals.decoded = decoded
    console.log('saving header token user')
    return decoded
  })

  const user = await User.findOne({ uid }) 
  if(user === null)
    {
      uid = ''
    }


  let decoded = await res.locals.decoded

  if(decoded !== undefined) 
    {
      _uid = res.locals.decoded.uid
    }
  else {
      _uid = uid
  }
  

  if(_uid === '' || _uid === undefined)
    {
      res.status(401).json({
        error: 'Invalid action'
      })
      return
    }
  
  res.locals.uid = _uid
  next()

}
