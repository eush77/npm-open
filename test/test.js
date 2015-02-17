'use strict';

var opn = require('./mock/opn').install()
  , npmOpen = require('..');

var test = require('tape');


test('npm-open', function (t) {
  opn.once(function (url) {
    t.equal(url, 'https://github.com/eush77/npm-open');
    t.end();
  });

  npmOpen(process.cwd());
});


test('npm-open --npm', function (t) {
  opn.once(function (url) {
    t.equal(url, 'http://npm.im/npm-open');
    t.end();
  });

  npmOpen.npm(process.cwd());
});
