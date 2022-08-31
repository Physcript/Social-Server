


import express from 'express'

import con from '../controller/auth'

import { login } from '../middleware/auth/functions/login'

const router = express.Router()

router.get('/auth',login,con.authenticate)


export default router
