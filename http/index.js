const { HTTPEmitter, HTTPReceiver } = require('cloudevents-sdk')
const receiver = new HTTPReceiver()

const ToHTTP = function(fn) {
  return function (req, res) {
    try {
      const ce = receiver.accept(req.headers, req.body)
      console.log(`Accepted event: ${JSON.stringify(ce.format(), null, 2)}`)
      rce = fn(ce)
      res.set(HTTPEmitter.headers(rce))
      res.status(200).send(JSON.stringify(rce.data, null, 2))
    } catch (err) {
      console.error(err)
      res.status(415)
        .header('Content-Type', 'application/json')
        .send(JSON.stringify(err))
    }
  }
}

module.exports = { ToHTTP }
