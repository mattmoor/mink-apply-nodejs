const { CloudEvent, HTTPEmitter, HTTPReceiver } = require('cloudevents-sdk')
const receiver = new HTTPReceiver()

// handle shared the logic for producing the Response event from the Request.
const handle = (data) => {
    return {
	a: Math.floor(Math.random() * Math.floor(data.a)),
	b: Math.floor(Math.random() * Math.floor(data.b))
    }
}

const event = (cloudEvent, res) => {
  const newCloudEvent = new CloudEvent({
      type: 'dev.mink.apply.samples.random',
      source: 'https://github.com/mattmoor/mink-apply-sample/random',
      time: new Date(),
      dataContentType: 'application/json',
      data: handle(cloudEvent.data)
  })

  res.set(HTTPEmitter.headers(newCloudEvent))
  res.status(200).send(JSON.stringify(newCloudEvent.data, null, 2))
}

const http = function (req, res) {
  try {
    const ce = receiver.accept(req.headers, req.body)
    console.log(`Accepted event: ${JSON.stringify(ce.format(), null, 2)}`)
    event(ce, res)
  } catch (err) {
    console.error(err)
    res.status(415)
      .header('Content-Type', 'application/json')
      .send(JSON.stringify(err))
  }
}

module.exports = { event, http }
