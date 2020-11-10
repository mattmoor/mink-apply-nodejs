// With GOOGLE_FUNCTION_SIGNATURE_TYPE=cloudevent the GCP function
// framework does not properly serialize the response CloudEvent,
// so it is useless.  Instead use the HTTP signature and wrap things
// ourselves using ToHTTP.
const ToHTTP = require('./http').ToHTTP

// Ideally the GCP buildpack would support GOOGLE_FUNCTION_SOURCE
// and I think we could dump this file (once above is addressed).
exports.divide = ToHTTP(require('./divide').event)
exports.swap = ToHTTP(require('./swap').event)
exports.random = ToHTTP(require('./random').event)
exports.add = ToHTTP(require('./add').event)
exports.exponent = ToHTTP(require('./exponent').event)
