
import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
  body: String,
  name: String,
  fromUid: String,
  toUid: String,
  pid: String
},{timestamps: true})


const Post = mongoose.model('Post', postSchema)
export default Post
