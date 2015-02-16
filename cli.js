#!/usr/bin/env node
'use strict';

var npmOpen = require('./');


var usage = function () {
  console.log('Usage:  npm-open' +
              '        npm-open <directory>');
  return 1;
};


var openProject = function (directory) {
  npmOpen(directory);
  return 0;
};


var openCurrentProject = function () {
  return openProject(process.cwd());
};


process.exitCode = (function (argv) {
  switch (argv.length) {
    case 0: return openCurrentProject();
    case 1: return openProject(argv[0]);
    default: return usage();
  }
}(process.argv.slice(2)));
