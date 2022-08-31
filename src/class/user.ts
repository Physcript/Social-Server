
import config from '../config'
import jwt from 'jsonwebtoken'
import User from '../model/User'
import UserCompletion from '../model/UserCompletion'

import { byUid } from '../middleware/userCompletion/validate/find'
 
abstract class _User {
  abstract create(email: string, password: string, uid: string): Promise<void>
                            // update later
  abstract login(user: any, res: any): Promise<any>

}

class __User extends _User {
  async create(email: string, password: string, uid: string)
    {
      const userCompletion = new UserCompletion({
        user_uid: uid  
      }) 
      const user = new User({
        email,
        password,
        uid,
        avatar: '',
        avatar_id: '',
        token: '',
        firstName: '',
        lastName: '',
        address: '',
      })
      await user.save()
      await userCompletion.save() 
      return
    }
  async login(user: any, res: any)
    {
      const _user = {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastNAme: user.lastName,
        uid: user.uid,
        avatar: user.avatar
      }

      const _userCompletion = await byUid(user!.uid ?? '')   

      const token = jwt.sign(_user, `${config.token.login}`)
      
      user.token = token
      await user.save()

      res.locals.user = _user
      res.locals.token = token
      res.locals.userCompletion = _userCompletion

      return
    }
}

export const __user = new __User()
