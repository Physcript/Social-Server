
import User from '../../../model/User'
import validator from 'validator'
export const isValid = async (email: string, password: string) => {
  let error: any = {}

  const user = await User.findOne({ email })

  if(user !== null)
    {
      error['email'] = 'Email already exist'
    }

  if(!validator.isEmail(email))
    {
      error['email'] = 'Email invalid'    
    }
  
  if(password.includes(' '))
    {
      error['password'] = 'Invalid password'     
    }

  if(password.trim().length <= 5)
    {
      error['password'] = 'Min of 6 Password character'
    }

  if(password.trim() === '')
    {
      error['password'] = 'Password required'
    }
  
  if(email.trim() === '')
    {
      error['email'] = 'Email required'
    }
  return error
}
