module.exports = (function() {
  'use strict';

  angular
    .module('myApp.shared', []);

  var Constants   = require('./shared.constants');
  var UserService = require('./services/user.service');
  var PostService = require('./services/post.service');
})();