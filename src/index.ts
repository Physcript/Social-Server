

import config from './config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import { createServer } from 'http'


const app = express()
const httpServer = createServer(app)
const corsOptions = { origin: 'http://localhost:5173', credentials: true }

// use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

//cors
require('./config/_cors')(app)
//middleware
require('./config/_middleware')(app)
//io
require('./config/_io')(httpServer)
//route
require('./config/_route')(app)


mongoose
  .connect(`${config.database.url}`, config.database.options)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('connection error', err))
httpServer.listen(config.server.port, () => console.log(`Server up`))

