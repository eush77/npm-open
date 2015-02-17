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

    var cwd;

    opn.once(function (url) {
      var msg = '/' + path.relative(process.cwd(), cwd) + ', ' + url;
      t.equal(url, theUrl, msg);
      expectThisUrl(theUrl, tests)(t);
    });

    tests.shift()(function (dir) {
      return cwd = dir;
    });
  };
};


test('npm-open', expectThisUrl('https://github.com/eush77/npm-open', [
  function (_) { npmOpen(_(process.cwd())); },
  function (_) { npmOpen(_(__dirname)); },
]));

test('npm-open --npm', expectThisUrl('http://npm.im/npm-open', [
  function (_) { npmOpen.npm(_(process.cwd())); },
  function (_) { npmOpen.npm(_(__dirname)); },
]));

test('npm-open <directory>', expectThisUrl('http://fizzbuzz.io', [
  function (_) { npmOpen(_(path.join(__dirname, 'fizzbuzz'))); },
  function (_) { npmOpen(_(path.join(__dirname, 'fizzbuzz/lib'))); },
]));

test('npm-open --npm <directory>', expectThisUrl('http://npm.im/fizzbuzz', [
  function (_) { npmOpen.npm(_(path.join(__dirname, 'fizzbuzz'))); },
  function (_) { npmOpen.npm(_(path.join(__dirname, 'fizzbuzz/lib'))); },
]));
