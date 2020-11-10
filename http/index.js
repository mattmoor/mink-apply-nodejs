const { Emitter, HTTP } = require('cloudevents')

const ToHTTP = function(fn) {
  return function (req, res) {
      try {
      const ce = HTTP.toEvent({headers: req.headers, body: req.body})
      console.log(`Accepted event: ${JSON.stringify(ce, null, 2)}`)
      rce = fn(ce)

      const message = HTTP.binary(rce);
      res.set(message.headers)
      res.status(200).send(message.body)
    } catch (err) {
      console.error(err)
      res.status(415)
        .header('Content-Type', 'application/json')
        .send(JSON.stringify(err))
    }
  }
}

module.exports = { ToHTTP }
