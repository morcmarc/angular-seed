module.exports = (function() {
  'use strict';

  angular
    .module('NgSeed.Shared')
    .factory('Post', PostService);

    PostService.$inject = ['apiUri', '$resource'];

    function PostService(apiUri, $resource) {
      return $resource(apiUri + '/posts?userId=:userId');
    }
})();