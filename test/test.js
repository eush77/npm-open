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
      t.equal(url, theUrl, url);
      expectThisUrl(theUrl, tests)(t);
    });

    tests.shift()();
  };
};


test('npm-open', expectThisUrl('https://github.com/eush77/npm-open', [
  function () { npmOpen(process.cwd()); },
  function () { npmOpen(__dirname); },
]));

test('npm-open --npm', expectThisUrl('http://npm.im/npm-open', [
  function () { npmOpen.npm(process.cwd()); },
  function () { npmOpen.npm(__dirname); },
]));

test('npm-open <directory>', expectThisUrl('http://fizzbuzz.io', [
  function () { npmOpen(path.join(__dirname, 'fizzbuzz')); },
  function () { npmOpen(path.join(__dirname, 'fizzbuzz/lib')); },
]));

test('npm-open --npm <directory>', expectThisUrl('http://npm.im/fizzbuzz', [
  function () { npmOpen.npm(path.join(__dirname, 'fizzbuzz')); },
  function () { npmOpen.npm(path.join(__dirname, 'fizzbuzz/lib')); },
]));
