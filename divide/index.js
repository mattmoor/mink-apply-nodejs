const { CloudEvent } = require('cloudevents')

const handle = (data) => {
    return {
	a: Math.floor(data.a / data.b),
	b: data.a % data.b
    }
}

function event(cloudEvent) {
  return new CloudEvent({
      type: 'dev.mink.apply.samples.divide',
      source: 'https://github.com/mattmoor/mink-apply-sample/divide',
      time: new Date(),
      data: handle(cloudEvent.data)
  })
}

module.exports = { event }
