import Gdax from 'gdax'

const websocket = new Gdax.WebsocketClient('ETH-USD')

websocket.on('message', data => {
  console.log('recieved message', data)
})

websocket.on('error', err => {
  console.log('recieved error', err)
})

websocket.on('close', () => {
  console.log('websocket closed')
})
