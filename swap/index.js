const { CloudEvent } = require('cloudevents-sdk')

// handle shared the logic for producing the Response event from the Request.
const handle = (data) => {
    return {
	a: data.b,
	b: data.a
    }
}

function event(cloudEvent) {
  const newCloudEvent = new CloudEvent({
      type: 'dev.mink.apply.samples.swap',
      source: 'https://github.com/mattmoor/mink-apply-sample/swap',
      time: new Date(),
      dataContentType: 'application/json',
      data: handle(cloudEvent.data)
  })

  return newCloudEvent
}

module.exports = { event }
