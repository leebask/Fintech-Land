import { io } from 'socket.io-client'
import { getCookie, toHex } from '.'
import { get } from 'react-hook-form'
export let wsCheckConnect = 0

export let wsConstants = null

export const connectWS = () => {
  const socket = io('https://socket.blockchainfintechland.com')
  socket.on('connect', () => {
    console.log('Đã kết nối thành công tới Socket.IO.')

    const message = {
      token: getCookie('token'),
    }
    socket.emit('join-room', message)
  })

  socket.on('message', (data) => {
    console.log('Nhận được thông điệp từ Socket.IO:', data)
  })

  // socket.on('haveApprovedBank', (data) => {
  //   console.log('Nhận được sự kiện "haveApprovedBank":', data)

  // })

  socket.on('error', (error) => {
    console.error('Lỗi kết nối Socket.IO:', error)
  })

  socket.on('disconnect', () => {
    console.log('Đã đóng kết nối Socket.IO.')
  })

  wsConstants = socket
}
