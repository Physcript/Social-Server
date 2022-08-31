
import User from '../../../model/User'

export const byEmail = async (email: string) => {
  const user = await User.findOne({ email })
  return user
}

export const byUid = async (uid: string) => {
  const user = await User.findOne({ uid })
  return user
}
