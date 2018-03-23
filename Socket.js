import Gdax from 'gdax'

const websocket = new Gdax.WebsocketClient('ETH-USD')

websocket.on('message', data => {
  typeFilter(data)
})

websocket.on('error', err => {
  console.log('recieved error', err)
})

websocket.on('close', () => {
  console.log('websocket closed')
})

let isLogging = true

const receivedOrders = []
const openOrders = []
const doneOrders = []

const typeFilter = (order) => {
  const type = order.type
  if (isLogging) console.log(order)
  switch (type) {
    case 'received':
      receivedOrders.push(order)
      break
    case 'open':
      openOrders.push(order)
      break
    case 'done':
      doneOrders.push(order)
      break
    default:
      break
  }
}

const timer = async () => {
  await delay(10000)
  isLogging = false
  console.log('receivedOrders size', receivedOrders.length)
  console.log('openOrders size', openOrders.length)
  console.log('doneOrders sisze', doneOrders.length)
}

const delay = (time) => {
  return new Promise(res => {
    setTimeout(res, time)
  })
}

timer()
