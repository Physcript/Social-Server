


import mongoose from 'mongoose'

const userCompletion = new mongoose.Schema({
  user_uid: {
    type: String,
    ref: 'User'
  },
  complete: {
    type: Boolean,
    default: false
  }
})


const UserCompletion = mongoose.model('UserCompletion', userCompletion)
export default UserCompletion
