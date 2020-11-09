const { CloudEvent } = require('cloudevents-sdk')

// handle shared the logic for producing the Response event from the Request.
const handle = (data) => {
    return {
	a: Math.floor(data.a / data.b),
	b: data.a % data.b
    }
}

function event(cloudEvent) {
  const newCloudEvent = new CloudEvent({
      type: 'dev.mink.apply.samples.divide',
      source: 'https://github.com/mattmoor/mink-apply-sample/divide',
      time: new Date(),
      dataContentType: 'application/json',
      data: handle(cloudEvent.data)
  })

  return newCloudEvent
}

module.exports = { event }
