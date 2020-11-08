// Ideally the GCP buildpack would support GOOGLE_FUNCTION_SOURCE
// and I think we could dump this file. 
exports.divide = require('./divide').http
exports.swap = require('./swap').http
exports.random = require('./random').http
exports.add = require('./add').http
exports.exponent = require('./exponent').http
