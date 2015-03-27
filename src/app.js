module.exports = (function() {
  'use strict';

  angular
    .module('myApp', [
      // --- Angular Providers
      'ngRoute',
      'ngResource',
      'ngMaterial',
      // --- Application Modules
      'myApp.shared',
      'myApp.home'
    ]);

  // Require modules for browserify
  var Constants = require('./app.constants');
  var Config    = require('./app.config');
  var Shared    = require('./shared/shared.module');
  var Home      = require('./home/home.module');
})();