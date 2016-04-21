'use strict';

var Promise = require('bluebird');
var play = require('simplayer');

module.exports = function(path) {
  return new Promise(function(resolve) {
    var process = play(path);
    process.on('close', function(result) {
      resolve(result);
    });
    process.on('disconnect', function(result) {
      reject('Disconnect playing process');
    });
  });
};
