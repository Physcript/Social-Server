import { Request, Response } from 'express'

import Post from '../model/Post'

interface ICPost {
  create(req: Request, res: Response): Promise<any>,
  findUid(res: Response, uid: string, limit: number): Promise<any>
  mainPost(res: Response, uid: string, limit: number): Promise<any>
}

class __Post implements ICPost {
  
  constructor() {
  }
  
  async create(req: Request, res: Response) {
    // create post
    // create pid 
      
    let { post : _post, name, fromUid, toUid } = req.body   

    if(toUid === undefined || toUid === '') 
      {
        toUid = fromUid  
      }

    const pid = await Date.now().toString(36) + Math.random().toString(36).substr(2)
    
    const post = new Post({
      body: _post,
      name,
      fromUid,
      toUid,
      pid
    })

    await post.save()
    return 
  }

  async findUid(res: Response, uid: string, limit: number = 5 , skip: number = 0) {
    const count = await Post.find({toUid: uid}).count()
    const post = await Post.find({ toUid: uid }).sort({ createdAt: -1 }).limit(limit).skip(skip) 
    res.locals.post = post
    res.locals.count = count
    return
  }

  async mainPost(res: Response, uid: string, limit: number = 10) {
    
    // find post that i followed and my followed should be showned in main page
    // get list of i followed
    const myData = uid

    const post = await Post.aggregate([
      
      {
        $project: {
          "_id": "$_id",
          "body": "$body",
          "fromUid": "$fromUid",
          "toUid": "$toUid",
          "pid": "$pid",
          "createdAt": "$createdAt",
          "updatedAt": "$updatedAt"
        }
      },
      {
        $lookup: {
          from: 'follows',
          localField: 'fromUid',
          foreignField: 'uid',
          as: 'iFollowed'
        }
      },
      {
        $project: {
          _id: 1,
          body: 1,
          fromUid: 1,
          toUid: 1,
          pid: 1,
          createdAt: 1,
          updatedAt: 1,
          myFollow: ['$iFollowed.toFollow']
        }
      },
      {
        $unwind: '$myFollow'
      },
      {
        $match: {
          fromUid: {$elementMatch: {my: '$myFollow'} }
        }
      },
      {
        $project: {
          myFollow: 1,
          body: 1,
        }
      }
    ])
    console.log(post)
    return
  }  

} 


export const __post = new __Post()
