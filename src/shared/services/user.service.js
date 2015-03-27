module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared')
    .factory('User', UserService);

    UserService.$inject = ['apiUri', '$resource'];

    function UserService(apiUri, $resource) {
      return $resource(apiUri + '/users/:userId');
    }
})();