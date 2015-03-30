module.exports = (function() {
  'use strict';

  angular
    .module('myApp', [
      // - Libraries
      'ngRoute',
      'ngResource',
      'ngMaterial',
      // - Modules
      'myApp.shared',
      'myApp.home'
    ]);

  // - Generic
  var Constants = require('./app.constants');
  var Config    = require('./app.config');
  // - Modules
  var Shared    = require('./shared/shared.module');
  var Home      = require('./home/home.module');
})();