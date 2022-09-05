

import express from 'express'
import con from '../controller/follow'
import { create } from '../middleware/follow/functions/create'
import { login } from '../middleware/auth/functions/login'
import { check } from '../middleware/follow/functions/check'

const router = express.Router()

// middleware
// authetication 

router.post('/create',login,create,con.create)
router.post('/check',login,check,con.check)

export default router
