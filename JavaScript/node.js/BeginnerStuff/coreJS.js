var util = require('util');

var name = 'Joey';
var greeting = util.format('Hello, %s', name);

util.log(greeting);
