


import con from '../controller/user'
import express from 'express'
import multer from 'multer'

import { create } from '../middleware/user/functions/create'
import { login } from '../middleware/user/functions/login'
import { logout } from '../middleware/user/functions/logout'
import { create as complete_create } from '../middleware/userCompletion/functions/create'
import { update } from '../middleware/userCompletion/functions/update'
import { findMe } from '../middleware/user/functions/findMe'
import { login as auth_login } from '../middleware/auth/functions/login'

const router = express.Router()
const upload = multer()

router.post('/create',create,con.create)
router.post('/login',login,con.login)
router.post('/complete',upload.array('img'),complete_create, con.complete)
router.post('/complete_update',auth_login,update,con.complete_update)
router.post('/logout',auth_login,logout,con.logout)
router.post('/:uid',findMe,con.findOne)

export default router



