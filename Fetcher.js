// export default class Fetcher {
//  constructor(params) {

//  }
//}

import WS from 'ws'
import http from 'https'

export class Websocket {
  constructor(params) {
    this.ws = new WS(params.wsEndpoint)
    console.log('this.ws', this.ws)
  }
}

const tests = async () => {
  const wsParams = {
    'wsEndpoint': 'wss://ws-feed-public.sandbox.gdax.com'
  }
  const websocket = new Websocket(wsParams)
}

tests()
