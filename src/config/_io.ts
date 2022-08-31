


import { Server } from 'socket.io'

module.exports = (httpServer: any) => {
  const io = new Server(httpServer, { cors: { origin: 'http://localhost:5173' } })
  io.on('connection', (socket) => {
    console.log('connected')
  })
}
