import Gdax from 'gdax'

const client = new Gdax.PublicClient()

const getOrderBook = async () => {
  try {
      const orderBook = await client.getProductOrderBook('ETH-USD', { level: 3 })
      console.log('orderBook', orderBook)
  } catch (err) {
    console.log('error in fetch req', err)
  }
}

getOrderBook()
