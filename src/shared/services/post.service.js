module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared')
    .factory('Post', PostService);

    PostService.$inject = ['apiUri', '$resource'];

    function PostService(apiUri, $resource) {
      return $resource(apiUri + '/posts?userId=:userId');
    }
})();