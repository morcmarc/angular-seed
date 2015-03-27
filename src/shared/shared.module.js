module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared', [
      'ngResource'
    ])
    .constant('apiUri', 'http://jsonplaceholder.typicode.com');

  var UserService = require('./services/user.service');
  var PostService = require('./services/post.service');
})();