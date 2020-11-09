const { CloudEvent } = require('cloudevents-sdk')

// handle shared the logic for producing the Response event from the Request.
const handle = (data) => {
    return {
	a: Math.pow(data.a, data.b),
	b: Math.pow(data.b, data.a)
    }
}

function event(cloudEvent) {
  const newCloudEvent = new CloudEvent({
      type: 'dev.mink.apply.samples.exponent',
      source: 'https://github.com/mattmoor/mink-apply-sample/exponent',
      time: new Date(),
      dataContentType: 'application/json',
      data: handle(cloudEvent.data)
  })

  return newCloudEvent
}

module.exports = { event }
