const { CloudEvent } = require('cloudevents')

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
      data: handle(cloudEvent.data)
  })
}

module.exports = { event }
