module.exports = (function() {
  'use strict';

  angular
    .module('NgSeed')
    .controller('AppController', AppController);

  AppController.$inject = ['$scope', '$mdSidenav', 'version', 'User', 'Post'];

  function AppController($scope, $mdSidenav, version, User, Post) {
    var uid = Math.floor((Math.random()*10+1));
    
    $scope.user  = User.get({ userId: uid });
    $scope.posts = Post.query({ userId: uid });
    
    $scope.openSidenav = function() {
      $mdSidenav('left').open();
    };
  }
})();