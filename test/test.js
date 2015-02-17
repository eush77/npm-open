'use strict';

var opn = require('./mock/opn').install()
  , npmOpen = require('..');

var test = require('tape');

var path = require('path');


var expectThisUrl = function (theUrl, tests) {
  return function (t) {
    if (!tests.length) {
      t.end();
      return;
    }

    opn.once(function (url) {
      var msg = '/' + path.relative(process.cwd(), cwd);
      t.equal(url, theUrl, msg);
      expectThisUrl(theUrl, tests)(t);
    });

    var cwd;
    tests.shift()(function (dir) {
      return cwd = dir;
    });
  };
};


var testForThisUrl = function (method, url, tests) {
  test(method + ' -> ' + url, expectThisUrl(url, tests));
};


testForThisUrl('npm-open', 'https://github.com/eush77/npm-open', [
  function (_) { npmOpen(_(process.cwd())); },
  function (_) { npmOpen(_(__dirname)); },
]);

testForThisUrl('npm-open --npm', 'http://npm.im/npm-open', [
  function (_) { npmOpen.npm(_(process.cwd())); },
  function (_) { npmOpen.npm(_(__dirname)); },
]);

testForThisUrl('npm-open', 'http://fizzbuzz.io', [
  function (_) { npmOpen(_(path.join(__dirname, 'fizzbuzz'))); },
  function (_) { npmOpen(_(path.join(__dirname, 'fizzbuzz/lib'))); },
]);

testForThisUrl('npm-open --npm', 'http://npm.im/fizzbuzz', [
  function (_) { npmOpen.npm(_(path.join(__dirname, 'fizzbuzz'))); },
  function (_) { npmOpen.npm(_(path.join(__dirname, 'fizzbuzz/lib'))); },
]);
