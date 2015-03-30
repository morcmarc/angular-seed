module.exports = (function() {
  'use strict';

  angular
    .module('myApp')
    .config(Config);

  Config.$inject = ['$routeProvider', '$resourceProvider', '$mdThemingProvider'];

  function Config($routeProvider, $resourceProvider, $mdThemingProvider) {
    RouteProviderConfig($routeProvider);
    ThemeProviderConfig($mdThemingProvider);
  }

  function RouteProviderConfig($routeProvider) {
    $routeProvider
      .otherwise({
        templateUrl  : 'partials/home.html',
        controller   : 'HomeController',
        controllerAs : 'vm'
      });
  }

  function ThemeProviderConfig($mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  }
})();