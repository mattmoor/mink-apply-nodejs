const { CloudEvent } = require('cloudevents')

// handle shared the logic for producing the Response event from the Request.
const handle = (data) => {
    return {
	a: data.b,
	b: data.a
    }
}

function event(cloudEvent) {
  return new CloudEvent({
      type: 'dev.mink.apply.samples.swap',
      source: 'https://github.com/mattmoor/mink-apply-sample/swap',
      time: new Date(),
      data: handle(cloudEvent.data)
  })
}

module.exports = { event }
