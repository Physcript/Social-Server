

import UserCompletion from '../../../model/UserCompletion'

export async function byUid(user_uid: string) {
  const _userComplete = await UserCompletion.findOne({user_uid})
  return _userComplete
}
