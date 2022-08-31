

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true
  },
  password: String,
  firstName: {
    type: String,
    lowercase:true
  },
  lastName: {
    type: String,
    lowercase: true
  },
  address: {
    type: String,
    lowercase: true
  },
  avatar: String,
  avatar_id: String,
  uid: String,
  token: String,
}, { timestamps: true })


const User = mongoose.model('User', userSchema)

export default User

