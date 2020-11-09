// Trying to sort out why the GCP buildpack doesn't honor
// the (cloudevent) => (cloudevent) signature.
const ToHTTP = require('./http').ToHTTP

// Ideally the GCP buildpack would support GOOGLE_FUNCTION_SOURCE
// and I think we could dump this file. 
exports.divide = ToHTTP(require('./divide').event)
exports.swap = ToHTTP(require('./swap').event)
exports.random = ToHTTP(require('./random').event)
exports.add = ToHTTP(require('./add').event)
exports.exponent = ToHTTP(require('./exponent').event)
