'use strict';

var npmconf = require('npmconf')
  , opn = require('opn');

var path = require('path');


var pkgFromDirectory = function (directory, cb) {
  npmconf.Conf().findPrefix(directory, function (err, prefix) {
    if (err) return cb(err);

    try {
      var pkgPath = path.resolve(prefix, 'package.json');
      var pkg = require(pkgPath);
      return cb(null, pkg);
    }
    catch (err) {
      return cb(err);
    }
  });
};


module.exports = function (directory) {
  pkgFromDirectory(directory, function (err, pkg) {
    if (err) throw err;
    opn(pkg.homepage);
  });
};
