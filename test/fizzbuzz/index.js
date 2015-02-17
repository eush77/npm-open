'use strict';

var fizz = require('./lib/fizz')
  , buzz = require('./lib/buzz');

module.exports = function (n) {
  for (var x = 1; x <= n; ++x) {
    console.log(fizz(x) + buzz(x) || x);
  }
};
