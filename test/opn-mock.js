'use strict';

var EventEmitter = require('events').EventEmitter;


var prohibit = function () {
  throw new Error('Unexpected opn call.');
};


var lock = function (ee) {
  ee.once('opn', prohibit);
};


var unlock = function (ee) {
  ee.removeListener('opn', prohibit);
};


exports.install = function () {
  var ee = new EventEmitter();

  require('opn');
  require.cache[require.resolve('opn')].exports = function () {
    var args = [].slice.call(arguments);
    ee.emit.apply(ee, ['opn'].concat(args));
  };

  return {
    once: function (listener) {
      unlock(ee);
      ee.once('opn', function () {
        lock(ee);
        listener.apply(this, arguments);
      });
    }
  };
};
