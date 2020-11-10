const { CloudEvent } = require('cloudevents')

const handle = (data) => {
    return {
	a: data.a + data.b,
	b: data.a - data.b
    }
}

function event(cloudEvent) {
  return new CloudEvent({
      type: 'dev.mink.apply.samples.add',
      source: 'https://github.com/mattmoor/mink-apply-sample/add',
      time: new Date(),
      data: handle(cloudEvent.data)
  })
}

module.exports = { event }
