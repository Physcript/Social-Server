


import express from 'express'
import con from '../controller/post'

import { create } from '../middleware/post/functions/create'
import { findPost } from '../middleware/post/functions/findPost'
import { main } from '../middleware/post/functions/main'

const router = express.Router()

// http://localhost:1337/api/p/

router.post('/create',create ,con.create)
router.post('/:uid',findPost,con.findUid)
router.get('/main', main, con.main)

export default router
