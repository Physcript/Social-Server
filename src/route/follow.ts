

import express from 'express'
import con from '../controller/follow'
import { create } from '../middleware/follow/functions/create'
import { login } from '../middleware/auth/functions/login'


const router = express.Router()

// middleware
// authetication 

router.post('/create',login,create,con.create)


export default router
