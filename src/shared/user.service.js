module.exports = (function() {
  'use strict';

  angular
    .module('NgSeed.Shared')
    .factory('User', UserService);

    UserService.$inject = ['apiUri', '$resource'];

    function UserService(apiUri, $resource) {
      return $resource(apiUri + '/users/:userId');
    }
})();