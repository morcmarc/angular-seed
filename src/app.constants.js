module.exports = (function() {
  'use strict';

  angular
    .module('myApp')
    .constant('version', require('../package.json').version);
})();