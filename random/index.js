const { CloudEvent } = require('cloudevents-sdk')

// handle shared the logic for producing the Response event from the Request.
const handle = (data) => {
    return {
	a: Math.floor(Math.random() * Math.floor(data.a)),
	b: Math.floor(Math.random() * Math.floor(data.b))
    }
}

function event(cloudEvent) {
  return new CloudEvent({
      type: 'dev.mink.apply.samples.random',
      source: 'https://github.com/mattmoor/mink-apply-sample/random',
      time: new Date(),
      dataContentType: 'application/json',
      data: handle(cloudEvent.data)
  })
}

module.exports = { event }
