import Gdax from 'gdax'

const client = new Gdax.PublicClient()

const getOrderBook = async () => {
  try {
      const orderBook = await client.getProductOrderBook('ETH-USD', { level: 3 })
      return orderbook
  } catch (err) {
    console.log('error in fetch req', err)
  }
}

const daemon = async () => {
    try {
       orderbook = await getOrderBook()
       spread = calcSpread(orderbook)
    }

    catch (err) {
	console.log('error in order book daemon', err) 
    }

    finally {
        return await daemon()
    }
}

getOrderBook()
