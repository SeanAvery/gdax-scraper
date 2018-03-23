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

const isLogging = true

const receivedOrders = []
const openOrders = []
const closedOrders = []

const typeFilter = (order) => {
  const type = order.type
  if (isLogging) console.log(type)
  switch (type) {
    case 'received':
      receivedOrders.push(order)
      break
    case 'open':
      openOrders.push(order)
      break
    case 'closed':
      closedOrders.push(order)
      break
    default:
      break
  }
}

const timer = async () => {
  await delay(10000)
  isLogging = false
}

const delay = (time) {
  return new Promise(res => {
    setTimeout(res, time)
  })
}
