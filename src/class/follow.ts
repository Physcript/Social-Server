
import User from '../model/User'
import Follow from '../model/Follow'

interface IFollow {
  follow(uid: string, toFollow: string): Promise<any> 
  unfollow(uid: string, toUnFollow: string): Promise<any>
  follow_unfollow(uid: string, _uid: string): Promise<any>
  check(uid: string, toFollow: string): Promise<any>
  countFollow(_uid: string): Promise<any>
} 
class __Follow implements IFollow {
  constructor(){}
  
  async follow_unfollow(uid: string, _uid: string) {
    const isFollowed = await Follow.findOne({ uid, toFollow: _uid })
    if(isFollowed === null){
      await this.follow(uid,_uid)
    }
    else {
      await this.unfollow(uid,_uid)
    }
  }

  async follow(uid: string, toFollow: string){
    const user = await User.findOne({ uid:toFollow })
    if(user === null) return
    const follow = new Follow({
      uid,
      toFollow
    })

    await follow.save()
    return
  }
  async unfollow(uid: string, toUnFollow: string) {
      await Follow.deleteOne({ uid, toFollow: toUnFollow })

    return
  }

  async check(uid: string, toFollow: string) {
    
    const follow = await Follow.findOne({ uid, toFollow })
    if(follow)
      {
        return true
      }
    return false
  }

  async countFollow(_uid: string) {
    const count = await Follow.find({toFollow: _uid }).count()
    return count
  } 
}


export const __follow = new __Follow()
