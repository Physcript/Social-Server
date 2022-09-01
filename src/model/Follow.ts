

import mongoose from 'mongoose'


const followSchema = new mongoose.Schema({
  uid: {
    type: String,
    ref: 'User'
  },
  toFollow: {
    type: String,
    ref: 'User'
  }
})


const Follow = mongoose.model('Follow', followSchema)

export default Follow
