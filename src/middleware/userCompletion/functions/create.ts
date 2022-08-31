
import { Request, Response, NextFunction } from 'express'
import User from '../../../model/User'

const fs = require('fs')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

cloudinary.config({
  cloud_name: 'dnnq8kne2',
  api_key: '711294436262969',
  api_secret: 'CnBFRYCGRZjN36Y4JGnC5tfA_Ic'
})


export async function create(req: Request, res: Response, next: NextFunction) {
  // update user by uid
  const _file = req.files
  let _data:any = await getUrl(_file)
  
  res.locals.public_id = _data.public_id
  res.locals.url = _data.url 

  next()
  return 
}

const getUrl = (files: any) => {
  const file = files[0]

  return new Promise((resolve,reject) => {
    let cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        folder: 'social_2022'
      },
      (error: any, result: any) => {
        if(result) {
          resolve(result)
        }
        else {
          reject(error)
        }
      }
    );
    streamifier.createReadStream(file.buffer).pipe(cld_upload_stream)
  })

}
