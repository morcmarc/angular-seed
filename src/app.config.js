module.exports = (function() {
  'use strict';

  angular
    .module('myApp')
    .config(['$routeProvider', RouteProviderConfig]);

  function RouteProviderConfig($routeProvider) {
    $routeProvider
      .otherwise({
        templateUrl  : 'partials/home.html',
        controller   : 'HomeController',
        controllerAs : 'vm'
      });
  }

})();