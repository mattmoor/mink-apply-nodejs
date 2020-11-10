const { CloudEvent } = require('cloudevents')

const handle = (data) => {
    return {
	a: Math.pow(data.a, data.b),
	b: Math.pow(data.b, data.a)
    }
}

function event(cloudEvent) {
  return new CloudEvent({
      type: 'dev.mink.apply.samples.exponent',
      source: 'https://github.com/mattmoor/mink-apply-sample/exponent',
      time: new Date(),
      data: handle(cloudEvent.data)
  })
}

module.exports = { event }
