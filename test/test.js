'use strict';

var opn = require('./mock/opn').install()
  , npmOpen = require('..');

var test = require('tape');


var expectThisUrl = function (theUrl, tests) {
  return function (t) {
    if (!tests.length) {
      t.end();
      return;
    }

    opn.once(function (url) {
      t.equal(url, theUrl, url);
      expectThisUrl(theUrl, tests)(t);
    });

    tests.shift()();
  };
};


test('npm-open', expectThisUrl('https://github.com/eush77/npm-open', [
  function () { npmOpen(process.cwd()); }
]));


test('npm-open --npm', expectThisUrl('http://npm.im/npm-open', [
  function () { npmOpen.npm(process.cwd()); }
]));