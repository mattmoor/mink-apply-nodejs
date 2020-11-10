const { CloudEvent } = require('cloudevents')

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
