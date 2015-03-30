module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared')
    .constant('apiUri', 'http://jsonplaceholder.typicode.com');
})();