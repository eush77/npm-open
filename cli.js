#!/usr/bin/env node
'use strict';

var npmOpen = require('./');


var usage = function () {
  console.log('Usage:  npm-open [--npm] [<directory>]');
  return 1;
};


var openProject = function (directory, npm) {
  (npm ? npmOpen.npm : npmOpen)(directory);
  return 0;
};


var openCurrentProject = function (npm) {
  return openProject(process.cwd(), npm);
};


process.exitCode = (function (argv) {
  var npm;
  if (argv[0] == '--npm') {
    npm = true;
    argv.shift();
  }

  switch (argv.length) {
    case 0: return openCurrentProject(npm);
    case 1: return openProject(argv[0], npm);
    default: return usage();
  }
}(process.argv.slice(2)));
